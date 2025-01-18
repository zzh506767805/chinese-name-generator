import { Metadata } from 'next'
import BlogArticle, { ContentSection, CardGrid, Card } from '@/app/components/BlogArticle'

export const metadata: Metadata = {
  title: 'Chinese Name Meanings (2025): Cultural Guide & Traditions',
  description: 'Learn the deep cultural meaning of Chinese names. Explore traditional naming principles, character meanings, and modern practices in Chinese culture.',
  keywords: 'chinese name meaning, chinese name culture, chinese name characters, chinese name traditions, chinese name significance, chinese name symbolism, chinese name philosophy, chinese naming customs, chinese name elements, chinese name structure',
}

export default function ChineseNamesCulturePage() {
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
      href: '/blog/chinese-last-names-guide',
      title: 'Guide to Chinese Last Names'
    }
  ]

  return (
    <BlogArticle
      title="Cultural Meaning and Significance of Chinese Names"
      description="Discover the rich cultural heritage and deep philosophical principles behind Chinese naming traditions."
      relatedArticles={relatedArticles}
    >
      <ContentSection title="Core Principles of Chinese Names">
        <CardGrid>
          <Card className="bg-amber-50">
            <h3 className="text-lg font-semibold mb-3">Cultural Values</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>Respect for tradition</li>
              <li>Family continuity</li>
              <li>Moral character</li>
              <li>Personal aspirations</li>
              <li>Social harmony</li>
            </ul>
          </Card>
          <Card className="bg-orange-50">
            <h3 className="text-lg font-semibold mb-3">Philosophical Elements</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>Five Elements (Wu Xing)</li>
              <li>Yin and Yang balance</li>
              <li>Heavenly Stems</li>
              <li>Earthly Branches</li>
              <li>Numerological significance</li>
            </ul>
          </Card>
        </CardGrid>
      </ContentSection>

      <ContentSection title="Historical Evolution">
        <CardGrid>
          <Card>
            <h3 className="text-lg font-semibold mb-3">Ancient Times</h3>
            <p className="text-gray-600 mb-2">Names reflected social status and roles</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Nobility naming conventions</li>
              <li>Clan-based naming systems</li>
              <li>Courtesy names (字)</li>
              <li>Art names (号)</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold mb-3">Modern Evolution</h3>
            <p className="text-gray-600 mb-2">Adaptation to contemporary society</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Simplified character usage</li>
              <li>International considerations</li>
              <li>Gender-neutral trends</li>
              <li>Cultural preservation</li>
            </ul>
          </Card>
        </CardGrid>
      </ContentSection>

      <ContentSection title="Name Structure and Meaning">
        <Card className="bg-yellow-50">
          <h3 className="text-lg font-semibold mb-3">Components of Chinese Names</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Family Name (姓)</h4>
              <ul className="list-disc pl-4 space-y-1">
                <li>Inherited from ancestors</li>
                <li>Represents family lineage</li>
                <li>Usually one character</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Given Name (名)</h4>
              <ul className="list-disc pl-4 space-y-1">
                <li>One or two characters</li>
                <li>Carries personal meaning</li>
                <li>Reflects parents' wishes</li>
              </ul>
            </div>
          </div>
        </Card>
      </ContentSection>

      <ContentSection title="Cultural Significance">
        <CardGrid>
          <Card className="bg-green-50">
            <h3 className="text-lg font-semibold mb-3">Traditional Beliefs</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>Names influence destiny</li>
              <li>Character balance matters</li>
              <li>Generational naming patterns</li>
              <li>Auspicious combinations</li>
            </ul>
          </Card>
          <Card className="bg-blue-50">
            <h3 className="text-lg font-semibold mb-3">Modern Interpretations</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>Personal identity expression</li>
              <li>Cultural heritage preservation</li>
              <li>Global integration</li>
              <li>Individual uniqueness</li>
            </ul>
          </Card>
        </CardGrid>
      </ContentSection>

      <ContentSection title="Naming Practices">
        <Card>
          <h3 className="text-lg font-semibold mb-3">Key Considerations</h3>
          <ul className="list-disc pl-4 space-y-2">
            <li>Sound harmony and tone patterns</li>
            <li>Character stroke balance</li>
            <li>Meaning associations</li>
            <li>Family traditions</li>
            <li>Modern practicality</li>
          </ul>
        </Card>
      </ContentSection>
    </BlogArticle>
  )
} 