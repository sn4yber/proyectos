import { Project } from '@/components/ProjectCard3D/ProjectCard3D'

export const fetchProjects = async (): Promise<Project[]> => {
  // Simulación de fetch a una API (puedes reemplazar por fetch real)
  return [
    {
      id: '01',
      category: 'Web Development',
      title: 'LIVO - Sistema de Inventario y Contabilidad',
      description: 'Sistema completo de gestión empresarial que integra inventario, punto de venta (POS), contabilidad y reportes. Construido con Spring Boot (backend) y React + TypeScript (frontend), diseñado específicamente para pequeñas y medianas empresas que buscan digitalizar y optimizar sus procesos.',
      image: '/contable.png',
      features: ['sofware contable y facturacion', 'Responsive , ux y graficas' , 'fullstack application'],
      technologies: ['Java', 'Spring Boot', 'React ', 'typeScript'],
      links: {
        github: 'https://github.com/sn4yber/menchap-app-api',
        demo: '#',
      },
      status: 'en desarrrollo casi listo',
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
      status: 'en producción',
    },
     {
      id: '03',
      category: 'web development',
      title: 'nebulaTech e-commerce',
      description: ' NebulaTech E-Commerce es un proyecto colaborativo de tienda virtual desarrollado con arquitectura full-stack moderna. Combina Spring Boot para el backend API REST con React + TypeScript para el frontend, creando una aplicación escalable para gestión completa de productos gaming, usuarios y pedidos en línea..',
      image: '/tec.png', // Imagen agregada para cumplir con la interfaz Project
      features: ['react', 'typescript', 'spring boot', 'jwt', 'spring security', 'tailwind css'],
      technologies: ['react', 'typescript', 'spring boot', 'jwt', 'spring security', 'tailwind css'],
      links: {
        github: 'https://github.com/sn4yber/PR-Ecomeerse-carlosDev-comunity',
        demo: '#',
      },
      status: 'en desarrollo',
    },
  ]
}
