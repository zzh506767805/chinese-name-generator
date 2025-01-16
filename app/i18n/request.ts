import { getRequestConfig } from 'next-intl/server'
import { locales } from '../../i18n.config'

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../../public/locales/${locale}/common.json`)).default,
})) 