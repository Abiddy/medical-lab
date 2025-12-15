'use client'

import { useState } from 'react'

interface Service {
  title: string
  description: string
}

const services: Service[] = [
  {
    title: 'Specialized Care',
    description: 'Our Specialized Care programs provide facilities with a fully integrated clinical solution across wound care and respiratory care. By partnering with an experienced clinical team, your facility gains support with patient evaluation, treatment planning, biopsy coordination, and ongoing case oversight. These services work alongside our PCR diagnostics, fast logistics, and dedicated provider support to create a seamless, reliable workflow that strengthens care delivery and operational efficiency.'
  },
  {
    title: 'Diagnostics',
    description: 'Our Diagnostics services center around the needs of real facilities—starting with high-value wound care PCR and respiratory/virology testing. We also support broader clinical needs with saliva and genetic panels. Every partner receives streamlined logistics, consistent turnaround times, and a provider onboarding process built to fit directly into your workflow.'
  },
  {
    title: 'Medical Billing',
    description: 'Our Medical Billing services give facilities complete revenue cycle support across all specialties. We handle claims submission, denial management, A/R follow-up, and payer communication, ensuring every encounter is processed accurately and without administrative burden. Providers gain a reliable billing partner that strengthens reimbursement, improves financial stability, and keeps their operations running efficiently.'
  }
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<number>(0)

  return (
    <section className="relative bg-[#1a1a1a] py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-white text-5xl md:text-6xl font-instrument-serif font-normal mb-16 text-center md:text-left">
          Our Services
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Service Cards */}
          <div className="flex flex-col gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`text-left p-6 rounded transition-all duration-300 ${
                  selectedService === index
                    ? 'bg-[#1e3a5f] border-2 border-[#0066cc]'
                    : 'bg-[#2d2d2d] border-2 border-transparent hover:bg-[#3d3d3d]'
                }`}
              >
                <h3 className="text-white text-2xl font-semibold mb-2">
                  {service.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Right Side - Description */}
          <div className="flex items-start lg:items-center min-h-[400px]">
            <div className="bg-[#2d2d2d] rounded-lg p-8 lg:p-12 border border-[#3d3d3d] w-full">
              <h3 className="text-white text-3xl font-instrument-serif font-normal mb-6">
                {services[selectedService].title}
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {services[selectedService].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

