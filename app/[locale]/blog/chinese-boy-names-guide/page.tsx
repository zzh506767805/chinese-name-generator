import { Metadata } from 'next'
import BlogArticle, { ContentSection, CardGrid, NameCard, CTASection, Card } from '@/app/components/BlogArticle'
import Breadcrumb from '@/app/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Complete Guide to Chinese Boy Names (2025)',
  description: 'Everything you need to know about Chinese names for boys. Learn about meanings, traditions, and how to choose the perfect name.',
  keywords: 'chinese boy names guide, chinese male names guide, chinese names for boys guide'
}

const relatedArticles = [
  {
    title: 'Chinese Names for Boys: Perfect Blend of Strength and Wisdom',
    href: '/blog/chinese-names-for-boys'
  },
  {
    title: 'Chinese Names: The Ultimate Guide',
    href: '/blog/chinese-names-complete-guide'
  },
  {
    title: 'The Cultural Significance of Chinese Names',
    href: '/blog/chinese-names-meaning-and-significance'
  }
]

const breadcrumbItems = [
  { href: '/blog', label: 'Blog' },
  { href: '/blog/categories/boy-names', label: 'Boy Names' },
  { label: 'Complete Guide to Chinese Boy Names' }
]

export default function ChineseBoyNamesGuidePage() {
  const popularNames = [
    { name: '浩然 (Hào Rán)', meaning: 'Vastly righteous', elements: ['浩 (vast)', '然 (correct)'] },
    { name: '宇轩 (Yǔ Xuān)', meaning: 'Universe and elegance', elements: ['宇 (universe)', '轩 (elegant)'] },
    { name: '子墨 (Zǐ Mò)', meaning: 'Scholar son', elements: ['子 (son)', '墨 (ink)'] },
    { name: '天翊 (Tiān Yì)', meaning: 'Heavenly excellence', elements: ['天 (heaven)', '翊 (assist)'] },
    { name: '博文 (Bó Wén)', meaning: 'Extensive knowledge', elements: ['博 (extensive)', '文 (culture)'] },
    { name: '睿智 (Ruì Zhì)', meaning: 'Wise and intelligent', elements: ['睿 (wise)', '智 (intelligent)'] }
  ]

  return (
    <>
      <div className="max-w-4xl mx-auto px-4">
        <Breadcrumb items={breadcrumbItems} />
      </div>
      
      <BlogArticle
        title="Complete Guide to Chinese Boy Names"
        description="A comprehensive guide to understanding and choosing Chinese names for boys. From traditional naming customs to modern trends."
        relatedArticles={relatedArticles}
      >
        <ContentSection title="Popular Modern Chinese Boy Names">
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
            <Card className="bg-blue-50">
              <h3 className="text-lg font-semibold mb-3">Traditional Values</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>德 (dé) - moral character</li>
                <li>仁 (rén) - benevolence</li>
                <li>义 (yì) - righteousness</li>
                <li>礼 (lǐ) - courtesy</li>
                <li>智 (zhì) - wisdom</li>
              </ul>
            </Card>
            <Card className="bg-green-50">
              <h3 className="text-lg font-semibold mb-3">Modern Aspirations</h3>
              <ul className="list-disc pl-4 space-y-2">
                <li>创 (chuàng) - innovation</li>
                <li>博 (bó) - extensive knowledge</li>
                <li>睿 (ruì) - insight</li>
                <li>宇 (yǔ) - universe</li>
                <li>科 (kē) - science</li>
              </ul>
            </Card>
          </CardGrid>
        </ContentSection>

        <ContentSection title="Naming Principles">
          <Card className="bg-yellow-50">
            <h3 className="text-lg font-semibold mb-3">Key Considerations</h3>
            <ul className="list-disc pl-4 space-y-2">
              <li>Balance between traditional and modern elements</li>
              <li>Harmony with family name</li>
              <li>Character stroke count and balance</li>
              <li>Positive meanings and associations</li>
              <li>Easy pronunciation and recognition</li>
            </ul>
          </Card>
        </ContentSection>

        <ContentSection title="Name Structure">
          <CardGrid>
            <Card>
              <h3 className="text-lg font-semibold mb-3">Two-Character Names</h3>
              <p className="text-gray-600 mb-2">Most common format for modern Chinese names</p>
              <ul className="list-disc pl-4 space-y-2">
                <li>First character: core value or quality</li>
                <li>Second character: aspiration or complement</li>
              </ul>
            </Card>
            <Card>
              <h3 className="text-lg font-semibold mb-3">Single-Character Names</h3>
              <p className="text-gray-600 mb-2">Traditional and minimalist approach</p>
              <ul className="list-disc pl-4 space-y-2">
                <li>Emphasizes significance of chosen character</li>
                <li>Often uses distinctive or rare characters</li>
              </ul>
            </Card>
          </CardGrid>
        </ContentSection>

        <CTASection
          title="Find the Perfect Name"
          description="Use our AI-powered name generator to create a meaningful Chinese name for your son:"
          buttonText="Generate Names →"
          buttonHref="/"
        />
      </BlogArticle>
    </>
  )
} 