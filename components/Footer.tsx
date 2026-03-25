export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-black border-t border-gray-900">
      <div className="container-max py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand-gold flex items-center justify-center">
              <span className="font-playfair font-bold text-brand-black text-base leading-none">
                NV
              </span>
            </div>
            <div>
              <p className="font-playfair font-semibold text-brand-white text-sm leading-tight">
                Talent Influencer System™
              </p>
              <p className="text-gray-600 text-[10px] uppercase tracking-widest">
                by Nizzhar Vargas
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            {[
              { label: 'Problema', href: '#problema' },
              { label: 'Sistema', href: '#solucion' },
              { label: 'Metodología', href: '#metodologia' },
              { label: 'Diagnóstico', href: '#registro' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-500 hover:text-brand-gold text-sm font-inter transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="gold-line mt-10 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-xs font-inter">
          <p>&copy; {year} Nizzhar Vargas. Todos los derechos reservados.</p>
          <p>Talent Influencer System™ &middot; Construido con propósito</p>
        </div>
      </div>
    </footer>
  )
}
