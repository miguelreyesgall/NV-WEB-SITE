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
  title: 'Nizzhar Vargas | Marca Personal en LinkedIn para Ejecutivos',
  description:
    'Partner Lead en LinkedIn Colombia & México. Aprende a construir tu marca personal en LinkedIn desde adentro: estrategias reales para directivos y líderes de alto nivel.',
  keywords: [
    'marca personal LinkedIn ejecutivos',
    'personal branding LinkedIn Colombia',
    'Nizzhar Vargas',
    'Partner Lead LinkedIn Colombia',
    'employer branding ejecutivos',
    'liderazgo corporativo LinkedIn',
  ],
  openGraph: {
    title: 'Nizzhar Vargas | Marca Personal para Ejecutivos',
    description:
      'Construye la marca personal que refleja tu verdadero impacto.',
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nizzhar Vargas | Marca Personal para Ejecutivos',
    description: 'Construye la marca personal que refleja tu verdadero impacto.',
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
