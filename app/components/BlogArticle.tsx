import { ReactNode } from 'react'
import Link from 'next/link'

interface BlogArticleProps {
  title: string
  description: string
  children: ReactNode
  relatedArticles?: Array<{
    href: string
    title: string
  }>
}

export default function BlogArticle({ 
  title, 
  description, 
  children,
  relatedArticles = []
}: BlogArticleProps) {
  return (
    <article className="prose prose-sm sm:prose lg:prose-lg max-w-none mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
      {/* 文章标题区 */}
      <header className="mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">{title}</h1>
        <p className="text-base sm:text-lg text-gray-600">{description}</p>
      </header>

      {/* 文章主体内容 */}
      <main className="article-content">
        {children}
      </main>

      {/* 相关文章区 */}
      {relatedArticles.length > 0 && (
        <footer className="mt-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">Related Articles</h2>
          <ul className="space-y-2 text-blue-600">
            {relatedArticles.map(article => (
              <li key={article.href}>
                <Link 
                  href={article.href}
                  className="hover:text-blue-800 transition-colors"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </footer>
      )}
    </article>
  )
}

// 导出常用的子组件
export function ContentSection({ 
  title, 
  children 
}: { 
  title: string
  children: ReactNode 
}) {
  return (
    <section className="mb-8">
      <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">{title}</h2>
      {children}
    </section>
  )
}

export function CardGrid({
  children,
  className = ""
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose ${className}`}>
      {children}
    </div>
  )
}

export function Card({
  title,
  children,
  className = "bg-gray-50"
}: {
  title?: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow ${className}`}>
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {children}
    </div>
  )
}

export function NameCard({
  name,
  meaning,
  elements
}: {
  name: string
  meaning: string
  elements: string[]
}) {
  return (
    <Card>
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-2">Meaning: {meaning}</p>
      <div className="text-gray-500 text-sm">
        <p className="font-medium mb-1">Elements:</p>
        <ul className="list-disc pl-4 space-y-1">
          {elements.map(element => (
            <li key={element}>{element}</li>
          ))}
        </ul>
      </div>
    </Card>
  )
}

export function CTASection({
  title,
  description,
  buttonText,
  buttonHref
}: {
  title: string
  description: string
  buttonText: string
  buttonHref: string
}) {
  return (
    <div className="bg-blue-50 p-4 sm:p-6 rounded-lg shadow-sm my-8">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        href={buttonHref}
        className="inline-block bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base"
      >
        {buttonText}
      </Link>
    </div>
  )
} 