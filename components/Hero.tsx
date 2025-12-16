'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/b3-optimized.jpg"
          alt="Medical laboratory"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Fade Out Effect at Bottom */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"
          style={{
            backgroundImage: 'linear-gradient(to bottom, transparent 0%, transparent 70%, white 100%)',
          }}
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-start justify-center min-h-[calc(100vh-6rem)] gap-8">
        <h1 className="red-hat-display-light text-4xl md:text-6xl lg:text-8xl font-light text-black leading-tight text-left animate-fadeInUp">
          Your Partner in <br/>
          Better Healthcare
        </h1>

        <p className="manrope-light text-black text-xl md:text-2xl font-extralight text-left max-w-2xl animate-fadeInUp-delay-1">
          Connecting the systems that matter most
        </p>

        <button className="red-hat-display-light bg-black hover:bg-gray-200 text-white px-10 py-4 rounded-full transition-all duration-300 animate-fadeInUp-delay-2">
          Get Started
        </button>
      </div>
    </section>
  )
}



