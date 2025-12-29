import Hero from '@/components/Hero'
import Metrics from '@/components/Metrics'
import Services from '@/components/Services'
import WhoWeSupport from '@/components/WhoWeSupport'
import GetStarted from '@/components/GetStarted'
import LenisProvider from '@/components/LenisProvider'

export default function Home() {
  return (
    <main className="bg-[#f7f5ef]">
      <LenisProvider>
      <Hero />
      <Services />
      <Metrics />
      <WhoWeSupport />
      <GetStarted />
      </LenisProvider>
   

    </main>
  )
}



