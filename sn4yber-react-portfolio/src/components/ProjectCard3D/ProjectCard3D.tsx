import { memo } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, MouseEvent } from 'react'
import { ExternalLink, Github } from 'lucide-react'

export interface Project {
  id: string
  category: string
  title: string
  description: string
  image: string
  codeImage?: string
  features: string[]
  technologies: string[]
  links: {
    github: string
    demo: string
  }
  video?: string
  status: string
}

interface ProjectCard3DProps {
  project: Project
  index: number
  isMobile?: boolean
}

export const ProjectCard3D = memo(({ project, index, isMobile = false }: ProjectCard3DProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  // Desactivar animaciones y efectos pesados en móvil
  const enable3DEffect = !isMobile

  return (
    <motion.div
      ref={ref}
      onMouseMove={enable3DEffect ? handleMouseMove : undefined}
      onMouseLeave={enable3DEffect ? handleMouseLeave : undefined}
      style={enable3DEffect ? { rotateY, rotateX, transformStyle: "preserve-3d" } : {}}
      className={`grid lg:grid-cols-2 gap-16 items-center relative ${
        index % 2 === 1 ? 'lg:grid-flow-dense' : ''
      }`}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="rounded-2xl">
        {/* <ElectricBorder color="#8b5cf6" thickness={2} chaos={1.2} speed={1.5} className="rounded-2xl"> */}
        <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
          <div className="relative">
            <motion.div
              className="relative group"
              style={enable3DEffect ? { transform: "translateZ(75px)", transformStyle: "preserve-3d" } : {}}
              whileHover={enable3DEffect ? { scale: 1.05, transition: { duration: 0.2 } } : {}}
            >
              <div className="p-6">
                <div className="relative">
                  <motion.div
                    className="relative group"
                    style={enable3DEffect ? { transform: "translateZ(75px)", transformStyle: "preserve-3d" } : {}}
                    whileHover={enable3DEffect ? { scale: 1.05, transition: { duration: 0.2 } } : {}}
                  >
                    <div className="glass-morphism rounded-2xl p-6 mb-6 backdrop-blur-xl">
                      {project.image && (
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-xl"
                          style={enable3DEffect ? { transform: "translateZ(50px)" } : {}}
                          loading="lazy"
                        />
                      )}
                      
                      {/* Overlay con efecto holográfico */}
                      <motion.div 
                        className="absolute inset-6 rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          transform: "translateZ(25px)",
                        }}
                      />
                    </div>
                    
                    {project.codeImage && (
                      <motion.div
                        className="absolute -bottom-6 -right-6 w-32 h-24 glass-morphism rounded-xl p-2"
                        style={{
                          transform: "translateZ(100px)",
                        }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <img
                          src={project.codeImage}
                          alt="Code preview"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </motion.div>
                    )}
                  </motion.div>
                  
                  {/* Número del proyecto con glow */}
                  <motion.div 
                    className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl shadow-2xl"
                    style={{
                      transform: "translateZ(125px)",
                      boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)",
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {project.id}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Project Info mejorada */}
      <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
        <motion.div
          className="space-y-6"
          style={{
            transform: "translateZ(50px)",
          }}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Category con efecto neon */}
          <motion.div 
            className="inline-block px-4 py-2 bg-gradient-surface rounded-full text-sm font-medium text-secondary border border-secondary/30 relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            {project.category}
          </motion.div>
          
          {/* Status con efecto */}
          <motion.div 
            className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full text-sm font-medium text-green-400 border border-green-500/30 relative overflow-hidden"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            {project.status}
          </motion.div>
          
          {/* Título con gradiente animado */}
          <motion.h3 
            className="text-3xl md:text-4xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient"
            whileHover={{
              scale: 1.02,
            }}
          >
            {project.title}
          </motion.h3>
          
          <p className="text-text-secondary leading-relaxed text-lg">
            {project.description}
          </p>
          
          {/* Features con animación stagger */}
          <div className="flex flex-wrap gap-2">
            {project.features.map((feature, featureIndex) => (
              <motion.span
                key={featureIndex}
                className="px-3 py-1 bg-background-surface rounded-full text-sm text-text-primary border border-white/10 hover:border-primary/50 transition-colors cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + featureIndex * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                }}
                viewport={{ once: true }}
              >
                {feature}
              </motion.span>
            ))}
          </div>
          
          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-text-primary">Tecnologías usadas:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="px-3 py-1 bg-gradient-primary/20 rounded-full text-sm text-primary border border-primary/30 hover:bg-gradient-primary/30 transition-colors cursor-default"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + techIndex * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(139, 92, 246, 0.4)",
                  }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
          
          {/* Botones con efectos avanzados */}
          <div className="flex gap-4">
            <motion.a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-primary rounded-lg text-white font-medium relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <Github size={20} className="relative z-10" />
              <span className="relative z-10">Ver Código</span>
            </motion.a>
            
            <motion.a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 border border-white/20 rounded-lg text-text-primary font-medium hover:bg-white/5 relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(139, 92, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
              Ver Demo
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
})
