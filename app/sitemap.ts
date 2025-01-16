import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://chinesenamegenerate.com'
  const languages = ['en', 'zh', 'ja', 'ko', 'hi', 'id', 'tl']
  const routes = ['', '/how-it-works', '/faq', '/history']
  
  const staticPages = languages.flatMap(lang => 
    routes.map(route => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.8,
    }))
  )

  return [...staticPages]
} 