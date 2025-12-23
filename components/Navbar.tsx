'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Languages } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: t('nav.home'), href: '#inicio' },
    { name: t('nav.about'), href: '#sobre-mi' },
    { name: t('nav.competencies'), href: '#competencias' },
    { name: t('nav.education'), href: '#formacion' },
    { name: t('nav.tools'), href: '#herramientas' },
    { name: t('nav.languages'), href: '#idiomas' },
    { name: t('nav.experience'), href: '#experiencia' },
    { name: t('nav.projects'), href: '#proyectos' },
  ]

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en')
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/90 backdrop-blur-md shadow-lg shadow-pink-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#inicio"
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ISR
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-pink-400 transition-colors font-medium text-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              onClick={toggleLanguage}
              className="text-gray-300 hover:text-pink-400 transition-colors font-medium text-sm flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-800/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
            >
              <Languages className="w-4 h-4" />
              <span>{language === 'en' ? 'ES' : 'EN'}</span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggleLanguage}
              className="p-2 text-gray-300 hover:text-pink-400 transition-colors rounded-lg hover:bg-gray-800/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={language === 'en' ? 'Cambiar a Español' : 'Switch to English'}
            >
              <Languages className="w-5 h-5" />
            </motion.button>
            <button
              className="p-2 text-gray-300 hover:text-pink-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-pink-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-gray-300 hover:text-pink-400 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

