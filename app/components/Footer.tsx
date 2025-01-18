'use client'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations()

  return (
    <footer className="bg-white mt-12 py-8 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          <p className="text-gray-500 text-sm">
            {t('footer.tagline')}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Product Hunt Badge */}
            <a 
              href="https://www.producthunt.com/posts/chinesename-generator?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chinesename&#0045;generator" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=791769&theme=light&t=1737168262251" 
                alt="ChineseName Generator - Find your perfect chinese name | free name generator | Product Hunt" 
                width="250" 
                height="54" 
              />
            </a>

            {/* Product Hunt Card */}
            <div className="w-full max-w-[500px] aspect-[500/405]">
              <iframe 
                src="https://cards.producthunt.com/cards/products/898155" 
                width="100%" 
                height="100%" 
                style={{border: 'none'}}
                frameBorder="0" 
                scrolling="no" 
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 