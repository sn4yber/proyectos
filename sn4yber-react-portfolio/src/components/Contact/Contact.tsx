import { motion } from 'framer-motion'
import { Mail, MapPin, Github, Instagram, MessageCircle, ExternalLink } from 'lucide-react'

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'snayber333@gmail.com',
      href: 'mailto:snayber333@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Cartagena, Colombia',
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/sn4yber',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/sn4yber_0x/',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/573205382409',
    },
  ]

  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-secondary mb-4 block">04. Contacto</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Construyamos algo increíble juntos
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            ¿Tienes una idea? ¿Un proyecto? ¿Solo quieres charlar sobre tecnología? ¡Conectemos!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 p-6 glass-morphism rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <item.icon size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-1">{item.title}</h4>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-text-secondary hover:text-primary transition-colors duration-300"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-text-secondary">{item.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gradient mb-8">Conecta conmigo</h3>
            <div className="grid gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 glass-morphism rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-surface flex items-center justify-center group-hover:bg-gradient-primary transition-all duration-300">
                    <link.icon size={20} className="text-text-primary" />
                  </div>
                  <span className="text-text-primary font-medium">{link.name}</span>
                  <ExternalLink size={16} className="text-text-muted ml-auto group-hover:text-primary transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20 pt-8 border-t border-white/10"
        >
          <p className="text-text-muted">
            &copy; 2025 SN4YBER. Construido con pasión y mucho café ☕
          </p>
        </motion.div>
      </div>
    </section>
  )
}
