// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const primary = request.cookies.get("primary")?.value;
  const primaryForeground = request.cookies.get("primary-foreground")?.value;

  if (primary) {
    response.headers.set("x-theme-primary", primary);
  }

  if (primaryForeground) {
    response.headers.set("x-theme-primary-foreground", primaryForeground);
  }

  return response;
}
