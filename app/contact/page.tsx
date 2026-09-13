'use client'

import { FormEvent, useState } from 'react'
import PageLayout from '@/components/layout/PageLayout'
import Section from '@/components/common/Section'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export default function ContactPage() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<{ type: 'idle' | 'loading' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus({ type: 'loading', message: 'Sending your message...' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error || 'Unable to send your message.')
      }

      setForm(initialForm)
      setStatus({
        type: 'success',
        message: 'Thanks for reaching out. Your message has been sent successfully.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      })
    }
  }

  return (
    <PageLayout>
      <div className="bg-[rgb(240,237,224)]">
        <Section className="pt-12 md:pt-20">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[2rem] border border-[rgb(106,127,138)]/20 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[rgb(5,8,5)]">Get in touch</p>
                  <h1 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">We&apos;re here to help.</h1>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
                    Fill out the form below or call us directly and we&apos;ll get you the help you need as fast as possible.
                    We look forward to hearing from you!
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="tel:18885922128"
                      className="inline-flex items-center justify-center rounded-full bg-[rgb(20,69,54)] px-6 py-3 font-semibold text-white shadow-[0_4px_0_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:bg-[rgb(17,56,44)] hover:shadow-[0_5px_0_rgba(0,0,0,0.15)]"
                    >
                      Call Today 1 (888) 592-2128
                    </a>
                    <a
                      href="/services/medicare-guidance"
                      className="inline-flex items-center justify-center rounded-full border border-[rgb(5,8,5)]/20 bg-white px-6 py-3 font-semibold text-[rgb(5,8,5)] shadow-sm transition hover:-translate-y-0.5 hover:bg-[rgb(240,237,224)]"
                    >
                      Explore Medicare guidance
                    </a>
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-[rgb(106,127,138)]/20 bg-[rgb(240,237,224)] p-6">
                  <h2 className="text-2xl font-semibold text-slate-900">Why people reach out</h2>
                  <ul className="mt-6 space-y-4 text-base text-slate-700">
                    <li>• Understand Medicare Advantage, Medigap, and Part D options</li>
                    <li>• Ask questions about eligibility, deadlines, and plan changes</li>
                    <li>• Get help comparing coverage without pressure</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-[1.5rem] border border-[#1d2320]/10 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1d2320]">Find us</p>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  700 W. Hillsboro Blvd<br />
                  Deerfield Beach, Florida 33441
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#1d2320]/10 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1d2320]">Let&apos;s talk</p>
                <p className="mt-4 text-lg font-semibold text-slate-900">Speak to a Licensed Insurance Agent</p>
                <a href="tel:18885922128" className="mt-3 inline-block text-lg font-medium text-[#1d2320] hover:underline">
                  1 (888) 592-2128
                </a>
                <p className="mt-2 text-sm text-slate-600">Mon - Fri, 9 a.m. - 6 p.m. EST</p>
              </div>

              <div className="rounded-[1.5rem] border border-[#1d2320]/10 bg-white p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1d2320]">Get in touch</p>
                <a href="mailto:support@primeagencyins.com" className="mt-4 inline-block text-lg font-semibold text-[#1d2320] hover:underline">
                  support@primeagencyins.com
                </a>
                <p className="mt-3 text-base leading-7 text-slate-700">
                  Questions about Medicare, coverage options, or the enrollment process? We&apos;re ready to help.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-[2rem] border border-[#1d2320]/10 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.04)] md:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">Contact form</h2>
                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="block text-sm font-medium text-slate-700">
                        Your Name
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Full name"
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
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#1d2320] focus:bg-white"
                        />
                      </label>
                    </div>

                    <label className="block text-sm font-medium text-slate-700">
                      Phone
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                        required
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#1d2320] focus:bg-white"
                      />
                    </label>

                    <label className="block text-sm font-medium text-slate-700">
                      Message
                      <textarea
                        rows={5}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help"
                        required
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-[#1d2320] focus:bg-white"
                      />
                    </label>

                    <label className="flex items-start gap-3 text-sm text-slate-600">
                      <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 text-[#1d2320] focus:ring-[#1d2320]" />
                      <span>
                        I agree with the Privacy Policy. By entering my phone number and pressing the Submit button, I consent to be contacted by phone, text message or email.
                      </span>
                    </label>

                    {status.message ? (
                      <div
                        className={status.type === 'success' ? 'rounded-xl border border-[#d7e6d1] bg-[#f0f8ef] px-4 py-3 text-sm text-[#1d2320]' : status.type === 'error' ? 'rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700' : 'rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600'}
                      >
                        {status.message}
                      </div>
                    ) : null}

                    <button
                      type="submit"
                      disabled={status.type === 'loading'}
                      className="inline-flex items-center justify-center rounded-full bg-[#1d2320] px-6 py-3 font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#21461d] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status.type === 'loading' ? 'Sending...' : 'Submit'}
                    </button>
                  </form>
                </div>

                <div className="rounded-[1.5rem] bg-[#1d2320] p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#dcecdc]">Need help now?</p>
                  <h3 className="mt-4 text-2xl font-bold">Our team can walk you through your options.</h3>
                  <p className="mt-4 text-base leading-7 text-[#eaf7e8]">
                    We can help you compare available plans, answer questions about eligibility and deadlines, and make sure you feel informed before making a decision.
                  </p>
                  <div className="mt-6 space-y-3 text-base text-[#eaf7e8]">
                    <p>• Licensed advisors</p>
                    <p>• No-cost guidance</p>
                    <p>• Personalized recommendations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#1d2320]/10 bg-[#f4f8f1] p-6 text-sm leading-7 text-slate-700 md:p-8">
              We do not offer every plan available in your area. Plans vary by region and state, and benefits may change by carrier and location. Please contact Medicare.gov or 1-800-MEDICARE for additional coverage information. Prime Agency helps Medicare beneficiaries review and enroll in available coverage options.
            </div>
          </div>
        </Section>
      </div>
    </PageLayout>
  )
}
