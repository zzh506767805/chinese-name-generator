import Link from 'next/link'
export { default as CardGrid } from './CardGrid'
export { default as Card } from './Card'
export { default as ContentSection } from './ContentSection'
export { default as CTASection } from './CTASection'

interface BlogArticleProps {
  title: string
  description: string
  children: React.ReactNode
  relatedArticles?: {
    title: string
    href: string
  }[]
}

export default function BlogArticle({ title, description, children, relatedArticles }: BlogArticleProps) {
  return (
    <article className="prose prose-sm sm:prose lg:prose-lg max-w-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-600">{description}</p>
        </header>

        <div className="mb-12">
          {children}
        </div>

        {relatedArticles && relatedArticles.length > 0 && (
          <div className="border-t pt-8">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="block p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600">
                    {article.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  )
} 