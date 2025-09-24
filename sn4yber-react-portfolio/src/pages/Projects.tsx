import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

const ProjectCard3D = lazy(() => import('@/components/ProjectCard3D/ProjectCard3D').then(m => ({ default: m.ProjectCard3D })))

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
      category: 'saas freelance',
      title: 'sistema de reservas de citas',
      description: 'Sistema de reservas de citas para servicios profesionales, diseñado para facilitar la gestión de horarios y citas. Permite a los usuarios reservar, modificar y cancelar citas de manera sencilla, con notificaciones automáticas y una interfaz amigable.',
      image: '/appbr.png',
      features: ['react', 'JavaScript', 'Responsive', 'Modern' , 'Node js', 'Tailwind css' , 'typeScript'],
      technologies: ['react', 'tailwind', 'javascript ', 'node js ', 'typescript ' , 'realtimestorage'],
      links: {
        github: 'https://github.com/sn4yber',
        demo: 'https://reserverbr.netlify.app/',
      },
    },



    {
      id: '03',
      category: 'proyecto comercial',
      title: 'sistema de recomendacion de regalos',
      description: 'Sistema de recomendacion  de regalos que atravez  de preguntas y repuestas hace un analisis de datos de ellas y predice cual es regalo perfecto pra la ocasion , viculo afectivo con la persona  y demas cosas que se pueden tener en cuenta para hacer un regalo perfecto.  , se implemento el analisis de datos con librerias de python como numpy y panda para el analisis de datos y machine learning para la prediccion de los regalos.',
      image: '/recomender.png',
      features: ['data analisis', 'python', 'Responsive', 'Modern' , 'machine learning', 'numpy', 'panda'],
      technologies: ['html', 'css', 'javascript', 'python', 'fastApi'],
      links: {
        github: 'https://github.com/sn4yber',
        demo: '#',
      },
    },
    {
      id: '04',
      category: 'IoT Development',
      title: 'Proyectos Arduino',
      description: 'sistema de deteccion de movimiento con implementacion de sensores iot para la automatizacion de un sistema de ocupacion de autobuses en  cartagena se implementaron tambien contadores con pantalla lsd para ver  funcionamiento y ocupacion del mismoo ese proyecto planea ser escalable a algo mas profesional y tecnico.',
      video: '/resultado.mp4',
      features: ['IoT', 'Arduino', 'Sensores', 'Automatización'],
      technologies: ['Arduino', 'pantalla lsd', 'Sensores', 'Actuadores', 'Circuitos'],
      links: {
        github: 'https://github.com/sn4yber',
        demo: '#',
      },
    },

    {
      id: '05',
      category: 'e-commerce de venta de bikinis',
      title: 'Tienda de Bikinis',
      description: 'sistema e-commerce de venta de bikinis donde se hace la gestion de productos, carrito de compras y pagos en linea con una interfaz amigable y moderna.',
      image: '/ecomerse.png',
      features: ['E-commerce', 'Modern', 'Responsive' ,'ventas en linea ' ,],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS' , 'typeScript' , 'prisma'],
      links: {
        github: 'https://github.com/sn4yber',
        demo: 'https://bikinis-shell.netlify.app/',
      },
    },
  ]

  const stats = [
    { number: 'muchos +++', label: 'Proyectos' },
    { number: 'sass ', label: 'freelance' },
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
            <Suspense fallback={<div className="text-center text-lg py-10">Cargando proyectos...</div>}>
              {projects.map((project, index) => (
                <ProjectCard3D key={project.id} project={{...project, image: project.image || ''}} index={index} />
              ))}
            </Suspense>
          </div>
        </div>
      </section>
    </div>
  )
}
