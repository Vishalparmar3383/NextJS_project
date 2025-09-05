import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { withRoleAuth, AuthenticatedRequest } from '@/app/utils/authMiddleware';

const prisma = new PrismaClient();

export const GET = withRoleAuth(['patron'])(async (req: AuthenticatedRequest) => {
    try {
        if (!req.user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const [booksRead, currentlyBorrowed, favorites, totalFines] = await Promise.all([
            prisma.book_tran_history.count({
                where: {
                    requested_by: req.user.userId,
                    status: 'returned',
                    date_issued: {
                        not: null,
                    },
                },
            }),
            prisma.book_tran_history.count({
                where: { requested_by: req.user.userId, status: 'issued' },
            }),
            prisma.user_wishlist.count({
                where: { user_id: req.user.userId },
            }),
            prisma.fines.aggregate({
                where: { user_id: req.user.userId },
                _sum: { amount: true },
            }),
        ]);

        return NextResponse.json({
            booksRead: booksRead || 0,
            currentlyBorrowed: currentlyBorrowed || 0,
            favorites: favorites || 0,
            totalFines: totalFines._sum.amount || 0,
        });

    } catch (error) {
        console.error('[STATS_API_ERROR]', error);
        return NextResponse.json({ error: 'Failed to fetch stats' }, { status: 500 });
    }
});
