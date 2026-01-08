'use client'

import Navigation from '@/components/Navigation'
import BecomePartner from '@/components/BecomeProvider'

export default function AboutPage() {
  return (
    <main id="main-content" className="bg-[#f7f5ef] text-[#1a1a1a] pt-20 md:pt-28">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative scroll-mt-44 min-h-[80vh] flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
            {/* Vertical Divider */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" aria-hidden="true" />
            
            {/* Left Column: Content */}
            <div className="lg:pr-12 py-16 md:py-24 flex flex-col justify-center">
              <h1 className="manrope-light text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] md:leading-[0.85] mb-12">
                About Us
              </h1>
              
              <div className="space-y-8 manrope-regular text-base md:text-lg text-black/60 leading-relaxed max-w-xl">
                <p>
                  We are a modern healthcare solutions company built to close the gaps traditional labs, billing firms, and clinical service providers overlook. Instead of offering fragmented services, we connect the three core systems that determine a facility's success: advanced diagnostics, clinical workflow support, and revenue cycle performance.
                </p>
                <p>
                  Through our Specialized Care division, we help facilities implement and manage advanced diagnostic and care workflows from program setup to ongoing clinical support and operational guidance. Our approach allows partners to modernize patient care, improve efficiency, and stay ahead in a rapidly evolving healthcare landscape.
                </p>
                <p>
                  Our Saliva & Genetic Testing division offers a broad range of diagnostic panels supported by efficient logistics, clear reporting, and flexible provider onboarding. Separately, our Medical Billing division delivers full-service insurance billing and revenue cycle management, helping providers reduce denials and strengthen financial performance.
                </p>
                <p className=" text-black">
                  Our mission is simple: connect the systems that matter most. Faster adoption, cleaner workflows, advanced diagnostics, and stronger billing, brought together to help facilities deliver better care.
                </p>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="lg:pl-12 py-8 md:py-12 lg:py-24 flex items-center">
              <div className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[3/4] w-full rounded-2xl overflow-hidden border border-black/5 shadow-sm">
                <img
                  src="/z40.jpg"
                  alt="Modern laboratory facility"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BecomePartner variant="dark" />
    </main>
  )
}
