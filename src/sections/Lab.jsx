import { lab } from '../data/content.js'
import { iconMap, ImagePlus } from '../components/icons.js'
import SectionHeading from '../components/SectionHeading.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Lab() {
  return (
    <section id="lab" className="section bg-navy-900/60">
      <div className="container-x">
        <SectionHeading eyebrow="06 / IT Lab" title="IT Lab & Experiments" subtitle={lab.intro} />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {lab.items.map((item, i) => {
            const Icon = iconMap[item.icon]
            return (
              <li key={item.title}>
                <Reveal delay={(i % 3) * 0.05} className="h-full">
                  <div className="card h-full p-5 transition-colors hover:border-aqua/50">
                    <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-navy-800 text-aqua">
                      <Icon size={20} aria-hidden="true" />
                    </span>
                    <h3 className="text-base font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ul>

        <h3 className="mb-5 mt-14 font-mono text-xs uppercase tracking-[0.2em] text-aqua">
          Screenshots & diagrams
        </h3>
        <ul className="grid gap-4 md:grid-cols-3">
          {lab.gallery.map((g) => (
            <li key={g.title}>
              <figure className="card m-0 overflow-hidden">
                {g.src ? (
                  <img
                    src={g.src}
                    alt={g.alt || g.title}
                    loading="lazy"
                    className="aspect-video w-full object-cover"
                  />
                ) : (
                  <div className="flex aspect-video flex-col items-center justify-center gap-2 border-b border-dashed border-line bg-ink/40 text-slate-500">
                    <ImagePlus size={28} aria-hidden="true" />
                    <span className="text-xs">Screenshot placeholder</span>
                  </div>
                )}
                <figcaption className="p-4">
                  <p className="text-sm font-semibold text-white">{g.title}</p>
                  <p className="mt-1 text-xs text-slate-400">{g.caption}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
