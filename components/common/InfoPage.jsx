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
    <div className="bg-[rgb(240,237,224)]">
      <Section className="pt-12 md:pt-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="rounded-[2rem] bg-[rgb(5,8,5)] p-8 text-white shadow-xl md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(240,237,224)]">{eyebrow}</p>
            <h1 className="mt-4 text-4xl font-bold md:text-5xl">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-[rgb(240,237,224)]">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              {cta ? (
                <Button href={cta.href} className="bg-white text-[rgb(5,8,5)] hover:bg-[rgb(240,237,224)]">
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

          <div className="rounded-[2rem] border border-[rgb(106,127,138)]/20 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[rgb(5,8,5)]">What we help with</p>
            <div className="mt-5 space-y-4">
              {bullets.map((item) => (
                <div key={item} className="rounded-xl border border-[rgb(106,127,138)]/10 bg-[rgb(240,237,224)] p-4">
                  <p className="text-[rgb(5,8,5)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-8 md:grid-cols-2">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-[1.5rem] border border-[#1d2320]/10 bg-white p-8 shadow-sm">
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
