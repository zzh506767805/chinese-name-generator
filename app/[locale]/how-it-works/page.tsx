'use client'

import { useTranslations } from 'next-intl'

export default function HowItWorks() {
  const t = useTranslations()

  return (
    <div className="container mx-auto px-4 py-12 mt-16">
      <h1 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-yellow-500">
        {t('how_it_works.title')}
      </h1>
      
      <div className="max-w-3xl mx-auto space-y-8">
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {t('how_it_works.step1.title')}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t('how_it_works.step1.description')}
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {t('how_it_works.step2.title')}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t('how_it_works.step2.description')}
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {t('how_it_works.step3.title')}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t('how_it_works.step3.description')}
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {t('how_it_works.step4.title')}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {t('how_it_works.step4.description')}
          </p>
        </section>
      </div>
    </div>
  )
} 