import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const basicAuth = (req: NextRequest) => {
  const authHeader = req.headers.get('authorization');

  const USER = process.env.NEXT_PUBLIC_BASIC_AUTH_USER || 'admin';
  const PASS = process.env.NEXT_PUBLIC_BASIC_AUTH_PASS || 'geheim123';

  if (!authHeader) {
    return false;
  }

  const base64 = authHeader.split(' ')[1];
  const [user, pass] = Buffer.from(base64, 'base64').toString().split(':');

  return user === USER && pass === PASS;
};

export function middleware(req: NextRequest) {
  const isProtectedPath = !req.nextUrl.pathname.startsWith('/api'); // Exclude API routes if needed

  if (isProtectedPath && !basicAuth(req)) {
    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}
