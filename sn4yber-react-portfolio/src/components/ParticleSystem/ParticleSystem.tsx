import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
}

export const ParticleSystem = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const createParticle = (x: number, y: number): Particle => ({
      x,
      y,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
      life: 60,
      maxLife: 60,
    })

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      
      // Crear partículas en la posición del mouse
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push(createParticle(
          e.clientX + (Math.random() - 0.5) * 20,
          e.clientY + (Math.random() - 0.5) * 20
        ))
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Actualizar y dibujar partículas
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life--

        const alpha = particle.life / particle.maxLife
        const size = alpha * 3

        // Gradiente dinámico basado en la posición
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, size * 2
        )
        gradient.addColorStop(0, `rgba(139, 92, 246, ${alpha * 0.8})`)
        gradient.addColorStop(0.5, `rgba(6, 182, 212, ${alpha * 0.6})`)
        gradient.addColorStop(1, `rgba(245, 158, 11, ${alpha * 0.2})`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
        ctx.fill()

        return particle.life > 0
      })

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
