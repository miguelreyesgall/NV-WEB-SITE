import Image from 'next/image'

const results = [
  {
    icon: '✦',
    title: 'Mayor atracción de talento calificado',
  },
  {
    icon: '✦',
    title: 'Incremento en visibilidad orgánica',
  },
  {
    icon: '✦',
    title: 'Posicionamiento de líderes como referentes',
  },
  {
    icon: '✦',
    title: 'Fortalecimiento de la reputación corporativa',
  },
  {
    icon: '✦',
    title: 'Reducción de dependencia en portales de empleo',
  },
]

const approach = [
  'Sesiones grupales estructuradas',
  'Acompañamiento con feedback personalizado',
  'Aplicación directa en perfiles reales',
  'Construcción progresiva, no teórica',
]

export default function WhatYouGet() {
  return (
    <section id="impacto" className="section-py bg-brand-black">
      <div className="container-max">
        {/* Impact section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Results */}
          <div>
            <p className="text-brand-gold text-xs font-inter font-medium uppercase tracking-[0.25em] mb-4">
              Impacto para la organización
            </p>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl leading-tight mb-8">
              Resultados que transforman la{' '}
              <span className="gold-text">marca empleadora</span>
            </h2>

            <div className="flex flex-col gap-5">
              {results.map((r, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <span className="text-brand-gold text-lg shrink-0">{r.icon}</span>
                  <p className="text-gray-300 font-inter text-[15px]">{r.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden gold-border gold-glow">
              <Image
                src="/photos/nizzhar-stage.jpeg"
                alt="Nizzhar en Claro Tech Summit"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Approach section */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden gold-border">
              <Image
                src="/photos/nizzhar-workshop.jpeg"
                alt="Taller grupal con líderes"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 md:order-2">
            <p className="text-brand-gold text-xs font-inter font-medium uppercase tracking-[0.25em] mb-4">
              Enfoque del programa
            </p>
            <h3 className="font-playfair font-bold text-3xl md:text-4xl leading-tight mb-8">
              Un enfoque <span className="gold-text">práctico</span>,
              <br />cercano y aplicable
            </h3>

            <div className="flex flex-col gap-4">
              {approach.map((a, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center shrink-0">
                    <span className="text-brand-gold text-[10px]">✓</span>
                  </div>
                  <p className="text-gray-300 font-inter text-[15px]">{a}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 rounded-xl bg-brand-gold/5 border border-brand-gold/20">
              <p className="text-brand-gold font-inter text-sm font-medium">
                Cohortes reducidas (4 a 8 líderes) para garantizar profundidad y acompañamiento real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
