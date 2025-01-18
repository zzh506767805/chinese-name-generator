import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 获取当前请求的主机名
  const hostname = request.headers.get('host') || ''
  const url = request.nextUrl.clone()
  
  // 如果是 www 开头的域名，重定向到非 www 版本
  if (hostname.startsWith('www.')) {
    // 确保使用 https 协议
    const newUrl = new URL(request.url)
    newUrl.hostname = hostname.replace('www.', '')
    newUrl.protocol = 'https:'
    
    // 保持路径和查询参数
    newUrl.pathname = url.pathname
    newUrl.search = url.search
    
    return NextResponse.redirect(newUrl.toString(), 301)
  }
  
  return NextResponse.next()
}

// 配置中间件匹配所有路由
export const config = {
  matcher: '/:path*',
} 