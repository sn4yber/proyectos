import { useEffect, useRef } from 'react'

export const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Configuración
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = 'ABCDEVELOPERFGHIJKLMNOPQRSNAYBER56789@#$%^&*()_+-=[]{}|;:,.<>?'
    const charArray = chars.split('')
    const fontSize = 14
    const columns = canvas.width / fontSize

    // Array para las gotas
    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    // Función de dibujo
    const draw = () => {
      // Fondo semi-transparente para efecto de desvanecimiento más sutil
      ctx.fillStyle = 'rgba(10, 10, 15, 0.15)' // Más transparente
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Colores de tu paleta personalizada - morado fucsia fuerte
      const colors = [
        'rgba(203, 31, 255, 1)',  // Fucsia-morado fuerte
        'rgba(139, 92, 246, 1)',  // Violeta
        'rgba(155, 0, 250, 1)'    // Morado intenso
      ]
      ctx.font = `12px monospace` // Texto más pequeño

      for (let i = 0; i < drops.length; i++) {
        // Color de tu paleta personalizada
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
        
        const text = charArray[Math.floor(Math.random() * charArray.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.985) { // Menos frecuencia
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 35)

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-40 z-0" // Más opaco
      style={{ background: 'transparent' }}
    />
  )
}
