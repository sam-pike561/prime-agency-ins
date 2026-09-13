import assert from 'node:assert/strict'
import test from 'node:test'

const setup = async () => {
  const routeModule = await import('./contact-utils.ts')
  return routeModule
}

test('rejects rapid duplicate submissions for the same email and IP', async () => {
  const { checkDuplicateSubmission } = await setup()
  const recentSubmissions = new Map<string, number>()

  const first = checkDuplicateSubmission({
    ip: '203.0.113.10',
    email: 'dup@example.com',
    now: 1_000,
    recentSubmissions,
  })

  const second = checkDuplicateSubmission({
    ip: '203.0.113.10',
    email: 'dup@example.com',
    now: 30_000,
    recentSubmissions,
  })

  assert.equal(first, false)
  assert.equal(second, true)
})

test('parses multipart job application submissions with resume and cover-letter attachments', async () => {
  const { parseContactFormData } = await setup()
  const formData = new FormData()

  formData.append('name', 'Alex Applicant')
  formData.append('email', 'alex@example.com')
  formData.append('phone', '(555) 123-4567')
  formData.append('message', 'I would love to join the team.')

  const resume = new File(['resume content'], 'resume.pdf', { type: 'application/pdf' })
  const coverLetter = new File(['cover letter content'], 'cover-letter.docx', { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' })

  formData.append('resume', resume)
  formData.append('coverLetter', coverLetter)

  const parsed = parseContactFormData(formData)

  assert.equal(parsed.name, 'Alex Applicant')
  assert.equal(parsed.email, 'alex@example.com')
  assert.equal(parsed.phone, '(555) 123-4567')
  assert.equal(parsed.message, 'I would love to join the team.')
  assert.equal(parsed.files.resume?.name, 'resume.pdf')
  assert.equal(parsed.files.coverLetter?.name, 'cover-letter.docx')
})

test('parses multiple admin recipient emails from the environment list', async () => {
  const { parseRecipients } = await setup()

  assert.deepEqual(parseRecipients('team@example.com, hiring@example.com'), ['team@example.com', 'hiring@example.com'])
  assert.deepEqual(parseRecipients('team@example.com\nhiring@example.com'), ['team@example.com', 'hiring@example.com'])
  assert.deepEqual(parseRecipients(' team@example.com ; hiring@example.com '), ['team@example.com', 'hiring@example.com'])
})
