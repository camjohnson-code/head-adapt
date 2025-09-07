import { NextRequest, NextResponse } from 'next/server';

const privateRoutes = ['/app'];

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (privateRoutes.includes(pathname)) {
    const token = request.cookies.get('token');

    if (!token) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }
}
