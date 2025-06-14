'use client'

import { useState, useEffect } from 'react'
import { getUserCredits, getPurchaseConfig, generateSessionId } from '@/app/utils/credits'

interface CreditsDisplayProps {
  onCreditsChange?: (credits: number) => void
  onPurchaseSuccess?: () => void
  compact?: boolean
}

export default function CreditsDisplay({ onCreditsChange, onPurchaseSuccess, compact = false }: CreditsDisplayProps) {
  const [credits, setCredits] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const { creditsPerPurchase, pricePerPackage } = getPurchaseConfig()

  // 更新积分显示
  const updateCredits = () => {
    const currentCredits = getUserCredits()
    setCredits(currentCredits)
    onCreditsChange?.(currentCredits)
  }

  // 组件挂载时获取积分
  useEffect(() => {
    updateCredits()
    
    // 监听 localStorage 变化
    const handleStorageChange = () => {
      updateCredits()
    }
    
    window.addEventListener('storage', handleStorageChange)
    
    // 自定义事件监听（用于同一页面内的更新）
    window.addEventListener('creditsUpdated', handleStorageChange)
    
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('creditsUpdated', handleStorageChange)
    }
  }, [onCreditsChange])

  // 处理购买积分
  const handlePurchaseCredits = async () => {
    setIsLoading(true)
    
    try {
      const sessionId = generateSessionId()
      
      const response = await fetch('/api/purchase-credits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sessionId }),
      })

      if (!response.ok) {
        throw new Error('Failed to create purchase session')
      }

      const { url } = await response.json()
      
      // 跳转到Stripe支付页面
      if (url) {
        window.location.href = url
      }
    } catch (error) {
      console.error('Purchase error:', error)
      alert('Failed to start purchase process. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  // 紧凑模式：只显示购买按钮
  if (compact) {
    return (
      <button
        onClick={handlePurchaseCredits}
        disabled={isLoading}
        className={`px-6 py-2 rounded-lg font-medium text-sm transition-colors ${
          isLoading
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
            : 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
        }`}
      >
        {isLoading ? (
          <span className="flex items-center space-x-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Processing...</span>
          </span>
        ) : (
          <span>
            Buy {creditsPerPurchase} Names - ${pricePerPackage}
          </span>
        )}
      </button>
    )
  }

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
            {credits}
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">
              {credits > 0 ? 'Names Remaining' : 'No Names Left'}
            </p>
            <p className="text-xs text-gray-500">
              {credits > 0 
                ? `You can generate ${credits} more name${credits > 1 ? 's' : ''}`
                : 'Purchase credits to generate names'
              }
            </p>
          </div>
        </div>
        
        <button
          onClick={handlePurchaseCredits}
          disabled={isLoading}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            isLoading
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          }`}
        >
          {isLoading ? (
            <span className="flex items-center space-x-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Processing...</span>
          </span>
        ) : (
          <span>
            Buy {creditsPerPurchase} Names - ${pricePerPackage}
          </span>
        )}
        </button>
      </div>
      
      {credits === 0 && (
        <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            <strong>💡 Get Started:</strong> Purchase {creditsPerPurchase} name generations for just ${pricePerPackage}!
            Each name comes with detailed cultural explanations and pronunciation guides.
          </p>
        </div>
      )}
    </div>
  )
} 