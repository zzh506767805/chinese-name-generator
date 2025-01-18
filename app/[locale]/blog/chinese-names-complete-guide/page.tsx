import { Metadata } from 'next'
import BlogArticle from '@/app/components/BlogArticle'
import ContentSection from '@/app/components/BlogArticle/ContentSection'
import CardGrid from '@/app/components/BlogArticle/CardGrid'
import Card from '@/app/components/BlogArticle/Card'
import CTASection from '@/app/components/BlogArticle/CTASection'

export const metadata: Metadata = {
  title: 'Chinese Names Guide (2025): Meanings, Examples & Tips',
  description: 'Master the art of Chinese names. Learn structure, meanings, and modern trends. Includes 200+ popular names with pinyin, meanings, and expert tips for choosing the perfect name.',
  keywords: 'chinese names, chinese name meaning, chinese name generator, chinese name structure, chinese name culture, chinese name guide, chinese name translation, chinese name characters, chinese name pronunciation, chinese name examples'
}

const relatedArticles = [
  {
    title: 'Chinese Names for Girls: Elegant Choices Blending Tradition and Modernity',
    href: '/blog/chinese-names-for-girls'
  },
  {
    title: 'Chinese Names for Boys: Perfect Blend of Strength and Wisdom',
    href: '/blog/chinese-names-for-boys'
  },
  {
    title: 'Chinese Last Names: A Complete Guide to Family Names',
    href: '/blog/chinese-last-names-guide'
  }
]

export default function ChineseNamesGuidePage() {
  return (
    <BlogArticle
      title="Chinese Names: The Ultimate Guide to Understanding and Creating Names"
      description="Discover the fascinating world of Chinese names - from their deep cultural roots to modern naming practices. Learn how names reflect Chinese values, explore popular choices, and understand the art of creating meaningful Chinese names."
      relatedArticles={relatedArticles}
    >
      <ContentSection title="Understanding Chinese Name Structure">
        <p className="mb-4">
          Chinese names typically follow a distinct structure: surname first, followed by the given name. Unlike Western names, Chinese surnames are placed before given names to emphasize the importance of family lineage. Most Chinese surnames are single characters, while given names are usually one or two characters.
        </p>
        <p className="mb-4">
          For example, in the name 王秀英 (Wáng Xiùyīng):
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>王 (Wáng) is the surname</li>
          <li>秀英 (Xiùyīng) is the given name</li>
        </ul>
      </ContentSection>

      <ContentSection title="The Cultural Significance of Chinese Names">
        <p className="mb-4">
          In Chinese culture, names are more than just identifiers - they are carefully chosen characters that carry deep meanings and aspirations. Parents often spend considerable time selecting names that reflect their hopes for their children's future, incorporating elements like:
        </p>
        <CardGrid>
          <Card title="Virtues and Values">
            Qualities like wisdom (智), kindness (善), or courage (勇)
          </Card>
          <Card title="Natural Elements">
            References to nature like mountain (山), river (河), or jade (玉)
          </Card>
          <Card title="Cultural Aspirations">
            Expressions of learning (文), excellence (秀), or prosperity (富)
          </Card>
          <Card title="Aesthetic Elements">
            Beautiful imagery like flower (花), moon (月), or cloud (云)
          </Card>
        </CardGrid>
      </ContentSection>

      <ContentSection title="Modern Chinese Naming Trends">
        <p className="mb-6">
          While traditional naming practices remain important, modern Chinese parents are increasingly creative with their choices. Current trends include:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Combining traditional elements with contemporary meanings</li>
          <li>Choosing unique character combinations to stand out</li>
          <li>Incorporating global influences while maintaining Chinese cultural elements</li>
          <li>Using sophisticated characters that reflect educational aspirations</li>
        </ul>
      </ContentSection>

      <ContentSection title="Popular Name Elements and Their Meanings">
        <CardGrid>
          <Card title="For Girls">
            <ul className="list-disc pl-4">
              <li>婷 (Tíng) - Graceful</li>
              <li>雅 (Yǎ) - Elegant</li>
              <li>美 (Měi) - Beautiful</li>
              <li>静 (Jìng) - Quiet, peaceful</li>
              <li>慧 (Huì) - Intelligent</li>
            </ul>
          </Card>
          <Card title="For Boys">
            <ul className="list-disc pl-4">
              <li>宇 (Yǔ) - Universe</li>
              <li>轩 (Xuān) - Tall, dignified</li>
              <li>伟 (Wěi) - Great</li>
              <li>强 (Qiáng) - Strong</li>
              <li>文 (Wén) - Cultural, literary</li>
            </ul>
          </Card>
        </CardGrid>
      </ContentSection>

      <ContentSection title="Tips for Choosing a Chinese Name">
        <p className="mb-4">
          Whether you're naming a child or choosing a Chinese name for yourself, consider these important factors:
        </p>
        <CardGrid>
          <Card title="Sound and Tone">
            Ensure the name sounds harmonious when pronounced together
          </Card>
          <Card title="Character Meaning">
            Research the deep meaning of each character and their combination
          </Card>
          <Card title="Cultural Appropriateness">
            Verify the name's cultural connotations and associations
          </Card>
          <Card title="Uniqueness Balance">
            Strike a balance between uniqueness and traditional elements
          </Card>
        </CardGrid>
      </ContentSection>

      <ContentSection title="Common Mistakes to Avoid">
        <ul className="list-disc pl-6 mb-6">
          <li>Using characters with negative connotations</li>
          <li>Creating awkward character combinations</li>
          <li>Choosing overly complex or rare characters</li>
          <li>Ignoring the importance of tone harmony</li>
          <li>Following trends without considering meaning</li>
        </ul>
      </ContentSection>

      <CTASection
        title="Create Your Perfect Chinese Name"
        description="Ready to find your ideal Chinese name? Try our AI-powered name generator that considers all these factors:"
        buttonText="Generate Names →"
        buttonHref="/"
      />
    </BlogArticle>
  )
} 