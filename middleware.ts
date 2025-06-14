import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './app/i18n/settings'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  // 禁用自动语言检测，强制使用默认语言
  localeDetection: false
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
} 