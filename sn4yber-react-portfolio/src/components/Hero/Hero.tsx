import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import TextType from '../TextType'

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-shape shape-1 w-64 h-64 bg-primary/20 top-20 left-10 animation-delay-0"></div>
        <div className="floating-shape shape-2 w-48 h-48 bg-secondary/20 top-40 right-20 animation-delay-1000"></div>
        <div className="floating-shape shape-3 w-32 h-32 bg-accent/20 bottom-40 left-1/4 animation-delay-2000"></div>
        <div className="floating-shape shape-4 w-40 h-40 bg-success/20 bottom-20 right-1/3 animation-delay-3000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Avatar */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mx-auto w-32 h-32 mb-8"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full bg-gradient-primary animate-pulse-glow"></div>
            <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center">
              <span className="text-2xl font-bold text-gradient">SN4</span>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span className="block">Snayber</span>
          <span className="block text-gradient">Madrid</span>
          <TextType
            text={["Desarrollador Fullstack", "con enfoque Frontend", "bienvenido a mi portafolio"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            as="span"
            className="block text-gradient mt-2"
          />
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-text-secondary mb-6 max-w-3xl mx-auto"
        >
      
        </motion.p>

        {/* Description */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-10"
        >
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Transformando ideas en código, creando experiencias digitales que conectan y resuelven problemas reales.  
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <button
            onClick={() => scrollToSection('sobre-mi')}
            className="btn-primary group flex items-center gap-2"
          >
            <span>Explorar mi trabajo</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </button>
          
          <button
            onClick={() => scrollToSection('contacto')}
            className="btn-secondary"
          >
            Conectemos
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent mb-4"></div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-text-muted"
          >
            <span className="text-sm">Scroll para descubrir</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
