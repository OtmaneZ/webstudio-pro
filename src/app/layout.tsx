import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata, Viewport } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WebStudio Pro - Sites vitrines modernes',
  description: 'Créez votre site professionnel moderne, rapide et performant. Sites vitrines et web apps sur mesure.',
  keywords: 'site vitrine, site web professionnel, développement web, site moderne, freelance web',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'WebStudio Pro',
  },
  icons: {
    icon: [
      { url: '/logo wsp.png', sizes: '500x500', type: 'image/png' },
    ],
    apple: [
      { url: '/logo wsp.png', sizes: '500x500', type: 'image/png' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#06b6d4',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="WebStudio Pro" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
