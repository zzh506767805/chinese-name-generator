import { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import Breadcrumb from '@/app/components/Breadcrumb'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('common')
  return {
    title: 'Chinese Girl Names - Collection of Beautiful & Elegant Names',
    description: 'Explore our collection of Chinese names for girls. Find traditional and modern Chinese female names with meanings, pronunciation guides, and cultural context.',
    keywords: 'chinese girl names, chinese female names, chinese names for girls'
  }
}

const girlNameArticles = [
  {
    slug: 'chinese-names-for-girls',
    title: 'Chinese Names for Girls: Elegant Choices Blending Tradition and Modernity',
    description: 'Discover beautiful Chinese names for girls that combine grace with cultural significance.',
    date: '2025-01-15',
    readTime: '15 min'
  },
  {
    slug: 'chinese-girl-names-guide',
    title: 'Complete Guide to Chinese Girl Names',
    description: 'Everything you need to know about choosing the perfect Chinese name for your girl.',
    date: '2025-01-08',
    readTime: '12 min'
  }
]

const breadcrumbItems = [
  { href: '/blog', label: 'Blog' },
  { href: '/blog/categories', label: 'Categories' },
  { label: 'Girl Names' }
]

export default async function GirlNamesPage() {
  const t = await getTranslations('common')

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb items={breadcrumbItems} />
      
      <h1 className="text-3xl font-bold mb-8">Chinese Girl Names</h1>
      
      <div className="space-y-8">
        {girlNameArticles.map((article) => (
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