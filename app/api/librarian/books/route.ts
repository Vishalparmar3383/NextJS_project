import { NextResponse } from 'next/server';
import { PrismaClient, book_tran_status } from '@/generated/prisma';
import { withRoleAuth } from '@/app/utils/authMiddleware';

const prisma = new PrismaClient();

export const GET = withRoleAuth(['librarian'])(async (req) => {
    try {
        const librarianId = req.user!.userId;

        const books = await prisma.books.findMany({
            where: {
                librarian_id: librarianId,
                record_status: 'active'
            },
            include: {
                book_tran: true,
            },
        });

        const formattedBooks = books.map(book => {
            const activeCopies = book.book_tran.filter(copy => copy.record_status === 'active');
            const totalCopies = activeCopies.length;
            const availableCopies = activeCopies.filter(copy => copy.status === book_tran_status.available).length;
            const issuedCopies = activeCopies.filter(copy => copy.status === book_tran_status.not_available).length;

            let status: 'Available' | 'Issued' | 'Partially Available';
            if (availableCopies === totalCopies) {
                status = 'Available';
            } else if (availableCopies === 0) {
                status = 'Issued';
            } else {
                status = 'Partially Available';
            }

            return {
                id: book.book_id,
                title: book.title || 'Untitled',
                author: book.author || 'Unknown Author',
                isbn: book.isbn,
                year: book.year,
                genre: book.genre,
                status,
                totalCopies,
                availableCopies,
                issuedCopies,
                description: book.description,
                image_url: book.image_url,
                created_at: book.created_at,
                updated_at: book.updated_at,
            };
        });

        return NextResponse.json({ success: true, books: formattedBooks });
    } catch (error) {
        console.error('Error fetching books:', error);
        return NextResponse.json({ 
            success: false, 
            message: 'Failed to fetch books',
            error: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
});
