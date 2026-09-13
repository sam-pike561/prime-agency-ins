'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import PageLayout from '@/components/layout/PageLayout'
import Section from '@/components/common/Section'

const benefitPillars: Array<{ title: string; body: string; icon: string }> = [
  {
    title: 'Supportive team culture',
    body: 'Work alongside experienced advisors who value compassion, professionalism, and a mission-first mindset.',
    icon: '/globe.svg',
  },
  {
    title: 'Real career growth',
    body: 'Build long-term confidence through structured training, coaching, and clear advancement opportunities.',
    icon: '/file.svg',
  },
  {
    title: 'Meaningful impact',
    body: 'Help families understand Medicare options and make confident decisions about coverage that affects their daily life.',
    icon: '/window.svg',
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
      <div className="bg-[rgb(240,237,224)] pb-8 md:pb-12">
        <Section className="pt-10 md:pt-16">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[rgb(106,127,138)]/20 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.09)]">
            <div className="grid gap-0 lg:grid-cols-[1.04fr_0.96fr]">
              <div className="relative overflow-hidden bg-[rgb(5,8,5)] p-8 text-white md:p-10 lg:p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(95,251,63,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(106,127,138,0.24),transparent_34%)]" />
                <div className="relative z-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[rgb(240,237,224)]">Careers</p>
                  <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight md:text-5xl lg:text-[3.35rem]">
                    Build a career helping people navigate insurance with confidence.
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-[rgb(240,237,224)]">
                    Prime Agency is focused on clear communication, dependable service, and practical support. We help clients understand their options and make informed decisions about coverage.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="#apply"
                      className="inline-flex items-center justify-center rounded-full bg-[rgb(20,69,54)] px-6 py-3 text-sm font-semibold text-white shadow-[0_4px_0_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:bg-[rgb(17,56,44)] hover:shadow-[0_5px_0_rgba(0,0,0,0.15)]"
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

              <div className="relative p-3 sm:min-h-[430px] sm:p-4 md:p-6 lg:p-8">
                <div className="relative overflow-hidden rounded-[1.2rem] shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:absolute sm:inset-3 sm:rounded-[1.6rem]">
                  <div
                    className="h-[220px] w-full bg-cover bg-center sm:h-full sm:min-h-[430px]"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80')",
                    }}
                  />
                </div>

                <div className="relative z-10 mt-3 rounded-[1.2rem] border border-white/80 bg-white/80 p-3 shadow-[0_22px_50px_rgba(15,23,42,0.12)] backdrop-blur-sm sm:absolute sm:inset-x-7 sm:bottom-7 sm:mt-0 sm:p-4 md:p-5">
                  <div className="mb-3 flex items-center justify-between gap-2 sm:mb-4 sm:gap-3">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#1d2320] sm:text-[0.68rem] sm:tracking-[0.22em]">Why join us</p>
                    <span className="rounded-full bg-[#1d2320]/10 px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[#1d2320] sm:px-2.5 sm:py-1 sm:text-[0.65rem] sm:tracking-[0.18em]">
                      mission first
                    </span>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-3 sm:gap-3">
                    {statCards.map((card) => (
                      <div key={card.label} className="rounded-xl bg-[#f4f9f2] px-2 py-2.5 text-center sm:rounded-2xl sm:px-3 sm:py-3">
                        <p className="text-[0.56rem] uppercase tracking-[0.14em] text-slate-500 sm:text-[0.65rem] sm:tracking-[0.2em]">{card.label}</p>
                        <p className="mt-1 text-base font-semibold text-[#1d2320] sm:mt-2 sm:text-lg">{card.value}</p>
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
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eef5ea] p-2.5 text-lg font-bold text-[#1d2320]">
                    <img src={item.icon} alt="" className="h-full w-full object-contain" />
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
                <div className="inline-flex rounded-full border border-[#d5e7d5] bg-[#f5faf3] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#1d2320]">
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
                    <div key={item} className="flex items-start gap-3 rounded-[1.1rem] border border-[#dfe9e1] bg-[#f7faf7] p-4 shadow-[0_8px_24px_rgba(15,23,42,0.02)]">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#1d2320]/15 bg-[#eaf5ea] text-sm font-bold text-[#1d2320] shadow-inner shadow-white/50">
                        ✓
                      </span>
                      <p className="flex-1 text-base leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[1.8rem] border border-[#dfe9e1] bg-[#1d2320] p-4 sm:p-5 md:p-6">
                <div
                  className="h-[220px] rounded-[1.2rem] bg-cover bg-center sm:h-[300px] md:h-[380px] md:rounded-[1.4rem]"
                  style={{
                    backgroundImage:
                      "url('/tim-van-der-kuip-CPs2X8JYmS8-unsplash.jpg')",
                  }}
                />
                <div className="relative z-10 mt-3 rounded-[1.1rem] border border-white/20 bg-[#1d2320]/85 p-3 text-white shadow-[0_20px_40px_rgba(10,20,12,0.28)] backdrop-blur-sm sm:absolute sm:inset-x-8 sm:bottom-8 sm:mt-0 sm:p-4 md:p-5">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#dfeee0] sm:text-[0.7rem] sm:tracking-[0.2em]">Open roles</p>
                  <ul className="mt-2 space-y-1.5 text-xs text-[#edf7ee] sm:mt-3 sm:space-y-2 sm:text-sm">
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
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#dfe9e1] bg-white p-4 shadow-[0_30px_80px_rgba(15,23,42,0.05)] sm:p-6 md:p-8">
            <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr] lg:gap-8">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#1d2320]">Apply now</p>
                <h2 className="mt-3 text-2xl font-semibold text-slate-900 sm:mt-4 sm:text-3xl md:text-4xl">Share a little about yourself.</h2>

                <form onSubmit={handleSubmit} className="mt-5 space-y-5 sm:mt-6">
                  <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Full name
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleFieldChange}
                        placeholder="Your full name"
                        required
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#1d2320] focus:bg-white"
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
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#1d2320] focus:bg-white"
                      />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Phone
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleFieldChange}
                        placeholder="(555) 123-4567"
                        required
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#1d2320] focus:bg-white"
                      />
                    </label>

                    <label className="block text-sm font-medium text-slate-700">
                      Role of interest
                      <select
                        name="role"
                        value={form.role}
                        onChange={handleFieldChange}
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#1d2320] focus:bg-white"
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
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#1d2320] focus:bg-white"
                    />
                  </label>

                  <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
                    <label className="block text-sm font-medium text-slate-700">
                      Resume
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(event) => handleFileChange(event, 'resume')}
                        className="mt-2 block w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-[#1d2320] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
                      />
                      {resumeFile ? <span className="mt-2 block text-xs text-slate-500">Selected: {resumeFile.name}</span> : null}
                    </label>

                    <label className="block text-sm font-medium text-slate-700">
                      Cover letter
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(event) => handleFileChange(event, 'coverLetter')}
                        className="mt-2 block w-full rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-600 file:mr-4 file:rounded-full file:border-0 file:bg-[#1d2320] file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white"
                      />
                      {coverLetterFile ? <span className="mt-2 block text-xs text-slate-500">Selected: {coverLetterFile.name}</span> : null}
                    </label>
                  </div>

                  {status.message ? (
                    <div
                      className={
                        status.type === 'success'
                          ? 'rounded-xl border border-[#d7e6d1] bg-[#f0f8ef] px-4 py-3 text-sm text-[#1d2320]'
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
                    className="inline-flex items-center justify-center rounded-full bg-[#1d2320] px-6 py-3 font-semibold text-white shadow-[0_14px_28px_rgba(22,63,21,0.2)] transition hover:-translate-y-0.5 hover:bg-[#1f4d1e] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status.type === 'loading' ? 'Submitting...' : 'Submit application'}
                  </button>
                </form>
              </div>

              <div className="relative overflow-hidden rounded-[1.8rem] border border-[#e0eadf] bg-[#f6faf5] p-4 sm:p-5 md:p-6">
                <div
                  className="h-[260px] rounded-[1.2rem] bg-cover bg-center sm:h-[320px] md:h-[420px] md:rounded-[1.5rem]"
                  style={{
                    backgroundImage:
                      "url('/Find%20the%20Best%20Home%20Office%20Desk%20For%202022.jpeg')",
                  }}
                />
                <div className="relative z-10 mt-3 rounded-[1.1rem] border border-white/75 bg-white/85 p-3 shadow-[0_20px_40px_rgba(15,23,42,0.12)] backdrop-blur-sm sm:absolute sm:inset-x-8 sm:bottom-8 sm:mt-0 sm:p-4 md:p-4">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#1d2320] sm:text-[0.7rem] sm:tracking-[0.22em]">Why people join</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
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
