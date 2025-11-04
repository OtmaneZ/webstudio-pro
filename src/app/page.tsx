'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import ValueProposition from '@/components/ValueProposition'
import Process from '@/components/Process'
import UseCases from '@/components/UseCases'
import TechStack from '@/components/TechStack'
import Contact from '@/components/Contact'
import ThemeSwitcher, { Theme } from '@/components/ThemeSwitcher'

// Configuration des thèmes
const themeConfigs = {
  default: {
    primary: '#06b6d4',
    secondary: '#8b5cf6',
    background: '#020617',
    backgroundCard: 'rgba(30, 41, 59, 0.5)',
    text: '#ffffff',
    textSecondary: '#cbd5e1',
  },
  light: {
    primary: '#3b82f6',
    secondary: '#1e40af',
    background: '#ffffff',
    backgroundCard: 'rgba(241, 245, 249, 0.8)',
    text: '#0f172a',
    textSecondary: '#475569',
  },
  corporate: {
    primary: '#f97316',
    secondary: '#ea580c',
    background: '#18181b',
    backgroundCard: 'rgba(39, 39, 42, 0.6)',
    text: '#ffffff',
    textSecondary: '#d4d4d8',
  },
  luxury: {
    primary: '#d4af37',
    secondary: '#fbbf24',
    background: '#000000',
    backgroundCard: 'rgba(23, 23, 23, 0.7)',
    text: '#ffffff',
    textSecondary: '#e5e5e5',
  },
  startup: {
    primary: '#8b5cf6',
    secondary: '#10b981',
    background: '#1e1b4b',
    backgroundCard: 'rgba(49, 46, 129, 0.5)',
    text: '#ffffff',
    textSecondary: '#c7d2fe',
  },
}

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('default')

  // Appliquer le thème au body
  useEffect(() => {
    const theme = themeConfigs[currentTheme]
    document.documentElement.style.setProperty('--ws-accent-cyan', theme.primary)
    document.documentElement.style.setProperty('--ws-accent-purple', theme.secondary)
    document.documentElement.style.setProperty('--ws-bg-darker', theme.background)
    document.documentElement.style.setProperty('--ws-bg-card', theme.backgroundCard)
    document.documentElement.style.setProperty('--ws-text-primary', theme.text)
    document.documentElement.style.setProperty('--ws-text-secondary', theme.textSecondary)
  }, [currentTheme])

  return (
    <main className="ws-body">
      {/* Header Navigation */}
      <header className="ws-header">
        <div className="ws-nav-container">
          <a href="/" className="ws-brand">
            WebStudio Pro
          </a>
          <nav className="ws-nav-menu">
            <a href="#value" className="ws-nav-link">Services</a>
            <a href="#process" className="ws-nav-link">Process</a>
            <a href="#tech" className="ws-nav-link">Technologies</a>
            <a href="#contact" className="ws-nav-link">Contact</a>
            <ThemeSwitcher currentTheme={currentTheme} onThemeChange={setCurrentTheme} />
          </nav>
        </div>
      </header>

      {/* Sections */}
      <Hero />
      <ValueProposition />
      <Process />
      <UseCases />
      <TechStack />
      <Contact />

      {/* Footer */}
      <footer className="ws-footer">
        <div className="ws-footer-content">
          <div className="ws-brand ws-footer-brand">
            WebStudio Pro
          </div>
          <p className="ws-footer-text">
            🚀 Propulsé par{' '}
            <a 
              href="https://www.zineinsight.com" 
              className="ws-footer-highlight"
              target="_blank"
              rel="noopener noreferrer"
            >
              ZineInsight
            </a>
            {' '}— Dashboards sur-mesure pour PME/ETI
          </p>
          <p className="ws-footer-text" style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
            © 2025 • Créé avec soin par Otmane Boulahia
          </p>
        </div>
      </footer>
    </main>
  )
}
