/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { withRoleAuth } from '@/app/utils/authMiddleware';

const prisma = new PrismaClient();

export const GET = withRoleAuth(['librarian'])(async (req) => {
    const userId = req.user!.userId;

    try {
        const requests = await prisma.book_tran_history.findMany({
            where: {
                OR: [
                    {
                        status: 'pending',
                        books: { librarian_id: userId },
                        approved_by: null
                    },
                    {
                        status: 'returned',
                        books: { librarian_id: userId },
                        remarks: {
                            contains: 'Return request initiated by user'
                        }
                    }
                ],
            },
            include: {
                books: true,
                users_book_tran_history_requested_byTousers: true,
            },
            orderBy: [
                { requested_at: 'desc' },
            ],
        });

        return NextResponse.json({ requests });
    } catch (error) {
        console.error('Error fetching reservation requests:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
});

// Approve issue or return requests
export const POST = withRoleAuth(['librarian'])(async (req: NextRequest) => {
    const librarianId = (req as any).user!.userId;
    const librarianEmail = (req as any).user!.email;

    let reservation: any = null;

    try {
        const requestBody = await req.json();
        const { borrowHistoryId, remarks, type, additionalFineAmount, bookConditionRemarks } = requestBody;

        if (!borrowHistoryId) {
            return NextResponse.json({ message: 'Missing reservation ID' }, { status: 400 });
        }

        if (!['issue', 'return'].includes(type)) {
            return NextResponse.json({ message: 'Invalid type' }, { status: 400 });
        }

        const result = await prisma.$transaction(async (tx) => {
            reservation = await tx.book_tran_history.findUnique({
                where: { id: borrowHistoryId },
                include: { book_tran: true, books: true, users_book_tran_history_requested_byTousers: true },
            });

            if (!reservation) {
                throw new Error('Reservation/return request not found');
            }

            if (type === 'issue') {
                if (reservation.status !== 'pending') {
                    throw new Error('Issue reservation already processed');
                }

                await tx.book_tran_history.update({
                    where: { id: borrowHistoryId },
                    data: {
                        status: 'issued',
                        approved_by: librarianId,
                        approved_at: new Date(),
                        date_issued: new Date(),
                        date_due: new Date(new Date().setDate(new Date().getDate() + 5)),
                        remarks: remarks ?? 'Approved',
                    },
                });

                if (reservation.tran_id) {
                    await tx.book_tran.update({
                        where: { tran_id: reservation.tran_id },
                        data: { status: 'not_available', user_id: reservation.requested_by },
                    });
                }

                await tx.notifications.create({
                    data: {
                        type: 'issue',
                        book_id: reservation.book_id,
                        from_user_id: librarianId,
                        to_user_id: reservation.requested_by!,
                        tran_id: reservation.tran_id,
                        status: 'approved',
                        message: `Your reservation for "${reservation.books?.title}" has been approved.`,
                        created_at: new Date(),
                        resolved_at: new Date(),
                    },
                });

            } else if (type === 'return') {
                if (reservation.status !== 'returned') {
                    throw new Error('Return request not found or already processed');
                }

                const dateDue = reservation.date_due;
                const today = new Date();
                let fineAmount = 0;
                let fineDescription = '';

                if (dateDue && today > dateDue) {
                    const msPerDay = 1000 * 60 * 60 * 24;
                    const daysLate = Math.ceil((today.getTime() - dateDue.getTime()) / msPerDay);

                    const finePerDay = 5;
                    fineAmount = daysLate * finePerDay;
                    fineDescription = `Returned ${daysLate} day(s) late. Due on ${dateDue.toDateString()}, returned on ${today.toDateString()}.`;
                }

                if (additionalFineAmount && additionalFineAmount > 0) {
                    fineAmount += additionalFineAmount;
                    if (fineDescription) {
                        fineDescription += ` Additional fine for book condition: $${additionalFineAmount}. ${bookConditionRemarks || 'Book condition below acceptable standards.'}`;
                    } else {
                        fineDescription = `Additional fine for book condition: $${additionalFineAmount}. ${bookConditionRemarks || 'Book condition below acceptable standards.'}`;
                    }
                }

                if (fineAmount > 0) {
                    await tx.fines.create({
                        data: {
                            user_id: reservation.requested_by!,
                            book_tran_history_id: borrowHistoryId,
                            amount: fineAmount,
                            reason: fineDescription,
                            status: 'unpaid',
                            created_at: today,
                        },
                    });
                }

                await tx.book_tran_history.update({
                    where: { id: borrowHistoryId },
                    data: {
                        approved_by: librarianId,
                        approved_at: new Date(),
                        remarks: fineAmount > 0 ? `Return approved with fine: $${fineAmount}` : 'Return approved',
                    },
                });

                if (reservation.tran_id) {
                    await tx.book_tran.update({
                        where: { tran_id: reservation.tran_id },
                        data: { status: 'available', user_id: null },
                    });
                }

                await tx.notifications.create({
                    data: {
                        type: 'return',
                        book_id: reservation.book_id,
                        from_user_id: librarianId,
                        to_user_id: reservation.requested_by!,
                        tran_id: reservation.tran_id,
                        status: 'approved',
                        message: fineAmount > 0
                            ? `Your return for "${reservation.books?.title}" has been approved with a fine of $${fineAmount}. ${fineDescription}`
                            : `Your return for "${reservation.books?.title}" has been approved.`,
                        created_at: new Date(),
                        resolved_at: new Date(),
                    },
                });
            }

            return { success: true };
        });

        // ✅ Success log
        await prisma.logs.create({
            data: {
                description:
                    type === 'issue'
                        ? `Librarian (${librarianEmail}) approved issue request for "${reservation?.books?.title || 'Unknown Book'}" to ${reservation?.users_book_tran_history_requested_byTousers?.email || 'Unknown user'}`
                        : `Librarian (${librarianEmail}) approved return for "${reservation?.books?.title || 'Unknown Book'}" from ${reservation?.users_book_tran_history_requested_byTousers?.email || 'Unknown user'}`,
                user_id: librarianId,
            },
        });

        return NextResponse.json({ success: true, message: `${type} request approved successfully` });
    } catch (error) {
        console.error('Approve error:', error);

        // ❌ Error log
        await prisma.logs.create({
            data: {
                description: `Approval failed by ${librarianEmail} - Reason: ${error instanceof Error ? error.message : 'Unknown error'}`,
                user_id: librarianId,
            },
        });

        return NextResponse.json(
            { message: error instanceof Error ? error.message : 'Error processing approval' },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
});

// Reject only issue requests
export const DELETE = withRoleAuth(['librarian'])(async (req: NextRequest) => {
    const librarianId = (req as any).user!.userId;
    const librarianEmail = (req as any).user!.email;
    let reservation: any = null;

    try {
        const { borrowHistoryId, remarks, type } = await req.json();

        if (!borrowHistoryId) {
            return NextResponse.json({ message: 'Missing reservation ID' }, { status: 400 });
        }

        if (type !== 'issue') {
            return NextResponse.json({ message: 'Only issue requests can be rejected' }, { status: 400 });
        }

        const result = await prisma.$transaction(async (tx) => {
            reservation = await tx.book_tran_history.findUnique({
                where: { id: borrowHistoryId },
                include: { book_tran: true, books: true, users_book_tran_history_requested_byTousers: true },
            });

            if (!reservation) {
                throw new Error('Reservation request not found');
            }

            if (reservation.status !== 'pending') {
                throw new Error('Issue reservation already processed');
            }

            await tx.book_tran_history.update({
                where: { id: borrowHistoryId },
                data: {
                    status: 'rejected',
                    approved_by: librarianId,
                    approved_at: new Date(),
                    remarks: `Issue request rejected: ${remarks || 'No reason provided'}`,
                },
            });

            if (reservation.tran_id) {
                await tx.book_tran.update({
                    where: { tran_id: reservation.tran_id },
                    data: { status: 'available', user_id: null },
                });
            }

            await tx.notifications.updateMany({
                where: { tran_id: reservation.tran_id, status: 'pending' },
                data: { status: 'rejected', resolved_at: new Date() },
            });

            await tx.notifications.create({
                data: {
                    type: 'issue',
                    book_id: reservation.book_id,
                    from_user_id: librarianId,
                    to_user_id: reservation.requested_by!,
                    tran_id: reservation.tran_id,
                    status: 'rejected',
                    message: `Your issue request for "${reservation.books?.title}" has been rejected. Reason: ${remarks || 'No reason provided'}`,
                    created_at: new Date(),
                    resolved_at: new Date(),
                },
            });

            return { success: true };
        });

        // ✅ Log rejection
        await prisma.logs.create({
            data: {
                description: `Librarian (${librarianEmail}) rejected issue request for "${reservation?.books?.title || 'Unknown Book'}" to ${reservation?.users_book_tran_history_requested_byTousers?.email || 'Unknown user'} - Reason: ${remarks || 'No reason provided'}`,
                user_id: librarianId,
            },
        });

        return NextResponse.json({ success: true, message: 'Issue request rejected successfully' });
    } catch (error) {
        console.error('Reject error:', error);

        // ❌ Log failure
        await prisma.logs.create({
            data: {
                description: `Rejection failed by ${librarianEmail} - Reason: ${error instanceof Error ? error.message : 'Unknown error'}`,
                user_id: librarianId,
            },
        });

        return NextResponse.json(
            { message: error instanceof Error ? error.message : 'Error processing rejection' },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect();
    }
});
