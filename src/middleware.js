import createMiddleware from "next-intl/middleware";
import { localeConfig } from "./config/locale.config";

export default createMiddleware(localeConfig)

export const config = {
  matcher: [
    '/',
    '/(fr|en)/:path*',
    '/((?!api|about|any|_next/static|assets|_next/image|images|robots.txt|sitemap.xml|favicon.ico|google8dffc3c681e8f46c.html).*)',
  ]
}