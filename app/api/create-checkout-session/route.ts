import { NextResponse } from 'next/server'
import { createCheckoutSession } from '@/app/utils/stripe'

export async function POST(request: Request) {
  try {
    const { amount } = await request.json()
    
    if (!amount) {
      return NextResponse.json(
        { error: 'Amount is required' },
        { status: 400 }
      )
    }

    const session = await createCheckoutSession(amount)
    return NextResponse.json(session)
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
} 