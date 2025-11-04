'use client'

export default function Process() {
  const steps = [
    {
      number: '1',
      icon: '💬',
      title: 'On discute de votre besoin',
      description: '30 min de call ou échange par email pour définir le scope, vos objectifs et votre identité.'
    },
    {
      number: '2',
      icon: '🎨',
      title: 'Je conçois votre maquette',
      description: 'Design validé avant développement. Vous visualisez exactement ce que vous allez obtenir.'
    },
    {
      number: '3',
      icon: '⚙️',
      title: 'Je développe votre site',
      description: 'React/Next.js, code propre et performant. Responsive mobile-first, SEO optimisé.'
    },
    {
      number: '4',
      icon: '🚀',
      title: 'Vous êtes en ligne',
      description: 'Déploiement sur Vercel, formation rapide, documentation complète. Support inclus.'
    }
  ]

  return (
    <section id="process" className="ws-section" style={{ background: 'rgba(6, 182, 212, 0.03)' }}>
      <div className="ws-container">
        <div className="ws-section-header">
          <div className="ws-section-badge">
            ⚡ Process Ultra-Rapide
          </div>
          <h2 className="ws-section-title">
            Comment ça marche ?
          </h2>
          <p className="ws-section-subtitle">
            De l'idée au déploiement : 5-10 jours.<br />
            Simple, transparent, efficace.
          </p>
        </div>

        <div className="ws-grid-4">
          {steps.map((step, index) => (
            <div key={index} className="ws-card">
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '1.125rem',
                marginBottom: '1rem',
                color: 'white'
              }}>
                {step.number}
              </div>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
                {step.icon}
              </div>
              <h3 className="ws-card-title" style={{ fontSize: '1.125rem' }}>
                {step.title}
              </h3>
              <p className="ws-card-text" style={{ fontSize: '0.9rem' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
