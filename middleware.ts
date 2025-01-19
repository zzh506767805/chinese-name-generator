import createMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from './app/i18n/settings'

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed'
})

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
} 