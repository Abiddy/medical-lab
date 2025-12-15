'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from '@studio-freight/react-lenis'

interface LenisProviderProps {
  children: ReactNode
}

export default function LenisProvider({ children }: LenisProviderProps) {
  return (
    <Lenis
      root
      options={{
        lerp: 0.1, // Lower = slower, more drag (0.05-0.15 range)
        duration: 1.3, // Scroll duration
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
        smooth: true,
        smoothTouch: false, // Disable on touch devices for better performance
      }}
    >
      {children}
    </Lenis>
  )
}

