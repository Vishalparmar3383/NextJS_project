/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import Link from 'next/link';
import React, { useState, useMemo } from 'react';

interface Book {
    book_id: number;
    title: string | null;
    author: string;
    genre: string | null;
    image_url: string | null;
    description: string | null;
}
type SortBy = 'title' | 'author' | 'genre';
type SortOrder = 'asc' | 'desc';
type ViewMode = 'grid' | 'list';

// Accept books as props:
export default function PatronBooksClient({
    recommendedBooks,
    allBooks,
    error: initialError,
}: {
    recommendedBooks: Book[];
    allBooks: Book[];
    error: string | null;
}) {
    // Remove loading – we have data immediately
    const [error, setError] = useState<string | null>(initialError);

    // Filter and search states
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState<SortBy>('title');
    const [sortOrder, setSortOrder] = useState<SortOrder>('asc');
    const [viewMode, setViewMode] = useState<ViewMode>('grid');

    // Merge recommended books first, then add allBooks excluding duplicates
    const recommendedIds = new Set(recommendedBooks.map((b) => b.book_id));
    const mergedBooks = [
        ...recommendedBooks,
        ...allBooks.filter((b) => !recommendedIds.has(b.book_id)),
    ];

    const filteredAndSortedBooks = useMemo(() => {
        let filtered = mergedBooks;
        if (searchTerm.trim()) {
            const search = searchTerm.toLowerCase();
            filtered = filtered.filter(book =>
                (book.title?.toLowerCase().includes(search)) ||
                book.author.toLowerCase().includes(search) ||
                (book.genre?.toLowerCase().includes(search))
            );
        }
        filtered.sort((a, b) => {
            let aValue: string;
            let bValue: string;
            switch (sortBy) {
                case 'title':
                    aValue = a.title?.toLowerCase() || '';
                    bValue = b.title?.toLowerCase() || '';
                    break;
                case 'author':
                    aValue = a.author.toLowerCase();
                    bValue = b.author.toLowerCase();
                    break;
                case 'genre':
                    aValue = a.genre?.toLowerCase() || '';
                    bValue = b.genre?.toLowerCase() || '';
                    break;
                default:
                    aValue = a.title?.toLowerCase() || '';
                    bValue = b.title?.toLowerCase() || '';
            }
            const comparison = aValue.localeCompare(bValue);
            return sortOrder === 'asc' ? comparison : -comparison;
        });
        return filtered;
    }, [mergedBooks, searchTerm, sortBy, sortOrder]);

    const toggleSortOrder = () => {
        setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 sm:mb-4">
                        Library Collection
                    </h1>
                    <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    <p className="text-gray-600 mt-3 sm:mt-4 text-base sm:text-lg">Discover your next great read</p>
                </div>

                {/* Stats Card */}
                <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
                    <div className="flex items-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Total Books</h3>
                            <p className="text-2xl sm:text-3xl font-bold text-blue-600">{mergedBooks.length}</p>
                        </div>
                    </div>
                </div>

                {/* Search and Filter Controls */}
                <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
                    <div className="flex flex-col gap-4 sm:gap-6 md:flex-row md:items-center">
                        {/* Search Bar */}
                        <div className="w-full md:flex-1 relative">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search books by title, author, or genre..."
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder-gray-500 text-sm sm:text-base"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        {/* Sort Controls */}
                        <div className="w-full md:w-auto flex flex-wrap gap-2 sm:gap-3 items-center justify-between md:justify-normal">
                            <span className="text-sm font-medium text-gray-700">Sort by:</span>

                            {/* Sort By Dropdown */}
                            <select
                                value={sortBy}
                                onChange={e => setSortBy(e.target.value as SortBy)}
                                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 bg-white text-sm sm:text-base"
                            >
                                <option value="title">Title</option>
                                <option value="author">Author</option>
                                <option value="genre">Genre</option>
                            </select>

                            {/* Sort Order Toggle */}
                            <button
                                onClick={toggleSortOrder}
                                className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 transition-colors"
                                title={`Sort ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}
                            >
                                <svg
                                    className={`w-5 h-5 text-gray-600 transform transition-transform ${sortOrder === 'desc' ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
                                </svg>
                            </button>

                            {/* View Mode Toggle */}
                            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => setViewMode('grid')}
                                    className={`p-2 ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
                                    title="Grid View"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z" />
                                    </svg>
                                </button>
                                <button
                                    onClick={() => setViewMode('list')}
                                    className={`p-2 ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
                                    title="List View"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {error ? (
                    <div className="text-center py-16 sm:py-20 text-red-600 font-semibold">{error}</div>
                ) : filteredAndSortedBooks.length === 0 ? (
                    <div className="text-center py-16 sm:py-20">
                        <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                            <svg className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
                            {searchTerm ? 'No books found' : 'No Books Available'}
                        </h3>
                        <p className="text-gray-500 text-sm sm:text-base">
                            {searchTerm ? 'Try adjusting your search terms.' : 'Check back later for new additions to our collection.'}
                        </p>
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm('')}
                                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Clear Search
                            </button>
                        )}
                    </div>
                ) : (
                    <>
                        {/* Results Count - Only show when searching */}
                        {searchTerm && (
                            <div className="text-center mb-6 sm:mb-8">
                                <span className="inline-flex items-center px-4 py-2 rounded-full text-xs sm:text-sm font-medium bg-blue-100 text-blue-800">
                                    {filteredAndSortedBooks.length} {filteredAndSortedBooks.length === 1 ? 'Book' : 'Books'} Found
                                </span>
                            </div>
                        )}

                        {/* Books Display */}
                        {viewMode === 'grid' ? (
                            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8">
                                {filteredAndSortedBooks.map((book) => (
                                    <BookCard
                                        key={book.book_id}
                                        book={book}
                                        recommended={recommendedIds.has(book.book_id)}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-4 sm:space-y-6">
                                {filteredAndSortedBooks.map((book) => (
                                    <BookListItem
                                        key={book.book_id}
                                        book={book}
                                        recommended={recommendedIds.has(book.book_id)}
                                    />
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

// --- BookCard Component ---
function BookCard({ book, recommended }: { book: Book; recommended?: boolean }) {
    return (
        <div
            className={`group bg-white rounded-2xl shadow-lg transform transition-all duration-300 overflow-hidden border ${recommended
                ? 'border-blue-500 shadow-blue-300 hover:shadow-2xl hover:-translate-y-2'
                : 'border-gray-100 hover:shadow-2xl hover:-translate-y-1'
                }`}
        >
            <div className="relative overflow-hidden">
                {book.image_url ? (
                    <img
                        src={book.image_url}
                        alt={book.title || 'Book Image'}
                        className="w-full h-44 xs:h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                ) : (
                    <div className="w-full h-44 xs:h-48 sm:h-56 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                        <svg
                            className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                        </svg>
                    </div>
                )}

                {book.genre && (
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                        <span className="inline-flex items-center px-2 py-1 sm:px-2.5 sm:py-1 rounded-full text-xs font-medium bg-white/90 text-gray-800 backdrop-blur-sm">
                            {book.genre}
                        </span>
                    </div>
                )}

                {recommended && (
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                        <span className="inline-flex items-center px-2 py-1 sm:px-2.5 sm:py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
                            Recommended
                        </span>
                    </div>
                )}
            </div>

            <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {book.title || 'Untitled'}
                </h2>

                <div className="flex items-center mb-2 sm:mb-3">
                    <svg
                        className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{book.author}</span>
                </div>

                <Link href={`/patron/${book.book_id}`}>
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg text-xs sm:text-sm font-medium hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
}

// --- BookListItem Component ---
function BookListItem({ book, recommended }: { book: Book; recommended?: boolean }) {
    return (
        <div
            className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden border ${recommended ? 'border-blue-500' : 'border-gray-100'}`}
        >
            <div className="flex flex-col xs:flex-row p-4 sm:p-6 gap-3 sm:gap-6">
                <div className="flex-shrink-0 mb-3 xs:mb-0 xs:mr-4 sm:mr-6">
                    {book.image_url ? (
                        <img
                            src={book.image_url}
                            alt={book.title || 'Book Image'}
                            className="w-20 h-28 sm:w-24 sm:h-32 object-cover rounded-lg"
                        />
                    ) : (
                        <div className="w-20 h-28 sm:w-24 sm:h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                            <svg
                                className="w-7 h-7 sm:w-8 sm:h-8 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                        </div>
                    )}
                </div>

                <div className="flex-1 min-w-0">
                    <div className="flex flex-col gap-2 xs:flex-row xs:items-start xs:justify-between">
                        <div className="flex-1">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                                {book.title || 'Untitled'}
                            </h3>

                            <div className="flex items-center mb-1 sm:mb-2">
                                <svg
                                    className="w-4 h-4 text-gray-400 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <span className="text-xs sm:text-sm font-medium text-gray-700">{book.author}</span>
                            </div>

                            <div className="flex items-center gap-2 mb-1 sm:mb-3 flex-wrap">
                                {book.genre && (
                                    <span className="inline-flex items-center px-2 py-1 sm:px-2.5 sm:py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                        {book.genre}
                                    </span>
                                )}
                                {recommended && (
                                    <span className="inline-flex items-center px-2 py-1 sm:px-2.5 sm:py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                        Recommended
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="mt-2 xs:mt-0 xs:ml-4 flex-shrink-0">
                            <Link href={`/patron/${book.book_id}`}>
                                <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg text-xs sm:text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg w-full xs:w-auto">
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
