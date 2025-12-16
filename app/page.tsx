import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Performance from '@/components/Performance'
import Services from '@/components/Services'
import StickyGallery from '@/components/StickyGallery'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white">
      {/* Sticky Navbar */}
      
      {/* Rounded Hero Container */}
      <div className="relative mx-4 md:mx-6 lg:mx-8 md:mt-6 rounded-3xl overflow-hidden">
        <Hero />
      </div>
      
      {/* Rest of the sections */}
      <Performance />
      <Services />
      <StickyGallery />
      <Footer />
    </main>
  )
}



