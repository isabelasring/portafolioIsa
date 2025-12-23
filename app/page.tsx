'use client'

import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Competencies from '@/components/sections/Competencies'
import Education from '@/components/sections/Education'
import Tools from '@/components/sections/Tools'
import Languages from '@/components/sections/Languages'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Footer from '@/components/Footer'
import CodeBackground from '@/components/CodeBackground'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen relative">
      <CodeBackground />
      <Navbar />
      <Hero />
      <About />
      <Competencies />
      <Education />
      <Tools />
      <Languages />
      <Experience />
      <Projects />
      <Footer />
    </main>
  )
}

