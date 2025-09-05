import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { withRoleAuth, AuthenticatedRequest } from '@/app/utils/authMiddleware';

const prisma = new PrismaClient();

export const GET = withRoleAuth(['patron'])(async (req: AuthenticatedRequest) => {
    try {
        if (!req.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }
        
        const issuedBooks = await prisma.book_tran_history.findMany({
            where: {
                status: 'issued',
                requested_by: req.user.userId,
            },
            include: {
                books: true,
                users_book_tran_history_requested_byTousers: {
                    select: {
                        user_id: true,
                        name: true,
                        email: true,
                    },
                },
                users_book_tran_history_approved_byTousers: {
                    select: {
                        user_id: true,
                        name: true,
                        email: true,
                    },
                },
            },
            orderBy: {
                date_issued: 'desc',
            },
        });

        return NextResponse.json({ success: true, data: issuedBooks });
    } catch (error) {
        console.error('Error fetching returned books:', error);
        return NextResponse.json({ success: false, error: 'Failed to fetch returned books' }, { status: 500 });
    }
});