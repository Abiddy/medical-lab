import Hero from '@/components/Hero'
import LenisProvider from '@/components/LenisProvider'
import Metrics from '@/components/Metrics'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main>
      <LenisProvider>
      <Hero />
      <Metrics />
      <Services />
      </LenisProvider>
    </main>
  )
}



