import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma'; // Adjust if needed

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const librarianId = parseInt(params.id);
    const prisma = new PrismaClient();

    if (isNaN(librarianId)) {
        return NextResponse.json({ success: false, message: 'Invalid user ID' }, { status: 400 });
    }

    try {
        const user = await prisma.users.findUnique({
            where: { user_id: librarianId },
        });

        if (!user || user.role !== 'librarian') {
            return NextResponse.json({ success: false, message: 'Librarian not found' }, { status: 404 });
        }

        // ✅ Books managed by the librarian
        const booksManaged = await prisma.books.findMany({
            where: { librarian_id: librarianId },
            select: {
                book_id: true,
                title: true,
                author: true,
                genre: true,
                year: true,
                _count: {
                    select: {
                        book_tran: true, // This counts how many entries exist in book_tran for each book
                    },
                },
            },
        });


        // ✅ Book transactions approved
        const approvedTransactions = await prisma.book_tran_history.findMany({
            where: { approved_by: librarianId },
            include: {
                users_book_tran_history_requested_byTousers: {
                    select: { name: true },
                },
                books: {
                    select: { title: true },
                },
            },
            take: 10,
        });

        // ✅ Logs
        const logs = await prisma.logs.findMany({
            where: { user_id: librarianId },
            take: 10,
        });

        // ✅ Notifications handled
        const notificationsSent = await prisma.notifications.findMany({
            where: { from_user_id: librarianId },
            orderBy: { created_at: 'desc' },
            take: 5,
        });

        const notificationsReceived = await prisma.notifications.findMany({
            where: { to_user_id: librarianId },
            orderBy: { created_at: 'desc' },
            take: 5,
        });

        // ✅ Summary stats
        const summary = {
            totalBooksManaged: booksManaged.length,
            totalApprovedTransactions: approvedTransactions.length,
            totalLogs: logs.length,
            totalNotifications: notificationsSent.length + notificationsReceived.length,
        };

        return NextResponse.json({
            success: true,
            user: {
                user_id: user.user_id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            summary,
            booksManaged,
            approvedTransactions,
            logs,
            notifications: {
                sent: notificationsSent,
                received: notificationsReceived,
            },
        });
    } catch (error) {
        console.error('Librarian fetch error:', error);
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}
