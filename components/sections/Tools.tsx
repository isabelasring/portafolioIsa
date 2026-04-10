'use client'

import { motion } from 'framer-motion'
import {
  Code,
  GitBranch,
  Layers,
  Cloud,
  ClipboardList,
  BarChart3,
  Database,
} from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

const CATEGORY_CONFIG: { translationKey: string; icon: typeof Code }[] = [
  { translationKey: 'development', icon: Code },
  { translationKey: 'versionControl', icon: GitBranch },
  { translationKey: 'frameworks', icon: Layers },
  { translationKey: 'cloud', icon: Cloud },
  { translationKey: 'management', icon: ClipboardList },
  { translationKey: 'analysis', icon: BarChart3 },
  { translationKey: 'databases', icon: Database },
]

export default function Tools() {
  const { t } = useLanguage()

  const toolCategories = CATEGORY_CONFIG.map(({ translationKey, icon }) => {
    const base = `toolCategories.${translationKey}`
    const items = t(`${base}.items`)
    return {
      icon,
      title: t(`${base}.title`),
      items: Array.isArray(items) ? items : [],
    }
  })

  return (
    <section id="herramientas" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gray-900/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('tools.titleExtended')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-pink-500/10 hover:border-pink-500/25 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl shrink-0">
                  <cat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-100">{cat.title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs sm:text-sm px-3 py-1.5 rounded-full bg-gray-900/60 text-gray-300 border border-purple-500/15"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
