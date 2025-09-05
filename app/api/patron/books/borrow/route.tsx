/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { withRoleAuth, AuthenticatedRequest } from '@/app/utils/authMiddleware';

const prisma = new PrismaClient();

export const POST = withRoleAuth(['patron'])(async (req: AuthenticatedRequest) => {
    if (!req.user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { userId, email } = req.user; // assuming your auth middleware includes email

    let bookId: number | null = null;
    let bookTitle: string | null = null;

    try {
        const body = await req.json();
        if (!body.bookId || isNaN(Number(body.bookId))) {
            throw new Error('Invalid book ID');
        }
        bookId = parseInt(body.bookId);

        const result = await prisma.$transaction(async (tx) => {
            const book = await tx.books.findUnique({
                where: { book_id: bookId! , record_status: "active" },
                select: { book_id: true, title: true, genre: true, author: true, librarian_id: true },
            });
            if (!book) throw new Error('Book not found');
            bookTitle = book.title;

            const unpaidFineCount = await tx.fines.count({
                where: { user_id: userId, status: 'unpaid' },
            });
            if (unpaidFineCount > 0) {
                const err = new Error('You have unpaid fines. Please settle fines before borrowing.');
                (err as any).code = 'UNPAID_FINE';
                throw err;
            }

            const availableTran = await tx.book_tran.findFirst({
                where: {
                    book_id: bookId,
                    status: 'available',
                    record_status: "active"
                },
            });
            if (!availableTran) throw new Error('Book is not available for borrowing');

            const totalActive = await tx.book_tran.count({
                where: { user_id: userId },
            });
            if (totalActive >= 5) {
                throw new Error('Maximum borrowing limit reached (5 books)');
            }

            const existingRequest = await tx.book_tran_history.findFirst({
                where: {
                    book_id: bookId,
                    requested_by: userId,
                    status: { in: ['pending', 'issued'] },
                },
            });
            if (existingRequest) {
                throw new Error('You already have a pending or active borrow request for this book.');
            }

            await tx.book_tran.update({
                where: { tran_id: availableTran.tran_id },
                data: {
                    status: 'not_available',
                    user_id: userId,
                },
            });

            const borrowHistory = await tx.book_tran_history.create({
                data: {
                    book_id: bookId,
                    tran_id: availableTran.tran_id,
                    status: 'pending',
                    requested_by: userId,
                    requested_at: new Date(),
                    date_issued: null,
                    date_due: null,
                    date_returned: null,
                    remarks: 'Book borrow request',
                },
            });

            let notificationToUserId = book.librarian_id;
            if (!notificationToUserId) {
                const anyLibrarian = await tx.users.findFirst({
                    where: { role: 'librarian', status: 'active' },
                });
                if (!anyLibrarian) {
                    throw new Error('No librarian available to process request');
                }
                notificationToUserId = anyLibrarian.user_id;
            }

            await tx.notifications.create({
                data: {
                    type: 'issue',
                    book_id: bookId,
                    from_user_id: userId,
                    to_user_id: notificationToUserId,
                    tran_id: availableTran.tran_id,
                    status: 'pending',
                    message: `New borrow request for "${book.title}" by user ${userId}. Pending approval.`,
                    created_at: new Date(),
                },
            });

            return {
                borrowHistoryId: borrowHistory.id,
                bookTitle: book.title,
                status: 'pending_approval',
            };
        });

        // ✅ Success log
        await prisma.logs.create({
            data: {
                description: `Borrow request submitted for book "${result.bookTitle}" by ${email} - Pending approval`,
                user_id: userId,
            },
        });

        return NextResponse.json({
            success: true,
            message: 'Book borrow request submitted successfully',
            data: result,
        });

    } catch (error) {
        console.error('Borrow book error:', error);

        // ❌ Error log
        await prisma.logs.create({
            data: {
                description: `Borrow request failed for book ${bookTitle ?? bookId ?? 'unknown'} by ${email} - Reason: ${error instanceof Error ? error.message : 'Unknown error'}`,
                user_id: userId,
            },
        });

        if (error instanceof Error && error.message.includes('pending or active borrow request')) {
            return NextResponse.json({ success: false, error: error.message }, { status: 409 });
        }

        return NextResponse.json(
            { error: error instanceof Error ? error.message : 'Failed to process borrow request' },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
});
