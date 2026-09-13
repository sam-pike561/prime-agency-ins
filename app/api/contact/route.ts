import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { checkDuplicateSubmission, parseContactFormData, parseRecipients } from './contact-utils'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const recentSubmissions = new Map<string, number>()

async function buildAttachments(files: { resume?: File; coverLetter?: File }) {
  const attachmentEntries = Object.entries(files).filter(([, file]) => file instanceof File)

  return Promise.all(
    attachmentEntries.map(async ([fieldName, file]) => ({
      filename: file.name || `${fieldName}.pdf`,
      content: Buffer.from(await file.arrayBuffer()),
    }))
  )
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type') || ''
    const isMultipart = contentType.includes('multipart/form-data')

    const formData = isMultipart ? await request.formData() : null

    const payload = isMultipart ? parseContactFormData(formData as FormData) : parseContactFormData((await request.json().catch(() => ({}))) as Record<string, unknown>)
    const name = payload.name
    const email = payload.email
    const phone = payload.phone
    const message = payload.message
    const role = payload.role
    const files = payload.files

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Please complete all required fields before submitting.' },
        { status: 400 }
      )
    }

    if (!resend) {
      return NextResponse.json(
        { error: 'Email delivery is not configured for this environment.' },
        { status: 500 }
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

    const toRecipients = parseRecipients(process.env.CONTACT_TO_EMAIL || 'support@primeagencyins.com')
    const configuredFrom = (process.env.CONTACT_FROM_EMAIL || '').trim()
    const from = configuredFrom && configuredFrom !== 'onboarding@resend.dev'
      ? configuredFrom
      : 'support@primeagencyins.com'

    if (!toRecipients.length) {
      return NextResponse.json(
        { error: 'No valid recipient email is configured for this form.' },
        { status: 500 }
      )
    }

    const attachments = await buildAttachments(files)

    const adminResult = await resend.emails.send({
      from,
      to: toRecipients,
      replyTo: email,
      subject: role ? `Career application from ${name} (${role})` : `New contact request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        role ? `Role: ${role}` : '',
        '',
        'Message:',
        message,
        files.resume ? `Resume: ${files.resume.name}` : '',
        files.coverLetter ? `Cover letter: ${files.coverLetter.name}` : '',
      ].filter(Boolean).join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
          <h2 style="margin: 0 0 16px;">${role ? 'Career Application' : 'New Contact Request'}</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${role ? `<p><strong>Role:</strong> ${role}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br />')}</p>
          ${files.resume ? `<p><strong>Resume:</strong> ${files.resume.name}</p>` : ''}
          ${files.coverLetter ? `<p><strong>Cover Letter:</strong> ${files.coverLetter.name}</p>` : ''}
        </div>
      `,
      attachments: attachments.length ? attachments : undefined,
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
      subject: role ? 'Thank you for applying to Prime Agency' : 'Thank you for reaching out to Prime Agency',
      text: [
        `Hi ${name},`,
        '',
        role
          ? 'Thank you for applying to Prime Agency. We have received your application and will review it soon.'
          : 'Thank you for reaching out to Prime Agency. We have received your message and one of our agents will follow up with you soon.',
        '',
        role ? 'We appreciate your interest in joining our team.' : 'We appreciate the opportunity to help with your Medicare needs.',
        '',
        'Best,',
        'Prime Agency',
      ].join('\n'),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #111827; line-height: 1.6;">
          <h2 style="margin: 0 0 16px; color: #0f172a;">${role ? 'Thank you for applying' : 'Thank you for reaching out'}</h2>
          <p>Hi ${name},</p>
          <p>${role ? 'Thank you for applying to Prime Agency. We have received your application and will review it soon.' : 'Thank you for contacting Prime Agency. We have received your message and one of our agents will reach out to you soon.'}</p>
          <p>${role ? 'We appreciate your interest in joining our team.' : 'We appreciate the opportunity to help with your Medicare needs.'}</p>
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
