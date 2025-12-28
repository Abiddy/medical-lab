'use client'

import React from 'react'

export default function AccountsReceivablePage() {
  return (
    <main className="bg-[#f7f5ef] text-[#1a1a1a] pt-28">
      <SubNav />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h1 className="font-instrument-serif text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none text-black/90 mb-8">
                Accounts Receivable (A/R) Management
              </h1>
              <p className="manrope-light text-xl md:text-2xl text-black/60 max-w-xl leading-relaxed">
                Protect Your Revenue. Accelerate Your Cash Flow.
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
                Maintaining a healthy cash flow is essential for your organization.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed">
                For any healthcare organization, a healthy cash flow is essential. Yet with multiple stakeholders, evolving payer rules, and increasing administrative demands, managing Accounts Receivable (A/R) has become one of the most challenging parts of the revenue cycle. When A/R tasks pile up, practices face delayed payments, preventable denials, and unnecessary financial strain.
              </p>
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed">
                At BDL, our A/R Management services ensure your practice gets paid on time, every time. We identify bottlenecks, resolve outstanding balances, and streamline your collections process so your revenue remains predictable and your operations stay efficient.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is A/R Section (Dark Green Background) */}
      <section id="what-is-ar" className="py-24 bg-[#1a2b23] text-white scroll-mt-44">
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
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold">Core Indicators</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl mb-10 leading-tight">
                What Are Accounts Receivable in Medical Billing?
              </h2>
              <div className="space-y-6">
                <p className="manrope-light text-base md:text-lg text-white/75 mb-8">
                  A/R is a core indicator of financial health—representing the money your practice has earned but has not yet collected. Effective management ensures:
                </p>
                <ul className="space-y-4">
                  {[
                    'Claims are processed and paid promptly',
                    'Denials are resolved quickly',
                    'Patient balances are managed professionally',
                    'Cash flow remains stable and predictable'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/85 manrope-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-10 manrope-light text-base md:text-lg text-white/70 italic">
                  Without proper oversight, A/R can easily age beyond 30, 60, or even 120 days, leading to major revenue loss.
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
              <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">Methodology</span>
            </div>
            <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-6">
              A Proactive, Systematic Approach
            </h2>
            <p className="manrope-light text-base md:text-lg text-black/65">
              BDL provides a technology-driven approach to resolving outstanding accounts and preventing future delays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Comprehensive Claims Review',
                desc: 'We monitor claims throughout their entire life cycle—verifying submissions and ensuring timely payer response.'
              },
              {
                step: '02',
                title: 'Strategic Follow-Up',
                desc: 'Our team performs consistent follow-up, prioritizing aged accounts and addressing issues before they escalate.'
              },
              {
                step: '03',
                title: 'Denial Prevention & Resolution',
                desc: 'We analyze claim denials, correct underlying issues, resubmit claims, and help prevent repeat denials.'
              },
              {
                step: '04',
                title: 'Patient Balance Management',
                desc: 'We communicate with patients professionally and clearly, ensuring transparency and supporting timely payments.'
              },
              {
                step: '05',
                title: 'Automation + Expert Oversight',
                desc: 'BDL uses advanced billing technology to track and categorize A/R efficiently while our specialists oversee every step.'
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-white border border-black/5 hover:border-black/10 transition-all duration-300">
                <span className="block text-3xl font-instrument-serif text-black/10 group-hover:text-black/20 transition-colors mb-6">{item.step}</span>
                <h3 className="manrope-bold text-lg text-black/90 mb-4">{item.title}</h3>
                <p className="manrope-light text-sm text-black/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Address Section */}
      <section id="indicators" className="py-24 border-t border-black/5 bg-[#f0ede4] scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-black/20" />
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">When to Act</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-8 leading-tight">
                When Should Providers Address A/R Issues?
              </h2>
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed">
                If your practice is experiencing any of these common indicators, BDL can help you regain control of your revenue.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Claims aging beyond 30–60 days',
                'Frequent denials or rejections',
                'Slow reimbursement from payers',
                'High staff workload',
                'Increasing patient balances',
                'Unpredictable cash flow'
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl border border-black/5 bg-white/50 backdrop-blur-sm">
                  <span className="manrope-medium text-black/75 text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Outsourcing Section */}
      <section id="benefits" className="py-24 border-t border-black/5 scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square bg-black/5 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-200" /> {/* Placeholder */}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-black/20" />
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">Outsourcing Advantages</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-10 leading-tight">
                Why Healthcare Providers Outsource A/R to BDL
              </h2>
              <div className="space-y-4 mb-10">
                {[
                  'Faster collections and reduced aging accounts',
                  'Fewer write-offs and lost revenue',
                  'Improved cash flow and financial predictability',
                  'Lower administrative burden on office staff',
                  'Expertise in payer policies and rules'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                    <span className="manrope-medium text-black/75 text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="/#contact"
                className="inline-block px-12 py-5 rounded-md bg-[#1a1a1a] text-white manrope-medium hover:bg-black transition-all"
              >
                Connect with an Expert
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BDL Summary Section */}
      <section className="py-32 border-t border-black/5">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-8 leading-tight">
            Comprehensive A/R Management
          </h2>
          <p className="manrope-light text-lg md:text-xl text-black/65 leading-relaxed">
            BDL provides comprehensive Accounts Receivable (A/R) Management services to reduce aging claims, prevent denials, and accelerate payments. Through proactive follow-up, advanced billing technologies, and expert oversight, we help healthcare providers stabilize cash flow and eliminate administrative strain.
          </p>
        </div>
      </section>
    </main>
  )
}

function SubNav() {
  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Indicators', href: '#indicators' },
    { label: 'Approach', href: '#approach' },
    { label: 'Benefits', href: '#benefits' },
  ]

  return (
    <div className="fixed top-28 left-0 right-0 z-40 bg-[#f7f5ef]/80 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-start gap-10 h-14">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-widest uppercase manrope-bold text-black/80">
              A/R Management
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

