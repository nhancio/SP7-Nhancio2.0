# SP7-Nhancio2.0 — Project Context

> Moderate-depth companion to `README.md`. See [`next steps.md`](./next%20steps.md) for the
> tracked roadmap.

## 1. What this is, and who it's for

This is the marketing/landing website for **Nhancio** — positioned in its own SEO metadata
as "Nhancio - Leading AI Agency | Data Science, AI Agents & Marketing Solutions"
(`index.html` `<title>`), targeting businesses looking for AI agents, data science, and AI
marketing/automation services. `socials.MD` refers to the product as "Nhancio 2.0" and
frames the audience as SMB owners, entrepreneurs, and clients needing custom AI/software
work. It is a static, content-driven marketing site (no user accounts, no backend) — pages
are Home, Blogs, Careers, Privacy Policy, and Terms & Conditions, with the homepage composed
of Hero, Services, Products, Achievements, WhyUs, Clients, About, and Contact sections. The
only "contact" mechanism observed is a `mailto:nithindidigam@nhancio.com` link
(`src/components/Contact.tsx`) — there's no form backend or CRM integration in the source.

## 2. Current tech stack (observed)

- Vite + React 18 + TypeScript, Tailwind CSS, Framer Motion, React Router, `react-helmet-async`
  (per-page SEO tags via `src/components/SEO.tsx`), Lucide React icons
- Scaffolded from a Bolt.new template (`.bolt/config.json` → `"template":
  "bolt-vite-react-ts"`; `.bolt/prompt` carries Bolt's default design-system instructions)
- Dev server: Vite default port **5173** (`vite.config.ts` sets no `server.port` override)
- Analytics: a "Datafa.st" script tag is referenced in `index.html` (described there as
  cookieless analytics) — no other analytics/tracking libraries were found in `src/`
- No `.env`/`.env.example` files exist in this project — consistent with it being a fully
  static site with no secrets or backend calls

## 3. Directory structure at a glance

```
SP7-Nhancio2.0/
├── src/
│   ├── pages/          # Home, Blogs, Careers, PrivacyPolicy, TermsAndConditions
│   └── components/     # Hero, Services, Products, Achievements, WhyUs, Clients,
│                        #   About, Contact, Navigation, Footer, SEO
├── public/
├── dist/                 # committed build output — a build has run locally before
├── index.html             # SEO meta tags, Datafa.st analytics script
├── netlify.toml            # build: npm run build, publish: dist, /media/* cache headers
├── vercel.json              # SPA rewrite (all routes -> /index.html)
├── _redirects                # Netlify-style redirects file at repo root
├── .bolt/                     # Bolt.new scaffold config + prompt
├── run.sh / deploy.sh / git.sh / stop.sh
└── next steps.md, socials.MD
```

## 4. Build / deploy status — needs scope clarification

**Both `netlify.toml` and `vercel.json` are present at the same time**, plus a root
`_redirects` file (a Netlify convention). This is a real ambiguity, not just a leftover file:

- `netlify.toml`: `npm run build` → publish `dist/`, plus a cache-control header rule for
  `/media/*`.
- `vercel.json`: a client-side routing rewrite (`/(.*) → /index.html`) with no build/output
  config of its own (Vercel would infer the Vite build from `package.json`).
- `deploy.sh` itself only runs `npm install && npm run build` — it does not call the Netlify
  or Vercel CLI, so it doesn't reveal which host is authoritative either.

**Before treating either config as the source of truth, confirm with whoever owns hosting
which platform (Netlify or Vercel) actually serves this site in production** — right now the
repo supports both but commits to neither, and having both configs can cause confusing
divergent behavior (e.g. the Netlify cache-control header for `/media/*` has no Vercel
equivalent).

`dist/` is present in the tree, so a production build has been produced locally at least
once.

## 5. Known blockers / rough edges

- Deploy-target ambiguity described above (Netlify vs. Vercel) is the main open question.
- `git.sh` in this repo is currently a placeholder stub (`echo 'Placeholder for git.sh'`) —
  it does not actually run git commands yet.
  **Update:** `git.sh` and `deploy.sh` have since been consolidated — `git.sh` is now a thin alias that execs `deploy.sh`, which does the real add/commit/push plus platform-deploy logic.
- No tests, linting-in-CI, or `.env` were found; this appears to be a low-complexity static
  marketing site, so that may be intentional rather than an oversight.

## 6. Third-party integrations / accounts

- **Datafa.st**: cookieless analytics script referenced in `index.html`.
- **Hosting**: unresolved between Netlify and Vercel — see Section 4.
- **ClickUp**: `.clickup.json` ties this repo to a ClickUp list/task for project tracking
  (fleet-wide tooling convention, not part of the app).

## 7. Where to go next

See [`next steps.md`](./next%20steps.md) for the tracked roadmap items.
