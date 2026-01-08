'use client'

import React from 'react'

export default function GeneticTestingPage() {
  return (
    <main id="main-content" className="bg-[#f7f5ef] text-[#1a1a1a] pt-20 md:pt-28">
      <SubNav />

      {/* Hero */}
      <section className="pt-12 md:pt-20">
        <div className="mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
            {/* Left */}
            <div className="lg:pr-12 pb-8 md:pb-12 lg:pb-0 text-center lg:text-left">
              <h1 className="manrope-light text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] md:leading-[0.95]">
                Genetic
                <br className="hidden md:block" />
                Testing
              </h1>

              <div className="mt-8 md:mt-20 flex flex-col items-center lg:items-start">
                <p className="manrope-regular text-lg md:text-xl text-black/70 leading-relaxed max-w-xl">
                  Precision-Based DNA Testing for MTHFR and COMT Variants
                </p>
                <div className="mt-8 lg:hidden">
                  <a
                    href="/get-started"
                    className="inline-flex items-center justify-center rounded-md bg-[#1F271B] text-white px-10 py-4 manrope-medium text-sm transition-colors hover:bg-black uppercase tracking-widest"
                  >
                    Request Pricing
                  </a>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="lg:pl-12 order-first lg:order-last mb-12 lg:mb-0">
              <div className="relative w-full rounded-2xl overflow-hidden border border-black/10 bg-black/5 aspect-[16/10] md:aspect-[21/9] lg:aspect-[4/3]">
                <img
                  src="/z1.jpg"
                  alt="Genetic testing laboratory analysis"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="mt-12 md:mt-24 scroll-mt-32 md:scroll-mt-44">
        <div className="border-t border-black/5" />

        <div className="mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 md:h-10 md:w-10 rounded-full border border-black/5 flex items-center justify-center text-black/70" aria-hidden="true">
              ↓
            </div>
            <div className="inline-flex items-center rounded-full bg-[#1F271B] text-white px-4 md:px-5 py-1.5 md:py-2 text-[10px] md:text-sm manrope-regular uppercase tracking-wider">
              Overview
            </div>
          </div>
        </div>

        <div className="border-t border-black/5" />

        <div className="mx-auto px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/5" />

            {/* Left content */}
            <div className="py-12 md:py-20 lg:pr-12">
              <h2 className="red-hat-display-light text-4xl md:text-6xl leading-[1.1] md:leading-[1.05] tracking-tight">
                Insights for Personalized Clinical Care
              </h2>

              <div className="mt-10 space-y-8 manrope-regular text-sm md:text-base text-black/70 leading-relaxed max-w-xl">
                <p>
                  Genetic differences significantly influence how patients process nutrients, respond to stress, detoxify, and metabolize neurotransmitters. Bioanalysis Diagnostic Laboratory (BDL) offers targeted, clinically actionable genetic testing panels focused on two of the most influential genetic pathways: MTHFR and COMT.
                </p>
                <p>
                  Our swab-based tests provide precise DNA insights that help healthcare providers tailor supplement protocols, lifestyle recommendations, and treatment plans based on each patient’s genetic profile.
                </p>
              </div>
            </div>

            {/* Right column placeholder */}
            <div className="py-12 md:py-20 lg:pl-12 border-t lg:border-t-0 border-black/5">
              <div className="relative w-full rounded-2xl overflow-hidden border border-black/5 bg-black/5 aspect-[4/3]">
                <img
                  src="/z2.jpg"
                  alt="Clinical significance of genetic testing"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="mt-10">
                <h3 className="red-hat-display-medium text-xl md:text-2xl text-[#1a1a1a]">Clinical Significance</h3>
                <p className="mt-4 manrope-regular text-sm text-black/60 leading-relaxed max-w-md">
                  Understanding genetic variants allows practitioners to address root causes of biochemical imbalances rather than managing symptoms alone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Genetic Testing Matters (Dark Section) */}
      <section id="why-it-matters" className="mt-12 md:mt-24 bg-[#1F271B] text-white scroll-mt-32 md:scroll-mt-44 relative overflow-hidden">
        <div className="border-t border-white/10" />

        <div className="mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 md:h-10 md:w-10 rounded-full border border-white/20 flex items-center justify-center text-white/80" aria-hidden="true">
              ↓
            </div>
            <div className="inline-flex items-center rounded-full bg-white/10 text-white/85 px-4 md:px-5 py-1.5 md:py-2 text-[10px] md:text-sm manrope-light border border-white/10 uppercase tracking-wider">
              Why it Matters
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        <div className="mx-auto px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="red-hat-display-light text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
                Addressing <br className="hidden md:block" />Root Causes
              </h2>
              <p className="mt-6 md:mt-8 manrope-light text-base md:text-lg lg:text-xl text-white/50 max-w-xl leading-relaxed">
                MTHFR and COMT variants are increasingly recognized as contributors to a wide range of clinical conditions. BDL’s genetic testing gives providers the insight needed to address root causes rather than symptoms.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                'Mood disorders',
                'Fatigue and low energy',
                'Chronic inflammation',
                'Hormone metabolism',
                'Detoxification issues',
                'Cardiovascular risk',
                'Nutrient absorption'
              ].map((item, i) => (
                <div key={i} className="p-4 md:p-5 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-white/20 shrink-0" />
                  <span className="manrope-light text-white/70 text-sm md:text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tests Offered */}
      <section id="tests-offered" className="py-20 md:py-32 scroll-mt-32 md:scroll-mt-44 border-b border-black/5 bg-white/30">
        <div className="mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-12 md:mb-20">
            <h2 className="red-hat-display-light text-5xl md:text-7xl tracking-tight mb-6 md:mb-8">
              Genetic Tests Offered
            </h2>
            <p className="manrope-regular text-base md:text-lg text-black/60 leading-relaxed">
              We provide three targeted DNA panels for clinical use, each collected through a simple buccal swab (cheek swab) for fast processing and high compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'MTHFR Test',
                desc: 'Evaluates variants affecting methylation, folate processing, cardiovascular function, and detox pathways.'
              },
              {
                title: 'COMT Test',
                desc: 'Assesses variations in neurotransmitter metabolism, stress response, mood regulation, and estrogen processing.'
              },
              {
                title: 'Combined Panel',
                desc: 'A comprehensive profile that allows practitioners to understand how both genes interact—ideal for functional medicine.'
              }
            ].map((test, i) => (
              <div key={i} className="p-8 md:p-10 rounded-2xl bg-white border border-black/5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="text-2xl md:text-3xl manrope-light text-black/20 mb-6 md:mb-8">0{i + 1}</div>
                <h3 className="red-hat-display-medium text-xl md:text-2xl text-black mb-4 md:mb-6">{test.title}</h3>
                <p className="manrope-regular text-sm md:text-base text-black/65 leading-relaxed">{test.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <a
              href="/get-started"
              className="inline-flex items-center justify-center rounded-md bg-[#1F271B] text-white px-10 py-4 manrope-medium text-sm transition-colors hover:bg-black uppercase tracking-widest"
            >
              Request Test Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Provider Support */}
      <section id="provider-support" className="py-20 md:py-32 scroll-mt-32 md:scroll-mt-44 bg-[#f0ede4]">
        <div className="mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="red-hat-display-light text-5xl md:text-6xl tracking-tight mb-10">
                How BDL Supports Healthcare Providers
              </h2>
              <p className="manrope-regular text-lg text-black/60 leading-relaxed max-w-xl">
                BDL empowers providers to integrate genetic results into personalized treatment strategies, improving long-term patient outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: 'Meaningful Reports', desc: 'Clear, actionable data for clinical use.' },
                { title: 'Fast Turnaround', desc: 'Rapid results to guide treatment plans.' },
                { title: 'Patient-Friendly Kits', desc: 'Simple collection for high compliance.' },
                { title: 'DNA Accuracy', desc: 'Modern analysis using laboratory technology.' },
                { title: 'Workflow Support', desc: 'Dedicated help for clinic implementation.' },
                { title: 'Summaries', desc: 'Interpretation-friendly provider guides.' }
              ].map((benefit, i) => (
                <div key={i} className="p-6 rounded-xl border border-black/5 bg-white/50 backdrop-blur-sm">
                  <h4 className="manrope-bold text-black/90 mb-2">{benefit.title}</h4>
                  <p className="manrope-regular text-sm text-black/60">{benefit.desc}</p>
                </div>
              ))}
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
    { label: 'Why it Matters', href: '#why-it-matters' },
    { label: 'Tests Offered', href: '#tests-offered' },
    { label: 'Provider Support', href: '#provider-support' },
  ]

  return (
    <nav className="fixed top-20 md:top-28 left-0 right-0 z-40 bg-[#f7f5ef]/80 backdrop-blur-md border-b border-black/5 overflow-x-auto no-scrollbar scroll-smooth" aria-label="Page sub-navigation">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 min-w-max md:min-w-0 relative">
        <div className="flex items-center justify-start gap-6 md:gap-10 h-14">
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            <span className="text-[10px] md:text-xs tracking-widest uppercase manrope-bold text-black/80">
              Genetic Testing
            </span>
          </div>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[10px] md:text-xs tracking-widest uppercase manrope-medium text-black/60 hover:text-black transition-all whitespace-nowrap outline-none focus-visible:underline focus-visible:text-black"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

