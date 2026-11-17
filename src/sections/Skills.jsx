import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { skillCategories } from '../data/content.js'
import { iconMap } from '../components/icons.js'
import SectionHeading from '../components/SectionHeading.jsx'

export default function Skills() {
  const [selected, setSelected] = useState('all')
  const visible =
    selected === 'all' ? skillCategories : skillCategories.filter((c) => c.id === selected)

  const tabs = [{ id: 'all', title: 'All' }, ...skillCategories]

  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="03 / Skills"
          title="Technical Skills"
          subtitle="Skills grouped by area of work. Choose a category to focus on it."
        />

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={selected === t.id}
              onClick={() => setSelected(t.id)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                selected === t.id
                  ? 'border-aqua bg-aqua/10 text-aqua'
                  : 'border-line bg-navy-800 text-slate-400 hover:text-white'
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((cat) => {
              const Icon = iconMap[cat.icon]
              return (
                <motion.article
                  key={cat.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                  className="card group p-6 transition-colors hover:border-electric/60"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-navy-800 text-aqua transition-colors group-hover:border-aqua/50">
                      <Icon size={22} aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold leading-snug text-white">{cat.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <li key={s} className="chip transition-colors group-hover:border-electric/40">
                        {s}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
