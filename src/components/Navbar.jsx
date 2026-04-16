// Navbar.jsx — Dark Theme (Versión Limpia)
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
        // Estilo moderno: transparente al inicio, oscuro con blur al hacer scroll
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
          height: 56,
          padding: '0 20px' // Ajuste opcional para márgenes internos
        }}
      >
        {/* Logo con el icono "J!" */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36,
            background: '#3B82F6',
            borderRadius: 9,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(59,130,246,0.3)',
          }}>
            <span style={{
              fontFamily: 'var(--font-head)',
              fontWeight: 800, fontSize: 17,
              color: '#fff', lineHeight: 1,
            }}>J!</span>
          </div>
          <span style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 800, fontSize: 20,
            color: '#fff', // Cambiado a blanco para mejor contraste en dark mode
            letterSpacing: '-0.04em',
          }}>jaiko</span>
        </a>

        {/* CTA - Botón Naranja */}
        <a href="#waitlist">
          <button
            style={{
              background: '#F97316',
              color: '#fff',
              fontFamily: 'var(--font-head)',
              fontWeight: 700, fontSize: 14,
              padding: '10px 22px',
              borderRadius: 100, border: 'none', cursor: 'pointer',
              boxShadow: '0 2px 12px rgba(249,115,22,0.4)',
              transition: 'background 0.15s, transform 0.15s, box-shadow 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#EA6C0A'
              e.currentTarget.style.transform = 'translateY(-1px)'
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(249,115,22,0.5)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#F97316'
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
