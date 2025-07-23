import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // 我们不禁止任何路径，让搜索引擎可以抓取所有内容
    },
    sitemap: 'https://chinesenamegenerate.com/sitemap.xml',
  }
} 