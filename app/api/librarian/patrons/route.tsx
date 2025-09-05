import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { withRoleAuth } from '@/app/utils/authMiddleware';

export const GET = withRoleAuth(['librarian'])(async (req) => {
    const userId = req.user!.userId;
    const prisma = new PrismaClient();
    // Step 1: Find all patrons who ever requested a book from this librarian
    const patrons = await prisma.users.findMany({
        where: {
            book_tran_history_book_tran_history_requested_byTousers: {
                some: {
                    books: {
                        librarian_id: userId,
                    },
                },
            },
        },
        select: {
            user_id: true,
            name: true,
            email: true,
            book_tran_history_book_tran_history_requested_byTousers: {
                where: {
                    books: {
                        librarian_id: userId,
                    },
                },
                select: { id: true },
            },
        },
    });

    const formatted = patrons.map((patron) => ({
        user_id: patron.user_id,
        name: patron.name ?? '',
        email: patron.email ?? '',
        booksRead: patron.book_tran_history_book_tran_history_requested_byTousers.length,
    }));

    return NextResponse.json(formatted);
});
