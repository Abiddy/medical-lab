'use client'

interface Metric {
  number: string
  description: string
}

const metrics: Metric[] = [
  {
    number: '100,000+',
    description: 'Diagnostic samples processed with precision and consistent turnaround.'
  },
  {
    number: '50+',
    description: 'Partner facilities supported across multiple care settings'
  },
  {
    number: '<24 Hours',
    description: 'Same-day PCR results built into every Specialized Care program.'
  },
  {
    number: '10–20%',
    description: 'Typical revenue improvement for facilities using our billing services.'
  }
]

export default function Metrics() {
  return (
    <section className="relative bg-[#1F271B] text-white">
      <div className="mx-auto px-5 py-20 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-0">
          {/* Left label */}
          <div className="flex items-start">
            <div className="flex items-center gap-3 font-inter text-sm tracking-wide text-white/85">
              <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
              <span>&bull; Impressive metrics</span>
            </div>
          </div>

          {/* Right column */}
          <div className="relative lg:pl-24">
            <div className="ml-auto max-w-[820px] font-inter text-lg md:text-xl leading-relaxed text-white/90">
              Born from the collective ambition of industry veterans and technology innovators, our mission is to expedite the journey of groundbreaking healthcare solutions from conception to global markets.
            </div>

            <div className="mt-14 md:mt-16 ml-auto max-w-[820px]">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="pt-16 mb-10 md:pt-20 pb-24 md:pb-10"
                >
                  <div className="font-instrument-serif text-6xl md:text-7xl lg:text-8xl font-light tracking-tight">
                    {metric.number}
                  </div>
                  <p className="mt-6 font-inter font-extralight text-base md:text-lg leading-relaxed text-white/40 max-w-3xl">
                    {metric.description}
                  </p>
                  {index !== metrics.length - 1 && (
                    <div className="mt-10 border-b-[0.2px] border-white/2" />
                  )}
                </div>
          
              ))}
            </div>

            <p className="mt-10 pt-10 border-t-[0.5px] border-white/15 font-inter text-sm text-white/65 ml-auto max-w-[820px]">
              * Add any required disclaimer text for the claims made above using this small fine-print text.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

