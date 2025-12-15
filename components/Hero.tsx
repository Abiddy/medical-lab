'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Full-width Background Image with Green Tint */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/splash.jpg"
          alt="Medical laboratory"
          fill
          className="object-cover"
          priority
        />
        {/* Green Tint Overlay - Darker */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-teal-900/70 to-green-800/80" />
      </div>
      
      {/* Content Container - Split Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center">
            <h1 className="font-instrument-serif text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-8 leading-[1.1]">
              Your partner in<br />
              better healthcare
            </h1>
          </div>

          {/* Vertical Divider Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/30 -translate-x-1/2" />

          {/* Right Side - CTA */}
          <div className="flex flex-col justify-center items-start">
            <p className="text-white text-xl md:text-2xl mb-8 font-light text-left">
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



