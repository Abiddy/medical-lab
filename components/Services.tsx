'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

interface Service {
  title: string
  description: string
}

export default function Services() {
  const services = useMemo<Service[]>(
    () => [
      {
        title: 'Specialized Care',
        description:
          'Our Specialized Care programs provide facilities with a fully integrated clinical solution across wound care and respiratory care. By partnering with an experienced clinical team, your facility gains support with patient evaluation, treatment planning, biopsy coordination, and ongoing case oversight. These services work alongside our PCR diagnostics, fast logistics, and dedicated provider support to create a seamless, reliable workflow that strengthens care delivery and operational efficiency.',
      },
      {
        title: 'Diagnostics',
        description:
          'Our Diagnostics services center around the needs of real facilities—starting with high-value wound care PCR and respiratory/virology testing. We also support broader clinical needs with saliva and genetic panels. Every partner receives streamlined logistics, consistent turnaround times, and a provider onboarding process built to fit directly into your workflow.',
      },
      {
        title: 'Medical Billing',
        description:
          'Our Medical Billing services give facilities complete revenue cycle support across all specialties. We handle claims submission, denial management, A/R follow-up, and payer communication, ensuring every encounter is processed accurately and without administrative burden. Providers gain a reliable billing partner that strengthens reimbursement, improves financial stability, and keeps their operations running efficiently.',
      },
    ],
    []
  )

  const sectionRef = useRef<HTMLElement>(null)
  const cardRefs = useRef<Array<HTMLElement | null>>([])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const root = sectionRef.current
    const targets = cardRefs.current.filter(Boolean) as HTMLElement[]
    if (!root || targets.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top ?? 0) - (b.boundingClientRect.top ?? 0))

        if (visible.length === 0) return
        const idx = Number((visible[0].target as HTMLElement).dataset.index ?? 0)
        setActiveIndex(idx)
      },
      {
        root: null,
        threshold: 0.55,
        rootMargin: '-35% 0px -45% 0px',
      }
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-white mt-40">
      {/* Sticky header + horizontal divider */}
      <div className="sticky top-20 z-20 bg-white">
        <div className="mx-auto px-9 pt-16 pb-10">
          <h2 className="font-inter text-[#1a1a1a] text-4xl md:text-6xl font-light tracking-tight">
            Our Services
          </h2>
        </div>
        <div className="border-t border-black/10" />
      </div>

      <div className="mx-auto px-10 lg:px-8">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Vertical center divider (starts under the sticky header line) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />

          {/* Left column: sticky titles */}
          <div className="relative">
            <div className="lg:sticky lg:top-44 pt-10 pb-10">
              <div className="space-y-6">
                {services.map((s, idx) => (
                  <button
                    key={s.title}
                    type="button"
                    onClick={() =>
                      cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                    className="text-left w-full"
                    aria-current={activeIndex === idx ? 'true' : 'false'}
                  >
                    <div
                      className={[
                        'font-inter text-lg md:text-xl leading-snug transition-colors',
                        activeIndex === idx
                          ? 'text-[#1a1a1a]'
                          : 'text-[#1a1a1a]/55 hover:text-[#1a1a1a]/80',
                      ].join(' ')}
                    >
                      {s.title}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-10 border-t border-black/10" />
            </div>
          </div>

          {/* Right column: scrollable content (NOT sticky) */}
          <div className="relative lg:pl-12 py-10 lg:py-16 space-y-10">
            {services.map((s, idx) => (
              <article
                key={s.title}
                ref={(el) => {
                  cardRefs.current[idx] = el
                }}
                data-index={idx}
                className="scroll-mt-56"
              >
                <div className="rounded-2xl bg-[#e7dfd3] border border-black/5 p-7 md:p-9 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
                  <p className="font-inter text-[17px] md:text-[18px] leading-relaxed text-[#1a1a1a]/90">
                    {s.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="pb-24" />
      </div>
    </section>
  )
}
