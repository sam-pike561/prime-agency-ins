export const DUPLICATE_SUBMISSION_WINDOW_MS = 60_000

export function getTextValue(data: FormData | Record<string, unknown>, field: string) {
  if (data instanceof FormData) {
    return String(data.get(field) || '').trim()
  }

  return String(data[field] || '').trim()
}

export function getFileValue(data: FormData | Record<string, unknown>, field: string) {
  if (!(data instanceof FormData)) {
    return undefined
  }

  const value = data.get(field)
  return value instanceof File ? value : undefined
}

export function parseContactFormData(data: FormData | Record<string, unknown>) {
  const resume = getFileValue(data, 'resume')
  const coverLetter = getFileValue(data, 'coverLetter')

  return {
    name: getTextValue(data, 'name'),
    email: getTextValue(data, 'email'),
    phone: getTextValue(data, 'phone'),
    message: getTextValue(data, 'message'),
    role: getTextValue(data, 'role'),
    files: {
      resume,
      coverLetter,
    },
  }
}

export function parseRecipients(value: string) {
  return value
    .split(/[\n,;]+/)
    .map((entry) => entry.trim())
    .filter(Boolean)
}

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
