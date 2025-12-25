'use client'

import { Sphere } from "./ui/sphere"
import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'motion/react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const h1Y = useTransform(scrollYProgress, [0, 1], [0, -160])
  const sphereY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section ref={containerRef} className="min-h-screen pt-20 relative overflow-hidden bg-[#f7f5ef]">
      <div className="mx-auto h-[calc(100vh-5rem)] relative">
        {/* <motion.div style={{ y: sphereY }} className="absolute inset-x-0 top-24 md:top-28 lg:top-32 pointer-events-none opacity-90">
          <div className="mx-auto w-[420px] h-[420px] md:w-[520px] md:h-[520px] lg:w-[620px] lg:h-[620px] relative">
            <Sphere />
          </div>
        </motion.div> */}

        <div className="h-full flex flex-col">
          <div className="pt-10 md:pt-14 lg:pt-20">
            <motion.h1
              style={{ y: h1Y }}
              className="font-instrument-serif text-6xl md:text-7xl lg:text-8xl font-normal text-gray-900 leading-[0.95] tracking-tight max-w-4xl px-10"
            >
              Your partner in better healthcare.
            </motion.h1>
          </div>

          <div className="mt-10 border-t border-black/10" />

          <div className="relative flex-1">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />

            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              <div className="hidden lg:block" />

              <div className="flex items-center justify-center py-12 lg:py-0">
                <div className="text-center lg:text-left max-w-md px-6">
                  <p className="text-gray-700 text-2xl md:text-3xl font-light leading-snug">
                    Connecting the systems that matter most.
                  </p>
                  <div className="mt-8 flex justify-center lg:justify-start">
                    <button className="bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white px-10 py-4 rounded-full transition-colors font-medium text-lg relative z-10">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" border-t border-black/10" />
        </div>
      </div>
    </section>
  )
}

