'use client'

import { useMemo } from 'react'
import { motion } from 'motion/react'

interface Service {
  title: string
  description: string
  image: string
  category: string
  date: string
}

export default function Services() {
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

  return (
    <section id="services" className="bg-[#f7f5ef] text-[#1a1a1a] pt-32 pb-40">
      <div className="px-6 lg:px-12 mb-20">
        <h2 className="font-instrument-serif text-6xl md:text-8xl tracking-tight leading-[0.9] mb-4">
          What we <br />deliver
        </h2>
      </div>

      <div className="border-t border-black/10">
        {services.map((service, index) => {
          const isEven = index % 2 === 1
          return (
            <div key={service.title} className="border-b border-black/10 relative">
              {/* Vertical Line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />

              <div className="px-6 lg:px-12 py-20 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                  
                  {/* Image Column */}
                  <div className={[
                    "relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/5 border border-black/5",
                    isEven ? "lg:order-2" : "lg:order-1"
                  ].join(" ")}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Column */}
                  <div className={[
                    "flex flex-col",
                    isEven ? "lg:order-1 lg:pr-12" : "lg:order-2 lg:pl-12"
                  ].join(" ")}>
                    {/* Metadata */}
                    <div className="flex items-center gap-8 mb-12">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                        <span className="manrope-bold text-xs uppercase tracking-widest text-black/40">
                          {service.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-black/40" />
                        <span className="manrope-bold text-xs uppercase tracking-widest text-black/40">
                          {service.date}
                        </span>
                      </div>
                    </div>

                    {/* Headline */}
                    <h3 className="manrope-medium text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05] mb-12">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="manrope-regular text-lg md:text-xl text-black/65 leading-relaxed max-w-xl">
                      {service.description}
                    </p>

                    {/* Call to Action */}
                    <div className="mt-12">
                      <a 
                        href={`/${service.title.toLowerCase().replace(' ', '-')}`}
                        className="inline-flex items-center gap-4 group"
                      >
                        <span className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black transition-all">
                          <span className="text-xl group-hover:text-white transition-colors">→</span>
                        </span>
                        <span className="manrope-bold text-lg tracking-tight">Learn more</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
