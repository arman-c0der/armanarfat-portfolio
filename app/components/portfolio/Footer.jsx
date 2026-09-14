'use client'
import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const nav = [
	{ label: 'Home', href: '#home' },
	{ label: 'About', href: '#about' },
	{ label: 'Projects', href: '#projects' },
	{ label: 'Skills', href: '#skills' },
	{ label: 'Contact', href: '#contact' },
];

const socials = [
	{ label: 'GitHub (placeholder)', href: 'https://github.com/arman-c0der', icon: FaGithub },
	{ label: 'LinkedIn (placeholder)', href: 'https://www.linkedin.com/in/arman-c0der/', icon: FaLinkedin },
	{ label: 'Twitter (placeholder)', href: 'https://twitter.com/', icon: FaTwitter },
	{ label: 'Email Arman', href: 'arman.arfat24@gmail.com', icon: Mail },
];

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="border-t border-border bg-card/40">
			<div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
				<div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
					<div>
						<p className="font-mono text-sm font-semibold">
							<span className="text-primary">~/</span>arman.arfat
						</p>
						<p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
							Frontend developer building modern, responsive, high-performance websites and web applications for
							clients worldwide.
						</p>
					</div>
					<nav aria-label="Footer">
						<p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Navigate</p>
						<ul className="mt-4 space-y-2.5">
							{nav.map((l) => (
								<li key={l.href}>
									<a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
										{l.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
					<div>
						<p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">Connect</p>
						<div className="mt-4 flex gap-3">
							{socials.map((s) => (
								<a
									key={s.label}
									href={s.href}
									target={s.href.startsWith('http') ? '_blank' : undefined}
									rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
									aria-label={s.label}
									className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
								>
									<s.icon className="h-4 w-4" aria-hidden="true" />
								</a>
							))}
						</div>
						<p className="mt-4 font-mono text-xs text-muted-foreground">hello@armanarfat.dev</p>
					</div>
				</div>
				<div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
					<p>© {year} Arman Arfat. All rights reserved.</p>
					<p className="font-mono">Designed &amp; built with React and Tailwind CSS</p>
				</div>
			</div>
		</footer>
	);
}
