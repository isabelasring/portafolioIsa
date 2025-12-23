'use client'

import { motion } from 'framer-motion'
import { Languages as LanguagesIcon, Award, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Languages() {
  const { t } = useLanguage()

  const languages = [
    { name: t('languages.spanish'), level: t('languages.native'), proficiency: 100 },
    { name: t('languages.english'), level: 'B2', proficiency: 75, certified: true },
  ]
  return (
    <section id="idiomas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <LanguagesIcon className="w-12 h-12 text-pink-500" />
            </motion.div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('languages.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"></div>
          <motion.a
            href="https://drive.google.com/file/d/1cuqMS6FVXesPooM7kHhUPXWVbhGndAEn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors mt-4"
            whileHover={{ scale: 1.05 }}
          >
            <Award className="w-5 h-5" />
            <span>{t('languages.certificateAvailable')}</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-pink-500/10"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-100">{lang.name}</h3>
                {lang.certified && (
                  <motion.a
                    href="https://drive.google.com/file/d/1cuqMS6FVXesPooM7kHhUPXWVbhGndAEn/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Award className="w-5 h-5" />
                    <span className="text-sm font-semibold">{t('languages.certified')}</span>
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                )}
              </div>
              
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-gray-300">{lang.level}</span>
                  <span className="text-sm font-semibold text-pink-600">{lang.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

