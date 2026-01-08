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
          <h1 className="manrope-light text-5xl md:text-6xl lg:text-7xl tracking-tight leading-none text-black/90">
            Medical Billing
          </h1>
          <p className="mt-8 manrope-light text-xl text-black/50 max-w-2xl">
            Comprehensive revenue cycle solutions designed to protect your practice and support patient care.
          </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="border-t border-black/10 pb-32">
        <div className="mx-auto px-6 lg:px-8 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, idx) => (
              <a 
                key={idx} 
                href={service.href} 
                className="group cursor-pointer block p-8 md:p-10 rounded-2xl bg-white border border-black/5 hover:border-black/10 transition-all duration-300 hover:shadow-sm"
              >
                {/* Meta */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/20" />
                    <span className="text-[10px] tracking-widest uppercase manrope-bold text-black/40">
                      {service.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl md:text-3xl manrope-medium text-black/90 leading-tight mb-4 group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-base manrope-light text-black/60 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-12 flex items-center gap-2 text-[11px] manrope-bold uppercase tracking-widest text-black/40 group-hover:text-black transition-colors">
                  View Service
                  <span className="text-lg transition-transform group-hover:translate-x-1">›</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

