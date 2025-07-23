import React, { ReactNode } from 'react'

interface Section {
  title: string
  content: React.ReactNode
}

interface BlogModuleProps {
  keyword: string
  children?: ReactNode
  content?: string
  sections?: Section[]
}

export default function BlogModule({ keyword, children, content, sections = [] }: BlogModuleProps) {
  return (
    <div className="space-y-8">
      {children && <div className="text-gray-700 prose max-w-none">{children}</div>}
      
      {content && (
        <div className="prose max-w-none">
          <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
      
      {sections.map((section, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {section.title}
          </h3>
          <div className="text-gray-700 leading-relaxed prose max-w-none">
            {section.content}
          </div>
        </div>
      ))}
      
      {/* 添加一些包含关键词的段落以增加关键词密度 */}
      <div className="bg-white rounded-lg p-6 shadow-md border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Understanding {keyword}
        </h3>
        <p className="text-gray-700 text-sm mb-4">
          {keyword} are an important part of Chinese culture and identity. When choosing {keyword}, 
          it's essential to consider the meaning, pronunciation, and cultural significance. Our {keyword} generator 
          helps you find authentic {keyword} that respect these traditions while meeting your preferences.
        </p>
        <p className="text-gray-700 text-sm">
          The best {keyword} balance traditional values with modern sensibilities. Whether you're 
          looking for {keyword} for a newborn, a character in your story, or for your own use in 
          Chinese contexts, our tool provides carefully selected {keyword} with proper cultural context.
        </p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Cultural Significance of {keyword}
        </h3>
        <p className="text-gray-700 text-sm mb-4">
          In Chinese culture, {keyword} carry deep meanings and are chosen with great care. 
          Traditional {keyword} often reflect virtues, aspirations, or natural elements that 
          parents wish for their children. Modern {keyword} may incorporate contemporary values 
          while still maintaining cultural connections.
        </p>
        <p className="text-gray-700 text-sm">
          When exploring {keyword}, it's important to understand the characters used and their 
          individual meanings. Each character in {keyword} contributes to the overall significance, 
          and the combination of characters creates harmony in sound and meaning.
        </p>
      </div>
    </div>
  )
} 