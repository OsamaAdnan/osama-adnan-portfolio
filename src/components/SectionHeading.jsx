import Reveal from './Reveal.jsx'

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-12 max-w-3xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-aqua">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      <div className="mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-electric to-aqua" />
      {subtitle && <p className="mt-5 text-base leading-relaxed text-slate-400">{subtitle}</p>}
    </Reveal>
  )
}
