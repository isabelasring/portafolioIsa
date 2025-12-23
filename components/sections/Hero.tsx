'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles, Github } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-gray-900"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          {/* Nombre primero */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="inline-block mb-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Sparkles className="w-16 h-16 text-pink-500" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">{t('hero.title')}</span>
            </h1>
          </motion.div>

          {/* Foto de perfil en forma de bolita */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <motion.div
              className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-pink-500/30 shadow-2xl shadow-pink-500/20"
              whileHover={{ scale: 1.05 }}
              animate={{
                boxShadow: [
                  '0 0 0 0px rgba(236, 72, 153, 0.4)',
                  '0 0 0 15px rgba(236, 72, 153, 0)',
                  '0 0 0 0px rgba(236, 72, 153, 0.4)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 z-10" />
              <Image
                src="/isa.jpeg"
                alt={t('hero.title')}
                fill
                className="object-cover z-0"
                priority
                sizes="(max-width: 768px) 192px, 256px"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl text-gray-300 font-semibold mb-4">
              {t('hero.subtitle')}
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#sobre-mi"
              className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.knowMore')}
            </motion.a>
            <motion.a
              href="#proyectos"
              className="px-8 py-3 bg-gray-800/80 backdrop-blur-sm text-gray-100 rounded-full font-semibold border-2 border-pink-500/50 hover:border-pink-400 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.viewProjects')}
            </motion.a>
            <motion.a
              href="https://github.com/isabelasring"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-800/80 backdrop-blur-sm text-gray-100 rounded-full font-semibold border-2 border-pink-500/50 hover:border-pink-400 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#sobre-mi" className="text-pink-400 hover:text-pink-300 transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </motion.div>
    </section>
  )
}

