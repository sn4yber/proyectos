import { Project } from '@/components/ProjectCard3D/ProjectCard3D'

export const fetchProjects = async (): Promise<Project[]> => {
  // Simulación de fetch a una API (puedes reemplazar por fetch real)
  return [
    {
      id: '01',
      category: 'Web Development',
      title: 'LIVO - Sistema de Gestión de Inventario y Ventas',
      description: 'Sistema completo de gestión empresarial que integra inventario, punto de venta (POS) y reportes en tiempo real. Construido con Spring Boot (backend) y React + TypeScript (frontend), diseñado para pequeñas y medianas empresas.',
      characteristics: 'Sistema integral que incluye gestión completa de productos (CRUD) con dashboard estadístico en tiempo real, sistema POS con carrito de compras y múltiples métodos de pago (Efectivo, Tarjeta, Transferencia, PSE), generación automática de tickets exportables a PNG, gestión de compras con proveedores, control de stock con alertas de productos agotados, reportes y analytics con gráficos interactivos usando Chart.js, productos más vendidos y análisis de rentabilidad. Interfaz SPA 100% responsiva con sidebar colapsible, animaciones fluidas y caché optimizado con Caffeine para máximo rendimiento.',
      image: '/contable.png',
      features: ['Dashboard en tiempo real', 'POS con múltiples pagos', 'Gestión de compras', 'Reportes y Analytics', 'Exportación de tickets', 'Control de stock'],
      technologies: ['Java 21', 'Spring Boot 3.3', 'React 18', 'TypeScript', 'PostgreSQL', 'Vite', 'Chart.js', 'Caffeine Cache'],
      links: {
        github: 'https://github.com/sn4yber/menchap-app-api',
        demo: '#',
      },
      status: 'finalizado etapa de desarrollo',
    },
    {
      id: '02',
      category: 'saas freelance',
      title: 'sistema de reservas de citas',
      description: 'Sistema de reservas de citas para servicios profesionales, diseñado para facilitar la gestión de horarios y citas. Permite a los usuarios reservar, modificar y cancelar citas de manera sencilla, con notificaciones automáticas y una interfaz amigable.',
      characteristics: 'Aplicación SaaS completa que automatiza la gestión de citas para profesionales y negocios. Los usuarios pueden ver disponibilidad en tiempo real, reservar citas con confirmación instantánea, recibir recordatorios automáticos por email, y los administradores tienen un panel completo para gestionar horarios, clientes y servicios ofrecidos.',
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
      category: 'Full-Stack E-Commerce',
      title: 'NebulaTech E-Commerce v3.0.0',
      description: 'Sistema de comercio electrónico full-stack moderno, construido con arquitectura escalable y mejores prácticas de desarrollo. Combina Spring Boot para el backend API REST con React + TypeScript para el frontend, creando una solución completa para gestión de productos, usuarios y pedidos en línea.',
      characteristics: 'Plataforma e-commerce completa lista para producción con sistema integral de gestión de usuarios (registro público, autenticación JWT con refresh automático, roles ADMIN/USER con BCrypt). Incluye catálogo dinámico con búsqueda avanzada y filtros inteligentes, carrito persistente entre sesiones con cálculo automático de totales, autocompletado de datos personales en checkout, trazabilidad completa de pedidos vinculados a usuarios, protección de rutas administrativas. Dashboard profesional con estadísticas en tiempo real, gráficos de ventas con GSAP, alertas de stock bajo, CRUD completo de productos y usuarios, análisis de comportamiento y exportación de datos. Base de datos PostgreSQL en Neon con Spring Data JPA.',
      image: '/tec.png',
      features: ['Autenticación JWT + Roles', 'Dashboard con métricas', 'Carrito persistente', 'Trazabilidad de pedidos', 'Panel de administración', 'Filtros avanzados'],
      technologies: ['Java 24', 'Spring Boot 3.5', 'React 19', 'TypeScript 5.8', 'Spring Security', 'PostgreSQL', 'TanStack Query', 'Tailwind 4.1', 'GSAP 3.13', 'Vite 7.1'],
      links: {
        github: 'https://github.com/sn4yber/PR-Ecomeerse-carlosDev-comunity',
        demo: 'https://ecomersee.netlify.app',
      },
      status: 'procuccion',
    },

     {
      id: '04',
      category: 'plataforma de cusos y sala de belleza',
      title: ' Academia Deidis',
      description: 'Sistema completo de gestión de inscripciones para talleres y servicios de academia/peluquería. Sistema completo de gestión de inscripciones para cursos y talleres de peluquería y belleza. Plataforma moderna con landing page atractiva y panel administrativo potente para gestionar todo el proceso de matriculación..',
      characteristics: 'Plataforma web que permite a los usuarios explorar cursos disponibles, inscribirse en talleres de peluquería y belleza, y gestionar sus reservas de servicios. Incluye un panel administrativo para que los administradores puedan agregar nuevos cursos, gestionar inscripciones, y llevar un seguimiento de los pagos. La landing page está diseñada para atraer a nuevos estudiantes con información clara y llamadas a la acción efectivas.',
      image: '/deidis.png',
      features: ['Gestión de cursos y talleres', 'Inscripciones en línea', 'Panel administrativo', 'Landing page atractiva', 'Gestión de pagos', 'galeria de capacitaciones y servicios', ],
      technologies: ['node js', 'typescript', 'React 19', 'Axios', 'tailwind css', 'PostgreSQL(NEON)', 'React Hot Toast', 'express', 'vitest ', 'Vite 7.1'],
      links: {
        github: 'https://github.com/sn4yber',
        demo: 'https://academiadeidis.com/',
      },
      status: 'en producción ',
    },
    {
      id: '05',
      category: 'Mobile App - Personal Project',
      title: ' ShellApp',
      description: 'Una aplicación móvil de bienestar emocional y productividad personal construida con React Native y Expo. Proyecto personal creado con amor para mi prometida Shelsin, diseñado como una herramienta útil y práctica para su día a día, no solo un detalle que se ve y se olvida.',
      characteristics: 'ShellApp es una aplicación integral de autocuidado que combina planificación diaria, seguimiento emocional y recursos de aprendizaje. Incluye ShellSpace, un hub central con 9 secciones integradas: Entrada (reflexión y preparación del día), Checklist (tareas y organización), Explorar (recursos curados de Arte & Dibujo, Maquillaje Creativo, Manualidades, Color & UI, Curiosidad), Pausa (ejercicios de mindfulness), Progreso (seguimiento de logros), Recompensas (sistema de motivación), Aprender (educación continua), Cierre (reflexión del día con selector de ánimo), y Resumen (análisis semanal). Construida con arquitectura modular siguiendo principios SOLID para mantener un código limpio, escalable y profesional. Cada funcionalidad fue cuidadosamente pensada para brindar organización, apoyo emocional y aprendizaje continuo.',
      video: '/shellapp.mp4',
      features: ['Hub ShellSpace con 9 secciones', 'Registro de pensamientos', 'Seguimiento emocional', 'Recursos curados de aprendizaje', 'Sistema de recompensas', 'Análisis semanal', 'Iconografía SVG personalizada', 'UI/UX moderna'],
      technologies: ['React Native', 'Expo SDK 54.0.0', '@react-navigation/native', 'TypeScript', 'react-native-svg'],
      links: {
        github: 'https://github.com/sn4yber',
        demo: '#',
      },
      status: 'en desarrollo activo',
      
    },

    {
      id: '05',
      category: 'plataforma metafy  gestion finaciera ',
      title: ' Metafy',
      description: 'MetaFy es una app de finanzas personales que ayuda a organizar gastos, planear metas y tomar mejores decisiones con datos claros.',
      characteristics: 'MetaFy nace como una solución para personas que quieren dejar de “administrar a ciegas” su dinero y empezar a gestionarlo con estructura. Su enfoque combina simplicidad de uso con lógica financiera práctica: registrar movimientos, entender hábitos, definir objetivos y dar seguimiento constante al progreso, tanto en móvil como en web.',
      video: '/metafy.mp4',
      features: ['Seguimiento de gastos', 'Planificación de metas', 'Análisis financiero', 'Reportes personalizados', 'Sistema de ahorro', 'Notificaciones financieras', 'Iconografía SVG personalizada', 'UI/UX moderna'],
      technologies: ['React Native', 'Expo SDK 54.0.0', '@react-navigation/native', 'javascript', 'react-native-svg', 'react-query', 'tailwind css'],
      links: {
        github: 'https://github.com/sn4yber',
        demo: 'https://met4fy-app-financiera.netlify.app/',
      },
      status: 'en produccion activa',
      
    },
  ]
}
