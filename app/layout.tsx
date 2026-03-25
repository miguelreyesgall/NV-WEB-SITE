import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Talent Influencer System™ | Nizzhar Vargas',
  description:
    'Convierte a tu equipo directivo en el principal canal de atracción de talento y posicionamiento de marca empleadora en LinkedIn.',
  keywords: [
    'talent influencer',
    'marca empleadora LinkedIn',
    'employer branding',
    'líderes LinkedIn',
    'atracción de talento',
    'Nizzhar Vargas',
  ],
  openGraph: {
    title: 'Talent Influencer System™ | Nizzhar Vargas',
    description:
      'Activa a tus líderes como Talent Influencers. Marca empleadora + LinkedIn.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talent Influencer System™ | Nizzhar Vargas',
    description:
      'Convierte a tu equipo directivo en el principal canal de atracción de talento.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-inter bg-brand-black text-brand-white`}
      >
        {children}
      </body>
    </html>
  )
}
