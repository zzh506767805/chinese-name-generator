import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host') || ''
  
  // 如果已经是目标域名，直接返回
  if (hostname === 'chinesenamegenerate.com') {
    return NextResponse.next()
  }
  
  // 处理所有需要重定向的情况
  if (hostname.includes('www.') || hostname !== 'chinesenamegenerate.com') {
    const newUrl = new URL(request.url)
    newUrl.hostname = 'chinesenamegenerate.com'
    newUrl.protocol = 'https:'
    newUrl.pathname = url.pathname
    newUrl.search = url.search
    
    console.log(`Redirecting from ${hostname} to chinesenamegenerate.com`)
    return NextResponse.redirect(newUrl.toString(), 301)
  }
  
  return NextResponse.next()
}

// 配置中间件匹配所有路由，但排除一些特殊路径
export const config = {
  matcher: [
    /*
     * 匹配所有路径除了:
     * - api (API routes)
     * - _next/static (静态文件)
     * - _next/image (图片优化)
     * - favicon.ico (浏览器图标)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
} 