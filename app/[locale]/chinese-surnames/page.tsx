import { Metadata } from 'next'
import KeywordLandingPage from '@/app/components/KeywordLandingPage'
import BlogModule from '@/app/components/BlogModule'

export const metadata: Metadata = {
  title: 'Chinese Surnames | Common Chinese Last Names with Meanings',
  description: 'Explore popular Chinese surnames with meanings, history and pronunciation. Our Chinese surnames generator helps you find the perfect Chinese family name.',
}

export default function ChineseSurnamesPage() {
  const keyword = 'chinese surnames'
  
  const blogSections = [
    {
      title: 'Most Common Chinese Surnames and Their Origins',
      content: (
        <>
          <p className="mb-4">
            Chinese surnames have a rich history dating back thousands of years. Unlike in Western cultures, 
            Chinese surnames come before given names, reflecting the importance of family lineage in Chinese 
            culture. There are approximately 4,000 Chinese surnames in use today, though about 100 Chinese 
            surnames account for 85% of China's population.
          </p>
          <p className="mb-4">
            The most common Chinese surnames include:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Wang (王)</strong> - Meaning "king" or "ruler," this is one of the most prevalent Chinese surnames.</li>
            <li><strong>Li (李)</strong> - Originally associated with the plum tree, this is among the most common Chinese surnames.</li>
            <li><strong>Zhang (张/張)</strong> - Derived from the word for "bow," this Chinese surname has ancient military connections.</li>
            <li><strong>Liu (刘/劉)</strong> - A widespread Chinese surname that may have originated from the word for "kill."</li>
            <li><strong>Chen (陈/陳)</strong> - This Chinese surname means "exhibit" and is particularly common in southern China.</li>
          </ul>
          <p>
            These and other Chinese surnames often have fascinating origin stories related to ancient professions, 
            geographical locations, historical events, or noble lineages. Our Chinese surnames generator helps 
            you explore these traditional family names and their cultural significance.
          </p>
        </>
      )
    },
    {
      title: 'Historical Significance of Chinese Surnames',
      content: (
        <>
          <p className="mb-4">
            Chinese surnames are among the oldest continuously used surname systems in the world, with some 
            Chinese surnames dating back over 4,000 years. Throughout Chinese history, Chinese surnames have 
            played a crucial role in maintaining family records and ancestral worship traditions.
          </p>
          <p className="mb-4">
            During different dynasties, Chinese surnames gained or lost prominence:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Imperial Chinese surnames</strong> - Certain Chinese surnames like Zhao (趙), Liu (劉), and Li (李) were associated with imperial families during different dynasties.</li>
            <li><strong>Noble Chinese surnames</strong> - Some Chinese surnames indicated noble status, particularly during the Zhou dynasty when nobility was closely tied to family lineage.</li>
            <li><strong>Regional Chinese surnames</strong> - Many Chinese surnames have strong associations with particular regions of China, reflecting migration patterns and local history.</li>
            <li><strong>Occupational Chinese surnames</strong> - Some Chinese surnames originated from ancient professions, such as Tao (陶, potter) or Chu (厨/廚, cook).</li>
          </ul>
          <p>
            The study of Chinese surnames (姓氏学, xìngshì xué) is an important field in Chinese genealogy and 
            historical research. Our Chinese surnames generator incorporates this rich historical context 
            to provide authentic and meaningful family names.
          </p>
        </>
      )
    },
    {
      title: 'Understanding Chinese Surname Structure and Usage',
      content: (
        <>
          <p className="mb-4">
            Chinese surnames typically consist of a single character, though some Chinese surnames comprise 
            two characters. These Chinese surnames are written first in a person's full name, followed by 
            one or two given names. This format reflects the cultural emphasis on family identity over individual identity.
          </p>
          <p className="mb-4">
            Important aspects of Chinese surnames include:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Pronunciation</strong> - Chinese surnames are pronounced according to the tones of Mandarin or other Chinese dialects, with each character having a specific tone that affects its meaning.</li>
            <li><strong>Written form</strong> - Chinese surnames in traditional and simplified Chinese may appear different, reflecting writing system reforms in mainland China.</li>
            <li><strong>Surname taboos</strong> - Historically, Chinese surnames associated with emperors sometimes became taboo for common people to use.</li>
            <li><strong>Marriage traditions</strong> - Unlike in some Western cultures, Chinese women traditionally retain their Chinese surnames after marriage rather than adopting their husband's surname.</li>
          </ul>
          <p>
            When using our Chinese surnames generator, you'll discover authentic Chinese surnames along with 
            their meanings, pronunciations, and cultural context. This helps ensure you select Chinese surnames 
            that are both authentic and appropriate for your specific needs.
          </p>
        </>
      )
    }
  ]
  
  return (
    <KeywordLandingPage
      keyword={keyword}
      title="Chinese Surnames Generator"
      subtitle="Discover authentic Chinese family names with meanings and cultural context"
      blogContent={
        <BlogModule 
          keyword={keyword} 
          sections={blogSections}
        >
          <p className="mb-4">
            Chinese surnames carry thousands of years of history and cultural significance. Unlike Western 
            naming conventions, Chinese surnames appear before given names, emphasizing the importance of 
            family lineage in Chinese culture. Our Chinese surnames generator helps you explore these 
            traditional family names with proper context and meaning.
          </p>
          <p className="mb-4">
            With over 4,000 Chinese surnames in existence, each has its own unique origin story and cultural 
            significance. Many Chinese surnames derive from ancient geographical locations, professions, 
            historical events, or noble titles. Our Chinese surnames generator includes the most common 
            and historically significant family names.
          </p>
          <p>
            Whether you're researching your family history, creating a character for a story, or simply 
            interested in Chinese culture, our Chinese surnames generator provides authentic options with 
            detailed explanations. Each Chinese surname comes with its pronunciation in pinyin, its meaning, 
            and relevant historical context to help you make an informed choice.
          </p>
        </BlogModule>
      }
    />
  )
} 