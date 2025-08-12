import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const MagneticCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      const newPoint = { x: e.clientX, y: e.clientY }
      setMousePosition(newPoint)
      
      // Desactivado: No crear rastro en MagneticCursor
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
  }, [mousePosition])

  return (
    <>
      {/* Solo cursor principal sin rastro */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50"
        style={{ 
          backgroundColor: '#00bfff',
        }}
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 1.2 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 1200,
          damping: 40,
          mass: 0.1
        }}
      />
    </>
  )
}
