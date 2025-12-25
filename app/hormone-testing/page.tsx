export default function HormoneTestingPage() {
  return (
    <main className="bg-[#f7f5ef] text-[#1a1a1a]">
      {/* Hero (image 1 layout) */}
      <section className="pt-40">
        <div className="mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left */}
            <div className="lg:pr-12 pb-12 lg:pb-0">
              <div className="manrope-regular text-sm text-black/60 tracking-wide uppercase">
                Saliva Testing
              </div>
              <h1 className="red-hat-display-light text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mt-4">
                Hormone
                <br />
                Testing
              </h1>

              <div className="mt-10 relative w-full rounded-2xl overflow-hidden border border-black/10 bg-black/5 aspect-[16/10]" />
            </div>

            {/* Right */}
            <div className="lg:pl-12 flex flex-col justify-between">
              <p className="red-hat-display-light text-4xl md:text-5xl leading-[1.08] tracking-tight text-black/90">
                Non-Invasive, Accurate Hormone Insight for Clinical Decision-Making
              </p>

              <div className="mt-10">
                <a
                  href="/#get-started"
                  className="inline-flex items-center justify-center rounded-md bg-[#1F271B] hover:bg-[#273222] text-white px-10 py-4 manrope-regular text-sm transition-colors"
                >
                  Request Test Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview (image 3-inspired: split image + text with dividers) */}
      <section className="mt-16">
        <div className="border-t border-black/10" />

        <div className="mx-auto px-6 lg:px-8 py-16">
          <h2 className="red-hat-display-light text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-5xl">
            Overview
          </h2>
        </div>

        <div className="border-t border-black/10" />

        <div className="mx-auto px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />

            {/* Left image slot */}
            <div className="py-14 lg:py-16 lg:pr-12">
              <div className="relative w-full rounded-2xl overflow-hidden border border-black/10 bg-black/5 aspect-[4/3]" />
            </div>

            {/* Right text */}
            <div className="py-14 lg:py-16 lg:pl-12">
              <div className="space-y-6 manrope-light text-sm md:text-base text-black/65 leading-relaxed max-w-xl">
                <p>
                  Saliva-based hormone testing offers healthcare providers an efficient, patient-friendly method to
                  evaluate key hormone levels with high clinical precision. Bioanalysis Diagnostic Laboratory (BDL)
                  provides advanced saliva testing solutions that help practices monitor hormone balance, identify
                  underlying dysfunction, and customize treatment plans with confidence.
                </p>
                <p>
                  Because saliva reflects the bioavailable (active) portion of hormones—not just total circulating
                  levels—practitioners gain a more accurate representation of functional hormone activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters (image 2-inspired: dark multi-column grid) */}
      <section className="mt-16 bg-[#1F271B] text-white">
        <div className="border-t border-white/15" style={{ borderTopWidth: '0.3px' }} />

        <div className="mx-auto px-6 lg:px-8 py-16">
          <h2 className="red-hat-display-light text-5xl md:text-6xl leading-[1.05] tracking-tight text-white max-w-5xl">
            Why Saliva Hormone Testing Matters for Providers
          </h2>

          <p className="mt-8 manrope-light text-sm md:text-base text-white/75 leading-relaxed max-w-3xl">
            Hormone imbalance plays a central role in many conditions, including fatigue, weight fluctuation, mood
            disorders, metabolic issues, reproductive concerns, HRT optimization, and overall wellness.
          </p>
        </div>

        <div className="border-t border-white/15" style={{ borderTopWidth: '0.3px' }} />

        <div className="mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:divide-x lg:divide-white/15">
            {[
              {
                title: 'High patient compliance',
                body: 'Simple, non-invasive sample collection improves adherence and repeat testing.',
              },
              {
                title: 'Free hormone insight',
                body: 'Accurate measurement of bioavailable hormone levels for functional clinical context.',
              },
              {
                title: 'Actionable reporting',
                body: 'Clear, provider-ready results that support confident clinical decision-making.',
              },
              {
                title: 'Flexible collection',
                body: 'Convenient at-home or in-office collection options for practices and patients.',
              },
              {
                title: 'Reliable tracking',
                body: 'Consistent year-over-year monitoring to evaluate treatment response.',
              },
              {
                title: 'Provider support',
                body: 'Dedicated support to keep workflows smooth and questions answered quickly.',
              },
            ].map((item) => (
              <div key={item.title} className="py-14 lg:py-16 lg:px-10">
                <div className="red-hat-display-medium text-2xl text-white">{item.title}</div>
                <p className="mt-6 manrope-light text-sm md:text-base text-white/70 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-0 border-t border-white/15" style={{ borderTopWidth: '0.3px' }} />
      </section>

      {/* Hormones tested (light, list-forward) */}
      <section className="mt-16">
        <div className="border-t border-black/10" />

        <div className="mx-auto px-6 lg:px-8 py-16">
          <h2 className="red-hat-display-light text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-5xl">
            Hormones Tested Through BDL’s Saliva Panels
          </h2>
        </div>

        <div className="border-t border-black/10" />

        <div className="mx-auto px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />

            <div className="py-14 lg:py-16 lg:pr-12">
              <p className="manrope-light text-sm md:text-base text-black/65 leading-relaxed max-w-xl">
                BDL measures the following key hormones relevant for clinical evaluation and treatment planning:
              </p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {[
                  'Testosterone',
                  'DHEA',
                  'Estrogen (Estradiol)',
                  'Progesterone',
                  'Cortisol (single or multiple-point options)',
                ].map((h) => (
                  <div key={h} className="rounded-xl border border-black/10 bg-white/40 px-4 py-3 manrope-regular text-sm">
                    {h}
                  </div>
                ))}
              </div>
            </div>

            <div className="py-14 lg:py-16 lg:pl-12">
              <p className="manrope-light text-sm md:text-base text-black/65 leading-relaxed max-w-xl">
                These markers help providers identify adrenal function, stress response patterns, reproductive hormone
                balance, metabolic health, and aging-related hormone changes.
              </p>
              <a
                href="/#get-started"
                className="mt-10 inline-flex items-center justify-center rounded-md bg-[#1F271B] hover:bg-[#273222] text-white px-10 py-4 manrope-regular text-sm transition-colors"
              >
                Request Test Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical advantages (light, split) */}
      <section className="mt-16">
        <div className="border-t border-black/10" />

        <div className="mx-auto px-6 lg:px-8 py-16">
          <h2 className="red-hat-display-light text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-5xl">
            BDL’s Clinical Advantages
          </h2>
        </div>

        <div className="border-t border-black/10" />

        <div className="mx-auto px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />

            <div className="py-14 lg:py-16 lg:pr-12">
              <div className="relative w-full rounded-2xl overflow-hidden border border-black/10 bg-black/5 aspect-[4/3]" />
            </div>

            <div className="py-14 lg:py-16 lg:pl-12">
              <p className="manrope-light text-sm md:text-base text-black/65 leading-relaxed max-w-xl">
                When partnering with BDL for saliva hormone testing, healthcare providers benefit from:
              </p>
              <ul className="mt-8 space-y-3 manrope-light text-sm md:text-base text-black/65 leading-relaxed max-w-xl list-disc pl-6">
                <li>Fast turnaround time and clear interpretation</li>
                <li>CLIA-compliant laboratory processes</li>
                <li>Consistent accuracy across all samples</li>
                <li>Easy sample collection instructions for patients</li>
                <li>Dedicated provider support</li>
              </ul>

              <p className="mt-8 manrope-light text-sm md:text-base text-black/65 leading-relaxed max-w-xl">
                BDL works closely with clinicians to ensure they receive reliable, clinically relevant results that
                drive better patient outcomes.
              </p>
            </div>
          </div>
        </div>

        <div className="pb-24" />
      </section>
    </main>
  )
}


