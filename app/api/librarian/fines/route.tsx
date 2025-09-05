import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { withRoleAuth } from '@/app/utils/authMiddleware';
import { differenceInDays } from 'date-fns';

const prisma = new PrismaClient();

export const GET = withRoleAuth(['librarian'])(async (req) => {
    const librarianId = req.user!.userId;

    // Fetch fines linked to books managed by this librarian
    const finesData = await prisma.fines.findMany({
        where: {
            book_tran_history: {
                books: {
                    librarian_id: librarianId,
                },
            },
        },
        include: {
            users: {
                select: { name: true },
            },
            book_tran_history: {
                select: {
                    date_due: true,
                    date_returned: true,
                    books: { select: { title: true } },
                },
            },
        },
    });

    // Map and add late days if needed
    const fines = finesData.map((fine) => {
        const dateDue = fine.book_tran_history?.date_due;
        const dateReturned = fine.book_tran_history?.date_returned;
        let lateDays = 0;
        if (dateDue && dateReturned) {
            lateDays = Math.max(differenceInDays(dateReturned, dateDue), 0) + 1;
        }
        return {
            fine_id: fine.fine_id,
            user: fine.users?.name,
            book: fine.book_tran_history?.books?.title,
            amount: fine.amount,
            reason: fine.reason,
            status: fine.status,
            date_due: dateDue,
            date_returned: dateReturned,
            lateDays,
            created_at: fine.created_at,
            paid_at: fine.paid_at,
        };
    });

    return NextResponse.json(fines);
});
