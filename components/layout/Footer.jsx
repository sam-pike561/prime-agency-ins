export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-cta">
          <div className="site-footer-cta-copy">
            <h2 className="site-footer-cta-title">Ready to find your perfect Medicare plan?</h2>
            <p className="site-footer-cta-text">
              Our licensed advisors are standing by to help you at no cost.
            </p>
          </div>

          <div className="site-footer-cta-actions">
            <a href="tel:18885922128" className="site-footer-primary-button">
              Call 1 (888) 592-2128
            </a>
            <a href="/contact" className="site-footer-secondary-button">
              Send a Message
            </a>
          </div>

          <img src="/prime-navbar-logo.svg" alt="Prime Agency" className="site-footer-mini-logo" />
        </div>

        <div className="site-footer-links-grid">
          <section className="site-footer-column">
            <h3 className="site-footer-heading">Our Services</h3>
            <a href="/medicare-guidance">Medicare Guidance</a>
            <a href="/services">Medicare Plans</a>
            <a href="/services/medicare-guidance">Prescription Drug Coverage</a>
            <a href="/about">Medicare Supplement</a>
          </section>

          <section className="site-footer-column">
            <h3 className="site-footer-heading">Company</h3>
            <a href="/about">About Us</a>
            <a href="/careers">Careers</a>
            <a href="/contact">Contact Us</a>
            <a href="/contact">Privacy Policy</a>
            <a href="/contact">Terms of Service</a>
          </section>

          <section className="site-footer-column">
            <h3 className="site-footer-heading">Contact Us</h3>
            <a href="tel:18885922128" className="site-footer-phone-link">1 (888) 592-2128 | TTY 711</a>
            <a href="mailto:support@primeagency.com">support@primeagency.com</a>
            <p>Mon - Fri, 9 a.m. - 6 p.m. EST</p>
            <p>Licensed advisors available by phone</p>
          </section>
        </div>

        <div className="site-footer-meta">
          <div className="site-footer-policy-links">
            <a href="/contact">Privacy Policy</a>
            <a href="/contact">Terms of Service</a>
            <a href="/contact">SMS Terms &amp; Conditions</a>
          </div>
          <p className="site-footer-copyright">© 2026 Prime Agency • All Rights Reserved</p>
          <p className="site-footer-disclaimer">
            Prime Agency helps Medicare beneficiaries review and enroll in available coverage options. Plan availability,
            costs, and benefits vary by carrier and location. Limitations and exclusions may apply.
          </p>
        </div>
      </div>
    </footer>
  )
}
