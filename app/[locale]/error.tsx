'use client'

import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

export default function LocaleError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations()

  useEffect(() => {
    console.error('Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t('error.title')}
          </h1>
          <p className="text-gray-600 mb-8">
            {error.message || t('error.default_message')}
          </p>
          <button
            onClick={reset}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            {t('error.retry')}
          </button>
        </div>
      </div>
    </div>
  )
} 