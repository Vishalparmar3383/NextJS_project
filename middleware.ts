import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./app/utils/jwt";

export default async function middleware(request: NextRequest) {
  const authToken = request.cookies.get("authToken")?.value;
  const { pathname } = request.nextUrl;

  // Debug logging
  // console.log('=== MIDDLEWARE DEBUG ===');
  // console.log('Pathname:', pathname);
  // console.log('Auth token exists:', !!authToken);
  // console.log('JWT_SECRET exists:', !!process.env.JWT_SECRET);

  if (!authToken) {
    // Block access and redirect to login if no auth
    if (
      pathname.startsWith("/admin") ||
      pathname.startsWith("/librarian") ||
      pathname.startsWith("/patron")
    ) {
      console.log('No auth token, redirecting to login');
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } else {
    // Verify JWT token
    const payload = await verifyToken(authToken);
    // console.log('Token verification result:', payload);
    // console.log('User role from token:', payload?.role);
    // console.log('Current pathname:', pathname);
    
    if (!payload) {
      // Invalid token, clear it and redirect to login
      console.log('Invalid token, clearing and redirecting to login');
      const response = NextResponse.redirect(new URL("/login", request.url));
      response.cookies.set('authToken', '', {
        path: '/',
        httpOnly: true,
        maxAge: 0,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict'
      });
      return response;
    }

    // Prevent dashboard switching by URL manipulation
    // console.log('Checking role-based access...');
    // console.log('User role:', payload.role);
    // console.log('Requested path:', pathname);
    
    if (pathname.startsWith("/admin") && payload.role !== "admin") {
      console.log('❌ PATRON/LIBRARIAN trying to access ADMIN area - REDIRECTING');
      return NextResponse.redirect(new URL(`/${payload.role}`, request.url));
    }
    
    if (pathname.startsWith("/librarian") && payload.role !== "librarian") {
      console.log('❌ PATRON/ADMIN trying to access LIBRARIAN area - REDIRECTING');
      return NextResponse.redirect(new URL(`/${payload.role}`, request.url));
    }
    
    if (pathname.startsWith("/patron") && payload.role !== "patron") {
      console.log('❌ LIBRARIAN/ADMIN trying to access PATRON area - REDIRECTING');
      return NextResponse.redirect(new URL(`/${payload.role}`, request.url));
    }

    // Prevent logged-in users from visiting login or register
    if (pathname === "/login" || pathname === "/register") {
      console.log('Logged in user trying to access auth pages, redirecting to dashboard');
      return NextResponse.redirect(new URL(`/${payload.role}`, request.url));
    }
  }

  console.log('✅ Middleware allowing request to continue');
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/librarian/:path*",
    "/patron/:path*",
    "/login",
    "/register",
  ],
};
