'use client'

import { Globe } from "./ui/globe"

export default function Hero() {
  return (
    <section className="min-h-screen pt-20 flex flex-col relative">
      <div className="w-full pb-10 relative z-10 border-b border-black/10">
        <div className="relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex flex-col items-center justify-center">
          <h1 className="font-instrument-serif text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 leading-[1.1] relative z-20 px-6 lg:px-8 text-center">
            Your partner in better healthcare.
          </h1>
          <div className="">
            <Globe />
          </div>
        </div>
      </div>

      <div className="relative z-30 mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start px-6 lg:px-8">
        <div className="border-r border-black/10" />
        <div className="flex flex-col items-center lg:items-start gap-6 border-l border-black/10 pl-0 lg:pl-12">
          <p className="text-gray-700 text-xl md:text-2xl font-light">
            Connecting the systems that matter most.
          </p>
          <button className="bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg">
            What we deliver
          </button>
        </div>
      </div>
    </section>
  )
}

