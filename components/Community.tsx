const traits = [
  'Directores y CEOs que quieren ampliar su visibilidad en LinkedIn',
  'Gerentes que buscan posicionarse como referentes en su industria',
  'Ejecutivos con trayectoria real que el mercado aún no conoce suficiente',
  'Líderes en HR Tech, B2B, SaaS o transformación digital',
  'Profesionales de Colombia y México que quieren dejar huella más allá de su cargo',
]

export default function Community() {
  return (
    <section id="comunidad" className="section-py bg-brand-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p className="text-brand-gold text-xs font-inter font-medium uppercase tracking-[0.25em] mb-4">
              La comunidad
            </p>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl leading-tight mb-6">
              Una comunidad de
              <br />
              <span className="gold-text">ejecutivos referentes</span>
            </h2>

            <div className="gold-line mb-8 w-16" />

            <p className="text-gray-300 font-inter text-[15px] leading-relaxed mb-8">
              No es un grupo más de networking. Es un espacio donde ejecutivos
              de Colombia y México comparten estrategias reales de LinkedIn,
              se retroalimentan y se impulsan hacia el siguiente nivel de
              visibilidad e impacto.
            </p>

            <p className="text-gray-400 font-inter text-[14px] leading-relaxed mb-10">
              Cuento con más de 500 conexiones estratégicas y acceso directo
              a los ecosistemas de talento, HR Tech y liderazgo ejecutivo en
              ambos países. Esa red ahora es tuya.
            </p>

            <a href="#registro" className="btn-gold inline-flex text-sm">
              Quiero ser parte →
            </a>
          </div>

          {/* Traits list */}
          <div className="card-dark">
            <h3 className="font-playfair text-xl text-brand-white mb-6">
              Esta comunidad es para ti si eres...
            </h3>
            <div className="flex flex-col gap-4">
              {traits.map((trait, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-brand-gold text-[10px]">✓</span>
                  </div>
                  <p className="text-gray-300 font-inter text-[14px] leading-relaxed">{trait}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl bg-brand-gold/5 border border-brand-gold/20">
              <p className="text-brand-gold font-inter text-sm font-medium text-center">
                ✦ Colombia & México · Acceso exclusivo para miembros ✦
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
