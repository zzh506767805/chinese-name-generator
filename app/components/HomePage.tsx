'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import NameResult from './NameResult'

interface NameResponse {
  chineseName: string
  pinyin: string
  explanation: string
  culturalContext: string
  id: string
}

export default function HomePage() {
  const t = useTranslations()
  const params = useParams()
  const [step, setStep] = useState(1)
  const [preferences, setPreferences] = useState({
    gender: '',
    meaning: '',
    style: '',
    additionalInfo: ''
  })
  const [nameResult, setNameResult] = useState<NameResponse | null>(null)
  const [error, setError] = useState<string | null>(null)

  const generateName = async () => {
    try {
      console.log('HomePage: Starting name generation with preferences:', preferences)
      setError(null)
      setStep(2)

      const response = await fetch('/api/generate-name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...preferences,
          language: params?.locale || 'en',
        }),
      })

      console.log('HomePage: API response status:', response.status)
      const data = await response.json()
      console.log('HomePage: API response data:', data)

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate name')
      }

      setNameResult(data)
      setStep(3)
    } catch (err) {
      console.error('HomePage: Error during name generation:', err)
      setError(err instanceof Error ? err.message : t('errors.generation_failed'))
      setStep(1)
    }
  }

  const handleRequestNewName = () => {
    console.log('HomePage: Requesting new name')
    setNameResult(null)
    setStep(1)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t('title')}
        </h1>
        <p className="text-xl text-gray-600">
          {t('subtitle')}
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-8">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {t('form.gender.label')}
              </label>
              <div className="grid grid-cols-3 gap-4">
                {['male', 'female', 'neutral'].map((gender) => (
                  <button
                    key={gender}
                    onClick={() => setPreferences({ ...preferences, gender })}
                    className={`py-2 px-4 rounded-lg border transition-colors ${
                      preferences.gender === gender
                        ? 'border-red-500 bg-red-50 text-red-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {t(`form.gender.options.${gender}`)}
                  </button>
                ))}
              </div>
            </div>

            {/* 寓意输入 */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {t('form.meaning.label')}
              </label>
              <textarea
                value={preferences.meaning}
                onChange={(e) =>
                  setPreferences({ ...preferences, meaning: e.target.value })
                }
                placeholder={t('form.meaning.placeholder')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                rows={4}
              />
            </div>

            {/* 风格选择 */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                {t('form.style.label')}
              </label>
              <div className="grid grid-cols-2 gap-4">
                {['traditional', 'modern'].map((style) => (
                  <button
                    key={style}
                    onClick={() => setPreferences({ ...preferences, style })}
                    className={`py-2 px-4 rounded-lg border transition-colors ${
                      preferences.style === style
                        ? 'border-red-500 bg-red-50 text-red-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {t(`form.style.options.${style}`)}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-center">
                {error}
              </div>
            )}

            <button
              onClick={generateName}
              disabled={!preferences.gender || !preferences.meaning || !preferences.style}
              className="w-full py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t('form.submit')}
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
            <p className="text-gray-600">{t('result.loading')}</p>
          </div>
        )}

        {step === 3 && nameResult && (
          <NameResult
            {...nameResult}
            onRequestNewName={handleRequestNewName}
          />
        )}
      </div>
    </div>
  )
} 