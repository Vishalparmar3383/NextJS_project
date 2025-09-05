/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { withRoleAuth, AuthenticatedRequest } from '@/app/utils/authMiddleware';

const prisma = new PrismaClient();

export const GET = withRoleAuth(['patron'])(async (req: AuthenticatedRequest) => {
    if (!req.user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const wishlist = await prisma.user_wishlist.findMany({
            where: { user_id: req.user.userId },
            include: {
                books: true,
            },
        });

        const flatWishlist = wishlist.map(w => ({
            book_id : w.book_id,
            user_id : w.user_id,
            title: w.books?.title ?? null,
            author: w.books?.author ?? null,
            genre: w.books?.genre ?? null,
            cover_image: w.books?.image_url ?? null,
        }));

        return NextResponse.json({ wishlist: flatWishlist });
    } catch (error) {
        console.error('Error fetching wishlist:', error);
        return NextResponse.json({ error: 'Failed to fetch wishlist' }, { status: 500 });
    }
});

export const POST = withRoleAuth(['patron'])(async (req: AuthenticatedRequest) => {
    if (!req.user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    let body: any = null;
    try {
        body = await req.json();
        const { bookId } = body;
        if (!bookId || isNaN(Number(bookId))) {
            return NextResponse.json({ error: 'Invalid or missing bookId' }, { status: 400 });
        }

        const exists = await prisma.user_wishlist.findFirst({
            where: {
                user_id: req.user.userId,
                book_id: parseInt(bookId),
            },
        });
        if (exists) {
            return NextResponse.json({ error: 'Already in wishlist' }, { status: 400 });
        }

        const book = await prisma.books.findUnique({ where: { book_id: Number(bookId) } });

        const added = await prisma.user_wishlist.create({
            data: {
                user_id: req.user.userId,
                book_id: Number(bookId),
            },
        });

        await prisma.logs.create({
            data: {
                description: `Book (${book?.title ?? bookId}) added to wishlist by ${req.user.email}`,
                user_id: req.user.userId,
            },
        });

        return NextResponse.json({ success: true, added });
    } catch (error) {
        console.error('Error adding to wishlist:', JSON.stringify(error, null, 2));

        // ❌ Log error
        await prisma.logs.create({
            data: {
                description: `Wishlist add failed for book ${body?.bookId ?? 'unknown'} by ${req.user.email} - Reason: ${error instanceof Error ? error.message : 'Unknown error'}`,
                user_id: req.user.userId,
            },
        });

        return NextResponse.json({ error: 'Failed to add to wishlist' }, { status: 500 });
    }
});

export const DELETE = withRoleAuth(['patron'])(async (req: AuthenticatedRequest) => {
    if (!req.user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    let body: any = null;
    try {
        body = await req.json();
        const { bookId } = body;
        if (!bookId || isNaN(Number(bookId))) {
            return NextResponse.json({ error: 'Invalid or missing bookId' }, { status: 400 });
        }

        const book = await prisma.books.findUnique({ where: { book_id: Number(bookId) } });

        const deleted = await prisma.user_wishlist.deleteMany({
            where: {
                user_id: req.user.userId,
                book_id: parseInt(bookId),
            },
        });

        if (deleted.count === 0) {
            return NextResponse.json({ error: 'Book not found in wishlist' }, { status: 404 });
        }

        // ✅ Log success
        await prisma.logs.create({
            data: {
                description: `Book (${book?.title ?? bookId}) removed from wishlist by ${req.user.email}`,
                user_id: req.user.userId,
            },
        });

        return NextResponse.json({ success: true, deletedCount: deleted.count });
    } catch (error) {
        console.error('Error removing from wishlist:', error);

        // ❌ Log error
        await prisma.logs.create({
            data: {
                description: `Wishlist remove failed for book ${body?.bookId ?? 'unknown'} by ${req.user.email} - Reason: ${error instanceof Error ? error.message : 'Unknown error'}`,
                user_id: req.user.userId,
            },
        });

        return NextResponse.json({ error: 'Failed to remove from wishlist' }, { status: 500 });
    }
});
