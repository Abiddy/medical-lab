'use client'

import { useState } from 'react'

export default function MedicalBillingPage() {
  const categories = [
    { label: 'All', id: 'all' },
    { label: 'Revenue Cycle', id: 'rcm' },
    { label: 'Billing & Coding', id: 'billing' },
    { label: 'Authorization', id: 'auth' },
  ]

  const [activeCategory, setActiveCategory] = useState('all')

  const services = [
    {
      title: 'Revenue Cycle Management',
      category: 'Revenue Cycle',
      date: 'Dec 6, 2024',
      image: '/billing1.jpg',
      href: '/medical-billing/revenue-cycle',
      description: 'Comprehensive management of the administrative and clinical functions that contribute to patient revenue.'
    },
    {
      title: 'Medical Billing and Coding',
      category: 'Billing & Coding',
      date: 'Jul 20, 2024',
      image: '/billing2.jpg',
      href: '/medical-billing/coding-billing',
      description: 'Accurate translation of healthcare services into universal medical alphanumeric codes for billing.'
    },
    {
      title: 'Prior Authorization',
      category: 'Authorization',
      date: 'Jul 20, 2024',
      image: '/billing3.jpg',
      href: '/medical-billing/prior-authorization',
      description: 'Streamlined process to obtain approval from health insurance providers before services are rendered.'
    },
    {
      title: 'Eligibility Verification',
      category: 'Revenue Cycle',
      date: 'Jul 20, 2024',
      image: '/billing4.jpg',
      href: '/medical-billing/eligibility-verification',
      description: 'Real-time verification of patient insurance coverage and benefits to prevent claim denials.'
    },
    {
      title: 'Accounts Receivable',
      category: 'Revenue Cycle',
      date: 'Dec 5, 2024',
      image: '/billing5.jpg',
      href: '/medical-billing/accounts-receivable',
      description: 'Systematic tracking and follow-up on outstanding claims to ensure timely reimbursement.'
    },
    {
      title: 'Denial Management',
      category: 'Billing & Coding',
      date: 'Jul 20, 2024',
      image: '/billing6.jpg',
      href: '/medical-billing/denial-management',
      description: 'Strategic analysis and resolution of denied claims to maximize revenue recovery.'
    },
    {
      title: 'Credentialing',
      category: 'Revenue Cycle',
      date: 'Oct 12, 2024',
      image: '/billing7.jpg',
      href: '/medical-billing/credentialing',
      description: 'Expert management of provider enrollment and primary source verification with insurance payers.'
    },
  ]

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory === 'all')

  return (
    <main className="bg-[#f7f5ef] text-[#1a1a1a] pt-20 md:pt-28">

      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16">
        <div className="mx-auto px-6 lg:px-8">
          <h1 className="manrope-light text-6xl md:text-6xl lg:text-6xl tracking-tight leading-none text-black/90">
            Medical Billing
          </h1>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="border-t border-black/5 pb-32">
        <div className="mx-auto px-6 lg:px-8 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredServices.map((service, idx) => (
              <a key={idx} href={service.href} className="group cursor-pointer block">
                {/* Image Container */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-black/5 border border-black/5 mb-6">
                  <img
                    src="/z15.jpg"
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/40" />
                    <span className="text-[11px] tracking-widest uppercase manrope-bold text-black/50">
                      {service.category}
                    </span>
                  </div>
                  <span className="text-[11px] tracking-widest uppercase manrope-medium text-black/30">
                    &bull; {service.date}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-2xl manrope-medium text-black/90 leading-tight group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm manrope-regular text-black/60 leading-relaxed max-w-sm">
                  {service.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

