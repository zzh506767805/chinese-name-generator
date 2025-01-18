import { Metadata } from 'next'
import BlogArticle, { ContentSection, CardGrid, NameCard, CTASection, Card } from '@/app/components/BlogArticle'

export const metadata: Metadata = {
  title: 'Chinese Girl Names (2025): Beautiful & Meaningful Choices',
  description: 'Discover beautiful Chinese names for girls with meanings. 100+ elegant name ideas combining traditional beauty with modern style. Includes pronunciation guide and character meanings.',
  keywords: 'chinese girl names, chinese female names, chinese names for girls, chinese baby girl names, chinese girl name generator, chinese girl name meanings, chinese girl name characters, chinese girl name pronunciation, chinese girl name examples, modern chinese girl names'
}

export default function ChineseNamesForGirlsPage() {
  const popularNames = [
    { name: '欣怡 (Xīn Yí)', meaning: 'Joyful and graceful', elements: ['欣 (joy)', '怡 (harmony)'] },
    { name: '雨桐 (Yǔ Tóng)', meaning: 'Rain and paulownia tree', elements: ['雨 (rain)', '桐 (paulownia)'] },
    { name: '梓萱 (Zǐ Xuān)', meaning: 'Catalpa and daylily', elements: ['梓 (catalpa)', '萱 (daylily)'] },
    { name: '语嫣 (Yǔ Yān)', meaning: 'Elegant speech', elements: ['语 (speech)', '嫣 (beautiful)'] },
    { name: '芷若 (Zhǐ Ruò)', meaning: 'Iris-like gentleness', elements: ['芷 (iris)', '若 (gentle)'] },
    { name: '清雅 (Qīng Yǎ)', meaning: 'Pure and refined', elements: ['清 (pure)', '雅 (elegant)'] }
  ]

  const relatedArticles = [
    {
      href: '/blog/chinese-girl-names-guide',
      title: 'Complete Guide to Chinese Girl Names'
    },
    {
      href: '/blog/chinese-names-meaning-and-significance',
      title: 'Cultural Meaning and Significance of Chinese Names'
    },
    {
      href: '/blog/chinese-last-names-guide',
      title: 'Guide to Chinese Last Names'
    }
  ]

  return (
    <BlogArticle
      title="Chinese Names for Girls: Elegant Choices Blending Tradition and Modernity"
      description="Chinese names for girls often emphasize beauty, grace, and natural elements, reflecting traditional aesthetic values while embracing modern sensibilities."
      relatedArticles={relatedArticles}
    >
      <ContentSection title="Popular Chinese Girl Names">
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

      <ContentSection title="Common Elements in Chinese Girl Names">
        <CardGrid>
          <Card className="bg-pink-50">
            <h3 className="text-lg font-semibold mb-3">Nature-Inspired Characters</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>花 (huā) - flower</li>
              <li>月 (yuè) - moon</li>
              <li>雪 (xuě) - snow</li>
              <li>春 (chūn) - spring</li>
              <li>莲 (lián) - lotus</li>
            </ul>
          </Card>
          <Card className="bg-pink-50">
            <h3 className="text-lg font-semibold mb-3">Virtue and Beauty Characters</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>美 (měi) - beautiful</li>
              <li>雅 (yǎ) - elegant</li>
              <li>静 (jìng) - quiet, peaceful</li>
              <li>婷 (tíng) - graceful</li>
              <li>慧 (huì) - intelligent</li>
            </ul>
          </Card>
        </CardGrid>
      </ContentSection>

      <ContentSection title="Naming Tips">
        <ul className="list-disc pl-4 space-y-2 mb-8">
          <li>Consider the balance of yin and yang in the name</li>
          <li>Check the compatibility with the family name</li>
          <li>Ensure proper character combinations</li>
          <li>Research the historical and cultural significance</li>
        </ul>
      </ContentSection>

      <CTASection
        title="Try Our Name Generator"
        description="Looking for the perfect Chinese name for your daughter? Use our AI-powered name generator:"
        buttonText="Generate Girl Names →"
        buttonHref="/"
      />
    </BlogArticle>
  )
} 