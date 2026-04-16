export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      padding: '48px 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 24,
      }}>
        
        {/* Logo Unificado */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img 
            src="/logo.png" 
            alt="Jaiko Logo" 
            style={{ height: 32, width: 'auto' }}
            referrerPolicy="no-referrer"
          />
          <span style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 700, fontSize: 20,
            color: 'var(--text)',
          }}>jaiko</span>
        </div>

        {/* Copyright */}
        <p style={{ color: 'var(--text-muted)', fontSize: 14, margin: 0 }}>
          © {new Date().getFullYear()} Jaiko. Paraguay.
        </p>

        {/* Enlace de Contacto */}
        <a
          href="mailto:hola@jaiko.app"
          style={{ 
            color: 'var(--text-muted)', 
            fontSize: 14, 
            textDecoration: 'none',
            transition: 'color 0.2s' 
          }}
          onMouseEnter={e => e.target.style.color = 'var(--text)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
        >
          hola@jaiko.app
        </a>
        
      </div>
    </footer>
  )
}
