import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/PageLayout";
import InfoPage from "@/components/common/InfoPage";

const serviceContent = {
  "medicare-guidance": {
    eyebrow: "Medicare guidance",
    title: "A clear path through Medicare enrollment",
    intro:
      "We help you understand the basics of Medicare, eligibility, and plan choices so your decision feels manageable instead of overwhelming.",
    bullets: [
      "Review Original Medicare, Advantage, and Supplement options",
      "Get help with enrollments and important deadlines",
      "Talk through benefits, out-of-pocket costs, and plan fit",
    ],
    highlights: [
      {
        title: "For first-time beneficiaries",
        body: "We simplify the enrollment process and explain which options may fit your needs best.",
      },
      {
        title: "For current members",
        body: "We help compare current coverage against new options to make sure your plan still works for you.",
      },
    ],
    cta: { label: "Call today", href: "tel:18885922128" },
  },
  "affordable-health-insurance": {
    eyebrow: "Affordable coverage",
    title: "Coverage choices that balance protection and budget",
    intro:
      "Prime Agency explores affordable health insurance solutions so you can protect your household without overpaying for features you do not need.",
    bullets: [
      "Compare plans with clear cost explanations",
      "Review network access and prescription drug coverage",
      "Get honest guidance about what fits your financial goals",
    ],
    highlights: [
      {
        title: "Support for families",
        body: "We help families compare options that align with both care needs and monthly budgets.",
      },
      {
        title: "Simple next steps",
        body: "Our team walks through the process with patience so you know what to expect from start to finish.",
      },
    ],
    cta: { label: "Request guidance", href: "/contact" },
  },
  "dental-vision": {
    eyebrow: "Dental and vision",
    title: "Preventive care that supports everyday wellness",
    intro:
      "We can help you evaluate dental and vision options that cover routine visits, exams, eyewear, and other everyday needs.",
    bullets: [
      "Explore coverage that supports exams and preventive care",
      "Review annual allowances and out-of-pocket costs",
      "Find a balance between affordability and everyday value",
    ],
    highlights: [
      {
        title: "Routine care support",
        body: "Good coverage can make it easier to stay on top of regular checkups and screenings.",
      },
      {
        title: "Flexible options",
        body: "We help you compare plans so you can choose what makes the most sense for your household.",
      },
    ],
    cta: { label: "Compare options", href: "/contact" },
  },
  "life-insurance": {
    eyebrow: "Life insurance",
    title: "Protection plans for the people who matter most",
    intro:
      "Life insurance can be an important part of a solid family plan, and we help you understand your choices without overcomplicating the process.",
    bullets: [
      "Review term and permanent life insurance options",
      "Discuss coverage levels that align with your goals",
      "Get clear explanations of premiums and beneficiaries",
    ],
    highlights: [
      {
        title: "Family-focused planning",
        body: "Coverage can help provide stability for loved ones during unexpected events.",
      },
      {
        title: "Straightforward guidance",
        body: "We make the process easy to understand so you can make deliberate decisions with confidence.",
      },
    ],
    cta: { label: "Talk with us", href: "/contact" },
  },
  "open-enrollment": {
    eyebrow: "Open enrollment",
    title: "Timing matters when reviewing your coverage",
    intro:
      "Open enrollment is the yearly window when many people review Medicare and health coverage options. We help you approach it with clarity and confidence.",
    bullets: [
      "Understand enrollment deadlines and important dates",
      "Compare what is changing from year to year",
      "Make sure your current plan still supports your needs",
    ],
    highlights: [
      {
        title: "Avoid missed deadlines",
        body: "We help you stay organized so you do not miss critical enrollment timing.",
      },
      {
        title: "Plan for next year",
        body: "We review your current coverage and discuss the right options for the upcoming year.",
      },
    ],
    cta: { label: "Schedule a review", href: "/contact" },
  },
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const content = serviceContent[slug as keyof typeof serviceContent];

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
