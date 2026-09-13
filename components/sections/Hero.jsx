import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[rgb(240,237,224)] py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-8%] top-[-8%] h-48 w-48 rounded-full bg-[rgb(118,156,118)]/10 blur-3xl" />
          <div className="absolute bottom-[-5%] right-[-2%] h-56 w-56 rounded-full bg-[rgb(106,127,138)]/20 blur-3xl" />
        </div>

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <h1 className="text-4xl font-semibold tracking-tight text-[rgb(5,8,5)] md:text-6xl">Medicare simplified.</h1>
            <p className="max-w-2xl text-lg font-medium leading-8 text-[rgb(106,127,138)] md:text-xl">
              We help you compare Medicare Advantage, Medicare Supplement, Prescription Drug, and Hospital Indemnity options with confidence and clarity.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-full bg-[rgb(20,69,54)] px-6 py-3 font-semibold text-white shadow-[0_4px_0_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgb(17,56,44)] hover:shadow-[0_5px_0_rgba(0,0,0,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(20,69,54)]/30"
              >
                Get started
              </a>
              <a
                href="/services"
                className="group relative inline-flex items-center justify-center rounded-full border border-[rgb(5,8,5)]/20 bg-white px-6 py-3 font-semibold text-[rgb(5,8,5)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgb(240,237,224)] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(136,176,124)]/30"
              >
                Explore services
              </a>
            </div>
            <div className="flex flex-wrap gap-3 pt-2 text-sm text-[rgb(106,127,138)]">
              <span className="rounded-full border border-[rgb(5,8,5)]/10 bg-white/80 px-3 py-2">Licensed agents</span>
              <span className="rounded-full border border-[rgb(5,8,5)]/10 bg-white/80 px-3 py-2">No-cost guidance</span>
              <span className="rounded-full border border-[rgb(5,8,5)]/10 bg-white/80 px-3 py-2">Personalized support</span>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="relative overflow-hidden rounded-[2rem] border border-[rgb(106,127,138)]/30 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.14)]">
              <Image
                src="/illustrated_stock/clipboard-and-meds.jpg"
                alt="Illustrated healthcare provider holding a clipboard and medication"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div className="accent-ring rounded-[2rem] bg-[rgb(5,8,5)] p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)]">
              <div className="inline-flex rounded-full border border-[rgb(22,63,21)] bg-[rgb(22,63,21)] px-3 py-1 text-sm font-medium text-white">
                A smoother first step
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">Need help choosing a plan?</h2>
              <ul className="mt-5 space-y-3 text-sm text-[rgb(240,237,224)] md:text-base">
                <li>• Compare options over the phone with a licensed advisor</li>
                <li>• Get answers to Medicare questions without pressure</li>
                <li>• Enroll with confidence in the right plan for your needs</li>
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="tel:18885922128" className="inline-flex rounded-full bg-white px-5 py-3 font-semibold text-[rgb(5,8,5)] shadow-lg shadow-black/10">
                  Call today: 1 (888) 592-2128
                </a>
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-[rgb(240,237,224)]">
                  Fast, friendly guidance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
