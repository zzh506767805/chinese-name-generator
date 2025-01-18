interface ContentSectionProps {
  title: string
  children: React.ReactNode
}

export default function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">{title}</h2>
      <div className="text-gray-700">
        {children}
      </div>
    </section>
  )
} 