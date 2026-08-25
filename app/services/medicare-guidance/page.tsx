import PageLayout from '@/components/layout/PageLayout'

const accordionItems = [
  {
    title: 'Medicare Part A & B',
    copy: [
      'Original Medicare has two parts: Medicare Part A and Medicare Part B.',
      'Part A and Part B provide hospital and medical coverage for individuals 65 years of age and older.',
      'Medicare customers can see any doctor in the country that accepts Medicare.',
      'You have a seven-month window when you turn 65 called your Initial Enrollment Period (IEP) to enroll in Original Medicare — the month of your birthday plus three months before and after your birthday month. If you miss your IEP, you’ll need to wait for the Annual Enrollment Period.',
    ],
  },
  {
    title: 'Medicare Advantage',
    copy: [
      'Medicare Advantage (Part C) is a form of private health insurance that adheres to Medicare guidelines.',
      'It combines coverage from both Part A and B, along with additional health and wellness benefits, often incorporating a Part D prescription drug plan.',
      'Whether you are entering the realm of Medicare for the first time or contemplating a switch from your current plan, our aim is to assist you in selecting a plan that aligns with your lifestyle and fits your budget.',
    ],
  },
  {
    title: 'Medicare Part D',
    copy: [
      'Medicare Part D is a federally regulated prescription drug insurance program managed by private insurance companies.',
      'In simpler terms, it serves as insurance for your prescription medication needs. You have the option to enroll in a standalone Part D plan to complement your Part A and Part B benefits.',
      'Alternatively, you can opt for a Medicare Advantage (Part C) plan, which integrates Parts A, B, and D.',
      'To acquire a Part D plan, you can make a purchase from a private insurance company. This plan grants you access to the company’s pharmacy network, and you will typically pay a copay for your prescriptions.',
    ],
  },
  {
    title: 'Supplement Plan',
    copy: [
      'Enrollees in Original Medicare (Part A and Part B) are still responsible for copayments, deductibles, and coinsurance.',
      'Medicare Supplement Insurance, also known as Medigap policies, comes into play to assist in covering some of the expenses that Original Medicare does not.',
      'Without adequate coverage, frequent visits to hospitals or doctors can lead to substantial costs.',
      'Medicare Supplement plans address expenses that Original Medicare does not cover. For instance, a Medigap plan could offset a 20% coinsurance bill associated with a doctor visit. All Medicare Supplemental insurance plans are mandated to cover standard services, and specific plans may offer additional benefits.',
    ],
  },
  {
    title: 'New to Medicare',
    copy: [
      'Were you aware that you have a seven-month window surrounding your 65th birthday month for enrollment?',
      'Indeed, it’s known as your Initial Enrollment Period, encompassing the month of your 65th birthday, the three months before, and the three months after your birthday month.',
      'If your birthday falls on the first of the month, the period extends to the month of your 65th birthday, the four months before, and the two months after your birthday month.',
      'Recognizing that life events can impact timing, both you and Medicare understand. In the event you miss the opportunity to enroll during your Initial Enrollment Period, there’s a General Enrollment Period from January 1 to March 31, allowing for enrollment with coverage starting on July 1.',
    ],
    defaultOpen: true,
  },
]

export default function MedicareGuidancePage() {
  return (
    <PageLayout>
      <section className="medicare-guidance-hero">
        <div className="medicare-guidance-shell">
          <div className="medicare-guidance-copy">
            <div className="medicare-eyebrow">Medicare Advantage</div>
            <h1>Medicare Guidance</h1>
            <p>
              Improve your well-being with better health decisions. We guide you and help find the right Medicare plan
              for you — it’s simple!
            </p>
            <div className="medicare-guidance-actions">
              <a href="tel:18885922128" className="medicare-cta-button">
                Call Us Today 1 (888) 592-2128
              </a>
            </div>
          </div>

          <div className="medicare-guidance-visual" aria-label="Medicare guidance illustration">
            <div className="medicare-card-panel">
              <div className="medicare-card-header">Medicare Overview</div>
              <div className="medicare-card-badge">Coverage for 65+</div>
              <div className="medicare-card-grid">
                <div>
                  <span>Part A</span>
                  <strong>Hospital</strong>
                </div>
                <div>
                  <span>Part B</span>
                  <strong>Medical</strong>
                </div>
                <div>
                  <span>Part C</span>
                  <strong>Advantage</strong>
                </div>
                <div>
                  <span>Part D</span>
                  <strong>Rx</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="medicare-overview-strip">
        <div className="medicare-overview-inner">
          <div>
            <h2>Medicare Overview</h2>
            <p>
              As the number of Medicare enrollees in the country surpasses 60 million, it’s likely that either you or
              someone you know is currently benefiting from Medicare. If you or a loved one is approaching eligibility
              for Medicare and has questions, rest assured, we have the answers you need.
            </p>
          </div>
          <a href="tel:18885922128" className="medicare-overview-button">
            CALL TODAY <br /> 1 (888) 592-2128
          </a>
        </div>
      </section>

      <section className="medicare-accordion-section">
        <div className="medicare-accordion-wrap">
          <div className="medicare-accordion-label">select an option:</div>

          <div className="medicare-accordion-list">
            {accordionItems.map((item) => (
              <details key={item.title} className="medicare-accordion-card" open={item.defaultOpen}>
                <summary>{item.title}</summary>
                <div className="medicare-accordion-body">
                  {item.copy.map((line) => (
                    <p key={`${item.title}-${line}`}>{line}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
