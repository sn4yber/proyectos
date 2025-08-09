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
      vx: (Math.random() - 0.5) * 4, // Velocidad más suave (era 8)
      vy: (Math.random() - 0.5) * 4,
      life: 80, // Viven menos tiempo (era 120) 
      maxLife: 80,
    })

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      
      // Crear partículas más sutiles al mover el mouse
      for (let i = 0; i < 3; i++) { // Menos partículas (era 8)
        particlesRef.current.push(createParticle(
          e.clientX + (Math.random() - 0.5) * 30, // Área más pequeña
          e.clientY + (Math.random() - 0.5) * 30
        ))
      }
    }

    const handleMouseClick = (e: MouseEvent) => {
      // Explosión más sutil al hacer click
      for (let i = 0; i < 15; i++) { // Menos partículas (era 30)
        const angle = (Math.PI * 2 * i) / 30
        const speed = Math.random() * 15 + 5
        particlesRef.current.push({
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 180,
          maxLife: 180,
        })
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)' // Un poco más de fade para ser menos invasivo
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Actualizar y dibujar partículas
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life--

        const alpha = particle.life / particle.maxLife
        const size = alpha * 4 // Partículas más pequeñas (era 8)

        // Gradiente más sutil
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, size * 2 // Radio más pequeño
        )
        gradient.addColorStop(0, `rgba(139, 92, 246, ${alpha * 0.6})`) // Menos opaco
        gradient.addColorStop(0.3, `rgba(6, 182, 212, ${alpha * 0.4})`)
        gradient.addColorStop(0.7, `rgba(245, 158, 11, ${alpha * 0.3})`)
        gradient.addColorStop(1, `rgba(34, 197, 94, ${alpha * 0.1})`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
        ctx.fill()

        // Punto central más sutil
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.4})` // Menos brillante
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size * 0.3, 0, Math.PI * 2)
        ctx.fill()

        return particle.life > 0
      })

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleMouseClick) // Agregar click
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleMouseClick)
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
