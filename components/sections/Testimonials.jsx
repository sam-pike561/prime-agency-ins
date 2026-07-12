import Section from "@/components/common/Section";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Prime Agency was extremely helpful in explaining the benefits of each Medicare Advantage plan clearly to me so that I had a full understanding of my health plan for a change! Definitely will be a client for life.",
      name: "Nancy W",
    },
    {
      quote:
        "Great experience from start to finish! I would highly recommend Prime Agency for your next Medicare enrollment.",
      name: "Ryan R",
    },
    {
      quote:
        "I am very happy with my new Humana plan. The agent who helped me was very kind and knowledgeable. Good customer service.",
      name: "David P",
    },
  ];

  return (
    <Section className="bg-white/80 py-20">
      <div className="mx-auto mb-12 max-w-4xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#163f15]">Client stories</p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">What our clients say</h2>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <div key={i} className="soft-card soft-card-hover rounded-[1.5rem] p-6">
            <p className="text-slate-700 italic">“{t.quote}”</p>
            <p className="mt-6 font-semibold text-slate-900">{t.name}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
