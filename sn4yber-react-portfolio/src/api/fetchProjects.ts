import { Project } from '@/components/ProjectCard3D/ProjectCard3D'

export const fetchProjects = async (): Promise<Project[]> => {
  // Simulación de fetch a una API (puedes reemplazar por fetch real)
  return [
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
      image: '/arduino.png', // Imagen agregada para cumplir con la interfaz Project
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
}
