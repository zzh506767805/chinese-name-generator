import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// 初始化 Stripe
const secretKey = process.env.STRIPE_SECRET_KEY
let stripe: Stripe | null = null

if (!secretKey) {
  throw new Error('Missing STRIPE_SECRET_KEY')
}

// 在开发环境中强制使用测试密钥
if (process.env.NODE_ENV === 'development' && !secretKey.startsWith('sk_test_')) {
  const testKey = 'sk_test_51QWtze03nLpwfZ7M0BNRUTlHX3mgNDM7x16iuZ9XfkCzg85wR7f1LVk5igVroMZQXlCNLHIwNwRTaHG6B8W2ddaS00oAvsD0vr'
  stripe = new Stripe(testKey, {
    apiVersion: '2024-12-18.acacia' as any,
    typescript: true,
  })
} else {
  stripe = new Stripe(secretKey, {
    apiVersion: '2024-12-18.acacia' as any,
    typescript: true,
  })
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const sessionId = searchParams.get('sessionId')

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Missing sessionId' },
        { status: 400 }
      )
    }

    if (!stripe) {
      return NextResponse.json(
        { error: 'Stripe not initialized' },
        { status: 500 }
      )
    }

    // 获取支付会话信息
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (!session) {
      return NextResponse.json(
        { error: 'Session not found' },
        { status: 404 }
      )
    }

    // 检查支付状态
    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      )
    }

    // 返回成功信息
    return NextResponse.json({
      success: true,
      amount: session.amount_total ? session.amount_total / 100 : 0,
      message: 'Thank you for your support!'
    })
  } catch (error) {
    console.error('Error fetching payment result:', error)
    return NextResponse.json(
      { error: 'Failed to fetch payment result' },
      { status: 500 }
    )
  }
} 