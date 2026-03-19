const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    subtitle: 'Dónde estás realmente',
    description:
      'Analizamos tu perfil de LinkedIn, tu presencia actual y cómo te percibe el mercado hoy. Sin adornos: la verdad de tu punto de partida.',
  },
  {
    number: '02',
    title: 'Posicionamiento',
    subtitle: 'Define tu propuesta de valor única',
    description:
      'Identificamos qué te hace diferente: la intersección entre tu experiencia, tus habilidades y el problema que resuelves mejor que nadie. Eso es tu marca.',
  },
  {
    number: '03',
    title: 'Perfil de Autoridad',
    subtitle: 'LinkedIn optimizado para posicionarte',
    description:
      'Construimos un perfil que el algoritmo entiende y que tu audiencia valora. Titular, extracto, experiencias y keywords estratégicas alineadas a tu objetivo.',
  },
  {
    number: '04',
    title: 'Contenido Estratégico',
    subtitle: 'Publica con propósito, no por publicar',
    description:
      'Desarrollamos tu voz editorial: los temas en los que eres autoridad, los formatos que funcionan en LinkedIn y la frecuencia que puedes sostener sin agotarte.',
  },
  {
    number: '05',
    title: 'Comunidad & Legado',
    subtitle: 'Tu tribu de alto impacto',
    description:
      'Construimos relaciones estratégicas con las personas correctas. Una comunidad comprometida alrededor de tu marca genera más oportunidades que cualquier CV.',
  },
]

export default function Method() {
  return (
    <section id="metodo" className="section-py bg-brand-black">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-brand-gold text-xs font-inter font-medium uppercase tracking-[0.25em] mb-4">
            El sistema probado
          </p>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl leading-tight">
            El Método <span className="gold-text">NV</span>
          </h2>
          <p className="text-gray-400 font-inter text-base mt-4 max-w-xl mx-auto leading-relaxed">
            Un proceso de 5 fases diseñado para ejecutivos que quieren
            construir autoridad en LinkedIn sin sacrificar tiempo ni
            autenticidad.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-gold/40 via-brand-gold/20 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex flex-col sm:flex-row gap-6 md:gap-12 items-start ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Number badge */}
                <div className="shrink-0 flex items-center justify-center sm:absolute sm:left-1/2 sm:-translate-x-1/2 z-10">
                  <div className="w-16 h-16 rounded-full bg-brand-dark gold-border flex items-center justify-center gold-glow">
                    <span className="font-playfair font-bold text-brand-gold text-lg">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`sm:w-[calc(50%-60px)] ${
                    i % 2 === 0
                      ? 'sm:mr-auto sm:pr-8 md:pr-16'
                      : 'sm:ml-auto sm:pl-8 md:pl-16'
                  }`}
                >
                  <div className="card-dark hover:border-brand-gold/50 transition-colors duration-300">
                    <h3 className="font-playfair font-bold text-2xl text-brand-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-brand-gold text-sm font-inter font-medium mb-4 tracking-wide">
                      {step.subtitle}
                    </p>
                    <p className="text-gray-400 font-inter text-[14px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
