'use client'

import { useState } from 'react'

type FormState = {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

export default function GetStarted() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: wire this to your backend / form service
    console.log('Get started form submit:', form)
  }

  return (
    <section id="get-started" className="bg-[#f7f5ef] text-[#1a1a1a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-24 pb-16">
        <h2 className="font-instrument-serif text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight">
          Contact us
        </h2>
      </div>

      <div className="border-t border-black/10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          {/* center vertical divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-black/10" />

          {/* Left column */}
          <div className="py-14 lg:py-16 lg:pr-12">
            <p className="font-inter text-xl md:text-2xl leading-relaxed text-black/80 max-w-xl">
              Whether you're a visionary research team seeking support or an investor looking to make a meaningful
              impact, we're here to facilitate connections that drive the future of healthcare.
            </p>

            <form onSubmit={onSubmit} className="mt-12 space-y-8 max-w-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="block">
                  <span className="block font-inter text-sm text-black/70 mb-2">Your name</span>
                  <input
                    value={form.name}
                    onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                    className="w-full rounded-md border border-black/15 bg-transparent px-4 py-3 font-inter text-sm outline-none focus:border-black/30"
                  />
                </label>

                <label className="block">
                  <span className="block font-inter text-sm text-black/70 mb-2">Email address</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
                    className="w-full rounded-md border border-black/15 bg-transparent px-4 py-3 font-inter text-sm outline-none focus:border-black/30"
                  />
                </label>
              </div>

              <label className="block">
                <span className="block font-inter text-sm text-black/70 mb-2">Contact number</span>
                <input
                  value={form.phone}
                  onChange={(e) => setForm((s) => ({ ...s, phone: e.target.value }))}
                  className="w-full rounded-md border border-black/15 bg-transparent px-4 py-3 font-inter text-sm outline-none focus:border-black/30"
                />
              </label>

              <label className="block">
                <span className="block font-inter text-sm text-black/70 mb-2">Company name</span>
                <input
                  value={form.company}
                  onChange={(e) => setForm((s) => ({ ...s, company: e.target.value }))}
                  className="w-full rounded-md border border-black/15 bg-transparent px-4 py-3 font-inter text-sm outline-none focus:border-black/30"
                />
              </label>

              <label className="block">
                <span className="block font-inter text-sm text-black/70 mb-2">Message</span>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                  rows={7}
                  className="w-full rounded-md border border-black/15 bg-transparent px-4 py-3 font-inter text-sm outline-none focus:border-black/30 resize-none"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-[#1F271B] hover:bg-[#273222] text-white px-10 py-4 font-inter text-sm transition-colors"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Right column */}
          <div className="py-14 lg:py-16 lg:pl-12">
            {/* Image slot (you'll replace this) */}
            <div className="rounded-2xl border border-black/10 bg-black/5 aspect-[4/3] w-full" />

            <div className="mt-10">
              <h3 className="font-inter text-2xl md:text-3xl font-medium text-[#1a1a1a]">
                Contact details
              </h3>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="font-inter text-sm text-black/60">Address</div>
                  <div className="mt-2 font-inter text-sm text-black/80 leading-relaxed">
                    1435 Wellington Road
                    <br />
                    Windsor, Vic 3181
                    <br />
                    Australia
                  </div>
                </div>

                <div>
                  <div className="font-inter text-sm text-black/60">Email</div>
                  <a
                    href="mailto:hello@bdl.com"
                    className="mt-2 inline-block font-inter text-sm text-black/70 hover:text-black transition-colors"
                  >
                    hello@bdl.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


