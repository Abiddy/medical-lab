'use client'

import React from 'react'

export default function CredentialingPage() {
  return (
    <main className="bg-[#f7f5ef] text-[#1a1a1a] pt-20 md:pt-28">
      <SubNav />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h1 className="manrope-light text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none text-black/90 mb-8">
                Credentialing
              </h1>
              <p className="manrope-light text-xl md:text-2xl text-black/60 max-w-xl leading-relaxed">
                Get Approved Faster. Stay Compliant. Focus on Patient Care.
              </p>
            </div>
            <div className="hidden lg:block border-l border-black/5 pl-12">
              <div className="aspect-[4/3] bg-black/5 rounded-2xl overflow-hidden relative">
                <img
                  src="/z30.jpg"
                  alt="Credentialing Hero"
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
                Verifying qualifications for regulatory compliance and reimbursement.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed">
                Credentialing is the process of verifying a healthcare provider’s qualifications—including education, licensure, training, experience, and professional background—to ensure they meet the standards required by insurance companies, state agencies, and healthcare institutions. This process is essential for patient safety, regulatory compliance, and eligibility for insurance reimbursement.
              </p>
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed">
                At BDL, we understand how complex and time-consuming credentialing can be. Our team manages the full credentialing and enrollment process for providers, ensuring accuracy, compliance, and timely approvals so you can focus on delivering quality care.
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
                <img
                  src="/z31.jpg"
                  alt="Credentialing Compliance"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-2 mb-6 text-white/40">
                <span className="w-2 h-2 rounded-full bg-current" />
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold">Compliance & Safety</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl mb-10 leading-tight">
                Why Credentialing Matters
              </h2>
              <div className="space-y-6">
                <p className="manrope-light text-base md:text-lg text-white/75 mb-8">
                  Credentialing plays a critical role in both patient safety and the financial success of your practice. It ensures:
                </p>
                <ul className="space-y-4">
                  {[
                    'Providers meet state and payer requirements',
                    'Patients receive care from qualified professionals',
                    'Practices remain eligible for insurance reimbursement',
                    'Full compliance with NCQA and payer guidelines',
                    'Reduced risk of denials due to credentialing errors'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-white/85 manrope-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-10 manrope-light text-base md:text-lg text-white/70 italic">
                  Proper credentialing is directly linked to lower rates of medical errors and increased patient trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BDL’s Services Section */}
      <section id="services" className="py-24 border-t border-black/5 scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-20 max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-black/20" />
              <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">Our Services</span>
            </div>
            <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-6">
              Comprehensive Support
            </h2>
            <p className="manrope-light text-base md:text-lg text-black/65">
              BDL handles every step of the process—from initial applications to renewals and payer communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Initial Credentialing',
                desc: 'Complete management of first-time applications for new providers and practices.'
              },
              {
                step: '02',
                title: 'Re-Credentialing',
                desc: 'Systematic handling of revalidation and renewal requirements to maintain active status.'
              },
              {
                step: '03',
                title: 'Credentialing Verification',
                desc: 'Detailed primary source verification through NCQA-compliant databases.'
              },
              {
                step: '04',
                title: 'Provider Enrollment',
                desc: 'Enrollment support for all major commercial and government (Medicare/Medicaid) plans.'
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

      {/* Requirements Section */}
      <section id="requirements" className="py-24 border-t border-black/5 bg-[#f0ede4] scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-black/20" />
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">Requirements</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-8 leading-tight">
                Managed Documentation
              </h2>
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed mb-8">
                Credentialing requirements vary by state and payer. BDL help you gather and maintain all required documentation.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Education & training history',
                'State license(s)',
                'DEA license',
                'Board certification',
                'Hospital affiliations',
                'Malpractice certificates',
                'Sanctions/background checks',
                'Tax documentation'
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-black/5 bg-white/50 backdrop-blur-sm">
                  <span className="manrope-medium text-black/75 text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAQH Section */}
      <section id="caqh" className="py-24 border-t border-black/5 scroll-mt-44">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-black/20" />
                <span className="text-xs tracking-[0.2em] uppercase manrope-bold text-black/40">CAQH Support</span>
              </div>
              <h2 className="red-hat-display-medium text-4xl md:text-5xl text-black/90 mb-10 leading-tight">
                CAQH Credentialing Support
              </h2>
              <p className="manrope-light text-base md:text-lg text-black/65 leading-relaxed mb-10">
                Maintaining your CAQH profile is essential for credentialing with most insurance companies. BDL assists with:
              </p>
              <div className="space-y-4">
                {[
                  'Creating and updating CAQH profiles',
                  'Uploading and verifying documents',
                  'Ensuring attestation completion',
                  'Resolving linked credentialing issues'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                    <span className="manrope-medium text-black/75 text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1a2b23] p-12 rounded-2xl text-white">
              <h3 className="red-hat-display-medium text-3xl mb-6">Focus on Patient Care</h3>
              <p className="manrope-light text-white/75 leading-relaxed mb-10">
                BDL manages the entire process so you can focus on delivering quality patient care. From initial credentialing to revalidation, our specialists ensure you stay compliant and eligible.
              </p>
              <a
                href="/#contact"
                className="inline-block px-12 py-5 rounded-md bg-white text-black manrope-medium hover:bg-white/90 transition-all"
              >
                Get Credentialed
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
    { label: 'Services', href: '#services' },
    { label: 'Requirements', href: '#requirements' },
    { label: 'CAQH', href: '#caqh' },
  ]

  return (
    <div className="fixed top-20 md:top-28 left-0 right-0 z-40 bg-[#f7f5ef]/80 backdrop-blur-md border-b border-black/5 overflow-x-auto no-scrollbar scroll-smooth">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 min-w-max md:min-w-0 relative">
        <div className="flex items-center justify-start gap-6 md:gap-10 h-14">
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
                <span className="text-[10px] md:text-xs tracking-widest uppercase manrope-bold text-black/80">
                  Credentialing
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

