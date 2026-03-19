import Image from 'next/image'

export default function About() {
  return (
    <section id="sobre-mi" className="section-py bg-brand-black">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div className="relative order-2 md:order-1">
            <div className="relative w-full aspect-[3/4] max-w-sm mx-auto">
              {/* Photo */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden gold-border">
                <Image
                  src="/nizzhar.png"
                  alt="Nizzhar Vargas — Partner Lead LinkedIn Colombia & México"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Decorative corners */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-brand-gold/30 rounded-br-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-brand-gold/30 rounded-tl-2xl" />

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-brand-card gold-border rounded-xl px-5 py-4 gold-glow">
                <p className="text-brand-gold font-playfair font-bold text-xl leading-tight">Partner Lead</p>
                <p className="text-gray-400 text-xs font-inter uppercase tracking-wider mt-1">LinkedIn CO & MX</p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 md:order-2">
            <p className="text-brand-gold text-xs font-inter font-medium uppercase tracking-[0.25em] mb-4">
              Sobre Nizzhar
            </p>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl leading-tight mb-6">
              El ejecutivo que conoce
              <br />
              <span className="gold-text">LinkedIn desde adentro</span>
            </h2>

            <div className="gold-line mb-8 w-16" />

            <p className="text-gray-300 leading-relaxed mb-6 font-inter text-[15px]">
              Soy administrador de empresas con más de 5 años liderando
              alianzas estratégicas y desarrollando negocios B2B en el sector
              de talento humano y HR Tech. Hoy me desempeño como{' '}
              <span className="text-brand-white font-medium">
                Partner Lead en LinkedIn Colombia & México
              </span>
              , donde impulso soluciones de reclutamiento, employer branding y
              desarrollo organizacional para empresas de alto nivel.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10 font-inter text-[15px]">
              Esa posición me da algo que nadie más tiene: sé exactamente cómo
              funciona LinkedIn por dentro — el algoritmo, las estrategias de
              visibilidad y los patrones que separan a los ejecutivos anónimos
              de los referentes de industria. Y quiero ayudarte a hacer ese
              salto.
            </p>

            {/* Credenciales reales */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '◈', text: 'Partner Lead LinkedIn CO & MX' },
                { icon: '◈', text: 'Strategic Alliances & B2B' },
                { icon: '◈', text: 'HR Tech & Employer Branding' },
                { icon: '◈', text: 'Bogotá, Colombia' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-brand-gold text-sm">{item.icon}</span>
                  <span className="text-gray-300 text-sm font-inter">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
