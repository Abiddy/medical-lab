'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isAllPagesHovered, setIsAllPagesHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white backdrop-blur-sm shadow-md' 
        : 'bg-transparent'
    }`} style={{ borderBottom: '0.5px solid rgba(255, 255, 255, 0.3)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="/" className={`text-xl font-manrope font-light tracking-tight transition-colors ${
              isScrolled ? 'text-[#1a1a1a]' : 'text-black'
            }`}>
              Bioanalysis Diagnostic Laboratories
            </a>
          </div>

          {/* Pill-shaped Navigation Container with Dropdown */}
          <div className="hidden md:block relative text-xs font-light">
            <div 
              className="flex items-center bg-white backdrop-blur-sm rounded-full pr-1 pl-5 gap-6 shadow-sm"
              onMouseEnter={() => setIsAllPagesHovered(true)}
              onMouseLeave={() => setIsAllPagesHovered(false)}
            >
              {/* All Pages with Dropdown */}
              <div className="relative">
                <button className="flex items-center gap-1 text-[#1a1a1a] hover:text-gray-600 transition-colors font-medium">
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
                className="text-[#1a1a1a] hover:text-gray-600 transition-colors font-medium"
              >
                SERVICES
              </a>

              {/* Billing */}
              <a
                href="#billing"
                className="text-[#1a1a1a] hover:text-gray-600 transition-colors font-medium"
              >
                BILLING
              </a>

              {/* Book a Call Button */}
              <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 my-1 rounded-full transition-colors text-sm uppercase">
                Get Started
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

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-[#1a1a1a]' : 'text-white'
            }`}
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
          <div className={`md:hidden py-4 space-y-4 ${
            isScrolled ? 'bg-white' : 'bg-transparent'
          }`}>
            <a
              href="#all-pages"
              className={`block transition-colors ${
                isScrolled
                  ? 'text-[#1a1a1a] hover:text-gray-600'
                  : 'text-white hover:text-gray-300'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              All Pages
            </a>
            <a
              href="#services"
              className={`block transition-colors ${
                isScrolled
                  ? 'text-[#1a1a1a] hover:text-gray-600'
                  : 'text-white hover:text-gray-300'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#billing"
              className={`block transition-colors ${
                isScrolled
                  ? 'text-[#1a1a1a] hover:text-gray-600'
                  : 'text-white hover:text-gray-300'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Billing
            </a>
            <button 
              className={`w-full text-left transition-colors ${
                isScrolled
                  ? 'text-[#1a1a1a] hover:text-gray-600'
                  : 'text-white hover:text-gray-300'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Call
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}



