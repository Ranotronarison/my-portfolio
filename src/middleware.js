import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing)

export const config = {
  matcher: [
    '/',
    '/(fr|en)/:path*',
    '/((?!api|about|any|_next/static|assets|_next/image|images|robots.txt|sitemap.xml|favicon.ico|google8dffc3c681e8f46c.html).*)',
  ]
}