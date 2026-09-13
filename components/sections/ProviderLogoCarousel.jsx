'use client'

import Image from 'next/image'

const providerLogos = [
	{
		name: 'Aetna',
		src: '/insurance_logos/aetna-logo.png',
	},
	{
		name: 'Anthem',
		src: '/insurance_logos/anthem-logo.png',
		logoClassName: 'logo--boost',
	},
	{
		name: 'Cigna Healthcare',
		src: '/insurance_logos/cigna-healthcare-logo.png',
		logoClassName: 'logo--boost',
	},
	{
		name: 'Humana',
		src: '/insurance_logos/humana-logo.png',
		logoClassName: 'logo--boost',
	},
	{
		name: 'Mutual of Omaha',
		src: '/insurance_logos/mutual-of-omaha-logo.png',
		logoClassName: 'logo--boost',
	},
	{
		name: 'United Healthcare',
		src: '/insurance_logos/united-healthcare-logo.png',
		logoClassName: 'logo--boost',
	},
	{
		name: 'Wellcare',
		src: '/insurance_logos/wellcare-logo.png',
	},
	{
		name: 'Zing Health',
		src: '/insurance_logos/zing-health-logo.png',
	},
]

export default function ProviderLogoCarousel() {
	const carouselItems = [...providerLogos, ...providerLogos]

	return (
		<section className="py-14 md:py-16">
			<div className="max-w-7xl mx-auto px-4">
				<div className="mx-auto mb-8 max-w-5xl text-center">
					<p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1d2320]">Healthcare providers</p>
					<h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">Trusted carrier partners</h2>
					<p className="mt-4 text-base text-slate-600 md:text-lg">
						Browse our selection of Medicare providers featured across our Medicare guidance experience.
					</p>
				</div>

				<div className="logo-carousel rounded-4xl border border-[#d7e6d1] bg-white/90 px-4 py-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
					<div className="logo-carousel-track" aria-label="Healthcare provider logo carousel">
						{carouselItems.map((provider, index) => (
							<div key={`${provider.name}-${index}`} className="logo-carousel-item" aria-hidden={index >= providerLogos.length}>
								<div className="logo-carousel-card">
									<Image
										src={provider.src}
										alt={provider.name}
										width={420}
										height={140}
										unoptimized
										className={['logo-carousel-image', provider.logoClassName].filter(Boolean).join(' ')}
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
