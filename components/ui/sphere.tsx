"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function Sphere({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>()
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      const container = canvas.parentElement
      if (container) {
        const size = Math.min(container.offsetWidth, container.offsetHeight)
        canvas.width = size * 2
        canvas.height = size * 2
        canvas.style.width = `${size}px`
        canvas.style.height = `${size}px`
      }
    }

    resize()
    window.addEventListener("resize", resize)

    const drawSphere = () => {
      const width = canvas.width
      const height = canvas.height
      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(width, height) * 0.4

      ctx.clearRect(0, 0, width, height)

      // Create gradient for base sphere
      const baseGradient = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        0,
        centerX,
        centerY,
        radius
      )
      baseGradient.addColorStop(0, "rgba(240, 250, 240, 0.9)")
      baseGradient.addColorStop(1, "rgba(220, 240, 220, 0.6)")

      // Draw base sphere
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.fillStyle = baseGradient
      ctx.fill()

      // Draw animated color streaks
      const numStreaks = 8
      const streakWidth = radius * 0.15
      
      for (let i = 0; i < numStreaks; i++) {
        const angle = (timeRef.current * 0.5 + (i / numStreaks) * Math.PI * 2) % (Math.PI * 2)
        const streakAngle = angle
        
        // Create streak gradient
        const streakGradient = ctx.createLinearGradient(
          centerX + Math.cos(streakAngle) * radius * 0.5,
          centerY + Math.sin(streakAngle) * radius * 0.5,
          centerX - Math.cos(streakAngle) * radius * 0.5,
          centerY - Math.sin(streakAngle) * radius * 0.5
        )
        
        // Vary green shades for streaks
        const greenIntensity = 0.4 + Math.sin(timeRef.current + i) * 0.3
        streakGradient.addColorStop(0, `rgba(${50 + greenIntensity * 100}, ${150 + greenIntensity * 80}, ${50 + greenIntensity * 100}, 0)`)
        streakGradient.addColorStop(0.5, `rgba(${50 + greenIntensity * 100}, ${150 + greenIntensity * 80}, ${50 + greenIntensity * 100}, 0.6)`)
        streakGradient.addColorStop(1, `rgba(${50 + greenIntensity * 100}, ${150 + greenIntensity * 80}, ${50 + greenIntensity * 100}, 0)`)

        // Draw streak as an arc
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius * 0.7, streakAngle - streakWidth / radius, streakAngle + streakWidth / radius)
        ctx.lineWidth = streakWidth
        ctx.strokeStyle = streakGradient
        ctx.lineCap = "round"
        ctx.stroke()
      }

      // Add subtle shadow for depth
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      const shadowGradient = ctx.createRadialGradient(
        centerX + radius * 0.3,
        centerY + radius * 0.3,
        0,
        centerX,
        centerY,
        radius
      )
      shadowGradient.addColorStop(0, "rgba(0, 0, 0, 0)")
      shadowGradient.addColorStop(1, "rgba(0, 0, 0, 0.1)")
      ctx.fillStyle = shadowGradient
      ctx.fill()

      timeRef.current += 0.02
    }

    const animate = () => {
      drawSphere()
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Start animation after a brief delay
    setTimeout(() => {
      canvas.style.opacity = "1"
      animate()
    }, 100)

    return () => {
      window.removeEventListener("resize", resize)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <div className={cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-500"
        style={{ outline: "none" }}
      />
    </div>
  )
}

