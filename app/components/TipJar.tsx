'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { getStripe } from '../lib/stripe'

const TIP_AMOUNTS = [1, 3, 5]

export default function TipJar() {
  const t = useTranslations('tip')
  const tErrors = useTranslations('errors')
  const [selectedAmount, setSelectedAmount] = useState<number>(TIP_AMOUNTS[0])
  const [customAmount, setCustomAmount] = useState<string>('')
  const [isCustom, setIsCustom] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string>('')

  const handleTip = async () => {
    setError('')  // Clear previous errors
    const amount = isCustom ? parseFloat(customAmount) : selectedAmount
    
    if (!amount || amount < 0.6) {
      setError(t('minimum_amount'))
      return
    }

    try {
      setIsProcessing(true)
      console.log('Creating payment session for amount:', amount)

      const response = await fetch('/api/create-tip-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      })

      console.log('Response status:', response.status)
      const responseText = await response.text()
      console.log('Response text:', responseText)

      let data
      try {
        data = JSON.parse(responseText)
      } catch (e) {
        console.error('Failed to parse response:', e)
        setError(tErrors('payment_failed'))
        return
      }

      console.log('API response:', data)

      if (!response.ok) {
        setError(data.error || tErrors('payment_failed'))
        return
      }

      if (!data.sessionId?.startsWith('cs_')) {
        setError(tErrors('payment_failed'))
        return
      }

      console.log('Payment session created:', data.sessionId)

      const stripe = await getStripe()
      console.log('Opening checkout...')
      
      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId: data.sessionId
      })

      if (stripeError) {
        console.error('Stripe redirect error:', stripeError)
        setError(stripeError.message || tErrors('payment_failed'))
      }
    } catch (error) {
      console.error('Payment error:', error)
      setError(error instanceof Error ? error.message : tErrors('payment_failed'))
    } finally {
      setIsProcessing(false)
    }
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '' || /^\d*\.?\d{0,2}$/.test(value)) {
      setCustomAmount(value)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        {t('title')}
      </h3>
      <p className="text-gray-600 mb-6">
        {t('description')}
      </p>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg border border-red-200">
          {error}
        </div>
      )}
      
      <div className="flex gap-4 mb-6">
        {TIP_AMOUNTS.map((amount) => (
          <button
            key={amount}
            onClick={() => {
              setSelectedAmount(amount)
              setIsCustom(false)
            }}
            className={`flex-1 py-2 px-4 rounded-lg border-2 transition-colors ${
              selectedAmount === amount && !isCustom
                ? 'border-red-600 bg-red-50 text-red-600'
                : 'border-gray-200 hover:border-red-200'
            }`}
          >
            ${amount}
          </button>
        ))}
      </div>

      <div className="mb-6">
        <div className="relative">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2">$</span>
          <input
            type="text"
            value={customAmount}
            onChange={handleCustomAmountChange}
            onFocus={() => setIsCustom(true)}
            className={`w-full pl-8 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent ${
              isCustom ? 'bg-red-50' : ''
            }`}
          />
        </div>
      </div>

      <button
        onClick={handleTip}
        disabled={isProcessing || (isCustom && (!customAmount || parseFloat(customAmount) < 0.5))}
        className="w-full py-3 bg-gradient-to-r from-red-600 to-yellow-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed relative"
      >
        {isProcessing ? (
          <>
            <span className="opacity-0">{t('send')}</span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            </div>
          </>
        ) : (
          t('send')
        )}
      </button>
    </div>
  )
} 