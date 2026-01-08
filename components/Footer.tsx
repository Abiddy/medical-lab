'use client'

import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <footer className="bg-[#f7f5ef] border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-xl text-black manrope-medium">Bioanalysis Diagnostic Laboratories</h3>
            <p className="manrope-regular text-sm text-gray-600 leading-relaxed">
              Your partner in better healthcare. We provide comprehensive diagnostic and billing solutions to healthcare facilities nationwide.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="red-hat-display-medium text-lg text-black">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="manrope-regular text-sm text-gray-600 hover:text-black transition-colors">
                  Specialized Care
                </a>
              </li>
              <li>
                <a href="#" className="manrope-regular text-sm text-gray-600 hover:text-black transition-colors">
                  Diagnostics
                </a>
              </li>
              <li>
                <a href="#" className="manrope-regular text-sm text-gray-600 hover:text-black transition-colors">
                  Medical Billing
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-6">
            <h4 className="red-hat-display-medium text-lg text-black">Hours</h4>
            <div className="space-y-2">
              <p className="manrope-regular text-sm text-gray-600">
                Mon to Fri: 8AM-6PM
              </p>
              <p className="manrope-regular text-sm text-gray-600">
                Sat: 9AM-5PM
              </p>
              <p className="manrope-regular text-sm text-gray-600">
                Sun: CLOSED
              </p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="red-hat-display-medium text-lg text-black">Newsletter</h4>
            <p className="manrope-regular text-sm text-gray-600">
              Discover new offers and stay up to date
            </p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm manrope-regular focus:outline-none focus:border-gray-400 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white p-3 rounded-lg transition-colors"
                aria-label="Subscribe"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="manrope-regular text-sm text-gray-600">
              © {new Date().getFullYear()} Bioanalysis Diagnostic Laboratories. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/faq" className="manrope-regular text-sm text-gray-600 hover:text-black transition-colors">
                FAQ
              </a>
              <a href="/get-started" className="manrope-regular text-sm text-gray-600 hover:text-black transition-colors">
                Contact
              </a>
              <a href="#" className="manrope-regular text-sm text-gray-600 hover:text-black transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="manrope-regular text-sm text-gray-600 hover:text-black transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

