import { loadStripe } from '@stripe/stripe-js'

// 确保只创建一个 Stripe 实例
let stripePromise: Promise<any> | null = null

export const getStripe = () => {
  if (!stripePromise) {
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    if (!key?.startsWith('pk_test_')) {
      throw new Error('Stripe publishable key must be a test key')
    }
    stripePromise = loadStripe(key)
  }
  return stripePromise
} 