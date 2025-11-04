'use client'

export default function Features() {
  const features = [
    {
      icon: '📸',
      title: 'Galeries & Médias',
      description: 'Images optimisées, galeries interactives, sliders modernes',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
    },
    {
      icon: '🎥',
      title: 'Vidéos intégrées',
      description: 'YouTube, Vimeo, vidéos hébergées avec lecteur personnalisé',
      gradient: 'linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)'
    },
    {
      icon: '📝',
      title: 'Blog & Articles',
      description: 'Système de blog complet, catégories, recherche, SEO optimisé',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)'
    },
    {
      icon: '🛒',
      title: 'E-commerce',
      description: 'Catalogue produits, panier, paiement Stripe/PayPal',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)'
    },
    {
      icon: '📧',
      title: 'Formulaires',
      description: 'Contact, devis, inscription, validation en temps réel',
      gradient: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)'
    },
    {
      icon: '📊',
      title: 'Tableaux de bord',
      description: 'Graphiques interactifs, statistiques, KPIs en temps réel',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)'
    },
    {
      icon: '🗺️',
      title: 'Cartes interactives',
      description: 'Google Maps, marqueurs personnalisés, itinéraires',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)'
    },
    {
      icon: '💬',
      title: 'Chat & Support',
      description: 'Chat en direct, chatbot IA, support client intégré',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)'
    },
    {
      icon: '📅',
      title: 'Réservations',
      description: 'Calendrier, prise de RDV, gestion des disponibilités',
      gradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)'
    },
    {
      icon: '🔐',
      title: 'Espace membre',
      description: 'Authentification, profils utilisateurs, contenus privés',
      gradient: 'linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)'
    },
    {
      icon: '🌐',
      title: 'Multi-langues',
      description: 'Site multilingue, détection auto, traductions dynamiques',
      gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)'
    },
    {
      icon: '📱',
      title: 'Progressive Web App',
      description: 'Installation mobile, notifications push, mode hors-ligne',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    }
  ]

  return (
    <section id="features" className="ws-section" style={{ background: 'var(--ws-bg-dark)' }}>
      <div className="ws-container">
        <div className="ws-section-header">
          <div className="ws-section-badge">
            🎨 Fonctionnalités
          </div>
          <h2 className="ws-section-title">
            Tout ce que votre site peut intégrer
          </h2>
          <p className="ws-section-subtitle">
            De la simple vitrine au site e-commerce complet,<br />
            des fonctionnalités modernes adaptées à vos besoins
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="ws-card"
              style={{
                padding: '2rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.3)'
                const overlay = e.currentTarget.querySelector('.feature-overlay') as HTMLElement
                if (overlay) overlay.style.opacity = '1'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                const overlay = e.currentTarget.querySelector('.feature-overlay') as HTMLElement
                if (overlay) overlay.style.opacity = '0'
              }}
            >
              {/* Gradient overlay au hover */}
              <div 
                className="feature-overlay"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: feature.gradient,
                  opacity: 0,
                  transition: 'opacity 0.3s ease',
                  pointerEvents: 'none',
                  zIndex: 0
                }}
              />

              {/* Contenu */}
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem',
                  textAlign: 'center'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: 'var(--ws-text-primary)',
                  marginBottom: '0.75rem',
                  textAlign: 'center'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--ws-text-secondary)',
                  lineHeight: '1.6',
                  textAlign: 'center'
                }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA supplémentaire */}
        <div style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
          borderRadius: '16px',
          border: '1px solid rgba(6, 182, 212, 0.2)'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            color: 'var(--ws-text-primary)',
            marginBottom: '1rem'
          }}>
            Une fonctionnalité spécifique en tête ?
          </h3>
          <p style={{
            fontSize: '1.05rem',
            color: 'var(--ws-text-secondary)',
            marginBottom: '2rem',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Chaque projet est unique. Si vous avez besoin d'une intégration particulière,<br />
            parlons-en ! La plupart des APIs et services tiers peuvent être intégrés.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            fontSize: '0.875rem',
            color: 'var(--ws-text-muted)'
          }}>
            <span>✅ API REST & GraphQL</span>
            <span>✅ Webhooks</span>
            <span>✅ Intégrations tierces</span>
            <span>✅ Services cloud</span>
          </div>
        </div>
      </div>
    </section>
  )
}
