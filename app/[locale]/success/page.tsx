'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function Success() {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-12">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t('success.payment_completed')}
          </h1>
          <p className="text-gray-600 mb-8">
            {t('tip.thank_you')}
          </p>
          
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
          >
            {t('common.back_to_home')}
          </Link>
        </div>
      </div>
    </div>
  )
} 