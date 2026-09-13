'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import PageLayout from '@/components/layout/PageLayout'
import Section from '@/components/common/Section'

const benefitPillars: Array<{ title: string; body: string; icon: 'team' | 'growth' | 'impact' }> = [
  {
    title: 'Supportive team culture',
    body: 'Work alongside experienced advisors who value compassion, professionalism, and a mission-first mindset.',
    icon: 'team',
  },
  {
    title: 'Real career growth',
    body: 'Build long-term confidence through structured training, coaching, and clear advancement opportunities.',
    icon: 'growth',
  },
  {
    title: 'Meaningful impact',
    body: 'Help families understand Medicare options and make confident decisions about coverage that affects their daily life.',
    icon: 'impact',
  },
]

const careerHighlights = [
  'Sales and customer support opportunities',
  'Training and mentorship for new professionals',
  'Flexible, people-first work environment',
  'Mission-driven work that truly helps families',
]

const statCards = [
  { label: 'Open roles', value: '3+' },
  { label: 'Mentorship', value: '1:1' },
  { label: 'Team culture', value: 'Supportive' },
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  role: 'Health Insurance Agent - Medicare Sales',
  message: '',
}

const benefitIcons = {
  team: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-8 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0c-2.761 0-5 2.239-5 5v1h10v-1c0-2.761-2.239-5-5-5Zm8-1c2.209 0 4 1.791 4 4v3h-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  growth: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M4 18h16M7 14l3-3 3 2 4-5M14 8h3v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  impact: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path d="M12 21s-6.5-3.9-6.5-9.4A3.6 3.6 0 0 1 12 9.8a3.6 3.6 0 0 1 6.5 1.8C18.5 17.1 12 21 12 21Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
} as const

export default function CareersPage() {
  const [form, setForm] = useState(initialForm)
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null)
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  })

  const handleFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>, field: 'resume' | 'coverLetter') => {
    const nextFile = event.target.files?.[0] ?? null
    if (field === 'resume') {
      setResumeFile(nextFile)
      return
    }

    setCoverLetterFile(nextFile)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus({ type: 'loading', message: 'Submitting your application...' })

    try {
      const formData = new FormData()
      Object.entries(form).forEach(([name, value]) => formData.append(name, value))

      if (resumeFile) {
        formData.append('resume', resumeFile)
      }

      if (coverLetterFile) {
        formData.append('coverLetter', coverLetterFile)
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error || 'Unable to submit your application.')
      }

      setForm(initialForm)
      setResumeFile(null)
      setCoverLetterFile(null)
      setStatus({ type: 'success', message: 'Thanks for applying. We received your information and will be in touch soon.' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      })
    }
  }

  return (
    <PageLayout>
      <div className="bg-[#f6f9f2] pb-8 md:pb-12">
        <Section className="pt-10 md:pt-16">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#d6e7d0] bg-white shadow-[0_30px_90px_rgba(15,23,42,0.09)]">
            <div className="grid gap-0 lg:grid-cols-[1.04fr_0.96fr]">
              <div className="relative overflow-hidden bg-[#163f15] p-8 text-white md:p-10 lg:p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(146,197,166,0.22),transparent_34%)]" />
                <div className="relative z-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#dfeee0]">Careers</p>
                  <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight md:text-5xl lg:text-[3.35rem]">
                    Build a career helping people navigate insurance with confidence.
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-[#e9f5ea]">
                    Prime Agency is focused on clear communication, dependable service, and practical support. We help clients understand their options and make informed decisions about coverage.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="#apply"
                      className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#163f15] shadow-[0_16px_30px_rgba(10,24,12,0.18)] transition hover:-translate-y-0.5 hover:bg-[#edf7ee]"
                    >
                      Apply now
                    </a>
                    <a
                      href="tel:18885922128"
                      className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Call us
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[430px] p-4 md:p-6 lg:p-8">
                <div
                  className="absolute inset-4 rounded-[1.6rem] bg-cover bg-center shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80')",
                  }}
                />
                <div className="absolute inset-x-7 bottom-7 rounded-[1.5rem] border border-white/80 bg-white/80 p-4 shadow-[0_22px_50px_rgba(15,23,42,0.12)] backdrop-blur-sm md:p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#163f15]">Why join us</p>
                    <span className="rounded-full bg-[#163f15]/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#163f15]">
                      mission first
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {statCards.map((card) => (
                      <div key={card.label} className="rounded-2xl bg-[#f4f9f2] px-3 py-3 text-center">
                        <p className="text-[0.65rem] uppercase tracking-[0.2em] text-slate-500">{card.label}</p>
                        <p className="mt-2 text-lg font-semibold text-[#163f15]">{card.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="pt-0">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-3">
              {benefitPillars.map((item) => (
                <div key={item.title} className="soft-card soft-card-hover rounded-[1.7rem] p-7 md:p-8">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef5ea] text-[#163f15]">
                    {benefitIcons[item.icon]}
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">{item.title}</h2>
                  <p className="mt-3 text-base leading-7 text-slate-700">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section className="pt-0">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#dae7d6] bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.05)] md:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="space-y-5">
                <div className="inline-flex rounded-full border border-[#d5e7d5] bg-[#f5faf3] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#163f15]">
                  Who we’re looking for
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  People who communicate clearly and work well with clients.
                </h2>
                <p className="text-lg leading-8 text-slate-700">
                  We are looking for organized, motivated professionals who can build trust with families, explain coverage clearly, and provide dependable support during important decisions.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    'A strong customer service mindset and warm communication style',
                    'Comfort speaking with clients and handling complex questions with empathy',
                    'A willingness to learn, grow, and contribute to a mission-driven team',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-[1.1rem] border border-[#dfe9e1] bg-[#f7faf7] p-4">
                      <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#163f15] text-sm font-bold text-white">✓</span>
                      <p className="text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.8rem] border border-[#dfe9e1] bg-[#163f15] p-5 md:p-6">
                <div
                  className="h-[380px] rounded-[1.4rem] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80')",
                  }}
                />
                <div className="absolute inset-x-8 bottom-8 rounded-[1.25rem] border border-white/20 bg-[#163f15]/85 p-4 text-white shadow-[0_20px_40px_rgba(10,20,12,0.28)] backdrop-blur-sm md:p-5">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#dfeee0]">Open roles</p>
                  <ul className="mt-3 space-y-2 text-sm text-[#edf7ee]">
                    <li>• Health insurance agent — Medicare sales</li>
                    <li>• Customer support specialist</li>
                    <li>• Sales and client education roles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="pt-0" id="apply">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#dfe9e1] bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.05)] md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#163f15]">Apply now</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">Share a little about yourself.</h2>

                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Full name
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleFieldChange}
                        placeholder="Your full name"
                        required
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#163f15] focus:bg-white"
                      />
                    </label>

                    <label className="block text-sm font-medium text-slate-700">
                      Email
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleFieldChange}
                        placeholder="you@example.com"
                        required
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#163f15] focus:bg-white"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Phone
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleFieldChange}
                        placeholder="(555) 123-4567"
                        required
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#163f15] focus:bg-white"
                      />
                    </label>

                    <label className="block text-sm font-medium text-slate-700">
                      Role of interest
                      <select
                        name="role"
                        value={form.role}
                        onChange={handleFieldChange}
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#163f15] focus:bg-white"
                      >
                        <option>Health Insurance Agent - Medicare Sales</option>
                        <option>Customer Support Specialist</option>
                        <option>Sales and Client Education</option>
                        <option>Other</option>
                      </select>
                    </label>
                  </div>

                  <label className="block text-sm font-medium text-slate-700">
                    Message
                    <textarea
                      rows={5}
                      name="message"
                      value={form.message}
                      onChange={handleFieldChange}
                      placeholder="Tell us a little about your experience and why you want to join our team."
                      required
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#163f15] focus:bg-white"
                    />
                  </label>

                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Resume
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(event) => handleFileChange(event, 'resume')}
                        className="mt-2 block w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-[#163f15] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
                      />
                      {resumeFile ? <span className="mt-2 block text-xs text-slate-500">Selected: {resumeFile.name}</span> : null}
                    </label>

                    <label className="block text-sm font-medium text-slate-700">
                      Cover letter
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(event) => handleFileChange(event, 'coverLetter')}
                        className="mt-2 block w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-[#163f15] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
                      />
                      {coverLetterFile ? <span className="mt-2 block text-xs text-slate-500">Selected: {coverLetterFile.name}</span> : null}
                    </label>
                  </div>

                  {status.message ? (
                    <div
                      className={
                        status.type === 'success'
                          ? 'rounded-xl border border-[#d7e6d1] bg-[#f0f8ef] px-4 py-3 text-sm text-[#163f15]'
                          : status.type === 'error'
                            ? 'rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700'
                            : 'rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600'
                      }
                    >
                      {status.message}
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    disabled={status.type === 'loading'}
                    className="inline-flex items-center justify-center rounded-full bg-[#163f15] px-6 py-3 font-semibold text-white shadow-[0_14px_28px_rgba(22,63,21,0.2)] transition hover:-translate-y-0.5 hover:bg-[#1f4d1e] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status.type === 'loading' ? 'Submitting...' : 'Submit application'}
                  </button>
                </form>
              </div>

              <div className="relative overflow-hidden rounded-[1.8rem] border border-[#e0eadf] bg-[#f6faf5] p-5 md:p-6">
                <div
                  className="h-[420px] rounded-[1.5rem] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/about-callcenter.jpeg')",
                  }}
                />
                <div className="absolute inset-x-8 bottom-8 rounded-[1.4rem] border border-white/75 bg-white/85 p-4 shadow-[0_20px_40px_rgba(15,23,42,0.12)] backdrop-blur-sm">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#163f15]">Why people join</p>
                  <p className="mt-2 text-base leading-7 text-slate-700">
                    We support learning, accountability, and steady progress so people can build lasting careers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </PageLayout>
  )
}
