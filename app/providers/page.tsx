'use client'

import { useState } from 'react'

export default function ProvidersPage() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    {
      id: 'overview',
      label: 'Overview',
      headline: 'Support for Modern Clinical Workflows',
      content: 'We partner with skilled nursing facilities, long term acute care settings, assisted living communities, wound care teams, urgent care clinics, and medical practices that depend on fast diagnostics and consistent support. Our services are designed to strengthen clinical decisions, simplify workflows, and improve the patient experience across a wide range of care environments.',
      highlights: [
        { title: 'Facility Partnerships', desc: 'Supporting SNFs, LTACs, ALFs, and medical practices.' },
        { title: 'Clinical Decision Support', desc: 'Fast diagnostics to strengthen medical oversight.' },
        { title: 'Workflow Simplification', desc: 'Reducing administrative burden for clinical teams.' },
        { title: 'Improved Patient Experience', desc: 'Enhancing outcomes across care environments.' }
      ],
      image: '/providers-overview.jpg'
    },
    {
      id: 'specialized-care',
      label: 'Specialized Care',
      headline: 'Specialized Care for Facilities',
      content: 'Our Specialized Care programs provide same day wound and respiratory PCR results, coordinated logistics, and continuous communication with facility teams. These programs are built specifically for SNFs, LTACs, ALFs and similar care environments that require rapid diagnostics and reliable workflow integration.',
      image: '/specialized-care.jpg'
    },
    {
      id: 'saliva-genetic',
      label: 'Saliva & Genetic Testing',
      headline: 'Saliva and Genetic Testing',
      content: 'We also offer saliva hormone testing and genetic analysis for providers who require focused endocrine or genetic insights. These tests are available to any organization that chooses to incorporate them into their patient evaluation process and operate separately from our facility-based Specialized Care programs.',
      image: '/saliva-genetic.jpg'
    },
    {
      id: 'dedicated-support',
      label: 'Dedicated Support',
      headline: 'Dedicated Provider Support',
      content: 'Our team is available to assist with ordering, sample collection guidance, logistics coordination, reporting questions, and ongoing case needs. Providers can expect fast, reliable communication throughout the entire process.',
      image: '/dedicated-support.jpg'
    },
    {
      id: 'diagnostic-partner',
      label: 'Diagnostic Partner',
      headline: 'A Dependable Diagnostic Partner',
      content: 'Whether supporting a facility through our integrated Specialized Care programs or providing additional testing options for other healthcare groups, our focus remains on accuracy, efficiency and dependable communication. We work to make diagnostics predictable, fast and clinically meaningful for every provider we serve.',
      image: '/diagnostic-partner.jpg'
    }
  ]

  const benefits = [
    {
      title: 'Same-Day Courier Service',
      desc: 'Designated courier routes ensure predictable pickup times and same-day delivery to the laboratory, supporting consistent operational flow.'
    },
    {
      title: 'Timely PCR Reporting',
      desc: 'Most results are delivered the same evening, enabling faster clinical decisions across wound, respiratory, and specialty testing programs.'
    },
    {
      title: 'Clear, Actionable Reporting',
      desc: 'Reports are formatted for quick interpretation and easy charting, allowing providers to incorporate findings into care plans without unnecessary complexity.'
    },
    {
      title: 'CMS-Ready Documentation',
      desc: 'Every report includes complete traceability, timestamps, specimen identifiers, and collection details—to support compliance and audit readiness.'
    },
    {
      title: 'Reduced Administrative Burden',
      desc: 'We coordinate logistics, communication, and documentation needs so nursing staff and clinical teams can remain focused on patient care.'
    },
    {
      title: 'Consistent, Reliable Workflow',
      desc: 'Our integrated model provides a stable diagnostic infrastructure that facilities can rely on each day, strengthening both clinical outcomes and overall operational performance.'
    }
  ]

  return (
    <main className="bg-[#f7f5ef] text-[#1a1a1a] pt-20 md:pt-28">
      <SubNav />
      
      {/* Hero Section (Image 2 Style) */}
      <section id="overview" className="relative scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            {/* Vertical Divider */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />
            
            {/* Left Column */}
            <div className="lg:pr-12 pb-12 lg:pb-24 pt-20 lg:pt-32 flex flex-col justify-between min-h-[400px] lg:min-h-[700px]">
              <h1 className="manrope-light text-7xl md:text-7xl lg:text-7xl tracking-tight leading-[0.85]">
                For
                <br />
                Providers
              </h1>
              
              <div className="mt-10">
                <p className="manrope-regular text-lg md:text-xl text-black/80 max-w-sm leading-relaxed">
                  Seamless Support for Modern Clinical Workflows—empowering providers with reliable logistics, fast PCR reporting, transparent documentation, and hands-on partnership, so you can focus on quality patient care without administrative interruptions.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:pl-12 flex flex-col justify-end pb-24 pt-12 lg:pt-32">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-black/5 group border border-black/5">
                <img
                  src="/pr1.jpg"
                  alt="Healthcare providers collaborating"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-Nav Content Section (Image 2/3 Style) */}
      <section id="services" className="py-24 border-t border-black/10 scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-16 lg:gap-24">
            {/* Sticky Left Nav */}
            <div className="lg:sticky lg:top-44 h-fit">
              <div className="flex flex-col gap-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={[
                      "flex items-center justify-between px-6 py-5 rounded-xl text-left transition-all duration-300",
                      activeSection === section.id
                        ? "bg-[#e7dfd3] text-black shadow-sm"
                        : "text-black/40 hover:text-black/60 hover:bg-black/5"
                    ].join(" ")}
                  >
                    <span className="manrope-medium text-base">{section.label}</span>
                    {activeSection === section.id && (
                      <span className="text-xl">›</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="min-h-[600px] flex flex-col">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className={[
                    "transition-all duration-500 flex flex-col",
                    activeSection === section.id
                      ? "opacity-100 translate-y-0"
                      : "hidden opacity-0 translate-y-4"
                  ].join(" ")}
                >
                  <h2 className="red-hat-display-light text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-12">
                    {section.headline}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
                    <div className="order-1 space-y-12">
                      <p className="manrope-regular text-lg md:text-xl text-black/70 leading-relaxed">
                        {section.content}
                      </p>

                      {section.highlights && (
                        <div className="mt-12 space-y-8">
                          <p className="manrope-bold text-xs uppercase tracking-widest text-black/40">
                            Highlights:
                          </p>
                          <div className="border-t border-black/5 divide-y divide-black/5">
                            {section.highlights.map((h, i) => (
                              <div key={i} className="py-6 flex gap-6 items-center">
                                <div className="w-12 h-12 rounded-xl bg-[#e7dfd3] flex items-center justify-center shrink-0 border border-black/5 shadow-sm">
                                  <svg className="w-5 h-5 text-black/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <div>
                                  <h4 className="manrope-bold text-base text-black/90">{h.title}</h4>
                                  <p className="mt-1 manrope-regular text-sm text-black/60">{h.desc}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {section.id === 'diagnostic-partner' && (
                        <div className="pt-8">
                          <a
                            href="/#get-started"
                            className="inline-flex items-center gap-4 group"
                          >
                            <span className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all">
                              <span className="text-xl group-hover:text-white transition-colors">›</span>
                            </span>
                            <span className="manrope-bold text-lg tracking-tight">Become a Provider</span>
                          </a>
                        </div>
                      )}
                    </div>

                    <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-black/5 relative order-2">
                      <div className="absolute inset-0 bg-gray-200" /> {/* Placeholder */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits Header (Image 4 Style) */}
      <section id="framework" className="py-24 border-t border-black/10 bg-[#f7f5ef] scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="red-hat-display-light text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight max-w-4xl mb-16">
            A Unified Framework That Supports All Provider Workflows
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="space-y-8">
              <p className="manrope-regular text-lg text-black/60 max-w-xl">
                Our integrated model provides a stable diagnostic infrastructure that facilities can rely on each day, strengthening both clinical outcomes and overall operational performance.
              </p>
              
              <div className="bg-[#e7dfd3] p-10 rounded-2xl inline-block pr-24">
                <span className="block text-7xl manrope-light tracking-tight mb-4">$500m+</span>
                <p className="manrope-medium text-sm text-black/40 uppercase tracking-widest">
                  Funding secured for development
                </p>
              </div>
            </div>
            
            <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-black/5 relative">
              <div className="absolute inset-0 bg-gray-200" /> {/* Placeholder */}
            </div>
          </div>
        </div>
      </section>

      {/* Why partner with BDL? (Image 5 Style) */}
      <section id="benefits" className="py-32 bg-[#1F271B] text-white scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="red-hat-display-light text-5xl md:text-6xl mb-24">
            Program Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {benefits.map((benefit, i) => (
              <div key={i} className="space-y-8 border-t border-white/10 pt-12">
                <h3 className="red-hat-display-medium text-2xl lg:text-3xl leading-tight">
                  {benefit.title}
                </h3>
                <p className="manrope-light text-base lg:text-lg text-white/60 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#f7f5ef]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <a
            href="/#get-started"
            className="inline-flex items-center gap-6 group"
          >
            <h2 className="red-hat-display-light text-6xl md:text-7xl lg:text-8xl tracking-tighter hover:text-black/60 transition-colors">
              Become a Provider
            </h2>
            <div className="w-20 h-20 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all">
              <span className="text-3xl group-hover:text-white transition-colors">›</span>
            </div>
          </a>
        </div>
      </section>
    </main>
  )
}

function SubNav() {
  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Services', href: '#services' },
    { label: 'Framework', href: '#framework' },
    { label: 'Benefits', href: '#benefits' },
  ]

  return (
    <div className="fixed top-20 md:top-28 left-0 right-0 z-40 bg-[#f7f5ef]/80 backdrop-blur-md border-b border-black/5 overflow-x-auto no-scrollbar scroll-smooth">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 min-w-max md:min-w-0 relative">
        <div className="flex items-center justify-start gap-6 md:gap-10 h-14">
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
                <span className="text-[10px] md:text-xs tracking-widest uppercase manrope-bold text-black/80">
                  For Providers
                </span>
              </div>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[10px] md:text-xs tracking-widest uppercase manrope-medium text-black/60 hover:text-black transition-colors whitespace-nowrap"
            >
              {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
  )
}

