import { NextResponse } from 'next/server'
import { createCheckoutSession } from '@/app/utils/stripe'

export async function POST(request: Request) {
  try {
    const { nameResultId } = await request.json()

    if (!nameResultId) {
      return NextResponse.json(
        { error: 'Missing nameResultId' },
        { status: 400 }
      )
    }

    const session = await createCheckoutSession(nameResultId)
    return NextResponse.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
} 