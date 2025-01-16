'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'

export default function LocaleSelect() {
  console.log('Rendering LocaleSelect')
  try {
    const pathname = usePathname()
    const router = useRouter()
    const locale = useLocale()
    
    console.log('Current locale:', locale)
    console.log('Current pathname:', pathname)

    const handleLocaleChange = (newLocale: string) => {
      console.log('Changing locale to:', newLocale)
      if (!pathname) {
        console.error('Pathname is undefined')
        return
      }
      const segments = pathname.split('/')
      segments[1] = newLocale
      const newPath = segments.join('/')
      console.log('New path:', newPath)
      router.push(newPath)
    }

    return (
      <select
        value={locale}
        onChange={(e) => handleLocaleChange(e.target.value)}
        className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
      >
        <option value="en">English</option>
        <option value="zh">中文</option>
        <option value="ja">日本語</option>
        <option value="ko">한국어</option>
        <option value="hi">हिंदी</option>
        <option value="id">Bahasa Indonesia</option>
        <option value="tl">Tagalog</option>
      </select>
    )
  } catch (error) {
    console.error('Error in LocaleSelect:', error)
    return null
  }
} 