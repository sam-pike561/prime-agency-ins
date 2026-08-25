import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

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

    const to = process.env.CONTACT_TO_EMAIL || 'support@primeagencyins.com'
    const from = process.env.CONTACT_FROM_EMAIL || 'Prime Agency <noreply@primeagencyins.com>'

    const result = await resend.emails.send({
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

    if (result.error) {
      console.error('Resend delivery error:', result.error)
      return NextResponse.json(
        { error: 'We could not send your message right now. Please try again later.' },
        { status: 500 }
      )
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
