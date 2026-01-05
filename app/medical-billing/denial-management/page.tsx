'use client'

import React from 'react'

export default function DenialManagementPage() {
  return (
    <main className="bg-[#f7f5ef] text-[#1a1a1a] pt-20 md:pt-28">
      <SubNav />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h1 className="manrope-light text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none text-black/90 mb-8">
                Denial Management
              </h1>
              <p className="manrope-light text-xl md:text-2xl text-black/60 max-w-xl leading-relaxed">
                Recover Lost Revenue. Prevent Future Denials. Strengthen Your Entire Revenue Cycle.
              </p>
            </div>
            <div className="hidden lg:block border-l border-black/5 pl-12">
              <div className="aspect-[4/3] bg-black/5 rounded-2xl overflow-hidden relative">
                <img
                  src="/z26.jpg"
                  alt="Denial Management Hero"
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
                Recovering revenue and preventing future denials.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed">
                Denied claims are one of the biggest threats to a healthcare practice’s financial health. They delay reimbursement, increase administrative burden, and can significantly impact cash flow when not addressed quickly. At BDL, we understand how frustrating and costly denials can be—and we provide a targeted, effective approach to resolving them.
              </p>
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed">
                Our Denial Management service is designed to recover lost revenue and prevent denials from happening again, ensuring your revenue cycle remains strong, predictable, and efficient.
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
                Why Denial Management Matters
              </h2>
              <div className="space-y-6">
                <p className="manrope-light text-base md:text-lg text-white/75 mb-8">
                  Every denial represents money your practice has earned but has not received. Effective denial management helps:
                </p>
                <ul className="space-y-4">
                  {[
                    'Recover payments that would otherwise be lost',
                    'Identify and eliminate recurring errors',
                    'Reduce administrative workload',
                    'Improve cash flow and financial stability',
                    'Ensure compliance with payer rules',
                    'Shorten reimbursement timelines'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/85 manrope-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-10 manrope-light text-base md:text-lg text-white/70 italic">
                  BDL helps you turn denied claims into recovered revenue instead of unpaid write-offs.
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
              Analyze, Prevent, and Streamline
            </h2>
            <p className="manrope-light text-base md:text-lg text-black/65">
              We don’t just correct denied claims—we analyze, prevent, and streamline your entire workflow to reduce denials long-term.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Root Cause Analysis',
                desc: 'We examine each denial to determine underlying issues, whether coding errors, missing documentation, or payer policy changes.'
              },
              {
                step: '02',
                title: 'Targeted Corrective Action',
                desc: 'Once the root cause is identified, we take immediate steps to correct and resubmit the claim with appropriate supporting documentation.'
              },
              {
                step: '03',
                title: 'Rapid Appeals & Resubmissions',
                desc: 'Our specialists prepare detailed appeal letters and follow up with payers until the claim is resolved—often within 48 hours.'
              },
              {
                step: '04',
                title: 'Prevention Strategies',
                desc: 'BDL analyzes denial trends and works with your practice to adjust processes, improve documentation, and implement front-end checks.'
              },
              {
                step: '05',
                title: 'Ongoing Monitoring',
                desc: 'We track denial categories, frequencies, and payer-specific patterns so you always know where your revenue risks are.'
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

      {/* Impact Section */}
      <section id="impact" className="py-24 border-t border-black/5 bg-[#f0ede4] scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-black/20" />
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">Practice Impact</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-8 leading-tight">
                How Denials Impact Providers
              </h2>
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed">
                Denied claims create more than financial setbacks. They create a ripple effect throughout the entire organization.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Lost Revenue', desc: 'Services go unpaid or partially paid.' },
                { title: 'Higher Strain', desc: 'Staff spend hours appealing claims.' },
                { title: 'Delayed Care', desc: 'Approval delays affect treatment timelines.' },
                { title: 'Lower Satisfaction', desc: 'Billing confusion reduces patient trust.' },
                { title: 'Increased Stress', desc: 'Financial pressure adds to clinical demands.' }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-xl border border-black/5 bg-white/50 backdrop-blur-sm">
                  <h3 className="manrope-bold text-black/90 mb-2">{item.title}</h3>
                  <p className="manrope-light text-sm text-black/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 border-t border-black/5 scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-square bg-black/5 rounded-2xl overflow-hidden relative">
                <img
                  src="/z29.jpg"
                  alt="Partnership Benefits"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-black/20" />
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">Partnership Benefits</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-10 leading-tight">
                Benefits of Partnering with BDL
              </h2>
              <div className="space-y-4 mb-10">
                {[
                  'Faster reimbursement through efficient appeal workflows',
                  'Significant reduction in recurring denials',
                  'Clear insight into payer rules and trends',
                  'Improved coding accuracy and processes',
                  'Less administrative burden on staff',
                  'More predictable revenue cycle and cash flow'
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
                Recover Your Revenue
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BDL Summary Section */}
      <section className="py-32 border-t border-black/5">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-8 leading-tight">
            Comprehensive Denial Management
          </h2>
          <p className="manrope-light text-lg md:text-xl text-black/65 leading-relaxed">
            BDL offers comprehensive Denial Management services that recover lost revenue, reduce preventable denials, and strengthen your overall billing performance. Through targeted analysis, rapid appeals, and proactive prevention strategies, we help healthcare providers maintain financial stability and keep their revenue cycle operating at peak efficiency.
          </p>
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
    { label: 'Impact', href: '#impact' },
    { label: 'Benefits', href: '#benefits' },
  ]

  return (
    <div className="fixed top-20 md:top-28 left-0 right-0 z-40 bg-[#f7f5ef]/80 backdrop-blur-md border-b border-black/5 overflow-x-auto no-scrollbar scroll-smooth">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 min-w-max md:min-w-0 relative">
        <div className="flex items-center justify-start gap-6 md:gap-10 h-14">
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
                <span className="text-[10px] md:text-xs tracking-widest uppercase manrope-bold text-black/80">
                  Denial Management
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

