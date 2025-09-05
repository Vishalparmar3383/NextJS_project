/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { withRoleAuth } from '@/app/utils/authMiddleware';

const prisma = new PrismaClient();

function formatDate(date: Date) {
    return date.toISOString().slice(0, 10); // YYYY-MM-DD
}

function getDateNDaysAgo(days: number) {
    const d = new Date();
    d.setDate(d.getDate() - days);
    d.setHours(0, 0, 0, 0);
    return d;
}

export const GET = withRoleAuth(['librarian'])(async (req) => {
    const userId = req.user!.userId;

    try {
        const daysBack = 30;
        const startDate = getDateNDaysAgo(daysBack);

        // Prepare last 30 days labels
        const last30Days = Array.from({ length: daysBack }, (_, i) => {
            const d = new Date();
            d.setDate(d.getDate() - (daysBack - 1 - i));
            return formatDate(d);
        });

        // Fetch summary stats - Fixed the queries
        const [available, issued, pending, overdueCount] = await Promise.all([
            // Count books that are available (based on book_tran status)
            prisma.book_tran.count({
                where: {
                    status: 'available',
                    record_status: 'active',
                    books: { librarian_id: userId }
                }
            }),
            // Count books that are currently issued
            prisma.book_tran.count({
                where: {
                    status: 'not_available',
                    record_status: 'active',
                    books: { librarian_id: userId }
                }
            }),
            // Count pending requests and returned books awaiting approval
            prisma.book_tran_history.count({
                where: {
                    OR: [
                        {
                            status: 'pending',
                            books: { librarian_id: userId }
                        },
                        {
                            status: 'returned',
                            books: { librarian_id: userId },
                            approved_at: null
                        },
                    ],
                }
            }),
            // Count overdue books
            prisma.book_tran_history.count({
                where: {
                    status: 'issued',
                    date_due: { lt: new Date() },
                    date_returned: null,
                    books: { librarian_id: userId },
                }
            }),
        ]);

        // Get unique genres for this librarian's books
        const genres = await prisma.books.findMany({
            where: {
                librarian_id: userId,
                genre: { not: null },
                record_status: 'active',
            },
            distinct: ['genre'],
            select: { genre: true },
        });

        // First, let's get all book_tran_history IDs for books managed by this librarian
        const librarianBookHistoryIds = await prisma.book_tran_history.findMany({
            where: {
                books: { librarian_id: userId }
            },
            select: { id: true }
        });

        const historyIds = librarianBookHistoryIds.map(h => h.id);

        // Now get fines using these IDs
        const [actualFinesUnpaid, actualFinesCollected] = await Promise.all([
            // Unpaid fines
            prisma.fines.aggregate({
                where: {
                    status: 'unpaid',
                    book_tran_history_id: { in: historyIds }
                },
                _sum: { amount: true },
            }),
            // Collected fines in last 30 days
            prisma.fines.aggregate({
                where: {
                    status: 'paid',
                    paid_at: { gte: startDate },
                    book_tran_history_id: { in: historyIds }
                },
                _sum: { amount: true }
            }),
        ]);

        // Debug log
        // console.log('Fines Debug:', {
        //     historyIds: historyIds.length,
        //     unpaidSum: actualFinesUnpaid._sum?.amount,
        //     collectedSum: actualFinesCollected._sum?.amount
        // });

        // Top 5 borrowed books last 30 days - Let's get the data differently
        const topBorrowedRaw = await prisma.book_tran_history.findMany({
            where: {
                books: { librarian_id: userId },
                AND: [
                    {
                        OR: [
                            { status: 'issued', date_issued: { gte: startDate } },
                            { status: 'returned', date_issued: { not: null, gte: startDate } },
                        ],
                    },
                ],
            },
            select: {
                book_id: true,
                books: {
                    select: {
                        book_id: true,
                        title: true,
                        author: true,
                    },
                },
            },
        });


        // Group and count manually
        const bookCounts: Record<number, { count: number; book: any }> = {};
        topBorrowedRaw.forEach(item => {
            if (item.book_id) {
                if (!bookCounts[item.book_id]) {
                    bookCounts[item.book_id] = { count: 0, book: item.books };
                }
                bookCounts[item.book_id].count++;
            }
        });

        // Convert to array and sort
        const topBorrowedWithDetails = Object.entries(bookCounts)
            .map(([bookId, data]) => ({
                book_id: parseInt(bookId),
                _count: { book_id: data.count },
                book_details: data.book
            }))
            .sort((a, b) => b._count.book_id - a._count.book_id)
            .slice(0, 5);

        // Fetch recent issued and returned transactions for chart
        // 📌 Fetch recent issue and return notifications instead of book_tran_history
        const notificationsData = await prisma.notifications.findMany({
            where: {
                from_user_id: userId, // librarian who created/approved these
                type: { in: ['issue', 'return'] },
                created_at: { gte: startDate },
                status: 'approved'
            },
            select: {
                type: true,
                created_at: true
            }
        });

        // Prepare data for chart – same structure
        const issuedCounts: Record<string, number> = {};
        const returnedCounts: Record<string, number> = {};
        last30Days.forEach(d => {
            issuedCounts[d] = 0;
            returnedCounts[d] = 0;
        });

        notificationsData.forEach(n => {
            const day = formatDate(n.created_at!);
            if (n.type === 'issue' && issuedCounts.hasOwnProperty(day)) {
                issuedCounts[day]++;
            } else if (n.type === 'return' && returnedCounts.hasOwnProperty(day)) {
                returnedCounts[day]++;
            }
        });


        // Calculate additional metrics
        const totalBooks = await prisma.books.count({
            where: { librarian_id: userId }
        });

        return NextResponse.json({
            success: true,
            summary: {
                available,
                issued,
                pending,
                overdueCount,
                totalFinesUnpaid: Number(actualFinesUnpaid._sum?.amount ?? 0),
                collectedFines: Number(actualFinesCollected._sum?.amount ?? 0),
                totalBooks,
            },
            genres: genres.filter(g => g.genre !== null),
            topBorrowedBooks: topBorrowedWithDetails,
            chartData: {
                days: last30Days,
                issued: last30Days.map(d => issuedCounts[d]),
                returned: last30Days.map(d => returnedCounts[d]),
            },
        });

    } catch (error) {
        console.error('Dashboard API error:', error);
        return NextResponse.json({
            success: false,
            message: 'Internal Server Error',
            error: process.env.NODE_ENV === 'development' && error instanceof Error ? error.message : undefined
        }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
});