/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { withRoleAuth } from '@/app/utils/authMiddleware';
import { book_tran_status, record_status } from '@/generated/prisma';

export const POST = withRoleAuth(['librarian'])(async (req: Request) => {
    const prisma = new PrismaClient();
    const librarianId = (req as any).user?.userId;
    const librarianEmail = (req as any).user?.email;

    try {
        const body = await req.json();

        const {
            title,
            author,
            isbn,
            year,
            genre,
            image_url,
            description,
            quantity,
        } = body;

        // ✅ Validate required fields
        if (!title || !author || !librarianId || !quantity) {
            return NextResponse.json(
                { success: false, message: 'Title, author, and quantity are required fields.' },
                { status: 400 }
            );
        }

        // ✅ Validate quantity
        const quantityNum = Number(quantity);
        if (isNaN(quantityNum) || quantityNum < 1) {
            return NextResponse.json(
                { success: false, message: 'Quantity must be a positive number.' },
                { status: 400 }
            );
        }

        // ✅ Validate year if provided
        let yearValue = null;
        if (year) {
            yearValue = Number(year);
            if (isNaN(yearValue) || yearValue < 1800 || yearValue > new Date().getFullYear() + 1) {
                return NextResponse.json(
                    { success: false, message: 'Year must be a valid year between 1800 and next year.' },
                    { status: 400 }
                );
            }
        }

        const result = await prisma.$transaction(async (tx) => {
            // Step 1: Check if a book exists
            const existingBook = await tx.books.findFirst({
                where: {
                    title: title.trim(),
                    author: author.trim(),
                },
            });

            if (existingBook) {
                if (existingBook.record_status === record_status.inactive) {
                    // ✅ Reactivate
                    const updatedBook = await tx.books.update({
                        where: { book_id: existingBook.book_id },
                        data: {
                            record_status: record_status.active,
                            librarian_id: parseInt(librarianId),
                            updated_at: new Date(),
                        },
                    });

                    const existingCopies = await tx.book_tran.findMany({
                        where: { book_id: existingBook.book_id },
                        orderBy: { tran_id: 'asc' },
                    });

                    const existingCopiesCount = existingCopies.length;
                    let addedCopies = 0;

                    if (existingCopiesCount < quantityNum) {
                        const copiesToAdd = quantityNum - existingCopiesCount;
                        const bookCopies = Array.from({ length: copiesToAdd }, () => ({
                            book_id: existingBook.book_id,
                            status: book_tran_status.available,
                            user_id: null,
                        }));

                        await tx.book_tran.createMany({ data: bookCopies });
                        addedCopies = copiesToAdd;

                        await tx.book_tran.updateMany({
                            where: { book_id: existingBook.book_id },
                            data: { status: book_tran_status.available, record_status: 'active' }
                        });

                    } else if (existingCopiesCount > quantityNum) {
                        const copiesToActivate = existingCopies.slice(0, quantityNum).map(c => c.tran_id);

                        await tx.book_tran.updateMany({
                            where: { tran_id: { in: copiesToActivate } },
                            data: { status: book_tran_status.available }
                        });

                    } else {
                        await tx.book_tran.updateMany({
                            where: { book_id: existingBook.book_id },
                            data: { status: book_tran_status.available }
                        });
                    }

                    return {
                        updatedBook,
                        reactivated: true,
                        addedCopies,
                        totalCopies: Math.max(quantityNum, existingCopiesCount)
                    };
                }
                else {
                    throw new Error('Book already exists in the inventory.');
                }
            }

            // Step 2: Create new book
            const newBook = await tx.books.create({
                data: {
                    title: title.trim(),
                    author: author.trim(),
                    isbn: isbn ? isbn.trim() : null,
                    year: yearValue,
                    genre: genre ? genre.trim() : null,
                    image_url: image_url ? image_url.trim() : null,
                    description: description ? description.trim() : null,
                    librarian_id: parseInt(librarianId),
                    created_at: new Date(),
                    updated_at: new Date(),
                    record_status: record_status.active,
                },
            });

            // Step 3: Create copies
            const bookCopies = Array.from({ length: quantityNum }, () => ({
                book_id: newBook.book_id,
                status: book_tran_status.available,
                user_id: null,
            }));

            await tx.book_tran.createMany({
                data: bookCopies,
            });

            return { newBook, reactivated: false, totalCopies: quantityNum };
        });

        // ✅ Success logging
        if (result.reactivated) {
            await prisma.logs.create({
                data: {
                    description: `Librarian (${librarianEmail}) reactivated book "${result.updatedBook?.title}" — added ${result.addedCopies} copies`,
                    user_id: librarianId,
                },
            });

            return NextResponse.json({
                success: true,
                message: `Inactive book reactivated. ${(result.addedCopies ?? 0) > 0 ? `${result.addedCopies ?? 0} copies added.` : 'No new copies added.'}`,
                book: result.updatedBook,
                totalCopies: result.totalCopies
            });
        }

        await prisma.logs.create({
            data: {
                description: `Librarian (${librarianEmail}) added book "${result.newBook?.title}" with ${result.totalCopies} copies`,
                user_id: librarianId,
            },
        });

        return NextResponse.json({
            success: true,
            message: `Book "${result.newBook?.title}" added successfully with ${result.totalCopies} copies.`,
            book: result.newBook,
            quantity: result.totalCopies
        });

    } catch (error) {
        console.error('Error adding/updating book:', error);

        // ❌ Failure logging
        if (librarianId) {
            await prisma.logs.create({
                data: {
                    description: `Book add failed by ${librarianEmail} — Reason: ${error instanceof Error ? error.message : 'Unknown error'}`,
                    user_id: librarianId,
                },
            });
        }

        let errorMessage = 'Server error occurred while adding book';
        let statusCode = 500;

        if (error instanceof Error) {
            if (error.message === 'Book already exists in the catalog.' || error.message === 'Book already exists in the inventory.') {
                errorMessage = 'A book with this title and author already exists.';
                statusCode = 409;
            } else if (error.message.includes('foreign key constraint')) {
                errorMessage = 'Invalid librarian ID provided.';
                statusCode = 400;
            }
        }

        return NextResponse.json(
            { success: false, message: errorMessage },
            { status: statusCode }
        );

    } finally {
        await prisma.$disconnect();
    }
});
