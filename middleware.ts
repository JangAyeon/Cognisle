// 로그인/회원가입 페이지는 비로그인 사용자만 접근 가능
// 메인 페이지는 로그인 사용자만 접근가능
// 사용자에게 화면을 비춰지지 않고 우선으로 응답 수정 가능
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const userAgent = request.headers.get("user-agent")
  const supabase = createMiddlewareClient({ req: request, res: response })
  const {
    data: { session },
  } = await supabase.auth.getSession()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { pathname, searchParams } = request.nextUrl

  // console.log("user", user)
  // 회원가입/로그인 페이지는 이미 로그인된 유저라면 메인 페이지로 리다이렉트
  if (userAgent && !pathname.includes("favicon"))
    if (pathname === "/auth") {
      // console.log("session middleware refreshToken", session, user)
      if (session) {
        return NextResponse.redirect(new URL(`/`, request.url))
      }
      return NextResponse.next()
    } else if (pathname === "/island") {
      if (!searchParams.get("id") && user) {
        return NextResponse.redirect(
          new URL(`/island?id=${user.email}`, request.url)
        )
      }
    }

  if (!session) {
    return NextResponse.redirect(new URL("/auth?type=login", request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/game", "/island", "/visit", "/collection", "/", "/auth"],
}
