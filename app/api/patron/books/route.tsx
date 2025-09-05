import { NextResponse } from 'next/server';
import { getEnhancedRecommendedBooks } from '@/app/utils/bookRecommendation';
import { withRoleAuth, AuthenticatedRequest } from '@/app/utils/authMiddleware';
import { PrismaClient, record_status } from '@/generated/prisma';

const prisma = new PrismaClient();

export const GET = withRoleAuth(['patron'])(async (req: AuthenticatedRequest) => {
    try {
        const url = new URL(req.url);
        const allParam = url.searchParams.get('all');
        const limitParam = url.searchParams.get('limit');
        const limit = limitParam ? parseInt(limitParam, 10) : 5;

        // Case: return ALL active books
        if (allParam === 'true') {
            const books = await prisma.books.findMany({
                where: { record_status: record_status.active },
            });
            return NextResponse.json({ success: true, books });
        }

        // Case: user not logged in for some reason
        if (!req.user) {
            return NextResponse.json({ success: true, books: [] });
        }

        // Recommended books (filter for active only)
        const recommendedBooks = await getEnhancedRecommendedBooks(req.user.userId, limit);

        const activeRecommendedBooks = recommendedBooks.filter(
            (book) => book.record_status === record_status.active
        );

        return NextResponse.json({ success: true, books: activeRecommendedBooks });
    } catch (error) {
        console.error('Error fetching books:', error);
        return NextResponse.json(
            { success: false, error: 'Internal Server Error' },
            { status: 500 }
        );
    }
});
