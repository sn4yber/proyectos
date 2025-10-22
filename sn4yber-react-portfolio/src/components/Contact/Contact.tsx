import { motion } from 'framer-motion'
import { ExternalLink, Mail, MapPin, Github, Instagram, MessageCircle, Send } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { fetchContact } from '@/api/fetchContact'
import { memo } from 'react'

interface ContactProps {
  isMobile?: boolean
}

export const Contact = memo(({ isMobile = false }: ContactProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['contact'],
    queryFn: fetchContact
  })

  if (isLoading) return <div className="text-center py-10">Cargando...</div>
  if (error) return <div className="text-center py-10 text-red-500">Error al cargar datos</div>
  if (!data) return null

  const { contactInfo, socialLinks } = data
  const enableAnim = !isMobile

  // Icon mapping
  const iconMap = {
    Mail,
    MapPin,
    Github,
    Instagram,
    MessageCircle
  }

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={enableAnim ? { opacity: 0, y: 50 } : false}
          whileInView={enableAnim ? { opacity: 1, y: 0 } : undefined}
          transition={enableAnim ? { duration: 0.8 } : {}}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-block px-6 py-3 bg-gradient-surface rounded-full text-sm font-medium text-secondary border border-secondary/30 relative overflow-hidden mb-6"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            04. Contacto
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent bg-300% animate-gradient"
            whileHover={{
              scale: 1.02,
            }}
          >
            Construyamos algo increíble juntos
          </motion.h2>

          <motion.p
            className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            ¿Tienes una idea revolucionaria? ¿Un proyecto desafiante? ¿Solo quieres charlar sobre el futuro de la tecnología?
            ¡Estoy aquí para hacer que suceda!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8">Información de Contacto</h3>

            {contactInfo.map((item, index) => {
              const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Mail
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(139, 92, 246, 0.3)",
                  }}
                  className="group relative"
                >
                  <div className="glass-morphism rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-lg"
                        whileHover={{
                          scale: 1.1,
                          rotate: 5,
                          boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)",
                        }}
                      >
                        <IconComponent className="text-white" size={24} />
                      </motion.div>

                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-text-primary mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        {item.href ? (
                          <a
                            href={item.href.startsWith('mailto:') ? item.href : `mailto:${item.href}`}
                            className="text-text-secondary hover:text-primary transition-colors duration-300 text-sm"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-text-secondary text-sm">{item.content}</p>
                        )}
                      </div>
                    </div>

                    {/* Hover effect overlay */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8">Conecta Conmigo</h3>

            <div className="grid gap-4">
              {socialLinks.map((link, index) => {
                const IconComponent = iconMap[link.icon as keyof typeof iconMap] || Github
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 0 25px rgba(6, 182, 212, 0.4)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative block"
                  >
                    <div className="glass-morphism rounded-xl p-5 border border-white/10 hover:border-secondary/30 transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center group-hover:from-secondary/30 group-hover:to-primary/30 transition-all duration-300"
                          whileHover={{ rotate: 10 }}
                        >
                          <IconComponent className="text-secondary group-hover:text-primary transition-colors" size={20} />
                        </motion.div>

                        <div className="flex-1">
                          <span className="text-text-primary font-medium group-hover:text-primary transition-colors">
                            {link.name}
                          </span>
                        </div>

                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <ExternalLink size={16} className="text-text-muted group-hover:text-secondary transition-colors" />
                        </motion.div>
                      </div>

                      {/* Animated border effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 bg-clip-border"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Call to Action / Quick Contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8">¿Listo para empezar?</h3>

            <motion.div
              className="glass-morphism rounded-2xl p-8 border border-white/10"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 40px rgba(139, 92, 246, 0.2)",
              }}
            >
              <div className="text-center space-y-6">
                <motion.div
                  className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center shadow-xl"
                  whileHover={{
                    scale: 1.1,
                    rotate: 10,
                    boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)",
                  }}
                >
                  <Send className="text-white" size={32} />
                </motion.div>

                <div>
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    Inicia un proyecto
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Cuéntame sobre tu idea y juntos la haremos realidad.
                    Desarrollo soluciones personalizadas con las últimas tecnologías.
                    ¡Contáctame por WhatsApp para una respuesta rápida!
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://wa.me/573205382409?text=Hola!%20Me%20gustaría%20hablar%20sobre%20un%20proyecto..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(34, 197, 94, 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </motion.a>

                  <motion.a
                    href="mailto:snayber333@gmail.com?subject=Nuevo Proyecto&body=Hola, me gustaría hablar sobre un proyecto..."
                    className="inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-primary rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 30px rgba(139, 92, 246, 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail size={18} />
                    Email
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Availability status */}
            <motion.div
              className="flex items-center justify-center gap-3 p-4 glass-morphism rounded-xl border border-green-500/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 font-medium">Disponible para nuevos proyectos</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-8 border-t border-white/10"
        >
          <motion.p
            className="text-text-muted text-sm"
            whileHover={{ scale: 1.02 }}
          >
            &copy; 2025 SN4YBER. Construido con ❤️, ☕ y mucho código
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
})
