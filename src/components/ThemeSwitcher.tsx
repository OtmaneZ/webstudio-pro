'use client'

import { useState } from 'react'

export type Theme = 'default' | 'light' | 'corporate' | 'luxury' | 'startup'

interface ThemeOption {
  id: Theme
  name: string
  description: string
  preview: {
    primary: string
    secondary: string
    background: string
  }
}

export const themes: ThemeOption[] = [
  {
    id: 'default',
    name: 'Moderne Cyan',
    description: 'Design sombre élégant avec accents cyan/turquoise',
    preview: {
      primary: '#06b6d4',
      secondary: '#8b5cf6',
      background: '#0f172a'
    }
  },
  {
    id: 'light',
    name: 'Clair & Professionnel',
    description: 'Version lumineuse avec bleu professionnel',
    preview: {
      primary: '#3b82f6',
      secondary: '#1e40af',
      background: '#ffffff'
    }
  },
  {
    id: 'corporate',
    name: 'Corporate Orange',
    description: 'Sérieux et énergique pour entreprises établies',
    preview: {
      primary: '#f97316',
      secondary: '#ea580c',
      background: '#18181b'
    }
  },
  {
    id: 'luxury',
    name: 'Luxe Or',
    description: 'Élégance premium avec touches dorées',
    preview: {
      primary: '#d4af37',
      secondary: '#fbbf24',
      background: '#000000'
    }
  },
  {
    id: 'startup',
    name: 'Startup Dynamique',
    description: 'Énergique et innovant pour jeunes entreprises',
    preview: {
      primary: '#8b5cf6',
      secondary: '#10b981',
      background: '#1e1b4b'
    }
  }
]

interface ThemeSwitcherProps {
  currentTheme: Theme
  onThemeChange: (theme: Theme) => void
}

export default function ThemeSwitcher({ currentTheme, onThemeChange }: ThemeSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Bouton dans le header */}
      <button
        onClick={() => setIsOpen(true)}
        className="ws-btn ws-btn-secondary"
        style={{
          fontSize: '0.9rem',
          padding: '0.75rem 1.5rem'
        }}
      >
        🎨 Voir d'autres styles
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'fadeIn 0.3s ease-out'
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{
              background: '#1e293b',
              borderRadius: '20px',
              padding: '3rem',
              maxWidth: '900px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              animation: 'slideUp 0.3s ease-out'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#fff',
                marginBottom: '0.5rem'
              }}>
                Choisissez votre style
              </h2>
              <p style={{
                color: '#cbd5e1',
                fontSize: '1rem'
              }}>
                Votre site peut refléter parfaitement votre identité. Testez ces variations en temps réel.
              </p>
            </div>

            {/* Grid de thèmes */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => {
                    onThemeChange(theme.id)
                    setIsOpen(false)
                  }}
                  style={{
                    background: currentTheme === theme.id 
                      ? 'rgba(6, 182, 212, 0.15)' 
                      : 'rgba(30, 41, 59, 0.5)',
                    border: currentTheme === theme.id
                      ? '2px solid #06b6d4'
                      : '1px solid rgba(148, 163, 184, 0.2)',
                    borderRadius: '12px',
                    padding: '1.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textAlign: 'left'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  {/* Preview couleurs */}
                  <div style={{
                    display: 'flex',
                    gap: '8px',
                    marginBottom: '1rem'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      background: theme.preview.primary
                    }} />
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      background: theme.preview.secondary
                    }} />
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      background: theme.preview.background,
                      border: '1px solid rgba(148, 163, 184, 0.3)'
                    }} />
                  </div>

                  {/* Nom du thème */}
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#fff',
                    marginBottom: '0.5rem'
                  }}>
                    {theme.name}
                    {currentTheme === theme.id && (
                      <span style={{ marginLeft: '8px', fontSize: '0.9rem' }}>✓</span>
                    )}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#94a3b8',
                    lineHeight: '1.5'
                  }}>
                    {theme.description}
                  </p>
                </button>
              ))}
            </div>

            {/* Bouton fermer */}
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  padding: '0.75rem 2rem',
                  background: 'rgba(148, 163, 184, 0.1)',
                  border: '1px solid rgba(148, 163, 184, 0.3)',
                  borderRadius: '8px',
                  color: '#cbd5e1',
                  fontSize: '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(148, 163, 184, 0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(148, 163, 184, 0.1)'
                }}
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  )
}
