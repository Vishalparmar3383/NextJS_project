import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

interface PreferenceMaps {
    genrePrefs: Map<string, number>;
    authorPrefs: Map<string, number>;
    readIds: Set<number>;
}

// Helper: Fetch user reading history and derive preferences
async function fetchUserPreferences(userId: number): Promise<PreferenceMaps> {
    const history = await prisma.book_tran_history.findMany({
        where: { requested_by: userId, status: "returned" },
        select: {
        book_id: true,
        books: {
            select: { genre: true, author: true },
        },
        },
    });

    if (history.length === 0) {
        return {
        genrePrefs: new Map(),
        authorPrefs: new Map(),
        readIds: new Set(),
        };
    }

    const genreCount = new Map<string, number>();
    const authorCount = new Map<string, number>();

    for (const entry of history) {
        const genre = entry.books?.genre ?? "unknown";
        const author = entry.books?.author ?? "unknown";

        genreCount.set(genre, (genreCount.get(genre) || 0) + 1);
        authorCount.set(author, (authorCount.get(author) || 0) + 1);
    }

    const totalBooks = history.length;

    // Normalize counts to get preference proportions
    const genrePrefs = new Map(
        [...genreCount].map(([genre, count]) => [genre, count / totalBooks])
    );

    const authorPrefs = new Map(
        [...authorCount].map(([author, count]) => [author, count / totalBooks])
    );

    const readIds = new Set(
        history.map((h) => h.book_id).filter(Boolean) as number[]
    );

    return { genrePrefs, authorPrefs, readIds };
    }

    // Main enhanced recommendation function
    export async function getEnhancedRecommendedBooks(userId: number, limit = 5) {
    // Fetch user prefs
    const { genrePrefs, authorPrefs, readIds } = await fetchUserPreferences(
        userId
    );

    // Cold start fallback: No reading history
    if (readIds.size === 0) {
        return await prisma.books.findMany({ take: limit });
    }

    // Fetch all candidate books
    const candidates = await prisma.books.findMany();

    // Weights for scoring - you can tune these values
    const WEIGHT_GENRE = 0.5;
    const WEIGHT_AUTHOR = 0.4;
    const WEIGHT_POPULARITY = 0.1;

    // Placeholder popularity scoring (could be replaced by actual popularity)
    // For example, you can calculate it based on borrow counts if you add that later
    const POPULARITY_SCORE_DEFAULT = 1;

    // Score each candidate book not yet read by user
    const scoredCandidates = candidates
        .filter((book) => book.book_id && !readIds.has(book.book_id))
        .map((book) => {
        const genreScore = book.genre ? genrePrefs.get(book.genre) ?? 0 : 0;
        const authorScore = book.author ? authorPrefs.get(book.author) ?? 0 : 0;
        const popularityScore = POPULARITY_SCORE_DEFAULT;

        const totalScore =
            WEIGHT_GENRE * genreScore +
            WEIGHT_AUTHOR * authorScore +
            WEIGHT_POPULARITY * popularityScore;

        return {
            book,
            score: totalScore,
        };
        });

    // Sort descending by score
    scoredCandidates.sort((a, b) => b.score - a.score);

    // Return top limit books
    return scoredCandidates.slice(0, limit).map((x) => x.book);
}
