'use client'

import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { FlaskConical, Globe, ClipboardCheck, Activity, Users, FileText, PieChart, Headset, ShieldCheck } from 'lucide-react'

interface Feature {
  description: string
  icon: any
}

interface Service {
  title: string
  description: string
  image: string
  features: Feature[]
}

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)

  const services = useMemo<Service[]>(
    () => [
      {
        title: 'Specialized Care',
        description:
          'Our Specialized Care programs provide facilities with a fully integrated clinical solution across wound care and respiratory care.',
        image: '/spec1.jpg',
        features: [
          {
            description: 'Patient evaluation and treatment planning with experienced clinical teams.',
            icon: Activity
          },
          {
            description: 'Biopsy coordination and ongoing case oversight for complex wound care.',
            icon: Users
          },
          {
            description: 'Full integration with facility staff to deliver higher quality care.',
            icon: ClipboardCheck
          }
        ]
      },
      {
        title: 'Diagnostics',
        description:
          'Our Diagnostics services center around the needs of real facilities—starting with high-value wound care PCR and respiratory testing.',
        image: '/z32.jpg',
        features: [
          {
            description: 'High-value wound care PCR and respiratory/virology testing solutions.',
            icon: FlaskConical
          },
          {
            description: 'Support for broader clinical needs with saliva and genetic panels.',
            icon: Globe
          },
          {
            description: 'Accurate, timely results to inform critical clinical decisions.',
            icon: ShieldCheck
          }
        ]
      },
      {
        title: 'Medical Billing',
        description:
          'Our Medical Billing services give facilities complete revenue cycle support across all specialties.',
        image: '/m1.jpg',
        features: [
          {
            description: 'Complete revenue cycle support from claims submission to payment.',
            icon: FileText
          },
          {
            description: 'Expert denial management and A/R follow-up to maximize recovery.',
            icon: PieChart
          },
          {
            description: 'Dedicated support team for payer communication and administrative tasks.',
            icon: Headset
          }
        ]
      },
    ],
    []
  )

  const activeService = services[activeIndex]

  return (
    <section id="services" className="bg-[#f7f5ef] text-[#1a1a1a] pt-24 md:pt-32">
      <div className="px-6 lg:px-12 mb-12 md:mb-16">
        <h2 className="manrope-light text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] md:leading-[0.9]">
          What we <br className="hidden md:block" />deliver
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row min-h-[800px] border-t border-black/10">
        {/* Sidebar */}
        <div className="w-full lg:w-[400px] border-b lg:border-b-0 lg:border-r border-black/10 bg-[#f7f5ef]">
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible no-scrollbar p-6 lg:p-10 space-y-3">
            {services.map((service, index) => (
              <button
                key={service.title}
                onClick={() => setActiveIndex(index)}
                className={[
                  "flex-1 lg:w-full flex items-center justify-between px-6 lg:px-10 py-5 lg:py-6 transition-all whitespace-nowrap lg:whitespace-normal group rounded-xl",
                  activeIndex === index ? "bg-[#ede9e1]" : "hover:bg-[#ede9e1]/30 text-black/40"
                ].join(" ")}
              >
                <span className="manrope-medium text-lg lg:text-xl tracking-tight transition-all">
                  {service.title}
                </span>
                <span className={[
                  "hidden lg:block text-black text-2xl transition-all duration-300",
                  activeIndex === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                ].join(" ")}>
                  ›
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-[#f7f5ef]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 xl:grid-cols-12 h-full"
            >
              {/* Image Section */}
              <div className="xl:col-span-6 p-8 lg:p-12 xl:p-16 flex items-start justify-center">
                <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden ring-1 ring-black/5">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="xl:col-span-6 flex flex-col">
                <div className="p-8 lg:p-12 xl:p-16 pb-8 md:pb-12 xl:pb-16">
                  <h3 className="manrope-medium text-2xl md:text-3xl lg:text-4xl leading-[1.2] tracking-tight text-black/90 mb-12 lg:mb-16">
                    {activeService.description}
                  </h3>

                  <div className="space-y-0 -mx-8 lg:-mx-12 xl:-mx-16 border-b border-black/10">
                    {activeService.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex gap-4 px-8 py-4 lg:px-12 lg:py-5 xl:px-16 xl:py-5 border-t border-black/10 group hover:bg-black/[0.01] transition-colors"
                      >
                        <div className="flex-shrink-0 w-9 h-9 rounded-lg border border-black/10 bg-white flex items-center justify-center shadow-sm group-hover:border-black/20 transition-all">
                          <feature.icon size={16} strokeWidth={1.5} className="text-black/80" />
                        </div>
                        <div className="pt-1">
                          <p className="manrope-regular text-sm md:text-base text-black/65 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
