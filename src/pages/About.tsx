import { Seo } from '../components/Seo'
import { Section } from '../components/Section'
import { ExperienceTimeline } from '../components/ExperienceTimeline'
import { SkillList } from '../components/SkillList'
import { experience } from '../data/experience'
import { profile } from '../data/profile'
import { skills } from '../data/skills'

export function About() { return <><Seo title="About" /><section className="py-16 md:py-24"><p className="label mb-8 text-coral">A little context</p><h1 className="max-w-4xl font-display text-5xl font-medium leading-none tracking-tight md:text-8xl">Good work starts with <span className="text-coral">curiosity.</span></h1><p className="mt-10 max-w-2xl text-xl leading-relaxed text-ink/65">{profile.description} I care about the details, the people using what we make, and the space between a good idea and a useful one.</p></section><Section eyebrow="Experience" title="Places and people I have learned from."><ExperienceTimeline experience={experience} /></Section><Section eyebrow="What I bring" title="A mix of strategic thinking and hands-on making."><SkillList skills={skills} /></Section></> }