'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import BecomePartner from '@/components/BecomeProvider'

export default function ProvidersPage() {
  const [activeSection, setActiveSection] = useState('partnerships')

  const sections = [
    {
      id: 'partnerships',
      label: 'Facility Partnerships',
      description: 'Supporting SNFs, LTACs, ALFs, and medical practices.',
      headline: 'Support for Modern Clinical Workflows',
      content: 'We partner with skilled nursing facilities, long term acute care settings, assisted living communities, wound care teams, urgent care clinics, and medical practices that depend on fast diagnostics and consistent support. Our services are designed to strengthen clinical decisions, simplify workflows, and improve the patient experience across a wide range of care environments.',
      image: '/pr1.jpg'
    },
    {
      id: 'decision-support',
      label: 'Clinical Decision Support',
      description: 'Fast diagnostics to strengthen medical oversight.',
      headline: 'Specialized Care for Facilities',
      content: 'Our Specialized Care programs provide same day wound and respiratory PCR results, coordinated logistics, and continuous communication with facility teams. These programs are built specifically for SNFs, LTACs, ALFs and similar care environments that require rapid diagnostics and reliable workflow integration.',
      image: '/spec1.jpg'
    },
    {
      id: 'workflow',
      label: 'Workflow Simplification',
      description: 'Reducing administrative burden for clinical teams.',
      headline: 'Dedicated Provider Support',
      content: 'Our team is available to assist with ordering, sample collection guidance, logistics coordination, reporting questions, and ongoing case needs. Providers can expect fast, reliable communication throughout the entire process.',
      image: '/m1.jpg'
    },
    {
      id: 'patient-experience',
      label: 'Improved Patient Experience',
      description: 'Enhancing outcomes across care environments.',
      headline: 'A Dependable Diagnostic Partner',
      content: 'Whether supporting a facility through our integrated Specialized Care programs or providing additional testing options for other healthcare groups, our focus remains on accuracy, efficiency and dependable communication. We work to make diagnostics predictable, fast and clinically meaningful for every provider we serve.',
      image: '/saliva1.jpg'
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
    <main id="main-content" className="bg-[#f7f5ef] text-[#1a1a1a] pt-20 md:pt-28">
      <SubNav />
      
      {/* Hero Section */}
      <section id="overview" className="relative scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            {/* Vertical Divider */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />
            
            {/* Left Column */}
            <div className="lg:pr-12 pb-12 lg:pb-24 pt-16 md:pt-20 lg:pt-32 flex flex-col justify-between min-h-0 lg:min-h-[700px]">
              <h1 className="manrope-light text-5xl md:text-7xl lg:text-7xl tracking-tight leading-[1.1] md:leading-[0.85]">
                For{" "}
                <br className="hidden md:block" />
                Providers
              </h1>
              
              <div className="mt-8 md:mt-10">
                <p className="manrope-regular text-lg md:text-xl text-black/80 max-w-sm leading-relaxed">
                  Seamless Support for Modern Clinical Workflows—empowering providers with reliable logistics, fast PCR reporting, transparent documentation, and hands-on partnership, so you can focus on quality patient care without administrative interruptions.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:pl-12 flex flex-col justify-end pb-16 md:pb-24 pt-8 md:pt-12 lg:pt-32">
              <div className="relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[3/4] w-full rounded-2xl overflow-hidden bg-black/5 group border border-black/5">
                <img
                  src="/z41.jpg"
                  alt="Healthcare providers collaborating"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 border-t border-black/10 scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Mobile View: Vertical List */}
          <div className="lg:hidden space-y-16">
            {sections.map((section) => (
              <div key={section.id} className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center shrink-0">
                    <Check size={16} className="text-black" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="manrope-bold text-xl text-[#1a1a1a] mb-1">{section.label}</h3>
                    <p className="manrope-light text-xs text-black/50 uppercase tracking-widest">
                      {section.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h2 className="red-hat-display-light text-4xl leading-tight tracking-tight text-[#1a1a1a]">
                    {section.headline}
                  </h2>
                  <p className="manrope-regular text-base text-black/70 leading-relaxed">
                    {section.content}
                  </p>
                  
                  {section.id === 'patient-experience' && (
                    <div className="pt-4">
                      <a
                        href="/get-started"
                        className="inline-flex items-center gap-3 group outline-none focus-visible:underline"
                        aria-label="Become a Partner"
                      >
                        <span className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all group-focus-visible:bg-black group-focus-visible:border-black">
                          <span className="text-lg group-hover:text-white group-focus-visible:text-white transition-colors" aria-hidden="true">›</span>
                        </span>
                        <span className="manrope-bold text-base tracking-tight">Become a Partner</span>
                      </a>
                    </div>
                  )}
                </div>
                {section.id !== sections[sections.length - 1].id && (
                  <div className="border-b border-black/5 pt-8" />
                )}
              </div>
            ))}
          </div>

          {/* Desktop View: Side-Nav Style */}
          <div className="hidden lg:grid lg:grid-cols-[400px_1fr] gap-24">
            {/* Sticky Left Nav */}
            <div className="lg:sticky lg:top-44 h-fit">
              <div className="flex flex-col divide-y divide-black/10" role="tablist" aria-label="Provider services">
                {sections.map((section, index) => (
                  <button
                    key={section.id}
                    id={`tab-${section.id}`}
                    role="tab"
                    aria-selected={activeSection === section.id}
                    aria-controls={`panel-${section.id}`}
                    onClick={() => setActiveSection(section.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        const nextIndex = (index + 1) % sections.length;
                        setActiveSection(sections[nextIndex].id);
                        document.getElementById(`tab-${sections[nextIndex].id}`)?.focus();
                      } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        const prevIndex = (index - 1 + sections.length) % sections.length;
                        setActiveSection(sections[prevIndex].id);
                        document.getElementById(`tab-${sections[prevIndex].id}`)?.focus();
                      }
                    }}
                    className={[
                      "group flex items-start gap-6 py-8 transition-all duration-300 text-left outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-4 rounded-xl",
                      activeSection === section.id ? "opacity-100" : "opacity-40 hover:opacity-100"
                    ].join(" ")}
                  >
                    <div className={[
                      "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors",
                      activeSection === section.id ? "bg-[#ede9df]" : "bg-black/5 group-hover:bg-black/10"
                    ].join(" ")}>
                      <Check 
                        size={20} 
                        className={activeSection === section.id ? "text-black" : "text-black/40"} 
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="manrope-bold text-xl text-[#1a1a1a] mb-2">{section.label}</h3>
                      <p className="manrope-light text-sm text-black/60 leading-relaxed">
                        {section.description}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Content Area */}
            <div className="min-h-[600px] flex flex-col pt-8 lg:pt-0">
              {sections.map((section) => (
                <div
                  key={section.id}
                  id={`panel-${section.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${section.id}`}
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
                  
                  <div className="max-w-2xl space-y-12">
                    <p className="manrope-regular text-lg md:text-xl text-black/70 leading-relaxed">
                      {section.content}
                    </p>
                    
                    {activeSection === 'patient-experience' && section.id === 'patient-experience' && (
                      <div className="pt-8">
                        <a
                          href="/get-started"
                          className="inline-flex items-center gap-4 group outline-none focus-visible:underline"
                          aria-label="Become a Partner"
                        >
                          <span className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all group-focus-visible:bg-black group-focus-visible:border-black">
                            <span className="text-xl group-hover:text-white group-focus-visible:text-white transition-colors" aria-hidden="true">›</span>
                          </span>
                          <span className="manrope-bold text-lg tracking-tight">Become a Partner</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits Header */}
      <section id="framework" className="py-16 md:py-24 border-t border-black/10 bg-[#f7f5ef] scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="red-hat-display-light text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight max-w-4xl mb-12 md:mb-16">
            A Unified Framework That Supports All Provider Workflows
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="space-y-8">
              <p className="manrope-regular text-lg text-black/60 max-w-xl leading-relaxed">
                Our integrated model provides a stable diagnostic infrastructure that facilities can rely on each day, strengthening both clinical outcomes and overall operational performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Benefits Grid */}
      <section id="benefits" className="py-20 md:py-32 bg-[#1F271B] text-white scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="red-hat-display-light text-4xl md:text-6xl mb-16 md:mb-24">
            Program Benefits
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 md:gap-y-24">
            {benefits.map((benefit, i) => (
              <div key={i} className="space-y-6 md:space-y-8 border-t border-white/10 pt-8 md:pt-12">
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

      <BecomePartner />
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
    <nav className="fixed top-20 md:top-28 left-0 right-0 z-40 bg-[#f7f5ef]/80 backdrop-blur-md border-b border-black/5 overflow-x-auto no-scrollbar scroll-smooth" aria-label="Page sub-navigation">
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
              className="text-[10px] md:text-xs tracking-widest uppercase manrope-medium text-black/60 hover:text-black transition-colors whitespace-nowrap outline-none focus-visible:underline focus-visible:text-black"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

