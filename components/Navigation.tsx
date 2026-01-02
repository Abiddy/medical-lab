'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<null | 'specializedCare' | 'salivaTesting' | 'medicalBilling'>(null)
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<null | 'specializedCare' | 'salivaTesting' | 'medicalBilling'>(null)

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const menuItems = {
    specializedCare: [
      { label: 'Wound Care Program', href: '/wound-care' },
      { label: 'Respiratory Care Program', href: '/respiratory-care' },
      { label: 'Sexual Health', href: '#sexual-health', comingSoon: true },
    ],
    salivaTesting: [
      { label: 'Hormone Testing', href: '/hormone-testing' },
      { label: 'Genetic Testing', href: '/genetic-testing' },
    ],
    medicalBilling: [
      { label: 'Revenue Cycle Management', href: '/medical-billing/revenue-cycle' },
      { label: 'Medical Billing & Coding', href: '/medical-billing/coding-billing' },
      { label: 'Prior Authorization', href: '/medical-billing/prior-authorization' },
      { label: 'Eligibility Verification', href: '/medical-billing/eligibility-verification' },
      { label: 'Accounts Receivable', href: '/medical-billing/accounts-receivable' },
      { label: 'Denial Management', href: '/medical-billing/denial-management' },
      { label: 'Credentialing', href: '/medical-billing/credentialing' },
    ]
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#f7f5ef]"
      style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="mx-auto px-6 lg:px-8 relative">
        <div className="flex items-center justify-between md:justify-start h-20 md:h-28">
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <a href="/" className="text-3xl md:text-4xl font-normal tracking-tight text-[#1a1a1a]">
              BDL
            </a>
          </div>

          {/* Vertical Divider (Desktop Only) */}
          <div className="hidden md:block self-stretch w-px bg-black/10 mx-8 lg:mx-14" />

          {/* Desktop Navigation Links */}
          <div className="font-inter hidden md:flex items-center gap-6 lg:gap-12 flex-1 text-base">
            {/* Specialized Care Dropdown */}
            <div className="relative" onMouseEnter={() => setActiveDropdown('specializedCare')}>
              <button type="button" className="text-[#1a1a1a] hover:text-gray-600 transition-colors flex items-center gap-1">
                Specialized Care
                <svg className={`w-3 h-3 transition-transform ${activeDropdown === 'specializedCare' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={["absolute left-0 top-[calc(100%+16px)] transition-all duration-200 ease-out", activeDropdown === 'specializedCare' ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"].join(" ")}>
                <div className="w-[400px] rounded-2xl bg-[#f7f5ef] border border-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.15)] p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {menuItems.specializedCare.map((item) => (
                      item.comingSoon ? (
                        <div key={item.label} className="col-span-2 flex items-center justify-between rounded-xl bg-[#e7dfd3] border border-black/5 px-5 py-6 text-[#1a1a1a] opacity-70 cursor-not-allowed">
                          <span className="text-base font-inter">{item.label} <span className="ml-2 text-xs opacity-50">(Coming Soon)</span></span>
                        </div>
                      ) : (
                        <a key={item.label} href={item.href} className="flex items-center justify-between rounded-xl bg-[#e7dfd3] border border-black/5 px-5 py-6 text-[#1a1a1a] hover:bg-[#e2d8ca] transition-colors">
                          <span className="text-base font-inter">{item.label}</span>
                        </a>
                      )
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Saliva Testing Dropdown */}
            <div className="relative" onMouseEnter={() => setActiveDropdown('salivaTesting')}>
              <button type="button" className="text-[#1a1a1a] hover:text-gray-600 transition-colors flex items-center gap-1">
              Saliva & Genetic Testing
                <svg className={`w-3 h-3 transition-transform ${activeDropdown === 'salivaTesting' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              </button>
              <div className={["absolute left-0 top-[calc(100%+16px)] transition-all duration-200 ease-out", activeDropdown === 'salivaTesting' ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"].join(" ")}>
                <div className="w-[400px] rounded-2xl bg-[#f7f5ef] border border-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.15)] p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {menuItems.salivaTesting.map((item) => (
                      <a key={item.label} href={item.href} className="flex items-center justify-between rounded-xl bg-[#e7dfd3] border border-black/5 px-5 py-6 text-[#1a1a1a] hover:bg-[#e2d8ca] transition-colors">
                        <span className="text-base font-inter">{item.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Medical Billing Dropdown */}
            <div className="relative" onMouseEnter={() => setActiveDropdown('medicalBilling')}>
              <a href="/medical-billing" className="text-[#1a1a1a] hover:text-gray-600 transition-colors flex items-center gap-1">
              Medical Billing
                <svg className={`w-3 h-3 transition-transform ${activeDropdown === 'medicalBilling' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
              <div className={["absolute left-0 top-[calc(100%+16px)] transition-all duration-200 ease-out", activeDropdown === 'medicalBilling' ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"].join(" ")}>
                <div className="w-[320px] rounded-2xl bg-[#f7f5ef] border border-black/10 shadow-[0_30px_80px_rgba(0,0,0,0.15)] p-2">
                  {menuItems.medicalBilling.map((item) => (
                    <a key={item.label} href={item.href} className="block px-5 py-3 text-base manrope-medium text-black/70 hover:text-black hover:bg-black/5 rounded-xl transition-all">
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="/providers" className="text-[#1a1a1a] hover:text-gray-600 transition-colors">For Providers</a>
            <a href="/faq" className="text-[#1a1a1a] hover:text-gray-600 transition-colors">FAQ</a>
          </div>

          {/* CTA Button (Desktop Only) */}
          <div className="hidden md:flex items-center ml-auto">
            <a 
              href="/get-started"
              className="px-12 py-5 rounded-md transition-colors text-base font-normal bg-[#1a1a1a] hover:bg-[#2d2d2d] text-white whitespace-nowrap"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden z-50 p-2 text-[#1a1a1a]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={["w-full h-0.5 bg-current transition-all", isMenuOpen ? "rotate-45 translate-y-[9px]" : ""].join(" ")} />
              <span className={["w-full h-0.5 bg-current transition-all", isMenuOpen ? "opacity-0" : ""].join(" ")} />
              <span className={["w-full h-0.5 bg-current transition-all", isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""].join(" ")} />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
        {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 z-40 bg-[#f7f5ef] md:hidden overflow-y-auto"
            >
              <div className="flex flex-col pt-28 pb-10 px-6 space-y-6">
                {/* Specialized Care Accordion */}
                <div className="border-b border-black/5 pb-4">
                  <button
                    onClick={() => setMobileActiveDropdown(mobileActiveDropdown === 'specializedCare' ? null : 'specializedCare')}
                    className="flex items-center justify-between w-full text-2xl manrope-medium"
                  >
                    Specialized Care
                    <svg className={`w-5 h-5 transition-transform ${mobileActiveDropdown === 'specializedCare' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileActiveDropdown === 'specializedCare' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 pt-6 pl-4">
                          {menuItems.specializedCare.map((item) => (
                            item.comingSoon ? (
                              <div key={item.label} className="text-lg text-black/40 manrope-light">
                                {item.label} <span className="text-xs">(Coming Soon)</span>
                              </div>
                            ) : (
                              <a key={item.label} href={item.href} className="text-lg text-black/70 hover:text-black manrope-light" onClick={() => setIsMenuOpen(false)}>
                                {item.label}
                              </a>
                            )
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Saliva Testing Accordion */}
                <div className="border-b border-black/5 pb-4">
                  <button
                    onClick={() => setMobileActiveDropdown(mobileActiveDropdown === 'salivaTesting' ? null : 'salivaTesting')}
                    className="flex items-center justify-between w-full text-2xl manrope-medium"
                  >
                    Saliva & Genetic Testing
                    <svg className={`w-5 h-5 transition-transform ${mobileActiveDropdown === 'salivaTesting' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileActiveDropdown === 'salivaTesting' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 pt-6 pl-4">
                          {menuItems.salivaTesting.map((item) => (
                            <a key={item.label} href={item.href} className="text-lg text-black/70 hover:text-black manrope-light" onClick={() => setIsMenuOpen(false)}>
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Medical Billing Accordion */}
                <div className="border-b border-black/5 pb-4">
                  <button
                    onClick={() => setMobileActiveDropdown(mobileActiveDropdown === 'medicalBilling' ? null : 'medicalBilling')}
                    className="flex items-center justify-between w-full text-2xl manrope-medium"
                  >
                    Medical Billing
                    <svg className={`w-5 h-5 transition-transform ${mobileActiveDropdown === 'medicalBilling' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileActiveDropdown === 'medicalBilling' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 pt-6 pl-4">
                          <a href="/medical-billing" className="text-lg text-black font-semibold manrope-medium border-b border-black/5 pb-2" onClick={() => setIsMenuOpen(false)}>
                            Overview
                          </a>
                          {menuItems.medicalBilling.map((item) => (
                            <a key={item.label} href={item.href} className="text-lg text-black/70 hover:text-black manrope-light" onClick={() => setIsMenuOpen(false)}>
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a href="/providers" className="text-2xl manrope-medium border-b border-black/5 pb-4" onClick={() => setIsMenuOpen(false)}>For Providers</a>
                <a href="/faq" className="text-2xl manrope-medium border-b border-black/5 pb-4" onClick={() => setIsMenuOpen(false)}>FAQ</a>

                <div className="pt-10">
                  <a 
                    href="/get-started"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex w-full py-6 rounded-xl bg-[#1a1a1a] text-white text-xl manrope-medium shadow-xl items-center justify-center"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
        )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
