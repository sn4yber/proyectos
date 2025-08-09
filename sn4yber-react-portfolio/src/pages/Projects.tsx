import { motion } from 'framer-motion'
import { ProjectCard3D } from '@/components/ProjectCard3D/ProjectCard3D'

export const Projects = () => {
  const projects = [
    {
      id: '01',
      category: 'Web Development',
      title: 'Sistema de Inventario',
      description: 'Sistema completo para gestión de inventarios desarrollado con tecnologías web modernas. Incluye funcionalidades de registro, actualización y consulta en tiempo real, con una interfaz intuitiva y reportes automáticos.',
      image: '/inventario.png',
      codeImage: '/code.png',
      features: ['Real-time', 'Responsive', 'Java'],
      technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'HTML/CSS', 'JavaScript'],
      links: {
        github: 'https://github.com/sn4yber',
        demo: '#',
      },
    },
    {
      id: '02',
      category: 'Portfolio',
      title: 'Portfolio Personal',
      description: 'Un espacio digital que refleja mi identidad como desarrollador, construido con tecnologías modernas y diseño centrado en la experiencia del usuario.',
      image: '/prfinal.jpg',
      features: ['React', 'TypeScript', 'Responsive', 'Modern'],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      links: {
        github: 'https://github.com/sn4yber',
        demo: '#',
      },
    },
    {
      id: '03',
      category: 'IoT Development',
      title: 'Proyectos Arduino',
      description: 'Diversos proyectos de Internet de las Cosas utilizando Arduino, sensores y actuadores para crear soluciones automatizadas e inteligentes.',
      image: '/katana.png',
      features: ['IoT', 'Arduino', 'Sensores', 'Automatización'],
      technologies: ['Arduino', 'C++', 'Sensores', 'Actuadores', 'Circuitos'],
      links: {
        github: 'https://github.com/sn4yber',
        demo: '#',
      },
    },
  ]

  const stats = [
    { number: '4+', label: 'Proyectos' },
    { number: 'Arduino', label: 'IoT' },
    { number: 'Web', label: 'Development' },
  ]

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
            {projects.map((project, index) => (
              <ProjectCard3D 
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
