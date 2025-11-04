import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'WebStudio Pro - Sites vitrines modernes',
  description: 'Créez votre site professionnel moderne, rapide et performant. Sites vitrines et web apps sur mesure.',
  keywords: 'site vitrine, site web professionnel, développement web, site moderne, freelance web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
