import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'
import { LanguageProvider } from '@/lib/LanguageContext'
import LanguageUpdater from '@/components/LanguageUpdater'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Isabela Sánchez Ramírez | Data and Software Engineer',
  description: 'Professional portfolio of Isabela Sánchez Ramírez - Data and Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LanguageProvider>
          <LanguageUpdater />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

