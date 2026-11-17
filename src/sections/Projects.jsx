import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '../data/content.js'
import SectionHeading from '../components/SectionHeading.jsx'
import NetworkDiagram from '../components/NetworkDiagram.jsx'
import Reveal from '../components/Reveal.jsx'

const TONE = {
  planned: 'border-amber-soft/50 bg-amber-soft/10 text-amber-soft',
  lab: 'border-aqua/50 bg-aqua/10 text-aqua',
  operational: 'border-electric/50 bg-electric/10 text-blue-300',
}

function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${TONE[status.tone]}`}
    >
      {status.label}
    </span>
  )
}

function SubHeading({ children }) {
  return (
    <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-aqua">{children}</h4>
  )
}

export default function Projects() {
  const [activeId, setActiveId] = useState(projects[0].id)
  const project = projects.find((p) => p.id === activeId)

  return (
    <section id="projects" className="section bg-navy-900/60">
      <div className="container-x">
        <SectionHeading
          eyebrow="04 / Projects"
          title="Projects & Infrastructure"
          subtitle="Select a project to see its overview, objectives, technologies, implementation details and diagram."
        />

        <Reveal className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div
            className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0"
            role="tablist"
            aria-label="Projects"
            aria-orientation="vertical"
          >
            {projects.map((p) => {
              const on = p.id === activeId
              return (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  id={`tab-${p.id}`}
                  aria-selected={on}
                  aria-controls={`panel-${p.id}`}
                  onClick={() => setActiveId(p.id)}
                  className={`card w-64 shrink-0 p-4 text-left transition-colors lg:w-auto ${
                    on ? 'border-aqua/70 bg-navy-800' : 'hover:border-electric/60'
                  }`}
                >
                  <span className="font-mono text-xs text-aqua">PROJECT {p.number}</span>
                  <span className="mt-1 block text-sm font-semibold leading-snug text-white">
                    {p.title}
                  </span>
                  <span className="mt-1 block text-xs text-slate-400">{p.short}</span>
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={project.id}
              id={`panel-${project.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${project.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="card p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-xs text-aqua">PROJECT {project.number}</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">Environment: {project.environment}</p>
                </div>
                <StatusBadge status={project.status} />
              </div>

              {project.notice && (
                <p
                  className={`mt-5 rounded-xl border px-4 py-3 text-sm leading-relaxed ${TONE[project.status.tone]}`}
                  role="note"
                >
                  {project.notice}
                </p>
              )}

              <p className="mt-6 text-base leading-relaxed text-slate-300">{project.overview}</p>

              <div className="mt-8 grid gap-8 xl:grid-cols-2">
                <div className="space-y-7">
                  <div>
                    <SubHeading>Objectives</SubHeading>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {project.objectives.map((o) => (
                        <li key={o} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" aria-hidden="true" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <SubHeading>Implementation details</SubHeading>
                    <ul className="space-y-2 text-sm text-slate-300">
                      {project.implementation.map((o) => (
                        <li key={o} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" aria-hidden="true" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-7">
                  <NetworkDiagram diagram={project.diagram} title={project.title} />
                  <div>
                    <SubHeading>Technologies</SubHeading>
                    <ul className="flex flex-wrap gap-2">
                      {project.technologies.map((t) => (
                        <li key={t} className="chip">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  )
}
