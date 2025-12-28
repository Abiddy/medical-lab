'use client'

import React from 'react'

export default function EligibilityVerificationPage() {
  return (
    <main className="bg-[#f7f5ef] text-[#1a1a1a] pt-28">
      <SubNav />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h1 className="font-instrument-serif text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none text-black/90 mb-8">
                Eligibility & Benefits Verification
              </h1>
              <p className="manrope-light text-xl md:text-2xl text-black/60 max-w-xl leading-relaxed">
                Accurate Coverage Checks Before Every Appointment
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
                Ensuring smooth financial operations from the first encounter.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed">
                Eligibility and Benefits Verification is a crucial first step in preventing denials, avoiding unexpected patient balances, and ensuring smooth financial operations. At Bioanalysis Diagnostic Laboratory (BDL), we verify insurance coverage upfront so your practice always knows what services are covered—and under what terms—before care is provided.
              </p>
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed">
                With accurate eligibility information at the start of the patient encounter, your team can better plan treatments, avoid billing surprises, and ensure clean claims from day one.
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
                Why Eligibility Verification Matters
              </h2>
              <div className="space-y-6">
                <p className="manrope-light text-base md:text-lg text-white/75 mb-8">
                  Checking insurance eligibility before the patient arrives is one of the most effective ways to protect your revenue. Without it, practices face:
                </p>
                <ul className="space-y-4">
                  {[
                    'Preventable claim denials',
                    'Delayed or incorrect payments',
                    'Billing confusion for patients',
                    'Increased administrative workload',
                    'Lost revenue due to uncovered services'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/85 manrope-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-10 manrope-light text-base md:text-lg text-white/70 italic">
                  Verifying insurance in advance ensures that patients receive accurate estimates and that your practice receives timely reimbursement.
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
              Precision and Attention to Detail
            </h2>
            <p className="manrope-light text-base md:text-lg text-black/65">
              BDL handles the entire eligibility verification process with precision. Our specialists confirm all coverage information directly with payers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Comprehensive Verification',
                desc: 'We validate key patient and coverage details—including eligibility status, plan type, active dates, and payer-specific rules.'
              },
              {
                step: '02',
                title: 'Detailed Benefit Breakdown',
                desc: 'Our team reviews co-pays, co-insurance, deductibles, out-of-pocket maximums, and any preauthorization indicators.'
              },
              {
                step: '03',
                title: 'Real-Time Confirmation',
                desc: 'We utilize carrier portals such as Availity, NaviNet, and other payer systems to gather the most up-to-date benefits information.'
              },
              {
                step: '04',
                title: 'Network & Provider Status',
                desc: 'We confirm whether your practice is in-network, out-of-network, or tiered differently based on the patient’s plan.'
              },
              {
                step: '05',
                title: 'Documentation for Billing',
                desc: 'All verified details are documented clearly and communicated to your team, ensuring accurate claims and reducing risk.'
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

      {/* Revenue Cycle Support Section */}
      <section id="revenue-support" className="py-24 border-t border-black/5 bg-[#f0ede4] scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-black/20" />
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">Revenue Safeguard</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-10 leading-tight">
                How Eligibility Verification Supports Your Revenue Cycle
              </h2>
              <div className="space-y-4 mb-10">
                {[
                  'Reduce denials caused by inactive or incorrect coverage',
                  'Prevent delayed claims due to missing benefit details',
                  'Improve financial predictability for practice and patients',
                  'Enhance scheduling efficiency with advance payer identification',
                  'Strengthen overall revenue cycle performance'
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
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">Outsourcing</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-10 leading-tight">
                Why Practices Outsource to BDL
              </h2>
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed mb-8">
                Managing eligibility internally can be time-consuming and prone to errors. Partnering with BDL allows you to:
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                'Reduce administrative workload',
                'Ensure accurate and timely insurance verification',
                'Improve patient financial communication',
                'Avoid unforeseen billing issues',
                'Work with dedicated specialists in payer policies'
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-[#e7dfd3] border border-black/5">
                  <span className="manrope-medium text-black/85 text-base leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How BDL Can Help Section */}
      <section className="py-32 border-t border-black/5">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-black/20" />
            <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">How BDL Can Help</span>
          </div>
          <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-8 leading-tight">
            Comprehensive Eligibility & Benefits Verification
          </h2>
          <p className="manrope-light text-lg md:text-xl text-black/65 leading-relaxed mb-12">
            BDL provides comprehensive Eligibility & Benefits Verification services to ensure accurate coverage information before every appointment. By confirming insurance details, benefit levels, cost-sharing amounts, and payer requirements, we help healthcare providers reduce denials, improve cash flow, and deliver a smoother patient experience.
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
    { label: 'Value', href: '#why-it-matters' },
    { label: 'Approach', href: '#approach' },
    { label: 'Support', href: '#revenue-support' },
    { label: 'Outsourcing', href: '#outsource' },
  ]

  return (
    <div className="fixed top-28 left-0 right-0 z-40 bg-[#f7f5ef]/80 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-start gap-10 h-14">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-widest uppercase manrope-bold text-black/80">
              Eligibility Verification
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

