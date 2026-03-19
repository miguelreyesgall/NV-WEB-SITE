const problems = [
  {
    icon: '◐',
    text: 'Tienes años de trayectoria y logros concretos, pero tu perfil de LinkedIn no los refleja.',
  },
  {
    icon: '◐',
    text: 'Las oportunidades — proyectos, alianzas, invitaciones a hablar — llegan a otros con menos experiencia que tú.',
  },
  {
    icon: '◐',
    text: 'Publicas esporádicamente sin una estrategia clara y el algoritmo simplemente no te muestra.',
  },
  {
    icon: '◐',
    text: 'Tu identidad profesional está atada a tu cargo actual, no al impacto que generas.',
  },
]

const solutions = [
  {
    icon: '✦',
    title: 'Perfil que posiciona',
    text: 'Un LinkedIn optimizado que comunica tu valor antes de que abras la boca.',
  },
  {
    icon: '✦',
    title: 'Estrategia de contenido real',
    text: 'Contenido que el algoritmo premia y que tu audiencia quiere leer.',
  },
  {
    icon: '✦',
    title: 'Red estratégica',
    text: 'Construyes conexiones de alto nivel que generan oportunidades reales.',
  },
  {
    icon: '✦',
    title: 'Autoridad independiente',
    text: 'Tu marca personal opera sola — no depende de ningún cargo ni empresa.',
  },
]

export default function WhyBrand() {
  return (
    <section className="section-py bg-brand-dark">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-brand-gold text-xs font-inter font-medium uppercase tracking-[0.25em] mb-4">
            El problema que nadie dice en voz alta
          </p>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl leading-tight">
            En LinkedIn, el talento
            <br />
            <span className="gold-text">sin estrategia es invisible</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Problems */}
          <div>
            <h3 className="font-playfair text-xl text-gray-300 mb-8 pb-4 border-b border-gray-800">
              Sin una marca personal en LinkedIn...
            </h3>
            <div className="flex flex-col gap-5">
              {problems.map((p, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-red-500/60 text-lg mt-0.5 shrink-0">{p.icon}</span>
                  <p className="text-gray-400 font-inter text-[15px] leading-relaxed">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-playfair text-xl text-gray-300 mb-8 pb-4 border-b border-brand-gold/20">
              Con la estrategia correcta...
            </h3>
            <div className="flex flex-col gap-5">
              {solutions.map((s, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-brand-gold text-lg mt-0.5 shrink-0">{s.icon}</span>
                  <div>
                    <p className="text-brand-white font-inter font-medium text-[15px] mb-1">{s.title}</p>
                    <p className="text-gray-400 font-inter text-[14px] leading-relaxed">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-20 text-center px-6">
          <div className="gold-line mb-10" />
          <blockquote className="font-playfair text-2xl md:text-3xl text-gray-200 italic leading-relaxed max-w-3xl mx-auto">
            "En LinkedIn tengo acceso al algoritmo, a los datos y a las mejores
            prácticas globales. Lo que aprendí adentro, ahora te lo enseño a ti."
          </blockquote>
          <p className="text-brand-gold font-inter text-sm mt-4 tracking-widest">
            — Nizzhar Vargas, Partner Lead LinkedIn Colombia & México
          </p>
          <div className="gold-line mt-10" />
        </div>
      </div>
    </section>
  )
}
