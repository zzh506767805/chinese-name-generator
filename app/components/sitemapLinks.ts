import { KeywordPage } from '../types'

/**
 * 所有关键词落地页数据
 * 这是一个静态数据，供服务器端和客户端共享使用
 * 确保SEO链接和导航一致
 */
export const keywordPages: KeywordPage[] = [
  { title: 'Chinese Names', href: '/chinese-names' },
  { title: 'Chinese Names for Boys', href: '/chinese-names-for-boys' },
  { title: 'Chinese Names for Girls', href: '/chinese-names-for-girls' },
  { title: 'Chinese Girl Names', href: '/chinese-girl-names' },
  { title: 'Chinese Name Generator', href: '/chinese-name-generator' },
  { title: 'Chinese Surnames', href: '/chinese-surnames' },
  { title: 'Chinese Last Names', href: '/chinese-last-names' },
  { title: 'List of Chinese Names', href: '/list-of-chinese-names' },
  { title: 'Chinese Names for Girls Generator', href: '/chinese-names-for-girls-generator' }
]

export const getKeywordPageByUrl = (url: string): KeywordPage | undefined => {
  return keywordPages.find(page => page.href === url)
}

export const getRelatedKeywordPages = (currentUrl: string, limit: number = 4): KeywordPage[] => {
  // 排除当前页面，随机选择其他页面
  const filteredPages = keywordPages.filter(page => page.href !== currentUrl)
  
  // 随机打乱数组并返回指定数量的结果
  return [...filteredPages]
    .sort(() => Math.random() - 0.5)
    .slice(0, limit)
}

