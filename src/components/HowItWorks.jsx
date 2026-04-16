// HowItWorks.jsx — Dark Theme

const steps = [
  {
    number: '1',
    iconBg: '#3B82F6',
    cardAccent: 'rgba(59,130,246,0.12)',
    icon: '📝',
    title: 'Creá tu perfil',
    desc: 'Contanos quién sos, tus hábitos, tu presupuesto y la zona de Central donde querés vivir.',
  },
  {
    number: '2',
    iconBg: '#F97316',
    cardAccent: 'rgba(249,115,22,0.12)',
    icon: '🔍',
    title: 'Explorá perfiles',
    desc: 'Nuestro sistema te muestra personas compatibles según tus preferencias de convivencia.',
  },
  {
    number: '3',
    iconBg: '#16A34A',
    cardAccent: 'rgba(22,163,74,0.12)',
    icon: '💬',
    title: 'Conectá y acordá',
    desc: 'Chateá con los candidatos, conocanse y definan juntos las condiciones del alquiler compartido.',
  },
  {
    number: '4',
    iconBg: '#E11D48',
    cardAccent: 'rgba(225,29,72,0.12)',
    icon: '🏠',
    title: '¡A vivir!',
    desc: 'Mudense y disfruten de su nuevo hogar compartiendo los gastos equitativamente.',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" style={{
      padding: '90px 0',
      background: 'var(--bg)',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ marginBottom: 14 }}>
            <span className="tag">¿Cómo funciona?</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            fontWeight: 800,
            color: 'var(--text)',
            marginBottom: 14,
          }}>
            En solo 4 pasos estás conectando<br />
            con tu futuro <span style={{ color: '#3B82F6' }}>roomie</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
            De forma segura y sin complicaciones.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 20,
        }}>
          {steps.map((step, i) => (
            <div
              key={i}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 18,
                padding: '28px 24px 32px',
                textAlign: 'center',
                position: 'relative',
                transition: 'box-shadow 0.2s, transform 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.4)'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
            >
              {/* Número */}
              <div style={{
                position: 'absolute', top: -14, left: '50%',
                transform: 'translateX(-50%)',
                width: 28, height: 28,
                background: step.iconBg,
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-head)', fontWeight: 700, fontSize: 13,
                color: '#fff',
                border: '2px solid var(--surface)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
              }}>
                {step.number}
              </div>

              {/* Ícono */}
              <div style={{
                width: 64, height: 64,
                background: step.cardAccent,
                borderRadius: 16,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28,
                margin: '12px auto 18px',
              }}>
                {step.icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-head)',
                fontSize: 17, fontWeight: 700,
                color: 'var(--text)', marginBottom: 8,
              }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}