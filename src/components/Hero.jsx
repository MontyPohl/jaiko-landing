export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 80,
      paddingBottom: 80,
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(160deg, #EFF6FF 0%, #FFF8F0 50%, #FFF7ED 100%)',
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '10%', right: '-5%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-5%',
        width: 350, height: 350,
        background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* Badge */}
        <div style={{ marginBottom: 28, animation: 'fadeUp 0.5s ease forwards' }}>
          <span className="tag">
            <span style={{ width: 6, height: 6, background: '#F97316', borderRadius: '50%', display: 'inline-block' }} />
            Lista de espera abierta
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontSize: 'clamp(48px, 7.5vw, 88px)',
          fontWeight: 800,
          lineHeight: 1.0,
          letterSpacing: '-0.04em',
          color: '#111827',
          marginBottom: 24,
          animation: 'fadeUp 0.5s ease 0.1s both forwards',
        }}>
          Encontrá tu<br />
          <span style={{ color: '#2563EB' }}>roommie ideal</span><br />
          <span style={{ color: '#F97316' }}>que esperas?.</span>
        </h1>

        {/* Subheadline */}
        <p style={{
          fontSize: 'clamp(16px, 2vw, 20px)',
          color: '#6B7280',
          maxWidth: 520,
          lineHeight: 1.65,
          marginBottom: 40,
          fontWeight: 300,
          animation: 'fadeUp 0.5s ease 0.2s both forwards',
        }}>
          Jaiko conecta personas que buscan compañero de vivienda con quienes tienen una habitación libre. Según tus preferencias, de forma segura.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          gap: 14,
          flexWrap: 'wrap',
          animation: 'fadeUp 0.5s ease 0.3s both forwards',
        }}>
          <a href="#waitlist">
            <button className="btn-primary" style={{ fontSize: 16, padding: '16px 34px' }}>
              Anotarme en la lista →
            </button>
          </a>
          <a href="#como-funciona">
            <button className="btn-ghost" style={{ fontSize: 15, padding: '16px 26px' }}>
              ¿Cómo funciona?
            </button>
          </a>
        </div>

        {/* Social proof */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          marginTop: 44,
          animation: 'fadeUp 0.5s ease 0.4s both forwards',
        }}>
          <div style={{ display: 'flex' }}>
            {['#818CF8', '#34D399', '#FBBF24', '#F87171', '#60A5FA'].map((color, i) => (
              <div key={i} style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: color,
                border: '2px solid #fff',
                marginLeft: i > 0 ? -9 : 0,
                boxShadow: '0 1px 4px rgba(0,0,0,0.12)',
              }} />
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#6B7280' }}>
            <strong style={{ color: '#111827' }}></strong> asegurate de ser parte de esta revolucionaria forma de encontrar roomies.
          </p>
        </div>

        {/* Feature pills */}
        <div style={{
          display: 'flex',
          gap: 10,
          flexWrap: 'wrap',
          marginTop: 48,
          animation: 'fadeUp 0.5s ease 0.5s both forwards',
        }}>
          {[
            { icon: '🔍', label: 'Buscar roomies' },
            { icon: '🏠', label: 'Publicar habitación' },
            { icon: '👥', label: 'Grupos de búsqueda' },
            { icon: '💬', label: 'Chat directo' },
          ].map((pill, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: '#fff',
              border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 100,
              padding: '8px 16px',
              fontSize: 13,
              color: '#374151',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
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
