'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Full-width Background Image with Green Tint */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/splash.jpg"
          alt="Medical laboratory"
          fill
          className="object-cover"
          priority
        />
        {/* Green Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-teal-900/50 to-green-800/60" />
      </div>
      
      {/* Content Container - Split Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="font-instrument-serif text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-8 leading-[1.1] tracking-tight">
              Your partner in<br />
              better healthcare
            </h1>
          </div>

          {/* Right Side - CTA */}
          <div className="flex flex-col justify-center items-center lg:items-end">
            <p className="text-white text-xl md:text-2xl mb-8 font-light text-center lg:text-right">
              Connecting the systems that matter most
            </p>
            <button className="bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white px-8 py-4 rounded-lg transition-all duration-300 font-medium text-lg">
              Explore Stem
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}



