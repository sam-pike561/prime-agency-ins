'use client'

import { useState } from 'react'

const services = [
  {
    title: 'Medicare Advantage',
    description: 'Guided Assistance',
    href: '/services/medicare-guidance',
  },
]

const aboutLinks = [
  { title: 'Our Team', href: '/about/about' },
  { title: 'Careers', href: '/about/careers' },
  { title: 'Press', href: '/about/press' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavLinkClick = () => setMobileMenuOpen(false)

  return (
    <header className="navbar-shell">
      <div className="navbar-container">
        <a href="/" className="navbar-brand" aria-label="Elite Health home">
          <img src="/prime-navbar-logo.svg" alt="Elite Health" className="navbar-logo" />
        </a>

        <div className="navbar-right">
          <nav className="navbar-nav" aria-label="Primary navigation">
            <details className="nav-dropdown">
              <summary className="nav-summary">
                <span>Services</span>
                <svg viewBox="0 0 24 24" fill="none" className="dropdown-icon" aria-hidden="true">
                  <path d="M7.5 10.5L12 15L16.5 10.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </summary>
              <div className="dropdown-menu">
                <div className="dropdown-card">
                  <div className="dropdown-grid dropdown-grid-single">
                    {services.map((item) => (
                      <a key={item.title} href={item.href} className="dropdown-item" onClick={handleNavLinkClick}>
                        <div className="dropdown-item-copy">
                          <div className="dropdown-item-title">{item.title}</div>
                          {item.description ? <div className="dropdown-item-description">{item.description}</div> : null}
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="dropdown-footer">
                    <div>
                      <div className="dropdown-footer-title">We&apos;re Here To Help</div>
                      <div className="dropdown-footer-copy">Insurance made easy.</div>
                    </div>
                    <div className="dropdown-footer-actions">
                      <a href="/about/press" className="button-secondary" onClick={handleNavLinkClick}>
                        Our Press
                      </a>
                      <a href="tel:18885922128" className="button-primary" onClick={handleNavLinkClick}>
                        Call Today - 1(888) 592-2128
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </details>

            <details className="nav-dropdown">
              <summary className="nav-summary">
                <span>About Us</span>
                <svg viewBox="0 0 24 24" fill="none" className="dropdown-icon" aria-hidden="true">
                  <path d="M7.5 10.5L12 15L16.5 10.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </summary>
              <div className="dropdown-menu dropdown-menu-small">
                <div className="dropdown-card">
                  <div className="dropdown-title">About Us</div>
                  <div className="dropdown-stack">
                    {aboutLinks.map((item) => (
                      <a key={item.title} href={item.href} className="dropdown-item dropdown-item-inline" onClick={handleNavLinkClick}>
                        <div className="dropdown-item-title">{item.title}</div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </details>

            <a href="/about/careers" className="nav-link" onClick={handleNavLinkClick}>
              Careers
            </a>
            <a href="/contact" className="nav-link" onClick={handleNavLinkClick}>
              Contact Us
            </a>
          </nav>

          <button
            type="button"
            className="mobile-nav-toggle"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className="nav-actions">
          <a href="tel:18885922128" className="nav-cta">
            Call Today - 1(888) 592-2128
          </a>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div id="mobile-navigation" className="mobile-nav-panel">
          <div className="mobile-nav-panel-inner">
            <a href="/" className="mobile-nav-link" onClick={handleNavLinkClick}>
              Home
            </a>
            {services.map((item) => (
              <a key={item.title} href={item.href} className="mobile-nav-link" onClick={handleNavLinkClick}>
                {item.title}
              </a>
            ))}
            <div className="mobile-nav-group">
              <div className="mobile-nav-group-title">About Us</div>
              {aboutLinks.map((item) => (
                <a key={item.title} href={item.href} className="mobile-nav-link mobile-nav-subitem" onClick={handleNavLinkClick}>
                  {item.title}
                </a>
              ))}
            </div>
            <a href="/about/careers" className="mobile-nav-link" onClick={handleNavLinkClick}>
              Careers
            </a>
            <a href="/contact" className="mobile-nav-link" onClick={handleNavLinkClick}>
              Contact Us
            </a>
            <a href="tel:18885922128" className="mobile-nav-cta" onClick={handleNavLinkClick}>
              Call Today - 1(888) 592-2128
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
