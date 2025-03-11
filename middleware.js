import { NextResponse } from "next/server";

export function middleware(req) {
 const token = req.cookies.get("token")?.value;
 
  if (!token && req.nextUrl.pathname==="/profile") {
    return NextResponse.redirect(new URL("/authentication/login", req.url)); 
  }

  if (token && (req.nextUrl.pathname === "/authentication/login" || req.nextUrl.pathname === "/authentication/register")) {
    return NextResponse.redirect(new URL("/profile", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/authentication/login", "/authentication/register","/profile"], 
};
