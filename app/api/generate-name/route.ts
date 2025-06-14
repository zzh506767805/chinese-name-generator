import { NextResponse } from 'next/server'
import { generateChineseName } from '@/app/utils/openai'

export async function POST(request: Request) {
  try {
    console.log('API Route: Starting name generation process')
    
    // 解析请求体
    let body
    try {
      body = await request.json()
      console.log('API Route: Request body:', body)
    } catch (parseError) {
      console.error('API Route: Failed to parse request body:', parseError)
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      )
    }

    const { gender, meaning, style, additionalInfo, language, hasCredits } = body
    
    // 检查用户是否有剩余次数（前端已检查，后端再次验证）
    if (!hasCredits) {
      console.log('API Route: User has no credits')
      return NextResponse.json(
        { 
          error: 'Insufficient credits',
          message: 'You need to purchase credits to generate names',
          requiresPurchase: true 
        },
        { status: 402 } // 402 Payment Required
      )
    }

    // 验证必要的字段
    if (!gender || !meaning || !style || !language) {
      console.error('API Route: Missing required fields:', { gender, meaning, style, language })
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    console.log('API Route: Calling OpenAI to generate name')
    // 生成名字
    let nameResult
    try {
      nameResult = await generateChineseName({
        gender,
        meaning,
        style,
        additionalInfo,
        language,
      })
      console.log('API Route: Name generated successfully:', nameResult)
      
      // 添加一个临时的 ID
      nameResult.id = Date.now().toString()
      
      return NextResponse.json(nameResult)
    } catch (aiError) {
      console.error('API Route: OpenAI error:', aiError)
      return NextResponse.json(
        { error: 'Name generation failed' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('API Route: Unexpected error:', error)
    return NextResponse.json(
      { error: 'Failed to generate name', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
} 