export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#163f15] py-20 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_35%)]" />
        <div className="absolute bottom-[-20%] right-[-8%] h-48 w-48 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-[#eaf7e8]">Helpful next step</span>
          <h2 className="mt-5 text-3xl font-bold md:text-4xl">Ready to talk through your Medicare options?</h2>
          <p className="mt-4 text-lg text-[#eaf7e8]">Reach out today to speak with a licensed advisor and get clear guidance at no cost.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="tel:18885922128"
              className="group relative inline-flex items-center justify-center rounded-full bg-white px-6 py-3 font-semibold text-[#163f15] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f4f8f1] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#163f15]/30"
            >
              Call now: 1-(888) 592-2128
            </a>
            <a
              href="/contact"
              className="group relative inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#163f15]/30"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
