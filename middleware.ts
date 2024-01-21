// 로그인/회원가입 페이지는 비로그인 사용자만 접근 가능
// 메인 페이지는 로그인 사용자만 접근가능
// 사용자에게 화면을 비춰지지 않고 우선으로 응답 수정 가능

import {} from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get("refreshToken")
    const userAgent = request.headers.get("user-agent")
    const { pathname } = request.nextUrl
    console.log("session middleware refreshToken", refreshToken)
    console.log("pathname", pathname)
    // 회원가입/로그인 페이지는 이미 로그인된 유저라면 메인 페이지로 리다이렉트
    if (userAgent && pathname.includes("favicon"))
      if (pathname === "/auth") {
        if (refreshToken) {
          return NextResponse.redirect(new URL(`/`, request.url))
        }
        return NextResponse.next()
      }

  if (!refreshToken) {
    return NextResponse.redirect(new URL("/auth?type=login", request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
