import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { locales } from '../../i18n.config'
import Navbar from '@/app/components/Navbar'

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({
  children,
  params: paramsPromise
}: Props) {
  console.log('Rendering LocaleLayout')
  const { locale } = await paramsPromise
  console.log('Current locale:', locale)

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    console.error('Invalid locale:', locale)
    notFound()
  }

  let messages;
  try {
    const [commonMessages, faqMessages] = await Promise.all([
      import(`../../public/locales/${locale}/common.json`),
      import(`../../public/locales/${locale}/faq.json`).catch(() => ({ default: {} }))
    ])
    
    messages = {
      ...commonMessages.default,
      faq: faqMessages.default
    }
    console.log('Loaded messages:', messages)
  } catch (error) {
    console.error('Error loading messages:', error)
    notFound()
  }

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-gray-50">
        <NextIntlClientProvider locale={locale} messages={messages} timeZone="Asia/Shanghai">
          <Navbar />
          <main className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
} 