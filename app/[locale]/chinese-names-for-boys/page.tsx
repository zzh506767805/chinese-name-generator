import { Metadata } from 'next'
import KeywordLandingPage from '@/app/components/KeywordLandingPage'
import BlogModule from '@/app/components/BlogModule'

export const metadata: Metadata = {
  title: 'Chinese Names for Boys | Best Chinese Boy Names Generator',
  description: 'Find authentic Chinese names for boys with meanings and pronunciation. Our Chinese boy names generator creates meaningful names based on Chinese culture and traditions.',
}

export default function ChineseNamesForBoysPage() {
  const keyword = 'chinese names for boys'
  
  const blogSections = [
    {
      title: 'Popular Chinese Names for Boys',
      content: (
        <>
          <p className="mb-4">
            Chinese names for boys are carefully chosen to reflect qualities that parents hope their sons will embody. 
            Chinese names for boys typically consist of a family name followed by one or two given names. In Chinese culture, 
            the given name often carries significant meaning related to virtues, natural elements, or aspirations.
          </p>
          <p className="mb-4">
            When selecting Chinese names for boys, parents often consider how the characters sound together, 
            their visual appearance when written, and most importantly, their meaning. Traditional Chinese names for boys 
            might include characters representing strength, wisdom, and moral virtue, while modern Chinese names for boys 
            might incorporate more contemporary values.
          </p>
          <p>
            Our Chinese names for boys generator helps you create authentic Chinese names for boys that respect 
            these cultural traditions while meeting your personal preferences. Each name comes with a detailed 
            explanation of the meaning and cultural context.
          </p>
        </>
      )
    },
    {
      title: 'Common Elements in Chinese Names for Boys',
      content: (
        <>
          <p className="mb-4">
            Chinese names for boys often contain characters that represent:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Strength and courage</strong> - Characters like 强 (qiáng), 勇 (yǒng), and 威 (wēi) are popular in Chinese names for boys.</li>
            <li><strong>Intelligence and wisdom</strong> - Characters such as 智 (zhì), 睿 (ruì), and 哲 (zhé) appear frequently in Chinese names for boys.</li>
            <li><strong>Moral virtues</strong> - 仁 (rén, benevolence), 义 (yì, righteousness), and 忠 (zhōng, loyalty) are valued in Chinese names for boys.</li>
            <li><strong>Natural elements</strong> - Characters representing mountains, rivers, or celestial bodies are common in Chinese names for boys.</li>
            <li><strong>Ambition and success</strong> - Characters like 志 (zhì, aspiration) and 成 (chéng, success) express hopes for achievement in Chinese names for boys.</li>
          </ul>
          <p>
            When creating Chinese names for boys, these elements are carefully combined to create a harmonious name with 
            positive meanings. Our Chinese names for boys generator takes these cultural elements into account to provide 
            authentic and meaningful options.
          </p>
        </>
      )
    },
    {
      title: 'Traditional vs. Modern Chinese Names for Boys',
      content: (
        <>
          <p className="mb-4">
            Traditional Chinese names for boys often have classical references from literature, philosophy, or history. 
            These Chinese names for boys might be inspired by Confucian virtues or ancient Chinese legends. They typically 
            use characters with deeper cultural significance that have been popular for generations.
          </p>
          <p className="mb-4">
            Modern Chinese names for boys, while still respecting cultural traditions, might incorporate more contemporary values 
            and aesthetics. These Chinese names for boys might use characters that sound pleasant in Mandarin and have positive 
            meanings, but without necessarily drawing from classical references.
          </p>
          <p>
            Both traditional and modern Chinese names for boys aim to create a meaningful identity that will serve the child well 
            throughout life. Our Chinese names for boys generator allows you to specify whether you prefer a more traditional 
            or modern approach to naming.
          </p>
        </>
      )
    }
  ]
  
  return (
    <KeywordLandingPage
      keyword={keyword}
      title="Chinese Names for Boys Generator"
      subtitle="Find the perfect Chinese name for your boy with our authentic name generator"
      metaTitle="Chinese Names for Boys | Best Chinese Boy Names Generator"
      metaDescription="Find authentic Chinese names for boys with meanings and pronunciation. Our Chinese boy names generator creates meaningful names based on Chinese culture and traditions."
      blogContent={
        <BlogModule 
          keyword={keyword} 
          sections={blogSections}
        >
          <p className="mb-4">
            Choosing the perfect Chinese name for a boy is an important decision that requires careful consideration 
            of cultural traditions and linguistic elements. Chinese names for boys carry deep meanings and are chosen 
            to reflect qualities parents hope their sons will embody throughout life.
          </p>
          <p className="mb-4">
            Our Chinese names for boys generator creates authentic names based on your preferences, combining traditional 
            Chinese naming practices with modern sensibilities. Each Chinese name for boys we generate includes the Chinese 
            characters, pronunciation guide, and detailed explanation of the meaning.
          </p>
          <p>
            Whether you're looking for Chinese names for boys for a new baby, a character in your story, or for your own 
            use in Chinese contexts, our tool provides carefully selected Chinese names for boys with proper cultural context.
          </p>
        </BlogModule>
      }
    />
  )
} 