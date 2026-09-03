/**
 * Barrel export design system Devetek.
 * Panduan lengkap: .claude/skills/devetek-ui/SKILL.md
 */

/* ── Layout & struktur ── */
export { default as Container } from './Container'
export { default as Section } from './Section'
export type { SectionTone } from './Section'
export { default as SectionHeading } from './SectionHeading'
export { default as PageHero } from './PageHero'
export { default as CTABand } from './CTABand'

/* ── Elemen aksi & status ── */
export { default as Button } from './Button'
export type { ButtonProps, ButtonSize, ButtonVariant } from './Button'
export { default as Badge } from './Badge'
export type { BadgeVariant } from './Badge'

/* ── Card ── */
export { default as Card } from './Card'
export type { CardAccent, CardTone } from './Card'
export { default as FeatureCard } from './FeatureCard'
export { default as ProjectCard } from './ProjectCard'
export { default as ProcessCard } from './ProcessCard'
export { default as StatCard } from './StatCard'
export { default as TestimonialCard } from './TestimonialCard'
export { default as ContactRow } from './ContactRow'

/* ── Form ── */
export { Field, Input, Select, Textarea } from './Field'

/* ── Identitas & dekorasi ── */
export { default as Logo } from './Logo'
export { default as ForwardLayers, ForwardLayersOutline } from './ForwardLayers'
export { default as BrowserFrame } from './BrowserFrame'

/* ── Motion ── */
export { default as Reveal } from './Reveal'
export { default as Counter } from './Counter'
export { default as PageTransition } from './PageTransition'

export { default as ClientLogo } from './ClientLogo'
