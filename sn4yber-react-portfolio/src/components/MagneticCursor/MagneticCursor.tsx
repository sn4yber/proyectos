import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const MagneticCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    const mouseEnter = () => setCursorVariant('text')
    const mouseLeave = () => setCursorVariant('default')

    window.addEventListener('mousemove', mouseMove)

    // Agregar listeners a elementos interactivos
    const interactiveElements = document.querySelectorAll('button, a, input, textarea')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', mouseEnter)
      el.addEventListener('mouseleave', mouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', mouseMove)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', mouseEnter)
        el.removeEventListener('mouseleave', mouseLeave)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: 'rgba(139, 92, 246, 0.3)',
      mixBlendMode: 'difference' as const,
    }
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.5
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.1
        }}
      />
    </>
  )
}
