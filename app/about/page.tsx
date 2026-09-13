import PageLayout from '@/components/layout/PageLayout'
import Section from '@/components/common/Section'

const pillars = [
  {
    title: 'Our mission',
    body: 'To guide individuals and families toward the insurance solutions that best fit their needs with patience, expertise, and compassion.',
    icon: '/file.svg',
  },
  {
    title: 'Our community',
    body: 'We serve clients with a people-first approach and focus on making complex decisions feel manageable and clear.',
    icon: '/globe.svg',
  },
  {
    title: 'Our commitment',
    body: 'We explain options without pressure, help people compare coverage thoughtfully, and stay available throughout the process.',
    icon: '/window.svg',
  },
]

const values = [
  'Fiduciary-minded guidance centered on what is best for the client',
  'Plain-language education that removes confusion and uncertainty',
  'Clear communication from start to finish',
  'Supportive customer care that keeps people informed and confident',
]

const visualCards = [
  { label: 'Trusted guidance', value: '1:1 support' },
  { label: 'Families served', value: '500+' },
  { label: 'Average response', value: '< 24 hrs' },
]

export default function AboutOverviewPage() {
  return (
    <PageLayout>
      <div className="bg-[rgb(240,237,224)] pb-8 md:pb-12">
        <Section className="pt-10 md:pt-16">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[rgb(106,127,138)]/20 bg-white shadow-[0_30px_90px_rgba(15,23,42,0.09)]">
            <div className="grid gap-0 lg:grid-cols-[1.04fr_0.96fr]">
              <div className="relative overflow-hidden bg-[rgb(5,8,5)] p-8 text-white md:p-10 lg:p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(95,251,63,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(106,127,138,0.24),transparent_35%)]" />
                <div className="relative z-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[rgb(240,237,224)]">About Prime Agency</p>
                  <h1 className="mt-4 max-w-xl text-4xl font-semibold leading-tight md:text-5xl lg:text-[3.35rem]">
                    Clear guidance for important coverage decisions.
                  </h1>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-[rgb(240,237,224)]">
                    Prime Agency helps individuals and families evaluate their options with clear explanations, practical guidance, and support they can rely on throughout the decision-making process.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="/careers#apply"
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

              <div className="p-4 md:p-6 lg:p-8">
                <div className="mx-auto w-full max-w-[390px] space-y-4">
                  <div className="relative w-full overflow-hidden rounded-[1.5rem] border border-[#dce8de] bg-[#e8eef2] shadow-[0_20px_45px_rgba(15,23,42,0.1)]">
                    <div className="aspect-[4/3] w-full">
                      <img
                        src="/about-callcenter.jpeg"
                        alt="Professional advisor wearing a headset in an office setting"
                        className="h-full w-full object-cover object-center"
                        loading="eager"
                      />
                    </div>
                  </div>

                  <div className="w-full rounded-[1.5rem] border border-[#dce8de] bg-white p-4 shadow-[0_20px_45px_rgba(15,23,42,0.1)] md:p-5">
                    <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-slate-500">Licensed advisors</p>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#1d2320]">What drives us</p>
                      <span className="rounded-full bg-[#1d2320]/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#1d2320]">
                        client first
                      </span>
                    </div>
                    <div className="space-y-3">
                      {visualCards.map((card) => (
                        <div key={card.label} className="flex items-center justify-between rounded-2xl bg-[#f4f9f2] px-3 py-2.5">
                          <span className="text-sm text-slate-600">{card.label}</span>
                          <span className="text-sm font-semibold text-[#1d2320]">{card.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="pt-0">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-3">
              {pillars.map((item) => (
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
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-5">
                <div className="inline-flex rounded-full border border-[#d5e7d5] bg-[#f5faf3] px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#1d2320]">
                  The Prime Agency difference
                </div>
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                  Practical guidance, clear answers, and consistent support.
                </h2>
                <p className="text-lg leading-8 text-slate-700">
                  We help clients understand their options, compare coverage with confidence, and move forward with a plan that fits their needs and budget. Our process is grounded in transparency, education, and dependable guidance.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[1.8rem] border border-[#dfe9e1] bg-[#1d2320] p-5 md:p-6">
                <div
                  className="h-[330px] rounded-[1.4rem] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80')",
                  }}
                />
                <div className="absolute inset-x-8 bottom-8 rounded-[1.4rem] border border-white/20 bg-[#1d2320]/85 p-4 text-white shadow-[0_20px_40px_rgba(10,20,12,0.28)] backdrop-blur-sm md:p-5">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#dfeee0]">What we believe</p>
                  <p className="mt-2 text-base leading-7 text-[#edf7ee]">
                    Good coverage decisions start with clear information, honest advice, and a process clients can trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="pt-0">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-[#dfe9e1] bg-[#f3f8f2] p-7 shadow-[0_30px_70px_rgba(15,23,42,0.04)] md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#1d2320]">Our values</p>
                <div className="mt-5 space-y-4">
                  {values.map((item) => (
                    <div key={item} className="flex items-start gap-4 rounded-[1.3rem] border border-[#d9e8d8] bg-white px-4 py-4 shadow-sm">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#1d2320]/15 bg-[#eaf5ea] text-sm font-bold text-[#1d2320] shadow-inner shadow-white/50">
                        ✓
                      </span>
                      <p className="text-base leading-7 text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.8rem] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.05)] md:p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#1d2320]">Ready to get started?</p>
                <p className="mt-4 text-lg leading-8 text-slate-700">
                  Whether you are comparing plans or looking for guidance on your next step, our team is ready to help with straightforward answers and practical support.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#1d2320] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2a302d]">
                    Contact us
                  </a>
                  <a href="tel:18885922128" className="inline-flex items-center justify-center rounded-full border border-[#1d2320]/20 bg-[#f6faf5] px-5 py-3 text-sm font-semibold text-[#1d2320] transition hover:bg-[#eff7ee]">
                    1 (888) 592-2128
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section className="pt-0">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#dce8d7] bg-[#1d2320] shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="p-7 md:p-9 lg:p-12">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#dfeee0]">Careers</p>
                <h2 className="mt-3 max-w-lg text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  Interested in joining the team?
                </h2>
                <p className="mt-4 max-w-xl text-lg leading-8 text-[#e9f5ea]">
                  We are looking for professionals who value clear communication, thoughtful service, and a genuine commitment to helping clients make informed insurance decisions.
                </p>
              </div>

              <div className="flex items-center justify-center p-7 md:p-9 lg:p-12">
                <a
                  href="/careers#apply"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#1d2320] shadow-[0_18px_35px_rgba(10,24,12,0.2)] transition hover:-translate-y-0.5 hover:bg-[#edf7ee]"
                >
                  Apply now
                </a>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </PageLayout>
  )
}
