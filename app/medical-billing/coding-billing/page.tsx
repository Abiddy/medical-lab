'use client'

import React from 'react'

export default function CodingBillingPage() {
  return (
    <main className="bg-[#f7f5ef] text-[#1a1a1a] pt-28">
      <SubNav />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h1 className="manrope-light text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none text-black/90 mb-8">
                Medical Billing & Coding
              </h1>
              <p className="manrope-light text-xl md:text-2xl text-black/60 max-w-xl leading-relaxed">
                Accurate Documentation. Clean Claims. Faster Reimbursement.
              </p>
            </div>
            <div className="hidden lg:block border-l border-black/5 pl-12">
              <div className="aspect-[4/3] bg-black/5 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-200" /> {/* Placeholder */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="py-24 border-t border-black/5 scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-black/20" />
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">Overview</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-8 leading-tight">
                Removing the administrative burden while ensuring accuracy.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed">
                At BDL, we provide professional Medical Billing & Coding services designed to simplify your workflow and support the financial health of your practice. Our goal is to remove the administrative burden from your team while ensuring every service you perform is coded correctly, billed accurately, and paid on time.
              </p>
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed">
                Medical billing and coding is becoming increasingly complex—with evolving CPT, HCPCS, and ICD-10 guidelines, payer-specific rules, and growing compliance requirements. BDL provides the expertise, technology, and oversight needed to reduce errors, prevent denials, and streamline your entire reimbursement process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why it Matters Section (Dark Green Background) */}
      <section id="why-it-matters" className="py-24 bg-[#1a2b23] text-white scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[3/4] bg-white/5 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-white/10" /> {/* Placeholder */}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-6 text-white/40">
                <span className="w-2 h-2 rounded-full bg-current" />
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold">Value Proposition</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl mb-10 leading-tight">
                Why Medical Billing & Coding Matters
              </h2>
              <div className="space-y-6">
                <p className="manrope-light text-base md:text-lg text-white/75 mb-8">
                  Accurate coding is the foundation of clean claims and proper reimbursement. When managed effectively, it delivers:
                </p>
                <ul className="space-y-4">
                  {[
                    'Fewer denials and rejections',
                    'Faster payments from insurers',
                    'Precise documentation and charge capture',
                    'Lower administrative workload',
                    'Protected compliance with regulatory standards'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/85 manrope-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-10 manrope-light text-base md:text-lg text-white/70 italic">
                  With BDL managing your billing and coding, your practice gains efficiency and financial stability while you stay focused on patient care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BDL’s Approach Section */}
      <section id="approach" className="py-24 border-t border-black/5 scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-black/20" />
              <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">Our Approach</span>
            </div>
            <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-6">
              Modern Technology & Certified Experts
            </h2>
            <p className="manrope-light text-base md:text-lg text-black/65">
              We combine experienced specialists with modern technology to ensure that your claims move through the system smoothly and accurately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Coding Accuracy You Can Trust',
                desc: 'Our certified coding professionals stay fully updated on CPT, HCPCS, and ICD-10 changes—ensuring every service is captured correctly the first time.'
              },
              {
                step: '02',
                title: 'Technology-Driven Efficiency',
                desc: 'BDL uses advanced billing software and integrated systems to automate workflows, minimize manual entry, and reduce the risk of costly mistakes.'
              },
              {
                step: '03',
                title: 'End-to-End Claims Oversight',
                desc: 'From coding and charge entry to follow-up and appeals, we monitor every step to ensure nothing falls through the cracks.'
              },
              {
                step: '04',
                title: 'Specialty-Focused Expertise',
                desc: 'Whether you work in primary care, diagnostics, wound care, or behavioral health, our team brings the detailed coding knowledge required for your field.'
              },
              {
                step: '05',
                title: 'Compliance at Every Step',
                desc: 'We maintain strict adherence to HIPAA, payer compliance rules, and federal billing standards—protecting your practice from costly penalties.'
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white border border-black/5 hover:border-black/10 transition-all duration-300">
                <span className="block text-3xl manrope-light text-black/10 group-hover:text-black/20 transition-colors mb-6">{item.step}</span>
                <h3 className="manrope-bold text-lg text-black/90 mb-4">{item.title}</h3>
                <p className="manrope-light text-sm text-black/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How BDL Strengthens Section */}
      <section id="strengthening" className="py-24 border-t border-black/5 bg-[#f0ede4] scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-black/20" />
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">Financial Workflow</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-10 leading-tight">
                How BDL Strengthens Your Financial Workflow
              </h2>
              <div className="space-y-4">
                {[
                  'Consistently clean and complete claim submissions',
                  'Minimized denials and reduced claim rework',
                  'Accurate payment posting and documentation review',
                  'Clear patient statements and billing support',
                  'Full visibility into practice performance through reporting and analytics'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-black/5 bg-white/50 backdrop-blur-sm">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                    <span className="manrope-medium text-black/75 text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="aspect-square bg-black/5 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-200" /> {/* Placeholder */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outsourcing Section */}
      <section id="outsource" className="py-24 border-t border-black/5 scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-black/20" />
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">Outsourcing Benefits</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-10 leading-tight">
                Why Practices Choose to Outsource Billing & Coding
              </h2>
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed mb-8">
                Handling billing internally can be time-consuming, expensive, and prone to errors. Outsourcing to BDL allows your practice to:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                'Reduce administrative strain',
                'Lower staffing and training costs',
                'Improve revenue flow and financial predictability',
                'Reallocate time and resources back to patient care',
                'Access certified specialists without managing an in-house team'
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#e7dfd3] border border-black/5">
                  <span className="manrope-medium text-black/85 text-base leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 p-12 rounded-2xl bg-black text-white text-center">
            <p className="manrope-light text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
              If your practice is experiencing delayed payments, increasing denials, inconsistent documentation, or administrative overload, outsourcing can make an immediate and measurable difference.
            </p>
          </div>
        </div>
      </section>

      {/* Provider Support Section */}
      <section id="provider-support" className="py-24 border-t border-black/5 scroll-mt-44 bg-[#1F271B] text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-white/5 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-white/10" /> {/* Placeholder */}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-6 text-white/40">
                <span className="w-2 h-2 rounded-full bg-current" />
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold">Expertise</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl mb-10 leading-tight">
                Supporting Providers Through Expertise
              </h2>
              <p className="manrope-light text-base md:text-lg text-white/75 mb-10 leading-relaxed">
                By partnering with BDL, physicians and healthcare organizations benefit from:
              </p>
              <div className="space-y-4">
                {[
                  'Accurate coding that captures the full value of services',
                  'On-time billing that prevents revenue leakage',
                  'Reliable follow-up and denial management',
                  'Reduced paperwork for clinical staff',
                  'Peace of mind knowing your revenue is fully protected'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/30 shrink-0" />
                    <span className="manrope-medium text-white/85 text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-12">
                <a
                  href="/#contact"
                  className="inline-block px-12 py-5 rounded-md bg-white text-black manrope-medium hover:bg-white/90 transition-all"
                >
                  Request a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function SubNav() {
  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Value', href: '#why-it-matters' },
    { label: 'Approach', href: '#approach' },
    { label: 'Benefits', href: '#strengthening' },
    { label: 'Outsourcing', href: '#outsource' },
  ]

  return (
    <div className="fixed top-28 left-0 right-0 z-40 bg-[#f7f5ef]/80 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-start gap-10 h-14">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-widest uppercase manrope-bold text-black/80">
              Medical Billing & Coding
            </span>
            <span className="text-[20px] text-black/30 font-light">&gt;</span>
          </div>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-widest uppercase manrope-medium text-black/60 hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

