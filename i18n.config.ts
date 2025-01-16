export const defaultLocale = 'en'
export const locales = ['en', 'zh', 'ja', 'ko', 'hi', 'id', 'tl'] as const
export type Locale = (typeof locales)[number] 