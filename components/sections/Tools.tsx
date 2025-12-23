'use client'

import { motion } from 'framer-motion'
import { 
  FileText, 
  Code, 
  Database, 
  GitBranch, 
  Cloud,
  Monitor,
  Layers
} from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Tools() {
  const { t } = useLanguage()

  const tools = [
    { name: t('tools.office'), icon: FileText, category: t('tools.productivity') },
    { name: 'Jira (Atlassian)', icon: Monitor, category: t('tools.management') },
    { name: 'Visual Studio / VS Code', icon: Code, category: t('tools.development') },
    { name: 'PostgreSQL', icon: Database, category: t('tools.database') },
    { name: 'NetBeans', icon: Code, category: t('tools.development') },
    { name: 'Google Colab', icon: Cloud, category: t('tools.analysis') },
    { name: 'Git', icon: GitBranch, category: t('tools.versionControl') },
    { name: 'GitHub', icon: GitBranch, category: t('tools.versionControl') },
  ]
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
            {t('tools.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-center group cursor-pointer border border-pink-500/10"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl group-hover:rotate-12 transition-transform">
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-100 mb-1">
                {tool.name}
              </h3>
              <p className="text-xs text-gray-400">{tool.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

