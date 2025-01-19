'use client'

import { useTranslations } from 'next-intl'
import { useState, useEffect } from 'react'

interface NameResultProps {
  chineseName: string
  pinyin: string
  explanation: string
  culturalContext?: string
  onRequestNewName: () => void
}

export default function NameResult({
  chineseName,
  pinyin,
  explanation,
  culturalContext,
  onRequestNewName,
}: NameResultProps) {
  const t = useTranslations()
  const [isPlaying, setIsPlaying] = useState(false)

  // 保存名字到本地存储
  useEffect(() => {
    if (!chineseName || !pinyin || !explanation) return

    const savedNames = localStorage.getItem('generatedNames')
    const names = savedNames ? JSON.parse(savedNames) : []
    
    // 添加新名字到历史记录
    const newName = {
      chineseName,
      pinyin,
      explanation,
      culturalContext,
      timestamp: Date.now()
    }
    
    // 确保不重复添加相同的名字
    const isDuplicate = names.some((name: any) => 
      name.chineseName === chineseName && 
      name.pinyin === pinyin
    )
    
    if (!isDuplicate) {
      names.unshift(newName)
      localStorage.setItem('generatedNames', JSON.stringify(names))
    }
  }, [chineseName, pinyin, explanation, culturalContext])

  const playPronunciation = () => {
    if (!window.speechSynthesis) {
      console.error('Speech synthesis not supported')
      return
    }

    setIsPlaying(true)
    const utterance = new SpeechSynthesisUtterance(chineseName)
    utterance.lang = 'zh-CN'
    utterance.rate = 0.8
    
    utterance.onend = () => {
      setIsPlaying(false)
    }

    utterance.onerror = () => {
      setIsPlaying(false)
      console.error('Speech synthesis error')
    }

    window.speechSynthesis.speak(utterance)
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        {t('result.title')}
      </h2>
      
      {/* 名字展示 */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2">
          <h3 className="text-5xl font-bold text-red-600">{chineseName}</h3>
          <button
            onClick={playPronunciation}
            disabled={isPlaying}
            className="p-1.5 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50 self-start mt-2"
            title={t('result.play_pronunciation')}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </button>
        </div>
        <p className="text-xl text-gray-600 mt-2">{pinyin}</p>
      </div>

      {/* 名字解释 */}
      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {t('result.meaning')}
          </h3>
          <p className="text-gray-700 leading-relaxed">{explanation}</p>
        </div>

        {culturalContext && (
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {t('result.cultural_context')}
            </h3>
            <p className="text-gray-700 leading-relaxed">{culturalContext}</p>
          </div>
        )}
      </div>

      {/* 操作按钮 */}
      <div className="flex flex-col space-y-4">
        <button
          onClick={onRequestNewName}
          className="w-full py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {t('result.generate_another')}
        </button>
      </div>
    </div>
  )
} 