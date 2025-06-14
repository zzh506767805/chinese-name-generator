'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { addCredits, getUserCredits, getPurchaseConfig } from '@/app/utils/credits'

export default function Success() {
  const t = useTranslations()
  const searchParams = useSearchParams()
  const [paymentType, setPaymentType] = useState<string | null>(null)
  const [creditsAdded, setCreditsAdded] = useState(false)
  const [currentCredits, setCurrentCredits] = useState(0)
  const { creditsPerPurchase } = getPurchaseConfig()

  useEffect(() => {
    const type = searchParams?.get('type')
    const sessionId = searchParams?.get('session_id')
    
    setPaymentType(type ?? null)
    
    // 如果是购买积分的支付成功
    if (type === 'credits' && sessionId && !creditsAdded) {
      // 检查是否已经为这个session添加过积分
      const processedSessionKey = `credits_processed_${sessionId}`
      const alreadyProcessed = sessionStorage.getItem(processedSessionKey)
      
      if (!alreadyProcessed) {
        // 添加积分
        addCredits()
        setCreditsAdded(true)
        
        // 标记这个session已经处理过
        sessionStorage.setItem(processedSessionKey, 'true')
        
        // 更新当前积分显示
        setCurrentCredits(getUserCredits())
        
        console.log('Credits purchased successfully, added:', creditsPerPurchase)
      } else {
        console.log('Credits already processed for session:', sessionId)
        setCreditsAdded(true)
        setCurrentCredits(getUserCredits())
      }
    } else {
      setCurrentCredits(getUserCredits())
    }
  }, [searchParams, creditsAdded, creditsPerPurchase])

  // 如果是积分购买成功页面
  if (paymentType === 'credits') {
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
              Purchase Successful! 🎉
            </h1>
            <p className="text-gray-600 mb-6">
              You have successfully purchased {creditsPerPurchase} Chinese name generations!
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-6">
              <div className="text-center mb-4">
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-3">
                  {currentCredits}
                </div>
                <h3 className="font-bold text-blue-900 text-lg mb-2">
                  🎉 Credits Successfully Added!
                </h3>
                <p className="font-medium text-blue-800">
                  You now have {currentCredits} name generations available
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-blue-100">
                <h4 className="font-medium text-blue-900 mb-2">✨ What you can do now:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Generate {currentCredits} unique Chinese names</li>
                  <li>• Get detailed cultural meanings & explanations</li>
                  <li>• Learn proper pronunciation with Pinyin guides</li>
                  <li>• Discover historical context & symbolism</li>
                </ul>
              </div>
            </div>
            
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Start Generating Names
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // 原有的打赏成功页面
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