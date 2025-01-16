export default function SchemaOrg({ locale }: { locale: string }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://chinesenameassistant.com'
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Chinese Name Assistant',
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Web',
    url: `${baseUrl}/${locale}`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'Free AI-powered Chinese name generator with meanings, pinyin, and cultural context. Create authentic Chinese names based on your preferences.',
    inLanguage: locale,
    keywords: 'Chinese name generator, Chinese names, Chinese name meanings, Chinese name translation, AI name generator',
    potentialAction: {
      '@type': 'UseAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/${locale}`,
        description: 'Generate your perfect Chinese name with AI'
      }
    },
    creator: {
      '@type': 'Organization',
      name: 'Chinese Name Assistant',
      url: baseUrl
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '4.8',
        bestRating: '5'
      },
      author: {
        '@type': 'Organization',
        name: 'Chinese Name Assistant'
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
} 