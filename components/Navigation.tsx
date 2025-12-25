'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<null | 'allPages'>(null)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY
  //     setIsScrolled(scrollPosition > 50)
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#f7f5ef]"
      style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center h-28">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-4xl font-normal tracking-tight text-[#1a1a1a]">
              BDL
            </a>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block self-stretch w-px bg-black/10 mx-14" />

          {/* Desktop Navigation Links */}
          <div className="font-inter hidden md:flex items-center gap-12 flex-1 text-base">
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('allPages')}
            >
              <button
                type="button"
                className="text-[#1a1a1a] hover:text-gray-600 transition-colors flex items-center gap-1"
                aria-expanded={activeDropdown === 'allPages'}
              >
                Specialized Care
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown panel (kept mounted for smooth fade/slide animation) */}
              <div
                className={[
                  "absolute left-0 top-[calc(100%+16px)]",
                  "transition-all duration-200 ease-out",
                  activeDropdown === 'allPages'
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none",
                ].join(" ")}
              >
                <div className="w-[400px] rounded-2xl bg-white border border-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.15)] p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Wound Care Program', href: '/wound-care', span: 'col-span-1' },
                      { label: 'Respiratory Care Program', href: '/respiratory-care', span: 'col-span-1' },
                      { label: 'Sexual Health', href: '#sexual-health', comingSoon: true, span: 'col-span-2' },
                    ].map((item) => {
                      const content = (
                        <>
                          <div className="flex items-center gap-2">
                            <span className="text-base font-inter">
                              {item.label}
                              {item.comingSoon ? (
                                <span className="ml-2 text-xs text-[#1a1a1a]/50">(Coming Soon)</span>
                              ) : null}
                            </span>
                          </div>
                          <span className="text-xl text-[#1a1a1a]/70 group-hover:text-[#1a1a1a] transition-colors">
                            →
                          </span>
                        </>
                      )

                      if (item.comingSoon) {
                        return (
                          <div
                            key={item.label}
                            className={`${item.span} group flex items-center justify-between rounded-xl bg-[#e7dfd3] border border-black/5 px-5 py-6 text-[#1a1a1a] opacity-70 cursor-not-allowed`}
                          >
                            {content}
                          </div>
                        )
                      }

                      return (
                        <a
                          key={item.label}
                          href={item.href}
                          className={`${item.span} group flex items-center justify-between rounded-xl bg-[#e7dfd3] border border-black/5 px-5 py-6 text-[#1a1a1a] hover:bg-[#e2d8ca] transition-colors`}
                        >
                          {content}
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <a href="#saliva-genetic" className="text-[#1a1a1a] hover:text-gray-600 transition-colors flex items-center gap-1">
              Saliva & Genetic Testing
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a href="#medical-billing" className="text-[#1a1a1a] hover:text-gray-600 transition-colors flex items-center gap-1">
              Medical Billing
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a href="#providers" className="text-[#1a1a1a] hover:text-gray-600 transition-colors flex items-center gap-1">
              For Providers
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center ml-auto">
            <button className="px-12 py-5 rounded-md transition-colors text-base font-normal bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white">
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-colors text-[#1a1a1a]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white">
            <a
              href="#specialized-care"
              className="block text-[#1a1a1a] hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Specialized Care
            </a>
            <a
              href="#saliva-genetic"
              className="block text-[#1a1a1a] hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Saliva & Genetic Testing
            </a>
            <a
              href="#medical-billing"
              className="block text-[#1a1a1a] hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Medical Billing
            </a>
            <a
              href="#providers"
              className="block text-[#1a1a1a] hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              For Providers
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}



