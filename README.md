# Jaiko Landing Page

Landing page independiente del MVP para captura de leads y lista de espera.

## Stack
- React 18 + Vite 5
- Supabase (base de datos + API)
- CSS puro (sin librerías de UI)

---

## 1. Crear el proyecto desde cero

```bash
npm create vite@latest jaiko-landing -- --template react
cd jaiko-landing
npm install
npm install @supabase/supabase-js
```

Luego reemplazá los archivos con los de este proyecto.

---

## 2. Configurar Supabase

### Crear la tabla

1. Entrá a [https://app.supabase.com](https://app.supabase.com)
2. Creá un nuevo proyecto (o usá uno existente)
3. Ir a **SQL Editor → New query**
4. Pegá y ejecutá el contenido de `supabase_migration.sql`

### Obtener credenciales

En tu proyecto de Supabase:
- **Settings → API → Project URL** → `VITE_SUPABASE_URL`
- **Settings → API → anon public key** → `VITE_SUPABASE_ANON_KEY`

### Configurar variables de entorno

```bash
cp .env.example .env
```

Editá `.env` con tus credenciales:

```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

> ⚠️ Nunca subas el archivo `.env` al repositorio. El `.gitignore` ya lo excluye.
> La `anon key` es pública por diseño — Supabase la protege con RLS.

---

## 3. Correr en desarrollo

```bash
npm run dev
```

Abre `http://localhost:5173`

---

## 4. Estructura de carpetas

```
jaiko-landing/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Barra de navegación fija con scroll
│   │   ├── Hero.jsx            # Sección principal con headline y CTA
│   │   ├── Problem.jsx         # El problema que resuelve Jaiko
│   │   ├── HowItWorks.jsx      # Pasos del producto
│   │   ├── Benefits.jsx        # Grilla de beneficios
│   │   ├── WaitlistForm.jsx    # Formulario + integración Supabase
│   │   └── Footer.jsx          # Pie de página
│   ├── lib/
│   │   └── supabase.js         # Cliente de Supabase
│   ├── App.jsx                 # Componente raíz
│   ├── index.css               # Estilos globales y tokens de diseño
│   └── main.jsx                # Entry point
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── supabase_migration.sql      # SQL para crear la tabla en Supabase
└── vite.config.js
```

---

## 5. Flujo completo del usuario

```
1. Usuario llega a la landing
   └── Ve el hero con headline + CTA "Anotarme"

2. Scroll por las secciones
   └── Problema → Cómo funciona → Beneficios

3. Click en "Anotarme" (cualquier CTA)
   └── Scroll suave hasta #waitlist

4. Completa el formulario
   ├── Nombre (req)
   ├── Email (req, validado)
   ├── Tipo de usuario (req, radio visual)
   ├── Ciudad (req, select)
   ├── Presupuesto (opcional)
   └── Mensaje (opcional)

5. Submit
   ├── Validación frontend (campos req + regex email)
   ├── INSERT en tabla `waitlist` de Supabase
   ├── Si email duplicado → mensaje amigable
   └── Si OK → pantalla de éxito con instrucción de compartir
```

---

## 6. Ver los leads capturados

En Supabase:
- **Table Editor → waitlist** para ver todos los registros
- **SQL Editor** para consultas:

```sql
-- Total por tipo de usuario
SELECT tipo_usuario, COUNT(*) FROM waitlist GROUP BY tipo_usuario;

-- Total por ciudad
SELECT ciudad, COUNT(*) FROM waitlist GROUP BY ciudad ORDER BY count DESC;

-- Registros de hoy
SELECT * FROM waitlist WHERE created_at > NOW() - INTERVAL '24 hours';

-- Vista de stats diarias (creada en el migration)
SELECT * FROM waitlist_stats;
```

---

## 7. Deploy

### Vercel (recomendado — gratis)

```bash
npm install -g vercel
vercel
```

Configurá las variables de entorno en el dashboard de Vercel:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

### Netlify

```bash
npm run build
# Subí la carpeta /dist a netlify.com
```

O conectá el repo y configurá:
- Build command: `npm run build`
- Publish directory: `dist`
- Environment variables: las mismas que arriba

---

## 8. Mejores prácticas de conversión

### Lo que funciona
- **Urgencia real**: "Quedan X cupos" (actualizalo manualmente al principio)
- **Prueba social**: el contador de personas anotadas en el Hero
- **Propuesta clara**: el headline dice exactamente qué hace Jaiko
- **Fricción mínima**: el formulario pide solo lo necesario
- **Mensaje de éxito accionable**: pedirle que comparta multiplica el alcance

### Lo que evitar
- ❌ Pedir teléfono, dirección o datos innecesarios
- ❌ Formularios largos o con muchos pasos
- ❌ CTAs genéricos como "Enviar" → usá "Quiero acceso anticipado →"
- ❌ No dar feedback cuando el formulario se envía
- ❌ Textos en inglés en una landing para LatAm

### Ideas para iterar
- Agregar un contador en tiempo real desde Supabase
- A/B test del headline principal
- Agregar un campo "¿Cómo nos conociste?" para tracking de canales
- Email de confirmación automático (usar Supabase Edge Functions + Resend)
