import { NextResponse } from 'next/server';
import { withRoleAuth, AuthenticatedRequest } from '@/app/utils/authMiddleware';
import { PrismaClient } from '@/generated/prisma';

export const GET = withRoleAuth(['patron'])(async (req: AuthenticatedRequest) => {
    try {
        const prisma = new PrismaClient();
        
        if (!req.user) {
            return NextResponse.json({ success: false, error: 'User not logged in' }, { status: 401 });
        }

        // Get transaction history
        const history = await prisma.book_tran_history.findMany({
            where: {
                requested_by: req.user.userId,
                books: {
                    isNot: null,
                },
            },
            orderBy: { date_issued: 'desc' },
            include: {
                book_tran: {
                    include: {
                        books: {
                            select: {
                                book_id: true,
                                title: true,
                                author: true,
                                genre: true,
                                year: true,
                                image_url: true,
                            },
                        },
                    },
                },
            },
        });

        const fines = await prisma.fines.findMany({
            where: { user_id: req.user.userId },
        });

        // Map of transaction ID → fine details (amount and status)
        const fineMap = new Map<number, { amount: number; status: string | null }>();
        fines.forEach((fine) => {
            if (fine.book_tran_history_id !== null && fine.amount !== null) {
                fineMap.set(fine.book_tran_history_id, {
                    amount: Number(fine.amount),
                    status: fine.status,
                });
            }
        });

        const enrichedHistory = history.map((entry) => ({
            ...entry,
            ...(entry.id !== null && fineMap.has(entry.id)
                ? {
                    fine: fineMap.get(entry.id)?.amount,
                    fineStatus: fineMap.get(entry.id)?.status,
                }
                : {}),
        }));

        return NextResponse.json({ success: true, history: enrichedHistory });
    } catch (error) {
        console.error('[ERROR] /api/patron/history:', error);
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
});
