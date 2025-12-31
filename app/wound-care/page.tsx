export default function WoundCareProgramPage() {
  return (
    <main className="bg-[#f7f5ef] text-[#1a1a1a] pt-28">
      <SubNav />

      {/* Hero */}
      <section className="pt-20 lg:pt-20">
        <div className="mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left */}
            <div className="lg:pr-12 pb-12 lg:pb-0">
              <h1 className="manrope-light text-3xl md:text-7xl lg:text-7xl tracking-tight leading-[0.95]">
                Wound Care
                <br />
                Program
              </h1>

              <p className="mt-20 manrope-regular text-sm md:text-base text-black/70 leading-relaxed max-w-xl">
                We combine the option of on-site clinical support, coordinated biopsy services, designated courier pickup, and same day PCR diagnostics to help providers make timely and effective treatment decisions.
              </p>
            </div>

            {/* Right (image placeholder) */}
            <div className="lg:pl-12">
              <div className="relative w-full rounded-2xl overflow-hidden border border-black/5 bg-black/5 aspect-[3/4]">
                <img 
                  src="wound1.jpg" 
                  alt="Wound Care Program" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="mt-16 scroll-mt-44">
        <div className="border-t border-black/5" />

        {/* Pill row */}
        <div className="mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full border border-black/5 flex items-center justify-center text-black/70">
              ↓
            </div>
            <div className="inline-flex items-center rounded-full bg-[#1F271B] text-white px-5 py-2 text-sm manrope-regular">
              Overview
            </div>
          </div>
        </div>

        <div className="border-t border-black/5" />

        <div className="mx-auto px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/5" />

            {/* Left content */}
            <div className="py-14 lg:py-16 lg:pr-12">
              <h2 className="red-hat-display-light text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Comprehensive Support for Facility-Based Wound Management
              </h2>

              <div className="mt-10 space-y-8 manrope-regular text-sm md:text-base text-black/70 leading-relaxed max-w-xl">
                <p>
                  Our Wound Care Program provides an integrated solution for facilities managing complex or chronic
                  wounds. We combine the option of on-site clinical support, coordinated biopsy services, designated
                  courier pickup, and same day PCR diagnostics to help providers make timely and effective treatment
                  decisions.
                </p>
                <p>
                  This program is designed for skilled nursing facilities, long term acute care centers, assisted
                  living communities, and other environments where wound complexity, staffing needs, and rapid
                  diagnostics often overlap.
                </p>

                <h3 className="red-hat-display-bold text-xl text-[#1a1a1a]">Flexible Clinical Support</h3>
                <p>
                  Facilities may choose to work with our partnered wound care team, which provides patient evaluation,
                  biopsy coordination, treatment planning, and ongoing case oversight. This team integrates directly
                  into your workflow and works closely with your nursing leadership.
                </p>
                <p>
                  If your facility already has an established wound care provider or clinical group, our program can
                  operate seamlessly alongside them. We support any clinical team by providing accurate diagnostics,
                  streamlined logistics, and fast reporting without changing your current care structure.
                </p>

                <h3 className="red-hat-display-bold text-xl text-[#1a1a1a]">Same Day PCR Diagnostics</h3>
                <p>
                  Wound samples are processed through our same day PCR platform, providing rapid identification of
                  bacterial pathogens and resistance markers. Fast turnaround enables clinical teams, whether ours or
                  yours, to adjust treatment plans quickly and avoid unnecessary delays. Reports are delivered in a
                  clear, provider-ready format designed for straightforward clinical use.
                </p>

                <h3 className="red-hat-display-bold text-xl text-[#1a1a1a]">Designated Courier for Same Day Pickups</h3>
                <p>
                  To ensure samples reach the lab without delay, we provide a designated courier responsible for same
                  day pickups and direct transportation. This controlled chain of custody supports faster turnaround,
                  consistent timing, and reliable delivery of results, helping facilities maintain a predictable
                  workflow each day.
                </p>

                <h3 className="red-hat-display-bold text-xl text-[#1a1a1a]">Streamlined Logistics and Communication</h3>
                <p>
                  We coordinate all testing supplies, sample handling, courier scheduling, and communication.
                  Facilities receive consistent updates so nursing teams, clinical partners, and the laboratory remain
                  aligned throughout the diagnostic process. This minimizes administrative burden and keeps each case
                  moving efficiently.
                </p>

                <h3 className="red-hat-display-bold text-xl text-[#1a1a1a]">Designed for Facility Workflows</h3>
                <p>
                  The Wound Care Program fits within the operational realities of SNFs, LTACs, ALFs, and similar
                  settings. By offering optional clinical support, reliable same day courier service, rapid
                  diagnostics, and organized logistics, the program improves wound management while reducing the
                  pressure on facility staff.
                </p>
              </div>
            </div>

            {/* Right column placeholder to match layout */}
            <div className="py-14 lg:py-16 lg:pl-12">
              <div className="relative w-full rounded-2xl overflow-hidden border border-black/5 bg-black/5 aspect-[4/3]" />
              <div className="mt-10">
                <h3 className="red-hat-display-medium text-2xl text-[#1a1a1a]">Contact details</h3>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="manrope-regular text-sm text-black/60">Address</div>
                    <div className="mt-2 manrope-regular text-sm text-black/75 leading-relaxed">
                      1435 Wellington Road
                      <br />
                      Windsor, Vic 3181
                      <br />
                      Australia
                    </div>
                  </div>
                  <div>
                    <div className="manrope-regular text-sm text-black/60">Email</div>
                    <a className="mt-2 inline-block manrope-regular text-sm text-black/70 hover:text-black transition-colors" href="mailto:hello@bdl.com">
                      hello@bdl.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile / On-Site Support */}
      <section id="mobile-support" className="mt-16 scroll-mt-44">
        <div className="border-t border-black/5" />

        {/* Pill row */}
        <div className="mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full border border-black/5 flex items-center justify-center text-black/70">
              ↓
            </div>
            <div className="inline-flex items-center rounded-full bg-[#1F271B] text-white px-5 py-2 text-sm manrope-regular">
              Mobile / On-Site Support
            </div>
          </div>
        </div>

        <div className="border-t border-black/5" />

        <div className="mx-auto px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/5" />

            {/* Left content */}
            <div className="py-14 lg:py-16 lg:pr-12">
              <h2 className="red-hat-display-light text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Integrated Support at the Facility Level
              </h2>

              <div className="mt-10 space-y-8 manrope-regular text-sm md:text-base text-black/70 leading-relaxed max-w-xl">
                <p>
                  Our Mobile / On-Site Support is designed to help facilities manage wound cases more efficiently by
                  providing hands-on assistance where it matters most. Facilities may choose to work with our partnered
                  clinical wound care team or allow us to support their existing wound care providers. In either model,
                  our goal is to create a consistent, organized process that strengthens care delivery and reduces
                  operational burden.
                </p>

                <h3 className="red-hat-display-bold text-xl text-[#1a1a1a]">On-Site Clinical Support (Optional)</h3>
                <p>
                  Facilities that select clinical support gain access to an experienced wound care team that evaluates
                  patients, coordinates biopsies, assists with documentation, and helps guide treatment planning. This
                  team collaborates directly with nursing staff, DONs, and medical leadership to ensure wound
                  assessments and collections follow best-practice standards.
                </p>
                <p>
                  Our clinical partners function as an integrated extension of your facility, maintaining communication
                  throughout the patient’s care cycle.
                </p>

                <h3 className="red-hat-display-bold text-xl text-[#1a1a1a]">Support for Existing Wound Care Teams</h3>
                <p>
                  If your facility already has a wound care provider or clinical group, our program can operate
                  seamlessly beside them. We provide:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Testing materials</li>
                  <li>Sample collection support</li>
                  <li>Coordination of courier pickup</li>
                  <li>Clear instructions to ensure proper documentation</li>
                  <li>Rapid communication between the facility and the laboratory</li>
                </ul>
                <p>
                  This structure allows facilities to continue using their preferred clinical team while gaining access
                  to same day PCR diagnostics and reliable logistics.
                </p>

                <h3 className="red-hat-display-bold text-xl text-[#1a1a1a]">Sample Collection and Handling</h3>
                <p>
                  We ensure that all wound samples—whether collected by our clinical team or your existing providers—are
                  handled properly and transferred quickly. Our team provides clear, practical instructions to minimize
                  errors, streamline documentation, and maintain sample integrity.
                </p>

                <h3 className="red-hat-display-bold text-xl text-[#1a1a1a]">Designated Courier Coordination</h3>
                <p>
                  Our designated courier performs same day pickups directly from the facility, ensuring samples reach
                  the laboratory without delay. This controlled process supports predictable turnaround times and
                  strengthens the reliability of your wound care workflow.
                </p>

                <h3 className="red-hat-display-bold text-xl text-[#1a1a1a]">Continuous Communication</h3>
                <p>
                  Throughout the process, our staff remains in contact with your nursing team and clinical partners,
                  providing updates and confirming each step from collection to result delivery. This communication
                  helps avoid delays, reduces confusion, and ensures a smooth experience for both providers and the
                  facility.
                </p>
              </div>
            </div>

            {/* Right column placeholder */}
            <div className="py-14 lg:py-16 lg:pl-12">
              <div className="relative w-full rounded-2xl overflow-hidden border border-black/5 bg-black/5 aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* PCR Diagnostics */}
      <section id="pcr-diagnostics" className="mt-16 scroll-mt-44">
        <div className="border-t border-black/5" />

        {/* Pill row */}
        <div className="mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full border border-black/5 flex items-center justify-center text-black/70">
              ↓
            </div>
            <div className="inline-flex items-center rounded-full bg-[#1F271B] text-white px-5 py-2 text-sm manrope-regular">
              PCR Diagnostics
            </div>
          </div>
        </div>

        <div className="border-t border-black/5" />

        <div className="mx-auto px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/5" />

            {/* Left content */}
            <div className="py-14 lg:py-16 lg:pr-12">
              <h2 className="red-hat-display-light text-5xl md:text-6xl leading-[1.05] tracking-tight">
                Rapid Molecular Testing for Faster, More Informed Care
              </h2>

              <div className="mt-10 space-y-8 manrope-regular text-sm md:text-base text-black/70 leading-relaxed max-w-xl">
                <p>
                  Our wound PCR diagnostics identify 19 clinically significant bacterial, fungal, and viral pathogens
                  using a rapid, extraction-free molecular workflow. This provides clinical teams with fast, actionable
                  information to guide treatment decisions for complex or nonhealing wounds.
                </p>
                <p>
                  Same day reporting allows providers to intervene earlier, reduce uncertainty, and avoid delays
                  associated with traditional culture methods.
                </p>

                <h3 className="red-hat-display-bold text-xl text-[#1a1a1a]">Same Day Turnaround</h3>
                <p>
                  All wound samples collected within the scheduled pickup window are transported by our designated
                  courier and processed the same day. Most facilities receive results that same evening, ensuring timely
                  updates to treatment plans and faster care decisions.
                </p>

                <h3 className="red-hat-display-bold text-xl text-[#1a1a1a]">
                  Comprehensive Pathogen and Resistance Detection
                </h3>
                <p>
                  Our PCR technology provides highly sensitive detection of a broad range of clinically relevant
                  bacterial, fungal, and viral organisms found in complex or nonhealing wounds. By identifying target
                  pathogens directly from the specimen, clinicians receive clear, timely information that supports more
                  informed treatment decisions and helps guide next steps in the wound management process.
                </p>

                <h3 className="red-hat-display-bold text-xl text-[#1a1a1a]">Streamlined Sample Handling</h3>
                <p>
                  Samples collected by our partnered clinical team or the facility’s existing wound care provider
                  follow a standardized collection protocol designed for accuracy and ease of use. We supply all
                  necessary materials, instructions, and labels to ensure consistency.
                </p>
                <p>
                  Our designated courier provides same-day pickup to maintain sample integrity and keep the workflow
                  predictable.
                </p>

                <h3 className="red-hat-display-bold text-xl text-[#1a1a1a]">Clear, Provider-Ready Reporting</h3>
                <p>PCR results are delivered electronically in a clean, easy-to-interpret format that highlights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Identified pathogens</li>
                  <li>Key molecular findings included in the panel</li>
                  <li>Practical notes to support clinical decision-making</li>
                </ul>
                <p>
                  Reports are designed for quick review by providers and seamless integration into facility
                  documentation workflows.
                </p>

                <h3 className="red-hat-display-bold text-xl text-[#1a1a1a]">Integrated Support Across the Facility</h3>
                <p>
                  PCR diagnostics are fully integrated into the Wound Care Program, supporting both facilities that use
                  our partnered clinical team and those that prefer to continue working with their existing wound care
                  providers. Our communication and logistics system ensures that results reach the appropriate
                  clinicians promptly and reliably.
                </p>
              </div>
            </div>

            {/* Right column placeholder */}
            <div className="py-14 lg:py-16 lg:pl-12">
              <div className="relative w-full rounded-2xl overflow-hidden border border-black/5 bg-black/5 aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Workflow */}
      <section id="clinical-workflow" className="mt-16 scroll-mt-44">
        <div className="border-t border-black/5" />

        {/* Pill row */}
        <div className="mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full border border-black/5 flex items-center justify-center text-black/70">
              ↓
            </div>
            <div className="inline-flex items-center rounded-full bg-[#1F271B] text-white px-5 py-2 text-sm manrope-regular">
              Clinical Workflow
            </div>
          </div>
        </div>

        <div className="border-t border-black/5" />

        <div className="mx-auto px-6 lg:px-8">
          <div className="relative grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/5" />

            {/* Left content */}
            <div className="py-14 lg:py-16 lg:pr-12">
              <h2 className="red-hat-display-light text-5xl md:text-6xl leading-[1.05] tracking-tight">
                A Structured Process Designed for Facility Operations
              </h2>

              <div className="mt-10 space-y-8 manrope-regular text-sm md:text-base text-black/70 leading-relaxed max-w-xl">
                <p>
                  Our clinical workflow ensures predictable, efficient wound care support across a variety of
                  post-acute environments. Each step is designed to reduce administrative burden, support timely
                  intervention, and keep communication clear between your staff, our team, and the laboratory.
                </p>

                <ol className="space-y-8">
                  <li>
                    <div className="red-hat-display-bold text-xl text-[#1a1a1a]">
                      1. Facility Enrollment and Setup
                    </div>
                    <p className="mt-3">
                      Once enrolled into the Wound Care Program, we confirm your facility details, establish courier
                      scheduling, provide testing materials, and align our workflow with your current protocols. This
                      ensures a smooth, organized start for your team.
                    </p>
                  </li>

                  <li>
                    <div className="red-hat-display-bold text-xl text-[#1a1a1a]">
                      2. Wound Evaluation and Sample Collection
                    </div>
                    <p className="mt-3">Wound assessments and sample collections may be completed by:</p>
                    <ul className="mt-3 list-disc pl-6 space-y-2">
                      <li>Our partnered wound care team, or</li>
                      <li>Your facility’s existing wound care provider</li>
                    </ul>
                    <p className="mt-3">
                      Both models follow a standardized protocol for swabbing, labeling, and documentation to ensure
                      consistency and sample integrity.
                    </p>
                  </li>

                  <li>
                    <div className="red-hat-display-bold text-xl text-[#1a1a1a]">
                      3. Designated Courier Pickup
                    </div>
                    <p className="mt-3">
                      Collected samples are transferred to our designated courier for same-day pickup. This controlled
                      chain-of-custody process maintains timing reliability and ensures that samples reach the lab
                      without delay.
                    </p>
                  </li>

                  <li>
                    <div className="red-hat-display-bold text-xl text-[#1a1a1a]">
                      4. Same-Day PCR Processing
                    </div>
                    <p className="mt-3">
                      Once received, samples are processed through our rapid PCR platform. Most facilities receive
                      results the same evening, allowing providers to update care plans promptly and proceed with
                      greater confidence.
                    </p>
                  </li>

                  <li>
                    <div className="red-hat-display-bold text-xl text-[#1a1a1a]">
                      5. Digital Result Delivery
                    </div>
                    <p className="mt-3">
                      Reports are delivered electronically in a clean, structured format. Findings are presented
                      clearly and are optimized for fast clinical interpretation and smooth documentation within
                      facility workflows.
                    </p>
                  </li>

                  <li>
                    <div className="red-hat-display-bold text-xl text-[#1a1a1a]">
                      6. Communication and Case Support
                    </div>
                    <p className="mt-3">
                      Throughout the process, our team remains in contact with facility staff and clinical partners,
                      providing updates at every stage from pickup to result delivery. We remain available for
                      questions related to workflow, reporting, and logistics.
                    </p>
                  </li>

                  <li>
                    <div className="red-hat-display-bold text-xl text-[#1a1a1a]">
                      7. Ongoing Program Optimization
                    </div>
                    <p className="mt-3">
                      As your facility continues with the program, we assess efficiency, adjust courier timing as
                      needed, and support communication between your nursing staff and our partnered wound care team.
                      The goal is a stable, predictable workflow that supports improved care and stronger facility
                      operations.
                    </p>
                  </li>
                </ol>
              </div>
            </div>

            {/* Right column placeholder */}
            <div className="py-14 lg:py-16 lg:pl-12">
              <div className="relative w-full rounded-2xl overflow-hidden border border-black/5 bg-black/5 aspect-[4/3]" />
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
    { label: 'Mobile Support', href: '#mobile-support' },
    { label: 'PCR Diagnostics', href: '#pcr-diagnostics' },
    { label: 'Clinical Workflow', href: '#clinical-workflow' },
  ]

  return (
    <div className="fixed top-28 left-0 right-0 z-40 bg-[#f7f5ef]/80 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-start gap-10 h-14">
          <div className="flex items-center gap-4">
            <span className="text-xs tracking-widest uppercase manrope-bold text-black/80">
              Wound Care Program
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


