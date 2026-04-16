// Footer.jsx — Dark Theme

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
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
            width: 34, height: 34,
            background: '#3B82F6',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(59,130,246,0.3)',
          }}>
            <span style={{
              fontFamily: 'var(--font-head)',
              fontWeight: 800, fontSize: 16,
              color: '#fff',
            }}>J!</span>
          </div>
          <span style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 700, fontSize: 18,
            color: 'var(--text)',
          }}>jaiko</span>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: 13 }}>
          © {new Date().getFullYear()} Jaiko. Paraguay.
        </p>

        <a
          href="mailto:hola@jaiko.app"
          style={{ color: 'var(--text-muted)', fontSize: 13, transition: 'color 0.2s' }}
          onMouseEnter={e => e.target.style.color = 'var(--text)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
        >
          Contacto
        </a>
      </div>
    </footer>
  )
}