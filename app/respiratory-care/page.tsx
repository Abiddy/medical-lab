export default function RespiratoryCareProgramPage() {
  return (
    <main className="bg-[#f7f5ef] text-[#1a1a1a] pt-28">
      <SubNav />

      {/* Hero */}
      <section className="pt-16 lg:pt-20">
        <div className="mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left (image placeholder) */}
            <div className="lg:pr-12 pb-12 lg:pb-0">
              <div className="relative w-full rounded-2xl overflow-hidden border border-black/10 bg-black/5 aspect-[4/3]">
                <img
                  src="/resp1.jpg"
                  alt="Respiratory Care Program"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right */}
            <div className="lg:pl-12 flex flex-col justify-between">
              <h1 className="font-instrument-serif text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95]">
                Respiratory
                <br />
                Care Program
              </h1>

              <p className="mt-10 manrope-regular text-sm md:text-base text-black/70 leading-relaxed max-w-xl">
                The Respiratory Care Program provides facilities with a simple, efficient solution for identifying
                common respiratory infections using PCR technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview (light section) */}
      <section id="overview" className="mt-16 scroll-mt-44">
        <div className="border-t border-black/10" />

        {/* Pill row */}
        <div className="mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full border border-black/20 flex items-center justify-center text-black/70">
              ↓
            </div>
            <div className="inline-flex items-center rounded-full bg-[#1F271B] text-white px-5 py-2 text-sm manrope-regular">
              Overview
            </div>
          </div>
        </div>

        <div className="border-t border-black/10" />

        <div className="mx-auto px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />

            {/* Left (image) */}
            <div className="py-14 lg:py-16 lg:pr-12">
              <div className="relative w-full rounded-2xl overflow-hidden border border-black/10 bg-black/5 aspect-[4/3]" />
            </div>

            {/* Right (text) */}
            <div className="py-14 lg:py-16 lg:pl-12">
              <h2 className="red-hat-display-light text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Built for Fast, Facility-Based Testing
              </h2>

              <div className="mt-10 space-y-6 manrope-light text-sm md:text-base text-black/65 leading-relaxed max-w-xl">
                <p>
                  Designed for skilled nursing facilities, assisted living communities, LTACs, and post-acute settings,
                  the program delivers same-day results through streamlined logistics and an easy collection process
                  that integrates directly into your existing workflow.
                </p>
                <p>
                  There is no clinical support team required for this program. Facility staff perform the sample
                  collection, and our designated courier transports specimens promptly for testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Collection Support (dark section) */}
      <section id="collection-support" className="mt-16 bg-[#1F271B] text-white scroll-mt-44">
        <div className="border-t border-white/15" />

        <div className="mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full border border-white/25 flex items-center justify-center text-white/80">
              ↓
            </div>
            <div className="inline-flex items-center rounded-full bg-transparent text-white/85 px-5 py-2 text-sm manrope-light border border-white/25">
              Mobile Collection Support
            </div>
          </div>
        </div>

        <div className="border-t border-white/15" style={{ borderTopWidth: '0.3px' }} />

        <div className="mx-auto px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/15" />

            {/* Left (text) */}
            <div className="py-14 lg:py-16 lg:pr-12">
              <h2 className="red-hat-display-light text-2xl md:text-5xl leading-[1.05] tracking-tight text-white my-15">
                Easy, Facility-Driven Sample Collection
              </h2>

              <div className="mt-10 space-y-6 manrope-light text-sm md:text-base text-white/75 leading-relaxed max-w-xl">
                <p>
                  Respiratory samples can be collected quickly by your nursing staff using our provided materials and
                  instructions. The process is straightforward and requires no additional on-site personnel. We supply:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-white/75">
                  <li>Collection swabs and transport media</li>
                  <li>Instructions for proper specimen handling</li>
                  <li>Labels and requisition materials</li>
                  <li>Scheduled courier pickup times</li>
                </ul>
                <p>
                  This model keeps the workflow simple for your team while ensuring specimens are prepared correctly
                  for PCR analysis.
                </p>

                <h3 className="red-hat-display-medium text-xl text-white">Same-Day Courier Service</h3>
                <p>
                  Once samples are collected, our designated courier picks them up the same day and transports them
                  directly to the laboratory. This reliable scheduling ensures that respiratory tests remain fast,
                  predictable, and easy for facilities to manage.
                </p>
              </div>
            </div>

            {/* Right (image) */}
            <div className="py-14 lg:py-16 lg:pl-12 mt-15">
              <div className="relative w-full rounded-2xl overflow-hidden aspect-[4/3]">
                <img 
                  src="/resp2.jpg" 
                  alt="Mobile Respiratory Collection" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PCR Diagnostics (light section) */}
      <section id="pcr-diagnostics" className="mt-16 scroll-mt-44">
        <div className="border-t border-black/10" />

        <div className="mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full border border-black/20 flex items-center justify-center text-black/70">
              ↓
            </div>
            <div className="inline-flex items-center rounded-full bg-[#1F271B] text-white px-5 py-2 text-sm manrope-regular">
              PCR Diagnostics
            </div>
          </div>
        </div>

        <div className="border-t border-black/10" />

        <div className="mx-auto px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />

            {/* Left (image) */}
            <div className="py-14 lg:py-16 lg:pr-12">
              <div className="relative w-full rounded-2xl overflow-hidden border border-black/10 bg-black/5 aspect-[4/3]" />
            </div>

            {/* Right (text) */}
            <div className="py-14 lg:py-16 lg:pl-12">
              <h2 className="red-hat-display-light text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Laboratory-Based PCR for Respiratory Infections
              </h2>

              <div className="mt-10 space-y-6 manrope-light text-sm md:text-base text-black/65 leading-relaxed max-w-xl">
                <p>
                  Our respiratory PCR diagnostics identify common respiratory pathogens with high sensitivity and fast
                  turnaround times. Panels include testing options for:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-black/65">
                  <li>COVID-19</li>
                  <li>Influenza A/B</li>
                  <li>RSV</li>
                  <li>Additional respiratory pathogens depending on facility needs</li>
                </ul>
                <p>
                  PCR technology allows for accurate detection at early stages of infection, supporting timely
                  decision-making and helping facilities act quickly when symptoms arise.
                </p>

                <h3 className="red-hat-display-medium text-xl text-[#1a1a1a]">Same-Day Turnaround</h3>
                <p>
                  Samples collected within the scheduled pickup window are processed the same day. Most facilities
                  receive results the same evening, enabling faster care planning, rapid isolation decisions if needed,
                  and reduced uncertainty for staff and families.
                </p>

                <h3 className="red-hat-display-medium text-xl text-[#1a1a1a]">Clear, Digital Reporting</h3>
                <p>
                  Results are delivered electronically in a clean, structured format that highlights key findings.
                  Reports are designed for quick review and easy addition into facility records.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Workflow (numbered list matches image 3 style) */}
      <section id="clinical-workflow" className="mt-16 scroll-mt-44">
        <div className="border-t border-black/10" />

        <div className="mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full border border-black/20 flex items-center justify-center text-black/70">
              ↓
            </div>
            <div className="inline-flex items-center rounded-full bg-[#1F271B] text-white px-5 py-2 text-sm manrope-regular">
              Clinical Workflow
            </div>
          </div>
        </div>

        <div className="border-t border-black/10" />

        <div className="mx-auto px-6 lg:px-8">
          <div className="py-16">
            <h2 className="red-hat-display-light text-5xl md:text-6xl leading-[1.05] tracking-tight max-w-4xl">
              A Unified Respiratory Testing Solution for Your Facility
            </h2>
          </div>

          <div className="border-t border-black/10" />

          <div className="divide-y divide-black/10">
            {[
              {
                n: '01',
                title: 'Facility Enrollment and Setup',
                body:
                  'Once enrolled in the Respiratory Care Program, your facility receives collection materials, instructions, and a confirmed courier schedule. This ensures smooth integration into your daily workflow.',
              },
              {
                n: '02',
                title: 'Sample Collection by Facility Staff',
                body:
                  'Nurses or designated staff perform the swab collection using our provided materials. The process is quick and designed to fit easily into routine care.',
              },
              {
                n: '03',
                title: 'Designated Courier Pickup',
                body:
                  'Collected samples are picked up the same day by our dedicated courier. Each transfer follows a controlled chain-of-custody process to maintain sample integrity.',
              },
              {
                n: '04',
                title: 'Same-Day PCR Processing',
                body:
                  'Upon arrival at the lab, samples are processed immediately using our PCR workflow. Most results are available the same evening.',
              },
              {
                n: '05',
                title: 'Digital Result Delivery',
                body:
                  'Results are sent electronically in a clear, easy-to-interpret format. Findings are highlighted for quick clinical review and can be added into facility documentation systems.',
              },
              {
                n: '06',
                title: 'Ongoing Support for Facility Workflow',
                body:
                  'While no clinical team is required for this program, our staff remains available for logistical questions, reporting inquiries, and coordination needs. We ensure the respiratory workflow remains smooth, predictable, and aligned with your operational requirements.',
              },
            ].map((step) => (
              <div key={step.n} className="py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[120px_420px_1fr] gap-6 lg:gap-10 items-start">
                  <div className="text-3xl md:text-4xl red-hat-display-light text-black/80">
                    {step.n}
                  </div>
                  <div className="red-hat-display-medium text-2xl md:text-3xl text-[#1a1a1a]">
                    {step.title}
                  </div>
                  <p className="manrope-regular text-sm md:text-base text-black/70 leading-relaxed max-w-3xl">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-black/10" />
          <div className="pb-24" />
        </div>
      </section>
    </main>
  )
}

function SubNav() {
  const navItems = [
    { label: 'Overview', href: '#overview' },
    { label: 'Collection Support', href: '#collection-support' },
    { label: 'PCR Diagnostics', href: '#pcr-diagnostics' },
    { label: 'Clinical Workflow', href: '#clinical-workflow' },
  ]

  return (
    <div className="fixed top-28 left-0 right-0 z-40 bg-[#f7f5ef]/80 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-start gap-10 h-14">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-widest uppercase manrope-bold text-black/80">
              Respiratory Care Program
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


