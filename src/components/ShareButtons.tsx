'use client'

import { useState, useEffect } from 'react'
import QRCode from 'qrcode'

export default function ShareButtons() {
  const [showQR, setShowQR] = useState(false)
  const [qrCodeUrl, setQrCodeUrl] = useState('')
  const [copied, setCopied] = useState(false)

  const siteUrl = 'https://webstudio.zineinsight.com'
  const shareData = {
    title: 'WebStudio Pro',
    text: 'Découvrez WebStudio Pro - Sites web professionnels modernes',
    url: siteUrl
  }

  // Générer le QR code
  useEffect(() => {
    QRCode.toDataURL(siteUrl, {
      width: 300,
      margin: 2,
      color: {
        dark: '#06b6d4',
        light: '#ffffff'
      }
    }).then(setQrCodeUrl)
  }, [])

  // Fonction de partage natif
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.log('Erreur de partage:', err)
        }
      }
    } else {
      // Fallback: copier le lien
      navigator.clipboard.writeText(siteUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      setShowQR(true)
    }
  }

  return (
    <>
      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginTop: '2rem'
      }}>
        {/* Bouton Partager */}
        <button
          onClick={handleShare}
          className="ws-btn ws-btn-secondary"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <span>📱</span>
          {copied ? 'Lien copié !' : 'Partager cette app'}
        </button>

        {/* Bouton QR Code */}
        <button
          onClick={() => setShowQR(true)}
          className="ws-btn ws-btn-secondary"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <span>📷</span>
          Afficher QR Code
        </button>
      </div>

      {/* Modal QR Code */}
      {showQR && qrCodeUrl && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            animation: 'fadeIn 0.3s ease-out'
          }}
          onClick={() => setShowQR(false)}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '24px',
              padding: '2.5rem',
              maxWidth: '400px',
              width: '100%',
              textAlign: 'center',
              animation: 'slideUp 0.3s ease-out',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Titre */}
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#0f172a',
              marginBottom: '0.5rem'
            }}>
              Scannez pour ouvrir
            </h3>
            <p style={{
              color: '#64748b',
              fontSize: '0.95rem',
              marginBottom: '2rem'
            }}>
              Utilisez votre caméra pour scanner ce QR code
            </p>

            {/* QR Code */}
            <div style={{
              background: 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
              padding: '1.5rem',
              borderRadius: '16px',
              marginBottom: '2rem'
            }}>
              <img 
                src={qrCodeUrl} 
                alt="QR Code WebStudio Pro"
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px'
                }}
              />
            </div>

            {/* URL */}
            <p style={{
              fontSize: '0.85rem',
              color: '#94a3b8',
              wordBreak: 'break-all',
              marginBottom: '1.5rem'
            }}>
              {siteUrl}
            </p>

            {/* Bouton fermer */}
            <button
              onClick={() => setShowQR(false)}
              style={{
                width: '100%',
                padding: '1rem',
                background: '#0f172a',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1e293b'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#0f172a'
              }}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  )
}
