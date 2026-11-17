import { motion } from 'framer-motion'
import { site, targetRoles } from '../data/content.js'
import HeroVisual from '../components/HeroVisual.jsx'
import { ArrowRight, Download, Mail } from '../components/icons.js'

export default function Home() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-aqua">
            {site.location}
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {site.headingName}
          </h1>
          <p className="mt-5 text-lg font-semibold leading-snug tracking-wide text-aqua sm:text-xl">
            {site.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className="mt-5 text-xl font-medium text-slate-100">{site.tagline}</p>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400">{site.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              EXPLORE MY PROJECTS <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href={site.cvPath} download={site.cvFileName} className="btn-outline">
              <Download size={16} aria-hidden="true" /> DOWNLOAD MY CV
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail size={16} aria-hidden="true" /> CONTACT ME
            </a>
          </div>

          <div className="mt-10">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
              Target roles
            </p>
            <ul className="flex flex-wrap gap-2">
              {targetRoles.map((r) => (
                <li key={r} className="chip">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  )
}
