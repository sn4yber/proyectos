import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { fetchProjects } from '@/api/fetchProjects'

const ProjectCard3D = lazy(() => import('@/components/ProjectCard3D/ProjectCard3D').then(m => ({ default: m.ProjectCard3D })))

export const Projects = () => {
  const { data: projects = [], isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  })

  const stats = [
    { number: 'muchos +++', label: 'Proyectos' },
    { number: 'sass ', label: 'freelance' },
    { number: 'Web', label: 'Development' },
  ]

  // Detectar si es móvil
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  if (isLoading) return <div className="text-center py-10">Cargando proyectos...</div>
  if (isError) return <div className="text-center py-10 text-red-500">Error al cargar proyectos</div>

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="floating-shape w-64 h-64 bg-primary/10 top-20 left-10"></div>
          <div className="floating-shape w-48 h-48 bg-secondary/10 bottom-20 right-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Mis <span className="text-gradient">Proyectos</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Explorando la innovación a través del código y la creatividad
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-text-secondary text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio de Proyectos</h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="space-y-32">
            <Suspense fallback={<div className="text-center text-lg py-10">Cargando proyectos...</div>}>
              {projects.map((project, index) => (
                <ProjectCard3D 
                  key={project.id} 
                  project={{...project, image: project.image || ''}} 
                  index={index} 
                  isMobile={isMobile} // Prop extra para optimizar
                />
              ))}
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  )
}
