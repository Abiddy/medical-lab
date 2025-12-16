'use client'

import { useEffect, useRef } from 'react'
import Navigation from '@/components/Navigation'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure video plays when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay prevented:', error)
      })
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Navigation inside Hero */}
      <div className="sticky absolute top-0 left-0 right-0 z-20 w-full pt-2">
        <Navigation />
      </div>

      {/* Full-width Background Video */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload="auto"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-black/60 z-[1]" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center justify-center flex-1 gap-8 pb-24">
        <h1 className="red-hat-display-medium text-3xl md:text-6xl lg:text-7xl text-white leading-tight text-center animate-fadeInUp">
          Your Partner in <br/>
          Better Healthcare
        </h1>

        <p className="red-hat-display-light text-white md:text-2xl font-extralight text-center max-w-2xl animate-fadeInUp-delay-1">
          Connecting the systems that matter most
        </p>

        <button className="red-hat-display-medium bg-white hover:bg-gray-100 text-black px-10 py-4 rounded-full transition-all duration-300 animate-fadeInUp-delay-2">
          Get Started
        </button>
      </div>
    </section>
  )
}



