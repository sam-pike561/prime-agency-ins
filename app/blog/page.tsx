import PageLayout from "@/components/layout/PageLayout";
import InfoPage from "@/components/common/InfoPage";

export default function BlogPage() {
  return (
    <PageLayout>
      <InfoPage
        eyebrow="News & education"
        title="Helpful Medicare education and planning resources"
        intro="We share practical information that helps consumers understand their options, plan ahead, and make confident decisions about coverage."
        bullets={[
          "Medicare basics and enrollment questions",
          "Plan comparisons and annual review tips",
          "Guidance for families and new beneficiaries",
        ]}
        highlights={[
          {
            title: "Stay informed",
            body: "Education is one of the most helpful tools for reducing confusion during enrollment season.",
          },
          {
            title: "Questions welcome",
            body: "If you have a specific Medicare question, our team is happy to help you work through it directly.",
          },
        ]}
        cta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "Call now", href: "tel:18885922128" }}
      />
    </PageLayout>
  );
}
