const problems = [
  {
    icon: '💸',
    title: 'Vivir solo es caro',
    desc: 'El alquiler en Asunción y el área metropolitana se lleva una parte enorme del sueldo. Compartir lo reduce a la mitad.',
  },
  {
    icon: '😰',
    title: 'Encontrar roomie es un caos',
    desc: 'Grupos de WhatsApp, publicaciones en Facebook, conocidos de conocidos... sin ningún filtro serio ni garantías.',
  },
  {
    icon: '🎲',
    title: 'No sabés con quién vas a convivir',
    desc: 'Llevar a alguien sin información real es una lotería. Malos hábitos, desorden, impuntualidad con las expensas.',
  },
]

export default function Problem() {
  return (
    <section style={{
      padding: '90px 0',
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ marginBottom: 14 }}>
            <span className="tag">El problema</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(30px, 4.5vw, 52px)',
            fontWeight: 800,
            color: 'var(--text)',
            maxWidth: 620,
            margin: '0 auto',
          }}>
            Conseguir vivienda compartida en Paraguay está{' '}
            <span style={{ color: '#EF4444' }}>difícil.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 18,
        }}>
          {problems.map((p, i) => (
            <div
              key={i}
              style={{
                background: 'var(--surface)',
                border: '1px solid rgba(249,115,22,0.15)',
                borderRadius: 16,
                padding: '28px 28px 32px',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(249,115,22,0.4)'
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(249,115,22,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(249,115,22,0.15)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <span style={{ fontSize: 34, display: 'block', marginBottom: 14 }}>{p.icon}</span>
              <h3 style={{
                fontFamily: 'var(--font-head)',
                fontSize: 19, fontWeight: 700,
                marginBottom: 10,
                color: 'var(--text)',
              }}>
                {p.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: 15, lineHeight: 1.6 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
