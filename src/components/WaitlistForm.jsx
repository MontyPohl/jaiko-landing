import { useState } from 'react'
import { supabase } from '../lib/supabase'

const CIUDADES = [
  'Asunción', 'Fernando de la Mora', 'Luque', 'San Lorenzo',
  'Lambaré', 'Capiatá', 'Mariano Roque Alonso', 'Ñemby',
  'Villa Elisa', 'Itauguá', 'Guarambaré', 'Ypacaraí',
  'Limpio', 'Villeta', 'Itá', 'Areguá', 'Otra zona de Central','Otra ciudad del país',
]

const initialForm = {
  nombre: '', email: '', tipo_usuario: '',
  ciudad: '', presupuesto: '', mensaje: '',
}

export default function WaitlistForm() {
  const [form, setForm]       = useState(initialForm)
  const [status, setStatus]   = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    if (!form.nombre.trim() || !form.email.trim() || !form.tipo_usuario || !form.ciudad) {
      setErrorMsg('Por favor completá todos los campos obligatorios.')
      setStatus('error')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      setErrorMsg('El email no parece válido.')
      setStatus('error')
      return
    }

    try {
      const { error } = await supabase.from('waitlist').insert([{
        nombre:       form.nombre.trim(),
        email:        form.email.trim().toLowerCase(),
        tipo_usuario: form.tipo_usuario,
        ciudad:       form.ciudad,
        presupuesto:  form.presupuesto || null,
        mensaje:      form.mensaje.trim() || null,
      }])

      if (error) {
        if (error.code === '23505') {
          setErrorMsg('Ese email ya está registrado. ¡Ya estás en la lista! 🎉')
        } else {
          setErrorMsg('Hubo un problema al guardar. Intentá de nuevo.')
          console.error('Supabase error:', error)
        }
        setStatus('error')
        return
      }

      setStatus('success')
      setForm(initialForm)
    } catch (err) {
      setErrorMsg('Error inesperado. Intentá más tarde.')
      console.error(err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="waitlist" style={{
        padding: '90px 0',
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: 560, margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--blue-mid)',
            borderRadius: 24,
            padding: '56px 40px',
            textAlign: 'center',
            boxShadow: '0 8px 40px rgba(37,99,235,0.12)',
          }}>
            <span style={{ fontSize: 52, display: 'block', marginBottom: 20 }}>🎉</span>
            <h2 style={{
              fontFamily: 'var(--font-head)',
              fontSize: 32, fontWeight: 800,
              color: 'var(--text)', marginBottom: 10,
            }}>
              ¡Ya estás dentro!
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 16, lineHeight: 1.6, marginBottom: 28 }}>
              Te avisamos en cuanto abramos el acceso. Vas a ser de las primeras personas en probar Jaiko.
            </p>
            <div style={{
              background: 'var(--blue-light)',
              border: '1px solid var(--blue-mid)',
              borderRadius: 12,
              padding: '14px 18px',
              fontSize: 14,
              color: 'var(--blue)',
              lineHeight: 1.6,
            }}>
              💡 Compartí Jaiko con amigos que buscan roomie. Mientras más personas se anoten, antes abrimos.
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" style={{
      padding: '90px 0',
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 24px', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
          <div style={{ marginBottom: 14 }}>
            <span className="tag">Acceso anticipado</span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-head)',
            fontSize: 'clamp(32px, 4.5vw, 50px)',
            fontWeight: 800,
            color: 'var(--text)',
            marginBottom: 14,
            letterSpacing: '-0.03em',
          }}>
            Anotate en la<br />
            <span style={{ color: 'var(--orange)' }}>lista de espera.</span>
          </h2>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: 16,
            maxWidth: 400,
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Sé de los primeros en acceder cuando abramos. Te avisamos directamente.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 24,
            padding: 'clamp(24px, 5vw, 44px)',
            boxShadow: '0 4px 32px rgba(0,0,0,0.4)',
          }}
        >
          <div className="form-grid-2">
            <div>
              <label htmlFor="nombre">Nombre *</label>
              <input
                id="nombre" name="nombre" type="text"
                placeholder="Tu nombre"
                value={form.nombre} onChange={handleChange} required
              />
            </div>
            <div>
              <label htmlFor="email">Email *</label>
              <input
                id="email" name="email" type="email"
                placeholder="tu@email.com"
                value={form.email} onChange={handleChange} required
              />
            </div>
          </div>

          <div style={{ marginBottom: 14 }}>
            <label>¿Qué necesitás? *</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                { value: 'busco_roomie',       label: '🔍 Busco roomie',       sub: 'Quiero compartir vivienda' },
                { value: 'ofrezco_habitacion', label: '🏠 Ofrezco habitación', sub: 'Tengo espacio disponible' },
              ].map(opt => (
                <label
                  key={opt.value}
                  htmlFor={opt.value}
                  style={{
                    display: 'flex', flexDirection: 'column', gap: 3,
                    background: form.tipo_usuario === opt.value
                      ? 'var(--blue-light)' : 'var(--bg3)',
                    border: `1.5px solid ${form.tipo_usuario === opt.value
                      ? 'var(--blue)' : 'var(--border)'}`,
                    borderRadius: 12,
                    padding: '14px 16px',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    marginBottom: 0,
                  }}
                >
                  <input
                    type="radio" id={opt.value} name="tipo_usuario"
                    value={opt.value}
                    checked={form.tipo_usuario === opt.value}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                  />
                  <span style={{
                    fontSize: 14, fontWeight: 600,
                    color: form.tipo_usuario === opt.value ? 'var(--blue)' : 'var(--text)',
                  }}>
                    {opt.label}
                  </span>
                  <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 300 }}>
                    {opt.sub}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-grid-2">
            <div>
              <label htmlFor="ciudad">Ciudad *</label>
              <select
                id="ciudad" name="ciudad"
                value={form.ciudad} onChange={handleChange}
                required style={{ cursor: 'pointer' }}
              >
                <option value="">Seleccioná tu ciudad</option>
                {CIUDADES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="presupuesto">Presupuesto mensual (opcional)</label>
              <input
                id="presupuesto" name="presupuesto" type="text"
                placeholder="Ej: ₲ 1.500.000"
                value={form.presupuesto} onChange={handleChange}
              />
            </div>
          </div>

          <div style={{ marginBottom: 24 }}>
            <label htmlFor="mensaje">¿Algo que quieras contarnos? (opcional)</label>
            <textarea
              id="mensaje" name="mensaje" rows={3}
              placeholder="Zonas de interés, situación actual, qué tipo de roomie buscás..."
              value={form.mensaje} onChange={handleChange}
              style={{ resize: 'vertical' }}
            />
          </div>

          {status === 'error' && (
            <div style={{
              background: 'rgba(220,38,38,0.1)',
              border: '1px solid rgba(220,38,38,0.3)',
              borderRadius: 10, padding: '12px 16px',
              color: '#FCA5A5', fontSize: 14, marginBottom: 18,
            }}>
              {errorMsg}
            </div>
          )}

          <button
            type="submit"
            className="btn-primary"
            disabled={status === 'loading'}
            style={{
              width: '100%', fontSize: 16, padding: '17px',
            }}
          >
            {status === 'loading' ? 'Guardando...' : 'Quiero acceso anticipado →'}
          </button>

          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 12, marginTop: 14 }}>
            Sin spam. Te avisamos cuando abramos.
          </p>
        </form>
      </div>
    </section>
  )
}
