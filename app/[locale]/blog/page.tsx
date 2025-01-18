import { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const t = await getTranslations('common')

  return {
    description: t('blog.description'),
    keywords: 'chinese names, chinese name meaning, chinese naming culture, chinese name guide',
  }
}

type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
  readTime: {
    en: string
    zh: string
  }
}

const blogPosts: BlogPost[] = [
  {
    slug: 'chinese-names-complete-guide',
    title: 'Chinese Names: The Ultimate Guide to Understanding and Creating Names',
    description: 'Learn everything about Chinese names - from their cultural significance to practical tips for choosing the perfect name. Includes popular names with meanings.',
    date: '2024-01-21',
    readTime: {
      en: '20 min',
      zh: '20分钟'
    }
  },
  {
    slug: 'chinese-names-for-girls',
    title: 'Chinese Names for Girls: Elegant Choices Blending Tradition and Modernity',
    description: 'Explore beautiful Chinese names for girls, drawing inspiration from traditional culture to create unique and elegant names.',
    date: '2024-01-15',
    readTime: {
      en: '10 min',
      zh: '10分钟'
    }
  },
  {
    slug: 'chinese-names-for-boys',
    title: 'Chinese Names for Boys: Perfect Blend of Strength and Wisdom',
    description: 'Discover meaningful Chinese names for boys that embody strength and wisdom while preserving cultural heritage.',
    date: '2024-01-16',
    readTime: {
      en: '12 min',
      zh: '12分钟'
    }
  },
  {
    slug: 'chinese-boy-names-guide',
    title: 'Complete Guide to Chinese Boy Names: Combining Traditional Wisdom with Modern Style',
    description: 'Choose a powerful and meaningful Chinese name for your son that balances traditional values with contemporary characteristics.',
    date: '2024-01-17',
    readTime: {
      en: '15 min',
      zh: '15分钟'
    }
  },
  {
    slug: 'chinese-girl-names-guide',
    title: 'Complete Guide to Chinese Girl Names: Perfect Harmony of Tradition and Modern Beauty',
    description: 'Select an elegant and meaningful Chinese name for your daughter that combines traditional culture with modern aesthetics.',
    date: '2024-01-18',
    readTime: {
      en: '15 min',
      zh: '15分钟'
    }
  },
  {
    slug: 'chinese-last-names-guide',
    title: 'Chinese Last Names: A Complete Guide to Family Names',
    description: 'Explore the rich history, cultural significance, and modern relevance of Chinese surnames in society.',
    date: '2024-01-19',
    readTime: {
      en: '15 min',
      zh: '15分钟'
    }
  },
  {
    slug: 'chinese-names-meaning-and-significance',
    title: 'Cultural Meaning and Significance of Chinese Names',
    description: 'Explore traditional Chinese naming culture and understand the deep meanings and cultural values behind names.',
    date: '2024-01-20',
    readTime: {
      en: '8 min',
      zh: '8分钟'
    }
  },
  {
    slug: 'chinese-names-guide',
    title: 'Chinese Names: Complete Guide with 200+ Popular Names',
    description: 'Discover the beauty and meaning of Chinese names, from traditional naming principles to modern trends, with a comprehensive collection of popular names for boys and girls.',
    date: '2024-01-18',
    readTime: { 
      en: '25 min', 
      zh: '25分钟' 
    }
  }
]

export default async function BlogPage({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations('common')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 hover:border-gray-300"
          >
            <div className="flex-1">
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <time dateTime={post.date}>{post.date}</time>
                <span>·</span>
                <span>{locale === 'zh' ? post.readTime.zh : post.readTime.en}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600">
                {post.title}
              </h3>
              <p className="text-gray-600 line-clamp-2 text-sm">
                {post.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 