'use client';
import { useEffect, useState } from 'react';

type User = {
    name: string;
    email: string;
    role: 'patron' | 'librarian' | 'admin';
};

type AccountStats = {
    booksRead: number;
    currentlyBorrowed: number;
    favorites: number;
    totalFines: number;
};

export default function AccountDetailsCard() {
    const [user, setUser] = useState<User | null>(null);
    const [stats, setStats] = useState<AccountStats>({
        booksRead: 0,
        currentlyBorrowed: 0,
        favorites: 0,
        totalFines: 0,
    });

    useEffect(() => {
        const fetchUserAndStats = async () => {
            try {
                const userRes = await fetch('/api/patron/me');
                const userData = await userRes.json();

                if (!userRes.ok) {
                    console.error('Error fetching user:', userData.error);
                    return;
                }

                setUser(userData.user);

                const statsRes = await fetch('/api/patron/stats');
                const statsData = await statsRes.json();

                if (!statsRes.ok) {
                    console.error('Error fetching stats:', statsData.error);
                    return;
                }

                setStats(statsData);
            } catch (err) {
                console.error('Failed to fetch user or stats', err);
            }
        };

        fetchUserAndStats();
    }, []);

    if (!user) {
        return (
            <div className="p-6">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full mx-auto">
                    <div className="animate-pulse">
                        <div className="w-24 h-24 bg-slate-300 rounded-full mx-auto mb-4"></div>
                        <div className="h-6 bg-slate-300 rounded w-3/4 mx-auto mb-2"></div>
                        <div className="h-4 bg-slate-300 rounded w-1/2 mx-auto"></div>
                    </div>
                    <p className="text-center mt-6 text-slate-600">Loading account details...</p>
                </div>
            </div>
        );
    }

    const getRoleColor = (role: string) => {
        switch (role) {
            case 'admin':
                return 'bg-purple-100 text-purple-800 border-purple-200';
            case 'librarian':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'patron':
                return 'bg-green-100 text-green-800 border-green-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    return (
        <div className="space-y-10">
            {/* User Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                <div className="text-center mb-8">
                    <div className="relative inline-block">
                        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center text-4xl font-bold shadow-xl border-4 border-white">
                            {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mt-4">{user.name}</h2>
                    <p className="text-slate-500">{user.email}</p>
                </div>
                <div className="text-center">
                    <span
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold border-2 ${getRoleColor(
                            user.role
                        )}`}
                    >
                        {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                    </span>
                </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-700 mb-6">Library Stats</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <StatCard label="Books Read" value={stats.booksRead} color="blue" />
                    <StatCard label="Currently Borrowed" value={stats.currentlyBorrowed} color="green" />
                    <StatCard label="Favorites" value={stats.favorites} color="purple" />
                    <StatCard label="Total Fines" value={`$${stats.totalFines.toFixed(2)}`} color="red" />
                </div>
            </div>
        </div>
    );
}

function StatCard({
    label,
    value,
    color,
}: {
    label: string;
    value: number | string;
    color: 'blue' | 'green' | 'purple' | 'red';
}) {
    const colorClasses: Record<string, string> = {
        blue: 'from-blue-50 to-blue-100 border-blue-200 text-blue-700 bg-blue-500',
        green: 'from-green-50 to-green-100 border-green-200 text-green-700 bg-green-500',
        purple: 'from-purple-50 to-purple-100 border-purple-200 text-purple-700 bg-purple-500',
        red: 'from-red-50 to-red-100 border-red-200 text-red-700 bg-red-500',
    };

    return (
        <div
            className={`bg-gradient-to-br ${colorClasses[color]} rounded-xl p-6 text-center border hover:shadow-lg transition-shadow`}
        >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${colorClasses[color]}`}>
                <span className="text-white font-bold text-lg">{typeof value === 'number' ? '+' : ''}</span>
            </div>
            <div className="text-2xl font-bold mb-1">{value}</div>
            <div className="text-sm font-medium">{label}</div>
        </div>
    );
}
