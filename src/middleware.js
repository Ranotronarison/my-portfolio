import { NextRequest, NextResponse } from "next/server"

/**
 * 
 * @param {NextRequest} request 
 * @returns 
 */
export async function middleware(request) {
  const authHeader = request.headers.get('Authorization')

  if (!authHeader) {
    return NextResponse.json({ message: 'Auth required' }, { status: 401 })
  }

  if (!(await gRecaptchaVerify(authHeader)).success) {
    return NextResponse.json({ message: 'Access denied' }, { status: 403 })
  }

  return NextResponse.next()
}

async function gRecaptchaVerify(token) {
  const secretKey = process?.env?.G_RECAPTCHA_SECRET_KEY;

  const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`, {
    method: 'POST',
    body: '',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })

  const result = await response.json()

  return result
}

export const config = {
  matcher: ['/api/:path*']
}