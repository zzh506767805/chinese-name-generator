interface CardGridProps {
  children: React.ReactNode
}

export default function CardGrid({ children }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      {children}
    </div>
  )
} 