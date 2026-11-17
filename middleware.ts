import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Garde légère : la vraie auth est vérifiée dans /admin et les API. */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    if (pathname.startsWith("/admin/login")) return NextResponse.next();
    const session = request.cookies.get("portfolio_admin_session");
    if (!session?.value) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
