'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, ExternalLink } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

export default function Education() {
  const { t } = useLanguage()

  const education = [
    {
      icon: BookOpen,
      title: t('education.primarySecondary'),
      institution: 'Colegio Sagrada Familia Aldea Pablo VI',
      period: '2009 - 2020',
      type: t('education.certificate'),
      level: t('education.primary'),
      certificateUrl: 'https://drive.google.com/file/d/1VZXdeOi4dpipj4NoqQab2fmmzask6W3U/view',
    },
    {
      icon: Award,
      title: t('education.technical'),
      institution: 'SENA',
      period: '2019 - 2020',
      type: t('education.certificate'),
      level: null,
      certificateUrl: 'https://drive.google.com/file/d/1pXFt0xVujpYdAFzuo0V6MEWvqjT84AU8/view',
    },
    {
      icon: Award,
      title: t('education.frontend'),
      institution: 'Cendi',
      period: '2021',
      type: t('education.certificate'),
      level: null,
      certificateUrl: 'https://drive.google.com/file/d/193IHOUmyYJzUMUtFebcRamX-sfQW5C_m/view',
    },
    {
      icon: Award,
      title: t('education.web'),
      institution: 'Platzi',
      period: '2021',
      type: t('education.certificate'),
      level: null,
      certificateUrl: 'https://drive.google.com/drive/folders/1Qu-9FUH1wmzfAorM6_DE87fDknffp9UQ',
    },
    {
      icon: GraduationCap,
      title: t('education.dataEngineering'),
      institution: 'Universidad de San Buenaventura',
      period: `2021 - ${t('education.current')}`,
      type: t('education.inProgress'),
      level: null,
      certificateUrl: null,
    },
    {
      icon: Award,
      title: t('education.english'),
      institution: 'LCN IDIOMAS',
      period: `2024 - ${t('education.current')}`,
      type: t('education.certificate'),
      level: null,
      certificateUrl: 'https://drive.google.com/drive/folders/14nTAf8ofusVy_7NYVvPSKRj0gpsDEnmj',
    },
  ]
  return (
    <section id="formacion" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t('education.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, index) => {
            const ContentWrapper = edu.certificateUrl ? motion.a : motion.div
            const wrapperProps = edu.certificateUrl 
              ? {
                  href: edu.certificateUrl,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }
              : {}

            return (
              <ContentWrapper
                key={index}
                {...wrapperProps}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: index % 2 === 0 ? 10 : -10 }}
                className={`bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-start md:items-center gap-6 group border border-pink-500/10 ${
                  edu.certificateUrl ? 'cursor-pointer' : ''
                }`}
              >
                <div className="p-4 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl group-hover:scale-110 transition-transform flex-shrink-0">
                  <edu.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-100">
                        {edu.title}
                      </h3>
                      {edu.certificateUrl && (
                        <ExternalLink className="w-4 h-4 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                      edu.type === t('education.inProgress')
                        ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                        : 'bg-pink-500/20 text-pink-300 border border-pink-500/30'
                    }`}>
                      {edu.type}
                    </span>
                  </div>
                  
                  <p className="text-lg text-purple-400 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  
                  {edu.level && (
                    <p className="text-gray-400 mb-2">{edu.level}</p>
                  )}
                  
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                </div>
              </ContentWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}

