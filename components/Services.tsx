'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface Service {
  title: string
  description: string
  image: string
  category: string
  date: string
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  const services = useMemo<Service[]>(
    () => [
      {
        title: 'Specialized Care',
        category: 'Program',
        date: 'Integrated Clinical Support',
        description:
          'Our Specialized Care programs provide facilities with a fully integrated clinical solution across wound care and respiratory care. By partnering with an experienced clinical team, your facility gains support with patient evaluation, treatment planning, biopsy coordination, and ongoing case oversight.',
        image: '/spec1.jpg',
      },
      {
        title: 'Diagnostics',
        category: 'Laboratory',
        date: 'Rapid Molecular Testing',
        description:
          'Our Diagnostics services center around the needs of real facilities—starting with high-value wound care PCR and respiratory/virology testing. We also support broader clinical needs with saliva and genetic panels.',
        image: '/w1.png',
      },
      {
        title: 'Medical Billing',
        category: 'Revenue Cycle',
        date: 'Complete Billing Solutions',
        description:
          'Our Medical Billing services give facilities complete revenue cycle support across all specialties. We handle claims submission, denial management, A/R follow-up, and payer communication—ensuring every encounter is processed accurately and without administrative burden.',
        image: '/m1.jpg',
      },
    ],
    []
  )

  const activeService = services[activeIndex]

  return (
    <section id="services" className="bg-[#f7f5ef] text-[#1a1a1a] pt-32 pb-40">
      <div className="px-6 lg:px-12 mb-20">
        <h2 className="manrope-light text-6xl md:text-8xl tracking-tight leading-[0.9] mb-4">
          What we <br />deliver
        </h2>
      </div>

      <div className="border-t border-black/10 relative">
        {/* Vertical Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column: Navigation Buttons */}
          <div className="border-b lg:border-b-0 border-black/10">
            <div className="flex flex-col">
              {services.map((service, index) => (
                <button
                  key={service.title}
                  onClick={() => setActiveIndex(index)}
                  className={[
                    "w-full text-left px-6 lg:px-12 py-12 lg:py-20 transition-all border-b border-black/10 last:border-b-0 group",
                    activeIndex === index ? "bg-black/5" : "hover:bg-black/[0.02]"
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={[
                      "manrope-medium text-4xl md:text-5xl lg:text-6xl tracking-tight transition-all",
                      activeIndex === index ? "opacity-100 translate-x-4" : "opacity-30 group-hover:opacity-50"
                    ].join(" ")}>
                      {service.title}
                    </h3>
                    <div className={[
                      "w-12 h-12 rounded-full border border-black/10 flex items-center justify-center transition-all",
                      activeIndex === index ? "bg-black text-white rotate-45" : "opacity-0"
                    ].join(" ")}>
                      →
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/5 border border-black/5 mb-12">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Metadata */}
                <div className="flex items-center gap-8 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                    <span className="manrope-bold text-xs uppercase tracking-widest text-black/40">
                      {activeService.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                    <span className="manrope-bold text-xs uppercase tracking-widest text-black/40">
                      {activeService.date}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="manrope-regular text-lg md:text-xl text-black/65 leading-relaxed max-w-xl mb-12">
                  {activeService.description}
                </p>

                {/* Call to Action */}
                <div>
                  <a 
                    href={`/${activeService.title.toLowerCase().replace(' ', '-')}`}
                    className="inline-flex items-center gap-4 group"
                  >
                    <span className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all">
                      <span className="text-xl group-hover:text-white transition-colors">→</span>
                    </span>
                    <span className="manrope-bold text-lg tracking-tight">Learn more</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
