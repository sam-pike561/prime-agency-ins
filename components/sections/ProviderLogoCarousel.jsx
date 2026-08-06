'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const providerLogos = [
	{
		name: 'Humana',
		src: '/insurance_logos/humana-logo.png',
	},
	{
		name: 'United Healthcare',
		src: '/insurance_logos/united-healthcare-logo.png',
	},
	{
		name: 'Anthem',
		src: '/insurance_logos/anthem-logo.png',
	},
	{
		name: 'Cigna Healthcare',
		src: '/insurance_logos/cigna-healthcare-logo.png',
	},
	{
		name: 'Mutual of Omaha',
		src: '/insurance_logos/mutual-of-omaha-logo.png',
	},
]

export default function ProviderLogoCarousel() {
	const carouselItems = [...providerLogos, ...providerLogos]
	const trackRef = useRef(null)

	useEffect(() => {
		const track = trackRef.current

		if (!track) {
			return undefined
		}

		let rafId = 0
		let lastTimestamp = 0

		const animate = (timestamp) => {
			if (!lastTimestamp) {
				lastTimestamp = timestamp
			}

			const elapsed = timestamp - lastTimestamp
			if (elapsed >= 16) {
				track.scrollLeft += 0.6
				lastTimestamp = timestamp

				if (track.scrollLeft >= track.scrollWidth / 2) {
					track.scrollLeft = 0
				}
			}

			rafId = window.requestAnimationFrame(animate)
		}

		rafId = window.requestAnimationFrame(animate)

		return () => {
			window.cancelAnimationFrame(rafId)
		}
	}, [])

	return (
		<section className="py-14 md:py-16">
			<div className="max-w-7xl mx-auto px-4">
				<div className="mx-auto mb-8 max-w-5xl text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#163f15]">Healthcare providers</p>
					<h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">Trusted carrier partners</h2>
					<p className="mt-4 text-base text-slate-600 md:text-lg">
						Browse our selection of Medicare providers featured across our Medicare guidance experience.
					</p>
				</div>

				<div className="logo-carousel rounded-4xl border border-[#d7e6d1] bg-white/90 px-4 py-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
					<div ref={trackRef} className="logo-carousel-track" aria-label="Healthcare provider logo carousel">
						{carouselItems.map((provider, index) => (
							<div key={`${provider.name}-${index}`} className="logo-carousel-item" aria-hidden={index >= providerLogos.length}>
								<div className="logo-carousel-card">
									<Image
										src={provider.src}
										alt={provider.name}
										width={160}
										height={52}
										className="logo-carousel-image"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
