import Link from 'next/link'

interface CTASectionProps {
  title: string
  description: string
  buttonText: string
  buttonHref: string
}

export default function CTASection({ title, description, buttonText, buttonHref }: CTASectionProps) {
  return (
    <div className="my-12 p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-6 max-w-2xl mx-auto">{description}</p>
      <Link 
        href={buttonHref}
        className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  )
}
