'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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
          <div className="flex-shrink-0">
            <a href="/" className={`text-2xl font-semibold tracking-tight transition-colors ${
              isScrolled ? 'text-[#1a1a1a]' : 'text-white'
            }`}>
              BDL
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className=" font-inter hidden md:flex items-center space-x-8">
            <a
              href="#specialized-care"
              className={`transition-colors flex items-center gap-1 ${
                isScrolled 
                  ? 'text-[#1a1a1a] hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              Specialized Care
              <svg
                className="w-4 h-4"
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
              href="#saliva-genetic"
              className={`transition-colors flex items-center gap-1 ${
                isScrolled 
                  ? 'text-[#1a1a1a] hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              Saliva & Genetic Testing
              <svg
                className="w-4 h-4"
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
              className={`transition-colors flex items-center gap-1 ${
                isScrolled 
                  ? 'text-[#1a1a1a] hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              Medical Billing
              <svg
                className="w-4 h-4"
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
              className={`transition-colors ${
                isScrolled 
                  ? 'text-[#1a1a1a] hover:text-gray-600' 
                  : 'text-white hover:text-gray-300'
              }`}
            >
              For Providers
            </a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <button className={`px-6 py-2.5 rounded-lg transition-colors font-medium ${
              isScrolled
                ? 'bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white'
                : 'bg-[#2d2d2d] hover:bg-[#3d3d3d] text-white'
            }`}>
              Book a Call
            </button>
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
              href="#specialized-care"
              className={`block transition-colors ${
                isScrolled
                  ? 'text-[#1a1a1a] hover:text-gray-600'
                  : 'text-white hover:text-gray-300'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Specialized Care
            </a>
            <a
              href="#saliva-genetic"
              className={`block transition-colors ${
                isScrolled
                  ? 'text-[#1a1a1a] hover:text-gray-600'
                  : 'text-white hover:text-gray-300'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Saliva & Genetic Testing
            </a>
            <a
              href="#medical-billing"
              className={`block transition-colors ${
                isScrolled
                  ? 'text-[#1a1a1a] hover:text-gray-600'
                  : 'text-white hover:text-gray-300'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Medical Billing
            </a>
            <a
              href="#providers"
              className={`block transition-colors ${
                isScrolled
                  ? 'text-[#1a1a1a] hover:text-gray-600'
                  : 'text-white hover:text-gray-300'
              }`}
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



