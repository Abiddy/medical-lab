'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { Calendar, Mail, Phone, Clock } from 'lucide-react'

type FormState = {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

export default function GetStartedPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

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

      if (data.success) {
        setIsSuccess(true)
        setForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        })
      } else {
        setError('Something went wrong. Please try again later.')
      }
    } catch (err) {
      setError('Failed to send message. Please check your connection.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Column: Image */}
        <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-screen">
          <img 
            src="/s2.jpg" 
            alt="Get Started" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Column: Content & Form */}
        <div className="lg:w-1/2 bg-[#f7f5ef] pt-32 lg:pt-44 pb-16 px-8 md:px-16 lg:px-24 flex flex-col justify-center">
          <div className="max-w-lg">
            <h1 className="manrope-light text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 tracking-tight leading-[1.1]">
              Get started <br className="hidden md:block" /> with BDL today.
            </h1>
            
            <p className="manrope-regular text-base text-black/60 mb-10 leading-relaxed">
              Ready to transform your facility's diagnostics? You can also <a href="#" className="manrope-bold text-[#1a1a1a] hover:opacity-60 underline underline-offset-4 transition-all">Schedule an Appointment</a> directly or reach us at <a href="mailto:connect@bdlusa.com" className="manrope-bold text-[#1a1a1a] hover:opacity-60 underline underline-offset-4 transition-all">connect@bdlusa.com</a>
            </p>

            <form onSubmit={onSubmit} className="space-y-6">
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-xl manrope-medium">
                  <h3 className="text-lg mb-2">Message Sent!</h3>
                  <p className="text-sm opacity-80">Thank you for reaching out. Our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 text-xs font-bold uppercase tracking-widest underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <label className="block">
                    <span className="block manrope-bold text-[10px] text-black/40 mb-2 uppercase tracking-widest">Your name</span>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                      className="w-full rounded-xl border border-black/10 bg-white/50 px-4 py-4 manrope-regular text-sm outline-none focus:border-black/30 transition-all"
                      placeholder="Your Name"
                    />
                  </label>

                  <label className="block">
                    <span className="block manrope-bold text-[10px] text-black/40 mb-2 uppercase tracking-widest">Email address</span>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                      className="w-full rounded-xl border border-black/10 bg-white/50 px-4 py-4 manrope-regular text-sm outline-none focus:border-black/30 transition-all"
                      placeholder="you@company.com"
                    />
                  </label>

                  <label className="block">
                    <span className="block manrope-bold text-[10px] text-black/40 mb-2 uppercase tracking-widest">Phone number</span>
                    <input
                      required
                      value={form.phone}
                      onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                      className="w-full rounded-xl border border-black/10 bg-white/50 px-4 py-4 manrope-regular text-sm outline-none focus:border-black/30 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </label>

                  <label className="block">
                    <span className="block manrope-bold text-[10px] text-black/40 mb-2 uppercase tracking-widest">Tell us about yourself</span>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                      rows={4}
                      className="w-full rounded-xl border border-black/10 bg-white/50 px-4 py-4 manrope-regular text-sm outline-none focus:border-black/30 transition-all resize-none"
                      placeholder="Tell us a little about yourself..."
                    />
                  </label>

                  {error && (
                    <p className="text-red-500 text-xs manrope-medium">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 rounded-xl bg-[#1a1a1a] text-white manrope-bold text-sm transition-all hover:bg-black uppercase tracking-[0.2em] shadow-lg shadow-black/10 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send message'}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}

