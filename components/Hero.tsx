'use client'

import { Sphere } from "./ui/sphere"
import { useRef, useEffect, useState } from 'react'
import { useScroll, useTransform, motion } from 'motion/react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const h1Y = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -100 : -320])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -60 : -240])
  const sphereY = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <section ref={containerRef} className="min-h-0 md:min-h-[90vh] lg:min-h-screen pt-20 relative overflow-hidden bg-[#f7f5ef]">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.8]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/b4.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="mx-auto h-auto md:h-[calc(100vh-5rem)] relative z-10">
        <div className="h-full flex flex-col md:justify-between">
          <div className="pt-8 md:pt-14 lg:pt-20">
            <motion.h1
              style={{ y: h1Y }}
              className="manrope-light text-5xl md:text-7xl lg:text-8xl font-normal text-gray-900 leading-[1.1] md:leading-[0.95] tracking-tight max-w-4xl px-6 md:px-10"
            >
              Your partner in better healthcare.
            </motion.h1>
          </div>

          <div className="mt-8 md:mt-10 border-t border-black/10" />

          <div className="relative md:flex-1 flex flex-col">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />

            <div className="grid grid-cols-1 lg:grid-cols-2 md:h-full md:flex-1">
              <div className="hidden lg:block" />

              <div className="flex items-center justify-center py-16 md:py-16 lg:py-0">
                <motion.div 
                  style={{ y: contentY }}
                  className="text-center lg:text-left max-w-md px-6"
                >
                  <p className="text-gray-700 text-xl md:text-2xl lg:text-3xl font-light leading-snug">
                    Connecting the systems that matter most.
                  </p>
                  <div className="mt-8 flex justify-center lg:justify-start">
                    <button className="bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white px-8 md:px-10 py-3 md:py-4 rounded-full transition-colors font-medium text-base md:text-lg relative z-10">
                      Get Started
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="border-t border-black/10" />
        </div>
      </div>
    </section>
  )
}

