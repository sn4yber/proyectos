import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { useMemo, memo, useCallback } from 'react'
import ElectricBorder from '../ElectricBorder'
import { fetchSkills } from '@/api/fetchSkills'

interface SkillsProps {
  isMobile?: boolean
}

export const Skills = memo(({ isMobile = false }: SkillsProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['skills'],
    queryFn: fetchSkills
  })

  // Always call hooks outside conditionals
  const frontendSkills = data?.frontendSkills ?? []
  const backendSkills = data?.backendSkills ?? []
  const tools = data?.tools ?? []
  const learningSkills = data?.learningSkills ?? []
  const progressBars = data?.progressBars ?? []

  const memoFrontendSkills = useMemo(() => frontendSkills, [frontendSkills])
  const memoBackendSkills = useMemo(() => backendSkills, [backendSkills])
  const memoTools = useMemo(() => tools, [tools])

  const enableAnim = !isMobile

  const TechCategory = ({ title, skills, delay = 0 }: { title: string; skills: typeof frontendSkills; delay?: number }) => (
    <motion.div
      initial={enableAnim ? { opacity: 0, y: 50 } : false}
      whileInView={enableAnim ? { opacity: 1, y: 0 } : undefined}
      transition={enableAnim ? { duration: 0.8, delay } : {}}
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
            <div className="w-20 h-20 rounded-2xl md:group-hover:shadow-glow flex items-center justify-center p-4 transition-all duration-300">
              {skill.icon.startsWith('<svg') ? (
                <span
                  className="w-full h-full object-contain filter brightness-110"
                  style={{ display: 'inline-block' }}
                  dangerouslySetInnerHTML={{ __html: skill.icon }}
                />
              ) : skill.icon.startsWith('http') || skill.icon.startsWith('https') ? (
                <img 
                  src={skill.icon}
                  alt={skill.name}
                  loading="lazy"
                  className="w-full h-full object-contain filter brightness-110"
                />
              ) : (
                <img 
                  src={skill.icon.replace('.svg', '.webp')} 
                  alt={skill.name}
                  loading="lazy"
                  className="w-full h-full object-contain filter brightness-110"
                />
              )}
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
                  src={skill.icon.replace('.svg', '.webp')} 
                  alt={skill.name}
                  loading="lazy"
                  className="w-full h-full object-contain filter brightness-110"
                  style={{ background: '#18181b' }}
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
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
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

  const MemoTechCategory = useCallback(TechCategory, [enableAnim])
  // const MemoLearningProgress = useCallback(LearningProgress, [enableAnim, learningSkills])

  if (isLoading) return <div className="text-center py-10">Cargando...</div>
  if (error) return <div className="text-center py-10 text-red-500">Error al cargar datos</div>
  if (!data) return null

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
          <ElectricBorder color="#8b5cf6" thickness={2} chaos={1.2} speed={1.5} className="rounded-2xl">
            <MemoTechCategory title="Frontend" skills={memoFrontendSkills} delay={0.2} />
          </ElectricBorder>
          <ElectricBorder color="#8b5cf6" thickness={2} chaos={1.2} speed={1.5} className="rounded-2xl">
            <MemoTechCategory title="Backend" skills={memoBackendSkills} delay={0.4} />
          </ElectricBorder>
          <ElectricBorder color="#8b5cf6" thickness={2} chaos={1.2} speed={1.5} className="rounded-2xl">
            <MemoTechCategory title="Herramientas" skills={memoTools} delay={0.6} />
          </ElectricBorder>
        </div>

        {/* Learning Progress Section */}
        {/* <div className="mb-20">
          <MemoLearningProgress delay={0.8} />
        </div> */}

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
})
