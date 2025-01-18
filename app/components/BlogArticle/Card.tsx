interface CardProps {
  title?: string
  children: React.ReactNode
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      {title && (
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
      )}
      <div className="text-gray-700">
        {children}
      </div>
    </div>
  )
} 