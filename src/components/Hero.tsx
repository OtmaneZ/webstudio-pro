'use client'

export default function Hero() {
  return (
    <section className="ws-hero ws-animate-fade-in">
      <div className="ws-container">
        <div className="ws-section-badge">
          ✨ Sites vitrines modernes & Web apps sur mesure
        </div>
        
        <h1 className="ws-hero-title">
          Votre présence digitale,{' '}
          <span className="ws-text-gradient">pensée pour convertir</span>
        </h1>
        
        <p className="ws-hero-subtitle">
          Sites vitrines élégants, web apps performantes — livrés rapidement, 
          comme ce site que vous visitez actuellement.
        </p>
        
        <div className="ws-hero-buttons">
          <a href="#process" className="ws-btn ws-btn-primary">
            → Voir comment ça marche
          </a>
          <a href="#contact" className="ws-btn ws-btn-secondary">
            Discutons de votre projet
          </a>
        </div>
      </div>
    </section>
  )
}
