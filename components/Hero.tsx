'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/b3.png"
          alt="Medical laboratory"
          fill
          className="object-cover"
          priority
        />
        {/* Light Green Grainy Gradient from Bottom */}
        <div 
          className="absolute inset-0 bg-gradient-to-t from-green-50/60 via-green-50/20 to-transparent"
          style={{
            backgroundImage: `
              linear-gradient(to top, rgba(240, 253, 244, 0.6), rgba(248, 255, 250, 0.2) 50%, transparent),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")
            `,
          }}
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-start justify-center min-h-[calc(100vh-6rem)] gap-8">
        <h1 className="red-hat-display-medium text-4xl md:text-6xl lg:text-8xl font-light text-black leading-tight text-left animate-fadeInUp">
          Your Partner in <br/>
          Better Healthcare
        </h1>

        <p className="manrope-light text-black text-xl md:text-2xl font-extralight text-left max-w-2xl animate-fadeInUp-delay-1">
          Connecting the systems that matter most
        </p>

        <button className="manrope-medium bg-black hover:bg-gray-200 text-white px-10 py-4 rounded-full transition-all duration-300 animate-fadeInUp-delay-2">
          View Services
        </button>
      </div>
    </section>
  )
}



