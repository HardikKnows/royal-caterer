import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.get("admin-auth")?.value;

  if (!isLoggedIn && req.nextUrl.pathname.startsWith("/admin/dashboard")) {
    return NextResponse.redirect(new URL("/admin", req.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
