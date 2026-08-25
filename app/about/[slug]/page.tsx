import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/PageLayout";
import InfoPage from "@/components/common/InfoPage";

const aboutContent = {
  about: {
    eyebrow: "About Prime Agency",
    title: "Helping families navigate Medicare with clear, compassionate guidance",
    intro:
      "Prime Agency specializes in helping individuals and families across the country understand Medicare Advantage, Medicare Supplement, Prescription Drug, and Hospital Indemnity plan options.",
    bullets: [
      "Licensed advisors who explain the details without pressure",
      "Support for new beneficiaries and experienced members alike",
      "A focus on education, clarity, and informed decisions",
    ],
    highlights: [
      {
        title: "What makes us different",
        body: "We take a thoughtful, no-pressure approach so clients can make informed decisions with confidence.",
      },
      {
        title: "A national approach",
        body: "We work with clients across the country and tailor guidance to their specific needs and goals.",
      },
    ],
    cta: { label: "Call for help", href: "tel:18885922128" },
  },
  careers: {
    eyebrow: "Careers",
    title: "Join a team that values service, clarity, and community",
    intro:
      "We are always interested in connecting with people who enjoy helping others navigate important insurance decisions and build long-term relationships.",
    bullets: [
      "Supportive, people-first environment",
      "Opportunities to grow in insurance and client education",
      "Work that matters to individuals and families",
    ],
    highlights: [
      {
        title: "Why join us",
        body: "Our team is built around service, professionalism, and a commitment to making complex information easier to understand.",
      },
      {
        title: "How to connect",
        body: "If you are interested in learning more, reach out to our team through the contact page.",
      },
    ],
    cta: { label: "Contact our team", href: "/contact" },
  },
};

export default async function AboutPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = aboutContent[slug as keyof typeof aboutContent];

  if (!content) {
    notFound();
  }

  return (
    <PageLayout>
      <InfoPage
        eyebrow={content.eyebrow}
        title={content.title}
        intro={content.intro}
        bullets={content.bullets}
        highlights={content.highlights}
        cta={content.cta}
      />
    </PageLayout>
  );
}
