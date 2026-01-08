'use client'

export default function BecomePartner() {
  return (
    <section className="bg-[#f7f5ef] py-24 md:py-40 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center md:text-left">
        <a 
          href="/get-started" 
          className="group inline-flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          <h2 className="manrope-light text-6xl md:text-[7rem] lg:text-[9rem] tracking-tighter text-[#1a1a1a] leading-none transition-all duration-500 group-hover:opacity-60">
            Become a Partner
          </h2>
          <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border border-black/10 flex items-center justify-center transition-all duration-500 group-hover:bg-[#1a1a1a] group-hover:border-[#1a1a1a] shrink-0">
            <span className="text-4xl md:text-6xl text-black font-light transition-all duration-500 group-hover:text-white group-hover:translate-x-1">
              ›
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
