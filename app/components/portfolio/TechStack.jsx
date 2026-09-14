'use client'
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
	Atom,
	Braces,
	Code2,
	Database,
	GitBranch,
	Github,
	Grid3x3,
	Layers,
	Palette,
	Wind,
} from 'lucide-react';
import Reveal from '../Reveal';
import SectionHeader from './SectionHeader';

const tech = [
	{ name: 'HTML', note: 'Semantic, accessible markup', icon: Code2 },
	{ name: 'CSS', note: 'Modern layouts & animation', icon: Palette },
	{ name: 'JavaScript', note: 'ES6+ interactive logic', icon: Braces },
	{ name: 'React', note: 'Component-driven UIs', icon: Atom },
	{ name: 'Next.js', note: 'SSR & full-stack React', icon: Layers },
	{ name: 'Tailwind CSS', note: 'Utility-first styling', icon: Wind },
	{ name: 'Bootstrap', note: 'Rapid responsive layouts', icon: Grid3x3 },
	{ name: 'MongoDB', note: 'Flexible data layer', icon: Database },
	{ name: 'Git', note: 'Clean version control', icon: GitBranch },
	{ name: 'GitHub', note: 'Collaboration & reviews', icon: FaGithub },
];

export default function TechStack() {
	return (
		<section id="skills" className="scroll-mt-20 border-y border-border bg-card/30">
			<div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
				<SectionHeader
					label="Tech Stack"
					title="My tech stack for building modern web applications"
					description="A modern tech stack focused on perfomance, scability, maintainability, and greate user experiences"
				/>
				<div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
					{tech.map((t, i) => (
						<Reveal key={t.name} delay={Math.min(i * 0.05, 0.3)}>
							<div className="group h-full rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/50">
								<div className="flex items-center justify-between">
									<t.icon className="h-6 w-6 text-primary" strokeWidth={1.75} aria-hidden="true" />
									<span className="font-mono text-[11px] text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
								</div>
								<h3 className="mt-4 font-display font-semibold">{t.name}</h3>
								<p className="mt-1 text-sm text-muted-foreground">{t.note}</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
