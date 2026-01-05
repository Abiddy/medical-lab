'use client'

import React from 'react'

export default function RevenueCyclePage() {
  return (
    <main className="bg-[#f7f5ef] text-[#1a1a1a] pt-20 md:pt-28">
      <SubNav />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h1 className="manrope-light text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none text-black/90 mb-8">
                Revenue Cycle Management
              </h1>
              <p className="manrope-light text-xl md:text-2xl text-black/60 max-w-xl leading-relaxed">
                Streamlined, Accurate, and Fully Integrated Billing Solutions
              </p>
            </div>
            <div className="hidden lg:block border-l border-black/5 pl-12">
              <div className="aspect-[4/3] bg-black/5 rounded-2xl overflow-hidden relative">
                <img
                  src="/z10.jpg"
                  alt="Revenue Cycle Management Hero"
                  className="absolute inset-0 w-full h-full object-cover"
                />
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
                Maintaining a smooth, efficient, and financially stable operation.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed">
                At BDL, our Revenue Cycle Management services are built to help healthcare providers maintain a smooth, efficient, and financially stable operation. From patient check-in to final reimbursement, we ensure every part of the revenue cycle is accurate, compliant, and optimized for faster payment.
              </p>
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed">
                In today’s evolving healthcare environment, changing regulations, payer rules, and increasing administrative demands make it easy for practices to lose revenue. BDL provides the technology, expertise, and oversight needed to prevent delays, reduce denials, and support long-term financial growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why RCM Matters Section (Dark Green Background) */}
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
                Why Revenue Cycle Management Matters
              </h2>
              <div className="space-y-6">
                <p className="manrope-light text-base md:text-lg text-white/75 mb-8">
                  A strong RCM system is essential for proper financial performance. Effective management leads to:
                </p>
                <ul className="space-y-4">
                  {[
                    'Faster, more reliable reimbursement',
                    'Fewer claim denials and errors',
                    'Reduced administrative burden',
                    'Stronger cash flow',
                    'A better patient billing experience'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/85 manrope-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-10 manrope-light text-base md:text-lg text-white/70 italic">
                  BDL’s modern, technology-driven approach keeps your practice ahead of industry challenges and ensures financial stability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-24 border-t border-black/5 scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-black/20" />
              <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">Methodology</span>
            </div>
            <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-6">
              Our RCM Approach
            </h2>
            <p className="manrope-light text-base md:text-lg text-black/65">
              BDL delivers a streamlined and centralized revenue cycle solution designed around accuracy, automation, and continuous improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Clean Claims From the Start',
                desc: 'We verify, code, and prepare claims correctly the first time to avoid costly delays.'
              },
              {
                step: '02',
                title: 'Automation That Reduces Errors',
                desc: 'Advanced systems minimize manual input and accelerate your entire billing process.'
              },
              {
                step: '03',
                title: 'Compliance & Accuracy',
                desc: 'We maintain strict adherence to industry regulations (HIPAA, CMS, OIG) to protect your organization.'
              },
              {
                step: '04',
                title: 'Expert Oversight',
                desc: 'Our specialists monitor performance, identify gaps, and recommend strategies to keep your financial workflow efficient.'
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

      {/* Benefits Section */}
      <section id="benefits" className="py-24 border-t border-black/5 bg-[#f0ede4] scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-black/20" />
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">Strengthening Operations</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-10 leading-tight">
                How BDL Strengthens Your Revenue Cycle
              </h2>
              <div className="space-y-4">
                {[
                  'Real-time tracking of claims from submission to reimbursement',
                  'Improved cash flow and faster turnaround',
                  'Proactive A/R and denial prevention strategies',
                  'Clear financial analytics to identify improvement areas',
                  'A patient-friendly billing process that enhances satisfaction'
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
                <img
                  src="/z11.jpg"
                  alt="BDL Strengthening Revenue Cycle"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Section */}
      <section className="py-32 border-t border-black/5">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-8 leading-tight">
            Revenue Optimization Support
          </h2>
          <p className="manrope-light text-lg md:text-xl text-black/65 leading-relaxed mb-12">
            BDL’s Revenue Recovery Specialists help uncover missed revenue opportunities, reduce manual workload through digital processes, and improve operational efficiency—allowing you to focus on exceptional patient care while we manage the financial backbone of your practice.
          </p>
          <a
            href="/#contact"
            className="inline-block px-12 py-5 rounded-md bg-[#1a1a1a] text-white manrope-medium hover:bg-black transition-all"
          >
            Connect with a Specialist
          </a>
        </div>
      </section>
    </main>
  )
}

function SubNav() {
  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Why it Matters', href: '#why-it-matters' },
    { label: 'Approach', href: '#approach' },
    { label: 'Benefits', href: '#benefits' },
  ]

  return (
    <div className="fixed top-20 md:top-28 left-0 right-0 z-40 bg-[#f7f5ef]/80 backdrop-blur-md border-b border-black/5 overflow-x-auto no-scrollbar scroll-smooth">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 min-w-max md:min-w-0 relative">
        <div className="flex items-center justify-start gap-6 md:gap-10 h-14">
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
                <span className="text-[10px] md:text-xs tracking-widest uppercase manrope-bold text-black/80">
                  Revenue Cycle Management
                </span>
              </div>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[10px] md:text-xs tracking-widest uppercase manrope-medium text-black/60 hover:text-black transition-colors whitespace-nowrap"
            >
              {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
  )
}

