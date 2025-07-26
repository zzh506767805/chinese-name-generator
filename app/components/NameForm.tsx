'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { getUserCredits, hasCredits, useCredit, initializeFreeCredits } from '@/app/utils/credits'
import CreditsDisplay from './CreditsDisplay'

/**
 * 名字生成表单组件
 * 用于收集用户偏好并生成中文名字
 */
export default function NameForm() {
  // 使用 next-intl 的翻译钩子
  const t = useTranslations()
  
  // 从路径中获取当前语言
  const pathname = usePathname()
  const currentLocale = pathname?.split('/')[1] || 'en'
  
  // 初始化积分状态
  const [credits, setCredits] = useState(0)
  const [showCreditsError, setShowCreditsError] = useState(false)
  const [step, setStep] = useState<'form' | 'purchase' | 'loading' | 'result'>('form')
  
  // 添加错误状态
  const [error, setError] = useState<string | null>(null)

  // 表单状态
  const [formData, setFormData] = useState({
    firstName: '',
    gender: '',
    meaning: '',
    style: 'modern',
    additionalInfo: '',
  })

  // 加载状态
  const [isLoading, setIsLoading] = useState(false)
  // 生成结果
  const [result, setResult] = useState<null | {
    name: string
    pinyin: string
    explanation: string
  }>(null)

  // 初始化免费积分并监听积分变化
  useEffect(() => {
    initializeFreeCredits()
    updateCredits()
    
    const handleCreditsUpdate = () => {
      updateCredits()
    }
    
    window.addEventListener('creditsUpdated', handleCreditsUpdate)
    return () => {
      window.removeEventListener('creditsUpdated', handleCreditsUpdate)
    }
  }, [])
  
  // 更新积分显示
  const updateCredits = () => {
    setCredits(getUserCredits())
  }

  /**
   * 处理表单提交
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setShowCreditsError(false)
    setError(null) // 清除之前的错误
    
    // 检查用户是否有足够的积分
    if (!hasCredits()) {
      setShowCreditsError(true)
      setStep('purchase')
      return
    }
    
    await generateName()
  }
  
  /**
   * 生成名字
   */
  const generateName = async () => {
    setIsLoading(true)
    setStep('loading')
    setError(null)

    try {
      // 消耗一个积分
      useCredit()
      updateCredits()
      
      const response = await fetch('/api/generate-name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': currentLocale,
        },
        body: JSON.stringify({
          ...formData,
          language: currentLocale,
          hasCredits: true // 告诉API用户有积分
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        // 如果API调用失败，退还积分
        const currentCredits = getUserCredits()
        const newCredits = currentCredits + 1
        localStorage.setItem('chinese_name_credits', newCredits.toString())
        window.dispatchEvent(new Event('creditsUpdated'))
        updateCredits()
        
        if (data.requiresPurchase) {
          setShowCreditsError(true)
          setStep('purchase')
          return
        }
        
        setError(data.error || '名字生成失败，请稍后再试')
        setStep('form')
        return
      }

      setResult(data)
      setStep('result')
    } catch (error) {
      console.error('Error generating name:', error)
      
      // 如果出现异常，退还积分
      const currentCredits = getUserCredits()
      const newCredits = currentCredits + 1
      localStorage.setItem('chinese_name_credits', newCredits.toString())
      window.dispatchEvent(new Event('creditsUpdated'))
      updateCredits()
      
      setError(error instanceof Error 
        ? `生成名字时出错: ${error.message}` 
        : '名字生成过程中发生错误，请稍后再试')
      setStep('form')
    } finally {
      setIsLoading(false)
    }
  }

  /**
   * 处理表单输入变化
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // 表单文本 - 使用多语言键值
  const formTranslations = {
    firstName: currentLocale === 'zh' ? '你的英文名' : 'Your First Name',
    gender: currentLocale === 'zh' ? '性别' : 'Gender',
    selectGender: currentLocale === 'zh' ? '选择性别' : 'Select Gender',
    male: currentLocale === 'zh' ? '男' : 'Male',
    female: currentLocale === 'zh' ? '女' : 'Female',
    neutral: currentLocale === 'zh' ? '中性' : 'Neutral',
    meaning: currentLocale === 'zh' ? '期望含义' : 'Desired Meaning',
    style: currentLocale === 'zh' ? '名字风格' : 'Name Style',
    styleModern: currentLocale === 'zh' ? '现代' : 'Modern',
    styleTraditional: currentLocale === 'zh' ? '传统' : 'Traditional',
    styleLiterary: currentLocale === 'zh' ? '文学' : 'Literary',
    additionalInfo: currentLocale === 'zh' ? '补充信息' : 'Additional Information',
    submit: currentLocale === 'zh' ? '生成名字' : 'Generate Name',
    loading: currentLocale === 'zh' ? '生成中...' : 'Generating...',
    credits: currentLocale === 'zh' ? '剩余次数: {count}' : 'Credits remaining: {count}',
    noCredits: currentLocale === 'zh' ? '免费次数已用完' : 'Out of credits',
    purchaseTitle: currentLocale === 'zh' ? '您已用完所有免费次数！' : "You've used all your free names!",
    purchaseDesc: currentLocale === 'zh' ? '是否需要获取更多名字生成次数？' : "Would you like to get more names?",
    purchaseFeatures: currentLocale === 'zh' ? '获取更多中文名字，包含：' : "Get more Chinese names with:",
    purchaseFeaturesList: currentLocale === 'zh' ? [
      "真实的中国文化含义",
      "准确的发音指南",
      "汉字详细解释",
      "历史和文化背景"
    ] : [
      "Authentic Chinese cultural meanings",
      "Proper pronunciation guides",
      "Character explanations",
      "Historical & cultural context"
    ],
    backToForm: currentLocale === 'zh' ? '返回表单' : "Back to Form",
    tryAgain: currentLocale === 'zh' ? '重试' : 'Try Again',
    errorTitle: currentLocale === 'zh' ? '错误' : 'Error',
    networkError: currentLocale === 'zh' ? '网络错误，请检查您的网络连接后重试。' : 'Network error occurred. Please check your internet connection and try again.'
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* 显示剩余积分 */}
      <div className="mb-4 text-sm font-medium">
        <span className={credits > 0 ? "text-green-600" : "text-red-600"}>
          {formTranslations.credits.replace('{count}', String(credits))}
        </span>
      </div>
      
      {/* 错误提示 */}
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <h4 className="text-red-800 font-medium mb-1">{formTranslations.errorTitle}</h4>
          <p className="text-red-700 text-sm">{error}</p>
          <button
            onClick={() => setError(null)}
            className="mt-2 text-sm text-red-800 hover:text-red-900 underline"
          >
            {formTranslations.tryAgain}
          </button>
        </div>
      )}
      
      {step === 'form' && (
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 英文名输入 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
              {formTranslations.firstName}
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            required
          />
        </div>

        {/* 性别选择 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
              {formTranslations.gender}
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            required
          >
              <option value="">{formTranslations.selectGender}</option>
              <option value="male">{formTranslations.male}</option>
              <option value="female">{formTranslations.female}</option>
              <option value="neutral">{formTranslations.neutral}</option>
          </select>
        </div>

        {/* 期望含义 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
              {formTranslations.meaning}
          </label>
          <input
            type="text"
            name="meaning"
            value={formData.meaning}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>

        {/* 名字风格 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
              {formTranslations.style}
          </label>
          <select
            name="style"
            value={formData.style}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          >
              <option value="modern">{formTranslations.styleModern}</option>
              <option value="traditional">{formTranslations.styleTraditional}</option>
              <option value="literary">{formTranslations.styleLiterary}</option>
          </select>
        </div>

        {/* 额外信息 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
              {formTranslations.additionalInfo}
          </label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>

        {/* 提交按钮 */}
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400"
          >
              {isLoading ? formTranslations.loading : formTranslations.submit}
          </button>
        </div>
      </form>
      )}
      
      {step === 'purchase' && (
        <div className="text-center py-6 space-y-6">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 p-6 rounded-lg">
            <svg className="w-16 h-16 mx-auto mb-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            
            <h3 className="text-xl font-bold text-amber-800 mb-3">
              {formTranslations.purchaseTitle}
            </h3>
            
            <p className="text-amber-700 mb-4">
              {formTranslations.purchaseDesc}
            </p>
            
            <div className="bg-white rounded-lg p-4 border border-amber-100 mb-6">
              <h4 className="font-medium text-amber-800 mb-2">{formTranslations.purchaseFeatures}</h4>
              <ul className="text-sm text-amber-700 space-y-1 text-left list-disc pl-5 mb-4">
                {formTranslations.purchaseFeaturesList.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex space-x-4 justify-center">
            <button
              onClick={() => setStep('form')}
              className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {formTranslations.backToForm}
            </button>
            <CreditsDisplay 
              onCreditsChange={setCredits}
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
      
      {step === 'loading' && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600">{formTranslations.loading}</p>
        </div>
      )}

      {/* 结果显示 */}
      {step === 'result' && result && (
        <div className="mt-8 p-6 bg-red-50 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {t('result.title')}
          </h3>
          <div className="space-y-4">
            <p className="text-3xl font-bold text-red-800">{result.name}</p>
            <p className="text-gray-600">{result.pinyin}</p>
            <p className="text-gray-700">{result.explanation}</p>
          </div>
          
          <div className="mt-6 flex justify-between">
            <button
              onClick={() => setStep('form')}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {formTranslations.backToForm}
            </button>
            
            {credits <= 0 && (
              <CreditsDisplay 
                onCreditsChange={setCredits}
                compact={true} 
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
} 