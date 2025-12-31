'use client'

import { useRef } from 'react'
import { motion } from 'motion/react'
import { 
  Building2, 
  Home, 
  Hospital, 
  Users, 
  Stethoscope, 
  Activity, 
  Pill, 
  Video
} from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const partners = [
  { name: 'Skilled Nursing Facilities', icon: Hospital },
  { name: 'Nursing Homes', icon: Home },
  { name: 'Long Term Acute Care Facilities', icon: Building2 },
  { name: 'Assisted Living Facilities', icon: Users },
  { name: 'Urgent Care Centers', icon: Activity },
  { name: 'Primary Care and Specialty Clinics', icon: Stethoscope },
  { name: 'Wound Care Teams and Mobile Provider Groups', icon: Activity },
  { name: 'Pharmacies and Wellness Centers', icon: Pill },
  { name: 'Telemedicine and Virtual Care Organizations', icon: Video },
]

export default function WhoWeSupport() {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!containerRef.current || !leftColRef.current) return

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top+=112", // Accounts for navbar height (28 * 4 = 112px)
      end: "bottom bottom",
      pin: leftColRef.current,
      pinSpacing: false,
      onUpdate: (self) => {
        // Optional: you could add some fade or progress effect here
      }
    })
  }, { scope: containerRef })

  return (
    <section ref={containerRef} className="bg-[#f7f5ef] py-32 relative border-b border-black/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-start">
          
          {/* Left Column: Sticky Title */}
          <div ref={leftColRef} className="lg:pr-24 pb-20 lg:pb-0">
            <h2 className="manrope-light text-6xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mb-10">
              Who we <br />support
            </h2>
            <p className="manrope-regular text-lg md:text-xl text-black/60 max-w-md leading-relaxed">
              We provide tailored clinical and diagnostic solutions to a wide range of healthcare partners, ensuring accuracy and efficiency across every care setting.
            </p>
          </div>

          {/* Right Column: List with Vertical Line */}
          <div className="relative lg:pl-24 border-l border-black/10">
            <div className="">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="group py-10 border-b border-black/10 flex items-center gap-8 first:border-t-0"
                >
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-xl bg-transparent border border-black/5 flex items-center justify-center shrink-0 shadow-sm group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <partner.icon size={22} strokeWidth={1.5} />
                  </div>
                  
                  {/* Partner Name */}
                  <h3 className="manrope-regular text-lg md:text-lg text-black/80 group-hover:text-black transition-colors">
                    {partner.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
