import HomePage from '../components/HomePage'
import TipJar from '../components/TipJar'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <HomePage />
          
          <div className="mt-16">
            <TipJar />
          </div>
        </div>
      </div>
    </main>
  )
} 