/**
 * Regenerates public/documents/Osama-Adnan-Portfolio.pdf from src/data/content.js.
 *
 * OPTIONAL tool - the website does not need it. Use it after editing content.js
 * if you want the PDF to stay in sync:
 *
 *   npm install --no-save playwright
 *   npx playwright install chromium
 *   node tools/build-pdf.mjs
 *
 * (Or simply replace the PDF in public/documents/ with your own CV.)
 */
import { mkdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { chromium } from 'playwright'
import { site, contact, about, skillCategories, projects, experience, targetRoles, lab } from '../src/data/content.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const outFile = resolve(root, 'public/documents', site.cvFileName)

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const chips = (arr, cls = '') => arr.map((x) => `<span class="chip ${cls}">${esc(x)}</span>`).join('')
const linkedin = contact.linkedin.replace(/^https?:\/\/(www\.)?/, '')

const css = `
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin: 0; padding: 0; }
html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
body { font-family: Inter, 'Segoe UI', Arial, sans-serif; color: #cbd5e1; font-size: 9.6pt; line-height: 1.5; }
.page { width: 210mm; height: 297mm; padding: 16mm 16mm 14mm; background: #050a16; position: relative; overflow: hidden; page-break-after: always; display: flex; flex-direction: column; }
.page:last-child { page-break-after: auto; }
.page::before { content: ''; position: absolute; top: -60mm; right: -50mm; width: 150mm; height: 150mm; background: radial-gradient(circle, rgba(47,123,255,.22), transparent 65%); }
.page > * { position: relative; }
.bar { height: 3px; width: 100%; background: linear-gradient(90deg, #2f7bff, #22d3ee); border-radius: 2px; margin-bottom: 8mm; }
h1 { font-size: 30pt; font-weight: 800; letter-spacing: -.5px; color: #fff; line-height: 1.05; }
.titles { margin-top: 3mm; color: #22d3ee; font-weight: 600; letter-spacing: 1.2px; font-size: 10.5pt; }
.tagline { margin-top: 2mm; color: #e2e8f0; font-size: 11pt; font-weight: 500; }
.contact { display: grid; grid-template-columns: 1fr 1fr; gap: 2mm 6mm; margin-top: 6mm; padding: 4mm 5mm; background: #0f1a33; border: 1px solid #1b2a4d; border-radius: 3mm; font-size: 8.8pt; }
.contact b { display: block; color: #64748b; font-size: 7pt; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 600; }
.contact span { color: #fff; font-weight: 500; }
h2 { font-size: 11pt; letter-spacing: 2px; text-transform: uppercase; color: #22d3ee; font-weight: 700; margin: 7mm 0 3mm; display: flex; align-items: center; gap: 3mm; }
h2::after { content: ''; flex: 1; height: 1px; background: #1b2a4d; }
p + p { margin-top: 2mm; }
.chips { display: flex; flex-wrap: wrap; gap: 1.6mm; }
.chip { display: inline-block; border: 1px solid #1b2a4d; background: #0d1731; color: #cbd5e1; border-radius: 99px; padding: .6mm 2.6mm; font-size: 7.8pt; font-weight: 500; }
.card { background: #0f1a33; border: 1px solid #1b2a4d; border-radius: 3mm; padding: 4mm 4.5mm; break-inside: avoid; }
.card h3 { color: #fff; font-size: 10.2pt; font-weight: 700; }
.job { margin-bottom: 0; }
.meta { color: #22d3ee; font-size: 8pt; font-weight: 600; margin-top: .6mm; }
.role { color: #94a3b8; font-size: 9pt; }
ul.tight { margin-top: 2mm; padding-left: 4.5mm; }
ul.tight li { margin-bottom: .6mm; font-size: 8.8pt; }
ul.tight li::marker { color: #2f7bff; }
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; }
.card .chips { margin-top: 2.4mm; }
.proj { margin-bottom: 3.6mm; }
.proj-head { display: flex; justify-content: space-between; align-items: flex-start; gap: 4mm; }
.num { color: #22d3ee; font-size: 7.4pt; font-weight: 700; letter-spacing: 1.5px; }
.badge { white-space: nowrap; border-radius: 99px; padding: .6mm 2.8mm; font-size: 7.4pt; font-weight: 700; border: 1px solid; }
.badge.planned { color: #f5b94c; border-color: rgba(245,185,76,.55); background: rgba(245,185,76,.1); }
.badge.lab { color: #22d3ee; border-color: rgba(34,211,238,.55); background: rgba(34,211,238,.1); }
.badge.operational { color: #93b4ff; border-color: rgba(47,123,255,.55); background: rgba(47,123,255,.12); }
.note { margin-top: 2mm; font-size: 8.4pt; color: #f5b94c; }
.note.lab { color: #22d3ee; }
.proj p { font-size: 8.9pt; margin-top: 1.6mm; }
.foot { margin-top: auto; padding-top: 5mm; display: flex; justify-content: space-between; color: #64748b; font-size: 7.6pt; border-top: 1px solid #1b2a4d; }
.fill { flex: 1; }
`

const foot = (n, total) =>
  `<div class="foot"><span>${esc(site.name)} · IT System Administrator | IT Infrastructure Specialist</span><span>${n} / ${total}</span></div>`

const jobs = [...experience].reverse()

const page1 = `
<section class="page">
  <div class="bar"></div>
  <h1>${esc(site.headingName)}</h1>
  <div class="titles">${site.titleLines.map(esc).join('<br/>')}</div>
  <div class="tagline">${esc(site.tagline)}</div>
  <div class="contact">
    <div><b>Email</b><span>${esc(contact.email)}</span></div>
    <div><b>Phone</b><span>${esc(contact.phone)}</span></div>
    <div><b>LinkedIn</b><span>${esc(linkedin)}</span></div>
    <div><b>Location</b><span>${esc(contact.location)}</span></div>
  </div>

  <h2>Professional Profile</h2>
  ${about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('')}

  <h2>Target Roles</h2>
  <div class="chips">${chips(targetRoles)}</div>

  <h2>Professional Experience</h2>
  <div class="grid2">
  ${jobs
    .map(
      (j) => `
    <div class="card job">
      <h3>${esc(j.company)}</h3>
      <div class="role">${esc(j.role)}</div>
      <div class="meta">${esc(j.period)}</div>
      <ul class="tight">${j.responsibilities.map((r) => `<li>${esc(r.replace(/\.$/, ''))}</li>`).join('')}</ul>
    </div>`,
    )
    .join('')}
  </div>
  <div class="fill"></div>
  ${foot(1, 3)}
</section>`

const page2 = `
<section class="page">
  <div class="bar"></div>
  <h2 style="margin-top:0">Technical Skills</h2>
  <div class="grid2">
    ${skillCategories
      .map(
        (c) => `
      <div class="card">
        <h3>${esc(c.title)}</h3>
        <div class="chips">${chips(c.skills)}</div>
      </div>`,
      )
      .join('')}
  </div>

  <h2>Personal Technical Learning</h2>
  <div class="card">
    <p>${esc(lab.intro)}</p>
    <div class="chips">${chips(lab.items.map((i) => i.title))}</div>
  </div>

  <h2>Contact</h2>
  <div class="card">
    <div class="grid2" style="font-size:9pt">
      <div><b style="color:#64748b;font-size:7pt;letter-spacing:1.5px">EMAIL</b><br/><span style="color:#fff">${esc(contact.email)}</span></div>
      <div><b style="color:#64748b;font-size:7pt;letter-spacing:1.5px">PHONE</b><br/><span style="color:#fff">${esc(contact.phone)}</span></div>
      <div><b style="color:#64748b;font-size:7pt;letter-spacing:1.5px">LINKEDIN</b><br/><span style="color:#fff">${esc(linkedin)}</span></div>
      <div><b style="color:#64748b;font-size:7pt;letter-spacing:1.5px">LOCATION</b><br/><span style="color:#fff">${esc(contact.location)}</span></div>
    </div>
  </div>
  <div class="fill"></div>
  ${foot(2, 3)}
</section>`

const page3 = `
<section class="page">
  <div class="bar"></div>
  <h2 style="margin-top:0">Selected Projects</h2>
  ${projects
    .map(
      (p) => `
    <div class="card proj">
      <div class="proj-head">
        <div>
          <div class="num">PROJECT ${esc(p.number)}</div>
          <h3>${esc(p.title)}</h3>
        </div>
        <span class="badge ${p.status.tone}">${esc(p.status.label)}</span>
      </div>
      ${p.notice ? `<div class="note ${p.status.tone === 'lab' ? 'lab' : ''}">${esc(p.notice)}</div>` : ''}
      <p>${esc(p.overview)}</p>
      <div class="chips" style="margin-top:2.4mm">${chips(p.technologies)}</div>
    </div>`,
    )
    .join('')}
  <div class="fill"></div>
  ${foot(3, 3)}
</section>`

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(site.name)} - Portfolio</title><style>${css}</style></head><body>${page1}${page2}${page3}</body></html>`

await mkdir(dirname(outFile), { recursive: true })
const browser = await chromium.launch()
const page = await browser.newPage()
await page.setContent(html, { waitUntil: 'load' })
await page.pdf({ path: outFile, format: 'A4', printBackground: true, preferCSSPageSize: true })
await browser.close()
console.log('PDF written to', outFile)
