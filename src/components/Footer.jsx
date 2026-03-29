export default function Footer() {
  return (
    <footer style={{
      background: '#2563EB',
      padding: '32px 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: 16,
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 34,
            height: 34,
            background: '#fff',
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: 'var(--font-head)',
              fontWeight: 800,
              fontSize: 16,
              color: '#2563EB',
            }}>J!</span>
          </div>
          <span style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 700,
            fontSize: 18,
            color: '#fff',
          }}>jaiko</span>
        </div>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>
          © {new Date().getFullYear()} Jaiko. Paraguay.
        </p>

        <a
          href="mailto:hola@jaiko.app"
          style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: 13,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = '#fff'}
          onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
        >
          Contacto
        </a>
      </div>
    </footer>
  )
}
