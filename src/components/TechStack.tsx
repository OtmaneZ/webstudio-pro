'use client'

export default function TechStack() {
  const technologies = [
    { name: 'React', color: '#61dafb' },
    { name: 'Next.js', color: '#ffffff' },
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'Tailwind CSS', color: '#06b6d4' },
    { name: 'Vercel', color: '#ffffff' },
    { name: 'Node.js', color: '#68a063' },
  ]

  return (
    <section id="tech" className="ws-section" style={{ background: 'rgba(139, 92, 246, 0.03)' }}>
      <div className="ws-container">
        <div className="ws-section-header">
          <div className="ws-section-badge">
            🔧 Technologies
          </div>
          <h2 className="ws-section-title">
            Construit avec les meilleurs outils du marché
          </h2>
          <p className="ws-section-subtitle">
            Performance, sécurité, évolutivité —<br />
            votre site est construit pour durer.
          </p>
        </div>

        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '1rem', 
          justifyContent: 'center',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {technologies.map((tech, index) => (
            <div 
              key={index}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'rgba(30, 41, 59, 0.5)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(148, 163, 184, 0.2)',
                borderRadius: '50px',
                fontSize: '0.95rem',
                fontWeight: '600',
                color: tech.color,
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.borderColor = tech.color
                e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}40`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.2)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {tech.name}
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
          borderRadius: '16px',
          border: '1px solid rgba(99, 102, 241, 0.2)'
        }}>
          <p style={{
            fontSize: '1.05rem',
            color: '#cbd5e1',
            lineHeight: '1.7',
            maxWidth: '650px',
            margin: '0 auto'
          }}>
            <strong style={{ color: '#e0e7ff' }}>Mais avant les outils, je commence toujours par comprendre</strong><br />
            le besoin, le contexte, et la logique métier.
          </p>
        </div>
      </div>
    </section>
  )
}
