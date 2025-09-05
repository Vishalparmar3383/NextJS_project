'use client';

import { useEffect, useState } from 'react';
import PatronBooksClient from './PatronBooksClient';

interface Book {
    book_id: number;
    title: string | null;
    author: string;
    genre: string | null;
    image_url: string | null;
    description: string | null;
}

export default function PatronBooksPage() {
    const [recommendedBooks, setRecommendedBooks] = useState<Book[]>([]);
    const [allBooks, setAllBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBooks() {
            setLoading(true);
            setError(null);
            try {
                // Fetch recommended books
                const recommendedRes = await fetch('/api/patron/books', {
                    credentials: 'include' // Include cookies for authentication
                });
                const recommendedData = await recommendedRes.json();

                // Fetch all books
                const allRes = await fetch('/api/patron/books?all=true', {
                    credentials: 'include' // Include cookies for authentication
                });
                const allData = await allRes.json();

                if (recommendedData.success && allData.success) {
                    setRecommendedBooks(recommendedData.books || []);
                    setAllBooks(allData.books || []);
                } else {
                    console.error('Failed to load books:', { recommendedData, allData });
                    setError('Failed to load books.');
                }
            } catch (err) {
                console.error('Error fetching books:', err);
                setError('Failed to load books due to network error.');
            } finally {
                setLoading(false);
            }
        }

        fetchBooks();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
                    <p className="text-gray-600 mt-4 text-lg">Loading books...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Error Loading Books</h3>
                    <p className="text-gray-500">{error}</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <PatronBooksClient
            recommendedBooks={recommendedBooks}
            allBooks={allBooks}
            error={error}
        />
    );
}
