'use client'

import { useEffect, useRef, useState } from 'react'

const facilities = [
  'Skilled Nursing Facilities',
  'Nursing Homes',
  'Long Term Acute Care Facilities',
  'Assisted Living Facilities',
  'Urgent Care Centers',
  'Primary Care and Specialty Clinics',
  'Wound Care Teams and Mobile Provider Groups',
  'Pharmacies and Wellness Centers',
  'Telemedicine and Virtual Care Organizations'
]

function FacilityCard({ facility, index }: { facility: string; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

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
      className={`bg-white border border-[0.1px] border-gray-100 p-8 flex items-center justify-center text-center transition-all duration-700 hover:bg-gray-100 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 0.05}s` }}
    >
      <h3 className="red-hat-display-medium text-lg md:text-xl text-black">
        {facility}
      </h3>
    </div>
  )
}

export default function WhoWeSupport() {
  return (
    <section className="relative bg-gray-50 py-24 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="red-hat-display-light text-2xl font-light text-black mb-6">
            Who We Support
          </h2>
          <p className="manrope-regular text-small md:text-sm text-black max-w-3xl mx-auto">
            We partner with healthcare facilities across multiple care settings to deliver comprehensive diagnostic and billing solutions.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-gray-100 border-[0.1px]">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} facility={facility} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

