'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BookOpen, TrendingUp } from 'lucide-react';

interface SummaryStats {
    available: number;
    issued: number;
    pending: number;
    overdueCount: number;
    totalFinesUnpaid: number;
    collectedFines: number;
}

interface Genre {
    genre: string;
}

interface TopBorrowedBook {
    book_id: number;
    _count: {
        book_id: number;
    };
    book_details?: {
        book_id: number;
        title: string;
        author: string;
    };
}

interface ChartData {
    days: string[];
    issued: number[];
    returned: number[];
}

interface DashboardData {
    success: boolean;
    summary: SummaryStats;
    genres: Genre[];
    topBorrowedBooks: TopBorrowedBook[];
    chartData: ChartData;
}

const StatCard = ({ title, value, subtitle, color = "blue" }: {
    title: string;
    value: number | string;
    subtitle?: string;
    color?: string;
}) => {
    const colorClasses = {
        blue: "bg-blue-50 border-blue-200 text-blue-900",
        green: "bg-green-50 border-green-200 text-green-900",
        yellow: "bg-yellow-50 border-yellow-200 text-yellow-900",
        red: "bg-red-50 border-red-200 text-red-900",
        purple: "bg-purple-50 border-purple-200 text-purple-900",
        gray: "bg-gray-50 border-gray-200 text-gray-900"
    };

    return (
        <div className={`p-3 sm:p-4 rounded-lg border ${colorClasses[color as keyof typeof colorClasses]}`}>
            <h3 className="text-xs sm:text-sm font-medium opacity-75">{title}</h3>
            <p className="text-lg sm:text-2xl font-bold mt-1">{value}</p>
            {subtitle && <p className="text-xs mt-1 opacity-75">{subtitle}</p>}
        </div>
    );
};

export default function DashboardPage() {
    const [data, setData] = useState<DashboardData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/librarian');
            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || 'Failed to fetch dashboard data');
            }

            if (result.success) {
                setData(result);
            } else {
                throw new Error(result.message || 'API returned unsuccessful response');
            }
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };



    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading dashboard...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-red-600 text-xl mb-4">Error</div>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <button
                        onClick={fetchDashboardData}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    if (!data) {
        return <div>No data available</div>;
    }

    // Prepare chart data for recharts
    const chartData = data.chartData.days.map((day, index) => ({
        date: day,
        issued: data.chartData.issued[index],
        returned: data.chartData.returned[index],
    }));

    // Sort top borrowed books by count (descending)
    const sortedTopBooks = [...data.topBorrowedBooks].sort((a, b) => b._count.book_id - a._count.book_id);

    return (
        <div className="min-h-screen bg-gray-50 p-2 sm:p-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Library Dashboard</h1>

                {/* Summary Statistics */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4 mb-4 sm:mb-6">
                    <StatCard
                        title="Available Books"
                        value={data.summary.available}
                        color="green"
                    />
                    <StatCard
                        title="Issued Books"
                        value={data.summary.issued}
                        color="blue"
                    />
                    <StatCard
                        title="Pending Requests"
                        value={data.summary.pending}
                        color="yellow"
                    />
                    <StatCard
                        title="Overdue Books"
                        value={data.summary.overdueCount}
                        color="red"
                    />
                    <StatCard
                        title="Unpaid Fines"
                        value={`₹${data.summary.totalFinesUnpaid.toFixed(2)}`}
                        color="red"
                    />
                    <StatCard
                        title="Collected Fines"
                        value={`₹${data.summary.collectedFines.toFixed(2)}`}
                        subtitle="Last 30 days"
                        color="green"
                    />
                </div>

                {/* Charts Section */}
                <div className="overflow-x-auto grid grid-cols-1 xl:grid-cols-2 gap-3 sm:gap-6 mb-4 sm:mb-6">
                    {/* Transactions Chart */}
                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border">
                        <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Daily Transactions (Last 30 Days)</h2>
                        <ResponsiveContainer width="100%" height={250}>
                            <LineChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="date"
                                    tick={{ fontSize: 12 }}
                                    tickFormatter={(value) => {
                                        const date = new Date(value);
                                        return `${date.getMonth() + 1}/${date.getDate()}`;
                                    }}
                                />
                                <YAxis />
                                <Tooltip
                                    labelFormatter={(value) => `Date: ${value}`}
                                    formatter={(value, name) => {
                                        if (name === 'issued') return [value, 'Books Issued'];
                                        if (name === 'returned') return [value, 'Books Returned'];
                                        return [value, name]; // fallback to original name
                                    }}
                                />

                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="issued"
                                    stroke="#3B82F6"
                                    strokeWidth={2}
                                    name="Books Issued"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="returned"
                                    stroke="#10B981"
                                    strokeWidth={2}
                                    name="Books Returned"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Top Borrowed Books */}
                    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border">
                        <div className="flex items-center mb-2 sm:mb-3">
                            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mr-2" />
                            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Top Borrowed Books</h2>
                        </div>

                        {sortedTopBooks.length > 0 ? (
                            <div className="space-y-2 max-h-64 sm:max-h-80 overflow-y-auto">
                                {sortedTopBooks.slice(0, 10).map((book, index) => (
                                    <div
                                        key={book.book_id}
                                        className="flex items-center justify-between p-2 sm:p-3 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg border border-purple-100 hover:shadow-sm transition-shadow"
                                    >
                                        <div className="flex items-center space-x-3 flex-1 min-w-0">
                                            <div className={`
                                                flex items-center justify-center w-6 h-6 rounded-full text-white font-bold text-xs flex-shrink-0
                                                ${index === 0 ? 'bg-yellow-500' :
                                                    index === 1 ? 'bg-gray-400' :
                                                        index === 2 ? 'bg-amber-600' : 'bg-purple-500'}
                                            `}>
                                                {index + 1}
                                            </div>
                                            <BookOpen className="w-4 h-4 text-purple-600 flex-shrink-0" />
                                            <div className="min-w-0 flex-1">
                                                <div className="font-medium text-gray-900 text-sm truncate">
                                                    {book.book_details?.title || `Book ID: ${book.book_id}`}
                                                </div>
                                                {book.book_details?.author && (
                                                    <div className="text-xs text-gray-500 truncate">
                                                        by {book.book_details.author}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="text-right flex-shrink-0 ml-3">
                                            <div className="text-sm font-bold text-purple-700">
                                                {book._count.book_id}
                                            </div>
                                            <div className="text-xs text-gray-500">
                                                borrows
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                {/* Summary at bottom */}
                                <div className="mt-3 pt-3 border-t border-gray-200">
                                    <div className="grid grid-cols-2 gap-3 text-xs">
                                        <div className="bg-blue-50 p-2 rounded text-center">
                                            <div className="font-semibold text-blue-700">Total Books</div>
                                            <div className="text-blue-600 font-bold">{sortedTopBooks.length}</div>
                                        </div>
                                        <div className="bg-green-50 p-2 rounded text-center">
                                            <div className="font-semibold text-green-700">Total Borrows</div>
                                            <div className="text-green-600 font-bold">
                                                {sortedTopBooks.reduce((sum, book) => sum + book._count.book_id, 0)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center h-32 sm:h-48 text-gray-500">
                                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 mb-2 opacity-50" />
                                <p className="text-xs sm:text-sm font-medium">No borrowing data available</p>
                                <p className="text-xs">No books have been borrowed recently</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Genres Section */}
                <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm border">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Available Genres</h2>
                    {data.genres.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                            {data.genres.map((genre, index) => (
                                <div
                                    key={index}
                                    className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm text-center font-medium"
                                >
                                    {genre.genre}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 text-xs sm:text-sm">No genres available</p>
                    )}
                </div>
            </div>
        </div>
    );
}