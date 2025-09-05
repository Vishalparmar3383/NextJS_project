/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { withRoleAuth, AuthenticatedRequest } from '@/app/utils/authMiddleware';

const prisma = new PrismaClient();

export const POST = withRoleAuth(['patron'])(async (req: AuthenticatedRequest) => {
    const { user } = req;

    let existingTransaction: any = null;

    try {
        if (!user) {
            return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
        }

        const url = new URL(req.url);
        const pathParts = url.pathname.split('/');
        const tranId = parseInt(pathParts[pathParts.length - 1], 10);

        if (isNaN(tranId)) {
            return NextResponse.json({ success: false, error: 'Invalid transaction ID' }, { status: 400 });
        }

        existingTransaction = await prisma.book_tran_history.findFirst({
            where: {
                tran_id: tranId,
                requested_by: user.userId,
                status: 'issued'
            },
            include: {
                books: true,
                book_tran: true
            }
        });

        if (!existingTransaction) {
            return NextResponse.json({
                success: false,
                error: 'No issued record found for this transaction or unauthorized access'
            }, { status: 404 });
        }

        if (!existingTransaction.books) {
            return NextResponse.json({
                success: false,
                error: 'Book information not found'
            }, { status: 404 });
        }

        const updated = await prisma.$transaction(async (tx) => {
            const updatedHistory = await tx.book_tran_history.update({
                where: { id: existingTransaction.id },
                data: {
                    status: 'returned',
                    date_returned: new Date(),
                    remarks: 'Return request initiated by user',
                },
            });

            let librarianUserId: number | null = existingTransaction.books?.librarian_id || null;

            if (librarianUserId) {
                const librarianExists = await tx.users.findFirst({
                    where: {
                        user_id: librarianUserId,
                        role: 'librarian',
                        status: 'active'
                    },
                    select: { user_id: true },
                });
                if (!librarianExists) {
                    librarianUserId = null;
                }
            }

            if (!librarianUserId) {
                const anyLibrarian = await tx.users.findFirst({
                    where: {
                        role: 'librarian',
                        status: 'active'
                    },
                    select: { user_id: true },
                });
                librarianUserId = anyLibrarian?.user_id || null;
            }

            if (!librarianUserId) {
                throw new Error('No librarian available to approve the return');
            }

            await tx.notifications.create({
                data: {
                    type: 'return',
                    book_id: existingTransaction.book_id,
                    from_user_id: user.userId,
                    to_user_id: librarianUserId,
                    tran_id: tranId,
                    status: 'pending',
                    message: `Return request for "${existingTransaction.books?.title || 'Unknown Book'}" is pending your approval.`,
                    created_at: new Date(),
                },
            });

            return updatedHistory;
        });

        // ✅ Success log
        await prisma.logs.create({
            data: {
                description: `User (${user.email}) initiated return for "${existingTransaction.books?.title || 'Unknown Book'}"`,
                user_id: user.userId,
            },
        });

        return NextResponse.json({
            success: true,
            message: 'Return request submitted successfully',
            data: updated
        });

    } catch (error) {
        console.error('Return book error:', error);

        // ❌ Error log
        if (user) {
            await prisma.logs.create({
                data: {
                    description: `Book return failed for "${existingTransaction?.books?.title || existingTransaction?.tran_id || 'Unknown'}" by ${user.email} - Reason: ${error instanceof Error ? error.message : 'Unknown error'}`,
                    user_id: user.userId,
                },
            });
        }

        let errorMessage = 'Failed to process return';
        let statusCode = 500;

        if (error instanceof Error) {
            if (error.message.includes('No librarian available')) {
                errorMessage = 'No librarian is currently available to process returns. Please try again later.';
                statusCode = 503;
            } else if (error.message.includes('No issued record found')) {
                errorMessage = 'Book return record not found or already processed.';
                statusCode = 404;
            } else if (error.message.includes('Book information not found')) {
                errorMessage = 'Book information is missing or corrupted.';
                statusCode = 500;
            } else {
                errorMessage = error.message;
            }
        }

        return NextResponse.json(
            { success: false, error: errorMessage },
            { status: statusCode }
        );
    } finally {
        await prisma.$disconnect();
    }
});
