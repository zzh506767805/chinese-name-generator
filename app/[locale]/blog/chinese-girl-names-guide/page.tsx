import { Metadata } from 'next'
import BlogArticle, { ContentSection, CardGrid, NameCard, CTASection, Card } from '@/app/components/BlogArticle'

export const metadata: Metadata = {
  title: 'Complete Guide to Chinese Girl Names: Blending Tradition with Modern Style',
  description: 'Choose an elegant and meaningful Chinese name for your daughter that combines traditional culture with modern aesthetics. Learn about naming principles and beautiful characters.',
  keywords: 'chinese girl names guide, chinese female names meaning, traditional chinese girl names, modern chinese names for girls',
}

export default function ChineseGirlNamesGuidePage() {
  const popularNames = [
    { name: '雨桐 (Yǔ Tóng)', meaning: 'Rain and paulownia tree', elements: ['雨 (rain)', '桐 (paulownia)'] },
    { name: '梓萱 (Zǐ Xuān)', meaning: 'Catalpa and daylily', elements: ['梓 (catalpa)', '萱 (daylily)'] },
    { name: '欣怡 (Xīn Yí)', meaning: 'Joyful and graceful', elements: ['欣 (joy)', '怡 (grace)'] },
    { name: '语嫣 (Yǔ Yān)', meaning: 'Elegant speech', elements: ['语 (speech)', '嫣 (beautiful)'] },
    { name: '清雅 (Qīng Yǎ)', meaning: 'Pure and refined', elements: ['清 (pure)', '雅 (elegant)'] },
    { name: '书瑶 (Shū Yáo)', meaning: 'Literary jade', elements: ['书 (book)', '瑶 (jade)'] }
  ]

  const relatedArticles = [
    {
      href: '/blog/chinese-names-for-girls',
      title: 'Chinese Names for Girls'
    },
    {
      href: '/blog/chinese-last-names-guide',
      title: 'Guide to Chinese Last Names'
    },
    {
      href: '/blog/chinese-names-meaning-and-significance',
      title: 'Cultural Meaning and Significance of Chinese Names'
    }
  ]

  return (
    <BlogArticle
      title="Complete Guide to Chinese Girl Names"
      description="A comprehensive guide to choosing beautiful Chinese names for girls, exploring elegant characters, cultural elements, and modern trends."
      relatedArticles={relatedArticles}
    >
      <ContentSection title="Popular Modern Chinese Girl Names">
        <CardGrid>
          {popularNames.map(name => (
            <NameCard
              key={name.name}
              name={name.name}
              meaning={name.meaning}
              elements={name.elements}
            />
          ))}
        </CardGrid>
      </ContentSection>

      <ContentSection title="Essential Name Elements">
        <CardGrid>
          <Card className="bg-pink-50">
            <h3 className="text-lg font-semibold mb-3">Natural Beauty</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>花 (huā) - flower</li>
              <li>月 (yuè) - moon</li>
              <li>雪 (xuě) - snow</li>
              <li>春 (chūn) - spring</li>
              <li>兰 (lán) - orchid</li>
            </ul>
          </Card>
          <Card className="bg-purple-50">
            <h3 className="text-lg font-semibold mb-3">Elegant Qualities</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>雅 (yǎ) - elegance</li>
              <li>婷 (tíng) - grace</li>
              <li>静 (jìng) - serenity</li>
              <li>慧 (huì) - wisdom</li>
              <li>美 (měi) - beauty</li>
            </ul>
          </Card>
        </CardGrid>
      </ContentSection>

      <ContentSection title="Naming Principles">
        <Card className="bg-rose-50">
          <h3 className="text-lg font-semibold mb-3">Key Considerations</h3>
          <ul className="list-disc pl-4 space-y-2">
            <li>Balance of beauty and strength</li>
            <li>Harmony with family name</li>
            <li>Character stroke count and flow</li>
            <li>Meaningful combinations</li>
            <li>Modern yet timeless appeal</li>
          </ul>
        </Card>
      </ContentSection>

      <ContentSection title="Name Structure">
        <CardGrid>
          <Card>
            <h3 className="text-lg font-semibold mb-3">Two-Character Names</h3>
            <p className="text-gray-600 mb-2">Most popular format for modern names</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>First character: primary quality or element</li>
              <li>Second character: complementary meaning</li>
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold mb-3">Character Combinations</h3>
            <p className="text-gray-600 mb-2">Creating meaningful pairs</p>
            <ul className="list-disc pl-4 space-y-2">
              <li>Nature + Virtue</li>
              <li>Beauty + Intelligence</li>
              <li>Grace + Strength</li>
            </ul>
          </Card>
        </CardGrid>
      </ContentSection>

      <CTASection
        title="Find the Perfect Name"
        description="Use our AI-powered name generator to create a beautiful Chinese name for your daughter:"
        buttonText="Generate Names →"
        buttonHref="/"
      />
    </BlogArticle>
  )
} 