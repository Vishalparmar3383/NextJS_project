'use client';

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PasswordStrengthChecker from "@/app/components/PasswordStrengthChecker";

export default function ResetPasswordClient() {
    const searchParams = useSearchParams();
    const email = searchParams.get("email");

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState<string | null>(null);
    const [status, setStatus] = useState<'success' | 'error' | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setStatus('error');
            setMessage("Invalid reset link");
            return;
        }

        if (newPassword !== confirmPassword) {
            setStatus('error');
            setMessage("Passwords do not match");
            return;
        }

        try {
            const res = await fetch("/api/auth/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password: newPassword }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setMessage("Password reset successful! Redirecting to login...");
                setTimeout(() => router.push("/login"), 2000);
            } else {
                setStatus("error");
                setMessage(data.error || "Something went wrong");
            }
        } catch {
            setStatus("error");
            setMessage("Server error. Try again.");
        }
    };

    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white/50 to-indigo-100/50 px-4 backdrop-blur-sm">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md bg-white/90 shadow-xl rounded-3xl p-10 space-y-6"
            >
                <h1 className="text-2xl font-bold text-center text-gray-800">
                    Reset Password
                </h1>

                <div>
                    <label className="block text-gray-800 font-medium mb-1">
                        New Password
                    </label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 text-gray-800 bg-white rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                        placeholder="New password"
                    />
                    <PasswordStrengthChecker password={newPassword} />
                </div>

                <div>
                    <label className="block text-gray-800 font-medium mb-1">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        className="w-full px-4 py-3 text-gray-800 bg-white rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500"
                        placeholder="Confirm password"
                    />
                </div>

                {message && (
                    <div
                        className={`text-sm p-3 rounded-xl font-medium ${status === "success"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                    >
                        {message}
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition duration-200"
                >
                    Reset Password
                </button>
            </form>
        </main>
    );
}
