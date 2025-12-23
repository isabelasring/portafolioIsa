'use client'

import { motion } from 'framer-motion'
import { User, Mail, Phone, Calendar, FileText } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  const personalData = [
    { icon: Calendar, label: t('about.birthDate'), value: '15/02/2004' },
    { icon: FileText, label: t('about.id'), value: '1011390467' },
    { icon: Phone, label: t('about.phone'), value: '3052661092' },
    { icon: Mail, label: t('about.email'), value: 'isabelasanchezramirezing@gmail.com' },
  ]
  return (
    <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-pink-500/10"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl mr-4">
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-100">{t('about.personalProfile')}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
              {t('about.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {personalData.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow flex items-start group border border-pink-500/10"
              >
                <div className="p-2 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg mr-4 group-hover:scale-110 transition-transform border border-pink-500/30">
                  <item.icon className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                  <p className="text-gray-200 font-semibold">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

