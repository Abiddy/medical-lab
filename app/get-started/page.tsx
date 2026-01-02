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
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Get started form submit:', form)
  }

  return (
    <main className="min-h-screen bg-[#f7f5ef]">
      <Navigation />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 min-h-[800px]">
          {/* Vertical Divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />
          
          {/* Left Column: Headline & Schedule */}
          <div className="lg:pr-12 pt-32 md:pt-44 pb-16 md:pb-24 space-y-12">
            <div>
              <h1 className="manrope-light text-5xl md:text-5xl lg:text-5xl tracking-tight leading-[1.1] text-[#1a1a1a]">
                Get Started
              </h1>
              <p className="mt-8 manrope-regular text-lg md:text-xl text-black/60 max-w-md leading-relaxed">
                Ready to transform your facility's diagnostics? Choose how you'd like to connect with our team.
              </p>
            </div>

            {/* Schedule Button Card */}
            <div className="p-8 rounded-[32px] bg-[#1F271B] text-white shadow-xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Calendar className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="manrope-bold text-xl">Quick Schedule</h3>
                  <p className="text-white/50 text-sm">Book a 30-min meeting directly</p>
                </div>
              </div>
              <p className="manrope-light text-white/70 leading-relaxed">
                Skip the back-and-forth. Select a time on our calendar for a one-on-one consultation via Google Meet.
              </p>
              <a
                href="#" // TODO: Add Google Calendar link here
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center py-4 bg-white text-[#1F271B] rounded-xl manrope-bold hover:bg-gray-100 transition-colors"
              >
                Schedule an Appointment
              </a>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 pt-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-black/40 uppercase text-[9px] manrope-bold tracking-widest">
                  <Mail size={10} /> Email
                </div>
                <a href="mailto:connect@bdlusa.com" className="manrope-medium text-base text-black/80 hover:text-black">
                  connect@bdlusa.com
                </a>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-black/40 uppercase text-[9px] manrope-bold tracking-widest">
                  <Phone size={10} /> Phone
                </div>
                <a href="tel:5629242299" className="manrope-medium text-base text-black/80 hover:text-black">
                  (562) 924-2299
                </a>
              </div>
              <div className="space-y-1 col-span-full">
                <div className="flex items-center gap-2 text-black/40 uppercase text-[9px] manrope-bold tracking-widest">
                  <Clock size={10} /> Availability
                </div>
                <p className="manrope-medium text-base text-black/80">
                  Mon - Fri, 9am - 5pm PST
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:pl-12 pt-32 md:pt-44 pb-16 md:pb-24 flex flex-col">
            <div className="bg-white/50 rounded-[40px] p-8 md:p-12 shadow-sm">
              <h3 className="red-hat-display-medium text-2xl text-[#1a1a1a] mb-8">Send us a message</h3>
              
              <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="block">
                  <span className="block font-inter text-xs text-black/50 mb-2 uppercase tracking-wider">Your name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 font-inter text-sm outline-none focus:border-black/30 transition-all"
                  />
                </label>

                <label className="block">
                  <span className="block font-inter text-xs text-black/50 mb-2 uppercase tracking-wider">Email address</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 font-inter text-sm outline-none focus:border-black/30 transition-all"
                  />
                </label>
              </div>

              <label className="block">
                <span className="block font-inter text-xs text-black/50 mb-2 uppercase tracking-wider">Contact number</span>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 font-inter text-sm outline-none focus:border-black/30 transition-all"
                />
              </label>

              <label className="block">
                <span className="block font-inter text-xs text-black/50 mb-2 uppercase tracking-wider">Company name</span>
                <input
                  required
                  value={form.company}
                  onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 font-inter text-sm outline-none focus:border-black/30 transition-all"
                />
              </label>

              <label className="block">
                <span className="block font-inter text-xs text-black/50 mb-2 uppercase tracking-wider">Message</span>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  rows={5}
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-4 font-inter text-sm outline-none focus:border-black/30 transition-all resize-none"
                />
              </label>

              <button
                type="submit"
                className="w-full py-5 rounded-xl bg-[#1a1a1a] text-white manrope-medium text-sm transition-all hover:bg-black uppercase tracking-[0.2em] shadow-lg shadow-black/10"
              >
                Send message
              </button>
            </form>
          </div>

        </div>
      </div>
      </div>
    </main>
  )
}

