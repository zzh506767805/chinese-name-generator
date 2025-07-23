import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LocaleSelect from './LocaleSelect'
import NavbarClient from './NavbarClient'
import { keywordPages } from './sitemapLinks'

export default function Navbar() {
  const t = useTranslations()
  
  // 使用正确的翻译键
  const nameGeneratorText = t('nav.name_generator')

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-base sm:text-xl font-bold text-red-600 whitespace-nowrap">
                {t('title')}
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-3">
            {/* 名字生成器下拉菜单 - 客户端组件（只传递翻译后的文本） */}
            <NavbarClient 
              keywordPages={keywordPages} 
              nameGeneratorText={nameGeneratorText} 
            />

            {/* 静态链接 - 服务端渲染 */}
            <Link
              href="/blog"
              className="text-gray-700 hover:text-gray-900 px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base whitespace-nowrap hidden md:block"
            >
              {t('nav.blog')}
            </Link>
            <Link
              href="/how-it-works"
              className="text-gray-700 hover:text-gray-900 px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base whitespace-nowrap hidden sm:block"
            >
              {t('nav.how_it_works')}
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-gray-900 px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base hidden sm:block"
            >
              {t('nav.faq')}
            </Link>
            <Link 
              href="/history" 
              className="text-gray-700 hover:text-gray-900 px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base whitespace-nowrap"
            >
              {t('nav.history')}
            </Link>
            <div className="relative ml-1 sm:ml-2">
              <LocaleSelect />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 