'use client'
import React from 'react';
import Reveal from '../Reveal';
import SectionHeader from './SectionHeader';

const reasons = [
	{
		title: 'Performance-First Builds',
		description: 'Every project ships optimized — lean bundles, fast loads, and smooth interactions that keep users around.',
	},
	{
		title: 'Responsive by Default',
		description: 'Your site will look and work beautifully on every screen size, from small phones to wide desktops.',
	},
	{
		title: 'Clean, Maintainable Code',
		description: 'Readable, well-structured code that is easy to extend — for you, or for any developer who picks it up next.',
	},
	{
		title: 'Clear Communication',
		description: 'Regular updates, honest timelines, and plain-language answers. You will never wonder where things stand.',
	},
	{
		title: 'Reliable Delivery',
		description: 'Deadlines matter. I plan carefully, flag risks early, and deliver what was promised, when it was promised.',
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
