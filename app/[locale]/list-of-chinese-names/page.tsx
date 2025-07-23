import { Metadata } from 'next'
import KeywordLandingPage from '@/app/components/KeywordLandingPage'
import BlogModule from '@/app/components/BlogModule'

export const metadata: Metadata = {
  title: 'List of Chinese Names | Complete Chinese Names Collection',
  description: 'Explore our extensive list of Chinese names with meanings, pronunciations and cultural context. Generate authentic Chinese names from our comprehensive list of Chinese names.',
}

export default function ListOfChineseNamesPage() {
  const keyword = 'list of chinese names'
  
  const blogSections = [
    {
      title: 'Complete List of Chinese Names',
      content: (
        <>
          <p className="mb-4">
            Our list of Chinese names provides a comprehensive collection of traditional and modern Chinese names. 
            A good list of Chinese names should include not just the Chinese characters, but also pronunciation guides 
            and explanations of meaning. Our list of Chinese names offers all of these elements to help you understand 
            the cultural significance behind each name.
          </p>
          <p className="mb-4">
            When browsing through a list of Chinese names, it's important to understand that Chinese names typically 
            consist of a family name (surname) followed by one or two given names. In our list of Chinese names, 
            we focus primarily on given names, as these are the names that parents carefully select for their children.
          </p>
          <p>
            Our list of Chinese names generator allows you to create new names based on your preferences, 
            effectively expanding the list of Chinese names available to you. Each generated name becomes 
            part of our growing list of Chinese names, complete with cultural context and meaning.
          </p>
        </>
      )
    },
    {
      title: 'Categories in Our List of Chinese Names',
      content: (
        <>
          <p className="mb-4">
            Our list of Chinese names can be divided into several categories:
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li><strong>Boy names</strong> - Our list of Chinese names includes many options for boys, with characters representing strength, wisdom, and moral virtue.</li>
            <li><strong>Girl names</strong> - The list of Chinese names for girls in our collection includes characters representing beauty, grace, and intelligence.</li>
            <li><strong>Gender-neutral names</strong> - Some entries in our list of Chinese names work well for any gender.</li>
            <li><strong>Traditional names</strong> - Our list of Chinese names includes classical options with deep cultural roots.</li>
            <li><strong>Modern names</strong> - More contemporary options in our list of Chinese names reflect changing naming trends.</li>
          </ul>
          <p>
            By organizing our list of Chinese names into these categories, we make it easier for you to find names 
            that match your specific preferences. Our list of Chinese names generator can further filter these categories 
            based on your input.
          </p>
        </>
      )
    },
    {
      title: 'Cultural Context in Our List of Chinese Names',
      content: (
        <>
          <p className="mb-4">
            A comprehensive list of Chinese names should always include cultural context. In Chinese culture, names are 
            chosen with great care because they are believed to influence a person's destiny. Our list of Chinese names 
            provides explanations of the cultural significance behind each name.
          </p>
          <p className="mb-4">
            Many entries in our list of Chinese names draw from classical Chinese literature, philosophy, or history. 
            Understanding these references enhances appreciation of the depth found in our list of Chinese names. 
            Names might reference Confucian virtues, Taoist principles, or historical figures from Chinese history.
          </p>
          <p>
            When exploring our list of Chinese names, you'll discover how Chinese naming practices reflect broader cultural 
            values and traditions. Our list of Chinese names generator incorporates these cultural elements to create 
            authentic names that respect Chinese naming traditions.
          </p>
        </>
      )
    }
  ]
  
  return (
    <KeywordLandingPage
      keyword={keyword}
      title="Comprehensive List of Chinese Names"
      subtitle="Explore and generate authentic Chinese names from our extensive collection"
      blogContent={
        <BlogModule 
          keyword={keyword} 
          sections={blogSections}
        >
          <p className="mb-4">
            Finding the perfect Chinese name requires access to a comprehensive list of Chinese names with proper 
            explanations and cultural context. Our list of Chinese names provides not just the Chinese characters, 
            but also pronunciation guides (pinyin) and detailed explanations of each name's meaning.
          </p>
          <p className="mb-4">
            With our list of Chinese names generator, you can create authentic Chinese names based on your preferences. 
            The generator draws from our extensive list of Chinese names and combines characters in culturally 
            appropriate ways to create new, meaningful names.
          </p>
          <p>
            Whether you're looking for traditional or modern options, our list of Chinese names offers a wide variety 
            of possibilities for boys, girls, and gender-neutral names. Each name in our list of Chinese names is 
            carefully selected to ensure cultural authenticity and positive meanings.
          </p>
        </BlogModule>
      }
    />
  )
} 