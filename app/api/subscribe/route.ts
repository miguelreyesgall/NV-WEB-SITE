import { NextRequest, NextResponse } from 'next/server'
import { saveLead } from '@/lib/supabase'
import { sendWelcomeEmail, sendLeadNotification } from '@/lib/email'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, email, cargo, empresa, desafio } = body

    // Validation
    if (!nombre?.trim() || !email?.trim() || !cargo?.trim()) {
      return NextResponse.json(
        { success: false, message: 'Nombre, email y cargo son obligatorios.' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email.trim())) {
      return NextResponse.json(
        { success: false, message: 'Por favor ingresa un email válido.' },
        { status: 400 }
      )
    }

    const leadData = {
      nombre: nombre.trim(),
      email: email.trim().toLowerCase(),
      cargo: cargo.trim(),
      empresa: empresa?.trim() || '',
      desafio: desafio?.trim() || '',
    }

    // Save to Supabase
    try {
      await saveLead(leadData)
    } catch (dbError: unknown) {
      const error = dbError as { code?: string }
      // Duplicate email (unique constraint)
      if (error?.code === '23505') {
        return NextResponse.json(
          { success: false, message: 'Este email ya está registrado. ¡Pronto recibirás noticias!' },
          { status: 409 }
        )
      }
      // Log but don't block if DB fails — still send email
      console.error('Supabase error:', dbError)
    }

    // Send welcome email to lead
    try {
      await sendWelcomeEmail(leadData.nombre, leadData.email, leadData.cargo)
    } catch (emailError) {
      console.error('Error sending welcome email:', emailError)
      // Don't fail the request if email fails
    }

    // Send notification to Nizzhar
    try {
      await sendLeadNotification(
        leadData.nombre,
        leadData.email,
        leadData.cargo,
        leadData.empresa,
        leadData.desafio
      )
    } catch (notifError) {
      console.error('Error sending notification email:', notifError)
    }

    return NextResponse.json(
      { success: true, message: '¡Registro exitoso! Revisa tu bandeja de entrada.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscribe API error:', error)
    return NextResponse.json(
      { success: false, message: 'Error interno. Por favor intenta nuevamente.' },
      { status: 500 }
    )
  }
}
