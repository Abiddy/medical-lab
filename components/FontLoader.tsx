'use client'

import { useEffect, useState } from 'react'

export default function FontLoader({ children }: { children: React.ReactNode }) {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  useEffect(() => {
    // Check if fonts are ready
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true)
      })
    } else {
      // Fallback: wait a bit and show content
      setTimeout(() => {
        setFontsLoaded(true)
      }, 1000)
    }
  }, [])

  if (!fontsLoaded) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <h1 
          className="animate-fade-in-out text-6xl md:text-8xl font-light text-black tracking-tight"
          style={{ fontFamily: 'Red Hat Display, sans-serif' }}
        >
          BDL
        </h1>
      </div>
    )
  }

  return <>{children}</>
}
