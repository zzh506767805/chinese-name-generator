import { Metadata } from 'next'
import BlogArticle, { ContentSection, CardGrid, NameCard, CTASection, Card } from '@/app/components/BlogArticle'

export const metadata: Metadata = {
  title: 'Chinese Boy Names (2025): Strong & Meaningful Choices',
  description: 'Explore powerful Chinese names for boys with meanings. 100+ strong name ideas combining traditional virtues with modern aspirations. Includes pronunciation guide and character meanings.',
  keywords: 'chinese boy names, chinese male names, chinese names for boys, chinese baby boy names, chinese boy name generator, chinese boy name meanings, chinese boy name characters, chinese boy name pronunciation, chinese boy name examples, modern chinese boy names'
}

export default function ChineseNamesForBoysPage() {
  const popularNames = [
    { name: '志远 (Zhì Yuǎn)', meaning: 'Ambitious and far-sighted', elements: ['志 (ambition)', '远 (far)'] },
    { name: '天翊 (Tiān Yì)', meaning: 'Heavenly excellence', elements: ['天 (heaven)', '翊 (assist)'] },
    { name: '浩然 (Hào Rán)', meaning: 'Vastly righteous', elements: ['浩 (vast)', '然 (correct)'] },
    { name: '明睿 (Míng Ruì)', meaning: 'Bright and wise', elements: ['明 (bright)', '睿 (wise)'] },
    { name: '子轩 (Zǐ Xuān)', meaning: 'Distinguished son', elements: ['子 (son)', '轩 (distinguished)'] },
    { name: '俊杰 (Jùn Jié)', meaning: 'Outstanding talent', elements: ['俊 (talented)', '杰 (outstanding)'] }
  ]

  const relatedArticles = [
    {
      href: '/blog/chinese-boy-names-guide',
      title: 'Complete Guide to Chinese Boy Names'
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
      title="Chinese Names for Boys: Perfect Blend of Strength and Wisdom"
      description="Chinese names for boys traditionally emphasize strength, wisdom, and moral character, combining powerful elements to create names that inspire and empower."
      relatedArticles={relatedArticles}
    >
      <ContentSection title="Popular Chinese Boy Names">
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

      <ContentSection title="Common Elements in Chinese Boy Names">
        <CardGrid>
          <Card className="bg-blue-50">
            <h3 className="text-lg font-semibold mb-3">Strength and Power Characters</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>强 (qiáng) - strong</li>
              <li>勇 (yǒng) - brave</li>
              <li>威 (wēi) - powerful</li>
              <li>龙 (lóng) - dragon</li>
              <li>军 (jūn) - army</li>
            </ul>
          </Card>
          <Card className="bg-blue-50">
            <h3 className="text-lg font-semibold mb-3">Wisdom and Virtue Characters</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>智 (zhì) - wisdom</li>
              <li>德 (dé) - virtue</li>
              <li>仁 (rén) - benevolence</li>
              <li>信 (xìn) - trust</li>
              <li>义 (yì) - righteousness</li>
            </ul>
          </Card>
        </CardGrid>
      </ContentSection>

      <ContentSection title="Naming Tips">
        <ul className="list-disc pl-4 space-y-2 mb-8">
          <li>Balance strength with wisdom in the name</li>
          <li>Consider the harmony with the family name</li>
          <li>Check the character stroke count</li>
          <li>Research historical significance</li>
        </ul>
      </ContentSection>

      <CTASection
        title="Try Our Name Generator"
        description="Looking for the perfect Chinese name for your son? Use our AI-powered name generator:"
        buttonText="Generate Boy Names →"
        buttonHref="/"
      />
    </BlogArticle>
  )
} 