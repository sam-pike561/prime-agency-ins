import PageLayout from "@/components/layout/PageLayout";
import InfoPage from "@/components/common/InfoPage";

const services = [
  {
    title: "Medicare Guidance",
    body: "We explain your choices clearly so you can move forward with confidence.",
  },
  {
    title: "Affordable Coverage",
    body: "We compare plan options that fit your budget and healthcare needs.",
  },
  {
    title: "Dental & Vision",
    body: "Helpful add-ons for routine care, eyewear, and preventive visits.",
  },
  {
    title: "Life Insurance",
    body: "Protection options that support your family and long-term goals.",
  },
];

export default function ServicesOverviewPage() {
  return (
    <PageLayout>
      <InfoPage
        eyebrow="Coverage options"
        title="Medicare plans and protection built around your life"
        intro="Prime Agency helps you review Medicare-related options and supplemental coverage with clear guidance from a licensed advisor."
        bullets={[
          "Compare Medicare Advantage, Medigap, Part D, and hospital coverage options",
          "Understand enrollment timelines and deadlines",
          "Get personalized support with no-pressure recommendations",
        ]}
        highlights={services.map((service) => ({ title: service.title, body: service.body }))}
        cta={{ label: "Talk with an agent", href: "tel:18776071446" }}
        secondaryCta={{ label: "View Medicare guidance", href: "/services/medicare-guidance" }}
      />
    </PageLayout>
  );
}
