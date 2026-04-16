import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(8, 13, 26, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        transition: 'background 0.3s ease, border-color 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          height: 64,
          padding: '0 20px'
        }}
      >
        {/* Logo con la imagen proporcionada */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img 
            src="/logo.png" 
            alt="Jaiko Logo" 
            style={{ height: 40, width: 'auto' }}
            referrerPolicy="no-referrer"
          />
          <span style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 800, fontSize: 22,
            color: '#fff',
            letterSpacing: '-0.04em',
          }}>jaiko</span>
        </a>

        {/* CTA - Botón Naranja */}
        <a href="#waitlist">
          <button
            style={{
              background: 'var(--orange)',
              color: '#fff',
              fontFamily: 'var(--font-head)',
              fontWeight: 700, fontSize: 14,
              padding: '10px 22px',
              borderRadius: 100, border: 'none', cursor: 'pointer',
              boxShadow: '0 2px 12px rgba(249,115,22,0.4)',
              transition: 'background 0.15s, transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--orange-dark)'
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(249,115,22,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'var(--orange)'
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(249,115,22,0.4)'
            }}
          >
            Quiero acceso anticipado →
          </button>
        </a>
      </div>
    </nav>
  )
}
