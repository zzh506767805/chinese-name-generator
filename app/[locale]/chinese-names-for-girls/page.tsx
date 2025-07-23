import { Metadata } from 'next'
import KeywordLandingPage from '@/app/components/KeywordLandingPage'
import BlogModule from '@/app/components/BlogModule'

export const metadata: Metadata = {
  title: 'Chinese Names for Girls | Beautiful Chinese Girl Names with Meanings',
  description: 'Discover beautiful Chinese names for girls with meanings and pronunciation. Our Chinese names for girls generator helps you find the perfect name for your daughter.',
}

export default function ChineseNamesForGirlsPage() {
  const keyword = 'chinese names for girls'
  
  const blogSections = [
    {
      title: 'Beautiful Chinese Names for Girls and Their Meanings',
      content: (
        <>
          <p className="mb-4">
            Chinese names for girls are carefully selected to reflect qualities that parents hope their daughters will 
            embody throughout life. Traditional Chinese names for girls often incorporate characters representing beauty, 
            grace, intelligence, and virtue. When choosing Chinese names for girls, both meaning and sound are important considerations.
          </p>
          <p className="mb-4">
            Popular Chinese names for girls often include characters such as:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>美 (Měi)</strong> - Meaning "beautiful," this character is frequently used in Chinese names for girls.</li>
            <li><strong>雅 (Yǎ)</strong> - This character in Chinese names for girls represents "elegance" or "refinement."</li>
            <li><strong>婷 (Tíng)</strong> - A popular character in Chinese names for girls meaning "graceful."</li>
            <li><strong>慧 (Huì)</strong> - Often used in Chinese names for girls to convey "intelligence" or "wisdom."</li>
            <li><strong>静 (Jìng)</strong> - This character in Chinese names for girls means "quiet" or "peaceful."</li>
          </ul>
          <p>
            Our Chinese names for girls generator helps you create authentic names that incorporate these and 
            other meaningful characters. Each Chinese name for girls comes with a detailed explanation of its 
            meaning and cultural context.
          </p>
        </>
      )
    },
    {
      title: 'Traditional vs. Modern Chinese Names for Girls',
      content: (
        <>
          <p className="mb-4">
            Chinese names for girls have evolved over time, with distinct differences between traditional and modern approaches:
          </p>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Traditional Chinese Names for Girls:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Often reference classical Chinese literature, poetry, and philosophy</li>
              <li>May include characters representing traditional feminine virtues like gentleness and obedience</li>
              <li>Typically have deeper cultural significance that might be less apparent to non-Chinese speakers</li>
              <li>Frequently incorporate natural elements like flowers, jade, or celestial bodies</li>
              <li>Examples of traditional Chinese names for girls include Xiuying (秀英, "elegant flower") and Yulan (玉兰, "jade orchid")</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Modern Chinese Names for Girls:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Often emphasize qualities like independence, strength, and intelligence</li>
              <li>May be chosen more for their pleasant sound or modern associations</li>
              <li>Sometimes incorporate international elements or contemporary values</li>
              <li>Might be selected for ease of pronunciation in both Chinese and other languages</li>
              <li>Examples of modern Chinese names for girls include Xinyi (心怡, "joyful heart") and Jiaying (佳颖, "excellent and intelligent")</li>
            </ul>
          </div>
          <p>
            Our Chinese names for girls generator allows you to specify whether you prefer traditional or 
            modern Chinese names for girls, ensuring that the names match your cultural preferences and values.
          </p>
        </>
      )
    },
    {
      title: 'Choosing the Perfect Chinese Names for Girls',
      content: (
        <>
          <p className="mb-4">
            Selecting the ideal Chinese names for girls involves several important considerations:
          </p>
          <ol className="list-decimal pl-5 mb-4">
            <li><strong>Meaning</strong> - Chinese names for girls should have positive meanings that reflect qualities you hope your daughter will embody.</li>
            <li><strong>Pronunciation</strong> - The best Chinese names for girls sound harmonious and are relatively easy to pronounce, with pleasing tones.</li>
            <li><strong>Balance with surname</strong> - Chinese names for girls should complement the family name in both sound and meaning.</li>
            <li><strong>Character complexity</strong> - Consider whether complex or simplified characters will be used in writing Chinese names for girls.</li>
            <li><strong>Cultural appropriateness</strong> - Authentic Chinese names for girls should respect Chinese naming traditions and avoid unfortunate homonyms.</li>
            <li><strong>International use</strong> - If your daughter will live in a non-Chinese environment, consider Chinese names for girls that can be pronounced by non-Chinese speakers.</li>
          </ol>
          <p>
            Our Chinese names for girls generator takes all these factors into account to provide you with 
            appropriate options. Each suggested Chinese name for girls includes the Chinese characters, 
            pronunciation guide, and detailed meaning explanation to help you make an informed decision.
          </p>
        </>
      )
    }
  ]
  
  return (
    <KeywordLandingPage
      keyword={keyword}
      title="Chinese Names for Girls Generator"
      subtitle="Create beautiful and meaningful Chinese names for your daughter"
      blogContent={
        <BlogModule 
          keyword={keyword} 
          sections={blogSections}
        >
          <p className="mb-4">
            Finding the perfect Chinese names for girls requires understanding of Chinese culture, language, 
            and naming traditions. Chinese names for girls typically reflect qualities that parents hope their 
            daughters will embody, such as beauty, grace, intelligence, and virtue.
          </p>
          <p className="mb-4">
            Our Chinese names for girls generator creates authentic names based on your preferences, combining 
            traditional Chinese naming practices with modern sensibilities. Each Chinese name for girls we generate 
            includes the Chinese characters, pinyin pronunciation guide, and detailed explanation of the meaning.
          </p>
          <p>
            Whether you're expecting a baby girl, creating a character for a story, or looking for a Chinese name 
            for yourself, our Chinese names for girls generator provides thoughtful, beautiful options with proper 
            cultural context. Explore the world of Chinese names for girls and discover the perfect name with our 
            specialized generator.
          </p>
        </BlogModule>
      }
    />
  )
} 