import { memo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { fetchAbout } from '@/api/fetchAbout'
import { motion } from 'framer-motion'

interface AboutProps {
  isMobile?: boolean
}

export const About = memo(({ isMobile = false }: AboutProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['about'],
    queryFn: fetchAbout
  })

  if (isLoading) return <div className="text-center py-10">Cargando...</div>
  if (error) return <div className="text-center py-10 text-red-500">Error al cargar datos</div>
  if (!data) return null

  const { skills } = data
  // Desactivar animaciones pesadas en móvil
  const enableAnim = !isMobile

  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={enableAnim ? { opacity: 0, y: 50 } : false}
          whileInView={enableAnim ? { opacity: 1, y: 0 } : undefined}
          transition={enableAnim ? { duration: 0.8 } : {}}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-secondary mb-4 block">01. Sobre mí</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Construyendo el futuro con código
          </h2>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Mi Historia</h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                Desde pequeño siempre tuve esa necesidad, esa curiosidad innata por entender cómo funcionan las cosas y encontrar formas de mejorarlas. La tecnología no era solo algo que usaba, sino algo que me fascinaba profundamente. Cada problema era un rompecabezas que necesitaba resolver, cada dispositivo una caja de misterios por descubrir. Ahora, como estudiante de Ingeniería de Sistemas en la Universidad Rafael Núñez, he canalizado esa pasión en crear soluciones tecnológicas que realmente importen. Soy deportista de taekwondo, me apasiona la actividad física, y me encanta trabajar en equipo conectando con mis compañeros. Mi enfoque va más allá del código: busco entender problemas, conectar con personas y construir experiencias que marquen la diferencia.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Mi Filosofía</h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                Creo en la programación como una forma de arte donde la creatividad se fusiona con la lógica. Cada proyecto es una oportunidad de aprender, innovar y dejar una huella positiva en el mundo digital.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Fortalezas Clave</h3>
              <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                {skills.map((skill: string, index: number) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-gradient-surface rounded-full text-sm font-medium text-text-primary border border-white/10 hover:shadow-glow transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
})
