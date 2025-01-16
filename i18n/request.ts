import { getRequestConfig } from 'next-intl/server'
import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { headers } from 'next/headers'
import { locales } from '../i18n.config'

export default getRequestConfig(async () => {
  const headersList = await headers()
  const locale = headersList.get('X-NEXT-INTL-LOCALE') || 'en'
  
  return {
    locale,
    messages: (await import(`../public/locales/${locale}/common.json`)).default,
    defaultLocale: 'en',
    locales
  }
}) 