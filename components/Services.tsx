'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Service {
  title: string
  description: string
  image: string
}

const services: Service[] = [
  {
    title: 'Specialized Care',
    description: 'Our Specialized Care programs provide facilities with a fully integrated clinical solution across wound care and respiratory care. By partnering with an experienced clinical team, your facility gains support with patient evaluation, treatment planning, biopsy coordination, and ongoing case oversight. These services work alongside our PCR diagnostics, fast logistics, and dedicated provider support to create a seamless, reliable workflow that strengthens care delivery and operational efficiency.',
    image: '/s1.jpg'
  },
  {
    title: 'Diagnostics',
    description: 'Our Diagnostics services center around the needs of real facilities—starting with high-value wound care PCR and respiratory/virology testing. We also support broader clinical needs with saliva and genetic panels. Every partner receives streamlined logistics, consistent turnaround times, and a provider onboarding process built to fit directly into your workflow.',
    image: '/s2.jpg'
  },
  {
    title: 'Medical Billing',
    description: 'Our Medical Billing services give facilities complete revenue cycle support across all specialties. We handle claims submission, denial management, A/R follow-up, and payer communication, ensuring every encounter is processed accurately and without administrative burden. Providers gain a reliable billing partner that strengthens reimbursement, improves financial stability, and keeps their operations running efficiently.',
    image: '/s3.jpg'
  }
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<number>(0)
  const [isFading, setIsFading] = useState<boolean>(false)

  const handleServiceChange = (index: number) => {
    if (index !== selectedService) {
      setIsFading(true)
      setTimeout(() => {
        setSelectedService(index)
        setIsFading(false)
      }, 200) // Half of transition duration
    }
  }

  return (
    <section className="relative bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-[#1a1a1a] text-4xl red-hat-display-medium font-light mb-16 text-center md:text-left">
          Our Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Service Cards */}
          <div className="flex flex-col gap-4">
            {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => handleServiceChange(index)}
                    className={`text-left px-2 py-20 md:px-8 md:py-10 rounded-3xl transition-all duration-300 h-[190px] relative overflow-hidden ${
                      selectedService === index
                        ? 'border-2 border-blue-400 shadow-lg'
                        : 'border border-blue-200/50 hover:border-blue-300/50 shadow-md'
                    }`}
                    style={{
                      background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #e0f2fe 100%)',
                      backgroundImage: `
                        linear-gradient(135deg, #3b82f6 0%, #60a5fa 50%, #e0f2fe 100%),
                        url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.2'/%3E%3C/svg%3E")
                      `,
                      backgroundBlendMode: 'overlay',
                    }}
                  >
                    <h3 className="text-white text-2xl font-red-hat-display font-normal relative z-10">
                      {service.title}
                    </h3>
                  </button>
            ))}
          </div>

          {/* Right Side - Text Card with Background Image */}
          <div className="relative rounded-3xl overflow-hidden min-h-[500px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={services[selectedService].image}
                alt={services[selectedService].title}
                fill
                className={`object-cover transition-opacity duration-500 ease-in-out ${
                  isFading ? 'opacity-0' : 'opacity-100'
                }`}
              />
              {/* Dark Green Tint Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-green-900/80 via-teal-900/70 to-green-800/80 transition-opacity duration-500 ease-in-out ${
                isFading ? 'opacity-0' : 'opacity-100'
              }`} />
            </div>
            
            {/* Text Content */}
            <div className={`relative z-10 p-8 lg:p-12 h-full flex flex-col justify-end transition-all duration-500 ease-in-out ${
              isFading 
                ? 'opacity-0 scale-95 blur-sm' 
                : 'opacity-100 scale-100 blur-0'
            }`}>
                      <h3 className="text-white text-3xl font-red-hat-display font-normal mb-6">
                        {services[selectedService].title}
                      </h3>
                      <p className="text-white text-sm font-light font-manrope tracking-tight leading-relaxed">
                        {services[selectedService].description}
                      </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

