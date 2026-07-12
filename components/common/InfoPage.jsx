import Section from "@/components/common/Section";
import Button from "@/components/common/Button";

/**
 * @typedef {{
 *   eyebrow: string;
 *   title: string;
 *   intro: string;
 *   bullets?: string[];
 *   highlights?: Array<{ title: string; body: string }>;
 *   cta?: { label: string; href: string };
 *   secondaryCta?: { label: string; href: string };
 *   children?: import("react").ReactNode;
 * }} InfoPageProps
 */

/**
 * @param {InfoPageProps} props
 */
export default function InfoPage({
  eyebrow,
  title,
  intro,
  bullets = [],
  highlights = [],
  cta,
  secondaryCta,
  children,
}) {
  return (
    <div className="bg-[#f6f9f2]">
      <Section className="pt-12 md:pt-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="rounded-[2rem] bg-[#163f15] p-8 text-white shadow-xl md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#dcecdc]">{eyebrow}</p>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-[#eaf7e8]">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              {cta ? (
                <Button href={cta.href} className="bg-white text-[#163f15] hover:bg-[#f4f8f1]">
                  {cta.label}
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button href={secondaryCta.href} className="border border-white/40 bg-transparent text-white hover:bg-white/10">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#163f15]/10 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#163f15]">What we help with</p>
            <div className="mt-5 space-y-4">
              {bullets.map((item) => (
                <div key={item} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 md:grid-cols-2">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-[#163f15]/10 bg-white p-8 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{item.title}</h2>
              <p className="mt-3 text-slate-700">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {children}
    </div>
  );
}
