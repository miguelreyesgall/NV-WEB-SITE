# Setup — Nizzhar Vargas Landing Page

## 1. Instalar dependencias

```bash
npm install
```

---

## 2. Configurar Resend (emails)

1. Ve a [resend.com](https://resend.com) y crea una cuenta gratuita
2. En el dashboard, ve a **API Keys** → crea una nueva clave
3. En **Domains**, agrega tu dominio (ej: `nizzharvargas.com`) y sigue las instrucciones DNS en Hostinger
   - Si aún no tienes dominio verificado, Resend te permite enviar desde `onboarding@resend.dev` para testing
4. Copia tu API key

---

## 3. Configurar Supabase (base de datos de leads)

1. Ve a [supabase.com](https://supabase.com) y crea una cuenta gratuita
2. Crea un **nuevo proyecto**
3. Una vez creado, ve a **SQL Editor** y pega el contenido de `supabase-setup.sql`
4. Ejecuta el SQL — esto crea la tabla `leads`
5. Ve a **Settings → API** y copia:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public key` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## 4. Variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=hola@nizzharvargas.com
NIZZHAR_EMAIL=tu-email@ejemplo.com

NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxxx...
```

---

## 5. Correr en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

---

## 6. Desplegar en Vercel

1. Crea cuenta en [vercel.com](https://vercel.com)
2. Instala Vercel CLI: `npm i -g vercel`
3. En la raíz del proyecto: `vercel`
4. En el dashboard de Vercel, ve a tu proyecto → **Settings → Environment Variables**
5. Agrega todas las variables del paso 4
6. Para conectar tu dominio de Hostinger:
   - En Vercel: **Settings → Domains** → agrega tu dominio
   - Vercel te dará registros DNS (A o CNAME)
   - En Hostinger: ve al panel DNS de tu dominio y agrega esos registros

---

## 7. Ver leads en Supabase

En el dashboard de Supabase → **Table Editor → leads**
Podrás ver todos los registros con nombre, email, cargo, empresa y desafío.

---

## Contenido a reemplazar

- [ ] Foto de Nizzhar en `components/About.tsx` (busca `[Foto de Nizzhar]`)
- [ ] LinkedIn URL en `lib/email.ts` (busca `linkedin.com/in/nizzharvargas`)
- [ ] Bio y texto a ajustar según Nizzhar quiera presentarse
- [ ] Estadísticas reales (+500 ejecutivos, +10 años, etc.) en `components/Hero.tsx`
