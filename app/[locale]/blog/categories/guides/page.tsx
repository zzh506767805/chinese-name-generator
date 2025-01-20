import { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import Breadcrumb from '@/app/components/Breadcrumb'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('common')
  return {
    title: 'Chinese Name Guides - Comprehensive Naming Resources',
    description: 'Explore our comprehensive guides about Chinese names, including detailed explanations of meanings, cultural significance, and naming practices.',
    keywords: 'chinese name guide, chinese naming guide, chinese name meaning guide'
  }
}

const guideArticles = [
  {
    slug: 'chinese-names-complete-guide',
    title: 'Chinese Names: The Ultimate Guide to Understanding and Creating Names',
    description: 'Master the art of Chinese names. Learn structure, meanings, and modern trends.',
    date: '2025-01-21',
    readTime: '20 min'
  },
  {
    slug: 'chinese-names-for-girls',
    title: 'Chinese Names for Girls: Elegant Choices Blending Tradition and Modernity',
    description: 'Discover beautiful Chinese names for girls with their meanings and cultural significance.',
    date: '2025-01-15',
    readTime: '15 min'
  },
  {
    slug: 'chinese-names-for-boys',
    title: 'Chinese Names for Boys: Perfect Blend of Strength and Wisdom',
    description: 'Explore meaningful Chinese names for boys that combine traditional values with modern appeal.',
    date: '2025-01-10',
    readTime: '15 min'
  }
]

const breadcrumbItems = [
  { href: '/blog', label: 'Blog' },
  { href: '/blog/categories', label: 'Categories' },
  { label: 'Guides' }
]

export default async function GuidesPage() {
  const t = await getTranslations('common')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="text-3xl font-bold mb-8">Chinese Name Guides</h1>
      
      <div className="space-y-8">
        {guideArticles.map((article) => (
          <article key={article.slug} className="bg-white rounded-lg shadow-sm p-6">
            <Link 
              href={`/blog/${article.slug}`}
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