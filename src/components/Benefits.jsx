const benefits = [
  { icon: '🔒', bg: '#EFF6FF', title: 'Seguro', desc: 'Todos los perfiles son verificados para tu tranquilidad.' },
  { icon: '⚡', bg: '#FFF7ED', title: 'Rápido', desc: 'Encuentra tu roomie ideal en minutos con nuestro sistema inteligente.' },
  { icon: '🤝', bg: '#F0FDF4', title: 'Confiable', desc: 'Conexiones exitosas y perfiles verificados garantizan confianza.' },
  { icon: '😊', bg: '#FFF1F2', title: 'Fácil', desc: 'Interfaz intuitiva para crear perfil y buscar roommates sin complicaciones.' },
  { icon: '📍', bg: '#F5F3FF', title: 'Búsqueda por zona', desc: 'Encontrá opciones en el departamento de Central según tu zona preferida.' },
  { icon: '👥', bg: '#FFF8F0', title: 'Para los dos lados', desc: 'Buscás roomie o tenés una habitación libre. Jaiko sirve para ambos casos.' },
]

export default function Benefits() {
  return (
    <section style={{
      padding: '90px 0',
      background: '#fff',
      borderTop: '1px solid rgba(0,0,0,0.06)',
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ marginBottom: 14 }}>
            <span className="tag">¿Por qué elegir Jaiko?</span>
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            fontWeight: 800,
            color: '#111827',
            marginBottom: 12,
          }}>
            Diseñado para que encontrar roomie sea{' '}
            <span style={{ color: '#F97316' }}>seguro, rápido</span> y sin dramas
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 16,
        }}>
          {benefits.map((b, i) => (
            <div key={i} style={{
              background: '#FAFAFA',
              border: '1px solid rgba(0,0,0,0.07)',
              borderRadius: 16,
              padding: '28px 24px',
              display: 'flex',
              gap: 18,
              alignItems: 'flex-start',
              transition: 'box-shadow 0.2s, border-color 0.2s',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(37,99,235,0.2)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,99,235,0.08)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                width: 48,
                height: 48,
                background: b.bg,
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 22,
                flexShrink: 0,
              }}>
                {b.icon}
              </div>
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: 16,
                  fontWeight: 700,
                  color: '#111827',
                  marginBottom: 6,
                }}>
                  {b.title}
                </h3>
                <p style={{ color: '#6B7280', fontSize: 14, lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
