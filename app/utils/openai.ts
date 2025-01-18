// 确保环境变量中存在 OpenAI API 密钥
if (!process.env.OPENAI_API_KEY) {
  console.error('OpenAI: Missing API key in environment variables')
  throw new Error('Missing OPENAI_API_KEY environment variable')
}

const OPENAI_API_PROXY = 'https://proxy.tainanle.online'

/**
 * 用户名字生成偏好的接口定义
 */
interface NamePreferences {
  /** 性别偏好：male/female/neutral */
  gender: string
  /** 期望的名字含义或特点 */
  meaning: string
  /** 名字风格：traditional/modern/literary/simple */
  style: string
  /** 额外的补充信息 */
  additionalInfo?: string
  /** 用户界面语言 */
  language: string
}

// 创建一个带有超时的 fetch 函数
const fetchWithTimeout = async (url: string, options: RequestInit & { timeout?: number }) => {
  const { timeout = 30000, ...fetchOptions } = options

  const controller = new AbortController()
  const id = setTimeout(() => controller.abort(), timeout)

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      signal: controller.signal,
    })
    clearTimeout(id)
    return response
  } catch (error) {
    clearTimeout(id)
    throw error
  }
}

/**
 * 使用 OpenAI API 生成中文名字
 */
export async function generateChineseName(preferences: NamePreferences) {
  console.log('OpenAI: Starting name generation with preferences:', preferences)

  // 根据界面语言选择响应语言
  const getResponseLanguage = (lang: string) => {
    switch (lang) {
      case 'ko': return '韩语';
      case 'ja': return '日语';
      case 'hi': return '印地语';
      case 'id': return '印尼语';
      case 'tl': return '他加禄语';
      case 'zh': return '中文';
      case 'en':
      default: return '英文';
    }
  }

  const responseLanguage = getResponseLanguage(preferences.language)

  // 构建 prompt
  const prompt = `作为一个熟读中华文化的起名专家，请根据以下要求为用户起一个中文名：
- 性别偏好：${preferences.gender}
- 期望含义：${preferences.meaning}
- 名字风格：${preferences.style}
${preferences.additionalInfo ? `- 补充信息：${preferences.additionalInfo}` : ''}

请严格按照用户界面语言（${responseLanguage}）回复，并按照以下JSON格式返回结果：
{
  "chineseName": "建议的中文名",
  "pinyin": "名字的拼音",
  "explanation": "名字的详细解释（请用${responseLanguage}）",
  "culturalContext": "相关的文化背景解释（请用${responseLanguage}）"
}

注意：
1. 必须使用${responseLanguage}解释名字的含义和文化背景
2. 拼音使用声调标记，如：Yì Xuān
3. 确保解释简洁明了，适合目标语言的表达习惯`

  console.log('OpenAI: Generated prompt:', prompt)

  try {
    console.log('OpenAI: Calling API with model gpt-4o-mini')
    
    const response = await fetchWithTimeout(`${OPENAI_API_PROXY}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "你是一个专业的中文起名专家，精通汉语、诗词、文化典故。你需要根据用户的需求，给出恰当的中文名字建议。"
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.8,
        max_tokens: 1000,
        response_format: { type: "json_object" },
      }),
      timeout: 60000 // 60 seconds timeout
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('OpenAI: API error response:', errorData)
      throw new Error(`API request failed: ${errorData.error?.message || response.statusText}`)
    }

    const data = await response.json()
    console.log('OpenAI: Raw API response:', data)

    // 解析并返回生成的结果
    const result = JSON.parse(data.choices[0].message.content || '{}')
    console.log('OpenAI: Parsed result:', result)
    return result
  } catch (error) {
    console.error('OpenAI: API call failed:', error)
    if (error instanceof Error) {
      console.error('OpenAI: Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      })
    }
    throw new Error('Failed to generate name: ' + (error instanceof Error ? error.message : 'Unknown error'))
  }
} 