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
      paddingTop: 96,
      paddingBottom: 80,
      paddingLeft: 24,
      paddingRight: 24,
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg)',
    }}>
      {/* Blobs decorativos */}
      <div style={{
        position: 'absolute', top: '5%', right: '-8%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '8%', left: '-8%',
        width: 450, height: 450,
        background: 'radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: 720,
        width: '100%',
      }}>

        {/* LOGO GRANDE EN HERO */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 12,
          marginBottom: 32,
          animation: 'fadeUp 0.5s ease both',
        }}>
          <img 
            src="/logo.png" 
            alt="Jaiko Logo" 
            style={{ height: 80, width: 'auto' }}
            referrerPolicy="no-referrer"
          />
          <span style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 800, fontSize: 48,
            color: 'var(--text)',
            letterSpacing: '-0.04em',
          }}>jaiko</span>
        </div>

        {/* BADGE */}
        <div style={{ marginBottom: 28, animation: 'fadeUp 0.5s ease 0.08s both' }}>
          <span className="tag">
            <span style={{
              width: 7, height: 7,
              background: 'var(--orange)',
              borderRadius: '50%',
              display: 'inline-block',
            }} />
            Lista de espera abierta
          </span>
        </div>

        {/* TÍTULO */}
        <h1 style={{
          fontSize: 'clamp(42px, 7vw, 80px)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.04em',
          color: 'var(--text)',
          marginBottom: 24,
          animation: 'fadeUp 0.5s ease 0.15s both',
        }}>
          Encontrá tu{' '}
          <span style={{ color: 'var(--blue)' }}>roomie ideal</span>
          <br />
          <span style={{ color: 'var(--orange)' }}>en Paraguay.</span>
        </h1>

        {/* PÁRRAFO */}
        <p style={{
          fontSize: 'clamp(16px, 2vw, 19px)',
          color: 'var(--text-muted)',
          maxWidth: 480,
          lineHeight: 1.7,
          marginBottom: 44,
          fontWeight: 300,
          animation: 'fadeUp 0.5s ease 0.22s both',
        }}>
          Conectamos personas que buscan compañero de vivienda con quienes
          tienen una habitación libre. Seguro, rápido y según tus preferencias.
        </p>

        {/* BOTÓN */}
        <div style={{ animation: 'fadeUp 0.5s ease 0.3s both' }}>
          <a href="#waitlist">
            <button
              className="btn-primary"
              style={{ fontSize: 17, padding: '18px 44px' }}
            >
              Quiero acceso anticipado →
            </button>
          </a>
        </div>

        {/* FEATURE PILLS */}
        <div style={{
          display: 'flex',
          gap: 10,
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 52,
          animation: 'fadeUp 0.5s ease 0.38s both',
        }}>
          {FEATURE_PILLS.map((pill) => (
            <div key={pill.label} style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 100,
              padding: '8px 16px',
              fontSize: 13,
              color: 'var(--text-muted)',
              boxShadow: '0 1px 6px rgba(0,0,0,0.3)',
            }}>
              <span style={{ fontSize: 14 }}>{pill.icon}</span>
              {pill.label}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
