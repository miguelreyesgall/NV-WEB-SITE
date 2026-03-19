-- Ejecuta esto en el SQL Editor de tu proyecto Supabase
-- https://supabase.com/dashboard → SQL Editor

CREATE TABLE leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  nombre TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  cargo TEXT NOT NULL,
  empresa TEXT DEFAULT '',
  desafio TEXT DEFAULT '',
  source TEXT DEFAULT 'landing-page'
);

-- Índice para búsquedas por email
CREATE INDEX idx_leads_email ON leads(email);

-- Índice para ordenar por fecha
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);

-- Row Level Security (seguridad)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Solo permite inserciones desde el servidor (anon key)
CREATE POLICY "Permite insertar leads" ON leads
  FOR INSERT WITH CHECK (true);

-- Solo el service_role puede leer (para que solo Nizzhar vea los datos)
CREATE POLICY "Solo service role puede leer" ON leads
  FOR SELECT USING (false);
