/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { withRoleAuth } from '@/app/utils/authMiddleware';

const prisma = new PrismaClient();

export const GET = withRoleAuth(['librarian'])(async (req: NextRequest) => {
    try {
        const librarianId = (req as any).user!.userId;

        const user = await prisma.users.findUnique({
            where: { user_id: librarianId, role: 'librarian' },
            include: { book_tran: true },
        });

        if (!user) {
            return NextResponse.json({ error: 'Librarian not found' }, { status: 404 });
        }

        const genreCounts = await prisma.books.groupBy({
            by: ['genre'],
            where: { librarian_id: librarianId, genre: { not: null },record_status:"active" },
            _count: { genre: true },
            orderBy: { _count: { genre: 'desc' } },
        });

        const genresWithCount = genreCounts.map(item => ({
            genre: item.genre || 'Unknown',
            count: item._count.genre,
        }));

        return NextResponse.json({
            ...user,
            genresWithCount,
        });
    } catch (error) {
        console.error('Error fetching librarian genres:', error);
        return NextResponse.json({ error: 'Failed to load librarian genres' }, { status: 500 });
    }
});
