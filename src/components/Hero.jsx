const FEATURE_PILLS = [
  { icon: '🔍', label: 'Buscar roomies' },
  { icon: '🏠', label: 'Publicar habitación' },
  { icon: '👥', label: 'Grupos de búsqueda' },
  { icon: '💬', label: 'Chat directo' },
]

export default function Hero() {
  return (
    <section style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingTop: '100px', 
        paddingBottom: '60px',
        background: 'var(--bg)', 
        position: 'relative', 
        overflow: 'hidden' 
      }}>
      <div style={{ 
          position: 'relative', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center', 
          maxWidth: 720, 
          width: '100%',
          padding: '0 20px'
        }}>
        
        {/* Logo mucho más pequeño en móvil usando clamp */}
        <img 
          src="/logo.png" 
          alt="Jaiko Logo" 
          style={{ 
            height: 'clamp(60px, 15vw, 100px)', 
            width: 'auto', 
            marginBottom: 24, 
            filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.5))' 
          }} 
        />

        <div style={{ marginBottom: 16 }}>
          <span className="tag" style={{ fontSize: '10px' }}>Lista de espera abierta</span>
        </div>

        <h1 style={{ 
            fontSize: 'clamp(32px, 8vw, 72px)', // Texto más pequeño en móvil
            fontWeight: 800, 
            lineHeight: 1.1, 
            letterSpacing: '-0.04em', 
            color: 'var(--text)', 
            marginBottom: 20 
          }}>
          Encontrá tu <span style={{ color: 'var(--blue)' }}>roomie ideal</span><br />
          <span style={{ color: 'var(--orange)' }}>en Paraguay.</span>
        </h1>

        <p style={{ 
            fontSize: 'clamp(14px, 4vw, 18px)', 
            color: 'var(--text-muted)', 
            maxWidth: 440, 
            marginBottom: 32,
            lineHeight: 1.6
          }}>
          Conectamos personas que buscan compañero de vivienda con quienes tienen una habitación libre.
        </p>

        <a href="#waitlist" style={{ width: '100%', maxWidth: '300px' }}>
          <button className="btn-primary" style={{ width: '100%', fontSize: 16, padding: '16px 32px' }}>
            Quiero acceso anticipado →
          </button>
        </a>

        {/* Pills ocultos o más pequeños en móvil */}
        <div style={{ 
            display: 'flex', 
            gap: 8, 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            marginTop: 40 
          }}>
          {FEATURE_PILLS.map((pill) => (
            <div key={pill.label} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 6, 
                background: 'var(--surface)', 
                border: '1px solid var(--border)', 
                borderRadius: 100, 
                padding: '6px 12px', 
                fontSize: '11px', 
                color: 'var(--text-muted)' 
              }}>
              <span>{pill.icon}</span>{pill.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}