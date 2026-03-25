import Image from 'next/image'

const differentials = [
  'No enseñamos LinkedIn de forma genérica',
  'No creamos contenido por crear contenido',
  'No dejamos la ejecución en teoría',
]

const forWhom = [
  'Organizaciones con más de 200 empleados',
  'Empresas del sector retail y financiero',
  'Equipos de talento y cultura',
  'Compañías que buscan diferenciarse en LinkedIn',
]

const targetProfiles = [
  'C-levels',
  'Líderes de área',
  'Perfiles estratégicos dentro de la organización',
]

export default function Community() {
  return (
    <section className="section-py bg-brand-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max relative z-10">
        {/* Differential */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="text-brand-gold text-xs font-inter font-medium uppercase tracking-[0.25em] mb-4">
              Diferencial
            </p>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl leading-tight mb-8">
              No entrenamos perfiles.{' '}
              <span className="gold-text">Desarrollamos influencia.</span>
            </h2>

            <p className="text-gray-400 font-inter text-[15px] leading-relaxed mb-6">
              A diferencia de programas tradicionales:
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {differentials.map((d, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <span className="text-red-500/60 text-sm shrink-0">✕</span>
                  <p className="text-gray-400 font-inter text-[15px]">{d}</p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-brand-gold/5 border border-brand-gold/20">
              <p className="text-gray-200 font-inter text-[15px] leading-relaxed">
                Construimos líderes visibles que generan{' '}
                <span className="text-brand-gold font-medium">impacto real</span> en la
                percepción y atracción de talento.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] max-w-sm ml-auto rounded-2xl overflow-hidden gold-border gold-glow">
              <Image
                src="/photos/nizzhar-magneto.jpeg"
                alt="Nizzhar en escenario presentando"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* For whom */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Target profiles */}
          <div className="card-dark">
            <p className="text-brand-gold text-xs font-inter font-medium uppercase tracking-[0.25em] mb-3">
              A quién impacta
            </p>
            <h3 className="font-playfair font-bold text-2xl text-brand-white mb-6">
              Diseñado para líderes que representan la marca
            </h3>
            <div className="flex flex-col gap-4">
              {targetProfiles.map((t, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center shrink-0">
                    <span className="text-brand-gold text-[10px]">✓</span>
                  </div>
                  <p className="text-gray-300 font-inter text-[14px]">{t}</p>
                </div>
              ))}
            </div>
          </div>

          {/* For which companies */}
          <div className="card-dark">
            <p className="text-brand-gold text-xs font-inter font-medium uppercase tracking-[0.25em] mb-3">
              Para quién es
            </p>
            <h3 className="font-playfair font-bold text-2xl text-brand-white mb-6">
              Empresas que quieren competir por talento en serio
            </h3>
            <div className="flex flex-col gap-4">
              {forWhom.map((f, i) => (
                <div key={i} className="flex gap-3 items-center">
                  <div className="w-5 h-5 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center shrink-0">
                    <span className="text-brand-gold text-[10px]">✓</span>
                  </div>
                  <p className="text-gray-300 font-inter text-[14px]">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo strip */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden gold-border">
            <Image
              src="/photos/nizzhar-networking.jpeg"
              alt="Networking ejecutivo"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden gold-border">
            <Image
              src="/photos/nizzhar-bluradio.jpeg"
              alt="Nizzhar en Blu Radio"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden gold-border">
            <Image
              src="/photos/nizzhar-team.jpeg"
              alt="Equipo de trabajo"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
