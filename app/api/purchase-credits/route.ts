import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { getPurchaseConfig } from '@/app/utils/credits'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing Stripe secret key')
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia' as any,
  typescript: true,
})

export async function POST(request: Request) {
  try {
    const { sessionId } = await request.json()
    console.log('Creating credit purchase session with ID:', sessionId)

    const { creditsPerPurchase, pricePerPackage } = getPurchaseConfig()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${creditsPerPurchase} Chinese Names Generation Credits`,
              description: `Generate ${creditsPerPurchase} unique Chinese names with cultural meanings`,
            },
            unit_amount: Math.round(pricePerPackage * 100), // 转换为美分
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}&type=credits`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      metadata: {
        type: 'credits_purchase',
        credits: creditsPerPurchase.toString(),
        custom_session_id: sessionId,
      },
    })

    return NextResponse.json({ 
      sessionId: session.id,
      url: session.url 
    })
  } catch (error) {
    console.error('Error creating credit purchase session:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Purchase session creation failed' },
      { status: 500 }
    )
  }
} 