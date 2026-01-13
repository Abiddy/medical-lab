'use client'

export default function Footer() {
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

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="red-hat-display-medium text-lg text-black">Contact</h4>
            <div className="space-y-4">
              <div className="flex flex-col gap-1">
                <span className="manrope-bold text-[10px] uppercase tracking-widest text-black/40">Phone</span>
                <a href="tel:5629242299" className="manrope-regular text-sm text-gray-600 hover:text-black transition-colors">
                  (562) 924-2299
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="manrope-bold text-[10px] uppercase tracking-widest text-black/40">Email</span>
                <a href="mailto:connect@bdlusa.com" className="manrope-regular text-sm text-gray-600 hover:text-black transition-colors underline underline-offset-4">
                  connect@bdlusa.com
                </a>
              </div>
            </div>
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
              <a 
                href="/privacy-policy" 
                className="manrope-regular text-sm text-gray-600 hover:text-black transition-colors"
              >
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

