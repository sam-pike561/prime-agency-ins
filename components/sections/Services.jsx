const cards = [
  {
    icon: '✦',
    title: 'Medicare Part A & B',
    description: 'Original Medicare has two parts that provide hospital and medical coverage for those 65 and older.',
  },
  {
    icon: '◌',
    title: 'Medicare Advantage',
    description: 'Private-plan coverage that follows Medicare guidelines and can include extra benefits and prescription drug help.',
  },
  {
    icon: '▣',
    title: 'Medicare Part D',
    description: 'Prescription drug coverage that can be added on its own or bundled into a Medicare Advantage plan.',
  },
  {
    icon: '↗',
    title: 'Supplement Plan',
    description: 'Medigap plans help cover costs that Original Medicare leaves behind, including copays and deductibles.',
  },
  {
    icon: '✓',
    title: 'New to Medicare',
    description: 'We guide first-time beneficiaries through enrollment windows, deadlines, and the best next steps.',
  },
  {
    icon: '✚',
    title: 'Hospital Indemnity',
    description: 'Additional protection for out-of-pocket costs tied to hospital stays and recovery expenses.',
  },
]

export default function Services() {
  return (
    <section className="bg-white/80 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#163f15]">Our services</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Coverage options built around your needs</h2>
          <p className="mt-4 text-lg text-slate-600">
            With over 60 million people enrolled in Medicare nationwide, we make the process easier to understand and easier to act on.
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-5xl overflow-hidden rounded-[2rem] border border-[#d7e6d1] bg-white shadow-sm">
          <img
            src="https://images.pexels.com/photos/7446988/pexels-photo-7446988.jpeg?cs=srgb&dl=pexels-gustavo-fring-7446988.jpg&fm=jpg"
            alt="Two smiling healthcare professionals reviewing care plans in a bright clinic"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="soft-card soft-card-hover rounded-[1.5rem] p-6">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#163f15]/10 text-xl text-[#163f15]">{card.icon}</div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-3 text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
