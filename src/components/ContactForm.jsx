import { useState } from 'react'
import { contact } from '../data/content.js'
import { Send } from './icons.js'

const field =
  'w-full rounded-xl border border-line bg-ink/60 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-aqua focus:outline-none'

export default function ContactForm() {
  const [status, setStatus] = useState({ state: 'idle', message: '' })

  async function onSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') || '').trim()
    const email = String(form.get('email') || '').trim()
    const message = String(form.get('message') || '').trim()

    // Optional: real form endpoint (e.g. Formspree) configured in content.js.
    if (contact.formEndpoint) {
      setStatus({ state: 'sending', message: 'Sending…' })
      try {
        const res = await fetch(contact.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ name, email, message }),
        })
        if (!res.ok) throw new Error('Request failed')
        e.currentTarget.reset()
        setStatus({ state: 'success', message: 'Thank you. Your message has been sent.' })
      } catch {
        setStatus({
          state: 'error',
          message: `Sorry, the message could not be sent. Please email ${contact.email} directly.`,
        })
      }
      return
    }

    // Default: open the visitor's email app with the message pre-filled.
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setStatus({
      state: 'success',
      message: 'Opening your email app. If nothing opens, please email me directly.',
    })
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-4 p-6 sm:p-8" noValidate={false}>
      <div>
        <label htmlFor="cf-name" className="mb-2 block text-sm font-medium text-slate-200">
          Name
        </label>
        <input id="cf-name" name="name" type="text" required autoComplete="name" className={field} placeholder="Your name" />
      </div>
      <div>
        <label htmlFor="cf-email" className="mb-2 block text-sm font-medium text-slate-200">
          Email
        </label>
        <input id="cf-email" name="email" type="email" required autoComplete="email" className={field} placeholder="you@company.com" />
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-2 block text-sm font-medium text-slate-200">
          Message
        </label>
        <textarea id="cf-message" name="message" required rows={5} className={`${field} resize-y`} placeholder="How can I help?" />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={status.state === 'sending'}>
        <Send size={16} aria-hidden="true" /> SEND MESSAGE
      </button>
      <p
        role="status"
        aria-live="polite"
        className={`min-h-[1.25rem] text-sm ${status.state === 'error' ? 'text-red-400' : 'text-aqua'}`}
      >
        {status.message}
      </p>
    </form>
  )
}
