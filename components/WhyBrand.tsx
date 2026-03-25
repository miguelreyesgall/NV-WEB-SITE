import Image from 'next/image'

const problems = [
  'Perfiles en LinkedIn sin impacto real',
  'Baja visibilidad frente a la competencia',
  'Publicaciones que no conectan ni atraen talento',
  'Dependencia total del área de HR para comunicar la marca',
]

export default function WhyBrand() {
  return (
    <section id="problema" className="section-py bg-brand-dark">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-brand-gold text-xs font-inter font-medium uppercase tracking-[0.25em] mb-4">
              El problema
            </p>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl leading-tight mb-6">
              Tu marca empleadora no está fallando...{' '}
              <span className="gold-text">está subutilizada</span>
            </h2>

            <div className="gold-line mb-8 w-16" />

            <p className="text-gray-300 leading-relaxed mb-8 font-inter text-[15px]">
              Hoy las empresas invierten en marca empleadora, pero están dejando
              de lado su activo más poderoso: <span className="text-brand-white font-medium">sus líderes.</span>
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {problems.map((p, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-red-500/60 text-lg mt-0.5 shrink-0">◐</span>
                  <p className="text-gray-400 font-inter text-[15px] leading-relaxed">{p}</p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-red-500/5 border border-red-500/20">
              <p className="text-gray-300 font-inter text-sm font-medium">
                El resultado: menos atracción, menos posicionamiento y menos oportunidades.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden gold-border">
              <Image
                src="/photos/nizzhar-roundtable.jpeg"
                alt="Mesa de trabajo con líderes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Insight quote */}
        <div className="mt-24 text-center px-6">
          <div className="gold-line mb-10" />
          <blockquote className="font-playfair text-3xl md:text-4xl lg:text-5xl text-gray-200 italic leading-tight max-w-3xl mx-auto">
            El talento no sigue empresas.
            <br />
            <span className="gold-text not-italic font-bold">Sigue líderes.</span>
          </blockquote>
          <div className="gold-line mt-10" />
        </div>
      </div>
    </section>
  )
}
