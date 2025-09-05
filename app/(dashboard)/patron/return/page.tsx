/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ConfirmDialog from "@/app/components/ConfirmDialog";
import { useEffect, useState } from "react";

export default function ReturnPage() {
    const [books, setBooks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [selectedTranId, setSelectedTranId] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);

    const onReturnClick = (tranId: number) => {
        setSelectedTranId(tranId);
        setConfirmOpen(true);
        setError(null);
        setSuccessMessage(null);
    };

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                setError(null);
                const res = await fetch("/api/patron/return");
                const data = await res.json();
                
                if (data.success && Array.isArray(data.data)) {
                    setBooks(data.data);
                } else {
                    setBooks([]);
                    if (data.error) {
                        setError(data.error);
                    }
                }
            } catch (err) {
                console.error("Error fetching issued books", err);
                setBooks([]);
                setError("Failed to fetch books. Please try again.");
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, []);

    const handleReturn = async (tranId: number) => {
        try {
            setError(null);
            setSuccessMessage(null);
            
            const res = await fetch(`/api/patron/return/${tranId}`, {
                method: 'POST',
            });

            const data = await res.json();
            if (data.success) {
                setSuccessMessage(data.message || 'Book returned successfully!');
                setBooks(prev => prev.filter(b => b.tran_id !== tranId));
                
                // Clear success message after 3 seconds
                setTimeout(() => {
                    setSuccessMessage(null);
                }, 3000);
            } else {
                setError(data.error || 'Failed to return book. Please try again.');
            }
        } catch (err) {
            console.error("Error returning book:", err);
            setError("Network error. Please check your connection and try again.");
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl shadow-lg">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-indigo-800 bg-clip-text text-transparent">
                                Return Books
                            </h1>
                            <p className="text-slate-600 mt-2">Select a book from the list below and confirm the return process</p>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 max-w-2xl mx-auto">
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0">
                                    <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="text-sm text-red-700">
                                    <p className="font-medium">Error</p>
                                    <p>{error}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Success Message */}
                    {successMessage && (
                        <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 max-w-2xl mx-auto">
                            <div className="flex items-center gap-3">
                                <div className="flex-shrink-0">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="text-sm text-green-700">
                                    <p className="font-medium">Success</p>
                                    <p>{successMessage}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {!loading && books.length > 0 && (
                        <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-200 inline-block">
                            <div className="flex items-center gap-4">
                                <div className="text-center">
                                    <p className="text-slate-500 text-sm font-medium">Books to Return</p>
                                    <p className="text-3xl font-bold text-blue-600">{books.length}</p>
                                </div>
                                <div className="w-px h-12 bg-slate-300"></div>
                                <div className="text-center">
                                    <p className="text-slate-500 text-sm font-medium">Status</p>
                                    <p className="text-lg font-semibold text-orange-600">Pending Returns</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {loading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 animate-pulse">
                                <div className="w-full h-48 bg-slate-300 rounded-xl mb-4"></div>
                                <div className="space-y-3">
                                    <div className="h-6 bg-slate-300 rounded w-3/4"></div>
                                    <div className="h-4 bg-slate-300 rounded w-1/2"></div>
                                    <div className="h-10 bg-slate-300 rounded"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : books.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-xl p-12 text-center border border-slate-200">
                        <div className="w-24 h-24 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-semibold text-slate-700 mb-3">No Books to Return</h3>
                        <p className="text-slate-500 text-lg">You don&apos;t have any issued books that need to be returned.</p>
                        <div className="mt-6">
                            <span className="text-4xl">📚</span>
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {books.map((book) => (
                            <div key={book.tran_id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-blue-200 overflow-hidden">
                                {/* Book Image */}
                                <div className="relative overflow-hidden">
                                    {book.books?.image_url ? (
                                        <img
                                            src={book.books.image_url}
                                            alt={book.books.title || "Book cover"}
                                            className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    ) : (
                                        <div className="w-full h-56 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                                            <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                            </svg>
                                        </div>
                                    )}
                                </div>

                                {/* Book Details */}
                                <div className="p-6">
                                    <div className="mb-4">
                                        <h2 className="text-xl font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
                                            {book.books?.title || "Untitled Book"}
                                        </h2>

                                        <div className="space-y-2">
                                            <div className="flex items-center text-sm text-slate-600">
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
                                                <span className="font-medium">Author : </span>
                                                <span className="ml-1 font-mono">{book.books.author}</span>
                                            </div>

                                            {book.books?.genre && (
                                                <div className="flex items-center text-sm text-slate-600">
                                                    <svg className="w-4 h-4 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                                    </svg>
                                                    <span className="font-medium">Genre:</span>
                                                    <span className="ml-1">{book.books.genre}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Return Button */}
                                    <button
                                        onClick={() => onReturnClick(book.tran_id)}
                                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                        </svg>
                                        Return Book
                                    </button>
                                </div>
                                <ConfirmDialog
                                    open={confirmOpen}
                                    title="Confirm Book Return"
                                    message="Are you sure you want to return this book?"
                                    confirmText="Yes, Return"
                                    cancelText="Cancel"
                                    variant="warning"
                                    onConfirm={() => {
                                        if (selectedTranId !== null) {
                                            handleReturn(selectedTranId);
                                        }
                                        setConfirmOpen(false);
                                        setSelectedTranId(null);
                                    }}
                                    onCancel={() => {
                                        setConfirmOpen(false);
                                        setSelectedTranId(null);
                                    }}
                                />


                                {/* Hover effect bottom border */}
                                <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}