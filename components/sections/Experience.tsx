'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, Phone, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()

  // Helper function to safely get array from translations
  const getResponsibilities = (key: string): string[] => {
    const value = t(key)
    return Array.isArray(value) ? value : []
  }

  const experiences = [
    {
      title: t('experienceItems.webDeveloper.title'),
      company: t('experienceItems.webDeveloper.company'),
      period: t('experienceItems.webDeveloper.period'),
      supervisor: t('experienceItems.webDeveloper.supervisor'),
      phone: t('experienceItems.webDeveloper.phone'),
      responsibilities: getResponsibilities('experienceItems.webDeveloper.responsibilities'),
    },
    {
      title: t('experienceItems.intern.title'),
      company: t('experienceItems.intern.company'),
      period: t('experienceItems.intern.period'),
      supervisor: t('experienceItems.intern.supervisor'),
      phone: t('experienceItems.intern.phone'),
      responsibilities: getResponsibilities('experienceItems.intern.responsibilities'),
    },
  ]
  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <Briefcase className="w-12 h-12 text-pink-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('experience.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-pink-500/10"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-xl text-purple-400 font-semibold mb-2">
                      {exp.company}
                    </p>
                    <div className="flex items-center text-gray-300 mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-4 rounded-xl border border-pink-500/20">
                    <p className="text-sm text-gray-400 mb-1">{t('experience.supervisor')}</p>
                    <p className="font-semibold text-gray-200">{exp.supervisor}</p>
                    <div className="flex items-center mt-2 text-purple-400">
                      <Phone className="w-4 h-4 mr-2" />
                      <a href={`tel:${exp.phone}`} className="text-sm hover:underline">
                        {exp.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-100 mb-4">{t('experience.functions')}:</h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + respIndex * 0.05 }}
                        className="flex items-start text-gray-300"
                      >
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mt-2 mr-3 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

