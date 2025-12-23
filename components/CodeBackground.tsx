'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const codeSnippets = [
  '<div>',
  '</div>',
  'const',
  'function()',
  '{ }',
  'import',
  'export',
  'return',
  'async',
  'await',
  '<React>',
  '</React>',
  'interface',
  'type',
  '=>',
  'python',
  'def',
  'class',
  'SELECT',
  'FROM',
  'WHERE',
  'JOIN',
  'DataFrame',
  'API',
  'useState',
  'useEffect',
  'props',
  'return',
  '() =>',
  'className',
  'motion',
  'div',
]

export default function CodeBackground() {
  const [snippets, setSnippets] = useState<Array<{
    id: number
    text: string
    x: number
    y: number
    duration: number
    delay: number
  }>>([])

  useEffect(() => {
    const generateSnippets = () => {
      const newSnippets = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 30 + Math.random() * 40,
        delay: Math.random() * 5,
      }))
      setSnippets(newSnippets)
    }

    generateSnippets()
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {snippets.map((snippet) => (
        <motion.div
          key={snippet.id}
          className="absolute text-pink-400/8 font-mono text-xs font-light"
          style={{
            left: `${snippet.x}%`,
            top: `${snippet.y}%`,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.sin(snippet.id * 0.3) * 20, 0],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0.05, 0.12, 0.05],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: snippet.duration,
            delay: snippet.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {snippet.text}
        </motion.div>
      ))}
      
      {/* Efecto de partículas muy sutiles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-0.5 h-0.5 bg-pink-400/10 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -80, 0],
            opacity: [0, 0.2, 0],
            scale: [0, 0.8, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  )
}

