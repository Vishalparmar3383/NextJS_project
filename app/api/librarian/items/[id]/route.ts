import { NextResponse } from "next/server";
import { PrismaClient, record_status, item_tran_status } from "@/generated/prisma";
import { withRoleAuth } from "@/app/utils/authMiddleware";

const prisma = new PrismaClient();

const parseId = (idStr: string) => {
    const idNum = parseInt(idStr, 10);
    return isNaN(idNum) ? null : idNum;
};

// GET item details by ID (only active, authorized to librarian)
export const GET = withRoleAuth(["librarian"])(
    async (req: Request, { params }: { params: { id: string } }) => {
        try {
        const id = params.id;
        const itemId = parseId(id);
        if (!itemId) {
            return NextResponse.json(
            { success: false, message: "Invalid item ID" },
            { status: 400 }
            );
        }

        const librarianId = (req as any).user?.userId;

        const item = await prisma.library_items.findFirst({
            where: {
                item_id: itemId,
                librarian_id: librarianId,
                record_status: record_status.active,
            },
            include: {
                item_tran: {
                    where: { record_status: record_status.active },
                    include: {
                        users: {
                            select: { user_id: true, name: true, email: true },
                        },
                    },
                },
                item_tran_history: {
                    include: {
                        users_item_tran_history_requested_byTousers: {
                            select: { user_id: true, name: true, email: true },
                        },
                        users_item_tran_history_approved_byTousers: {
                            select: { user_id: true, name: true, email: true },
                        },
                    },
                    orderBy: { requested_at: "desc" },
                },
            },
        });

        if (!item) {
            return NextResponse.json(
            { success: false, message: "Item not found" },
            { status: 404 }
            );
        }

        const activeCopies = item.item_tran.filter(
            (copy) => copy.record_status === record_status.active
        );
        const totalCopies = activeCopies.length;
        const availableCopies = activeCopies.filter(
            (c) => c.status === 'available'
        ).length;
        const issuedCopies = activeCopies.filter(
            (c) => c.status === 'not_available'
        ).length;

      // Format response
    const formattedItem = {
        id: item.item_id,
        title: item.title ?? "Untitled",
        author: item.author ?? "Unknown Author",
        isbn: item.isbn,
        year: item.year,
        genre: item.genre,
        item_type: item.item_type,
        location: item.location,
        publisher: item.publisher,
        language: item.language,
        pages: item.pages,
        duration: item.duration,
        format: item.format,
        subject: item.subject,
        keywords: item.keywords,
        description: item.description,
        image_url: item.image_url,
        totalCopies,
        availableCopies,
        issuedCopies,
        created_at: item.created_at,
        updated_at: item.updated_at,
        copies: activeCopies.map((copy) => ({
            tran_id: copy.tran_id,
            status: copy.status,
            user: copy.users
                ? {
                    user_id: copy.users.user_id,
                    name: copy.users.name,
                    email: copy.users.email,
                }
                : null,
        })),
        history: item.item_tran_history.map((history) => ({
            id: history.id,
            status: history.status,
            requested_by: history.users_item_tran_history_requested_byTousers
            ? {
                user_id: history.users_item_tran_history_requested_byTousers.user_id,
                name: history.users_item_tran_history_requested_byTousers.name,
                email: history.users_item_tran_history_requested_byTousers.email,
                }
                : null,
            approved_by: history.users_item_tran_history_approved_byTousers
                ? {
                    user_id: history.users_item_tran_history_approved_byTousers.user_id,
                    name: history.users_item_tran_history_approved_byTousers.name,
                    email: history.users_item_tran_history_approved_byTousers.email,
                }
                : null,
            requested_at: history.requested_at,
            approved_at: history.approved_at,
            date_issued: history.date_issued,
            date_due: history.date_due,
            date_returned: history.date_returned,
            remarks: history.remarks,
            })),
        };

        return NextResponse.json({ success: true, item: formattedItem });
        } catch (error) {
        console.error("Error fetching item:", error);
        return NextResponse.json(
            {
            success: false,
            message: "Failed to fetch item",
            error: (error as Error).message || "Unknown error",
            },
            { status: 500 }
        );
        } finally {
        await prisma.$disconnect();
        }
    }
);

// DELETE item if no issued copies or pending related records
export const DELETE = withRoleAuth(["librarian"])(
    async (req: Request, { params }: { params: { id: string } }) => {
        try {
        const librarianId = (req as any).user?.userId;
        const librarianEmail = (req as any).user?.email;
        const id = params.id;
        const itemId = parseId(id);

        if (!itemId) {
            if (librarianId) {
            await prisma.logs.create({
                data: {
                description: `Delete failed: Invalid item ID ${id}`,
                user_id: librarianId,
                },
            });
            }
            return NextResponse.json(
            { success: false, message: "Invalid item ID" },
            { status: 400 }
            );
        }

        // Fetch item for current librarian
        const item = await prisma.library_items.findFirst({
            where: {
            item_id: itemId,
            librarian_id: librarianId,
            record_status: record_status.active,
            },
            include: {
            item_tran: {
                where: {
                status: 'not_available',
                record_status: record_status.active,
                },
            },
            },
        });

        if (!item) {
            return NextResponse.json(
            { success: false, message: "Item not found" },
            { status: 404 }
            );
        }

        if (item.item_tran.length > 0) {
            if (librarianId) {
            await prisma.logs.create({
                data: {
                description: `Delete failed: Item ${item.title} (ID ${itemId}) has issued copies`,
                user_id: librarianId,
                },
            });
            }
            return NextResponse.json(
            { success: false, message: "Cannot delete item with issued copies" },
            { status: 400 }
            );
        }

        await prisma.$transaction(async (tx) => {
            await tx.library_items.update({
            where: { item_id: itemId },
            data: { record_status: record_status.inactive },
            });
            await tx.item_tran.updateMany({
            where: { item_id: itemId },
            data: { record_status: record_status.inactive },
            });
        });

        if (librarianId) {
            await prisma.logs.create({
            data: {
                description: `Item deleted: ${item.title} (ID ${itemId}) by ${librarianEmail}`,
                user_id: librarianId,
            },
            });
        }

        return NextResponse.json({
            success: true,
            message: `${
            item.item_type.charAt(0).toUpperCase() + item.item_type.slice(1)
            } "${item.title}" deleted successfully`,
        });
        } catch (error) {
        console.error("Error deleting item:", error);
        const librarianId = (req as any).user?.userId;
        const librarianEmail = (req as any).user?.email;
        if (librarianId) {
            await prisma.logs.create({
            data: {
                description: `Delete failed by ${librarianEmail}: ${
                (error as Error).message || "Unknown error"
                }`,
                user_id: librarianId,
            },
            });
        }
        return NextResponse.json(
            {
            success: false,
            message: "Failed to delete item",
            error: (error as Error).message || "Unknown error",
            },
            { status: 500 }
        );
        } finally {
        await prisma.$disconnect();
        }
    }
);

// PATCH update copies status (lost/damaged) for an item
export const PATCH = withRoleAuth(["librarian"])(
    async (req: Request, { params }: { params: { id: string } }) => {
        const librarianId = (req as any).user?.userId;
        const librarianEmail = (req as any).user?.email;
        try {
            const itemId = parseId(params.id);
            if (!itemId) {
                return NextResponse.json({ success: false, message: "Invalid item ID" }, { status: 400 });
            }

            const body = await req.json().catch(() => null) as { updates?: Array<{ tran_id: number; status: string }> } | null;
            const updates = body?.updates || [];
            if (!Array.isArray(updates) || updates.length === 0) {
                return NextResponse.json({ success: false, message: "No updates provided" }, { status: 400 });
            }

            // Ensure the item belongs to the librarian
            const owned = await prisma.library_items.findFirst({
                where: { item_id: itemId, librarian_id: librarianId, record_status: record_status.active },
                select: { item_id: true, title: true }
            });
            if (!owned) {
                return NextResponse.json({ success: false, message: "Item not found" }, { status: 404 });
            }

            // Map incoming strings to Prisma enum
            const mapToStatus = (s: string): item_tran_status | null => {
                switch (s) {
                    case 'available':
                        return item_tran_status.available;
                    case 'lost':
                        return item_tran_status.lost;
                    case 'damaged':
                        return item_tran_status.damaged;
                    case 'reserved':
                        return item_tran_status.reserved;
                    case 'not_available':
                        return item_tran_status.not_available;
                    default:
                        return null;
                }
            };

            // Update each specified transaction row for this item
            await prisma.$transaction(async (tx) => {
                for (const u of updates) {
                    const nextStatus = mapToStatus(u.status);
                    if (!nextStatus) {
                        continue;
                    }
                    await tx.item_tran.updateMany({
                        where: {
                            tran_id: u.tran_id,
                            item_id: itemId,
                            record_status: record_status.active,
                        },
                        data: {
                            status: nextStatus,
                        }
                    });
                }

                if (librarianId) {
                    await tx.logs.create({
                        data: {
                            description: `Updated ${updates.length} copies for "${owned.title}" to lost/damaged by ${librarianEmail}`,
                            user_id: librarianId,
                        }
                    });
                }
            });

            return NextResponse.json({ success: true, message: "Copies updated" });
        } catch (error) {
            console.error("Error updating copies:", error);
            return NextResponse.json({ success: false, message: "Failed to update copies" }, { status: 500 });
        } finally {
            await prisma.$disconnect();
        }
    }
);