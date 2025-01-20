import { Metadata } from 'next'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog Categories - Chinese Name Generator',
    description: 'Explore different categories of articles about Chinese names, including guides, culture, and naming practices.',
    keywords: 'chinese name categories, chinese name guides, chinese name culture'
  }
}

export default async function CategoriesPage({ params }: PageProps) {
  const { locale } = await params

  const categories = [
    {
      id: 'guides',
      title: 'Guides',
      description: 'Comprehensive guides about Chinese names and naming practices'
    },
    {
      id: 'boy-names',
      title: 'Boy Names',
      description: 'Articles about Chinese boy names and their meanings'
    },
    {
      id: 'girl-names',
      title: 'Girl Names',
      description: 'Articles about Chinese girl names and their meanings'
    },
    {
      id: 'culture',
      title: 'Culture',
      description: 'Articles about Chinese naming culture and traditions'
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Categories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id}
            href={`/${locale}/blog/categories/${category.id}`}
            className="block bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
            <p className="text-gray-600">{category.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
} 