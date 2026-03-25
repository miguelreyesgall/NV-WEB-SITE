import Image from 'next/image'

const phases = [
  {
    number: '01',
    title: 'Diagnóstico estratégico',
    description: 'Análisis de la presencia actual de líderes y marca empleadora en LinkedIn.',
  },
  {
    number: '02',
    title: 'Construcción de posicionamiento',
    description: 'Definición de propuesta de valor y optimización de perfiles.',
  },
  {
    number: '03',
    title: 'Activación de visibilidad',
    description: 'Implementación de sistema de contenido y presencia digital.',
  },
  {
    number: '04',
    title: 'Acompañamiento y feedback',
    description: 'Seguimiento continuo para asegurar ejecución y evolución.',
  },
]

export default function Method() {
  return (
    <section id="metodologia" className="section-py bg-brand-dark">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-brand-gold text-xs font-inter font-medium uppercase tracking-[0.25em] mb-4">
            Metodología
          </p>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl leading-tight">
            Un sistema <span className="gold-text">estructurado</span>,
            <br />no improvisado
          </h2>
        </div>

        {/* Phases grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {phases.map((phase) => (
            <div
              key={phase.number}
              className="card-dark hover:border-brand-gold/50 transition-colors duration-300 group"
            >
              <span className="font-playfair font-bold text-3xl gold-text block mb-4">
                {phase.number}
              </span>
              <h3 className="font-playfair font-semibold text-lg text-brand-white mb-3">
                {phase.title}
              </h3>
              <p className="text-gray-400 font-inter text-[14px] leading-relaxed">
                {phase.description}
              </p>
            </div>
          ))}
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden gold-border">
            <Image
              src="/photos/nizzhar-panel.jpeg"
              alt="Nizzhar en panel de expertos"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden gold-border">
            <Image
              src="/photos/nizzhar-linkedin.jpeg"
              alt="Nizzhar en evento LinkedIn"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden gold-border hidden md:block">
            <Image
              src="/photos/nizzhar-behind-camera.jpeg"
              alt="Creación de contenido"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
