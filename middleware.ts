import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 获取当前请求的主机名
  const hostname = request.headers.get('host') || ''
  const url = request.nextUrl.clone()
  
  // 只处理 www 开头的域名，并且确保目标域名不是 www
  if (hostname.startsWith('www.') && !hostname.replace('www.', '').startsWith('www.')) {
    // 构建新的URL，确保使用正确的协议和主机名
    const newUrl = new URL(request.url)
    newUrl.hostname = hostname.replace('www.', '')
    newUrl.protocol = 'https:'
    
    // 保持原始路径和查询参数
    newUrl.pathname = url.pathname
    newUrl.search = url.search
    
    // 添加调试日志
    console.log(`Redirecting from ${request.url} to ${newUrl.toString()}`)
    
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