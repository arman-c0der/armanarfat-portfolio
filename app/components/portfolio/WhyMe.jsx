'use client'
import React from 'react';
import Reveal from '../Reveal';
import SectionHeader from './SectionHeader';

const reasons = [
	{
		title: 'Built Around Your Business Goals',
		description: 'Every website is designed around your business needs — helping customers discover your services, understand your value, and take the next step.',
	},
	{
		title: 'Turn Visitors Into Customers',
		description: 'Clear navigation, engaging layouts, and strategic calls to action make it easier for visitors to explore your offerings, make reservations, or get in touch..',
	},
	{
		title: 'Build Trust From the First Click',
		description: 'A professional online presence helps your business make a strong first impression, showcase what makes you different, and give potential customers more confidence.',
	},
	{
		title: 'Ready to Grow With Your Business',
		description: 'From new services and features to more advanced functionality, your website can evolve as your business needs change.',
	},
	{
		title: 'A Long-Term Development Partner',
		description: 'Your business doesn\'t stand still, and your website shouldn\'t either. I focus on clear communication, reliable support, and practical improvements as your needs evolve.',
	},
];

export default function WhyMe() {
	return (
		<section id="why-me" className="border-y border-border bg-card/30">
			<div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
				<SectionHeader
					label="Why Work With Me"
					title="The things clients consistently come back for"
				/>
				<div className="mt-12 divide-y divide-border border-y border-border">
					{reasons.map((r, i) => (
						<Reveal key={r.title} delay={Math.min(i * 0.06, 0.24)}>
							<div className="group grid gap-2 py-7 transition-colors sm:grid-cols-[72px_1fr] md:grid-cols-[96px_1fr_1.4fr] md:items-baseline md:gap-8">
								<span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, '0')}</span>
								<h3 className="font-display text-xl font-semibold transition-colors group-hover:text-primary">
									{r.title}
								</h3>
								<p className="text-sm leading-relaxed text-muted-foreground sm:col-start-2 md:col-start-auto">
									{r.description}
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
