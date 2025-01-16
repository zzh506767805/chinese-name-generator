import { loadStripe } from '@stripe/stripe-js'

let stripePromise: Promise<any> | null = null

export const getStripe = () => {
  if (!stripePromise) {
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY

    if (!publishableKey) {
      throw new Error('Stripe publishable key is not set')
    }

    stripePromise = loadStripe(publishableKey)
  }
  return stripePromise
} 