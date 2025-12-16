'use client'

import { useEffect, useRef, useState } from 'react'

interface PerformanceStat {
  number: string
  description: string
  suffix?: string
}

const stats: PerformanceStat[] = [
  {
    number: '100000',
    suffix: '+',
    description: 'Diagnostic samples processed with precision and consistent turnaround.'
  },
  {
    number: '50',
    suffix: '+',
    description: 'Partner facilities supported across multiple care settings'
  },
  {
    number: '24',
    suffix: ' Hours',
    description: 'Same-day PCR results built into every Specialized Care program.'
  },
  {
    number: '10-20',
    suffix: '%',
    description: 'Typical revenue improvement for facilities using our billing services.'
  }
]

function useCountUp(target: string, duration: number = 2000, isVisible: boolean = false) {
  const [count, setCount] = useState('0')
  
  useEffect(() => {
    if (!isVisible) return
    
    // Handle ranges like "10-20"
    if (target.includes('-')) {
      setCount(target)
      return
    }
    
    const targetNum = parseInt(target.replace(/,/g, ''))
    if (isNaN(targetNum)) {
      setCount(target)
      return
    }
    
    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(easeOutQuart * targetNum)
      
      setCount(current.toLocaleString())
      
      if (progress === 1) {
        clearInterval(timer)
      }
    }, 16)
    
    return () => clearInterval(timer)
  }, [target, duration, isVisible])
  
  return count
}

function StatCard({ stat, index }: { stat: PerformanceStat; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp(stat.number, 2000, isVisible)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <div 
      ref={ref}
      className="flex flex-col items-start gap-4 animate-fadeInUp"
      style={{ animationDelay: `${index * 0.1}s`, opacity: 0, animationFillMode: 'forwards' }}
    >
      <div className="flex items-baseline gap-1">
        <span className="red-hat-display-light text-5xl md:text-6xl lg:text-7xl font-light text-black">
          {count}
        </span>
        {stat.suffix && (
          <span className="red-hat-display-light text-3xl md:text-4xl lg:text-5xl font-light text-black">
            {stat.suffix}
          </span>
        )}
      </div>
      <p className="manrope-regular text-base md:text-lg text-gray-700 leading-relaxed max-w-md">
        {stat.description}
      </p>
    </div>
  )
}

export default function Performance() {
  return (
    <section className="relative bg-white py-20 md:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="red-hat-display-light text-3xl md:text-4xl lg:text-5xl font-light text-black mb-16 md:mb-20">
          Our Performance
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20 lg:gap-12 xl:gap-16">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

