'use client'
import React from 'react';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import Reveal from '../Reveal';
import SectionHeader from './SectionHeader';

const projects = [
		{
		title: 'Restaurant website',
		url: 'https://restaurant-website-nine-gilt.vercel.app/',
		description:
			'A modern, full-stack restaurant website built with Next.js, React, Tailwind CSS, MongoDB, and NextAuth, designed to provide a seamless and engaging online dining experience.Customers can explore the complete menu by category, view detailed food information, add items to their cart, manage orders, make table reservations, and securely authenticate using email/password or Google. The website also includes a powerful admin dashboard for managing products, categories, users, orders, reservations, and other restaurant operations.'
,
		tags: ['Next.js', 'Tailwind CSS', 'MongoDB', 'NextAuth', '', 'Resend', 'React','Cloudinary'],
		image: 'project/restaurant.png',
	},
	{
		title: 'Learning platform',
		url: 'https://learning-platform-blue-five.vercel.app/',
		description:
			'A full-stack e-learning platform where students can discover, enroll in, and continue courses while teachers can publish courses, manage content, and track student enrollments. Built with Next.js, React, Tailwind CSS, MongoDB, NextAuth, Stripe, and Resend.'
,
		tags: ['Next.js', 'Tailwind CSS', 'MongoDB', 'NextAuth', 'Stripe', 'Resend', 'React'],
		image: 'project/learning-platform.png',
	},
	{
		title: 'Vegetables E-commerce',
		url: 'https://arman-c0der.github.io/vegetable-ecommerce/',
		description:
			'This project was developed as a frontend-focused e-commerce demo to showcase modern web development, responsive UI design, product management, cart functionality. It is not currently intended for real-world production orders or payments.',
		tags: ['HTML','Tailwind CSS','JavaScript'],
		image: 'project/vegetables.png',
		alt: 'screenshot of the Vegetables E-commerce website with a product listing and shopping cart',
	},
	{
		title: 'Hotel Booking',
		url: 'https://stayswift-omega.vercel.app/',
		description:
			'This project was created as a practical demonstration of building a real-world hotel reservation and booking platform, with a focus on user experience, responsive design, booking workflows, and payment processing.',
		tags: ['Next.js', 'Tailwind CSS', 'MongoDB', 'NextAuth', 'React'],
		image: 'project/hotel-booking.png',
		alt: 'Screenshot of the Hotel Booking website with a room availability calendar',
	},
	{
		title: 'Event Management',
		url: 'https://eventry-ashen.vercel.app/',
		description:
			'Eventry is an event discovery and participation platform where users can explore events, view event details and locations on a map, log in to their accounts, and register for their preferred events through a demo payment flow. The project includes event search, user authentication, event participation, map integration, and email confirmation features.',
		tags: ['tailwindcss', 'React','Next.js','MongoDB'],
		image: 'project/event.png',
		alt: 'Screenshot of the Event Management website with event listings and a map',
	},
];

export default function Projects() {
	return (
		<section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
			<div className="flex flex-wrap items-end justify-between gap-6">
				<SectionHeader
					label="Featured Projects"
					title="Selected work that shipped and performed"
					description="A few recent builds — each one designed, developed, and optimized end to end."
				/>
				<Reveal delay={0.1}>
					<a
						href="https://github.com/"
						target="_blank"
						rel="noreferrer"
						className="inline-flex h-11 items-center gap-2 rounded-md border border-border bg-card px-5 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary active:scale-[0.98]"
					>
						<FolderGit2 className="h-4 w-4" aria-hidden="true" />
						View All Projects
					</a>
				</Reveal>
			</div>
			<div className="mt-12 grid gap-6 md:grid-cols-2">
				{projects.map((p, i) => (
					<Reveal key={p.title} delay={Math.min(i * 0.08, 0.24)}>
						<article className="group h-full overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
							<div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
								<span className="h-2 w-2 rounded-full bg-destructive/60" aria-hidden="true" />
								<span className="h-2 w-2 rounded-full bg-amber-400/60" aria-hidden="true" />
								<span className="h-2 w-2 rounded-full bg-primary/60" aria-hidden="true" />
								<span className="ml-2 font-mono text-[11px] text-muted-foreground">{p.url}</span>
							</div>
							<div className="aspect-[3/2] overflow-hidden">
								<img
									src={p.image}
									alt={p.alt}
									loading="lazy"
									className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
								/>
							</div>
							<div className="p-5 sm:p-6">
								<div className="flex items-center justify-between gap-4">
									<h3 className="font-display text-lg font-semibold">{p.title}</h3>
									<a
										href={p.url}
										target="_blank"
										rel="noreferrer"
										aria-label={`Live demo of ${p.title} (placeholder link)`}
										className="inline-flex shrink-0 items-center gap-1 font-mono text-xs text-primary transition-colors hover:text-foreground"
									>
										Live Demo
										<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
									</a>
								</div>
								<p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
								<ul className="mt-4 flex flex-wrap gap-2" aria-label={`Technologies used in ${p.title}`}>
									{p.tags.map((t) => (
										<li
											key={t}
											className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
										>
											{t}
										</li>
									))}
								</ul>
							</div>
						</article>
					</Reveal>
				))}
			</div>
		</section>
	);
}
