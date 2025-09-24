import { memo } from 'react'
import { motion } from 'framer-motion'
import ElectricBorder from '../ElectricBorder'

export const About = memo(() => {
  const stats = [
    { number: '90', label: 'resolucio de problemas' },
    { number: '75', label: 'desarrollo frontend' },
    { number: '70', label: 'desarrollo backend' },
    { number: '65', label: 'base de datos' },
  ]

  const skills = [
    'resolución de problemas',
    'Adaptabilidad',
    'Comunicación',
    'Pensamiento Crítico',
    'Trabajo en Equipo',
    'Innovación',
    'arquitectaura de software',
    'Gestión de Proyectos',

  ]

  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-secondary mb-4 block">01. Sobre mí</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Construyendo el futuro con código
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <ElectricBorder color="#8b5cf6" thickness={2} chaos={1.2} speed={1.5} className="rounded-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Mi Historia</h3>
                <p className="text-text-secondary leading-relaxed">
                  Soy estudiante de Ingeniería de Sistemas en la Universidad Rafael Núñez con una pasión ardiente por crear soluciones tecnológicas que realmente importen. Mi enfoque va más allá del código: busco entender problemas, conectar con personas y construir experiencias que marquen la diferencia.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Mi Filosofía</h3>
                <p className="text-text-secondary leading-relaxed">
                  Creo en la programación como una forma de arte donde la creatividad se fusiona con la lógica. Cada proyecto es una oportunidad de aprender, innovar y dejar una huella positiva en el mundo digital.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gradient">Fortalezas Clave</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-gradient-surface rounded-full text-sm font-medium text-text-primary border border-white/10"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </ElectricBorder>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <ElectricBorder color="#8b5cf6" thickness={2} chaos={1.2} speed={1.5} className="rounded-2xl" key={stat.label}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 glass-morphism rounded-2xl"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-gradient mb-2"
                  >
                    {stat.number}%
                  </motion.div>
                  <div className="text-text-secondary text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              </ElectricBorder>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
})
