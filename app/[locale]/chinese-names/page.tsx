import { Metadata } from 'next'
import KeywordLandingPage from '@/app/components/KeywordLandingPage'
import BlogModule from '@/app/components/BlogModule'

export const metadata: Metadata = {
  title: 'Chinese Names Generator | Authentic Chinese Names with Meanings',
  description: 'Generate authentic Chinese names with our free Chinese names tool. Get Chinese names with meanings, pronunciation guides and cultural context for boys and girls.',
}

export default function ChineseNamesPage() {
  const keyword = 'chinese names'
  
  const blogSections = [
    {
      title: 'Understanding Chinese Names',
      content: (
        <>
          <p className="mb-4">
            Chinese names are deeply rooted in cultural tradition and typically consist of a family name (surname) 
            followed by one or two given names. Unlike Western naming practices, in Chinese names the family name 
            comes first, reflecting the importance of family identity in Chinese culture.
          </p>
          <p className="mb-4">
            When creating Chinese names, particular attention is paid to the meaning of each character as well as 
            how the characters sound and appear together. Chinese names often carry aspirational qualities that 
            parents hope their children will embody, or references to nature, virtues, or cultural elements.
          </p>
          <p>
            Our Chinese names generator helps you create authentic Chinese names that respect these traditions 
            while meeting your personal preferences. Each Chinese name comes with a detailed explanation of 
            its meaning and cultural significance.
          </p>
        </>
      )
    },
    {
      title: 'Structure and Elements of Chinese Names',
      content: (
        <>
          <p className="mb-4">
            Chinese names typically follow a specific structure:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Family name (姓, xìng)</strong> - Most Chinese names begin with the family surname, which is typically one character. Common Chinese names for surnames include Wang (王), Li (李), Zhang (张), and Chen (陈).</li>
            <li><strong>Given name (名, míng)</strong> - This follows the family name and can be one or two characters. This part of Chinese names carries the personal meaning and is carefully chosen by parents.</li>
          </ul>
          <p className="mb-4">
            Chinese names draw from thousands of different characters, each with its own meaning and significance. 
            When selecting characters for Chinese names, several factors are considered:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Meaning</strong> - Each character in Chinese names has a specific meaning that contributes to the overall significance of the name.</li>
            <li><strong>Pronunciation</strong> - The sound of Chinese names is important for harmony and flow.</li>
            <li><strong>Written appearance</strong> - How Chinese names look when written in characters is also considered.</li>
            <li><strong>Balance</strong> - Chinese names often seek balance between yin and yang elements.</li>
          </ul>
          <p>
            Our Chinese names generator takes all these factors into account to create harmonious 
            and meaningful Chinese names.
          </p>
        </>
      )
    },
    {
      title: 'Cultural Significance of Chinese Names',
      content: (
        <>
          <p className="mb-4">
            In Chinese culture, Chinese names are believed to influence a person's destiny and character. 
            This belief makes the selection of Chinese names a significant decision for parents, who often 
            consult with family members, fortune tellers, or naming specialists to find auspicious Chinese names.
          </p>
          <p className="mb-4">
            Traditional Chinese names often draw from:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Classical literature</strong> - Many Chinese names reference characters or concepts from ancient texts.</li>
            <li><strong>Philosophy</strong> - Confucian virtues often appear in Chinese names, such as benevolence (仁, rén), righteousness (义, yì), and wisdom (智, zhì).</li>
            <li><strong>Natural elements</strong> - Chinese names frequently incorporate references to the sun, moon, mountains, rivers, flowers, and other natural phenomena.</li>
            <li><strong>Aspirational qualities</strong> - Chinese names often express hopes for the child's future, such as success, health, or happiness.</li>
          </ul>
          <p>
            Modern Chinese names may be less traditional but still maintain cultural connections while 
            incorporating contemporary values. Our Chinese names generator offers both traditional and 
            modern options to suit your preferences.
          </p>
        </>
      )
    }
  ]
  
  return (
    <KeywordLandingPage
      keyword={keyword}
      title="Chinese Names Generator"
      subtitle="Create authentic Chinese names with cultural meaning and proper pronunciation"
      blogContent={
        <BlogModule 
          keyword={keyword} 
          sections={blogSections}
        >
          <p className="mb-4">
            Chinese names carry deep cultural significance and are chosen with great care. Traditional 
            Chinese names reflect cultural values, philosophical concepts, and aspirational qualities 
            that parents hope their children will embody throughout life.
          </p>
          <p className="mb-4">
            Our Chinese names generator creates authentic Chinese names based on your preferences, combining 
            traditional naming practices with modern sensibilities. Each Chinese name we generate includes 
            the Chinese characters, pinyin pronunciation guide, and detailed explanation of the meaning.
          </p>
          <p>
            Whether you're looking for Chinese names for a new baby, a character in your story, or for your own 
            use in Chinese contexts, our tool provides carefully selected Chinese names with proper cultural context.
            With our Chinese names generator, you can explore the rich tradition of Chinese naming while finding 
            a name that feels personally meaningful to you.
          </p>
        </BlogModule>
      }
    />
  )
} 