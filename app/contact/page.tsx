import PageLayout from "@/components/layout/PageLayout";
import Section from "@/components/common/Section";
import Button from "@/components/common/Button";

export default function ContactPage() {
  return (
    <PageLayout>
      <div className="bg-[#f6f9f2]">
        <Section className="pt-12 md:pt-20">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="rounded-[2rem] bg-[#163f15] p-8 text-white shadow-xl md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#dcecdc]">Contact Prime Agency</p>
              <h1 className="mt-4 text-4xl font-bold md:text-5xl">Let us help you navigate your next step</h1>
              <p className="mt-6 text-lg leading-8 text-[#eaf7e8]">
                Reach out today for clear, no-cost guidance on Medicare and health coverage options.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="tel:18885922128" className="bg-white text-[#163f15] hover:bg-[#f4f8f1]">
                  Call now: 1(888) 592-2128
                </Button>
                <Button href="/services/medicare-guidance" className="border border-white/40 bg-transparent text-white hover:bg-white/10">
                  Explore Medicare guidance
                </Button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#163f15]/10 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">Why people reach out</h2>
              <ul className="mt-6 space-y-4 text-slate-700">
                <li>• Understand Medicare Advantage, Medigap, and Part D options</li>
                <li>• Ask questions about eligibility, deadlines, or plan changes</li>
                <li>• Get help comparing coverage without pressure</li>
              </ul>
              <div className="mt-8 rounded-2xl bg-slate-50 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#163f15]">Office hours</p>
                <p className="mt-3 text-slate-700">Reach out by phone for a no-cost consultation with a licensed advisor.</p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </PageLayout>
  );
}
