import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

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
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Project Images */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      className="relative group"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="glass-morphism rounded-2xl p-6 mb-6">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-xl"
                        />
                      </div>
                      
                      {project.codeImage && (
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          viewport={{ once: true }}
                          className="absolute -bottom-6 -right-6 w-32 h-24 glass-morphism rounded-xl p-2"
                        >
                          <img
                            src={project.codeImage}
                            alt="Code preview"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </motion.div>
                      )}
                    </motion.div>
                    
                    <motion.div 
                      className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {project.id}
                    </motion.div>
                  </div>
                </div>

                {/* Project Info */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <motion.div 
                      className="inline-block px-4 py-2 bg-gradient-surface rounded-full text-sm font-medium text-secondary border border-white/10"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.category}
                    </motion.div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-gradient">
                      {project.title}
                    </h3>
                    
                    <p className="text-text-secondary leading-relaxed text-lg">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.span
                          key={featureIndex}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 bg-background-surface rounded-full text-sm text-text-primary border border-white/10"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-3 text-text-primary">Tecnologías usadas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 bg-gradient-primary/20 rounded-full text-sm text-primary border border-primary/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-primary rounded-lg text-white font-medium hover:shadow-glow transition-all duration-300"
                      >
                        <Github size={20} />
                        Ver Código
                      </motion.a>
                      
                      <motion.a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-lg text-text-primary font-medium hover:bg-white/5 transition-all duration-300"
                      >
                        <ExternalLink size={20} />
                        Ver Demo
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
