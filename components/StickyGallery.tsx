'use client'

import Image from 'next/image'

const galleryItems = [
  {
    title: 'All your data in one place',
    description: '100+ labs, your biological age & health report.',
    image: '/placeholder-1.jpg' // User will replace
  },
  {
    title: 'Upload past lab data',
    description: 'Visualize past Quest or Labcorp results.',
    image: '/placeholder-2.jpg' // User will replace
  },
  {
    title: 'Your personalized health plan',
    description: 'Lifestyle, diet, supplement & Rx recommendations.',
    image: '/placeholder-3.jpg' // User will replace
  },
  {
    title: 'Unlimited concierge messaging',
    description: 'Ask questions and get answers from our care team.',
    image: '/placeholder-4.jpg' // User will replace
  }
]

export default function StickyGallery() {
  return (
    <section className="relative bg-white py-24 px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Side - Fixed Content */}
          <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-8rem)] flex flex-col justify-center space-y-8 lg:w-5/12 flex-shrink-0">
            <h2 className="red-hat-display-light text-4xl md:text-5xl lg:text-6xl font-light text-black leading-tight">
              What's included in your membership
            </h2>
            
            <div className="space-y-6">
              <p className="manrope-medium text-xl md:text-2xl text-black">
                Superpower is more than a blood test.
              </p>
              
              <p className="manrope-regular text-lg text-gray-700 leading-relaxed">
                Access an ecosystem of diagnostics and doctor-trusted solutions personalized to you.
              </p>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full transition-all duration-300 font-medium text-lg flex items-center gap-2 group w-fit">
              Join Today
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

          {/* Right Side - Scrolling Gallery in 2 Columns */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {galleryItems.map((item, index) => (
                <div
                  key={index}
                  className="space-y-6"
                >
                  {/* Image Card */}
                  <div className="relative h-[400px] rounded-3xl overflow-hidden bg-gray-100">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <div className="text-center">
                        <svg
                          className="w-16 h-16 mx-auto mb-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-sm">Image placeholder</p>
                        <p className="text-xs mt-1">{item.image}</p>
                      </div>
                    </div>
                    {/* Uncomment when images are added
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      quality={85}
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    */}
                  </div>

                  {/* Text Content */}
                  <div className="space-y-3">
                    <h3 className="red-hat-display-medium text-xl md:text-2xl text-black">
                      {item.title}
                    </h3>
                    <p className="manrope-regular text-base text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

