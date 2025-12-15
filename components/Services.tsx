'use client'

import { useState } from 'react'
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

  return (
    <section className="relative bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-[#1a1a1a] text-5xl md:text-6xl font-instrument-serif font-normal mb-16 text-center md:text-left">
          Our Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Service Cards */}
          <div className="flex flex-col gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`text-left p-6 rounded-lg transition-all duration-300 relative overflow-hidden ${
                  selectedService === index
                    ? 'bg-gradient-to-br from-white to-gray-50 border-2 border-[#0066cc] shadow-lg'
                    : 'bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-gray-300 shadow-md'
                }`}
              >
                {/* Shiny overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-transparent pointer-events-none" />
                <h3 className="text-[#1a1a1a] text-2xl font-semibold mb-2 relative z-10">
                  {service.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Right Side - Text Card with Background Image */}
          <div className="relative rounded-lg overflow-hidden min-h-[500px]">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={services[selectedService].image}
                alt={services[selectedService].title}
                fill
                className="object-cover"
              />
              {/* Dark Green Tint Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-teal-900/70 to-green-800/80" />
            </div>
            
            {/* Text Content */}
            <div className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-end">
              <h3 className="text-white text-3xl font-instrument-serif font-normal mb-6">
                {services[selectedService].title}
              </h3>
              <p className="text-white text-lg leading-relaxed">
                {services[selectedService].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

