import React from 'react';
import Reveal from '../Reveal';

export default function SectionHeader({ label, title, description, align = 'left', className = '' }) {
	return (
		<Reveal className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
			<p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-primary">{label}</p>
			<h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
			{description && <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p>}
		</Reveal>
	);
}
