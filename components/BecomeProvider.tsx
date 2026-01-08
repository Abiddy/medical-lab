'use client'

interface BecomePartnerProps {
  variant?: 'light' | 'dark'
}

export default function BecomePartner({ variant = 'light' }: BecomePartnerProps) {
  const isDark = variant === 'dark'
  
  return (
    <section className={`${isDark ? 'bg-[#1F271B]' : 'bg-[#f7f5ef]'} py-24 md:py-40 border-t ${isDark ? 'border-white/10' : 'border-black/10'}`}>
      <div className="mx-auto px-6 lg:px-8 text-center md:text-left">
        <a 
          href="/get-started" 
          className="group inline-flex flex-col text-center md:flex-row items-center gap-8 md:gap-12 outline-none"
          aria-label="Become a Partner"
        >
          <h2 className={`manrope-light text-6xl md:text-[7rem] lg:text-[7rem] ${isDark ? 'text-white' : 'text-[#1a1a1a]'} leading-none transition-all duration-500 group-hover:opacity-60 group-focus:opacity-60`}>
            Become a Partner
          </h2>
          <div className={`w-16 h-16 md:w-32 md:h-32 rounded-full border ${isDark ? 'border-white/10' : 'border-black/10'} flex items-center justify-center transition-all duration-500 ${isDark ? 'group-hover:bg-white group-hover:border-white' : 'group-hover:bg-[#1a1a1a] group-hover:border-[#1a1a1a]'} group-focus:bg-${isDark ? 'white' : '[#1a1a1a]'} shrink-0`}>
            <span className={`text-2xl md:text-6xl ${isDark ? 'text-white' : 'text-black'} font-light transition-all duration-500 ${isDark ? 'group-hover:text-[#1F271B]' : 'group-hover:text-white'} group-focus:text-${isDark ? '[#1F271B]' : 'white'} group-hover:translate-x-1`} aria-hidden="true">
              ›
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
