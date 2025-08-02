'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import NameResult from './NameResult'
import CreditsDisplay from './CreditsDisplay'
import { getUserCredits, useCredit, initializeFreeCredits } from '@/app/utils/credits'

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
        {/* SEO Keyword Tagline */}
        <p className="mt-3 text-sm font-semibold text-red-700 max-w-3xl mx-auto">
          {t('seo_keywords_tagline')}
        </p>
        {/* Additional SEO Keywords for better density */}
        <p className="mt-2 text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed">
          Free Chinese Name Generator • Traditional Chinese Names • Modern Chinese Names • Chinese Name Meaning • Chinese Name Pronunciation • Chinese Name with Pinyin • Best Chinese Name Generator • Professional Chinese Name Creator • Chinese Name Generator AI • Authentic Chinese Names • Chinese Family Names • Chinese Given Names • Chinese Name Translation • Chinese Name Converter • Chinese Name Characters
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
                      {userCredits > 0 ? 'Free Name Generations' : 'No Credits Available'}
                    </p>
                    <p className="text-sm text-blue-700">
                      {userCredits > 0 
                        ? `You can generate ${userCredits} Chinese names for free!`
                        : 'Need more? Get additional names below'
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
          <div className="text-center py-6 space-y-6">
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 p-6 rounded-lg">
              <svg className="w-16 h-16 mx-auto mb-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              
              <h3 className="text-xl font-bold text-amber-800 mb-3">
                You've used all your free names!
              </h3>
              
              <p className="text-amber-700 mb-4">
                You've used all your free name generations. 
                Would you like to get more names?
              </p>
              
              <div className="bg-white rounded-lg p-4 border border-amber-100 mb-6">
                <h4 className="font-medium text-amber-800 mb-2">Get more Chinese names with:</h4>
                <ul className="text-sm text-amber-700 space-y-1 text-left list-disc pl-5 mb-4">
                  <li>Authentic Chinese cultural meanings</li>
                  <li>Proper pronunciation guides</li>
                  <li>Character explanations</li>
                  <li>Historical & cultural context</li>
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

      {/* 广告位1：主要内容区域后 */}

      {/* SEO Content Section */}
      <div className="mt-12 space-y-8">
        {/* Main SEO Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t('seo_content.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {t('seo_content.description')}
          </p>
          
          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {t('seo_content.features.title')}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                t('seo_content.features.items.0'),
                t('seo_content.features.items.1'),
                t('seo_content.features.items.2'),
                t('seo_content.features.items.3'),
                t('seo_content.features.items.4'),
                t('seo_content.features.items.5')
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-2">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 广告位2：SEO内容中间 */}

        {/* Gender-specific sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Male Names Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">
              {t('seo_content.male_names.title')}
            </h3>
            <p className="text-blue-700 text-sm leading-relaxed">
              {t('seo_content.male_names.description')}
            </p>
          </div>

          {/* Female Names Section */}
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-6 border border-pink-200">
            <h3 className="text-xl font-semibold text-pink-900 mb-3">
              {t('seo_content.female_names.title')}
            </h3>
            <p className="text-pink-700 text-sm leading-relaxed">
              {t('seo_content.female_names.description')}
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
          <h3 className="text-xl font-semibold text-orange-900 mb-3">
            {t('seo_content.how_it_works.title')}
          </h3>
          <p className="text-orange-700 text-sm leading-relaxed">
            {t('seo_content.how_it_works.description')}
          </p>
        </div>

        {/* Name Types Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('seo_content.name_types.title')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('seo_content.name_types.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                {t('seo_content.name_types.traditional.title')}
              </h3>
              <p className="text-purple-700 text-sm">
                {t('seo_content.name_types.traditional.description')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                {t('seo_content.name_types.modern.title')}
              </h3>
              <p className="text-green-700 text-sm">
                {t('seo_content.name_types.modern.description')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-6 border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                {t('seo_content.name_types.two_character.title')}
              </h3>
              <p className="text-amber-700 text-sm">
                {t('seo_content.name_types.two_character.description')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg p-6 border border-red-200">
              <h3 className="text-lg font-semibold text-red-900 mb-2">
                {t('seo_content.name_types.three_character.title')}
              </h3>
              <p className="text-red-700 text-sm">
                {t('seo_content.name_types.three_character.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Cultural Meaning Section */}
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-lg p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('seo_content.cultural_meaning.title')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('seo_content.cultural_meaning.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {t('seo_content.cultural_meaning.elements.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('seo_content.cultural_meaning.elements.description')}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {t('seo_content.cultural_meaning.philosophy.title')}
              </h3>
              <p className="text-gray-600 text-sm">
                {t('seo_content.cultural_meaning.philosophy.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Name Elements Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('seo_content.name_elements.title')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('seo_content.name_elements.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-lg p-6 border border-violet-200">
              <h3 className="text-lg font-semibold text-violet-900 mb-3">
                {t('seo_content.name_elements.virtue_elements.title')}
              </h3>
              <p className="text-violet-700 text-sm">
                {t('seo_content.name_elements.virtue_elements.description')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-lg p-6 border border-emerald-200">
              <h3 className="text-lg font-semibold text-emerald-900 mb-3">
                {t('seo_content.name_elements.nature_elements.title')}
              </h3>
              <p className="text-emerald-700 text-sm">
                {t('seo_content.name_elements.nature_elements.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-8 border border-cyan-200">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            {t('seo_content.use_cases.title')}
          </h2>
          <p className="text-blue-700 mb-6">
            {t('seo_content.use_cases.description')}
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                {t('seo_content.use_cases.newborn.title')}
              </h3>
              <p className="text-blue-600 text-sm">
                {t('seo_content.use_cases.newborn.description')}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                {t('seo_content.use_cases.character.title')}
              </h3>
              <p className="text-blue-600 text-sm">
                {t('seo_content.use_cases.character.description')}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                {t('seo_content.use_cases.personal.title')}
              </h3>
              <p className="text-blue-600 text-sm">
                {t('seo_content.use_cases.personal.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Naming Principles Section */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {t('seo_content.naming_principles.title')}
          </h2>
          <p className="text-gray-600 mb-6">
            {t('seo_content.naming_principles.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-6 border border-orange-200">
              <h3 className="text-lg font-semibold text-orange-900 mb-3">
                {t('seo_content.naming_principles.tonal_harmony.title')}
              </h3>
              <p className="text-orange-700 text-sm">
                {t('seo_content.naming_principles.tonal_harmony.description')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 border border-teal-200">
              <h3 className="text-lg font-semibold text-teal-900 mb-3">
                {t('seo_content.naming_principles.character_balance.title')}
              </h3>
              <p className="text-teal-700 text-sm">
                {t('seo_content.naming_principles.character_balance.description')}
              </p>
            </div>
            <div className="bg-gradient-to-br from-lime-50 to-green-50 rounded-lg p-6 border border-lime-200">
              <h3 className="text-lg font-semibold text-lime-900 mb-3">
                {t('seo_content.naming_principles.auspicious_meanings.title')}
              </h3>
              <p className="text-lime-700 text-sm">
                {t('seo_content.naming_principles.auspicious_meanings.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Success Stories Section */}
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-8 border border-pink-200">
          <h2 className="text-2xl font-bold text-pink-900 mb-4">
            {t('seo_content.success_stories.title')}
          </h2>
          <p className="text-pink-700 mb-6">
            {t('seo_content.success_stories.description')}
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-pink-200">
              <p className="text-pink-600 italic text-sm">
                {t('seo_content.success_stories.testimonial_1')}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-pink-200">
              <p className="text-pink-600 italic text-sm">
                {t('seo_content.success_stories.testimonial_2')}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-pink-200">
              <p className="text-pink-600 italic text-sm">
                {t('seo_content.success_stories.testimonial_3')}
              </p>
            </div>
          </div>
        </div>

        {/* Professional Advice Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8 border border-indigo-200">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">
            {t('seo_content.professional_advice.title')}
          </h2>
          <p className="text-indigo-700 mb-6">
            {t('seo_content.professional_advice.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">
                {t('seo_content.professional_advice.expert_tips.title')}
              </h3>
              <p className="text-indigo-600 text-sm">
                {t('seo_content.professional_advice.expert_tips.description')}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-indigo-200">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">
                {t('seo_content.professional_advice.consultation.title')}
              </h3>
              <p className="text-indigo-600 text-sm">
                {t('seo_content.professional_advice.consultation.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Additional SEO Keywords Section */}
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-6 border border-gray-300">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Complete Chinese Name Generator Services
          </h2>
          <div className="text-sm text-gray-600 leading-relaxed">
            <p className="mb-3">
              Our comprehensive Chinese name generator platform offers the most advanced AI-powered Chinese name generation services available. Whether you need a Chinese name generator for boys, Chinese name generator for girls, or a versatile Chinese name generator that handles both, we provide authentic and culturally meaningful names.
            </p>
            <p className="mb-3">
              <strong>Chinese Name Generator Features:</strong> Traditional Chinese name generator, Modern Chinese name generator, Chinese boy name generator, Chinese girl name generator, Chinese surname generator, Chinese business name generator, Chinese character name generator, and Chinese personal name generator.
            </p>
            <p className="mb-3">
              <strong>Chinese Name Generator Benefits:</strong> Professional Chinese name generator with cultural authenticity, AI Chinese name generator with instant results, Free Chinese name generator with premium options, Chinese name generator with pronunciation guides, Chinese name generator with meaning explanations, and Chinese name generator with cultural context.
            </p>
            <p>
              <strong>Popular Chinese Name Generator Searches:</strong> Chinese name generator online, Chinese name generator free, Chinese name generator with meaning, Chinese name generator traditional, Chinese name generator modern, Chinese name generator male, Chinese name generator female, Chinese name generator authentic, Chinese name generator professional, Chinese name generator expert.
            </p>
          </div>
        </div>

        {/* 广告位3：页面底部 */}
      </div>
      {/* 友情链接区块 */}
      <div className="mt-12 mb-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow border border-gray-200 p-6 text-center">
          <h2 className="text-lg font-bold text-gray-700 mb-3">Friend links</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://dressmeai.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">dressmeai.com</a>
            <a href="https://checkios.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">checkios.com</a>
            <a href="https://Dreamfinityx.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Dreamfinityx.com</a>
            <a href="https://ainails.pro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">ainails.pro</a>
            <a href="https://Charactereadcanon.pro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Charactereadcanon.pro</a>
            <a href="https://Elfname.pro" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Elfname.pro</a>
          </div>
        </div>
      </div>
    </div>
  )
} 