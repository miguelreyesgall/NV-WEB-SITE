import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B2A] via-brand-black to-brand-black" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container-max pt-28 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text column */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full gold-border mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse-slow inline-block" />
              <span className="text-xs text-brand-gold font-inter font-medium tracking-[0.2em] uppercase">
                Talent Influencer System™
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] tracking-tight mb-6 animate-fade-up">
              Activa a tus líderes como{' '}
              <span className="gold-text">Talent Influencers</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-gray-400 max-w-lg mb-4 font-inter leading-relaxed animate-fade-up">
              Convierte a tu equipo directivo en el principal canal de atracción
              de talento y posicionamiento de marca empleadora en LinkedIn.
            </p>

            {/* Support text */}
            <p className="text-base text-gray-500 max-w-lg mb-10 font-inter leading-relaxed animate-fade-up">
              Desarrollamos líderes visibles, alineados con tu marca, que generan
              reputación y atraen talento de forma orgánica.
            </p>

            {/* CTA */}
            <div className="animate-fade-up">
              <a href="#registro" className="btn-gold text-base">
                Solicita diagnóstico estratégico →
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-[4/5] max-w-md ml-auto rounded-2xl overflow-hidden gold-border gold-glow">
              <Image
                src="/photos/nizzhar-speaker.jpeg"
                alt="Nizzhar Vargas — Talent Influencer System"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-brand-card gold-border rounded-xl px-5 py-4 gold-glow">
              <p className="text-brand-gold font-playfair font-bold text-xl leading-tight">Partner Lead</p>
              <p className="text-gray-400 text-xs font-inter uppercase tracking-wider mt-1">LinkedIn CO & MX</p>
            </div>
          </div>
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
