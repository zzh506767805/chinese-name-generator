import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

/**
 * 语言切换器组件
 * 用于切换网站的显示语言
 */
export default function LanguageSwitcher() {
  const router = useRouter()
  const { t } = useTranslation('common')

  /**
   * 语言配置
   * 包含支持的语言及其显示名称
   */
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'zh', name: '中文' },
    { code: 'ja', name: '日本語' },
    { code: 'ko', name: '한국어' },
  ]

  /**
   * 处理语言切换
   * @param locale 目标语言代码
   */
  const handleLanguageChange = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <div className="relative inline-block text-left">
      <select
        value={router.locale}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md"
        aria-label={t('language.select')}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  )
} 