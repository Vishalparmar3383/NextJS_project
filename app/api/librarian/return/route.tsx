// app/api/librarian/return/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { withRoleAuth } from '@/app/utils/authMiddleware';

const prisma = new PrismaClient();

export const GET = withRoleAuth(['librarian'])(async (req) => {
    const userId = req.user!.userId;

    try {
        const returnedBooks = await prisma.book_tran_history.findMany({
            where: {
                status: 'returned',
                books: {
                    librarian_id: userId,
                },
            },
            include: {
                books: true,
                users_book_tran_history_requested_byTousers: true,
                users_book_tran_history_approved_byTousers: true,
            },
            orderBy: {
                date_returned: 'desc',
            },
        });

        return NextResponse.json({ data: returnedBooks });
    } catch (error) {
        console.error('Error fetching returned books:', error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
});
