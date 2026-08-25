import assert from 'node:assert/strict'
import test from 'node:test'

const setup = async () => {
  const routeModule = await import('./route')
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
