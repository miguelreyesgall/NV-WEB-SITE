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
            <div className="flex flex-wrap items-center gap-4 animate-fade-up">
              <a href="#registro" className="btn-gold text-base">
                Solicita diagnóstico estratégico →
              </a>
              <a
                href="https://wa.me/5731464975554"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#25D366]/50 text-[#25D366] text-base font-inter font-medium hover:bg-[#25D366]/10 transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>

          {/* Image column */}
          <div className="relative hidden md:block">
            <div className="relative w-full aspect-[4/5] max-w-md ml-auto rounded-2xl overflow-hidden gold-border gold-glow">
              <Image
                src="/photos/nizzhar-hero.png"
                alt="Nizzhar Vargas — Talent Influencer System"
                fill
                className="object-cover object-center"
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
