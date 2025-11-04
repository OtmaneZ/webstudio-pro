'use client'

import Hero from '@/components/Hero'
import ValueProposition from '@/components/ValueProposition'
import Process from '@/components/Process'
import UseCases from '@/components/UseCases'
import TechStack from '@/components/TechStack'
import Contact from '@/components/Contact'

export default function Home() {
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
