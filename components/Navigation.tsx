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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg transition-all duration-300" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-normal tracking-tight text-[#1a1a1a]">
              BDL
            </a>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block h-5 w-px bg-gray-200 mx-8"></div>

          {/* Desktop Navigation Links */}
          <div className="font-inter hidden md:flex items-center space-x-6 flex-1 text-sm">
            <a
              href="#specialized-care"
              className="text-[#1a1a1a] hover:text-gray-600 transition-colors flex items-center gap-1"
            >
              <svg
                className="w-3 h-3"
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
            </a>
            <a
              href="#saliva-genetic"
              className="text-[#1a1a1a] hover:text-gray-600 transition-colors flex items-center gap-1"
            >
              Saliva & Genetic Testing
              <svg
                className="w-3 h-3"
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
            </a>
            <a
              href="#medical-billing"
              className="text-[#1a1a1a] hover:text-gray-600 transition-colors flex items-center gap-1"
            >
              Medical Billing
              <svg
                className="w-3 h-3"
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
            </a>
            <a
              href="#providers"
              className="text-[#1a1a1a] hover:text-gray-600 transition-colors flex items-center gap-1"
            >
              For Providers
              <svg
                className="w-3 h-3"
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
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center ml-auto">
            <button className="px-8 py-3 rounded-md transition-colors text-sm font-normal bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white">
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
              All Pages
            </a>
            <a
              href="#saliva-genetic"
              className="block text-[#1a1a1a] hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#medical-billing"
              className="block text-[#1a1a1a] hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Billing
            </a>
            <a
              href="#providers"
              className="block text-[#1a1a1a] hover:text-gray-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}



