import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const recentSubmissions = new Map<string, number>()
export const DUPLICATE_SUBMISSION_WINDOW_MS = 60_000

export function checkDuplicateSubmission({
  ip,
  email,
  now = Date.now(),
  recentSubmissions,
  thresholdMs = DUPLICATE_SUBMISSION_WINDOW_MS,
}: {
  ip: string
  email: string
  now?: number
  recentSubmissions: Map<string, number>
  thresholdMs?: number
}) {
  const normalizedEmail = email.trim().toLowerCase()
  const normalizedIp = (ip || 'unknown').trim() || 'unknown'
  const key = `${normalizedIp}:${normalizedEmail || 'unknown'}`
  const previousSend = recentSubmissions.get(key) ?? 0

  if (previousSend && now - previousSend < thresholdMs) {
    return true
  }

  recentSubmissions.set(key, now)
  return false
}

export async function POST(request: Request) {
  try {
    if (!resend) {
      return NextResponse.json(
        { error: 'Email delivery is not configured for this environment.' },
        { status: 500 }
      )
    }

    const body = await request.json()
    const name = String(body?.name || '').trim()
    const email = String(body?.email || '').trim()
    const phone = String(body?.phone || '').trim()
    const message = String(body?.message || '').trim()

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Please complete all required fields before submitting.' },
        { status: 400 }
      )
    }

    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
      ?? request.headers.get('x-real-ip')
      ?? 'unknown'

    if (checkDuplicateSubmission({ ip, email, recentSubmissions })) {
      return NextResponse.json(
        { error: 'Please wait a moment before sending another message.' },
        { status: 429 }
      )
    }

    const to = (process.env.CONTACT_TO_EMAIL || 'support@primeagencyins.com').trim()
    const configuredFrom = (process.env.CONTACT_FROM_EMAIL || '').trim()
    const from = configuredFrom && configuredFrom !== 'onboarding@resend.dev'
      ? configuredFrom
      : 'support@primeagencyins.com'

    const adminResult = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New contact request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        '',
        'Message:',
        message,
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin: 0 0 16px;">New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br />')}</p>
        </div>
      `,
    })

    if (adminResult.error) {
      console.error('Resend delivery error:', adminResult.error)

      const resendError = adminResult.error as { statusCode?: number; name?: string; message?: string }
      const isQuotaExceeded = resendError.statusCode === 429 || resendError.name === 'daily_quota_exceeded'

      return NextResponse.json(
        {
          error: isQuotaExceeded
            ? 'Our email provider has reached its daily sending limit. Please try again tomorrow or email support@primeagencyins.com directly.'
            : 'We could not send your message right now. Please try again later.',
        },
        { status: isQuotaExceeded ? 429 : 500 }
      )
    }

    const autoReplyResult = await resend.emails.send({
      from,
      to: [email],
      subject: 'Thank you for reaching out to Prime Agency',
      text: [
        `Hi ${name},`,
        '',
        'Thank you for reaching out to Prime Agency. We have received your message and one of our agents will follow up with you soon.',
        '',
        'We appreciate the opportunity to help with your Medicare needs.',
        '',
        'Best,',
        'Prime Agency',
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111827; line-height: 1.6;">
          <h2 style="margin: 0 0 16px; color: #0f172a;">Thank you for reaching out</h2>
          <p>Hi ${name},</p>
          <p>Thank you for contacting Prime Agency. We have received your message and one of our agents will reach out to you soon.</p>
          <p>We appreciate the opportunity to help with your Medicare needs.</p>
          <p style="margin-top: 24px;">Best,<br />Prime Agency</p>
        </div>
      `,
    })

    if (autoReplyResult.error) {
      console.error('Auto-reply delivery error:', autoReplyResult.error)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact route error:', error)
    return NextResponse.json(
      { error: 'Something went wrong while sending your message.' },
      { status: 500 }
    )
  }
}
