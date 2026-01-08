'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowDown } from 'lucide-react'

type FAQItem = {
  question: string
  answer: string
}

type FAQCategory = {
  id: string
  label: string
  items: FAQItem[]
}

const faqData: FAQCategory[] = [
  {
    id: 'specialized-care',
    label: 'Specialized Care',
    items: [
      {
        question: 'How do I start working with your Specialized Care program?',
        answer: 'Getting started is simple. Click “Get Started” and select “Specialized Care.” After you complete the intake form, you’ll be redirected to book your onboarding call. In this call, we review your facility type, workflow needs, and program preferences, then begin setting up your integration.'
      },
      {
        question: 'Who is the Specialized Care program designed for?',
        answer: 'Our Specialized Care program serves SNFs, nursing homes, and long-term care facilities, in addition to clinics, wellness centers, telemedicine groups, and other healthcare organizations seeking a comprehensive, fully integrated solution for patient testing, care coordination, and continuous clinical support.'
      },
      {
        question: 'What does “full integration” include?',
        answer: 'Integration includes patient workflow setup, telemedicine implementation, testing protocols, reporting guidance, dashboards, and ongoing clinical support. We tailor everything to your practice’s needs.'
      },
      {
        question: 'Do you accept insurance?',
        answer: 'Yes. We work with a variety of insurance plans for eligible tests and provide guidance to ensure facilities understand coverage, requirements, and any documentation needed. For services that fall outside insurance, we offer clear cash pay options.'
      },
      {
        question: 'Do you bill facilities for Specialized Care services?',
        answer: 'No. We do not bill facilities for Specialized Care services. All testing is billed directly to insurance when applicable, and we provide clear cash-pay options for services that fall outside insurance coverage. This ensures facilities can implement the program without additional financial burden or administrative complexity.'
      },
      {
        question: 'Do you provide the testing materials?',
        answer: 'Yes. We handle all logistics, including saliva test kits, collection materials, shipping labels/pick up services, and reporting.'
      },
      {
        question: 'Do you offer training for our staff?',
        answer: 'Yes. We provide step-by-step training for specimen collection, ordering, reporting, and workflow management upon request.'
      },
      {
        question: 'Is there a minimum patient volume?',
        answer: 'No minimum is required. We support both smaller facilities and larger organizations, and the program is structured to fit your current workflow while allowing room to grow.'
      }
    ]
  },
  {
    id: 'saliva-genetic',
    label: 'Saliva & Genetic Testing',
    items: [
      {
        question: 'How do I become a provider for your saliva and genetic testing?',
        answer: 'Click “Get Started,” select “Saliva & Genetic Testing,” and complete the provider intake form. After submitting, you’ll be directed to book a quick onboarding call where we confirm your facility details, activate your provider account, and set you up with business pricing.'
      },
      {
        question: 'Who can become a provider?',
        answer: 'Provider eligibility is open to a wide range of organizations, including clinics, wellness centers, naturopathic practices, gyms, pharmacies, telemedicine groups, and similar businesses. It is not limited to licensed physicians or medical facilities.'
      },
      {
        question: 'Is your testing cash-based?',
        answer: 'Yes. All testing is fully cash-based, and we do not submit claims to insurance as saliva is not billed through insurance. Facilities pay business pricing and offer them to patients under their own pricing model.'
      },
      {
        question: 'What’s included in each kit?',
        answer: 'Each kit includes a saliva collection device, step-by-step instructions, a prepaid return mailer, and secure, clinician-accessible digital results.'
      },
      {
        question: 'How fast are results delivered?',
        answer: 'Results are typically available within 4 - 7 business days once the sample reaches the lab. Reports are sent securely to the provider.'
      },
      {
        question: 'Do we need to integrate with your system to become a provider?',
        answer: 'No. There is no integration required. Facilities can start ordering kits immediately after onboarding.'
      }
    ]
  },
  {
    id: 'medical-billing',
    label: 'Medical Billing',
    items: [
      {
        question: 'How do I begin using your billing services?',
        answer: 'Click “Get Started,” choose “Medical Billing,” and complete the form. You’ll be redirected to book an onboarding call where we review your specialty, workflow, and billing needs before activating your account.'
      },
      {
        question: 'Who can use your billing services?',
        answer: 'Any medical provider, practice, or facility that bills insurance can work with us. We support clinics, specialty practices, SNFs, urgent care centers, wound care groups, labs, and many other healthcare organizations.'
      },
      {
        question: 'Do you bill all types of insurance-related medical services?',
        answer: 'Yes. We handle all insurance-related medical billing. This includes claims submission, denial management, appeals, A/R follow-up, and payer communication across virtually all specialties. If your services involve insurance billing, we can support the entire revenue cycle.'
      }
    ]
  }
]

export default function FAQ() {
  const [activeCategory, setActiveSection] = useState(faqData[0].id)
  const [openItem, setOpenItem] = useState<string | null>(null)

  const toggleItem = (question: string) => {
    setOpenItem(openItem === question ? null : question)
  }

  return (
    <section className="bg-[#f7f5ef] text-[#1a1a1a] pt-24 md:pt-40 pb-24 md:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Category Bubbles */}
        <div className="flex flex-wrap gap-3 mb-12 md:mb-16">
          {faqData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveSection(cat.id)
                setOpenItem(null)
              }}
              className={[
                "px-6 py-2.5 rounded-full border transition-all text-xs md:text-sm manrope-medium tracking-wide uppercase",
                activeCategory === cat.id 
                  ? "bg-black text-white border-black" 
                  : "bg-transparent text-black/50 border-black/10 hover:border-black/30 hover:text-black"
              ].join(" ")}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24">
          
          {/* Left Column: Title & Contact */}
          <div className="flex flex-col h-full lg:sticky lg:top-44 h-fit">
            <h2 className="manrope-light text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] md:leading-[0.9] mb-8 md:mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="hidden lg:block mt-auto">
              <p className="manrope-regular text-base text-black/60 mb-8 max-w-xs">
                If you have further questions, please reach out via our Contact page.
              </p>
              <a
                href="/get-started"
                className="inline-block px-10 py-4 bg-[#1F271B] text-white manrope-medium rounded-md hover:bg-black transition-all"
              >
                Contact us
              </a>
            </div>
          </div>

          {/* Right Column: Content Area */}
          <div className="lg:pl-24 lg:border-l border-black/10">
            {/* Header for Mobile only */}
            <div className="lg:hidden mb-12 flex items-center justify-between border-b border-black/5 pb-6">
              <span className="manrope-bold text-xs uppercase tracking-[0.2em] text-black/40">
                {faqData.find(c => c.id === activeCategory)?.label} FAQS
              </span>
            </div>

            {/* Accordion List */}
            <div className="divide-y divide-black/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {faqData.find(c => c.id === activeCategory)?.items.map((item, i) => (
                    <div key={i} className="py-6 md:py-8">
                      <button
                        onClick={() => toggleItem(item.question)}
                        className="flex w-full items-center justify-between text-left group"
                      >
                        <span className="manrope-regular text-lg md:text-xl lg:text-2xl text-black/90 group-hover:text-black transition-colors pr-8 leading-tight">
                          {item.question}
                        </span>
                        <div className={[
                          "w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 flex items-center justify-center shrink-0 transition-all duration-500",
                          openItem === item.question ? "bg-[#e7dfd3] rotate-180" : "bg-transparent"
                        ].join(" ")}>
                          <ArrowDown 
                            size={18} 
                            strokeWidth={1.5}
                            className={[
                              "text-black/60 transition-transform duration-500",
                              openItem === item.question ? "text-black" : ""
                            ].join(" ")} 
                          />
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {openItem === item.question && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                            className="overflow-hidden"
                          >
                            <p className="mt-6 md:mt-8 manrope-regular text-sm md:text-base text-black/65 leading-relaxed max-w-3xl">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Contact Link */}
            <div className="lg:hidden mt-16 pt-12 border-t border-black/10">
              <p className="manrope-regular text-base text-black/60 mb-6">
                Still have questions?
              </p>
              <a
                href="/get-started"
                className="inline-block w-full text-center px-10 py-5 bg-[#1F271B] text-white manrope-medium rounded-xl hover:bg-black transition-all"
              >
                Contact our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

