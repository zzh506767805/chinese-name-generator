import { NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { handleWebhook } from '@/app/utils/stripe'

export async function POST(request: Request) {
  try {
    const body = await request.text()
    const signature = request.headers.get('stripe-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'Missing stripe-signature header' },
        { status: 400 }
      )
    }

    const result = await handleWebhook(body, signature)
    return NextResponse.json(result)
  } catch (error) {
    console.error('Error handling webhook:', error)
    return NextResponse.json(
      { error: 'Webhook handling failed' },
      { status: 400 }
    )
  }
}

// 配置路由以接收原始请求体
export const config = {
  api: {
    bodyParser: false,
  },
} 