import { contact, navLinks, site } from '../data/content.js'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line bg-navy-900/80">
      <div className="container-x flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">{site.name}</p>
          <p className="mt-1 text-sm text-slate-400">IT System Administrator | IT Infrastructure Specialist</p>
          <p className="mt-1 text-sm text-slate-500">{site.location}</p>
        </div>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
            {navLinks.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="transition-colors hover:text-aqua">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-aqua">
                Email
              </a>
            </li>
            <li>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-aqua"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-line py-4 text-center text-xs text-slate-500">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  )
}
