'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import NameResult from './NameResult'
import CreditsDisplay from './CreditsDisplay'
import RelatedPages from './RelatedPages'
import KeywordPageSchema from './KeywordPageSchema'
import { getUserCredits, useCredit, initializeFreeCredits } from '@/app/utils/credits'

interface KeywordLandingPageProps {
  keyword: string
  title: string
  subtitle: string
  blogContent: React.ReactNode
  metaTitle?: string
  metaDescription?: string
}

interface NameResponse {
  chineseName: string
  pinyin: string
  explanation: string
  culturalContext: string
  id: string
}

export default function KeywordLandingPage({ 
  keyword,
  title, 
  subtitle, 
  blogContent,
  metaTitle,
  metaDescription
}: KeywordLandingPageProps) {
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
  const [freeCreditsInitialized, setFreeCreditsInitialized] = useState(false)

  // 初始化和监听积分变化
  useEffect(() => {
    const updateCredits = () => {
      setUserCredits(getUserCredits())
    }
    
    // 初始化免费积分（如果用户是首次访问）
    if (!freeCreditsInitialized) {
      initializeFreeCredits()
      setFreeCreditsInitialized(true)
    }
    
    updateCredits()
    window.addEventListener('creditsUpdated', updateCredits)
    
    return () => {
      window.removeEventListener('creditsUpdated', updateCredits)
    }
  }, [freeCreditsInitialized])

  // 点击生成名字按钮（第一步：检查收费）
  const handleGenerateClick = () => {
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
          keyword: keyword // 传递关键词，以便API可以针对特定关键词生成更相关的名字
        }),
      })

      const data = await response.json()

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
      console.error('Error during name generation:', err)
      setError(err instanceof Error ? err.message : t('errors.generation_failed'))
      setStep(1)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleRequestNewName = () => {
    setNameResult(null)
    setStep(1)
  }

  // 为了提高关键词密度，我们在适当的地方重复使用关键词
  const keywordMentions = Array(5).fill(keyword)

  // 获取当前URL，用于结构化数据
  const locale = params?.locale || 'en'
  const baseUrl = 'https://chinesenamegenerate.com'
  const currentUrl = `${baseUrl}/${locale}/${keyword.replace(/\s+/g, '-')}`
  const description = metaDescription || `Generate authentic ${keyword} with our AI-powered tool. Get meaningful ${keyword} with pinyin, pronunciation, and cultural significance.`

  return (
    <>
      <KeywordPageSchema 
        title={metaTitle || title}
        description={description}
        keyword={keyword}
        url={currentUrl}
        lastUpdated={new Date().toISOString().split('T')[0]}
      />
      
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            {subtitle}
          </p>
          
          {/* SEO关键词标签行 - 提高关键词密度 */}
          <div className="mt-2 sm:mt-3">
            <p className="text-xs sm:text-sm font-semibold text-red-700">
              {`Free ${keyword} • Professional ${keyword} • Best ${keyword}`}
            </p>
            <p className="mt-1 sm:mt-2 text-xs text-gray-500 leading-relaxed">
              {keywordMentions.join(' • ')} • Chinese Names Generator • Chinese Name Translator
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8">
          {step === 1 && (
            <div className="space-y-4 sm:space-y-6">
              {/* 剩余次数显示 */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center space-x-3 mb-3 sm:mb-0">
                    <div className="bg-blue-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-bold text-lg">
                      {userCredits}
                    </div>
                    <div>
                      <p className="font-medium text-blue-900 text-sm sm:text-base">
                        {userCredits > 0 ? `Free ${keyword}` : 'No Credits Available'}
                      </p>
                      <p className="text-xs sm:text-sm text-blue-700">
                        {userCredits > 0 
                          ? `You can generate ${userCredits} ${keyword} for free!`
                          : 'Need more? Get additional names below'
                        }
                      </p>
                    </div>
                  </div>
                  {userCredits === 0 && (
                    <div className="w-full sm:w-auto flex justify-center">
                      <CreditsDisplay 
                        onCreditsChange={setUserCredits} 
                        compact={true}
                      />
                    </div>
                  )}
                </div>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
                {`Generate ${keyword}`}
              </h2>
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  {t('form.gender.label')}
                </label>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  {['male', 'female', 'neutral'].map((gender) => (
                    <button
                      key={gender}
                      onClick={() => setPreferences({ ...preferences, gender })}
                      className={`py-2 px-2 sm:px-4 rounded-lg border transition-colors text-sm sm:text-base ${
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
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  {t('form.meaning.label')}
                </label>
                <textarea
                  value={preferences.meaning}
                  onChange={(e) =>
                    setPreferences({ ...preferences, meaning: e.target.value })
                  }
                  placeholder={t('form.meaning.placeholder')}
                  className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm sm:text-base"
                  rows={3}
                />
              </div>

              {/* 风格选择 */}
              <div>
                <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                  {t('form.style.label')}
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {['traditional', 'modern'].map((style) => (
                    <button
                      key={style}
                      onClick={() => setPreferences({ ...preferences, style })}
                      className={`py-2 px-2 sm:px-4 rounded-lg border transition-colors text-sm sm:text-base ${
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
                <div className="text-red-500 text-center text-sm">
                  {error}
                </div>
              )}

              <button
                onClick={handleGenerateClick}
                disabled={!preferences.gender || !preferences.meaning || !preferences.style}
                className="w-full py-2 sm:py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base font-medium"
              >
                {`Generate ${keyword}`}
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="text-center py-4 sm:py-6 space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 p-4 sm:p-6 rounded-lg">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                
                <h3 className="text-lg sm:text-xl font-bold text-amber-800 mb-2 sm:mb-3">
                  You've used all your free names!
                </h3>
                
                <p className="text-sm sm:text-base text-amber-700 mb-3 sm:mb-4">
                  You've used all your free {keyword} generations. 
                  Would you like to get more {keyword}?
                </p>
                
                <div className="bg-white rounded-lg p-3 sm:p-4 border border-amber-100 mb-4 sm:mb-6">
                  <h4 className="font-medium text-amber-800 mb-2 text-sm sm:text-base">Get more {keyword} with:</h4>
                  <ul className="text-xs sm:text-sm text-amber-700 space-y-1 text-left list-disc pl-5 mb-3 sm:mb-4">
                    <li>Authentic Chinese cultural meanings</li>
                    <li>Proper pronunciation guides</li>
                    <li>Character explanations</li>
                    <li>Historical & cultural context</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center items-center">
                <button
                  onClick={() => setStep(1)}
                  className="w-full sm:w-auto px-4 sm:px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base"
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
            <div className="text-center py-6 sm:py-8">
              <div className="animate-spin rounded-full h-10 w-10 sm:h-12 sm:w-12 border-b-2 border-red-500 mx-auto mb-3 sm:mb-4"></div>
              <p className="text-gray-600 text-sm sm:text-base">{t('result.loading')}</p>
            </div>
          )}

          {step === 4 && nameResult && (
            <NameResult
              {...nameResult}
              onRequestNewName={handleRequestNewName}
            />
          )}
        </div>

        {/* 博客内容区域 */}
        <div className="mt-8 sm:mt-12 prose prose-sm sm:prose max-w-none">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
            About {keyword}
          </h2>
          
          {blogContent}
          
          {/* 额外的关键词密度提升区域 */}
          <div className="bg-gray-50 p-4 sm:p-6 rounded-lg mt-6 sm:mt-8 border border-gray-200">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
              Popular {keyword}
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Looking for {keyword}? Our {keyword} generator provides authentic {keyword} with cultural meanings.
              Each {keyword} comes with proper pronunciation and explanation of the characters used.
              Try our {keyword} generator today and discover the perfect Chinese name!
            </p>
          </div>
        </div>

        {/* 相关页面链接 */}
        <RelatedPages currentPage={keyword} />
      </div>
    </>
  )
} 