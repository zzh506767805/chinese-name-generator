'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface HistoricalName {
  chineseName: string
  pinyin: string
  explanation: string
  culturalContext?: string
  timestamp: number
}

export default function HistoryPage() {
  const t = useTranslations()
  const [names, setNames] = useState<HistoricalName[]>([])

  useEffect(() => {
    // 从 localStorage 获取历史记录
    const savedNames = localStorage.getItem('generatedNames')
    if (savedNames) {
      try {
        const parsedNames = JSON.parse(savedNames)
        setNames(parsedNames.sort((a: HistoricalName, b: HistoricalName) => b.timestamp - a.timestamp))
      } catch (e) {
        console.error('Failed to parse saved names:', e)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-12 px-4 mt-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {t('history.title')}
          </h1>
          <p className="text-gray-600">
            {t('history.description')}
          </p>
        </div>

        {names.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <p className="text-gray-500 mb-4">{t('history.empty')}</p>
            <Link
              href="/"
              className="text-red-600 hover:text-red-700 transition-colors"
            >
              {t('history.generate_first')}
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {names.map((name, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{name.chineseName}</h2>
                    <p className="text-gray-500">{name.pinyin}</p>
                  </div>
                  <time className="text-sm text-gray-500">
                    {new Date(name.timestamp).toLocaleDateString()}
                  </time>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('result.meaning')}</h3>
                    <p className="text-gray-600">{name.explanation}</p>
                  </div>
                  {name.culturalContext && (
                    <div>
                      <h3 className="font-semibold text-gray-900">{t('result.cultural_context')}</h3>
                      <p className="text-gray-600">{name.culturalContext}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 