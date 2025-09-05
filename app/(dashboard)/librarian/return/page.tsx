/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useState } from 'react';

export default function ReturnPage() {
    const [books, setBooks] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchReturnedBooks() {
            try {
                const res = await fetch('/api/librarian/return');
                const result = await res.json();
                if (result?.data) {
                    setBooks(result.data);
                } else {
                    console.error('No data returned');
                }
            } catch (error) {
                console.error('Error fetching returned books:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchReturnedBooks();
    }, []);

    const getStatusBadge = (status: string) => {
        const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
        switch (status?.toLowerCase()) {
            case 'returned':
                return `${baseClasses} bg-green-100 text-green-800 border border-green-200`;
            case 'overdue':
                return `${baseClasses} bg-red-100 text-red-800 border border-red-200`;
            case 'damaged':
                return `${baseClasses} bg-orange-100 text-orange-800 border border-orange-200`;
            case 'lost':
                return `${baseClasses} bg-red-100 text-red-800 border border-red-200`;
            default:
                return `${baseClasses} bg-gray-100 text-gray-800 border border-gray-200`;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">Returned Books</h1>
                            <p className="mt-2 text-sm text-gray-600">
                                Track and manage book returns from library users
                            </p>
                        </div>
                        <div className="flex items-center space-x-3">
                            <div className="bg-white px-4 py-2 rounded-lg shadow-sm border">
                                <span className="text-sm font-medium text-gray-500">Total Returns</span>
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
                                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-600"></div>
                                <p className="text-gray-500 font-medium">Loading returned books...</p>
                            </div>
                        </div>
                    ) : books.length === 0 ? (
                        <div className="text-center py-16">
                            <div className="mx-auto h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                                <svg className="h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Returned Books</h3>
                            <p className="text-gray-500 max-w-sm mx-auto">
                                There are no book returns recorded at the moment. Check back later or refresh the page.
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
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {books.map((item: any, index: number) => (
                                        <tr key={item.id} className={`hover:bg-gray-50 transition-colors duration-150 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                                                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
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
                                                    <div className="flex-shrink-0 h-8 w-8 bg-blue-200 rounded-full flex items-center justify-center">
                                                        <span className="text-xs font-medium text-blue-700">
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
                                                            <div className="flex-shrink-0 h-8 w-8 bg-purple-200 rounded-full flex items-center justify-center">
                                                                <span className="text-xs font-medium text-purple-700">
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
                                                            <div className="flex-shrink-0 h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                                                                <svg className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                </svg>
                                                            </div>
                                                            <div className="ml-3">
                                                                <div className="text-sm font-medium text-gray-500">
                                                                    Not Assigned
                                                                </div>
                                                            </div>
                                                        </div>
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