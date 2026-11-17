# Osama Adnan | IT Infrastructure Portfolio

A dark, modern, responsive portfolio website for an IT System Administrator / IT Infrastructure Specialist.

**Stack:** React 18 · Vite 5 · Tailwind CSS 3 · Framer Motion · Lucide Icons

## 1. Requirements

- [Node.js](https://nodejs.org) 18 or newer (LTS recommended)
- npm (included with Node.js)

Check with `node -v` and `npm -v`.

## 2. Install and run locally

Open a terminal in this folder (`osama-adnan-portfolio`) and run:

```bash
npm install      # installs dependencies (first time only)
npm run dev      # starts the dev server, usually http://localhost:5173
```

Open the address shown in the terminal. Changes you save appear instantly.

## 3. Build for production

```bash
npm run build    # creates the optimized site in the dist/ folder
npm run preview  # optional: preview the production build locally
```

## 4. Edit your content (no code needed)

**Everything on the site comes from one file: `src/data/content.js`.**
It contains your name, titles, introduction, contact details, skills, projects (with their diagrams), experience and lab items.

| To change...                | Edit in `src/data/content.js`            |
| --------------------------- | ---------------------------------------- |
| Name, titles, tagline       | `site`                                   |
| Email, phone, LinkedIn      | `contact`                                |
| About text and facts        | `about`                                  |
| Skill cards                 | `skillCategories`                        |
| Projects, status, diagrams  | `projects`                               |
| Jobs and responsibilities   | `experience`                             |
| Lab items and screenshots   | `lab`                                    |

Colors live in `tailwind.config.js` (`ink`, `navy`, `panel`, `electric`, `aqua`).

### Important content notes

- No employment dates, certifications or achievements were added. Add them to `experience` only if they are accurate.
- Project 01 is labelled **Assessment · Planning · Proposed Design** with a visible notice that implementation has not been completed. Project 04 is labelled **Personal Technical Laboratory**.
- Objectives under each project were written from the descriptions you supplied. Review them and adjust the wording to match your real work.
- Skills are listed without ratings or percentages.

## 5. Your CV / PDF portfolio

The **DOWNLOAD MY CV** button downloads `public/documents/Osama-Adnan-Portfolio.pdf` (a 3-page PDF in the same dark visual style).

- To use your own CV instead, replace that file with your PDF, keeping the same file name (or update `cvPath` and `cvFileName` in `content.js`).
- To regenerate the styled PDF after editing `content.js` (optional):

  ```bash
  npm install --no-save playwright
  npx playwright install chromium
  node tools/build-pdf.mjs
  ```

## 6. Add lab screenshots and diagrams

1. Copy images into `public/images/lab/` (for example `eve-ng-topology.png`).
2. In `content.js`, under `lab.gallery`, set `src: '/images/lab/eve-ng-topology.png'` and update the title, caption and `alt` text.
3. Add or remove gallery entries as needed. Entries with `src: null` show a "Screenshot placeholder" box, so nothing appears broken.

## 7. Contact form

By default the form opens the visitor's email app with the message pre-filled (works anywhere, no backend needed).

To receive messages directly in your inbox, create a free form at [Formspree](https://formspree.io) and paste its URL into `contact.formEndpoint` in `content.js`.

## 8. SEO

`index.html` already contains the title, description, Open Graph tags and structured data (JSON-LD). After you have your final website address:

- add `<link rel="canonical" href="https://your-domain/" />` to `index.html`;
- optionally add a `public/og-image.png` (1200×630) and an `og:image` meta tag for nicer link previews.

## 9. Upload to GitHub

1. Create an account at [github.com](https://github.com) and click **New repository** (name: `osama-adnan-portfolio`, leave it empty, no README).
2. In a terminal inside this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: IT portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/osama-adnan-portfolio.git
   git push -u origin main
   ```

`node_modules` and `dist` are excluded automatically by `.gitignore`.

## 10. Deploy on Vercel

1. Sign in at [vercel.com](https://vercel.com) with your GitHub account.
2. Click **Add New → Project** and import `osama-adnan-portfolio`.
3. Vercel detects Vite automatically. Confirm these settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click **Deploy**. Your site will be live at a `*.vercel.app` address within a minute or two.
5. Every later `git push` to `main` redeploys automatically. A custom domain can be added in **Project → Settings → Domains**.

## Project structure

```
osama-adnan-portfolio/
├── public/
│   ├── images/lab/            # your lab screenshots go here
│   ├── documents/             # downloadable PDF (CV / portfolio)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/            # Navbar, NetworkDiagram, ContactForm, Footer, ...
│   ├── sections/              # Home, About, Skills, Projects, Experience, Lab, Contact
│   ├── data/content.js        # ALL editable content
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tools/build-pdf.mjs        # optional PDF generator
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Accessibility and performance

Skip link, keyboard-friendly navigation and tabs, ARIA labels, visible focus rings, `prefers-reduced-motion` support, lazy-loaded images, and vendor/motion code splitting for fast loading.
