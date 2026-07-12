import Section from "@/components/common/Section";

export default function Services() {
  const services = [
    {
      title: "Medicare Part A & B",
      desc: "Original Medicare has two parts that provide hospital and medical coverage for those 65 and older.",
      icon: "✦",
    },
    {
      title: "Medicare Advantage",
      desc: "Private-plan coverage that follows Medicare guidelines and can include extra benefits and prescription drug help.",
      icon: "◌",
    },
    {
      title: "Medicare Part D",
      desc: "Prescription drug coverage that can be added on its own or bundled into a Medicare Advantage plan.",
      icon: "▣",
    },
    {
      title: "Supplement Plan",
      desc: "Medigap plans help cover costs that Original Medicare leaves behind, including copays and deductibles.",
      icon: "↗",
    },
    {
      title: "New to Medicare",
      desc: "We guide first-time beneficiaries through enrollment windows, deadlines, and the best next steps.",
      icon: "✓",
    },
    {
      title: "Hospital Indemnity",
      desc: "Additional protection for out-of-pocket costs tied to hospital stays and recovery expenses.",
      icon: "✚",
    },
  ];

  return (
    <Section className="bg-white/80 py-20">
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#163f15]">Our services</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">Coverage options built around your needs</h2>
        <p className="mt-4 text-lg text-slate-600">
          With over 60 million people enrolled in Medicare nationwide, we make the process easier to understand and easier to act on.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {services.map((s, i) => (
          <div key={i} className="soft-card soft-card-hover rounded-[1.5rem] p-6">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#163f15]/10 text-xl text-[#163f15]">
              {s.icon}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-900">{s.title}</h3>
            <p className="mt-3 text-slate-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
