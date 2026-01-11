'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { Calendar, Mail, Phone, Clock } from 'lucide-react'

type FormState = {
  userType: string
  firstName: string
  lastName: string
  email: string
  organization: string
  role: string
  country: string
  interest: string
  message: string
}

export default function GetStartedPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const [form, setForm] = useState<FormState>({
    userType: 'Provider or Health System',
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    role: '',
    country: '',
    interest: '',
    message: '',
  })

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'Other'
  ]

  const interests = [
    'Specialized Care', 'Diagnostics', 'Medical Billing', 'Partnership Inquiry', 'Other'
  ]

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        setForm({
          userType: 'Provider or Health System',
          firstName: '',
          lastName: '',
          email: '',
          organization: '',
          role: '',
          country: '',
          interest: '',
          message: '',
        })
      } else {
        setError(data.error || 'Something went wrong. Please try again later.')
      }
    } catch (err) {
      setError('Failed to send message. Please check your connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main id="main-content" className="min-h-screen bg-white">
      <Navigation />
      
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Column: Image */}
        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-screen">
          <img 
            src="/s2.jpg" 
            alt="Medical professional in laboratory" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Contact Info Overlay */}
          <div className="absolute inset-0 bg-black/40 flex items-end p-8 md:p-16 lg:p-24">
            <div className="text-white space-y-8 max-w-sm">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/50 manrope-bold mb-1">Phone</span>
                    <a href="tel:5629242299" className="text-xl md:text-2xl manrope-light hover:opacity-70 transition-opacity" aria-label="Call us at 562-924-2299">(562) 924-2299</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/50 manrope-bold mb-1">Email</span>
                    <a href="mailto:connect@bdlusa.com" className="text-xl md:text-2xl manrope-light hover:opacity-70 transition-opacity underline underline-offset-4" aria-label="Email us at connect@bdlusa.com">connect@bdlusa.com</a>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest text-white/50 manrope-bold mb-1">Availability</span>
                    <p className="manrope-regular text-sm md:text-base text-white/80 leading-relaxed">
                      Our customer service team is available from 9 am - 5pm PST <br className="hidden md:block" aria-hidden="true" />
                      Monday - Friday
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Content & Form */}
        <div className="lg:w-1/2 bg-[#f7f5ef] pt-32 lg:pt-44 pb-16 px-8 md:px-16 lg:px-24 flex flex-col justify-center">
          <div className="max-w-xl mx-auto w-full">
            <h1 className="manrope-light text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 tracking-tight leading-[1.1]">
              Get started <br className="hidden md:block" aria-hidden="true" /> with BDL today.
            </h1>
            
            <p className="manrope-regular text-base text-black/60 mb-10 leading-relaxed">
              Ready to transform your facility's diagnostics? You can also <a href="https://calendly.com/connect-bdlusa/30min" target="_blank" rel="noopener noreferrer" className="manrope-bold text-[#1a1a1a] hover:opacity-60 underline underline-offset-4 transition-all">Book a Call</a> directly or reach us at <a href="mailto:connect@bdlusa.com" className="manrope-bold text-[#1a1a1a] hover:opacity-60 underline underline-offset-4 transition-all">connect@bdlusa.com</a>
            </p>

            <form onSubmit={onSubmit} className="space-y-8">
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl manrope-medium" role="alert" aria-live="polite">
                  <h3 className="text-lg mb-2">Message Sent!</h3>
                  <p className="text-sm opacity-80">Thank you for reaching out. Our team will get back to you shortly.</p>
                  <button 
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 text-xs font-bold uppercase tracking-widest underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    <label htmlFor="userType" className="block manrope-bold text-[10px] text-black/40 uppercase tracking-widest">I AM*</label>
                    <div className="relative">
                      <select
                        id="userType"
                        name="userType"
                        required
                        value={form.userType}
                        onChange={(e) => setForm((s) => ({ ...s, userType: e.target.value }))}
                        className="w-full appearance-none rounded-none border border-black/10 bg-white px-4 py-4 manrope-regular text-sm outline-none focus:border-blue-500 transition-all cursor-pointer"
                      >
                        <option value="Provider or Health System">Provider or Health System</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black/40">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block manrope-bold text-[10px] text-black/40 uppercase tracking-widest">FIRST NAME*</label>
                      <input
                        id="firstName"
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={(e) => setForm((s) => ({ ...s, firstName: e.target.value }))}
                        className="w-full rounded-none border border-black/10 bg-white px-4 py-4 manrope-regular text-sm outline-none focus:border-blue-500 transition-all"
                        autoComplete="given-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block manrope-bold text-[10px] text-black/40 uppercase tracking-widest">LAST NAME*</label>
                      <input
                        id="lastName"
                        name="lastName"
                        required
                        value={form.lastName}
                        onChange={(e) => setForm((s) => ({ ...s, lastName: e.target.value }))}
                        className="w-full rounded-none border border-black/10 bg-white px-4 py-4 manrope-regular text-sm outline-none focus:border-blue-500 transition-all"
                        autoComplete="family-name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block manrope-bold text-[10px] text-black/40 uppercase tracking-widest">EMAIL*</label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                      className="w-full rounded-none border border-black/10 bg-white px-4 py-4 manrope-regular text-sm outline-none focus:border-blue-500 transition-all"
                      autoComplete="email"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="organization" className="block manrope-bold text-[10px] text-black/40 uppercase tracking-widest">
                      {form.userType === 'Provider or Health System' ? 'PRACTICE / INSTITUTION*' : 'COMPANY*'}
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      required
                      value={form.organization}
                      onChange={(e) => setForm((s) => ({ ...s, organization: e.target.value }))}
                      className="w-full rounded-none border border-black/10 bg-white px-4 py-4 manrope-regular text-sm outline-none focus:border-blue-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="role" className="block manrope-bold text-[10px] text-black/40 uppercase tracking-widest">ROLE*</label>
                    <input
                      id="role"
                      name="role"
                      required
                      value={form.role}
                      onChange={(e) => setForm((s) => ({ ...s, role: e.target.value }))}
                      className="w-full rounded-none border border-black/10 bg-white px-4 py-4 manrope-regular text-sm outline-none focus:border-blue-500 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="country" className="block manrope-bold text-[10px] text-black/40 uppercase tracking-widest">COUNTRY*</label>
                    <div className="relative">
                      <select
                        id="country"
                        name="country"
                        required
                        value={form.country}
                        onChange={(e) => setForm((s) => ({ ...s, country: e.target.value }))}
                        className="w-full appearance-none rounded-none border border-black/10 bg-white px-4 py-4 manrope-regular text-sm outline-none focus:border-blue-500 transition-all cursor-pointer"
                      >
                        <option value="" disabled>Select...</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black/40">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="interest" className="block manrope-bold text-[10px] text-black/40 uppercase tracking-widest">I AM INTERESTED IN</label>
                    <div className="relative">
                      <select
                        id="interest"
                        name="interest"
                        value={form.interest}
                        onChange={(e) => setForm((s) => ({ ...s, interest: e.target.value }))}
                        className="w-full appearance-none rounded-none border border-black/10 bg-white px-4 py-4 manrope-regular text-sm outline-none focus:border-blue-500 transition-all cursor-pointer"
                      >
                        <option value="" disabled>Select...</option>
                        {interests.map(i => <option key={i} value={i}>{i}</option>)}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-black/40">
                        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="block manrope-bold text-[10px] text-black/40 uppercase tracking-widest">COMMENTS</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                      rows={4}
                      className="w-full rounded-none border border-black/10 bg-white px-4 py-4 manrope-regular text-sm outline-none focus:border-blue-500 transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-500 text-xs manrope-medium" role="alert">{error}</p>
                  )}

                  <div className="space-y-6">
                    {/* <p className="manrope-regular text-[11px] text-black/50 leading-relaxed">
                      This site is protected by reCAPTCHA and the Google <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> apply.
                    </p> */}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-36 py-3.5 bg-[#4378f1] text-white manrope-bold text-xs transition-all hover:bg-blue-600 uppercase tracking-widest shadow-lg shadow-blue-500/10 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

