'use client'

const supportedFacilities = [
  'Skilled Nursing Facilities',
  'Nursing Homes',
  'Long Term Acute Care Facilities',
  'Assisted Living Facilities',
  'Urgent Care Centers',
  'Primary Care and Specialty Clinics',
  'Wound Care Teams and Mobile Provider Groups',
  'Pharmacies and Wellness Centers',
  'Telemedicine and Virtual Care Organizations'
]

export default function StickyGallery() {
  return (
    <section className="relative bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Side - Sticky Content (pins while right side scrolls) */}
          <div className="lg:sticky lg:top-24 lg:self-start space-y-8 lg:w-[45%] flex-shrink-0">
            <h2 className="red-hat-display-light text-4xl md:text-5xl lg:text-6xl font-light text-black leading-tight">
              Who we support
            </h2>
            
            <div className="space-y-6">
              <p className="manrope-regular text-lg text-gray-700 leading-relaxed">
                We partner with healthcare facilities across the care continuum, providing specialized diagnostics and billing solutions that strengthen operations and improve patient outcomes.
              </p>
            </div>

            <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg flex items-center gap-2 group w-fit">
              Join Us!
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Right Side - Scrolling List in 2 Columns (determines scroll length) */}
          <div className="flex-1 lg:w-[55%]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {supportedFacilities.map((facility, index) => (
                <div
                  key={index}
                  className="group relative h-[280px] md:h-[320px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex items-end border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg"
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, black 1px, transparent 0)`,
                      backgroundSize: '32px 32px'
                    }} />
                  </div>

                  {/* Content */}
                  <h3 className="relative z-10 red-hat-display-medium text-2xl md:text-3xl text-black leading-tight">
                    {facility}
                  </h3>

                  {/* Decorative Element */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/5 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

