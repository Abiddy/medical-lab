'use client'

import { useMemo, useState } from 'react'

interface Service {
  title: string
  description: string
  image: string
  bullets: Array<{ title: string; description: string }>
}

export default function Services() {
  const services = useMemo<Service[]>(
    () => [
      {
        title: 'Specialized Care',
        description:
          'Our Specialized Care programs provide facilities with a fully integrated clinical solution across wound care and respiratory care. By partnering with an experienced clinical team, your facility gains support with patient evaluation, treatment planning, biopsy coordination, and ongoing case oversight.',
        image: '/spec1.jpg',
        bullets: [
          {
            title: 'Clinical coverage',
            description: 'Patient evaluation, biopsy coordination, and case oversight integrated into facility workflows.',
          },
          {
            title: 'Same-day diagnostics',
            description: 'Rapid PCR results with streamlined logistics and consistent reporting.',
          },
        ],
      },
      {
        title: 'Diagnostics',
        description:
          'Our Diagnostics services center around the needs of real facilities—starting with high-value wound care PCR and respiratory/virology testing. We also support broader clinical needs with saliva and genetic panels.',
        image: '/s2-optimized.jpg',
        bullets: [
          {
            title: 'Facility-first testing',
            description: 'Panels built for wound care, respiratory, and broader clinical needs.',
          },
          {
            title: 'Operational simplicity',
            description: 'Supplies, logistics, and onboarding designed to fit directly into your workflow.',
          },
        ],
      },
      {
        title: 'Medical Billing',
        description:
          'Our Medical Billing services give facilities complete revenue cycle support across all specialties. We handle claims submission, denial management, A/R follow-up, and payer communication—without administrative burden.',
        image: '/s3-optimized.jpg',
        bullets: [
          {
            title: 'Revenue cycle support',
            description: 'Accurate submission, denial management, and payer follow-up across specialties.',
          },
          {
            title: 'Financial stability',
            description: 'Improved reimbursement and predictable operations with a dedicated billing partner.',
          },
        ],
      },
    ],
    []
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const active = services[activeIndex]

  return (
    <section id="services" className="bg-[#f7f5ef] text-[#1a1a1a] mt-40">
      <div className="mx-auto px-9 pt-24 pb-12">
        <h2 className="red-hat-display-light text-6xl md:text-7xl tracking-tight leading-[0.95] max-w-4xl">
          Our Services
        </h2>
      </div>

      <div className="border-t border-black/10" />

      <div className="mx-auto px-9">
        <div className="relative grid grid-cols-1 lg:grid-cols-[360px_1fr]">
          <div className="hidden lg:block absolute left-[360px] top-0 bottom-0 w-px bg-black/10" />

          {/* Left: service tabs */}
          <div className="py-12 lg:py-16 lg:pr-10">
            <div className="space-y-4">
              {services.map((s, idx) => {
                const isActive = idx === activeIndex
                return (
                  <button
                    key={s.title}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={[
                      'w-full text-left rounded-xl border transition-colors flex items-center justify-between px-5 py-4',
                      isActive
                        ? 'bg-[#e7dfd3] border-black/10'
                        : 'bg-transparent border-transparent hover:bg-black/5',
                    ].join(' ')}
                    aria-current={isActive ? 'true' : 'false'}
                  >
                    <span className={['font-inter text-lg', isActive ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/70'].join(' ')}>
                      {s.title}
                    </span>
                    <span className={['text-2xl', isActive ? 'text-[#1a1a1a]' : 'text-[#1a1a1a]/40'].join(' ')}>
                      ›
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right: content */}
          <div className="py-12 lg:py-16 lg:pl-14">
            <div key={active.title} className="animate-in fade-in slide-in-from-bottom-2 duration-200">
              <div className="grid grid-cols-1 xl:grid-cols-[520px_1fr] gap-10 xl:gap-14 items-start">
                <div className="relative w-full rounded-2xl overflow-hidden border border-black/10 bg-black/5 aspect-[3/4]">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div>
                  <p className="red-hat-display-light text-2xl md:text-2xl leading-[1.05] tracking-tight text-[#1a1a1a]">
                    {active.description}
                  </p>

                  <div className="mt-10 border-t border-black/10" />

                  <div className="mt-8 space-y-5">
                    {active.bullets.map((b) => (
                      <div key={b.title} className="flex items-start gap-4">
                        <div className="h-11 w-11 rounded-xl border border-black/15 bg-[#f7f5ef] flex items-center justify-center text-[#1a1a1a]/70">
                          ✦
                        </div>
                        <div className="flex-1">
                          <div className="font-inter text-base text-[#1a1a1a]">{b.title}</div>
                          <div className="mt-1 font-inter text-sm text-[#1a1a1a]/65 leading-relaxed">
                            {b.description}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-24" />
      </div>
    </section>
  )
}
