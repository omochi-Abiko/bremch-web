'use client'

import { useEffect, useRef } from 'react'

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    setSize()
    window.addEventListener('resize', setSize)

    const blobs = [
      { x: 0.1, y: 0.2, r: 450, sx: 0.8, sy: 0.6, color: [76, 175, 80, 0.75] },
      { x: 0.75, y: 0.5, r: 500, sx: 0.6, sy: 0.7, color: [56, 142, 60, 0.65] },
      { x: 0.4, y: 0.1, r: 380, sx: 0.7, sy: 0.5, color: [129, 199, 132, 0.55] },
      { x: 0.9, y: 0.25, r: 400, sx: 0.5, sy: 0.8, color: [174, 213, 129, 0.45] },
      { x: 0.25, y: 0.75, r: 480, sx: 0.65, sy: 0.55, color: [46, 125, 50, 0.7] },
      { x: 0.6, y: 0.85, r: 350, sx: 0.75, sy: 0.65, color: [102, 187, 106, 0.55] },
    ]

    let t = 0

    const draw = () => {
      const w = window.innerWidth
      const h = window.innerHeight

      // Dark base
      ctx.fillStyle = '#1b5e20'
      ctx.fillRect(0, 0, w, h)

      for (let i = 0; i < blobs.length; i++) {
        const b = blobs[i]
        const phase = i * 1.3
        // Larger movement range
        const cx = w * b.x + Math.sin(t * b.sx * 0.012 + phase) * 150
        const cy = h * b.y + Math.cos(t * b.sy * 0.01 + phase) * 120
        const r = b.r + Math.sin(t * 0.01 + phase) * 80

        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
        const [cr, cg, cb, ca] = b.color
        grad.addColorStop(0, `rgba(${cr},${cg},${cb},${ca})`)
        grad.addColorStop(0.5, `rgba(${cr},${cg},${cb},${ca * 0.5})`)
        grad.addColorStop(1, `rgba(${cr},${cg},${cb},0)`)

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.fill()
      }

      t++
      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', setSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    />
  )
}
