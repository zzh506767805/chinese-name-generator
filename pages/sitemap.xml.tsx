import { GetServerSideProps } from 'next'

const EXTERNAL_DATA_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://chinesenameassistant.com'

function generateSiteMap(languages: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
           xmlns:xhtml="http://www.w3.org/1999/xhtml">
     ${languages
       .map((lang) => {
         return `
       <url>
           <loc>${EXTERNAL_DATA_URL}/${lang}</loc>
           ${languages
             .map(
               (alternateLang) =>
                 `<xhtml:link 
                     rel="alternate" 
                     hreflang="${alternateLang}" 
                     href="${EXTERNAL_DATA_URL}/${alternateLang}"/>`
             )
             .join('')}
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>daily</changefreq>
           <priority>1.0</priority>
       </url>
     `
       })
       .join('')}
   </urlset>
 `
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const languages = ['en', 'zh', 'ja', 'ko', 'hi', 'id', 'tl']
  
  const sitemap = generateSiteMap(languages)

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default function SiteMap() {
  // getServerSideProps will handle the XML generation
  return null
} 