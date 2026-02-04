import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import Metrics from '@/components/Metrics'
import Services from '@/components/Services'
import WhoWeSupport from '@/components/WhoWeSupport'
import GetStarted from '@/components/GetStarted'
import PartnerSection from '@/components/PartnerSection'
import LenisProvider from '@/components/LenisProvider'

export const metadata: Metadata = {
  title: 'BDL - BioAnalysis Diagnostic Laboratories | Healthcare Diagnostics & Support',
  description:
    'Your partner in better healthcare. Specialized care, saliva & genetic testing, wound care PCR, respiratory diagnostics, and workflow support for SNFs, LTACs, and facilities.',
  openGraph: {
    title: 'BDL - BioAnalysis Diagnostic Laboratories | Your Partner in Better Healthcare',
    description:
      'Specialized care, saliva & genetic testing, wound care PCR, respiratory diagnostics, and workflow support for healthcare facilities.',
  },
}

export default function Home() {
  return (
    <main id="main-content" className="bg-[#f7f5ef]">
      <LenisProvider>
      <Hero />
      <Services />
      <Metrics />
      <WhoWeSupport />
      <PartnerSection /> 
      </LenisProvider>
   

    </main>
  )
}



