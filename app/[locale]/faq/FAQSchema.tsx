'use client'

import { useTranslations } from 'next-intl'

function FAQSchemaContent() {
  const t = useTranslations('faq')
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://chinesenameassistant.com'

  const faqs = [
    {
      question: t('what_makes_good_name.question'),
      answer: t('what_makes_good_name.answer'),
    },
    {
      question: t('name_structure.question'),
      answer: t('name_structure.answer'),
    },
    {
      question: t('meaning_importance.question'),
      answer: t('meaning_importance.answer'),
    },
    {
      question: t('common_characters.question'),
      answer: t('common_characters.answer'),
    },
    {
      question: t('gender_specific.question'),
      answer: t('gender_specific.answer'),
    },
    {
      question: t('name_taboos.question'),
      answer: t('name_taboos.answer'),
    },
    {
      question: t('pronunciation.question'),
      answer: t('pronunciation.answer'),
    },
    {
      question: t('cultural_significance.question'),
      answer: t('cultural_significance.answer'),
    },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function FAQSchema() {
  return <FAQSchemaContent />
} 