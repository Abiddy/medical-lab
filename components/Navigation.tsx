'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAllPagesHovered, setIsAllPagesHovered] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY
  //     setIsScrolled(scrollPosition > 50)
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  return (
    <nav className="sticky top-6 w-full z-50 md:py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-center">
          {/* Single Pill-shaped Navigation Container with Logo and Navigation */}
          <div className="hidden md:block relative">
            <div 
              className="flex items-center bg-white backdrop-blur-sm rounded-full px-6 py-4 gap-8 shadow-lg"
              onMouseEnter={() => setIsAllPagesHovered(true)}
              onMouseLeave={() => setIsAllPagesHovered(false)}
            >
              {/* Logo inside pill */}
              <a href="/" className="text-base font-manrope font-light tracking-tight text-[#1a1a1a] whitespace-nowrap">
                Bioanalysis Diagnostic Laboratories
              </a>

              {/* Divider */}
              <div className="h-6 w-px bg-gray-300" />

              {/* All Pages with Dropdown */}
              <div className="relative">
                <button className="flex items-center gap-1 text-[#1a1a1a] hover:text-gray-600 transition-colors font-medium text-xs uppercase">
                  ALL PAGES
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${isAllPagesHovered ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Services */}
              <a
                href="#services"
                className="text-[#1a1a1a] hover:text-gray-600 transition-colors font-medium text-xs uppercase"
              >
                SERVICES
              </a>

              {/* Billing */}
              <a
                href="#billing"
                className="text-[#1a1a1a] hover:text-gray-600 transition-colors font-medium text-xs uppercase"
              >
                BILLING
              </a>

              {/* Get Started Button */}
              <button className="bg-black hover:bg-gray-800 text-white px-6 py-2.5 rounded-full transition-colors text-xs uppercase font-medium">
                GET STARTED
              </button>
            </div>
            
            {/* Dropdown Menu - Positioned below the pill */}
            {isAllPagesHovered && (
              <div className="absolute top-full left-0 mt-4 bg-white rounded-lg shadow-xl p-6 border border-gray-100 animate-fadeIn">
                <div className="grid grid-cols-3 gap-2" style={{ gridTemplateColumns: 'auto auto auto' }}>
                  {/* Column 1 */}
                  <div className="flex flex-col gap-1">
                    <a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors text-sm">
                      Homepage
                    </a>
                    <a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors text-sm">
                      About
                    </a>
                    <a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors text-sm">
                      Service
                    </a>
                    <a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors text-sm">
                      Service Details
                    </a>
                    <a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors text-sm">
                      Reviews
                    </a>
                  </div>
                  
                  {/* Column 2 */}
                  <div className="flex flex-col gap-1">
                    <a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors text-sm">
                      Blog
                    </a>
                    <a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors text-sm">
                      Blog Details
                    </a>
                    <a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors text-sm">
                      Give
                    </a>
                    <a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors text-sm">
                      Doctor
                    </a>
                    <a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors text-sm">
                      Doctor Details
                    </a>
                  </div>
                  
                  {/* Column 3 */}
                  <div className="flex flex-col gap-1">
                    <a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors text-sm">
                      Appointment
                    </a>
                    <a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors text-sm">
                      Contact
                    </a>
                    <a href="#" className="text-[#1a1a1a] hover:text-gray-600 transition-colors text-sm">
                      404
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden w-full flex items-center justify-between bg-white rounded-full px-6 py-4 shadow-lg">
            <a href="/" className="text-sm font-manrope font-light text-[#1a1a1a]">
              BDL
            </a>
            <button
              className="text-[#1a1a1a]"
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
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-3xl p-6 shadow-lg space-y-4">
            <a
              href="#all-pages"
              className="block text-[#1a1a1a] hover:text-gray-600 transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              All Pages
            </a>
            <a
              href="#services"
              className="block text-[#1a1a1a] hover:text-gray-600 transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#billing"
              className="block text-[#1a1a1a] hover:text-gray-600 transition-colors text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Billing
            </a>
            <button 
              className="w-full bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full transition-colors text-sm font-medium uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}



