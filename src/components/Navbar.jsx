import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: '#2563EB',
      boxShadow: scrolled ? '0 2px 16px rgba(37,99,235,0.25)' : 'none',
      transition: 'box-shadow 0.3s ease',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 56,
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 38,
            height: 38,
            background: '#fff',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: 'var(--font-head)',
              fontWeight: 800,
              fontSize: 18,
              color: '#2563EB',
              lineHeight: 1,
            }}>J!</span>
          </div>
          <span style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 700,
            fontSize: 20,
            color: '#fff',
            letterSpacing: '-0.03em',
          }}>jaiko</span>
        </a>

        <a href="#waitlist">
          <button style={{
            background: '#F97316',
            color: '#fff',
            fontFamily: 'var(--font-head)',
            fontWeight: 700,
            fontSize: 14,
            padding: '10px 22px',
            borderRadius: 100,
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(249,115,22,0.35)',
            transition: 'background 0.15s, transform 0.15s',
          }}>
            Quiero acceso anticipado →
          </button>
        </a>
      </div>
    </nav>
  )
}
