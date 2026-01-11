'use client'

import React from 'react'

export default function PriorAuthorizationPage() {
  return (
    <main className="bg-[#f7f5ef] text-[#1a1a1a] pt-20 md:pt-28">
      <SubNav />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h1 className="manrope-light text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none text-black/90 mb-8">
                Prior Authorization
              </h1>
              <p className="manrope-light text-xl md:text-2xl text-black/60 max-w-xl leading-relaxed">
                Fast, Accurate Approvals to Protect Your Revenue and Support Patient Care
              </p>
            </div>
            <div className="hidden lg:block border-l border-black/5 pl-12">
              <div className="aspect-[4/3] bg-black/5 rounded-2xl overflow-hidden relative">
                <img
                  src="/z20.jpg"
                  alt="Prior Authorization Hero"
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
                Securing approvals quickly and accurately so your practice can move forward.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed">
                Prior authorization is one of the most important steps in ensuring that patients receive appropriate coverage for the services they need—while protecting your practice from unnecessary denials. When authorizations are missed, incomplete, or delayed, it often results in lost revenue, frustrated patients, and unpaid claims.
              </p>
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed">
                At Bioanalysis Diagnostic Laboratory (BDL), we understand how time-sensitive and detail-oriented the authorization process is. Our team manages the entire workflow on your behalf, securing approvals quickly and accurately so your practice can move forward confidently.
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
                Why Prior Authorization Matters
              </h2>
              <div className="space-y-6">
                <p className="manrope-light text-base md:text-lg text-white/75 mb-8">
                  Prior authorization is designed to:
                </p>
                <ul className="space-y-4">
                  {[
                    'Ensure patients receive coverage for eligible treatments',
                    'Prevent surprise patient billing',
                    'Reduce claim denials and avoidable write-offs',
                    'Accelerate payment after services are performed',
                    'Protect your practice from compliance issues'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/85 manrope-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-10 manrope-light text-base md:text-lg text-white/70 italic">
                  When handled correctly, prior authorization sets the foundation for a smooth billing cycle and keeps reimbursement on track.
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
              A Proactive, Critical Component
            </h2>
            <p className="manrope-light text-base md:text-lg text-black/65">
              BDL treats authorizations as a critical component of the revenue cycle—not an afterthought. Our authorization specialists proactively coordinate with insurers and payers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Complete Insurance Verification',
                desc: 'We review patient eligibility, benefits, and payer rules to ensure approval requirements are understood upfront.'
              },
              {
                step: '02',
                title: 'Fast Authorization Submission',
                desc: 'Our team sends clinical documentation to insurers through secure portals, fax, or direct communication.'
              },
              {
                step: '03',
                title: 'Proactive Follow-Up',
                desc: 'We track every authorization request in real time, following up with payers to ensure approvals are secured without delay.'
              },
              {
                step: '04',
                title: 'Compliance-Driven Accuracy',
                desc: 'BDL maintains strict payer-specific guidelines to avoid denials, retro-auth issues, and reimbursement delays.'
              },
              {
                step: '05',
                title: 'Seamless Integration',
                desc: 'Approved authorization numbers are added directly to claim submissions, supporting clean claims and faster payment.'
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

      {/* When Prior Authorization is Required Section */}
      <section id="requirements" className="py-24 border-t border-black/5 bg-[#f0ede4] scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-black/20" />
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">Guidelines</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-8 leading-tight">
                When Prior Authorization is Required
              </h2>
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed">
                Although requirements vary by payer, authorizations are commonly needed for several high-impact services. BDL stays current with each insurer’s specific criteria.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'High-cost diagnostic tests',
                'Surgeries and procedures',
                'Specialty medications',
                'Advanced imaging',
                'Durable medical equipment',
                'Outpatient/Inpatient services'
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-xl border border-black/5 bg-white/50 backdrop-blur-sm">
                  <span className="manrope-medium text-black/75 text-base leading-relaxed">{item}</span>
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
                  src="/z21.jpg"
                  alt="BDL Prior Authorization Support"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-black/20" />
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">Support</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-10 leading-tight">
                How BDL Supports Your Practice
              </h2>
              <div className="space-y-4 mb-10">
                {[
                  'Reduced administrative workload',
                  'Lower risk of denials and write-offs',
                  'Faster confirmation for scheduled services',
                  'Accurate payer communication',
                  'Increased revenue protection'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                    <span className="manrope-medium text-black/75 text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://calendly.com/connect-bdlusa/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 rounded-md bg-[#1a1a1a] text-white manrope-medium hover:bg-black transition-all"
              >
                Book a Call
              </a>
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
    { label: 'Requirements', href: '#requirements' },
    { label: 'Benefits', href: '#benefits' },
  ]

  return (
    <div className="fixed top-20 md:top-28 left-0 right-0 z-40 bg-[#f7f5ef]/80 backdrop-blur-md border-b border-black/5 overflow-x-auto no-scrollbar scroll-smooth">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 min-w-max md:min-w-0 relative">
        <div className="flex items-center justify-start gap-6 md:gap-10 h-14">
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
                <span className="text-[10px] md:text-xs tracking-widest uppercase manrope-bold text-black/80">
                  Prior Authorization
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

