-- ============================================================
-- JAIKO Landing — Tabla waitlist para Supabase
-- Ejecutá este SQL en: Supabase → SQL Editor → New query
-- ============================================================

CREATE TABLE waitlist (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre        TEXT NOT NULL,
  email         TEXT NOT NULL UNIQUE,              -- UNIQUE previene duplicados
  tipo_usuario  TEXT NOT NULL CHECK (
                  tipo_usuario IN ('busco_roomie', 'ofrezco_habitacion')
                ),
  ciudad        TEXT NOT NULL,
  presupuesto   TEXT,                              -- Opcional
  mensaje       TEXT,                              -- Opcional
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Índice para consultar por fecha (análisis de registros por día)
CREATE INDEX idx_waitlist_created_at ON waitlist (created_at DESC);

-- Índice para buscar por ciudad (segmentación)
CREATE INDEX idx_waitlist_ciudad ON waitlist (ciudad);

-- ── Row Level Security (RLS) ───────────────────────────────
-- Importante: habilitar RLS para que solo tu backend/dashboard vea los datos

ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Política: cualquiera puede INSERT (el formulario público necesita esto)
CREATE POLICY "Permitir inserts públicos"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Política: solo service_role puede SELECT (tus admins / dashboards)
-- Si querés leer desde tu propio dashboard de Supabase, ya podés verlo con el rol service_role.
-- Descomentar la siguiente línea si querés habilitar lectura autenticada:
-- CREATE POLICY "Solo admins pueden leer" ON waitlist FOR SELECT TO authenticated USING (true);

-- ── Vista útil para analizar los registros ────────────────
CREATE VIEW waitlist_stats AS
SELECT
  ciudad,
  tipo_usuario,
  COUNT(*)                  AS total,
  DATE(created_at)          AS fecha
FROM waitlist
GROUP BY ciudad, tipo_usuario, DATE(created_at)
ORDER BY fecha DESC, total DESC;
