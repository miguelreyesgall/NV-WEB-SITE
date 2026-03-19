export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A] via-brand-black to-brand-black" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Radial glow top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-max text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full gold-border mb-10 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse-slow inline-block" />
          <span className="text-xs text-brand-gold font-inter font-medium tracking-[0.2em] uppercase">
            Para Ejecutivos de Alto Nivel
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-playfair font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[82px] leading-[1.08] tracking-tight mb-8 animate-fade-up">
          Tu Marca Personal en
          <br />
          <span className="gold-text">LinkedIn, Construida</span>
          <br />
          <span className="text-gray-200">desde Adentro</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 font-inter leading-relaxed animate-fade-up">
          Trabajo en LinkedIn Colombia & México. Sé exactamente cómo los
          ejecutivos pueden construir autoridad real, atraer oportunidades de
          alto nivel y crear una comunidad que genere impacto.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 animate-fade-up">
          <a href="#registro" className="btn-gold text-base">
            Quiero construir mi marca →
          </a>
          <a href="#metodo" className="btn-outline text-base">
            Conoce el método
          </a>
        </div>

        {/* Social proof mini */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 animate-fade-in">
          {[
            { number: '+500', label: 'Conexiones estratégicas' },
            { number: '2', label: 'Países: Colombia & México' },
            { number: '5+', label: 'Años en HR Tech & B2B' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-playfair font-bold text-3xl gold-text mb-1">
                {stat.number}
              </p>
              <p className="text-gray-500 text-xs font-inter uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-gray-600 text-[10px] uppercase tracking-widest">Descubre más</span>
        <div className="w-5 h-8 border border-gray-700 rounded-full flex items-start justify-center pt-1.5">
          <div className="w-0.5 h-2 bg-brand-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
