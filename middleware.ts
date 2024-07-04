
import { cookies } from "next/headers"
import { NextRequest } from "next/server"
import * as ROUTES from "@constants/routes"

export async function middleware(request: NextRequest) {
  const c = cookies()
  const isLoggedIn = c.get("next-auth.session-token")?.value !== undefined
  const adminIndex = request.url.indexOf('/admin')
  const adminUrl = request.url.substring(adminIndex)

  try {    
    if (isLoggedIn) {
      return Response.redirect(adminUrl)
    } else if (request.url?.includes('admin')) {
      return Response.redirect(new URL(ROUTES.LOGIN, request.url))
    }
  } catch (error) {
    console.error("Error in middleware:", error)
  }
}

export const config = {
  matcher: '/admin/:path*',
}
