'use client'

import { usePathname } from 'next/navigation'
import Script from 'next/script'

interface KeywordPageSchemaProps {
  title: string;
  description: string;
  keyword: string;
  url?: string;
  lastUpdated?: string;
  image?: string;
}

export default function KeywordPageSchema({
  title,
  description,
  keyword,
  url,
  lastUpdated,
  image = 'https://chinesenamegenerate.com/images/chinese-name-generator.jpg',
}: KeywordPageSchemaProps) {
  // 使用当前路径或提供的URL
  const pathname = usePathname()
  const baseUrl = 'https://chinesenamegenerate.com'
  const pageUrl = url || `${baseUrl}${pathname || ''}`
  
  // 使用今天的日期或提供的日期
  const today = lastUpdated || new Date().toISOString().split('T')[0]

  // 基本的WebPage结构化数据
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: pageUrl,
    image: image,
    dateModified: today,
    inLanguage: 'en',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Chinese Name Generator',
      url: baseUrl
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: image
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', 'h2', '.prose p']
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': baseUrl,
            name: 'Home'
          }
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id': pageUrl,
            name: title
          }
        }
      ]
    },
    mainEntity: {
      '@type': 'Article',
      headline: title,
      description: description,
      keywords: keyword,
      datePublished: today,
      dateModified: today,
      image: image,
      author: {
        '@type': 'Organization',
        name: 'Chinese Name Generator Team',
        url: `${baseUrl}/about`
      },
      publisher: {
        '@type': 'Organization',
        name: 'Chinese Name Generator',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/icons/icon.png`
        }
      },
      mainEntityOfPage: pageUrl
    }
  };

  // 如果是名字生成器相关的关键词，添加额外的工具结构化数据
  const toolSchema = keyword.includes('generator') || keyword.includes('name') ? {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: title,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    url: pageUrl,
    image: image,
    dateModified: today,
    inLanguage: 'en',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '156',
      reviewCount: '42'
    },
    description: description
  } : null;

  const jsonLd = JSON.stringify(toolSchema ? [webPageSchema, toolSchema] : [webPageSchema]);

  return (
    <Script id={`schema-${keyword}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
  );
} 