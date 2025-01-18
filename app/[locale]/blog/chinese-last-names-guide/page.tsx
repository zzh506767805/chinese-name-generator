import { Metadata } from 'next'
import BlogArticle, { ContentSection, CardGrid, Card, CTASection } from '@/app/components/BlogArticle'

export const metadata: Metadata = {
  title: 'Chinese Last Names (2025): Top 100 Surnames with Meanings',
  description: 'Explore the most common Chinese surnames and their meanings. Includes top 100 Chinese last names, historical origins, population statistics, and cultural significance.',
  keywords: 'chinese last names, chinese surnames, chinese family names, common chinese surnames, chinese last name meaning, chinese surname list, chinese surname origin, chinese surname history, chinese surname population, chinese surname statistics'
}

export default function ChineseLastNamesGuidePage() {
  const commonSurnames = [
    { name: '王 (Wáng)', meaning: 'King', population: 'About 100 million' },
    { name: '李 (Lǐ)', meaning: 'Plum', population: 'About 98 million' },
    { name: '张 (Zhāng)', meaning: 'Bow-maker', population: 'About 95 million' },
    { name: '刘 (Liú)', meaning: 'Kill', population: 'About 73 million' },
    { name: '陈 (Chén)', meaning: 'Minister', population: 'About 70 million' },
    { name: '杨 (Yáng)', meaning: 'Poplar', population: 'About 60 million' }
  ]

  const relatedArticles = [
    {
      href: '/blog/chinese-names-for-boys',
      title: 'Chinese Names for Boys'
    },
    {
      href: '/blog/chinese-names-for-girls',
      title: 'Chinese Names for Girls'
    },
    {
      href: '/blog/chinese-names-meaning-and-significance',
      title: 'Cultural Meaning and Significance of Chinese Names'
    }
  ]

  return (
    <BlogArticle
      title="Chinese Last Names: A Complete Guide to Family Names"
      description="Chinese surnames carry deep historical significance and cultural meaning. With over 4,000 surnames in use today, they reflect China's rich heritage and social structure through the ages."
      relatedArticles={relatedArticles}
    >
      <ContentSection title="Most Common Chinese Surnames">
        <CardGrid>
          {commonSurnames.map(surname => (
            <Card key={surname.name}>
              <h3 className="text-lg font-semibold mb-1">{surname.name}</h3>
              <p className="text-gray-600">Meaning: {surname.meaning}</p>
              <p className="text-gray-500">Population: {surname.population}</p>
            </Card>
          ))}
        </CardGrid>
      </ContentSection>

      <ContentSection title="Historical Origins of Chinese Surnames">
        <CardGrid>
          <Card className="bg-blue-50">
            <h3 className="text-lg font-semibold mb-2">Geographical Origins</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>Based on ancestral places</li>
              <li>Derived from territories</li>
              <li>Named after rivers or mountains</li>
              <li>Connected to ancient states</li>
            </ul>
          </Card>
          <Card className="bg-green-50">
            <h3 className="text-lg font-semibold mb-2">Official Titles</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>Derived from government positions</li>
              <li>Based on noble titles</li>
              <li>Related to ancient professions</li>
              <li>Military ranks and honors</li>
            </ul>
          </Card>
        </CardGrid>
      </ContentSection>

      <ContentSection title="Regional Distribution">
        <p className="text-gray-600 mb-6">
          Chinese surnames show distinct regional patterns, with certain names being more common in specific provinces or regions. This distribution often reflects historical migration patterns and local cultural developments.
        </p>

        <Card className="bg-yellow-50">
          <h3 className="text-lg font-semibold mb-3">Interesting Facts About Chinese Surnames</h3>
          <ul className="list-disc pl-4 space-y-2">
            <li>The top 100 surnames are used by 85% of the population</li>
            <li>Some rare surnames are used by fewer than 100 people</li>
            <li>Surnames typically remain unchanged after marriage</li>
            <li>Children usually inherit their father's surname</li>
            <li>Some surnames have been in use for over 4,000 years</li>
          </ul>
        </Card>
      </ContentSection>

      <ContentSection title="Famous Surnames in Chinese History">
        <CardGrid>
          <Card>
            <h3 className="text-lg font-semibold mb-2">Imperial Dynasties</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>赵 (Zhào) - Song Dynasty</li>
              <li>朱 (Zhū) - Ming Dynasty</li>
              <li>李 (Lǐ) - Tang Dynasty</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold mb-2">Notable Historical Figures</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>孔 (Kǒng) - Confucius</li>
              <li>孙 (Sūn) - Sun Tzu</li>
              <li>王 (Wáng) - Wang Wei</li>
            </ul>
          </Card>
        </CardGrid>
      </ContentSection>

      <ContentSection title="Modern Considerations">
        <Card className="bg-gray-50">
          <h3 className="text-lg font-semibold mb-3">Contemporary Usage</h3>
          <ul className="list-disc pl-4 space-y-2">
            <li>International naming conventions</li>
            <li>Legal considerations</li>
            <li>Cultural preservation</li>
            <li>Modern family structures</li>
          </ul>
        </Card>
      </ContentSection>

      <CTASection
        title="Create Your Chinese Name"
        description="Want to find a Chinese name that matches your family name? Try our AI-powered name generator:"
        buttonText="Generate Names →"
        buttonHref="/"
      />
    </BlogArticle>
  )
} 