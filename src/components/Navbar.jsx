import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(8, 13, 26, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
      <div className="container" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          height: scrolled ? 60 : 72, // Se hace más pequeña al hacer scroll
          transition: 'height 0.3s'
        }}>
        {/* Logo responsivo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <img src="/logo.png" alt="Jaiko" style={{ height: 'clamp(30px, 5vw, 38px)', width: 'auto' }} />
          <span style={{ 
            fontFamily: 'var(--font-head)', 
            fontWeight: 800, 
            fontSize: 'clamp(18px, 4vw, 22px)', 
            color: '#fff', 
            letterSpacing: '-0.04em' 
          }}>jaiko</span>
        </a>

        {/* Botón responsivo */}
        <a href="#waitlist">
          <button style={{
              background: 'var(--orange)', 
              color: '#fff', 
              fontFamily: 'var(--font-head)',
              fontWeight: 700, 
              fontSize: 'clamp(12px, 3vw, 14px)', // Letra pequeña en móvil
              padding: 'clamp(8px, 2vw, 10px) clamp(16px, 4vw, 22px)', 
              borderRadius: 100, 
              border: 'none', 
              cursor: 'pointer',
              boxShadow: '0 2px 12px rgba(249,115,22,0.4)',
              whiteSpace: 'nowrap' // Evita que el texto se rompa en dos líneas
            }}
          >
            Anticipado →
          </button>
        </a>
      </div>
    </nav>
  )
}