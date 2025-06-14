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
  const prompt = `You are a professional Chinese naming expert with deep knowledge of traditional Chinese culture, classical literature, and the science of naming. You possess extensive understanding of Chinese phonetics, I Ching five-element theory, and poetic allusions.

## Naming Requirements
- **Gender Preference**: ${preferences.gender}
- **Desired Meaning**: ${preferences.meaning}
- **Style Preference**: ${preferences.style}
${preferences.additionalInfo ? `- **Additional Information**: ${preferences.additionalInfo}` : ''}

## Naming Principles
1. Phonetic Harmony: Focus on tonal coordination and smooth pronunciation
2. Visual Beauty: Consider the visual balance of Chinese character structures
3. Profound Meaning: Integrate traditional cultural connotations with modern aesthetics
4. Avoid Ambiguity: Ensure no negative homophones or associations
5. Contemporary Relevance: Maintain cultural depth while fitting modern contexts

## CRITICAL LANGUAGE REQUIREMENT
**YOU MUST respond in ${responseLanguage} ONLY. All explanations and cultural contexts MUST be written in ${responseLanguage}.**

## Output Format
Provide your response strictly in the following JSON format:

\`\`\`json
{
  "chineseName": "Recommended Chinese name",
  "pinyin": "Standard pinyin with tone marks",
  "explanation": "Name meaning analysis in ${responseLanguage}, including character meanings and overall significance",
  "culturalContext": "Cultural background in ${responseLanguage}, such as poetic origins, historical allusions, or cultural symbolism"
}
\`\`\`

## Quality Standards
- Explanations must be detailed yet concise, following ${responseLanguage} expression habits
- Pinyin notation must be accurate with standard tone marks (e.g., Yì Xuān)
- Cultural references must be accurate, avoid fabricated allusions
- Overall style must highly match user preferences
- Name must have good modern applicability

**REMEMBER: All text in "explanation" and "culturalContext" fields MUST be written in ${responseLanguage}. Do not use Chinese characters in these fields.**

Based on the above requirements, please recommend a Chinese name with rich cultural connotations and beautiful meanings.`

  console.log('OpenAI: Generated prompt:', prompt)

  try {
    console.log('OpenAI: Calling API with model gpt-4.1-mini')
    
    const response = await fetchWithTimeout(`${OPENAI_API_PROXY}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
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