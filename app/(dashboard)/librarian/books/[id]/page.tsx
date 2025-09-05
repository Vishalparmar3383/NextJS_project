/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect, useState } from "react";
import { BookOpen, User, Hash, Calendar, Tag, FileText, Edit3, ArrowLeft, Trash2 } from 'lucide-react';
import Link from "next/link";
import ConfirmDialog from "@/app/components/ConfirmDialog";
import { useParams } from 'next/navigation';
import Snackbar from "@/app/components/Snackbar";

interface Book {
    book_id: number; // Changed from id to book_id
    title: string;
    author: string;
    isbn: string;
    year: string;
    genre: string;
    image_url: string;
    description: string;
}

export default function BookDetailPage() {
    const [book, setBook] = useState<Book | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedBook, setSelectedBook] = useState<any>(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const params = useParams();
    const bookId = params?.id as string;
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMsg, setSnackbarMsg] = useState('');
    const [snackbarType, setSnackbarType] = useState<'success' | 'error' | 'info'>('info');

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await fetch(`/api/librarian/books/${bookId}`);
                const data = await res.json();
                if (data.success) {
                    setBook(data.book);
                }
            } catch (error) {
                console.error("Failed to load book:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBook();
    }, [bookId]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-4 sm:py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center min-h-[60vh]">
                        <div className="text-center">
                            <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-slate-700 text-lg">Loading book details...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!book) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-4 sm:py-8 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center min-h-[60vh]">
                        <div className="text-center">
                            <BookOpen className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                            <p className="text-red-600 text-lg font-medium">Book not found.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-4 sm:py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-6 sm:mb-8">
                    <button className="flex items-center gap-2 text-slate-600 hover:text-slate-800 transition-colors duration-200 mb-4">
                        <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                        <Link href="/librarian/books" className="text-base sm:text-lg font-medium">Back to Library</Link>
                    </button>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-2">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Book Details</h1>
                            <p className="text-slate-700 text-sm sm:text-base">Complete information about this book</p>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-white/20 overflow-hidden">
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 p-4 sm:p-8">
                        {/* Book Cover */}
                        <div className="xl:col-span-1 flex justify-center xl:justify-start">
                            <div className="w-full max-w-sm xl:max-w-none xl:sticky xl:top-8">
                                {book.image_url ? (
                                    <div className="relative group">
                                        <img
                                            src={book.image_url}
                                            alt={book.title}
                                            className="w-full aspect-[3/4] object-cover rounded-xl sm:rounded-2xl shadow-lg border border-slate-200 group-hover:shadow-xl transition-shadow duration-300"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                ) : (
                                    <div className="w-full aspect-[3/4] bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl sm:rounded-2xl flex items-center justify-center border border-slate-200 shadow-lg">
                                        <div className="text-center">
                                            <BookOpen className="w-12 h-12 sm:w-16 sm:h-16 text-slate-400 mx-auto mb-2" />
                                            <p className="text-slate-500 text-sm">No cover image</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Book Information */}
                        <div className="xl:col-span-2 space-y-6">
                            {/* Title and Author */}
                            <div className="space-y-2 text-center xl:text-left">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">{book.title}</h2>
                                <div className="flex items-center justify-center xl:justify-start gap-2 text-lg sm:text-xl text-slate-700">
                                    <User className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 flex-shrink-0" />
                                    <span>by {book.author}</span>
                                </div>
                            </div>

                            {/* Book Details Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {/* ISBN */}
                                <div className="bg-slate-50/50 rounded-xl p-4 border border-slate-200 hover:bg-slate-50/80 transition-colors duration-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Hash className="w-4 h-4 text-indigo-600" />
                                        </div>
                                        <span className="font-semibold text-slate-800">ISBN</span>
                                    </div>
                                    <p className="text-slate-700 font-mono text-sm break-all">{book.isbn}</p>
                                </div>

                                {/* Year */}
                                <div className="bg-slate-50/50 rounded-xl p-4 border border-slate-200 hover:bg-slate-50/80 transition-colors duration-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Calendar className="w-4 h-4 text-indigo-600" />
                                        </div>
                                        <span className="font-semibold text-slate-800">Publication Year</span>
                                    </div>
                                    <p className="text-slate-700">{book.year}</p>
                                </div>

                                {/* Genre */}
                                <div className="bg-slate-50/50 rounded-xl p-4 border border-slate-200 sm:col-span-2 hover:bg-slate-50/80 transition-colors duration-200">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Tag className="w-4 h-4 text-indigo-600" />
                                        </div>
                                        <span className="font-semibold text-slate-800">Genre</span>
                                    </div>
                                    <p className="text-slate-700">{book.genre}</p>
                                </div>
                            </div>

                            {/* Description */}
                            {book.description && (
                                <div className="bg-slate-50/50 rounded-xl p-4 sm:p-6 border border-slate-200 hover:bg-slate-50/80 transition-colors duration-200">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <FileText className="w-4 h-4 text-indigo-600" />
                                        </div>
                                        <span className="font-semibold text-slate-800 text-lg">Description</span>
                                    </div>
                                    <p className="text-slate-700 leading-relaxed text-sm sm:text-base">{book.description}</p>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                                <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 flex-1 sm:flex-none">
                                    <Edit3 className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200" />
                                    <Link href={`/librarian/books/${book.book_id}/edit`} className="text-sm sm:text-base">Edit Book Details</Link>
                                </button>
                                
                                <button
                                    onClick={() => {
                                        setSelectedBook(book);
                                        setShowConfirm(true);
                                    }}
                                    className="group flex items-center justify-center gap-3 bg-gradient-to-r from-red-500 to-rose-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-lg hover:shadow-xl hover:from-red-600 hover:to-rose-700 transform hover:scale-[1.02] transition-all duration-200 flex-1 sm:flex-none"
                                >
                                    <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-200" />
                                    <span className="text-sm sm:text-base">Delete Book</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modals and Snackbar */}
                <ConfirmDialog
                    open={showConfirm}
                    title="Confirm Delete"
                    message={`Are you sure you want to delete "${selectedBook?.title}"?`}
                    onConfirm={async () => {
                        try {
                            const res = await fetch(`/api/librarian/books/${selectedBook?.book_id}`, {
                                method: 'DELETE',
                            });
                            const data = await res.json();

                            if (data.success) {
                                setSnackbarMsg('Book deleted successfully');
                                setSnackbarType('success');
                                setSnackbarOpen(true);
                                setShowConfirm(false);
                                setSelectedBook(null);

                                setTimeout(() => {
                                    window.location.href = '/librarian/books';
                                }, 1000);
                            } else {
                                setSnackbarMsg(data.message || 'Failed to delete book');
                                setSnackbarType('error');
                                setSnackbarOpen(true);
                                setShowConfirm(false);
                                setSelectedBook(null);
                            }
                        } catch (error) {
                            console.error("Delete failed:", error);
                            setSnackbarMsg('Server error while deleting');
                            setSnackbarType('error');
                            setSnackbarOpen(true);
                            setShowConfirm(false);
                            setSelectedBook(null);
                        }
                    }}
                    onCancel={() => {
                        setShowConfirm(false);
                        setSelectedBook(null);
                    }}
                />
                
                <Snackbar
                    message={snackbarMsg}
                    type={snackbarType}
                    open={snackbarOpen}
                    onClose={() => setSnackbarOpen(false)}
                />
            </div>
        </div>
    );
}