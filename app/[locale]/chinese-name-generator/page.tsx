import { Metadata } from 'next'
import KeywordLandingPage from '@/app/components/KeywordLandingPage'
import BlogModule from '@/app/components/BlogModule'

export const metadata: Metadata = {
  title: 'Chinese Name Generator | Authentic Chinese Names with Meanings',
  description: 'Generate authentic Chinese names with our free Chinese name generator. Get personalized Chinese names with meanings, pronunciation guides and cultural context.',
}

export default function ChineseNameGeneratorPage() {
  const keyword = 'chinese name generator'
  
  const blogSections = [
    {
      title: 'How Our Chinese Name Generator Works',
      content: (
        <>
          <p className="mb-4">
            Our Chinese name generator uses advanced technology to create authentic Chinese names that respect 
            Chinese naming traditions and cultural practices. Unlike simple random name generators, our 
            Chinese name generator carefully analyzes traditional patterns and cultural elements to provide 
            names that are both meaningful and appropriate.
          </p>
          <p className="mb-4">
            When you use our Chinese name generator, you can specify your preferences such as:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Gender</strong> - The Chinese name generator can create names specifically suited for males, females, or gender-neutral options.</li>
            <li><strong>Meaning</strong> - Tell our Chinese name generator what qualities or concepts you'd like your name to represent.</li>
            <li><strong>Style</strong> - The Chinese name generator can create traditional or modern names according to your preference.</li>
            <li><strong>Additional information</strong> - Provide the Chinese name generator with other details that might influence your name selection.</li>
          </ul>
          <p>
            Based on your input, the Chinese name generator processes these preferences to create personalized 
            name options that align with your requirements while maintaining cultural authenticity. Each name 
            produced by our Chinese name generator includes the Chinese characters, pinyin pronunciation guide, 
            and a detailed explanation of the meaning and cultural context.
          </p>
        </>
      )
    },
    {
      title: 'Benefits of Using Our Chinese Name Generator',
      content: (
        <>
          <p className="mb-4">
            There are many advantages to using our specialized Chinese name generator:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Cultural authenticity</strong> - Our Chinese name generator creates names that respect Chinese naming traditions and practices.</li>
            <li><strong>Personalization</strong> - The Chinese name generator allows you to specify meanings and qualities important to you.</li>
            <li><strong>Educational value</strong> - Each name from our Chinese name generator comes with detailed explanations that help you learn about Chinese culture.</li>
            <li><strong>Time-saving</strong> - Instead of researching individual characters, the Chinese name generator does the work for you.</li>
            <li><strong>Comprehensive information</strong> - Our Chinese name generator provides pronunciation guides, character meanings, and cultural context.</li>
          </ul>
          <p className="mb-4">
            Whether you're expecting a baby, creating a character for a story, or looking for a Chinese name 
            for yourself, our Chinese name generator provides thoughtful, authentic options that you can 
            feel confident about using.
          </p>
          <p>
            Unlike many basic Chinese name generators that simply combine random characters, our 
            Chinese name generator considers the harmony of sounds, balance of elements, and cultural 
            appropriateness of each name it creates.
          </p>
        </>
      )
    },
    {
      title: 'When to Use a Chinese Name Generator',
      content: (
        <>
          <p className="mb-4">
            Our Chinese name generator can be helpful in many different situations:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>For newborn babies</strong> - Parents looking to honor Chinese heritage or create a meaningful connection to Chinese culture can use our Chinese name generator to find the perfect name for their child.</li>
            <li><strong>For fictional characters</strong> - Writers creating Chinese characters for stories, games, or other creative works can use our Chinese name generator to develop authentic names that fit their characters' personalities.</li>
            <li><strong>For business in China</strong> - Professionals working with Chinese partners or in Chinese markets might use our Chinese name generator to create an appropriate Chinese name for business contexts.</li>
            <li><strong>For language learners</strong> - Students of Mandarin or Cantonese often use a Chinese name generator to select a name for use in language classes or when interacting with native speakers.</li>
            <li><strong>For cultural exploration</strong> - People interested in Chinese culture might use our Chinese name generator simply to learn more about naming practices and traditions.</li>
          </ul>
          <p>
            Whatever your reason for using our Chinese name generator, you'll receive names that are 
            culturally appropriate, meaningful, and provided with detailed context to help you understand 
            their significance.
          </p>
        </>
      )
    }
  ]
  
  return (
    <KeywordLandingPage
      keyword={keyword}
      title="Chinese Name Generator"
      subtitle="Create authentic Chinese names with cultural meaning and proper pronunciation"
      blogContent={
        <BlogModule 
          keyword={keyword} 
          sections={blogSections}
        >
          <p className="mb-4">
            Finding the perfect Chinese name requires understanding of Chinese culture, language, and naming traditions. 
            Our Chinese name generator simplifies this process by creating authentic Chinese names based on your 
            preferences while respecting traditional naming practices and cultural significance.
          </p>
          <p className="mb-4">
            Chinese names typically consist of a family name (surname) followed by a given name of one or two characters. 
            The given name is carefully selected to reflect qualities parents hope their children will embody or 
            references to nature, virtues, or cultural elements. Our Chinese name generator carefully considers these 
            factors when creating personalized name options.
          </p>
          <p>
            Each name created by our Chinese name generator includes the Chinese characters, pronunciation guide in pinyin, 
            and detailed explanation of the meaning and cultural context. This makes our Chinese name generator not just 
            a naming tool but also an educational resource about Chinese language and culture. Whether you're looking for 
            a name for a baby, a character in a story, or for yourself, our Chinese name generator provides thoughtful, 
            authentic options with proper cultural context.
          </p>
        </BlogModule>
      }
    />
  )
} 