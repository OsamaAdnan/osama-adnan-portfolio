import { about, experience } from '../data/content.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { ArrowRight } from '../components/icons.js'

export default function About() {
  return (
    <section id="about" className="section bg-navy-900/60">
      <div className="container-x">
        <SectionHeading eyebrow="02 / About" title="About Me" />

        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal className="space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="space-y-6">
            <dl className="grid grid-cols-2 gap-3">
              {about.facts.map((f) => (
                <div key={f.label} className="card p-4">
                  <dt className="sr-only">{f.label}</dt>
                  <dd className="text-xl font-bold text-white">{f.value}</dd>
                  <p className="mt-1 text-xs text-slate-400">{f.label}</p>
                </div>
              ))}
            </dl>
            <div className="card p-5">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-aqua">Core focus</h3>
              <ul className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                {about.focus.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-14">
          <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-aqua">
            Career progression
          </h3>
          <ol className="flex flex-col gap-3 md:flex-row md:items-stretch">
            {experience.map((e, i) => (
              <li key={e.id} className="flex flex-col gap-3 md:flex-1 md:flex-row md:items-stretch">
                <div className="card flex-1 p-5">
                  <p className="text-sm font-semibold text-white">{e.company}</p>
                  <p className="mt-1 text-sm text-slate-400">{e.role}</p>
                  <p className="mt-2 font-mono text-xs text-aqua">{e.period}</p>
                </div>
                {i < experience.length - 1 && (
                  <span className="flex items-center justify-center text-electric" aria-hidden="true">
                    <ArrowRight size={20} className="rotate-90 md:rotate-0" />
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  )
}
