import FAQ from '@/components/FAQ'
import Navigation from '@/components/Navigation'

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-[#f7f5ef]">
      <Navigation />
      <div className="pt-20 md:pt-28">
        <FAQ />
      </div>
    </main>
  )
}

