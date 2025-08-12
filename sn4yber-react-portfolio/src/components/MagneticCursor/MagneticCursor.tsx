import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const MagneticCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trailPoints, setTrailPoints] = useState<Array<{ x: number; y: number }>>([])
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      const newPoint = { x: e.clientX, y: e.clientY }
      setMousePosition(newPoint)
      
      // Mantener solo los últimos 10 puntos para crear el rastro
      setTrailPoints(prev => {
        const newTrail = [...prev, newPoint]
        return newTrail.slice(-10)
      })
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
      {/* Rastro de sable de luz */}
      {trailPoints.map((point, index) => {
        if (index === 0) return null
        const prevPoint = trailPoints[index - 1]
        const distance = Math.sqrt(
          Math.pow(point.x - prevPoint.x, 2) + Math.pow(point.y - prevPoint.y, 2)
        )
        const angle = Math.atan2(point.y - prevPoint.y, point.x - prevPoint.x) * 180 / Math.PI
        
        return (
          <motion.div
            key={`trail-${index}`}
            className="fixed pointer-events-none"
            style={{
              left: prevPoint.x,
              top: prevPoint.y,
              width: distance,
              height: '2px',
              transformOrigin: '0 50%',
              transform: `rotate(${angle}deg)`,
              background: `linear-gradient(90deg, 
                rgba(0, 191, 255, ${0.8 - (index * 0.08)}) 0%, 
                rgba(0, 191, 255, ${0.6 - (index * 0.06)}) 100%
              )`,
              boxShadow: `0 0 4px rgba(0, 191, 255, ${0.6 - (index * 0.06)})`,
              zIndex: 45 - index,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          />
        )
      })}
      
      {/* Cursor principal sin efectos */}
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
