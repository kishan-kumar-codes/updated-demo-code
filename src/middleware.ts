
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getSession } from 'next-auth/react';

export async function middleware(request: NextRequest) {
    // Check if the current path is the home page
    // if (request.nextUrl.pathname === '/' || request.nextUrl.pathname === '/sign-in') {
    //     return NextResponse.next()
    // }

    // const requestForNextAuth = {
    //     headers: {
    //         cookie: request.headers.get('cookie'),
    //     },
    // };

    // const session = await getSession({ req: requestForNextAuth });

    // if (!session) {
    //     // Check if the session email is in the list of allowed emails
    //     return NextResponse.redirect(new URL('/', request.url))

    // }


    // return NextResponse.redirect(new URL('/', request.url))
    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!api/auth|_next/static|_next/image|favicon.ico).*)',
    ],
}
