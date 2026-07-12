import PageLayout from '@/components/layout/PageLayout'
import InfoPage from '@/components/common/InfoPage'

export default function AboutOverviewPage() {
  return (
    <PageLayout>
      <InfoPage
        eyebrow="About Prime Agency"
        title="Helping families navigate Medicare with clear, compassionate guidance"
        intro="Prime Agency specializes in helping individuals and families across the country understand Medicare Advantage, Medicare Supplement, Prescription Drug, and Hospital Indemnity plan options."
        bullets={[
          'Licensed advisors who explain the details without pressure',
          'Support for new beneficiaries and experienced members alike',
          'A focus on education, clarity, and informed decisions',
        ]}
        highlights={[
          {
            title: 'What makes us different',
            body: 'We take a thoughtful, no-pressure approach so clients can make informed decisions with confidence.',
          },
          {
            title: 'A national approach',
            body: 'We work with clients across the country and tailor guidance to their specific needs and goals.',
          },
        ]}
        cta={{ label: 'Call for help', href: 'tel:18885922128' }}
        secondaryCta={{ label: 'Meet the team', href: '/about/about' }}
      />
    </PageLayout>
  )
}
