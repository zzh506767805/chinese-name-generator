'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'

/**
 * 名字生成表单组件
 * 用于收集用户偏好并生成中文名字
 */
export default function NameForm() {
  // 从路径中获取当前语言
  const pathname = usePathname()
  const currentLocale = pathname?.split('/')[1] || 'en'

  // 表单状态
  const [formData, setFormData] = useState({
    firstName: '',
    gender: '',
    meaning: '',
    style: 'modern',
    additionalInfo: '',
  })

  // 加载状态
  const [isLoading, setIsLoading] = useState(false)
  // 生成结果
  const [result, setResult] = useState<null | {
    name: string
    pinyin: string
    explanation: string
  }>(null)

  /**
   * 处理表单提交
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch('/api/generate-name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Language': currentLocale,
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Name generation failed')
      }

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error('Error generating name:', error)
      // TODO: 显示错误消息
    } finally {
      setIsLoading(false)
    }
  }

  /**
   * 处理表单输入变化
   */
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // 获取表单文本
  const formText = {
    en: {
      firstName: 'Your First Name',
      gender: 'Gender',
      selectGender: 'Select Gender',
      male: 'Male',
      female: 'Female',
      neutral: 'Neutral',
      meaning: 'Desired Meaning',
      style: 'Name Style',
      styleModern: 'Modern',
      styleTraditional: 'Traditional',
      styleLiterary: 'Literary',
      additionalInfo: 'Additional Information',
      submit: 'Generate Name',
      loading: 'Generating...',
      result: {
        title: 'Your Chinese Name',
      },
    },
    zh: {
      firstName: '你的英文名',
      gender: '性别',
      selectGender: '选择性别',
      male: '男',
      female: '女',
      neutral: '中性',
      meaning: '期望含义',
      style: '名字风格',
      styleModern: '现代',
      styleTraditional: '传统',
      styleLiterary: '文学',
      additionalInfo: '补充信息',
      submit: '生成名字',
      loading: '生成中...',
      result: {
        title: '你的中文名字',
      },
    },
  }[currentLocale as 'en' | 'zh']

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 英文名输入 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {formText.firstName}
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            required
          />
        </div>

        {/* 性别选择 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {formText.gender}
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            required
          >
            <option value="">{formText.selectGender}</option>
            <option value="male">{formText.male}</option>
            <option value="female">{formText.female}</option>
            <option value="neutral">{formText.neutral}</option>
          </select>
        </div>

        {/* 期望含义 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {formText.meaning}
          </label>
          <input
            type="text"
            name="meaning"
            value={formData.meaning}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>

        {/* 名字风格 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {formText.style}
          </label>
          <select
            name="style"
            value={formData.style}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          >
            <option value="modern">{formText.styleModern}</option>
            <option value="traditional">{formText.styleTraditional}</option>
            <option value="literary">{formText.styleLiterary}</option>
          </select>
        </div>

        {/* 额外信息 */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            {formText.additionalInfo}
          </label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleInputChange}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
          />
        </div>

        {/* 提交按钮 */}
        <div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-gray-400"
          >
            {isLoading ? formText.loading : formText.submit}
          </button>
        </div>
      </form>

      {/* 结果显示 */}
      {result && (
        <div className="mt-8 p-6 bg-red-50 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {formText.result.title}
          </h3>
          <div className="space-y-4">
            <p className="text-3xl font-bold text-red-800">{result.name}</p>
            <p className="text-gray-600">{result.pinyin}</p>
            <p className="text-gray-700">{result.explanation}</p>
          </div>
        </div>
      )}
    </div>
  )
} 