export const fetchSkills = async () => {
  return {
    frontendSkills: [
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'react ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'tailwindcss ', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    ],
    backendSkills: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Node.js', icon: '/Node.js.png' },
      { name: 'Spring Boot', icon: '/Spring.png' },
      { name: 'FastAPI', icon: '/FastAPI.png' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' }
    ],
    tools: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    ],
    learningSkills: [
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', progress: 75, status: 'Activo', startDate: 'Julio 2025', description: 'avanazado con la implemencion de tipos y mas robustes en proyectos con nodejs y react' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', progress: 80, status: 'Activo', startDate: 'Junio 2025', description: 'Hooks avanzados , mas manejo de estados con context api y redux , optimizacion de rendimiento y buenas practicas parte aprendi a usar con la yuda del backend el contexto pra implementar varios fronts en unop solo proyecto' },
    ],
    progressBars: [
      { label: 'Problem Solving', value: 90 },
      { label: 'Frontend Development', value: 80 },
      { label: 'Backend Development', value: 65 },
      { label: 'Database Design', value: 65 },
    ]
  }
}
