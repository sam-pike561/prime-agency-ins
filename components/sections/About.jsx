import Image from 'next/image'

export default function About() {
  return (
    <section className="bg-[#f6f9f2]/80 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#163f15]">About Prime Agency</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Helping families navigate Medicare with confidence</h2>
            <p className="mt-5 text-lg text-slate-700">
              Our agency specializes in assisting individuals and families across the country in navigating the many options available for enrolling in Medicare Advantage, Medicare Supplement, Prescription Drug, and Hospital Indemnity plans.
            </p>
            <p className="mt-4 text-lg text-slate-700">
              Prime Agency’s goal is to provide a smooth and stress-free process for our clients over the phone, working with several top-rated insurance companies to help find the right fit for your needs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#163f15]/10 bg-white px-3 py-2 text-sm text-slate-700">Personalized guidance</span>
              <span className="rounded-full border border-[#163f15]/10 bg-white px-3 py-2 text-sm text-slate-700">Top-rated carriers</span>
              <span className="rounded-full border border-[#163f15]/10 bg-white px-3 py-2 text-sm text-slate-700">Clear benefit explanations</span>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="relative overflow-hidden rounded-[2rem] border border-[#d7e6d1] bg-white shadow-sm">
              <Image
                src="/illustrated_stock/dcotor-office-illust.jpg"
                alt="Illustrated doctor office scene with patient guidance"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="soft-card rounded-[2rem] p-8">
              <h3 className="text-xl font-semibold text-slate-900">Why Prime Agency</h3>
              <p className="mt-4 text-slate-700">
                Our team of experienced, licensed insurance agents brings knowledge and patience to every conversation so you understand the plan options before you decide.
              </p>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li className="rounded-2xl border border-[#163f15]/10 bg-[#f8fbf5] px-4 py-3">• Personalized guidance with no pressure</li>
                <li className="rounded-2xl border border-[#163f15]/10 bg-[#f8fbf5] px-4 py-3">• Access to top-rated carriers</li>
                <li className="rounded-2xl border border-[#163f15]/10 bg-[#f8fbf5] px-4 py-3">• Clear explanations of benefits and costs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
