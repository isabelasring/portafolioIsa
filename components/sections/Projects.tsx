'use client'

import { motion } from 'framer-motion'
import { Code2, Github, ExternalLink, Sparkles } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t('projectItems.rvistete.title'),
      description: t('projectItems.rvistete.description'),
      type: t('projectItems.rvistete.type'),
      technologies: ['Python', 'Flask/Django', 'Análisis de Sentimientos', 'Web Development'],
      githubUrl: 'https://github.com/isabelasring/R-VISTETE',
      color: 'from-pink-500 to-rose-500',
    },
  ]
  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm relative z-10">
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
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group border border-pink-500/10"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 bg-gradient-to-br ${project.color} rounded-xl`}>
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 border border-pink-500/30 rounded-full text-xs font-semibold">
                    {project.type}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-100 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-4 h-4" />
                  {t('projects.viewRepository')}
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

