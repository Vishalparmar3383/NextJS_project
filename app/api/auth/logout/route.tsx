import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { verifyToken } from '@/app/utils/jwt';

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const token = req.headers.get('cookie')?.split('authToken=')[1]?.split(';')[0];

        if (token) {
            const decoded = await verifyToken(token);

            if (decoded && decoded.userId) {
                await prisma.logs.create({
                    data: {
                        description: `User (${decoded.email}) logged out`,
                        user_id: decoded.userId,
                    },
                });
            }
        }

        const response = NextResponse.json({
            message: 'Logout successful',
        });

        response.cookies.set('authToken', '', {
            path: '/',
            httpOnly: true,
            maxAge: 0,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

        return response;

    } catch (error) {
        console.error('[LOGOUT ERROR]', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
