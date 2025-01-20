import { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import Breadcrumb from '@/app/components/Breadcrumb'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('common')
  return {
    title: 'Chinese Boy Names - Collection of Traditional & Modern Names',
    description: 'Explore our collection of Chinese names for boys. Find traditional and modern Chinese male names with meanings, pronunciation guides, and cultural context.',
    keywords: 'chinese boy names, chinese male names, chinese names for boys'
  }
}

const boyNameArticles = [
  {
    slug: 'chinese-names-for-boys',
    title: 'Chinese Names for Boys: Perfect Blend of Strength and Wisdom',
    description: 'Discover meaningful Chinese names for boys that combine traditional values with modern appeal.',
    date: '2025-01-10',
    readTime: '15 min'
  },
  {
    slug: 'chinese-boy-names-guide',
    title: 'Complete Guide to Chinese Boy Names',
    description: 'Everything you need to know about choosing the perfect Chinese name for your boy.',
    date: '2025-01-05',
    readTime: '12 min'
  }
]

const breadcrumbItems = [
  { href: '/blog', label: 'Blog' },
  { href: '/blog/categories', label: 'Categories' },
  { label: 'Boy Names' }
]

export default async function BoyNamesPage() {
  const t = await getTranslations('common')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="text-3xl font-bold mb-8">Chinese Boy Names</h1>
      
      <div className="space-y-8">
        {boyNameArticles.map((article) => (
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