import { Metadata } from 'next'
import KeywordLandingPage from '@/app/components/KeywordLandingPage'
import BlogModule from '@/app/components/BlogModule'

export const metadata: Metadata = {
  title: 'Chinese Girl Names | Beautiful Chinese Names for Girls',
  description: 'Explore beautiful Chinese girl names with meanings and pronunciation. Our Chinese girl names generator creates authentic and meaningful names for your daughter.',
}

export default function ChineseGirlNamesPage() {
  const keyword = 'chinese girl names'
  
  const blogSections = [
    {
      title: 'Popular Chinese Girl Names and Their Meanings',
      content: (
        <>
          <p className="mb-4">
            Chinese girl names are carefully chosen to reflect qualities that parents hope their daughters will 
            embody. Beautiful Chinese girl names often incorporate characters representing grace, beauty, intelligence, 
            and virtue. When selecting Chinese girl names, parents consider both the meaning and the sound.
          </p>
          <p className="mb-4">
            Some popular Chinese girl names include:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Mei (美)</strong> - This common character in Chinese girl names means "beautiful."</li>
            <li><strong>Jing (静)</strong> - Many Chinese girl names incorporate this character meaning "quiet" or "peaceful."</li>
            <li><strong>Ying (颖)</strong> - This character found in Chinese girl names represents "clever" or "intelligent."</li>
            <li><strong>Xin (心)</strong> - Some Chinese girl names use this character meaning "heart."</li>
            <li><strong>Hui (慧)</strong> - Popular in Chinese girl names, this character means "wise" or "intelligent."</li>
          </ul>
          <p>
            Our Chinese girl names generator helps you create authentic Chinese girl names that incorporate 
            these and other meaningful characters. Each Chinese girl name comes with a detailed explanation 
            of its meaning and cultural significance.
          </p>
        </>
      )
    },
    {
      title: 'Characteristics of Beautiful Chinese Girl Names',
      content: (
        <>
          <p className="mb-4">
            Chinese girl names often have distinctive characteristics that set them apart:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Softness in sound</strong> - Chinese girl names typically use characters with softer sounds and tones, creating a melodic quality.</li>
            <li><strong>Nature imagery</strong> - Many Chinese girl names incorporate references to flowers (like 兰, lán, orchid), birds, and other natural elements.</li>
            <li><strong>Virtue references</strong> - Traditional Chinese girl names often contain references to virtues valued in women, such as kindness (善, shàn) and grace (雅, yǎ).</li>
            <li><strong>Elegance in writing</strong> - The written form of Chinese girl names often features characters with balanced and aesthetically pleasing strokes.</li>
            <li><strong>Positive associations</strong> - Chinese girl names avoid characters with negative connotations or unfortunate homonyms.</li>
          </ul>
          <p className="mb-4">
            When creating Chinese girl names with our generator, these characteristics are carefully considered 
            to ensure the names are culturally appropriate and beautiful.
          </p>
          <p>
            The best Chinese girl names balance traditional values with modern sensibilities, creating names 
            that work well in both Chinese and international contexts.
          </p>
        </>
      )
    },
    {
      title: 'How to Choose the Perfect Chinese Girl Names',
      content: (
        <>
          <p className="mb-4">
            Selecting the ideal Chinese girl names involves several considerations:
          </p>
          <ol className="list-decimal pl-5 mb-4">
            <li><strong>Consider the meaning</strong> - Look for Chinese girl names with meanings that resonate with your hopes for your daughter.</li>
            <li><strong>Check the pronunciation</strong> - Ensure the Chinese girl names you're considering sound harmonious and are relatively easy to pronounce.</li>
            <li><strong>Balance with the surname</strong> - Chinese girl names should flow well with the family name and create a balanced full name.</li>
            <li><strong>Research cultural significance</strong> - Some Chinese girl names have connections to literature, history, or mythology worth exploring.</li>
            <li><strong>Consider international use</strong> - If your daughter will live in a non-Chinese speaking environment, consider Chinese girl names that work well cross-culturally.</li>
          </ol>
          <p>
            Our Chinese girl names generator simplifies this process by creating personalized Chinese girl names 
            based on your preferences. Each suggested name includes the Chinese characters, pronunciation guide, 
            and detailed meaning explanation to help you make an informed decision.
          </p>
        </>
      )
    }
  ]
  
  return (
    <KeywordLandingPage
      keyword={keyword}
      title="Chinese Girl Names Generator"
      subtitle="Create beautiful and meaningful Chinese names for girls with our authentic name generator"
      blogContent={
        <BlogModule 
          keyword={keyword} 
          sections={blogSections}
        >
          <p className="mb-4">
            Chinese girl names reflect the rich cultural heritage of China and often express parents' hopes 
            for their daughters' futures. Traditional Chinese girl names might incorporate characters representing 
            beauty, grace, intelligence, or virtue—qualities traditionally valued in Chinese culture.
          </p>
          <p className="mb-4">
            Our Chinese girl names generator creates authentic names based on your preferences, combining traditional 
            Chinese naming practices with modern sensibilities. Each Chinese girl name we generate includes the Chinese 
            characters, pinyin pronunciation guide, and detailed explanation of the meaning and cultural context.
          </p>
          <p>
            Whether you're expecting a baby girl, creating a character for a story, or looking for a Chinese name for 
            yourself, our Chinese girl names generator provides thoughtful, beautiful options with proper cultural context.
            Explore the world of Chinese girl names and discover the perfect name with our specialized generator.
          </p>
        </BlogModule>
      }
    />
  )
} 