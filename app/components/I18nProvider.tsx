'use client'

import { useEffect, useState } from 'react'
import { I18nextProvider } from 'react-i18next'
import initI18next from '../i18n'
import { usePathname } from 'next/navigation'

export default function I18nProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [instance, setInstance] = useState<any>(null)

  useEffect(() => {
    const init = async () => {
      const i18n = await initI18next()
      const locale = pathname?.split('/')[1] || 'en'
      await i18n.changeLanguage(locale)
      setInstance(i18n)
    }
    init()
  }, [pathname])

  if (!instance) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
      </div>
    )
  }

  return (
    <I18nextProvider i18n={instance} defaultNS="translation">
      {children}
    </I18nextProvider>
  )
} 