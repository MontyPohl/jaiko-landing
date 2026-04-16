const benefits = [
  { icon: '🔒', title: 'Seguro',            desc: 'Todos los perfiles son verificados para tu tranquilidad.' },
  { icon: '⚡', title: 'Rápido',            desc: 'Encuentra tu roomie ideal en minutos con nuestro sistema inteligente.' },
  { icon: '🤝', title: 'Confiable',         desc: 'Conexiones exitosas y perfiles verificados garantizan confianza.' },
  { icon: '😊', title: 'Fácil',             desc: 'Interfaz intuitiva para crear perfil y buscar roommates sin complicaciones.' },
  { icon: '📍', title: 'Búsqueda por zona', desc: 'Encontrá opciones en el departamento de Central según tu zona preferida.' },
  { icon: '👥', title: 'Para los dos lados',desc: 'Buscás roomie o tenés una habitación libre. Jaiko sirve para ambos casos.' },
]

export default function Benefits() {
  return (
    <section style={{
      padding: '90px 0',
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ marginBottom: 14 }}>
            <span className="tag">¿Por qué elegir Jaiko?</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            fontWeight: 800,
            color: 'var(--text)',
            marginBottom: 12,
            maxWidth: 680,
            margin: '0 auto',
          }}>
            Diseñado para que encontrar roomie sea{' '}
            <span style={{ color: 'var(--orange)' }}>seguro, rápido</span> y sin dramas
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 16,
        }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 16,
                padding: '28px 24px',
                display: 'flex', gap: 18, alignItems: 'flex-start',
                transition: 'box-shadow 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--blue-mid)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                width: 48, height: 48,
                background: 'var(--bg3)',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22, flexShrink: 0,
              }}>
                {b.icon}
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: 16, fontWeight: 700,
                  color: 'var(--text)', marginBottom: 6,
                }}>
                  {b.title}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, lineHeight: 1.6 }}>
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
