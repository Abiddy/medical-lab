'use client'

import { useEffect, useRef, useState } from 'react'
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
    image: '/s1-optimized.jpg'
  },
  {
    title: 'Diagnostics',
    description: 'Our Diagnostics services center around the needs of real facilities—starting with high-value wound care PCR and respiratory/virology testing. We also support broader clinical needs with saliva and genetic panels. Every partner receives streamlined logistics, consistent turnaround times, and a provider onboarding process built to fit directly into your workflow.',
    image: '/s2-optimized.jpg'
  },
  {
    title: 'Medical Billing',
    description: 'Our Medical Billing services give facilities complete revenue cycle support across all specialties. We handle claims submission, denial management, A/R follow-up, and payer communication, ensuring every encounter is processed accurately and without administrative burden. Providers gain a reliable billing partner that strengthens reimbursement, improves financial stability, and keeps their operations running efficiently.',
    image: '/s3-optimized.jpg'
  }
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isEven = index % 2 === 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
        isEven ? '' : 'lg:grid-flow-dense'
      } ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Text Content */}
      <div className={`space-y-6 ${isEven ? '' : 'lg:col-start-2'}`}>
        <h3 className="red-hat-display-bold text-3xl md:text-4xl lg:text-3xl font-normal text-black">
          {service.title}
        </h3>
        <p className="manrope-regular text-base md:text-lg text-gray-700 leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Image */}
      <div className={`relative h-[200px] md:h-[500px] lg:h-[300px] rounded-2xl overflow-hidden ${
        isEven ? '' : 'lg:col-start-1 lg:row-start-1'
      }`}>
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          quality={85}
          sizes="(max-width: 400px) 100vw, 50vw"
        />
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section className="relative bg-white py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-[#1a1a1a] text-4xl md:text-5xl red-hat-display-light font-light mb-20 md:mb-32">
          Our Services
        </h2>

        {/* Services List */}
        <div className="space-y-32 md:space-y-40">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
