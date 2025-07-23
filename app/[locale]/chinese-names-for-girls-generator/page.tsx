import { Metadata } from 'next'
import KeywordLandingPage from '@/app/components/KeywordLandingPage'
import BlogModule from '@/app/components/BlogModule'

export const metadata: Metadata = {
  title: 'Chinese Names for Girls Generator | Beautiful Chinese Girl Names',
  description: 'Generate authentic Chinese names for girls with our advanced Chinese names for girls generator. Get beautiful Chinese girl names with meanings, pronunciation guides and cultural context.',
}

export default function ChineseNamesForGirlsGeneratorPage() {
  const keyword = 'chinese names for girls generator'
  
  const blogSections = [
    {
      title: 'How Our Chinese Names for Girls Generator Works',
      content: (
        <>
          <p className="mb-4">
            Our Chinese names for girls generator uses advanced AI technology to create authentic Chinese names 
            specifically designed for girls. The Chinese names for girls generator analyzes traditional Chinese 
            naming patterns and cultural elements to provide names that are both meaningful and beautiful.
          </p>
          <p className="mb-4">
            When you use our Chinese names for girls generator, you can specify your preferences for meaning, 
            style, and other factors. The Chinese names for girls generator then processes these preferences 
            to create personalized name options that align with your requirements while maintaining cultural authenticity.
          </p>
          <p>
            Each name produced by our Chinese names for girls generator comes with the Chinese characters, 
            pinyin pronunciation guide, and a detailed explanation of the meaning and cultural context. 
            This makes our Chinese names for girls generator an educational tool as well as a practical one.
          </p>
        </>
      )
    },
    {
      title: 'Beautiful Characters Used in Our Chinese Names for Girls Generator',
      content: (
        <>
          <p className="mb-4">
            Our Chinese names for girls generator draws from a carefully curated collection of characters that 
            are particularly suitable for girls' names. These include characters representing:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Beauty and grace</strong> - Characters like 美 (měi), 雅 (yǎ), and 婷 (tíng) are frequently used by our Chinese names for girls generator.</li>
            <li><strong>Intelligence and wisdom</strong> - Our Chinese names for girls generator incorporates characters such as 慧 (huì), 智 (zhì), and 颖 (yǐng).</li>
            <li><strong>Natural elements</strong> - The Chinese names for girls generator often selects characters representing flowers, like 花 (huā), 莲 (lián), or natural phenomena like 雪 (xuě, snow).</li>
            <li><strong>Virtues</strong> - Characters representing kindness, loyalty, and compassion are favorites in our Chinese names for girls generator.</li>
            <li><strong>Cultural elements</strong> - Our Chinese names for girls generator may incorporate characters with references to Chinese art, music, or literature.</li>
          </ul>
          <p>
            The Chinese names for girls generator carefully combines these characters to create harmonious names 
            with beautiful sounds and positive meanings that parents would want for their daughters.
          </p>
        </>
      )
    },
    {
      title: 'Benefits of Using Our Chinese Names for Girls Generator',
      content: (
        <>
          <p className="mb-4">
            There are many advantages to using our specialized Chinese names for girls generator:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Cultural authenticity</strong> - Our Chinese names for girls generator creates names that respect Chinese naming traditions and cultural practices.</li>
            <li><strong>Personalization</strong> - The Chinese names for girls generator allows you to specify meanings and qualities important to you.</li>
            <li><strong>Educational value</strong> - Each name from our Chinese names for girls generator comes with detailed explanations that help you learn about Chinese culture.</li>
            <li><strong>Pronunciation guidance</strong> - Our Chinese names for girls generator provides pinyin guides to help with correct pronunciation.</li>
            <li><strong>Time-saving</strong> - Instead of researching individual characters, the Chinese names for girls generator does the work for you.</li>
          </ul>
          <p>
            Whether you're expecting a baby girl, creating a character for a story, or looking for a Chinese name 
            for yourself, our Chinese names for girls generator provides thoughtful, authentic options that you 
            can feel confident about using.
          </p>
        </>
      )
    }
  ]
  
  return (
    <KeywordLandingPage
      keyword={keyword}
      title="Chinese Names for Girls Generator"
      subtitle="Create beautiful and meaningful Chinese names for girls with our authentic generator"
      blogContent={
        <BlogModule 
          keyword={keyword} 
          sections={blogSections}
        >
          <p className="mb-4">
            Finding the perfect Chinese name for a girl requires understanding of Chinese culture, language, 
            and naming traditions. Our Chinese names for girls generator makes this process simple by creating 
            authentic Chinese names specifically tailored for girls.
          </p>
          <p className="mb-4">
            With our Chinese names for girls generator, you can create names that reflect qualities traditionally 
            valued in girls' names in Chinese culture, such as beauty, intelligence, grace, and kindness. 
            The Chinese names for girls generator combines carefully selected characters to form harmonious 
            names with positive meanings.
          </p>
          <p>
            Each name created by our Chinese names for girls generator includes the Chinese characters, 
            pronunciation guide in pinyin, and detailed explanation of the meaning. This makes our 
            Chinese names for girls generator not just a naming tool but also an educational resource 
            about Chinese culture and language.
          </p>
        </BlogModule>
      }
    />
  )
} 