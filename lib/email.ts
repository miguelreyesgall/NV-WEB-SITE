import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const FROM = process.env.RESEND_FROM_EMAIL || 'Nizzhar Vargas <hola@nizzharvargas.com>'
const NIZZHAR_EMAIL = process.env.NIZZHAR_EMAIL || 'nizzhar@nizzharvargas.com'

export async function sendWelcomeEmail(nombre: string, email: string, cargo: string) {
  const firstName = nombre.split(' ')[0]

  const htmlContent = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bienvenido — Nizzhar Vargas</title>
</head>
<body style="margin:0;padding:0;background-color:#0A0A0A;font-family:'Helvetica Neue',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0A0A0A;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#111111;border:1px solid #222222;border-radius:16px 16px 0 0;padding:40px;text-align:center;">
              <div style="display:inline-block;background-color:#C9A84C;border-radius:10px;padding:10px 18px;margin-bottom:20px;">
                <span style="font-family:Georgia,serif;font-weight:bold;font-size:22px;color:#0A0A0A;letter-spacing:1px;">NV</span>
              </div>
              <p style="color:#C9A84C;font-size:11px;letter-spacing:4px;text-transform:uppercase;margin:0 0 20px;">Nizzhar Vargas · Marca Personal</p>
              <h1 style="font-family:Georgia,serif;color:#FAFAF8;font-size:32px;font-weight:700;margin:0;line-height:1.2;">
                Bienvenido, ${firstName}.
              </h1>
              <p style="color:#9CA3AF;font-size:15px;margin:16px 0 0;line-height:1.6;">
                Tu lugar en la comunidad está reservado.
              </p>
            </td>
          </tr>

          <!-- Gold line -->
          <tr>
            <td style="height:2px;background:linear-gradient(90deg,transparent,#C9A84C,transparent);"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background-color:#111111;border:1px solid #222222;border-top:none;padding:40px;">

              <p style="color:#D1D5DB;font-size:15px;line-height:1.8;margin:0 0 24px;">
                Me alegra tenerte aquí. Como ${cargo}, ya tienes la trayectoria y los resultados.
                Lo que vamos a construir juntos es la <strong style="color:#FAFAF8;">presencia en LinkedIn</strong>
                que hace que ese trabajo hable por ti — incluso cuando no estás en la sala.
                Y lo haremos con las estrategias que aprendí trabajando directamente en LinkedIn Colombia & México.
              </p>

              <!-- Section title -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td>
                    <p style="color:#C9A84C;font-size:11px;letter-spacing:4px;text-transform:uppercase;margin:0 0 14px;">
                      3 claves que los ejecutivos referentes aplican hoy
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Tip 1 -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;background-color:#161616;border:1px solid #2A2A2A;border-radius:12px;padding:24px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="color:#C9A84C;font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin:0 0 8px;">01</p>
                    <p style="color:#FAFAF8;font-family:Georgia,serif;font-size:17px;font-weight:600;margin:0 0 10px;">Define tu Zona de Genialidad</p>
                    <p style="color:#9CA3AF;font-size:14px;line-height:1.7;margin:0;">
                      No es lo que sabes hacer. Es la intersección entre lo que sabes hacer excepcionalmente bien,
                      lo que te apasiona y lo que el mercado necesita urgentemente. Esa intersección es tu marca.
                      Pasa 30 minutos esta semana escribiéndola.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Tip 2 -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;background-color:#161616;border:1px solid #2A2A2A;border-radius:12px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="color:#C9A84C;font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin:0 0 8px;">02</p>
                    <p style="color:#FAFAF8;font-family:Georgia,serif;font-size:17px;font-weight:600;margin:0 0 10px;">Documenta, No Solo Haz</p>
                    <p style="color:#9CA3AF;font-size:14px;line-height:1.7;margin:0;">
                      Cada decisión difícil que tomas, cada problema que resuelves, cada aprendizaje clave —
                      es contenido de alto valor esperando ser compartido. Los ejecutivos referentes no crean
                      contenido extra; documentan lo que ya hacen y lo comparten estratégicamente.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Tip 3 -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;background-color:#161616;border:1px solid #2A2A2A;border-radius:12px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="color:#C9A84C;font-size:12px;font-weight:bold;letter-spacing:2px;text-transform:uppercase;margin:0 0 8px;">03</p>
                    <p style="color:#FAFAF8;font-family:Georgia,serif;font-size:17px;font-weight:600;margin:0 0 10px;">Tu Red es Tu Activo Más Subestimado</p>
                    <p style="color:#9CA3AF;font-size:14px;line-height:1.7;margin:0;">
                      Hoy mismo, contacta a 3 personas de tu red que admiras y no has escrito en más de 3 meses.
                      Sin agenda. Solo para reconectar. La marca personal se construye en las conversaciones,
                      no solo en el contenido público.
                    </p>
                  </td>
                </tr>
              </table>

              <!-- What's coming -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;background-color:#0D1B2A;border:1px solid #1E3A5F;border-radius:12px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="color:#C9A84C;font-size:11px;letter-spacing:3px;text-transform:uppercase;margin:0 0 14px;">Lo que viene para ti</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      ${[
                        'Guía: "Las 5 señales de que tu perfil de LinkedIn no está trabajando para ti"',
                        'Framework: Cómo los ejecutivos usan LinkedIn para atraer oportunidades en 90 días',
                        'Acceso prioritario a la comunidad de ejecutivos Colombia & México',
                        'Invitación a la primera sesión grupal en vivo con Nizzhar',
                      ]
                        .map(
                          (item) => `
                      <tr>
                        <td style="padding:6px 0;">
                          <table cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="padding-right:10px;color:#C9A84C;font-size:12px;vertical-align:top;">✦</td>
                              <td style="color:#D1D5DB;font-size:14px;line-height:1.6;">${item}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>`
                        )
                        .join('')}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td align="center">
                    <a href="https://www.linkedin.com/in/nizzharvargas-partnerlead/"
                       style="display:inline-block;background-color:#C9A84C;color:#0A0A0A;font-size:14px;font-weight:700;padding:14px 32px;border-radius:8px;text-decoration:none;letter-spacing:0.5px;">
                      Sígueme en LinkedIn →
                    </a>
                  </td>
                </tr>
              </table>

              <p style="color:#6B7280;font-size:13px;line-height:1.7;margin:0;text-align:center;">
                Si tienes alguna pregunta, responde directamente a este correo.<br/>
                Estaré encantado de leerte.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0A0A0A;border:1px solid #1A1A1A;border-top:none;border-radius:0 0 16px 16px;padding:24px 40px;text-align:center;">
              <p style="color:#374151;font-size:12px;margin:0 0 8px;">
                Nizzhar Vargas · Partner Lead LinkedIn Colombia & México
              </p>
              <p style="color:#374151;font-size:11px;margin:0;">
                Recibiste este correo porque te suscribiste en nizzharvargas.com<br/>
                <a href="#" style="color:#C9A84C;text-decoration:none;">Cancelar suscripción</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()

  await resend.emails.send({
    from: FROM,
    to: email,
    subject: `${firstName}, tu lugar está reservado — empieza aquí`,
    html: htmlContent,
  })
}

export async function sendLeadNotification(
  nombre: string,
  email: string,
  cargo: string,
  empresa: string,
  desafio: string
) {
  await resend.emails.send({
    from: FROM,
    to: NIZZHAR_EMAIL,
    subject: `🔔 Nuevo lead: ${nombre} — ${cargo}`,
    html: `
      <div style="font-family:sans-serif;max-width:500px;padding:24px;background:#111;color:#eee;border-radius:12px;">
        <h2 style="color:#C9A84C;margin-top:0;">Nuevo lead registrado</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#9CA3AF;width:120px;">Nombre</td><td style="padding:8px 0;color:#FAFAF8;font-weight:600;">${nombre}</td></tr>
          <tr><td style="padding:8px 0;color:#9CA3AF;">Email</td><td style="padding:8px 0;color:#FAFAF8;">${email}</td></tr>
          <tr><td style="padding:8px 0;color:#9CA3AF;">Cargo</td><td style="padding:8px 0;color:#FAFAF8;">${cargo}</td></tr>
          <tr><td style="padding:8px 0;color:#9CA3AF;">Empresa</td><td style="padding:8px 0;color:#FAFAF8;">${empresa || '—'}</td></tr>
        </table>
        <div style="margin-top:16px;padding:16px;background:#0D1B2A;border-radius:8px;border-left:3px solid #C9A84C;">
          <p style="color:#9CA3AF;font-size:12px;margin:0 0 6px;text-transform:uppercase;letter-spacing:2px;">Desafío</p>
          <p style="color:#D1D5DB;margin:0;font-size:14px;line-height:1.6;">${desafio || 'No indicó'}</p>
        </div>
      </div>
    `,
  })
}
