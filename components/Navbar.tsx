'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Sobre Nizzhar', href: '#sobre-mi' },
  { label: 'El Método', href: '#metodo' },
  { label: 'Comunidad', href: '#comunidad' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-black/95 backdrop-blur-md border-b border-gray-800/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-max flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-brand-gold flex items-center justify-center">
            <span className="font-playfair font-bold text-brand-black text-lg leading-none">
              NV
            </span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-playfair font-semibold text-brand-white text-sm leading-tight tracking-wide">
              Nizzhar Vargas
            </span>
            <span className="text-gray-500 text-[10px] uppercase tracking-widest leading-tight">
              Marca Personal
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-400 hover:text-brand-gold text-sm font-inter tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#registro"
          className="hidden md:inline-flex btn-gold text-sm px-6 py-3"
        >
          Reserva tu lugar
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
        >
          <span
            className={`w-6 h-0.5 bg-brand-gold transition-transform duration-300 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-brand-gold transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-brand-gold transition-transform duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-64' : 'max-h-0'
        } bg-brand-dark border-b border-gray-800`}
      >
        <div className="container-max py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-brand-gold text-base font-inter transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#registro"
            onClick={() => setMenuOpen(false)}
            className="btn-gold text-center text-sm"
          >
            Reserva tu lugar
          </a>
        </div>
      </div>
    </header>
  )
}
