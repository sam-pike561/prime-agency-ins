export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[rgb(5,8,5)] py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(95,251,63,0.18),_transparent_35%)]" />
        <div className="absolute bottom-[-20%] right-[-8%] h-48 w-48 rounded-full bg-[rgb(136,176,124)]/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-[rgb(22,63,21)] bg-[rgb(22,63,21)] px-3 py-1 text-sm font-medium text-white">Helpful next step</span>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">Ready to talk through your Medicare options?</h2>
          <p className="mt-4 text-lg text-[rgb(240,237,224)]">Reach out today to speak with a licensed advisor and get clear guidance at no cost.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:18885922128"
              className="group relative inline-flex items-center justify-center rounded-full bg-[rgb(20,69,54)] px-6 py-3 font-semibold text-white shadow-[0_4px_0_rgba(0,0,0,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[rgb(17,56,44)] hover:shadow-[0_5px_0_rgba(0,0,0,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(20,69,54)]/30"
            >
              Call now: 1 (888) 592-2128
            </a>
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(95,251,63)]/30"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
