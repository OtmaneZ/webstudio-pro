'use client'

export default function Contact() {
  return (
    <section id="contact" className="ws-section">
      <div className="ws-container">
        <div className="ws-section-header">
          <div className="ws-section-badge">
            📧 Contact
          </div>
          <h2 className="ws-section-title">
            Prêt à lancer votre projet ?
          </h2>
          <p className="ws-section-subtitle">
            Que vous ayez une idée précise ou juste une envie,<br />
            discutons-en autour d'un café virtuel ☕
          </p>
        </div>

        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div className="ws-card" style={{
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            borderColor: 'rgba(6, 182, 212, 0.3)',
            padding: '3rem 2rem'
          }}>
            <div style={{
              fontSize: '3rem',
              marginBottom: '1.5rem'
            }}>
              💬
            </div>
            
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: 'var(--ws-text-primary)',
              marginBottom: '1rem'
            }}>
              Discutons de votre projet
            </h3>
            
            <p style={{
              color: 'var(--ws-text-secondary)',
              fontSize: '1rem',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              Un site vitrine, une web app, un dashboard ?<br />
              Écrivez-moi et obtenez un devis personnalisé sous 48h.
            </p>

            <a 
              href="mailto:otmane@zineinsight.com?subject=Demande de devis - Site web"
              className="ws-btn ws-btn-primary"
              style={{
                fontSize: '1.125rem',
                padding: '1.25rem 2.5rem'
              }}
            >
              → Me contacter
            </a>

            <div style={{
              marginTop: '2rem',
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              fontSize: '0.875rem',
              color: 'var(--ws-text-muted)'
            }}>
              <span>⚡ Réponse sous 24h</span>
              <span>🎯 Devis gratuit</span>
              <span>🔒 Confidentialité garantie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
