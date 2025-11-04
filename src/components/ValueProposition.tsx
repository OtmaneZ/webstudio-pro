'use client'

export default function ValueProposition() {
  const values = [
    {
      icon: '🎨',
      title: 'Design moderne',
      description: 'Interface responsive, élégante et professionnelle. Chaque pixel compte pour refléter votre identité.'
    },
    {
      icon: '⚡',
      title: 'Performance optimale',
      description: 'Rapide, SEO-friendly, hébergé sur cloud. Votre site charge en moins de 2 secondes partout dans le monde.'
    },
    {
      icon: '🔧',
      title: 'Sur-mesure total',
      description: 'Adapté à votre métier, votre ton, vos besoins. Pas de template générique, chaque projet est unique.'
    }
  ]

  return (
    <section id="value" className="ws-section" style={{ paddingTop: '8rem' }}>
      <div className="ws-container">
        <div className="ws-section-header">
          <div className="ws-section-badge">
            💎 Votre investissement
          </div>
          <h2 className="ws-section-title">
            Ce que vous obtenez
          </h2>
          <p className="ws-section-subtitle">
            Un site professionnel, c'est plus qu'une belle page web.<br />
            C'est votre identité numérique qui travaille pour vous, 24/7.
          </p>
        </div>

        <div className="ws-grid-3">
          {values.map((value, index) => (
            <div key={index} className="ws-card">
              <div className="ws-card-icon">
                {value.icon}
              </div>
              <h3 className="ws-card-title">{value.title}</h3>
              <p className="ws-card-text">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
