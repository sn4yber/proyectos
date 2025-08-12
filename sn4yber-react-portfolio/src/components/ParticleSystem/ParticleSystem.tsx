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
  const trailPointsRef = useRef<Array<{ x: number; y: number }>>([])
  const lastMoveTimeRef = useRef<number>(Date.now())

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const handleMouseMove = (e: MouseEvent) => {
      const newPoint = { x: e.clientX, y: e.clientY }
      mouseRef.current = newPoint
      lastMoveTimeRef.current = Date.now()
      
      // Mantener solo los últimos 12 puntos para crear el rastro de sable de luz
      trailPointsRef.current.push(newPoint)
      if (trailPointsRef.current.length > 12) {
        trailPointsRef.current.shift()
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
      ctx.clearRect(0, 0, canvas.width, canvas.height) // Limpiar completamente el canvas

      // Calcular fade basado en tiempo sin movimiento
      const timeSinceLastMove = Date.now() - lastMoveTimeRef.current
      const fadeMultiplier = Math.max(0, 1 - (timeSinceLastMove / 2000)) // Se desvanece en 2 segundos

      // Dibujar rastro de sable de luz
      if (trailPointsRef.current.length > 1 && fadeMultiplier > 0) {
        for (let i = 1; i < trailPointsRef.current.length; i++) {
          const prevPoint = trailPointsRef.current[i - 1]
          const currentPoint = trailPointsRef.current[i]
          
          const alpha = (i / trailPointsRef.current.length) * 0.9 * fadeMultiplier
          
          // Línea principal del sable más gruesa (8px)
          ctx.strokeStyle = `rgba(0, 191, 255, ${alpha})`
          ctx.lineWidth = 8
          ctx.lineCap = 'round'
          ctx.beginPath()
          ctx.moveTo(prevPoint.x, prevPoint.y)
          ctx.lineTo(currentPoint.x, currentPoint.y)
          ctx.stroke()
          
          // Línea interior más brillante (5px)
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.7})`
          ctx.lineWidth = 5
          ctx.beginPath()
          ctx.moveTo(prevPoint.x, prevPoint.y)
          ctx.lineTo(currentPoint.x, currentPoint.y)
          ctx.stroke()
          
          // Línea central muy brillante (2px)
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(prevPoint.x, prevPoint.y)
          ctx.lineTo(currentPoint.x, currentPoint.y)
          ctx.stroke()
        }
      }

      // Si no hay movimiento por más de 2 segundos, limpiar el rastro gradualmente
      if (timeSinceLastMove > 2000) {
        trailPointsRef.current = []
      }

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
