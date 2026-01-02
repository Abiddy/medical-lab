'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'

interface ServiceLink {
  label: string
  href: string
}

interface Service {
  title: string
  description: string
  image: string
  links: ServiceLink[]
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  const services = useMemo<Service[]>(
    () => [
      {
        title: 'Specialized Care',
        description:
          'Our Specialized Care programs provide facilities with a fully integrated clinical solution across wound care and respiratory care. By partnering with an experienced clinical team, your facility gains support with patient evaluation, treatment planning, biopsy coordination, and ongoing case oversight.',
        image: '/spec1.jpg',
        links: [
          { label: 'Wound Care Program', href: '/wound-care' },
          { label: 'Respiratory Care Program', href: '/respiratory-care' }
        ]
      },
      {
        title: 'Diagnostics',
        description:
          'Our Diagnostics services center around the needs of real facilities—starting with high-value wound care PCR and respiratory/virology testing. We also support broader clinical needs with saliva and genetic panels.',
        image: '/w1.png',
        links: [
          { label: 'Saliva Testing', href: '/hormone-testing' },
          { label: 'Genetic Testing', href: '/genetic-testing' }
        ]
      },
      {
        title: 'Medical Billing',
        description:
          'Our Medical Billing services give facilities complete revenue cycle support across all specialties. We handle claims submission, denial management, A/R follow-up, and payer communication—ensuring every encounter is processed accurately and without administrative burden.',
        image: '/m1.jpg',
        links: [
          { label: 'Overview', href: '/medical-billing' }
        ]
      },
    ],
    []
  )

  const activeService = services[activeIndex]

  return (
    <section id="services" className="bg-[#f7f5ef] text-[#1a1a1a] pt-20 md:pt-32 pb-24 md:pb-40">
      <div className="px-6 lg:px-12 mb-12 md:mb-20">
        <h2 className="manrope-light text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] md:leading-[0.9] mb-4">
          What we <br className="hidden md:block" />deliver
        </h2>
      </div>

      <div className="border-t border-black/10 relative">
        {/* Vertical Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column: Navigation Buttons */}
          <div className="border-b lg:border-b-0 border-black/10 overflow-x-auto">
            <div className="flex lg:flex-col min-w-full">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  onClick={() => setActiveIndex(index)}
                  className={[
                    "flex-1 lg:w-full text-center lg:text-left px-4 md:px-6 lg:px-12 py-6 md:py-12 lg:py-20 transition-all border-r lg:border-r-0 lg:border-b border-black/10 last:border-r-0 lg:last:border-b-0 group whitespace-nowrap lg:whitespace-normal",
                    activeIndex === index ? "bg-black/5" : "hover:bg-black/[0.02]"
                  ].join(" ")}
                >
                  <div className="flex items-center justify-center lg:justify-between">
                    <h3 className={[
                      "manrope-medium text-xs md:text-lg lg:text-4xl tracking-tight transition-all",
                      activeIndex === index ? "opacity-100 lg:translate-x-4" : "opacity-30 group-hover:opacity-50"
                    ].join(" ")}>
                      {service.title}
                    </h3>
                    <div className={[
                      "hidden lg:flex w-10 h-10 rounded-full border border-black/10 items-center justify-center transition-all",
                      activeIndex === index ? "bg-black text-white" : "opacity-0"
                    ].join(" ")}>
                      <span className="text-lg font-light">›</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Content Display */}
          <div className="px-6 lg:px-12 py-12 lg:py-20">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-xl md:rounded-2xl overflow-hidden bg-black/5 border border-black/5 mb-8 md:mb-12">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Metadata / Links Area */}
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-6 md:mb-8">
                  {activeService.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="flex items-center gap-2 group/link"
                    >
                      <span className="manrope-bold text-[10px] md:text-xs uppercase tracking-widest text-[#1a1a1a] group-hover/link:opacity-60 transition-all">
                        {link.label}
                      </span>
                      <ArrowUpRight size={14} className="text-[#1a1a1a] group-hover/link:opacity-60 transition-all" />
                    </a>
                  ))}
                </div>

                {/* Description */}
                <p className="manrope-regular text-base md:text-lg lg:text-xl text-black/65 leading-relaxed max-w-xl">
                  {activeService.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
