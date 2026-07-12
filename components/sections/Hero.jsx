import Section from "@/components/common/Section";
import Button from "@/components/common/Button";

export default function Hero() {
  return (
    <Section className="relative overflow-hidden bg-gradient-to-br from-[#f6f9f2] via-white to-[#eef5e9] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-8%] h-48 w-48 rounded-full bg-[#163f15]/10 blur-3xl" />
        <div className="absolute bottom-[-5%] right-[-2%] h-56 w-56 rounded-full bg-[#d8f0c5]/70 blur-3xl" />
      </div>

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-[#163f15] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#163f15]/20">
            Medicare made clear
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
            Medicare simplified.
          </h1>
          <p className="max-w-2xl text-lg font-medium leading-8 text-slate-700 md:text-xl">
            We help you compare Medicare Advantage, Medicare Supplement, Prescription Drug, and Hospital Indemnity options with confidence and clarity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/contact" className="bg-[#163f15] text-white hover:bg-[#21461d]">
              Get started
            </Button>
            <Button href="/services" className="border border-[#163f15]/20 bg-white text-[#163f15] hover:bg-[#f4f8f1]">
              Explore services
            </Button>
          </div>
          <div className="flex flex-wrap gap-3 pt-2 text-sm text-slate-600">
            <span className="rounded-full border border-[#163f15]/10 bg-white/80 px-3 py-2">Licensed agents</span>
            <span className="rounded-full border border-[#163f15]/10 bg-white/80 px-3 py-2">No-cost guidance</span>
            <span className="rounded-full border border-[#163f15]/10 bg-white/80 px-3 py-2">Personalized support</span>
          </div>
        </div>

        <div className="accent-ring rounded-[2rem] bg-gradient-to-br from-[#163f15] via-[#1f4d1c] to-[#0f2f11] p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.22)]">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-[#f8fdf3]">
            A smoother first step
          </div>
          <h2 className="mt-5 text-2xl font-semibold tracking-tight text-white">Need help choosing a plan?</h2>
          <ul className="mt-5 space-y-3 text-sm text-[#f8fdf3] md:text-base">
            <li>• Compare options over the phone with a licensed advisor</li>
            <li>• Get answers to Medicare questions without pressure</li>
            <li>• Enroll with confidence in the right plan for your needs</li>
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="tel:18776071446" className="inline-flex rounded-full bg-white px-5 py-3 font-semibold text-[#163f15] shadow-lg shadow-black/10">
              Call today: 1 (877) 607-1446
            </a>
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-medium text-[#f8fdf3]">
              Fast, friendly guidance
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
