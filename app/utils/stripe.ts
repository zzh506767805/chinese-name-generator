import Stripe from 'stripe'
import { PrismaClient, PaymentStatus } from '@prisma/client'

// 确保环境变量中存在 Stripe 密钥
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable')
}

// 初始化 Stripe 客户端
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-12-18.acacia',
})

// 初始化 Prisma 客户端
const prisma = new PrismaClient()

// Stripe 产品价格 ID（需要在 Stripe Dashboard 中创建）
export const PRICE_ID = 'price_H5ggYwtDq4fbrJ'

/**
 * 创建 Stripe Checkout 会话
 * @param nameResultId - 名字生成结果的 ID
 * @returns Stripe Checkout 会话对象
 * @throws Error 当创建会话失败时抛出错误
 */
export async function createCheckoutSession(nameResultId: string) {
  try {
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
        nameResultId, // 在元数据中存储名字结果 ID，用于后续关联
      },
    })

    // 在数据库中创建支付记录
    await prisma.payment.create({
      data: {
        stripeId: session.id,
        amount: session.amount_total ? session.amount_total / 100 : 5.00,
        currency: session.currency || 'usd',
        status: (session.status === 'complete' ? PaymentStatus.COMPLETED : PaymentStatus.PENDING),
        resultId: nameResultId,
      },
    })

    return session
  } catch (error) {
    console.error('Error creating checkout session:', error)
    throw new Error('Failed to create checkout session')
  }
}

/**
 * 处理 Stripe Webhook 事件
 * @param body - Webhook 请求体
 * @param signature - Stripe 签名
 * @returns 处理结果
 * @throws Error 当处理 Webhook 失败时抛出错误
 */
export async function handleWebhook(body: string, signature: string) {
  try {
    // 验证 Webhook 签名
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )

    // 根据事件类型处理不同的支付状态
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        await handleSuccessfulPayment(session)
        break
      }
      case 'checkout.session.expired': {
        const session = event.data.object as Stripe.Checkout.Session
        await handleExpiredPayment(session)
        break
      }
      case 'payment_intent.payment_failed': {
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        const session = await stripe.checkout.sessions.retrieve(paymentIntent.metadata?.checkout_session_id || '')
        await handleFailedPayment(session)
        break
      }
    }

    return { received: true }
  } catch (error) {
    console.error('Error handling webhook:', error)
    throw new Error('Webhook handling failed')
  }
}

/**
 * 处理支付成功的情况
 * @param session - Stripe Checkout 会话
 */
async function handleSuccessfulPayment(session: Stripe.Checkout.Session) {
  const nameResultId = session.metadata?.nameResultId
  if (!nameResultId) {
    throw new Error('Missing nameResultId in session metadata')
  }

  // 更新数据库中的支付状态
  await prisma.payment.update({
    where: {
      stripeId: session.id,
    },
    data: {
      status: PaymentStatus.COMPLETED,
      updatedAt: new Date(),
    },
  })
}

/**
 * 处理支付会话过期的情况
 * @param session - Stripe Checkout 会话
 */
async function handleExpiredPayment(session: Stripe.Checkout.Session) {
  await prisma.payment.update({
    where: {
      stripeId: session.id,
    },
    data: {
      status: PaymentStatus.EXPIRED,
      updatedAt: new Date(),
    },
  })
}

/**
 * 处理支付失败的情况
 * @param session - Stripe Checkout 会话
 */
async function handleFailedPayment(session: Stripe.Checkout.Session) {
  await prisma.payment.update({
    where: {
      stripeId: session.id,
    },
    data: {
      status: PaymentStatus.FAILED,
      updatedAt: new Date(),
    },
  })
} 