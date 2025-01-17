import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Navbar from './components/Navbar'
import I18nProvider from './components/I18nProvider'
import SchemaOrg from './components/SchemaOrg'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

const languages = {
  en: {
    title: 'Chinese Names - Find Your Perfect Chinese Name | Free Name Generator',
    description: 'Free Chinese name generator for boys and girls. Find meaningful Chinese names with pinyin and meanings. Popular Chinese first names, last names and English to Chinese name translation.',
    keywords: 'chinese names, chinese girl names, chinese boy names, chinese last names, chinese first names male, chinese names for boys, chinese names for girls, chinese male names',
  },
  zh: {
    title: '中文起名助手 - 免费中文名字生成器 | 男女起名取名',
    description: '专业的中文起名工具，提供男孩女孩中文名字生成服务。包含姓名含义、文化背景解释和拼音标注，让您轻松获得理想的中文名字。',
    keywords: '中文名字, 取名字, 起名字, 男孩名字, 女孩名字, 姓氏, 名字大全, 英文名转中文名',
  },
  ko: {
    title: '중국어 이름 생성기 - 남자 여자 중국어 이름 찾기 | 무료 이름 생성',
    description: '중국어 이름 생성기로 의미 있는 중국어 이름을 찾아보세요. 성별, 의미, 스타일에 맞는 완벽한 중국어 이름과 병음, 의미 설명을 제공합니다.',
    keywords: '중국어 이름, 중국어 여자 이름, 중국어 남자 이름, 중국 성씨, 중국어 이름 만들기, 중국어 이름 생성기',
  },
  ja: {
    title: '中国語の名前ジェネレーター - 男性・女性の中国語名 | 無料で作成',
    description: 'AIを活用した中国語名前作成ツール。性別、意味、スタイルに基づいて、あなたにぴったりの中国語名を提案。読み方と意味の解説付き。',
    keywords: '中国語の名前, 中国語女性名, 中国語男性名, 中国語の姓, 中国語名前作成, 中国語名前ジェネレーター',
  },
  hi: {
    title: 'चीनी नाम जनरेटर - लड़का और लड़की के लिए चीनी नाम | मुफ्त नाम सृजन',
    description: 'चीनी नाम जनरेटर के साथ अपना सही चीनी नाम खोजें। लिंग, अर्थ और शैली के आधार पर उपयुक्त चीनी नाम, पिनयिन और अर्थ के साथ।',
    keywords: 'चीनी नाम, चीनी लड़की के नाम, चीनी लड़के के नाम, चीनी उपनाम, चीनी नाम जनरेटर',
  },
  id: {
    title: 'Generator Nama Tionghoa - Nama Tionghoa untuk Pria & Wanita | Gratis',
    description: 'Generator nama Tionghoa gratis untuk pria dan wanita. Temukan nama Tionghoa bermakna dengan pinyin dan arti. Tersedia nama depan dan nama belakang Tionghoa.',
    keywords: 'nama tionghoa, nama tionghoa perempuan, nama tionghoa laki-laki, marga tionghoa, generator nama tionghoa',
  },
  tl: {
    title: 'Chinese Name Generator - Chinese Names for Boys & Girls | Libre',
    description: 'Libreng Chinese name generator para sa mga lalaki at babae. Humanap ng makabuluhang Chinese name na may pinyin at kahulugan. Available ang Chinese first names at last names.',
    keywords: 'chinese names, chinese name generator, chinese girl names, chinese boy names, chinese last names',
  },
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale || 'en'
  const meta = languages[locale as keyof typeof languages] || languages.en

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://chinesenameassistant.com'

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    icons: {
      icon: '/icons/icon.png',
      shortcut: '/icons/favicon.ico',
      apple: '/icons/apple-icon.png',
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      languages: Object.fromEntries(
        Object.keys(languages).map(lang => [lang, `/${lang}`])
      ),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: baseUrl,
      siteName: meta.title,
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale || 'en'}>
      <head>
        <SchemaOrg locale={params.locale || 'en'} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1JVZ3WVYQ4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1JVZ3WVYQ4');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <I18nProvider>
          <Navbar />
          <main className="bg-gradient-to-b from-white to-gray-100">
            {children}
          </main>
        </I18nProvider>
      </body>
    </html>
  )
} 