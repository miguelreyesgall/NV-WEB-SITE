import Image from 'next/image'

const bullets = [
  'Desarrollamos marca personal alineada con la empresa',
  'Optimizamos perfiles de LinkedIn con enfoque estratégico',
  'Creamos sistemas simples de contenido para líderes',
  'Activamos visibilidad sin depender de esfuerzos aislados',
  'Acompañamos el proceso con feedback continuo',
]

export default function About() {
  return (
    <section id="solucion" className="section-py bg-brand-black">
      <div className="container-max">
        {/* Solution header */}
        <div className="text-center mb-20">
          <p className="text-brand-gold text-xs font-inter font-medium uppercase tracking-[0.25em] mb-4">
            La solución
          </p>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl leading-tight mb-4">
            <span className="gold-text">Talent Influencer System™</span>
          </h2>
          <p className="text-gray-300 font-inter text-lg max-w-2xl mx-auto leading-relaxed mb-3">
            Un programa estratégico diseñado para desarrollar líderes visibles que
            fortalecen la marca empleadora y generan atracción de talento desde LinkedIn.
          </p>
          <p className="text-gray-500 font-inter text-base max-w-xl mx-auto italic">
            No es capacitación tradicional. Es un proceso guiado de posicionamiento real.
          </p>
        </div>

        {/* What we do */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden gold-border gold-glow">
              <Image
                src="/photos/nizzhar-presenting.jpeg"
                alt="Nizzhar presentando soluciones con IA y LinkedIn"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative corners */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-brand-gold/30 rounded-br-2xl" />
          </div>

          {/* Bullets */}
          <div>
            <p className="text-brand-gold text-xs font-inter font-medium uppercase tracking-[0.25em] mb-4">
              Qué hacemos
            </p>
            <h3 className="font-playfair font-bold text-3xl md:text-4xl leading-tight mb-8">
              Convertimos líderes en{' '}
              <span className="gold-text">activos estratégicos</span> de marca
            </h3>

            <div className="flex flex-col gap-5">
              {bullets.map((b, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-brand-gold text-[10px]">✓</span>
                  </div>
                  <p className="text-gray-300 font-inter text-[15px] leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
