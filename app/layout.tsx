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
    description: 'Create your perfect Chinese name with our AI-powered name generator. Get authentic Chinese names with pinyin, meanings, and cultural significance. Specialized in boys names, girls names, and English to Chinese name translation.',
    keywords: 'chinese name generator, chinese names, chinese name meaning, chinese name translation, chinese girl names, chinese boy names, chinese name in chinese, chinese name converter, chinese name characters, chinese name pronunciation',
    footer: {
      tagline: 'Powered by AI • Culturally authentic • 100% unique'
    }
  },
  zh: {
    title: '中文起名助手 - 免费中文名字生成器 | 男女起名取名',
    description: '智能中文起名工具，基于AI深度学习，为您精准推荐富有文化内涵的中文名字。提供详细的姓名分析、五行八字、文化典故解释，支持英文名转中文名，让您轻松获得理想的中文名字。',
    keywords: '起名字, 取名字, 中文名字, 英文名转中文名, 男孩名字, 女孩名字, 姓名测试, 姓名分析, 八字起名, 在线起名, 免费起名, AI起名',
    footer: {
      tagline: 'AI驱动 • 文化传承 • 独一无二'
    }
  },
  ko: {
    title: '중국어 이름 생성기 - 남자 여자 중국어 이름 찾기 | 무료 이름 생성',
    description: '중국어 이름 생성기로 의미 있는 중국어 이름을 찾아보세요. 성별, 의미, 스타일에 맞는 완벽한 중국어 이름과 병음, 의미 설명을 제공합니다.',
    keywords: '중국어 이름, 중국어 이름 만들기, 중국어 이름 생성기, 중국어 여자 이름, 중국어 남자 이름, 중국 성씨, 중국어 이름 의미, 중국어 이름 번역, 중국어 이름 발음, AI 이름 생성',
    footer: {
      tagline: 'AI 기술 구현 • 문화적 진정성 • 100% 고유함'
    }
  },
  ja: {
    title: '中国語の名前ジェネレーター - 男性・女性の中国語名 | 無料で作成',
    description: 'AIを活用した中国語名前作成ツール。性別、意味、スタイルに基づいて、あなたにぴったりの中国語名を提案。読み方と意味の解説付き。',
    keywords: '中国語の名前, 中国語名前作成, 中国語名前ジェネレーター, 中国語女性名, 中国語男性名, 中国語の姓, 中国語名前の意味, 中国語名前の読み方, 漢字名前, AI名前生成',
    footer: {
      tagline: 'AI搭載 • 文化的に正統 • 完全オリジナル'
    }
  },
  hi: {
    title: 'चीनी नाम जनरेटर - लड़का और लड़की के लिए चीनी नाम | मुफ्त नाम सृजन',
    description: 'चीनी नाम जनरेटर के साथ अपना सही चीनी नाम खोजें। लिंग, अर्थ और शैली के आधार पर उपयुक्त चीनी नाम, पिनयिन और अर्थ के साथ।',
    keywords: 'चीनी नाम जनरेटर, चीनी नाम अर्थ, चीनी नाम अनुवाद, चीनी लड़की के नाम, चीनी लड़के के नाम, चीनी नाम हिंदी में, चीनी नाम कनवर्टर, चीनी नाम उच्चारण, एआई नाम जनरेटर, मुफ्त नाम जनरेटर',
    footer: {
      tagline: 'AI द्वारा संचालित • सांस्कृतिक रूप से प्रामाणिक • 100% अनूठा'
    }
  },
  id: {
    title: 'Generator Nama Tionghoa - Nama Tionghoa untuk Pria & Wanita | Gratis',
    description: 'Generator nama Tionghoa gratis untuk pria dan wanita. Temukan nama Tionghoa bermakna dengan pinyin dan arti. Tersedia nama depan dan nama belakang Tionghoa.',
    keywords: 'generator nama tionghoa, nama tionghoa, arti nama tionghoa, nama tionghoa modern, nama tionghoa tradisional, nama tionghoa perempuan, nama tionghoa laki-laki, cara baca nama tionghoa, marga tionghoa, AI generator nama',
    footer: {
      tagline: 'Didukung oleh AI • Otentik secara budaya • 100% unik'
    }
  },
  tl: {
    title: 'Chinese Name Generator - Chinese Names for Boys & Girls | Libre',
    description: 'Libreng Chinese name generator para sa mga lalaki at babae. Humanap ng makabuluhang Chinese name na may pinyin at kahulugan. Available ang Chinese first names at last names.',
    keywords: 'chinese name generator, chinese names, chinese name meaning, chinese name translation, chinese girl names, chinese boy names, chinese name pronunciation, chinese name characters, chinese surname, AI name generator',
    footer: {
      tagline: 'Pinapagana ng AI • Tunay sa kultura • 100% natatangi'
    }
  },
  ru: {
    title: 'Генератор китайских имён - Найдите идеальное китайское имя | Бесплатно',
    description: 'Бесплатный генератор китайских имён для мальчиков и девочек. Найдите значимые китайские имена с пиньинь и значениями. Популярные китайские имена и фамилии.',
    keywords: 'генератор китайских имён, китайские имена, значение китайских имён, китайские женские имена, китайские мужские имена, китайские фамилии, перевод имени на китайский, произношение китайских имён, ИИ генератор имён, бесплатный генератор имён',
    footer: {
      tagline: 'Работает на ИИ • Культурно аутентично • 100% уникально'
    }
  },
}

export async function generateMetadata({ params }: { 
  params: { 
    locale: string;
    path?: string;
  } 
}): Promise<Metadata> {
  const locale = params.locale || 'en'
  const meta = languages[locale as keyof typeof languages] || languages.en

  const baseUrl = 'https://chinesenamegenerate.com'

  return {
    metadataBase: new URL(baseUrl),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    icons: {
      icon: '/icons/icon.png',
      shortcut: '/icons/favicon.ico',
      apple: '/icons/apple-icon.png',
    },
    alternates: {
      languages: Object.fromEntries(
        Object.keys(languages).map(lang => [lang, `/${lang}`])
      ),
      canonical: `${baseUrl}/${locale}${params.path || ''}`
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: baseUrl,
      siteName: meta.title,
      locale: locale,
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Chinese Name Generator'
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/twitter-image.png'],
      creator: '@chinesename',
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    }
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
        <script src="https://cmp.gatekeeperconsent.com/min.js" data-cfasync="false"></script>
        <script src="https://the.gatekeeperconsent.com/cmp.min.js" data-cfasync="false"></script>
        <script async src="//www.ezojs.com/ezoic/sa.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.ezstandalone = window.ezstandalone || {};
              ezstandalone.cmd = ezstandalone.cmd || [];
            `
          }}
        />
        <SchemaOrg locale={params.locale || 'en'} />
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8366783560808157"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
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