'use client'

import { useEffect, useState } from 'react'

const BANNER_STORAGE_KEY = 'prime-agency-banner-dismissed'

export default function BottomBanner() {
  const [isVisible, setIsVisible] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const isDismissed = window.sessionStorage.getItem(BANNER_STORAGE_KEY) === 'true'
    setIsVisible(!isDismissed)
  }, [])

  useEffect(() => {
    if (typeof document === 'undefined') return

    const offset = isVisible ? '96px' : '0px'
    document.documentElement.style.setProperty('--bottom-banner-offset', offset)
  }, [isVisible])

  const handleClose = () => {
    setIsVisible(false)
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem(BANNER_STORAGE_KEY, 'true')
    }
  }

  if (isVisible === null || !isVisible) {
    return null
  }

  return (
    <section className="bottom-banner" aria-label="Site banner">
      <div className="bottom-banner-inner">
        <button
          type="button"
          className="bottom-banner-close"
          aria-label="Close banner"
          onClick={handleClose}
        >
          ×
        </button>

        <div className="bottom-banner-copy">
          <p className="bottom-banner-eyebrow">Need coverage help?</p>
          <h2 className="bottom-banner-title">Talk with a licensed advisor today.</h2>
          <p className="bottom-banner-text">Compare Medicare options and get clear guidance with no pressure.</p>
        </div>

        <div className="bottom-banner-actions">
          <a href="/contact" className="bottom-banner-button bottom-banner-button-secondary">
            Contact Us
          </a>
          <a href="tel:18885922128" className="bottom-banner-button bottom-banner-button-primary">
            Call 1 (888) 592-2128
          </a>
        </div>
      </div>
    </section>
  )
}