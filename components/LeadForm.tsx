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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
    <section id="registro" className="section-py bg-brand-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-brand-gold/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-brand-gold text-xs font-inter font-medium uppercase tracking-[0.25em] mb-4">
              Diagnóstico estratégico
            </p>
            <h2 className="font-playfair font-bold text-4xl md:text-5xl leading-tight mb-4">
              Descubre el potencial de{' '}
              <span className="gold-text">tus líderes</span>
            </h2>
            <p className="text-gray-400 font-inter text-base leading-relaxed">
              Solicita un diagnóstico estratégico y conoce cómo convertir a tu
              equipo en un canal activo de atracción de talento.
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
                  ¡Solicitud recibida!
                </h3>
                <p className="text-gray-400 font-inter text-[15px] leading-relaxed max-w-sm mx-auto mb-2">
                  Nos pondremos en contacto contigo pronto para agendar tu
                  diagnóstico estratégico.
                </p>
                <p className="text-gray-500 font-inter text-sm">
                  (Revisa tu bandeja de entrada)
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
                      Email corporativo <span className="text-brand-gold">*</span>
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
                      Cargo <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="cargo"
                      name="cargo"
                      type="text"
                      required
                      value={form.cargo}
                      onChange={handleChange}
                      placeholder="Ej: VP de Talento Humano"
                      className="input-dark"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="label-dark">
                      Empresa <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      required
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
                    ¿Cuál es el principal reto de tu marca empleadora hoy?
                  </label>
                  <textarea
                    id="desafio"
                    name="desafio"
                    rows={3}
                    value={form.desafio}
                    onChange={handleChange}
                    placeholder="Cuéntanos brevemente..."
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
                    'Solicitar diagnóstico →'
                  )}
                </button>

                <p className="text-gray-600 text-xs font-inter text-center leading-relaxed">
                  Tu información es confidencial. Sin spam, sin venta de datos.
                </p>
              </form>
            )}
          </div>

          {/* Closing statement */}
          <div className="text-center mt-16">
            <div className="gold-line mb-8" />
            <p className="font-playfair text-xl md:text-2xl text-gray-300 leading-relaxed max-w-lg mx-auto">
              No necesitas más inversión en visibilidad.
            </p>
            <p className="font-playfair text-xl md:text-2xl text-brand-white font-bold mt-2">
              Necesitas que tus líderes empiecen a generarla.
            </p>
            <div className="gold-line mt-8" />
          </div>
        </div>
      </div>
    </section>
  )
}
