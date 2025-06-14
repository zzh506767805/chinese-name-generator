'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import NameResult from './NameResult'
import CreditsDisplay from './CreditsDisplay'
import { getUserCredits, useCredit } from '@/app/utils/credits'

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
  const [step, setStep] = useState(1) // 1: 表单, 2: 收费提示, 3: 生成中, 4: 结果
  const [preferences, setPreferences] = useState({
    gender: '',
    meaning: '',
    style: '',
    additionalInfo: ''
  })
  const [nameResult, setNameResult] = useState<NameResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [userCredits, setUserCredits] = useState(0)
  const [isGenerating, setIsGenerating] = useState(false)

  // 初始化和监听积分变化
  useEffect(() => {
    const updateCredits = () => {
      setUserCredits(getUserCredits())
    }
    
    updateCredits()
    window.addEventListener('creditsUpdated', updateCredits)
    
    return () => {
      window.removeEventListener('creditsUpdated', updateCredits)
    }
  }, [])

  // 点击生成名字按钮（第一步：检查收费）
  const handleGenerateClick = () => {
    console.log('HomePage: Generate button clicked')
    setError(null)
    
    // 检查用户是否有剩余次数
    const currentCredits = getUserCredits()
    if (currentCredits <= 0) {
      // 显示收费提示页面
      setStep(2)
    } else {
      // 直接生成名字
      generateName()
    }
  }

  // 确认付费后生成名字
  const generateName = async () => {
    try {
      console.log('HomePage: Starting name generation with preferences:', preferences)
      setIsGenerating(true)
      setStep(3) // 生成中

      // 尝试使用一个积分
      const creditUsed = useCredit()
      if (!creditUsed) {
        setError('Unable to use credit. Please refresh and try again.')
        setStep(1)
        setIsGenerating(false)
        return
      }

      const response = await fetch('/api/generate-name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...preferences,
          language: params?.locale || 'en',
          hasCredits: true,
        }),
      })

      console.log('HomePage: API response status:', response.status)
      const data = await response.json()
      console.log('HomePage: API response data:', data)

      if (!response.ok) {
        // 如果API调用失败，退还积分
        const currentCredits = getUserCredits()
        setUserCredits(currentCredits + 1)
        localStorage.setItem('chinese_name_credits', (currentCredits + 1).toString())
        
        throw new Error(data.error || 'Failed to generate name')
      }

      setNameResult(data)
      setUserCredits(getUserCredits()) // 更新积分显示
      setStep(4) // 结果页面
    } catch (err) {
      console.error('HomePage: Error during name generation:', err)
      setError(err instanceof Error ? err.message : t('errors.generation_failed'))
      setStep(1)
    } finally {
      setIsGenerating(false)
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
            {/* 剩余次数显示 */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                    {userCredits}
                  </div>
                  <div>
                    <p className="font-medium text-blue-900">
                      {userCredits > 0 ? 'Remaining Name Generations' : 'No Credits Available'}
                    </p>
                    <p className="text-sm text-blue-700">
                      {userCredits > 0 
                        ? `You can generate ${userCredits} more Chinese names`
                        : 'Purchase credits to start generating names'
                      }
                    </p>
                  </div>
                </div>
                {userCredits === 0 && (
                  <CreditsDisplay 
                    onCreditsChange={setUserCredits} 
                    compact={true}
                  />
                )}
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {t('form.title')}
            </h2>
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
              onClick={handleGenerateClick}
              disabled={!preferences.gender || !preferences.meaning || !preferences.style}
              className="w-full py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t('form.submit')}
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="text-center py-8">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Purchase Required
              </h3>
              <p className="text-gray-600 mb-6">
                Get 10 unique Chinese names with detailed cultural explanations for just $2
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-md mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="font-medium text-blue-900">✨ What you get:</span>
                </div>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• 10 AI-generated Chinese names</li>
                  <li>• Cultural meanings & explanations</li>
                  <li>• Pronunciation guides (Pinyin)</li>
                  <li>• Historical context & symbolism</li>
                </ul>
              </div>
            </div>
            
            <div className="flex space-x-4 justify-center">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Back to Form
              </button>
              <CreditsDisplay 
                onCreditsChange={setUserCredits} 
                onPurchaseSuccess={() => {
                  // 购买成功后自动开始生成名字
                  setTimeout(() => {
                    const currentCredits = getUserCredits()
                    if (currentCredits > 0) {
                      generateName()
                    }
                  }, 1000)
                }}
                compact={true} 
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
            <p className="text-gray-600">{t('result.loading')}</p>
          </div>
        )}

        {step === 4 && nameResult && (
          <NameResult
            {...nameResult}
            onRequestNewName={handleRequestNewName}
          />
        )}
      </div>
    </div>
  )
} 