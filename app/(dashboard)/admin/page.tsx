/* eslint-disable @typescript-eslint/no-explicit-any */
// app/admin/page.tsx
'use client';

import React, { useEffect, useState } from 'react';

export default function AdminDashboard() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [configs, setConfigs] = useState<any>({});
    const [loadingConfigs, setLoadingConfigs] = useState(true);
    const [cfgDialogOpen, setCfgDialogOpen] = useState(false);
    const [cfgKey, setCfgKey] = useState('');
    const [cfgValue, setCfgValue] = useState('');
    const [cfgDesc, setCfgDesc] = useState('');
    const [cfgSaving, setCfgSaving] = useState(false);
    const [cfgEditing, setCfgEditing] = useState(false);
    const [cfgError, setCfgError] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/admin')
            .then((res) => res.json())
            .then(setData)
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        const loadConfigs = async () => {
            try {
                const res = await fetch('/api/admin/config');
                const json = await res.json();
                if (json.success) {
                    setConfigs(json.configs || {});
                }
            } catch (e) {
                // no-op
            } finally {
                setLoadingConfigs(false);
            }
        };
        loadConfigs();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="animate-pulse space-y-8">
                        {/* Header skeleton */}
                        <div className="text-center">
                            <div className="h-10 bg-slate-200 rounded-lg w-80 mx-auto mb-2"></div>
                            <div className="h-4 bg-slate-200 rounded w-64 mx-auto"></div>
                        </div>

                        {/* Cards skeleton */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                                    <div className="h-4 bg-slate-200 rounded w-20 mb-3"></div>
                                    <div className="h-8 bg-slate-200 rounded w-12"></div>
                                </div>
                            ))}
                        </div>

                        {/* Activity skeleton */}
                        <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                            <div className="h-6 bg-slate-200 rounded w-48 mb-6"></div>
                            <div className="space-y-4">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="border border-slate-200 rounded-lg p-4">
                                        <div className="h-4 bg-slate-200 rounded w-full"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                        Admin Dashboard
                    </h1>
                    <p className="text-slate-600">Manage your library operations and monitor activities</p>
                </div>

                {/* Summary cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    <Card
                        title="Total Patrons"
                        value={data.totalPatrons}
                        icon="👥"
                        gradient="from-blue-500 to-blue-600"
                        bgGradient="from-blue-50 to-blue-100"
                    />
                    <Card
                        title="Total Librarians"
                        value={data.totalLibrarians}
                        icon="👨‍💼"
                        gradient="from-purple-500 to-purple-600"
                        bgGradient="from-purple-50 to-purple-100"
                    />
                    <Card
                        title="Total Items"
                        value={data.totalItems}
                        icon="📦"
                        gradient="from-emerald-500 to-emerald-600"
                        bgGradient="from-emerald-50 to-emerald-100"
                    />
                    <Card
                        title="Issued Today"
                        value={data.issuedToday}
                        icon="📤"
                        gradient="from-orange-500 to-orange-600"
                        bgGradient="from-orange-50 to-orange-100"
                    />
                    <Card
                        title="Returned Today"
                        value={data.returnedToday}
                        icon="📥"
                        gradient="from-teal-500 to-teal-600"
                        bgGradient="from-teal-50 to-teal-100"
                    />
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xl">⚡</span>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-slate-800">Recent Activity</h2>
                            <p className="text-slate-600 text-sm">Latest item transactions and user activities</p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {(data?.formattedActivity ?? []).map((activity: any, i: number) => {
                            const isIssue = activity.type === 'issue';
                            const userName = activity.userName || 'Unknown User';
                            const itemTitle = activity.itemTitle || 'Unknown Item';
                            const dateStr = activity.date
                                ? new Date(activity.date).toLocaleString()
                                : 'Unknown Date';

                            return (
                                <div key={i} className="group hover:shadow-md transition-all duration-200 border border-slate-200 rounded-lg p-4 bg-gradient-to-r from-white to-slate-50 hover:from-slate-50 hover:to-blue-50">
                                    <div className="flex items-start gap-4">
                                        {/* Icon */}
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 ${isIssue
                                                ? 'bg-gradient-to-r from-orange-400 to-orange-500'
                                                : 'bg-gradient-to-r from-teal-400 to-teal-500'
                                                }`}
                                        >
                                            {isIssue ? '📤' : '📥'}
                                        </div>
                                        {/* Text */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-1 text-sm">
                                                <span className="text-sm text-gray-700">
                                                    👤 {userName}
                                                </span>
                                                <span
                                                    className={`px-2 py-1 rounded-full text-xs font-medium ${isIssue
                                                        ? 'bg-orange-100 text-orange-700'
                                                        : 'bg-teal-100 text-teal-700'
                                                        }`}
                                                >
                                                    {isIssue ? 'issued' : 'returned'}
                                                </span>
                                                <span className="text-slate-600">the item</span>
                                                <span className="font-semibold text-slate-800 bg-slate-100 px-2 py-1 rounded-md text-xs">
                                                    {itemTitle}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2 mt-2">
                                                <span className="text-xs text-slate-500">
                                                    🕒 {dateStr}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {(data?.formattedActivity?.length ?? 0) === 0 && (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl">📋</span>
                                </div>
                                <p className="text-slate-500">No recent activity to display</p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-8">
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xl">⚙️</span>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-slate-800">System Configuration</h2>
                                <p className="text-slate-600 text-sm">View and update key-value settings</p>
                            </div>
                        </div>
                        <button
                            onClick={() => {
                                setCfgEditing(false);
                                setCfgKey('');
                                setCfgValue('');
                                setCfgDesc('');
                                setCfgError(null);
                                setCfgDialogOpen(true);
                            }}
                            className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold hover:from-indigo-700 hover:to-blue-700 shadow-sm"
                        >
                            Add Config
                        </button>
                    </div>

                    {loadingConfigs ? (
                        <div className="text-slate-500">Loading configs...</div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full">
                                <thead className="bg-slate-50">
                                    <tr>
                                        <th className="text-left text-sm font-semibold text-slate-700 px-3 py-2">Key</th>
                                        <th className="text-left text-sm font-semibold text-slate-700 px-3 py-2">Value</th>
                                        <th className="text-left text-sm font-semibold text-slate-700 px-3 py-2">Description</th>
                                        <th className="text-left text-sm font-semibold text-slate-700 px-3 py-2">Updated</th>
                                        <th className="px-3 py-2"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    {Object.keys(configs).length === 0 && (
                                        <tr>
                                            <td colSpan={5} className="px-3 py-4 text-slate-500 text-sm">No configurations yet.</td>
                                        </tr>
                                    )}
                                    {Object.entries<any>(configs).map(([key, cfg]) => (
                                        <tr key={key} className="hover:bg-slate-50">
                                            <td className="px-3 py-2 font-mono text-sm text-slate-800">{key}</td>
                                            <td className="px-3 py-2 text-sm text-slate-700 break-all">{String(cfg.value ?? '')}</td>
                                            <td className="px-3 py-2 text-sm text-slate-600">{cfg.description ?? ''}</td>
                                            <td className="px-3 py-2 text-sm text-slate-500">{cfg.updated_at ? new Date(cfg.updated_at).toLocaleString() : '-'}</td>
                                            <td className="px-3 py-2 text-right">
                                                <button
                                                    onClick={() => {
                                                        setCfgEditing(true);
                                                        setCfgKey(key);
                                                        setCfgValue(String(cfg.value ?? ''));
                                                        setCfgDesc(cfg.description ?? '');
                                                        setCfgError(null);
                                                        setCfgDialogOpen(true);
                                                    }}
                                                    className="px-3 py-1.5 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm"
                                                >
                                                    Edit
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Manage Config Dialog */}
            {cfgDialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.45)' }}>
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4">
                        <div className="p-5 border-b flex items-center justify-between">
                            <h3 className="text-xl font-bold text-slate-900">{cfgEditing ? 'Edit Config' : 'Add Config'}</h3>
                            <button onClick={() => setCfgDialogOpen(false)} className="text-slate-500 hover:text-slate-700">✕</button>
                        </div>
                        <div className="p-5 space-y-4">
                            {!cfgEditing && (
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Key</label>
                                    <input value={cfgKey} onChange={(e) => setCfgKey(e.target.value)} className="w-full border rounded-lg px-3 py-2" placeholder="e.g., SITE_NAME" />
                                </div>
                            )}
                            {cfgEditing && (
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Key</label>
                                    <input value={cfgKey} disabled className="w-full border rounded-lg px-3 py-2 bg-slate-50 text-slate-500" />
                                </div>
                            )}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Value</label>
                                <input value={cfgValue} onChange={(e) => setCfgValue(e.target.value)} className="w-full border rounded-lg px-3 py-2" placeholder="Value" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Description (optional)</label>
                                <textarea value={cfgDesc} onChange={(e) => setCfgDesc(e.target.value)} className="w-full border rounded-lg px-3 py-2" rows={3} />
                            </div>
                            {cfgError && (
                                <div className="text-sm text-red-600">{cfgError}</div>
                            )}
                        </div>
                        <div className="p-5 border-t flex items-center justify-end gap-3">
                            <button onClick={() => setCfgDialogOpen(false)} className="px-4 py-2 rounded border border-slate-300 text-slate-700 hover:bg-slate-50">Cancel</button>
                            <button
                                disabled={cfgSaving}
                                onClick={async () => {
                                    setCfgError(null);
                                    if (!cfgKey && !cfgEditing) {
                                        setCfgError('Config key is required');
                                        return;
                                    }
                                    try {
                                        setCfgSaving(true);
                                        const res = await fetch('/api/admin/config', {
                                            method: 'POST',
                                            headers: { 'Content-Type': 'application/json' },
                                            body: JSON.stringify({ config_key: cfgKey, config_value: cfgValue, description: cfgDesc })
                                        });
                                        const json = await res.json();
                                        if (res.ok && json.success) {
                                            const r = await fetch('/api/admin/config');
                                            const j = await r.json();
                                            if (j.success) setConfigs(j.configs || {});
                                            setCfgDialogOpen(false);
                                        } else {
                                            setCfgError(json.message || 'Failed to save config');
                                        }
                                    } catch (e) {
                                        setCfgError('Server error while saving config');
                                    } finally {
                                        setCfgSaving(false);
                                    }
                                }}
                                className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60"
                            >
                                {cfgSaving ? 'Saving...' : 'Save Config'}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    );
}

function Card({
    title,
    value,
    icon,
    gradient,
    bgGradient
}: {
    title: string;
    value: number;
    icon: string;
    gradient: string;
    bgGradient: string;
}) {
    return (
        <div className={`bg-gradient-to-br ${bgGradient} rounded-xl p-6 shadow-sm border border-white/50 hover:shadow-md transition-all duration-200 group cursor-pointer`}>
            <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200`}>
                    {icon}
                </div>
            </div>
            <div className="space-y-1">
                <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                    {title}
                </div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                    {value?.toLocaleString() || 0}
                </div>
            </div>
        </div>
    );
}
