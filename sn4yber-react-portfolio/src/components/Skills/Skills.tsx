import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'
import { useMemo, memo, useCallback } from 'react'
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
  const competencyLevels = data?.competencyLevels ?? []

  const memoFrontendSkills = useMemo(() => frontendSkills, [frontendSkills])
  const memoBackendSkills = useMemo(() => backendSkills, [backendSkills])
  const memoTools = useMemo(() => tools, [tools])
  const memoLearningSkills = useMemo(() => learningSkills, [learningSkills])

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
      <div className={`grid gap-6 ${memoLearningSkills.length === 1 ? 'mx-auto max-w-2xl md:grid-cols-1' : 'md:grid-cols-2'}`}>
        {memoLearningSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: delay + index * 0.12 }}
            viewport={{ once: true }}
            className="glass-morphism p-6 rounded-2xl hover:shadow-glow transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-3 flex-shrink-0">
                {skill.icon.startsWith('<svg') ? (
                  <span
                    className="w-full h-full object-contain filter brightness-110"
                    style={{ display: 'inline-block' }}
                    dangerouslySetInnerHTML={{ __html: skill.icon }}
                  />
                ) : (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    loading="lazy"
                    className="w-full h-full object-contain filter brightness-110"
                  />
                )}
              </div>

              <div className="flex-1 text-left">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h4 className="text-lg font-semibold text-text-primary">{skill.name}</h4>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    {skill.status}
                  </span>
                </div>
                <p className="text-text-secondary text-sm mb-2">{skill.description}</p>
                <p className="text-xs text-text-secondary/90">Desde {skill.startDate} · Nivel {skill.level}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )

  const MemoTechCategory = useCallback(TechCategory, [enableAnim])
  const MemoLearningProgress = useCallback(LearningProgress, [memoLearningSkills])

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
          <div className="rounded-2xl">
            <MemoTechCategory title="Frontend" skills={memoFrontendSkills} delay={0.2} />
          </div>
          <div className="rounded-2xl">
            <MemoTechCategory title="Backend" skills={memoBackendSkills} delay={0.4} />
          </div>
          <div className="rounded-2xl">
            <MemoTechCategory title="Herramientas" skills={memoTools} delay={0.6} />
          </div>
        </div>

        {/* Learning Progress Section */}
        <div className="mb-20">
          <MemoLearningProgress delay={0.8} />
        </div>

        {/* Competency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center text-gradient">Competencias</h3>
          <div className="space-y-6">
            {competencyLevels.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="glass-morphism p-6 rounded-2xl hover:shadow-glow transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-text-primary font-semibold text-lg">{item.label}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.level === 'Avanzado' || item.level === 'Avanzado+' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    item.level === 'Intermedio' || item.level === 'Intermedio+' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                    'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {item.level}
                  </span>
                </div>
                <p className="text-text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
})
