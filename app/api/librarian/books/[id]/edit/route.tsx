/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import { book_tran_status, PrismaClient } from '@/generated/prisma';
import { withRoleAuth } from '@/app/utils/authMiddleware';

const prisma = new PrismaClient();

export const PUT = withRoleAuth(['librarian'])(async (req: NextRequest, { params }: { params: { id: string } }) => {
    const librarianId = (req as any).user?.userId;
    const librarianEmail = (req as any).user?.email;

    try {
        const { id } = await params;
        const bookId = parseInt(id);
        if (isNaN(bookId)) {
            // ❌ Log invalid ID attempt
            await prisma.logs.create({
                data: {
                    description: `Book update failed by ${librarianEmail} — Reason: Invalid book ID (${id})`,
                    user_id: librarianId,
                },
            });

            return NextResponse.json({ success: false, message: 'Invalid book ID' }, { status: 400 });
        }

        const body = await req.json();

        if (!body.title || !body.author) {
            // ❌ Log missing fields
            await prisma.logs.create({
                data: {
                    description: `Book update failed by ${librarianEmail} — Reason: Title and author are required`,
                    user_id: librarianId,
                },
            });

            return NextResponse.json({
                success: false,
                message: 'Title and author are required'
            }, { status: 400 });
        }

        const newQuantity = Math.max(1, Number(body.quantity) || 1);

        let yearValue = null;
        if (body.year) {
            yearValue = Number(body.year);
            if (isNaN(yearValue) || yearValue < 1800 || yearValue > new Date().getFullYear() + 1) {
                // ❌ Log invalid year
                await prisma.logs.create({
                    data: {
                        description: `Book update failed by ${librarianEmail} — Reason: Invalid year (${body.year})`,
                        user_id: librarianId,
                    },
                });

                return NextResponse.json(
                    { success: false, message: 'Year must be a valid year between 1800 and next year.' },
                    { status: 400 }
                );
            }
        }

        const result = await prisma.$transaction(async (tx) => {
            const existingBook = await tx.books.findUnique({
                where: { book_id: bookId },
            });

            if (!existingBook) {
                throw new Error('Book not found');
            }

            const duplicateBook = await tx.books.findFirst({
                where: {
                    title: body.title.trim(),
                    author: body.author.trim(),
                    book_id: { not: bookId }
                },
            });

            if (duplicateBook) {
                throw new Error('A book with this title and author already exists.');
            }

            const updatedBook = await tx.books.update({
                where: { book_id: bookId },
                data: {
                    title: body.title.trim(),
                    author: body.author.trim(),
                    isbn: body.isbn ? body.isbn.trim() : null,
                    year: yearValue,
                    genre: body.genre ? body.genre.trim() : null,
                    image_url: body.image_url ? body.image_url.trim() : null,
                    description: body.description ? body.description.trim() : null,
                    updated_at: new Date(),
                },
            });

            const currentCopies = await tx.book_tran.findMany({
                where: { book_id: bookId },
                orderBy: { tran_id: 'asc' }
            });

            const currentQuantity = currentCopies.length;

            if (newQuantity > currentQuantity) {
                const copiesToAdd = newQuantity - currentQuantity;
                const newCopies = Array.from({ length: copiesToAdd }, () => ({
                    book_id: bookId,
                    status: book_tran_status.available,
                    user_id: null,
                }));

                await tx.book_tran.createMany({ data: newCopies });
                await tx.book_tran.updateMany({
                    where: { book_id: bookId },
                    data: { record_status: 'active' },
                });

            } else if (newQuantity < currentQuantity) {
                const copiesToMark = currentQuantity - newQuantity;
                const availableCopies = await tx.book_tran.findMany({
                    where: {
                        book_id: bookId,
                        status: 'available',
                        user_id: null,
                        record_status: 'active'
                    },
                });
                
                if (availableCopies.length < copiesToMark) {
                    const borrowedCount = currentQuantity - availableCopies.length;
                    throw new Error(
                        `Cannot reduce quantity to ${newQuantity}. Only ${availableCopies.length} of ${currentQuantity} copies are available to deactivate. ${borrowedCount} copies are currently borrowed or reserved.`
                    );
                }

                const idsToDeactivate = availableCopies
                    .slice(0, copiesToMark)
                    .map(copy => copy.tran_id);

                await tx.book_tran.updateMany({
                    where: { tran_id: { in: idsToDeactivate } },
                    data: { record_status: 'inactive' }
                });
            }

            const finalCopies = await tx.book_tran.count({
                where: { book_id: bookId }
            });

            return { updatedBook, quantity: finalCopies };
        });

        // ✅ Log success
        await prisma.logs.create({
            data: {
                description: `Librarian (${librarianEmail}) updated book "${result.updatedBook.title}" to have ${result.quantity} copies`,
                user_id: librarianId,
            },
        });

        return NextResponse.json({
            success: true,
            message: `Book "${result.updatedBook.title}" updated successfully with ${result.quantity} copies.`,
            book: result.updatedBook,
            quantity: result.quantity
        });

    } catch (err) {
        console.error('Update error:', err);

        // ❌ Log failure
        if (librarianId) {
            await prisma.logs.create({
                data: {
                    description: `Book update failed by ${librarianEmail} — Reason: ${err instanceof Error ? err.message : 'Unknown error'}`,
                    user_id: librarianId,
                },
            });
        }

        let errorMessage = 'Failed to update book';
        let statusCode = 500;

        if (err instanceof Error) {
            if (err.message === 'Book not found') {
                errorMessage = 'Book not found';
                statusCode = 404;
            } else if (err.message.includes('Cannot reduce quantity')) {
                errorMessage = err.message;
                statusCode = 400;
            } else if (err.message === 'A book with this title and author already exists.') {
                errorMessage = 'A book with this title and author already exists.';
                statusCode = 409;
            } else if (err.message.includes('foreign key constraint')) {
                errorMessage = 'Cannot update book - it has active transactions';
                statusCode = 400;
            }
        }

        return NextResponse.json({
            success: false,
            message: errorMessage
        }, { status: statusCode });

    } finally {
        await prisma.$disconnect();
    }
});
