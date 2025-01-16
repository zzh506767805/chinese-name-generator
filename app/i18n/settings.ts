export const defaultLocale = 'en'
export const locales = ['en', 'zh', 'ja', 'ko', 'hi', 'id', 'tl'] as const
export type Locale = typeof locales[number]

export function getMessages(locale: Locale) {
  return {
    messages: require(`../locales/${locale}.json`)
  }
} 