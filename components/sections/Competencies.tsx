'use client'

import { motion } from 'framer-motion'
import { Heart, Brain, Code, Sparkles } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Competencies() {
  const { t } = useLanguage()

  // Helper function to safely get array from translations
  const getItems = (key: string): string[] => {
    const value = t(key)
    return Array.isArray(value) ? value : []
  }

  const competencies = [
    {
      icon: Heart,
      title: t('competencies.being.title'),
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-gray-800/80 border border-pink-500/10',
      items: getItems('competencies.being.items'),
    },
    {
      icon: Brain,
      title: t('competencies.knowing.title'),
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-gray-800/80 border border-purple-500/10',
      items: getItems('competencies.knowing.items'),
    },
    {
      icon: Code,
      title: t('competencies.doing.title'),
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-gray-800/80 border border-indigo-500/10',
      items: getItems('competencies.doing.items'),
    },
  ]
  return (
    <section id="competencias" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-pink-500" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('competencies.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {competencies.map((competency, index) => (
            <motion.div
              key={competency.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`${competency.bgColor} backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group`}
            >
              {/* Decorative gradient overlay */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${competency.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
              
              <div className={`inline-flex p-4 bg-gradient-to-br ${competency.color} rounded-xl mb-6 relative z-10`}>
                <competency.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-100 mb-4 relative z-10">
                {competency.title}
              </h3>
              
              <ul className="space-y-3 relative z-10">
                {competency.items.map((item, itemIndex) => (
                  <motion.li
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.2 + itemIndex * 0.1 }}
                    className="flex items-start text-gray-300"
                  >
                    <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${competency.color} mt-2 mr-3 flex-shrink-0`} />
                    <span className="text-sm md:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

