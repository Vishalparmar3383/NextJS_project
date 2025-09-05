/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, record_status } from "@/generated/prisma";
import { withRoleAuth } from "@/app/utils/authMiddleware";

const prisma = new PrismaClient();

// 📌 GET by ID (only active books)
export const GET = withRoleAuth(["librarian"])(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
    try {
      const { id } = params;
      const bookId = parseInt(id);

      if (isNaN(bookId)) {
        return NextResponse.json(
          { success: false, message: "Invalid book ID" },
          { status: 400 }
        );
      }

      const book = await prisma.books.findUnique({
        where: {
          book_id: bookId,
          record_status: record_status.active,
        },
      });

      if (!book) {
        return NextResponse.json(
          { success: false, message: "Book not found" },
          { status: 404 }
        );
      }

      const quantity = await prisma.book_tran.count({
        where: { book_id: bookId, record_status: "active" },
      });

      return NextResponse.json({
        success: true,
        book: {
          ...book,
          quantity,
        },
      });
    } catch (error) {
      console.error("GET book error:", error);
      return NextResponse.json(
        { success: false, message: "Server error" },
        { status: 500 }
      );
    } finally {
      await prisma.$disconnect();
    }
  }
);

// 📌 DELETE with issued check
export const DELETE = withRoleAuth(["librarian"])(
  async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    const librarianId = (req as any).user?.userId;
    const librarianEmail = (req as any).user?.email;

    const { id } = await params;
    const bookId = parseInt(id);

    if (isNaN(bookId)) {
      // ❌ Log invalid ID attempt
      await prisma.logs.create({
        data: {
          description: `Book delete failed by ${librarianEmail} — Reason: Invalid book ID (${id})`,
          user_id: librarianId,
        },
      });

      return NextResponse.json(
        { success: false, message: "Invalid book ID" },
        { status: 400 }
      );
    }

    try {
      // 1️⃣ Check fines
      const relatedFines = await prisma.fines.findMany({
        where: {
          book_tran_history: { book_id: bookId },
        },
      });

      if (relatedFines.length > 0) {
        // ❌ Log failure
        await prisma.logs.create({
          data: {
            description: `Book delete failed by ${librarianEmail} — Reason: Book ID ${bookId} has related fines`,
            user_id: librarianId,
          },
        });

        return NextResponse.json(
          { success: false, message: "Cannot delete book with related fines" },
          { status: 400 }
        );
      }

      // 2️⃣ Check if copies are issued
      const issuedCopies = await prisma.book_tran.count({
        where: {
          book_id: bookId,
          status: "not_available",
        },
      });

      if (issuedCopies > 0) {
        // ❌ Log failure
        await prisma.logs.create({
          data: {
            description: `Book delete failed by ${librarianEmail} — Reason: Book ID ${bookId} has issued copies`,
            user_id: librarianId,
          },
        });

        return NextResponse.json(
          { success: false, message: "Some copies are issued, cannot delete" },
          { status: 400 }
        );
      }

      // 3️⃣ Mark book & copies inactive
      await prisma.book_tran.updateMany({
        where: { book_id: bookId },
        data: { record_status: record_status.inactive },
      });

      const deletedBook = await prisma.books.update({
        where: { book_id: bookId },
        data: { record_status: record_status.inactive },
      });

      // ✅ Log success
      await prisma.logs.create({
        data: {
          description: `Librarian (${librarianEmail}) deleted book "${deletedBook.title}" (bookId=${bookId})`,
          user_id: librarianId,
        },
      });

      return NextResponse.json(
        {
          success: true,
          message: "Book deleted successfully",
          book: deletedBook,
        },
        { status: 200 }
      );
    } catch (error: any) {
      console.error("Delete Error:", error);

      // ❌ Log error
      if (librarianId) {
        await prisma.logs.create({
          data: {
            description: `Book delete failed by ${librarianEmail} — Reason: ${
              error.message || "Unknown error"
            }`,
            user_id: librarianId,
          },
        });
      }

      return NextResponse.json(
        {
          success: false,
          message: error.message?.includes("foreign key constraint")
            ? "Cannot delete book with related records"
            : "Error deleting book",
        },
        { status: 500 }
      );
    }
  }
);
