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
          <img src="/logo.png" alt="Jaiko" style={{ height: 55, width: 'auto' }} />
        </div>

        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>
          © {new Date().getFullYear()} Jaiko. Paraguay.
        </p>

        
        <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 13 }}>
  Contacto: <span style={{ color: '#fff' }}>hola@jaiko.app</span>
</span>
      </div>
    </footer>
  )
}
