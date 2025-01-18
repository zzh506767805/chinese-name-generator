import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://chinesenamegenerate.com'
  
  // 支持的语言
  const languages = ['en', 'zh', 'ja', 'ko', 'hi', 'id', 'tl', 'ru']
  
  // 主要路由
  const routes = [
    '',
    '/how-it-works',
    '/faq',
    '/history',
    '/blog'
  ]

  // 博客文章路径
  const blogPosts = [
    '/blog/chinese-names-complete-guide',
    '/blog/chinese-names-for-girls',
    '/blog/chinese-names-for-boys', 
    '/blog/chinese-last-names-guide',
    '/blog/chinese-names-meaning-and-significance'
  ]

  type ChangeFreq = 'daily' | 'weekly' | 'monthly'

  // 生成多语言主页面的sitemap条目
  const mainPages = languages.flatMap(lang => 
    routes.map(route => {
      const changeFreq: ChangeFreq = route === '' ? 'daily' : 'weekly'
      return {
        url: `${baseUrl}/${lang}${route}`,
        lastModified: new Date(),
        changeFrequency: changeFreq,
        priority: route === '' ? 1 : 0.8
      }
    })
  )

  // 生成多语言博客文章的sitemap条目
  const blogEntries = languages.flatMap(lang =>
    blogPosts.map(post => {
      const changeFreq: ChangeFreq = 'monthly'
      return {
        url: `${baseUrl}/${lang}${post}`,
        lastModified: new Date(),
        changeFrequency: changeFreq,
        priority: 0.6
      }
    })
  )

  return [...mainPages, ...blogEntries]
} 