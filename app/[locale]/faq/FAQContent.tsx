'use client'

import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'

type FAQSection = {
  question: string
  answer: string
}

export default function FAQContent() {
  const params = useParams() || { locale: 'en' }
  const locale = (params.locale as string) || 'en'
  const t = useTranslations('faq')

  const faqSections = [
    'what_makes_good_name',
    'name_structure',
    'meaning_importance',
    'common_characters',
    'gender_specific',
    'name_taboos',
    'pronunciation',
    'cultural_significance'
  ] as const

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-500">
        {t('title')}
      </h1>

      <div className="max-w-3xl mx-auto space-y-8">
        {faqSections.map((section) => (
          <div key={section} className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {t(`${section}.question`)}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t(`${section}.answer`)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
} 