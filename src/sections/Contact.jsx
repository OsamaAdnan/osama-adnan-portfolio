import { contact } from '../data/content.js'
import SectionHeading from '../components/SectionHeading.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Reveal from '../components/Reveal.jsx'
import { Mail, Phone, MapPin } from '../components/icons.js'

function LinkedInIcon() {
  // Inline SVG (brand icons are not part of Lucide).
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

export default function Contact() {
  const telHref = `tel:${contact.phone.replace(/[^+\d]/g, '')}`
  const items = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}`, icon: <Mail size={20} aria-hidden="true" /> },
    { label: 'Phone', value: contact.phone, href: telHref, icon: <Phone size={20} aria-hidden="true" /> },
    {
      label: 'LinkedIn',
      value: contact.linkedin.replace(/^https?:\/\/(www\.)?/, ''),
      href: contact.linkedin,
      icon: <LinkedInIcon />,
      external: true,
    },
    { label: 'Location', value: contact.location, icon: <MapPin size={20} aria-hidden="true" /> },
  ]

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="07 / Contact"
          title="Get in Touch"
          subtitle="Open to IT System Administrator, IT Infrastructure, Network and IT Support opportunities. Send a message or use the details below."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ul className="space-y-3">
              {items.map((it) => {
                const body = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-navy-800 text-aqua">
                      {it.icon}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                        {it.label}
                      </span>
                      <span className="block break-words text-sm font-medium text-white">{it.value}</span>
                    </span>
                  </>
                )
                return (
                  <li key={it.label}>
                    {it.href ? (
                      <a
                        href={it.href}
                        {...(it.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="card flex items-center gap-4 p-4 transition-colors hover:border-aqua/60"
                      >
                        {body}
                      </a>
                    ) : (
                      <div className="card flex items-center gap-4 p-4">{body}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
