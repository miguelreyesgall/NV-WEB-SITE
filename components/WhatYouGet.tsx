const benefits = [
  {
    icon: '◆',
    title: 'Estrategias de LinkedIn desde adentro',
    description:
      'Accede a lo que aprendo trabajando directamente con LinkedIn: cómo funciona el algoritmo, qué tipos de contenido funcionan hoy y cómo los reclutadores y líderes buscan perfiles como el tuyo.',
    tag: 'Exclusivo',
  },
  {
    icon: '◆',
    title: 'Contenido de alto valor',
    description:
      'Frameworks, guías y playbooks que solo comparto con mi comunidad. Sin teoría vacía — solo estrategias que ejecutivos reales ya están usando para posicionarse.',
    tag: 'Inmediato',
  },
  {
    icon: '◆',
    title: 'Red de ejecutivos de alto nivel',
    description:
      'Conéctate con directivos, gerentes y líderes de Colombia y México que están construyendo sus marcas personales. El nivel de tu red define el nivel de tus oportunidades.',
    tag: 'Comunidad',
  },
  {
    icon: '◆',
    title: 'Sesión estratégica 1:1',
    description:
      'Los primeros inscritos acceden a una sesión personalizada conmigo para diagnosticar tu perfil y trazar el roadmap de tu marca personal en LinkedIn. Cupos muy limitados.',
    tag: 'Limitado',
    featured: true,
  },
]

export default function WhatYouGet() {
  return (
    <section className="section-py bg-brand-dark">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold text-xs font-inter font-medium uppercase tracking-[0.25em] mb-4">
            Lo que obtienes
          </p>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl leading-tight">
            Todo lo que necesitas
            <br />
            <span className="gold-text">para empezar hoy</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className={`relative rounded-2xl p-8 transition-all duration-300 group cursor-default ${
                b.featured
                  ? 'bg-gradient-to-br from-brand-gold/10 to-brand-card border border-brand-gold/40 hover:border-brand-gold/70'
                  : 'bg-brand-card gold-border-hover hover:bg-brand-card/80'
              }`}
            >
              {b.featured && (
                <div className="absolute top-4 right-4 bg-brand-gold text-brand-black text-[10px] font-inter font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                  Cupos limitados
                </div>
              )}

              <div className="flex items-start gap-4 mb-5">
                <span className="text-brand-gold text-xl mt-0.5">{b.icon}</span>
                <div>
                  <span className="text-[10px] text-brand-gold/70 font-inter font-medium uppercase tracking-widest block mb-1">
                    {b.tag}
                  </span>
                  <h3 className="font-playfair font-semibold text-xl text-brand-white">
                    {b.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-400 font-inter text-[14px] leading-relaxed pl-8">
                {b.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#registro" className="btn-gold text-base inline-flex">
            Quiero acceder a todo esto →
          </a>
        </div>
      </div>
    </section>
  )
}
