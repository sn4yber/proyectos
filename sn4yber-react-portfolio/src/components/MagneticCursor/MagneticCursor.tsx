import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const MagneticCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
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
      {/* Cursor principal más sutil */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ 
          backgroundColor: '#8b5cf6',
        }}
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 1.5 : 1,
          opacity: isHovered ? 0.8 : 0.6
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.2
        }}
      />
      
      {/* Ring exterior sutil */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-40 border border-primary/20"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovered ? 1.8 : 1,
          opacity: isHovered ? 0.6 : 0.2
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.5
        }}
      />
    </>
  )
}
