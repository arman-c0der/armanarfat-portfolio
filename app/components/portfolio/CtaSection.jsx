'use client'
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import Reveal from '../Reveal';

export default function CtaSection() {
	return (
		<section id="contact" className="relative scroll-mt-20 overflow-hidden">
			<div
				className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_100%,black,transparent)]"
				aria-hidden="true"
			/>
			<div
				className="absolute -bottom-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
				aria-hidden="true"
			/>
			<div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
				<Reveal>
					<p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-primary">Contact</p>
					<h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
						Have a project in mind?
						<span className="mt-2 block text-primary">Let&apos;s build it together.</span>
					</h2>
				</Reveal>
				<Reveal delay={0.1}>
					<p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
						Tell me about your idea — even if it&apos;s just a rough sketch. You&apos;ll get honest feedback, a clear
						plan, and a reply within 24 hours.
					</p>
				</Reveal>
				<Reveal delay={0.18}>
					<div className="mt-9 flex flex-wrap items-center justify-center gap-3">
						<a
							href="mailto:hello@armanarfat.dev"
							className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-7 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-px active:scale-[0.98]"
						>
							<Mail className="h-4 w-4" aria-hidden="true" />
							Start a Project
						</a>
						<a
							href="#projects"
							className="inline-flex h-12 items-center gap-2 rounded-md border border-border bg-card px-7 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary active:scale-[0.98]"
						>
							View My Work
							<ArrowRight className="h-4 w-4" aria-hidden="true" />
						</a>
					</div>
				</Reveal>
				<Reveal delay={0.26}>
					<p className="mt-8 font-mono text-xs text-muted-foreground">
						<span className="text-primary">$</span> hello@armanarfat.dev — no forms, no friction
					</p>
				</Reveal>
			</div>
		</section>
	);
}
