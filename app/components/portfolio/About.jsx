'use client';
import React from 'react';
import { Check } from 'lucide-react';
import Reveal from '../Reveal';
import CountUp from '../CountUp';
import SectionHeader from './SectionHeader';

const stats = [
	{ value: 3, suffix: '+', label: 'Years of experience' },
	{ value: 20, suffix: '+', label: 'Projects built' },
	
];

const promises = [
	'Pixel-perfect implementation, from Figma or from scratch',
	'Performance budgets respected on every build',
	'Friendly, jargon-free communication at every step',
];

export default function About() {
	return (
		<section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
			<div className="grid items-center gap-14 lg:grid-cols-2">
				<Reveal className="relative order-2 lg:order-1">
					<div className="absolute -inset-3 rotate-2 rounded-2xl border border-primary/30" aria-hidden="true" />
					<div className="relative rounded-2xl border border-border bg-card p-8 sm:p-10">
						<p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">hello world — I&apos;m</p>
						<p className="mt-4 font-display text-7xl font-bold tracking-tight sm:text-8xl">
							AA<span className="text-primary">.</span>
						</p>
						<p className="mt-4 font-display text-xl font-semibold">Arman Arfat</p>
						<p className="mt-1 font-mono text-sm text-muted-foreground">frontend developer · react · next.js · tailwind</p>
						<div className="mt-8 flex items-end gap-2" aria-hidden="true">
							{[40, 65, 50, 80, 60, 95, 75].map((h, i) => (
								<span
									key={i}
									className={`w-full rounded-sm ${i === 5 ? 'bg-primary' : 'bg-secondary'}`}
									style={{ height: `${h}px` }}
								/>
							))}
						</div>
						<p className="mt-3 font-mono text-[11px] text-muted-foreground">commits per week — consistency compounds</p>
					</div>
					<div className="absolute -right-3 -top-5 rounded-full border border-border bg-background px-4 py-2 font-mono text-xs shadow-lg sm:-right-6">
						<span className="text-primary">●</span> open to freelance
					</div>
				</Reveal>
				<div className="order-1 lg:order-2">
					<SectionHeader
						label="About"
						title="A web developer who values your business success not just your codebase"
					/>
					<Reveal delay={0.1}>
						<p className="mt-6 leading-relaxed text-muted-foreground">
							I&apos;m Arman — a frontend web developer who partners with startups, agencies, and small businesses to turn
							ideas into fast, polished web experiences. My focus is simple: interfaces that look great, load quickly,
							and work flawlessly on every device.
						</p>
						<p className="mt-4 leading-relaxed text-muted-foreground">
							From the first sketch to the final deploy, I keep communication clear and code clean — so you always know
							where your project stands and exactly what you&apos;re getting.
						</p>
					</Reveal>
					<Reveal delay={0.18}>
						<ul className="mt-6 space-y-3">
							{promises.map((p) => (
								<li key={p} className="flex items-start gap-3 text-sm">
									<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15">
										<Check className="h-3 w-3 text-primary" aria-hidden="true" />
									</span>
									<span className="text-foreground/90">{p}</span>
								</li>
							))}
						</ul>
					</Reveal>
					<Reveal delay={0.26}>
						<dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
							{stats.map((s) => (
								<div key={s.label}>
									<dd className="font-display text-3xl font-bold text-primary sm:text-4xl">
										<CountUp value={s.value} suffix={s.suffix} />
									</dd>
									<dt className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</dt>
								</div>
							))}
						</dl>
					</Reveal>
				</div>
			</div>
		</section>
	);
}
