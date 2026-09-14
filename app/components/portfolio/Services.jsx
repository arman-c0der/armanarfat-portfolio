'use client'
import React from 'react';
import { AppWindow, Gauge, Globe, MonitorSmartphone, Plug, Wrench } from 'lucide-react';
import Reveal from '../Reveal';
import SectionHeader from './SectionHeader';

const services = [
	{
		icon: Globe,
		title: 'Custom Website Development',
		description: 'Fast, SEO-friendly marketing sites and landing pages built from scratch and tailored to your brand.',
	},
	{
		icon: AppWindow,
		title: 'Web Application Development',
		description: 'Interactive dashboards, portals, and tools built with React and Next.js that scale with your business.',
	},
	{
		icon: MonitorSmartphone,
		title: 'Responsive UI Implementation',
		description: 'Pixel-perfect interfaces that adapt beautifully to phones, tablets, and widescreen desktops.',
	},
	{
		icon: Gauge,
		title: 'Performance Optimization',
		description: 'Audits and fixes that cut load times, improve Core Web Vitals, and keep visitors engaged.',
	},
	{
		icon: Plug,
		title: 'API & Third-Party Integrations',
		description: 'Connecting your site to the services you rely on — payments, CMSs, analytics, and more.',
	},
	{
		icon: Wrench,
		title: 'Ongoing Support & Maintenance',
		description: 'Dependable updates, improvements, and fixes long after launch day — so your site never goes stale.',
	},
];

export default function Services() {
	return (
		<section id="services" className="border-y border-border bg-card/30">
			<div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
				<SectionHeader
					label="Services"
					title="What I can deliver for your business"
					description="Whether you need a full product built from zero or an existing site brought up to speed, every engagement is scoped clearly and delivered end to end."
				/>
				<div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{services.map((s, i) => (
						<Reveal key={s.title} delay={Math.min(i * 0.06, 0.3)}>
							<div className="group h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
								<div className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-secondary/60 transition-colors group-hover:border-primary/40">
									<s.icon className="h-5 w-5 text-primary" strokeWidth={1.75} aria-hidden="true" />
								</div>
								<h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
