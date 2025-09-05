/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useState } from 'react';

export default function IssuePage() {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadIssuedBooks() {
            try {
                const res = await fetch('/api/librarian/issue');
                const data = await res.json();
                if (data.data) {
                    setBooks(data.data);
                } else {
                    console.error('No books data found.');
                }
            } catch (err) {
                console.error('Error loading issued books:', err);
            } finally {
                setLoading(false);
            }
        }

        loadIssuedBooks();
    }, []);

    const getStatusBadge = (status: string) => {
        const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
        switch (status?.toLowerCase()) {
            case 'approved':
                return `${baseClasses} bg-green-100 text-green-800 border border-green-200`;
            case 'pending':
                return `${baseClasses} bg-yellow-100 text-yellow-800 border border-yellow-200`;
            case 'rejected':
                return `${baseClasses} bg-red-100 text-red-800 border border-red-200`;
            default:
                return `${baseClasses} bg-gray-100 text-gray-800 border border-gray-200`;
        }
    };

    const formatDate = (dateString: string | null | undefined) => {
        if (!dateString) return '—';
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            });
        } catch (error) {
            return '—';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Issue Requests</h1>
                            <p className="mt-2 text-sm text-gray-600">
                                Manage and track book issue requests from library users
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
                                <span className="text-sm font-medium text-gray-500">Total Requests</span>
                                <div className="text-2xl font-bold text-gray-900">{books.length}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                    {loading ? (
                        <div className="flex items-center justify-center py-16">
                            <div className="flex flex-col items-center space-y-4">
                                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
                                <p className="text-gray-500 font-medium">Loading issue requests...</p>
                            </div>
                        </div>
                    ) : books.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="mx-auto h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Issue Requests</h3>
                            <p className="text-gray-500 max-w-sm mx-auto">
                                There are no book issue requests at the moment. Check back later or refresh the page.
                            </p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Book Title
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Requested By
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Approved By
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Date Issued
                                        </th>
                                        <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {books.map((item: any, index: number) => (
                                        <tr key={item.id} className={`hover:bg-gray-50 transition-colors duration-150 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                        </svg>
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-semibold text-gray-900">
                                                            {item.books?.title || 'Unknown Title'}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                                                        <span className="text-xs font-medium text-gray-600">
                                                            {item.users_book_tran_history_requested_byTousers?.name?.charAt(0)?.toUpperCase() || '?'}
                                                        </span>
                                                    </div>
                                                    <div className="ml-3">
                                                        <div className="text-sm font-medium text-gray-900">
                                                            {item.users_book_tran_history_requested_byTousers?.name || '—'}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    {item.users_book_tran_history_approved_byTousers?.name ? (
                                                        <>
                                                            <div className="flex-shrink-0 h-8 w-8 bg-green-200 rounded-full flex items-center justify-center">
                                                                <span className="text-xs font-medium text-green-700">
                                                                    {item.users_book_tran_history_approved_byTousers.name.charAt(0).toUpperCase()}
                                                                </span>
                                                            </div>
                                                            <div className="ml-3">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {item.users_book_tran_history_approved_byTousers.name}
                                                                </div>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div className="flex items-center">
                                                            <div className="flex-shrink-0 h-8 w-8 bg-yellow-100 rounded-full flex items-center justify-center">
                                                                <svg className="h-4 w-4 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            </div>
                                                            <div className="ml-3">
                                                                <div className="text-sm font-medium text-gray-500">
                                                                    Pending
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    {item.date_issued ? (
                                                        <>
                                                            <div className="flex-shrink-0 h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                                                <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                </svg>
                                                            </div>
                                                            <div className="text-sm font-medium text-gray-900">
                                                                {formatDate(item.date_issued)}
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <div className="text-sm text-gray-500">—</div>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={getStatusBadge(item.status)}>
                                                    {item.status?.charAt(0)?.toUpperCase() + item.status?.slice(1)?.toLowerCase() || 'Unknown'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}