'use client'

import React from 'react'

export default function PartnerSection() {
  return (
    <section className="bg-[#1F271B] text-white py-24 md:py-40 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <h2 className="manrope-light text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] md:leading-[0.9]">
            A partner built <br className="hidden md:block" />
            around real <br className="hidden md:block" />
            healthcare needs.
          </h2>
          
          <div className="flex flex-col h-full justify-between">
            <p className="manrope-light text-lg md:text-xl lg:text-2xl text-white/20 leading-relaxed max-w-xl">
              We give facilities full flexibility to choose the solutions that fit their needs, whether that is diagnostics, specialized care support, medical billing, or any combination of the three. Each service is powerful on its own and even stronger together, creating a unified system that helps your team work more efficiently and deliver higher quality care.
            </p>
            
            <div className="mt-12 md:mt-16 flex flex-col sm:flex-row gap-8 md:gap-12">
              <a 
                href="https://calendly.com/connect-bdlusa/30min" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 manrope-medium text-base md:text-lg tracking-tight hover:opacity-60 transition-all outline-none focus:underline"
              >
                Book a Call
                <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all group-focus:bg-white group-focus:border-white">
                  <span className="text-xl text-white group-hover:text-[#1F271B] group-focus:text-[#1F271B] transition-colors" aria-hidden="true">›</span>
                </span>
              </a>

              <a 
                href="/get-started" 
                className="group flex items-center gap-4 manrope-medium text-base md:text-lg tracking-tight hover:opacity-60 transition-all outline-none focus:underline"
              >
                Get Started
                <span className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all group-focus:bg-white group-focus:border-white">
                  <span className="text-xl text-white group-hover:text-[#1F271B] group-focus:text-[#1F271B] transition-colors" aria-hidden="true">›</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

