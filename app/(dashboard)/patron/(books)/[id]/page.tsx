/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Snackbar from '@/app/components/Snackbar';
import ConfirmDialog from '@/app/components/ConfirmDialog';

interface Book {
    book_id: number;
    title: string | null;
    author: string;
    genre: string | null;
    image_url: string | null;
    description: string | null;
    isbn: string | null;
    year: number | null;
}

export default function BookDetailsPage() {
    const { id } = useParams();
    const [book, setBook] = useState<Book | null>(null);
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const [snackbar, setSnackbar] = useState<{ message: string; type?: 'success' | 'error' | 'info' } | null>(null);

    const showSnackbar = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
        setSnackbar({ message, type });
    };
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [borrowConfirmOpen, setBorrowConfirmOpen] = useState(false);

    const confirmRemoveFromWishlist = async () => {
        setConfirmOpen(false);
        try {
            const res = await fetch('/api/patron/wishlist', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ bookId: Number(id) }),
            });
            const data = await res.json();
            if (data.success) {
                setIsInWishlist(false);
                showSnackbar('Removed from wishlist', 'success');
            } else if (data.error) {
                showSnackbar(`Error: ${data.error}`, 'error');
            }
        } catch (err) {
            showSnackbar('Failed to remove from wishlist', 'error');
        }
    };

    const handleWishlistToggle = () => {
        if (isInWishlist) {
            setConfirmOpen(true);
        } else {
            addToWishlist();
        }
    };

    const addToWishlist = async () => {
        try {
            const res = await fetch('/api/patron/wishlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ bookId: Number(id) }),
            });
            const data = await res.json();
            if (data.success) {
                setIsInWishlist(true);
                showSnackbar('Added to wishlist', 'success');
            } else if (data.error) {
                showSnackbar(`Error: ${data.error}`, 'error');
            }
        } catch (err) {
            showSnackbar('Failed to add to wishlist', 'error');
        }
    };

    useEffect(() => {
        if (!id) return;

        const fetchBookAndWishlist = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/patron/books/${id}`);
                const data = await res.json();
                if (data.success) {
                    setBook(data.book);
                }

                const wishRes = await fetch('/api/patron/wishlist', { method: 'GET' });
                const wishData = await wishRes.json();
                if (Array.isArray(wishData.wishlist)) {
                    const bookInWishlist = wishData.wishlist.some(
                        (item: any) => item.book_id === Number(id)
                    );
                    setIsInWishlist(bookInWishlist);
                }
            } catch (err) {
                console.error('Error loading book or wishlist:', err);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchBookAndWishlist();
    }, [book?.title, id]);

    const handleBorrowPrompt = () => {
        setBorrowConfirmOpen(true);
    };

    const confirmBorrow = async () => {
        setBorrowConfirmOpen(false);
        try {
            const res = await fetch('/api/patron/books/borrow', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ bookId: Number(id) }),
            });
            const data = await res.json();
            console.log('Borrow response:', data);
            if (data.success) {
                showSnackbar('Borrow request submitted!', 'success');
            } else if (data.error) {
                showSnackbar(`Error : ${data.error}`, 'error');
            }
        } catch (err) {
            showSnackbar('Failed to submit borrow request', 'error');
        }
    };



    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="relative">
                            <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                        </div>
                        <p className="text-gray-600 mt-4 text-lg animate-pulse">Loading book details...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (!book) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center py-20">
                        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Book Not Found</h3>
                        <p className="text-gray-500">The book you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Back Button */}
                <div className="mb-8">
                    <button
                        onClick={() => router.push('/patron')}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Library
                    </button>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="lg:flex">
                        {/* Book Image Section */}
                        <div className="lg:w-1/2 relative">
                            <div className="aspect-[4/5] lg:aspect-auto lg:h-full relative overflow-hidden">
                                {book.image_url ? (
                                    <img
                                        src={book.image_url}
                                        alt={book.title || 'Book Image'}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                        <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                )}

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                                {/* Genre Badge */}
                                {book.genre && (
                                    <div className="absolute top-6 right-6">
                                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-white/90 text-gray-800 backdrop-blur-sm shadow-lg">
                                            {book.genre}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Book Details Section */}
                        <div className="lg:w-1/2 p-8 lg:p-12">
                            <div className="h-full flex flex-col">
                                {/* Title */}
                                <div className="mb-6">
                                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                                        {book.title || 'Untitled'}
                                    </h1>
                                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                </div>

                                {/* Author */}
                                <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-2xl">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600 font-medium">Author</p>
                                        <p className="text-lg font-semibold text-gray-900">{book.author}</p>
                                    </div>
                                </div>

                                {/* Book Metadata */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                    {book.isbn && (
                                        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-2xl border border-blue-100">
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                                                </svg>
                                                <div>
                                                    <p className="text-xs text-gray-600 font-medium">ISBN</p>
                                                    <p className="text-sm font-semibold text-gray-900">{book.isbn}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {book.year && (
                                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-2xl border border-purple-100">
                                            <div className="flex items-center">
                                                <svg className="w-5 h-5 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <div>
                                                    <p className="text-xs text-gray-600 font-medium">Published</p>
                                                    <p className="text-sm font-semibold text-gray-900">{book.year}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                {book.description && (
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                            <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Description
                                        </h3>
                                        <div className="prose prose-gray max-w-none">
                                            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                                                {book.description}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Action Buttons */}
                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={handleBorrowPrompt}
                                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-2xl text-sm font-semibold shadow-lg hover:scale-105 transition"
                                    >
                                        Borrow Book
                                    </button>

                                    {/* Confirmation dialog for borrowing */}
                                    <ConfirmDialog
                                        open={borrowConfirmOpen}
                                        title="Confirm Borrow"
                                        message="Are you sure you want to borrow this book? You’ll have 5 days to return it.You’ll get book after librarian approve."
                                        confirmText="Yes, Borrow"
                                        cancelText="Cancel"
                                        variant="info"
                                        onConfirm={confirmBorrow}
                                        onCancel={() => setBorrowConfirmOpen(false)}
                                    />
                                    <button
                                        onClick={handleWishlistToggle}
                                        className={`flex-1 bg-gradient-to-r py-3 px-6 rounded-2xl text-sm font-semibold transform transition-all duration-200 shadow-lg hover:shadow-xl
                                            ${isInWishlist
                                                ? 'from-red-400 to-pink-500 text-white hover:from-red-500 hover:to-pink-600 hover:scale-105'
                                                : 'from-gray-400 to-gray-600 text-white hover:from-gray-500 hover:to-gray-700 hover:scale-105'
                                            }`}
                                    >
                                        {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ConfirmDialog
                open={confirmOpen}
                title="Remove from Wishlist?"
                message="Are you sure you want to remove this book from your wishlist?"
                confirmText="Remove"
                cancelText="Cancel"
                variant="danger"
                onConfirm={confirmRemoveFromWishlist}
                onCancel={() => setConfirmOpen(false)}
            />
            <Snackbar
                open={!!snackbar}
                message={snackbar?.message || ''}
                type={snackbar?.type}
                onClose={() => setSnackbar(null)}
            />
        </div>
    );
}