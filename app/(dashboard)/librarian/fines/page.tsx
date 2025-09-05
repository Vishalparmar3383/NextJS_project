/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useEffect, useState } from 'react';

interface Fine {
    user: string;
    book: string;
    date_due: string;      // ISO string date
    date_returned: string; // ISO string date
    lateDays: number;
    amount: number;
    status: string;
}

export default function FinesPage() {
    const [fines, setFines] = useState<Fine[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchFines() {
            try {
                const res = await fetch('/api/librarian/fines');
                if (!res.ok) {
                    throw new Error(`API returned status ${res.status}`);
                }

                const data: Fine[] = await res.json();
                setFines(data);
            } catch (err: any) {
                setError(err.message || 'Something went wrong');
            } finally {
                setLoading(false);
            }
        }
        fetchFines();
    }, []);

    if (loading) {
        return (
            <div className="p-10 text-center text-gray-700">
                Loading fines...
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-10 text-center text-red-700">
                Error loading fines: {error}
            </div>
        );
    }

    const totalFineAmount = fines.reduce((acc, fine) => acc + (Number(fine.amount) || 0), 0);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-gray-900">Overdue Fines</h1>

                {fines.length === 0 ? (
                    <div className="text-center p-16 bg-white rounded-xl shadow-md border border-gray-300">
                        <svg
                            className="mx-auto mb-4 h-12 w-12 text-green-700"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            role="img"
                            aria-label="All clear"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12l2 2 4-4m-6 4a9 9 0 110-18 9 9 0 010 18z"
                            />
                        </svg>
                        <p className="text-xl font-semibold text-gray-800">
                            No Outstanding Fines
                        </p>
                        <p className="mt-2 text-gray-600">
                            All library books have been returned on time!
                        </p>
                    </div>
                ) : (
                    <>
                        {/* Summary */}
                        <div className="mb-6 p-4 bg-white rounded-lg border border-gray-300 shadow flex justify-between">
                            <div>
                                <div className="text-gray-600 font-semibold tracking-wide uppercase text-sm">Total Records</div>
                                <div className="text-2xl font-bold text-gray-900">{fines.length}</div>
                            </div>
                            <div>
                                <div className="text-gray-600 font-semibold tracking-wide uppercase text-sm">Total Amount</div>
                                <div className="text-2xl font-bold text-red-700">₹{totalFineAmount.toFixed(2)}</div>
                            </div>
                        </div>

                        {/* Desktop Table */}
                        <div className="hidden md:block overflow-x-auto bg-white rounded-lg shadow border border-gray-300">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr className="bg-gray-100">
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">User</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Book</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Due Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Returned Date</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Late Days</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Fine (₹)</th>
                                        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {fines.map((fine, idx) => (
                                        <tr key={idx} className="hover:bg-gray-50 transition-colors duration-150">
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">{fine.user}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-800">{fine.book}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-700">{new Date(fine.date_due).toLocaleDateString()}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-700">{new Date(fine.date_returned).toLocaleDateString()}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2 py-1 text-xs font-semibold rounded bg-yellow-300 text-yellow-900 border border-yellow-400 select-none">
                                                    {fine.lateDays} day{fine.lateDays > 1 ? 's' : ''}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-red-700 font-semibold">₹{Number(fine.amount ?? 0).toFixed(2)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">{fine.status}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile View */}
                        <div className="md:hidden space-y-4">
                            {fines.map((fine, idx) => (
                                <div key={idx} className="bg-white px-6 py-4 rounded-lg shadow border border-gray-300">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-lg font-semibold text-gray-900">{fine.user}</span>
                                        <span className="text-red-700 font-semibold text-lg">₹{Number(fine.amount ?? 0).toFixed(2)}</span>
                                    </div>
                                    <p className="text-gray-800 mb-1 font-semibold">{fine.book}</p>
                                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                                        <div>
                                            <div className="font-semibold">Due Date</div>
                                            <div>{new Date(fine.date_due).toLocaleDateString()}</div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Returned Date</div>
                                            <div>{new Date(fine.date_returned).toLocaleDateString()}</div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">Late Days</div>
                                            <div>{fine.lateDays} day{fine.lateDays > 1 ? 's' : ''}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
