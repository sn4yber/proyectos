import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const MagneticCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPrevPosition(mousePosition)
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    window.addEventListener('mousemove', updateCursor)
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Línea de rastro con efecto neón */}
      <motion.div
        className="fixed pointer-events-none z-40"
        style={{
          left: Math.min(mousePosition.x, prevPosition.x),
          top: Math.min(mousePosition.y, prevPosition.y),
          width: Math.abs(mousePosition.x - prevPosition.x) || 1,
          height: Math.abs(mousePosition.y - prevPosition.y) || 1,
          background: `linear-gradient(
            ${Math.atan2(mousePosition.y - prevPosition.y, mousePosition.x - prevPosition.x) * 180 / Math.PI}deg,
            transparent 0%,
            rgba(0, 191, 255, 0.6) 30%,
            rgba(0, 191, 255, 0.8) 50%,
            rgba(0, 191, 255, 0.6) 70%,
            transparent 100%
          )`,
          boxShadow: '0 0 8px rgba(0, 191, 255, 0.6)',
          filter: 'blur(1px)',
        }}
        animate={{
          opacity: isHovered ? 0.8 : 0.5,
        }}
        transition={{
          opacity: { duration: 0.2 }
        }}
      />
      
      {/* Cursor principal con efecto neón */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50"
        style={{ 
          backgroundColor: '#00bfff',
          boxShadow: '0 0 8px #00bfff, 0 0 12px #00bfff',
        }}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 1.3 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 50,
          mass: 0.1
        }}
      />
    </>
  )
}
