import { Metadata } from 'next'
import KeywordLandingPage from '@/app/components/KeywordLandingPage'
import BlogModule from '@/app/components/BlogModule'

export const metadata: Metadata = {
  title: 'Chinese Last Names | Common Chinese Surnames with Meanings',
  description: 'Explore popular Chinese last names with meanings and history. Our Chinese last names generator helps you find authentic Chinese family names with cultural context.',
}

export default function ChineseLastNamesPage() {
  const keyword = 'chinese last names'
  
  const blogSections = [
    {
      title: 'Popular Chinese Last Names and Their Origins',
      content: (
        <>
          <p className="mb-4">
            Chinese last names have a rich history dating back thousands of years. Unlike Western naming conventions, 
            Chinese last names come before given names, reflecting the importance of family lineage in Chinese culture. 
            While there are thousands of Chinese last names in existence, about 100 common Chinese last names are used 
            by nearly 85% of the Chinese population.
          </p>
          <p className="mb-4">
            Some of the most common Chinese last names include:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Wang (王)</strong> - Meaning "king," this is one of the most prevalent Chinese last names, used by over 92 million people.</li>
            <li><strong>Li (李)</strong> - Originally associated with the plum tree, this Chinese last name is used by approximately 91 million people.</li>
            <li><strong>Zhang (张/張)</strong> - This Chinese last name, meaning "bow-maker," is used by about 85 million people.</li>
            <li><strong>Liu (刘/劉)</strong> - A Chinese last name with ancient origins, used by around 70 million people.</li>
            <li><strong>Chen (陈/陳)</strong> - This Chinese last name, meaning "exhibit," is particularly common in southern China.</li>
          </ul>
          <p>
            Chinese last names often have fascinating origin stories related to ancient professions, geographical locations, 
            historical events, or noble lineages. Our Chinese last names generator helps you explore these traditional 
            family names and their cultural significance.
          </p>
        </>
      )
    },
    {
      title: 'History and Evolution of Chinese Last Names',
      content: (
        <>
          <p className="mb-4">
            Chinese last names are among the world's oldest continuously used surname systems, with some Chinese 
            last names dating back over 4,000 years to the Shang dynasty (1600-1046 BCE). Throughout Chinese history, 
            Chinese last names have played a crucial role in maintaining family records and ancestral worship traditions.
          </p>
          <p className="mb-4">
            The development of Chinese last names has been shaped by several important historical factors:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Ancient clan origins</strong> - Many Chinese last names originated as clan names during the Zhou dynasty (1046-256 BCE), when family lineage became increasingly important.</li>
            <li><strong>Imperial decrees</strong> - Some Chinese last names were granted by emperors to reward loyal subjects or to establish new lineages.</li>
            <li><strong>Geographic associations</strong> - Certain Chinese last names are strongly connected to specific regions, reflecting historical migration patterns.</li>
            <li><strong>Occupational origins</strong> - Some Chinese last names derived from ancient professions, such as Wei (魏, "tanner") or Tao (陶, "potter").</li>
            <li><strong>Adoption of rulers' names</strong> - Throughout Chinese history, people sometimes adopted the Chinese last names of their rulers to show allegiance.</li>
          </ul>
          <p>
            Today, Chinese last names continue to hold great significance in Chinese culture, representing not just 
            immediate family connections but links to a long ancestral lineage. Our Chinese last names generator 
            incorporates this rich historical context to provide authentic and meaningful family names.
          </p>
        </>
      )
    },
    {
      title: 'Using Chinese Last Names in International Contexts',
      content: (
        <>
          <p className="mb-4">
            As Chinese people increasingly live, work, and study internationally, Chinese last names have become 
            more familiar around the world. However, there are several important considerations when using Chinese 
            last names in non-Chinese contexts:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Name order</strong> - While Chinese last names traditionally come before given names in China, many Chinese people adapt to the Western convention of putting the family name last when in international settings.</li>
            <li><strong>Romanization systems</strong> - Chinese last names may be romanized differently depending on whether Pinyin (mainland China), Wade-Giles (older system), or other systems are used. For example, the Chinese last name 张 might appear as Zhang (Pinyin) or Chang (Wade-Giles).</li>
            <li><strong>Regional variations</strong> - Some Chinese last names have different forms in different Chinese regions or dialects. For instance, the Chinese last name 陳 is Chen in Mandarin but Chan in Cantonese.</li>
            <li><strong>Pronunciation challenges</strong> - Some Chinese last names include sounds that don't exist in other languages, making pronunciation difficult for non-Chinese speakers.</li>
          </ul>
          <p className="mb-4">
            When selecting a Chinese last name using our generator, consider how the name will be used and by whom. 
            Our Chinese last names generator provides pronunciation guides to help ensure the name can be properly 
            spoken in various contexts.
          </p>
          <p>
            Despite these challenges, Chinese last names represent an important cultural heritage that spans thousands 
            of years. Whether you're researching your ancestry, creating a character for a story, or simply interested 
            in Chinese culture, our Chinese last names generator can help you find an authentic name with the proper 
            cultural context.
          </p>
        </>
      )
    }
  ]
  
  return (
    <KeywordLandingPage
      keyword={keyword}
      title="Chinese Last Names Generator"
      subtitle="Explore authentic Chinese family names with meanings and historical context"
      blogContent={
        <BlogModule 
          keyword={keyword} 
          sections={blogSections}
        >
          <p className="mb-4">
            Chinese last names carry thousands of years of history and cultural significance. Unlike Western 
            naming conventions, Chinese last names appear before given names in traditional Chinese usage, 
            emphasizing the importance of family lineage in Chinese culture. Our Chinese last names generator 
            helps you explore these traditional family names with proper context and meaning.
          </p>
          <p className="mb-4">
            With thousands of Chinese last names in existence, each has its own unique origin story and cultural 
            significance. Many Chinese last names derive from ancient geographical locations, professions, 
            historical events, or noble titles. Our Chinese last names generator includes the most common and 
            historically significant family names from Chinese history.
          </p>
          <p>
            Whether you're researching your family history, creating a character for a story, or simply interested 
            in Chinese culture, our Chinese last names generator provides authentic options with detailed explanations. 
            Each Chinese last name comes with its pronunciation in pinyin, its meaning, and relevant historical context 
            to help you make an informed choice about Chinese last names for your specific needs.
          </p>
        </BlogModule>
      }
    />
  )
} 