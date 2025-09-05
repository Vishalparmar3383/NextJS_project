/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './jwt';

export interface AuthenticatedRequest extends NextRequest {
    user?: {
        userId: number;
        email: string;
        role: string;
    };
}

export function withAuth(handler: (req: AuthenticatedRequest, context?: any) => Promise<NextResponse>) {
    return async (req: AuthenticatedRequest, context?: any) => {
        try {
            const token = req.cookies.get('authToken')?.value;

            if (!token) {
                return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
            }

            const payload = await verifyToken(token);
            if (!payload) {
                return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
            }

            // Attach user info to request
            req.user = payload;

            return handler(req, context);
        } catch (error) {
            console.error('[AUTH MIDDLEWARE ERROR]', error);
            return NextResponse.json({ error: 'Authentication failed' }, { status: 401 });
        }
    };
}

export function withRoleAuth(allowedRoles: string[]) {
    return (handler: (req: AuthenticatedRequest, context?: any) => Promise<NextResponse>) => {
        return withAuth(async (req: AuthenticatedRequest, context?: any) => {
            if (!req.user) {
                return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
            }

            if (!allowedRoles.includes(req.user.role)) {
                return NextResponse.json({ error: 'Insufficient permissions' }, { status: 403 });
            }

            return handler(req, context);
        });
    };
}