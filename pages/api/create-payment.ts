import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { PrismaClient, PaymentStatus } from '@prisma/client'

// 初始化 Prisma 客户端
const prisma = new PrismaClient()

// 初始化 Stripe 客户端
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
})

// Stripe 产品价格 ID
const PRICE_ID = process.env.STRIPE_PRICE_ID!

/**
 * 创建支付会话的 API 路由处理函数
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { resultId } = req.body

    // 验证命名结果是否存在
    const namingResult = await prisma.namingResult.findUnique({
      where: { id: resultId },
    })

    if (!namingResult) {
      return res.status(404).json({ error: 'Naming result not found' })
    }

    // 创建 Stripe Checkout 会话
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXTAUTH_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/`,
      metadata: {
        resultId,
      },
    })

    // 创建支付记录
    await prisma.payment.create({
      data: {
        amount: session.amount_total ? session.amount_total / 100 : 5.00,
        currency: session.currency || 'usd',
        status: PaymentStatus.PENDING,
        stripeId: session.id,
        resultId,
      },
    })

    return res.status(200).json({
      sessionId: session.id,
      url: session.url,
    })
  } catch (error) {
    console.error('Error creating payment session:', error)
    return res.status(500).json({ error: 'Failed to create payment session' })
  }
} 