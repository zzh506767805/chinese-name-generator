import { Metadata } from 'next'
import BlogArticle, { ContentSection, CardGrid, Card, CTASection } from '@/app/components/BlogArticle'
import Breadcrumb from '@/app/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Guide to Chinese Last Names (2025): History & Meanings',
  description: 'Explore Chinese surnames, their origins, meanings, and cultural significance. Learn about the most common Chinese family names and their history.',
  keywords: 'chinese last names, chinese surnames, chinese family names, chinese surname meanings'
}

const relatedArticles = [
  {
    title: 'Chinese Names: The Ultimate Guide',
    href: '/blog/chinese-names-complete-guide'
  },
  {
    title: 'The Cultural Significance of Chinese Names',
    href: '/blog/chinese-names-meaning-and-significance'
  },
  {
    title: 'Chinese Names for Boys: Perfect Blend of Strength and Wisdom',
    href: '/blog/chinese-names-for-boys'
  }
]

const breadcrumbItems = [
  { href: '/blog', label: 'Blog' },
  { href: '/blog/categories/surnames', label: 'Surnames' },
  { label: 'Guide to Chinese Last Names' }
]

export default function ChineseLastNamesGuidePage() {
  const commonSurnames = [
    { name: '王 (Wáng)', meaning: 'King', population: 'About 100 million' },
    { name: '李 (Lǐ)', meaning: 'Plum', population: 'About 98 million' },
    { name: '张 (Zhāng)', meaning: 'Bow-maker', population: 'About 95 million' },
    { name: '刘 (Liú)', meaning: 'Kill', population: 'About 73 million' },
    { name: '陈 (Chén)', meaning: 'Minister', population: 'About 70 million' },
    { name: '杨 (Yáng)', meaning: 'Poplar', population: 'About 60 million' }
  ]

  return (
    <>
      <div className="max-w-4xl mx-auto px-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      
      <BlogArticle
        title="Guide to Chinese Last Names"
        description="Discover the rich history and cultural significance of Chinese surnames. Learn about the most common family names and their origins."
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
    </>
  )
} 