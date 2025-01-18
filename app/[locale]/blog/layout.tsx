import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chinese Name Blog - Learn About Chinese Names',
  description: 'Discover the meaning and cultural significance behind Chinese names. Learn about Chinese naming traditions, popular names, and more.',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="prose lg:prose-xl">
        {children}
      </div>
    </div>
  )
} 