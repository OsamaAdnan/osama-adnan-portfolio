import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { experience } from '../data/content.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'
import { Briefcase, ChevronDown } from '../components/icons.js'

export default function Experience() {
  // Most recent role (last in the list) starts expanded.
  const [openId, setOpenId] = useState(experience[experience.length - 1].id)
  const ordered = [...experience].reverse() // newest first on the page

  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="05 / Experience"
          title="Professional Experience"
          subtitle="Select an organization to expand its responsibilities."
        />

        <ol className="relative ml-3 border-l border-line pl-8 sm:ml-5 sm:pl-10">
          {ordered.map((job) => {
            const open = openId === job.id
            return (
              <li key={job.id} className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-[3.15rem] top-1 flex h-9 w-9 items-center justify-center rounded-full border border-aqua/60 bg-navy-900 text-aqua sm:-left-[3.4rem]"
                  aria-hidden="true"
                >
                  <Briefcase size={16} />
                </span>

                <Reveal>
                  <div className="card overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenId(open ? null : job.id)}
                      aria-expanded={open}
                      aria-controls={`job-${job.id}`}
                      className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <span>
                        <span className="block font-mono text-xs text-aqua">{job.period}</span>
                        <span className="mt-1 block text-xl font-bold text-white">{job.company}</span>
                        <span className="mt-1 block text-sm text-slate-400">{job.role}</span>
                      </span>
                      <ChevronDown
                        size={22}
                        aria-hidden="true"
                        className={`mt-1 shrink-0 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          id={`job-${job.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-line px-5 pb-6 pt-5 sm:px-6">
                            {job.progression && (
                              <div className="mb-5">
                                <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-aqua">
                                  Career progression
                                </p>
                                <p className="flex flex-wrap items-center gap-2 text-sm font-semibold text-white">
                                  {job.progression.map((step, i) => (
                                    <span key={step} className="flex items-center gap-2">
                                      <span className="rounded-lg border border-electric/40 bg-electric/10 px-3 py-1">
                                        {step}
                                      </span>
                                      {i < job.progression.length - 1 && (
                                        <span className="text-electric" aria-label="then">
                                          →
                                        </span>
                                      )}
                                    </span>
                                  ))}
                                </p>
                              </div>
                            )}
                            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-aqua">
                              Responsibilities
                            </p>
                            <ul className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                              {job.responsibilities.map((r) => (
                                <li key={r} className="flex gap-2">
                                  <span
                                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric"
                                    aria-hidden="true"
                                  />
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
