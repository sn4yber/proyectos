import { motion } from 'framer-motion'

export const Skills = () => {
  const frontendSkills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  ]

  const backendSkills = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Node.js', icon: '/Node.js.png' },
    { name: 'Spring Boot', icon: '/Spring.png' },
    { name: 'FastAPI', icon: '/FastAPI.png' },
  ]

  const tools = [
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
  ]

  const learningSkills = [
    { 
      name: 'TypeScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      progress: 55,
      status: 'En progreso',
      startDate: 'Julio 2025',
      description: 'Migrando proyectos existentes y aprendiendo tipado avanzado primeras impresiones con typescript'
    },
    { 
      name: 'React', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      progress: 60,
      status: 'Activo',
      startDate: 'Junio 2025',
      description: 'Hooks avanzados, Context API y optimización de rendimiento y primeras experiencias '
    },
    { 
      name: 'Docker', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      progress: 45,
      status: 'Explorando',
      startDate: 'Agosto 2025',
      description: 'Containerización de aplicaciones y orquestación básica para microservicios con spring boot y fastapi'
    }
    
  ]

  const progressBars = [
    { label: 'Problem Solving', value: 90 },
    { label: 'Frontend Development', value: 75 },
    { label: 'Backend Development', value: 65 },
    { label: 'Database Design', value: 65 },
  ]

  const TechCategory = ({ title, skills, delay = 0 }: { title: string; skills: typeof frontendSkills; delay?: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h3 className="text-2xl font-semibold mb-8 text-gradient">{title}</h3>
      <div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: delay + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="group cursor-pointer"
          >
            <div className="w-20 h-20 rounded-2xl glass-morphism flex items-center justify-center p-4 transition-all duration-300 group-hover:shadow-glow">
              <img 
                src={skill.icon} 
                alt={skill.name}
                className="w-full h-full object-contain filter brightness-110"
              />
            </div>
            <p className="mt-3 text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors duration-300">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  const LearningProgress = ({ delay = 0 }: { delay?: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h3 className="text-2xl font-semibold mb-8 text-gradient">🚀 Aprendiendo Actualmente</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {learningSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: delay + index * 0.1 }}
            viewport={{ once: true }}
            className="glass-morphism p-6 rounded-2xl hover:shadow-glow transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-background-surface flex items-center justify-center p-3 flex-shrink-0">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-full h-full object-contain filter brightness-110"
                />
              </div>
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-lg font-semibold text-text-primary">{skill.name}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    skill.status === 'Activo' ? 'bg-green-500/20 text-green-400' :
                    skill.status === 'En progreso' ? 'bg-blue-500/20 text-blue-400' :
                    skill.status === 'Explorando' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {skill.status}
                  </span>
                </div>
                <p className="text-text-secondary text-sm mb-3">{skill.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-text-secondary">Progreso</span>
                    <span className="text-secondary font-semibold">{skill.progress}%</span>
                  </div>
                  <div className="h-2 bg-background-surface rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      transition={{ duration: 1.5, delay: delay + 0.5 + index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                  <p className="text-xs text-text-secondary mt-2">Desde {skill.startDate}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-secondary mb-4 block">03. Habilidades</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stack Tecnológico</h2>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid lg:grid-cols-3 gap-16 mb-20">
          <TechCategory title="Frontend" skills={frontendSkills} delay={0.2} />
          <TechCategory title="Backend" skills={backendSkills} delay={0.4} />
          <TechCategory title="Herramientas" skills={tools} delay={0.6} />
        </div>

        {/* Learning Progress Section */}
        <div className="mb-20">
          <LearningProgress delay={0.8} />
        </div>

        {/* Progress Bars */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-gradient">Competencias</h3>
          <div className="space-y-6">
            {progressBars.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-text-primary font-medium">{item.label}</span>
                  <span className="text-secondary font-semibold">{item.value}%</span>
                </div>
                <div className="h-2 bg-background-surface rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    transition={{ duration: 1.5, delay: 1.4 + index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-primary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
