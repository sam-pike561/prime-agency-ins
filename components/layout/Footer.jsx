export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <img src="/prime-navbar-logo.svg" alt="Prime Agency Insurance" className="site-footer-logo" />
          <p className="site-footer-copy">Licensed insurance guidance for Medicare and health coverage decisions.</p>
        </div>

        <div className="site-footer-grid">
          <section className="site-footer-card">
            <h3 className="site-footer-heading">Find Us</h3>
            <p>Nationwide Phone Support</p>
            <p>Mon - Fri, 9 a.m. - 6 p.m. EST</p>
          </section>

          <section className="site-footer-card">
            <h3 className="site-footer-heading">Let&apos;s Talk</h3>
            <a href="/contact" className="site-footer-contact-button">
              Contact Us Today
            </a>
          </section>

          <section className="site-footer-card">
            <h3 className="site-footer-heading">Get In Touch</h3>
            <a href="tel:18885922128" className="site-footer-phone-link">
              1-(888) 592-2128
            </a>
            <p>Licensed advisors available by phone</p>
          </section>
        </div>

        <div className="site-footer-meta">
          <div className="site-footer-policy-links">
            <a href="/contact">Privacy Policy</a>
            <a href="/contact">Terms of Service</a>
            <a href="/contact">SMS Terms &amp; Conditions</a>
          </div>
          <p className="site-footer-copyright">© 2026 Prime Agency Insurance • All Rights Reserved</p>
          <p className="site-footer-disclaimer">
            Prime Agency Insurance helps Medicare beneficiaries review and enroll in available coverage options. Plan availability,
            costs, and benefits vary by carrier and location. Limitations and exclusions may apply.
          </p>
        </div>
      </div>
    </footer>
  )
}
