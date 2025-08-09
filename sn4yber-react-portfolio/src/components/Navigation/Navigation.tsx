import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'Inicio', id: 'inicio' },
    { href: '/#sobre-mi', label: 'Sobre Mí', id: 'sobre-mi' },
    { href: '/proyectos', label: 'Proyectos', id: 'proyectos' },
    { href: '/#habilidades', label: 'Skills', id: 'habilidades' },
    { href: '/#contacto', label: 'Contacto', id: 'contacto' },
  ]

  const handleNavClick = (href: string, id: string) => {
    setIsMobileMenuOpen(false)
    
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        window.location.href = href
        return
      }
      
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background-secondary/80 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-gradient hover:scale-105 transition-transform duration-300"
          >
            SN4YBER
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                  <Link
                    to={item.href}
                    className={`text-sm font-medium transition-colors duration-300 hover:text-primary ${
                      location.pathname === item.href
                        ? 'text-primary'
                        : 'text-text-secondary'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href, item.id)}
                    className="text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-text-primary hover:bg-white/10 transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-background-secondary/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
      >
        <div className="px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.href.startsWith('/') && !item.href.startsWith('/#') ? (
                <Link
                  to={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-base font-medium transition-colors duration-300 hover:text-primary ${
                    location.pathname === item.href
                      ? 'text-primary'
                      : 'text-text-secondary'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(item.href, item.id)}
                  className="block text-base font-medium text-text-secondary hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
