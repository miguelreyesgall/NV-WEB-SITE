'use client'

import { useState } from 'react'

interface FormData {
  nombre: string
  email: string
  cargo: string
  empresa: string
  desafio: string
}

const initialForm: FormData = {
  nombre: '',
  email: '',
  cargo: '',
  empresa: '',
  desafio: '',
}

export default function LeadForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMsg(data.message || 'Ocurrió un error. Por favor intenta nuevamente.')
        return
      }

      setStatus('success')
      setForm(initialForm)
    } catch {
      setStatus('error')
      setErrorMsg('Ocurrió un error de conexión. Por favor intenta nuevamente.')
    }
  }

  return (
    <section id="registro" className="section-py bg-brand-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-gold/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-brand-gold text-xs font-inter font-medium uppercase tracking-[0.25em] mb-4">
              Empieza hoy
            </p>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl leading-tight mb-4">
              Reserva tu lugar en
              <br />
              <span className="gold-text">la comunidad</span>
            </h2>
            <p className="text-gray-400 font-inter text-base leading-relaxed">
              Déjanos tus datos y recibirás acceso anticipado, contenido
              exclusivo y una bienvenida personalizada.
            </p>
          </div>

          {/* Form card */}
          <div className="rounded-2xl border border-gray-800 bg-brand-card p-8 md:p-10 gold-glow">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-brand-gold/10 border-2 border-brand-gold/40 flex items-center justify-center mx-auto mb-6">
                  <span className="text-brand-gold text-2xl">✓</span>
                </div>
                <h3 className="font-playfair font-bold text-2xl text-brand-white mb-3">
                  ¡Bienvenido a la comunidad!
                </h3>
                <p className="text-gray-400 font-inter text-[15px] leading-relaxed max-w-sm mx-auto mb-2">
                  Revisa tu bandeja de entrada. Te enviamos un correo con
                  contenido de valor y los próximos pasos.
                </p>
                <p className="text-gray-500 font-inter text-sm">
                  (Si no lo ves, revisa spam o promociones)
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Row 1 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="nombre" className="label-dark">
                      Nombre completo <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Ej: Carlos Mendoza"
                      className="input-dark"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="label-dark">
                      Email profesional <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@empresa.com"
                      className="input-dark"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="cargo" className="label-dark">
                      Cargo / Posición <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="cargo"
                      name="cargo"
                      type="text"
                      required
                      value={form.cargo}
                      onChange={handleChange}
                      placeholder="Ej: Director Comercial"
                      className="input-dark"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="label-dark">
                      Empresa
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Nombre de tu empresa"
                      className="input-dark"
                    />
                  </div>
                </div>

                {/* Desafío */}
                <div>
                  <label htmlFor="desafio" className="label-dark">
                    ¿Cuál es tu mayor desafío al construir tu marca personal?
                  </label>
                  <textarea
                    id="desafio"
                    name="desafio"
                    rows={3}
                    value={form.desafio}
                    onChange={handleChange}
                    placeholder="Cuéntanos brevemente dónde estás y qué quieres lograr..."
                    className="input-dark resize-none"
                  />
                </div>

                {/* Error message */}
                {status === 'error' && (
                  <div className="rounded-lg bg-red-500/10 border border-red-500/30 px-4 py-3">
                    <p className="text-red-400 text-sm font-inter">{errorMsg}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`btn-gold w-full text-base flex items-center justify-center gap-3 mt-2 ${
                    status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-brand-black/30 border-t-brand-black rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Quiero reservar mi lugar →'
                  )}
                </button>

                {/* Privacy note */}
                <p className="text-gray-600 text-xs font-inter text-center leading-relaxed">
                  Tu información es confidencial. Sin spam, sin venta de datos.
                  Solo contenido de valor y comunicaciones relevantes.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
