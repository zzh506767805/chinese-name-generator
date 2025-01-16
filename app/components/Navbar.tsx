import { useTranslations } from 'next-intl'
import Link from 'next/link'
import LocaleSelect from './LocaleSelect'

export default function Navbar() {
  console.log('Rendering Navbar')
  const t = useTranslations()

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-lg sm:text-xl font-bold text-red-600 whitespace-nowrap">
                {t('title')}
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
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
            <div className="relative">
              <LocaleSelect />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 