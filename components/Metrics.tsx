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
    <section className="relative bg-[#1F271B] py-20 md:py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Impressive metrics */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-start gap-8 md:gap-16">
            <div className="flex items-center gap-2 text-white font-inter text-base">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              <span>Impressive metrics</span>
            </div>
            <div className="text-white font-inter text-lg md:text-xl leading-relaxed max-w-2xl">
              Born from the collective ambition of industry veterans and technology innovators, our mission is to expedite the journey of groundbreaking healthcare solutions from conception to global markets.
            </div>
          </div>
        </div>

        {/* Metrics Content - Offset to the right */}
        <div className="ml-0 md:ml-16 lg:ml-24 max-w-4xl">
          <div className="space-y-0">
            {metrics.map((metric, index) => (
              <div key={index} className="flex flex-col gap-4 py-8 border-b border-white/20 last:border-b-0">
                <div className="text-5xl md:text-6xl lg:text-7xl font-light text-white font-instrument-serif">
                  {metric.number}
                </div>
                <p className="text-base text-white leading-relaxed font-inter">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

