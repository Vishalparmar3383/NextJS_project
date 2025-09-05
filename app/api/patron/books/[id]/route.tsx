import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }){
    const bookId = parseInt(params.id, 10);

    if (isNaN(bookId)) {
        return NextResponse.json({ success: false, error: 'Invalid book ID' }, { status: 400 });
    }

    try {
        const book = await prisma.books.findUnique({
            where: { book_id: bookId,record_status:"active" },
        });

        if (!book) {
            return NextResponse.json({ success: false, error: 'Book not found' }, { status: 404 });
        }

        return NextResponse.json({ success: true, book });
    } catch (error) {
        console.error('Error fetching book:', error);
        return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
    }
}
