import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { getRelatedKeywordPages } from './sitemapLinks'

export default function RelatedPages() {
  const pathname = usePathname()
  // 使用空字符串作为后备值，以防pathname为null
  const relatedPages = getRelatedKeywordPages(pathname || '', 4)
  
  if (relatedPages.length === 0) return null
  
  return (
    <section className="py-6 bg-gray-50 rounded-lg my-6">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Pages</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedPages.map((page) => (
            <Link 
              href={page.href} 
              key={page.href}
              className="block p-3 bg-white rounded shadow-sm hover:shadow-md transition-all text-center"
            >
              <span className="text-red-600 hover:text-red-700 transition-colors">
                {page.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 