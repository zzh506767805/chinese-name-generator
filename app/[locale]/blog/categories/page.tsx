import { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

interface PageProps {
  params: {
    locale: string
  }
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Blog Categories - Chinese Name Assistant',
    description: 'Explore our comprehensive guides about Chinese names, including naming guides for boys and girls, surname explanations, and cultural insights.',
    keywords: 'chinese name blog, chinese name categories, chinese naming guides'
  }
}

const categories = [
  {
    id: 'boy-names',
    title: 'Boy Names',
    description: 'Guides and articles about Chinese names for boys',
    count: 3,
  },
  {
    id: 'girl-names',
    title: 'Girl Names',
    description: 'Guides and articles about Chinese names for girls',
    count: 3,
  },
  {
    id: 'surnames',
    title: 'Surnames',
    description: 'Understanding Chinese family names and their history',
    count: 2,
  },
  {
    id: 'culture',
    title: 'Culture',
    description: 'Chinese naming culture, traditions and modern trends',
    count: 4,
  },
]

export default function CategoriesPage({ params }: PageProps) {
  const locale = params.locale

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Categories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/${locale}/blog/categories/${category.id}`}
            className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <span className="text-sm text-gray-500">{category.count} articles</span>
          </Link>
        ))}
      </div>
    </div>
  )
} 