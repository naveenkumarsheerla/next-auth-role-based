import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server';

export default withAuth(async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const { pathname } = req.nextUrl;

    const adminRoutes = ["/films_details", "/films_details/createUser"];
    const userRoutes = ["/user"];

    if (adminRoutes.includes(pathname)
        && token?.role !== "admin") {
        return NextResponse.rewrite(
            new URL("/denied", req.url)
        )
    }

    if (userRoutes.includes(pathname)
        && token?.role !== "user") {
        return NextResponse.rewrite(
            new URL("/denied", req.url)
        )
    }



},
    {
        callbacks: {
            authorized: ({ token }) => !!token
        },
    }
);



export const config = { matcher: ["/dashboard", "/films_details", "/user", "/createUser", "/films_details/characters"] }; 