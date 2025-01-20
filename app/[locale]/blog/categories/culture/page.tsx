import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/app/components/Breadcrumbs'

interface PageProps {
  params: {
    locale: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Chinese Name Culture - Traditions & Modern Practices',
    description: 'Explore Chinese naming culture, traditions, and modern practices. Learn about the cultural significance of Chinese names and naming customs.',
    keywords: 'chinese name culture, chinese naming traditions, chinese name meaning culture'
  }
}

const cultureArticles = [
  {
    slug: 'chinese-names-meaning-and-significance',
    title: 'Cultural Meaning and Significance of Chinese Names',
    description: 'Explore traditional Chinese naming culture and understand the deep meanings and cultural values behind names.',
    date: '2025-01-20',
    readTime: '8 min'
  }
]

export default async function CulturePage({ params, searchParams }: PageProps) {
  const locale = params.locale

  const breadcrumbItems = [
    { href: `/${locale}/blog`, label: 'Blog' },
    { href: `/${locale}/blog/categories`, label: 'Categories' },
    { label: 'Culture' }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />
      
      <h1 className="text-3xl font-bold mb-8">Chinese Name Culture</h1>
      
      <div className="space-y-8">
        {cultureArticles.map((article) => (
          <article key={article.slug} className="bg-white rounded-lg shadow-sm p-6">
            <Link 
              href={`/${locale}/blog/${article.slug}`}
              className="block hover:opacity-80"
            >
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <div className="flex items-center text-sm text-gray-500">
                <span>{article.date}</span>
                <span className="mx-2">•</span>
                <span>{article.readTime}</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
} 