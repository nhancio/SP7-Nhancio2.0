# SP7-Nhancio2.0

The marketing/landing website for Nhancio, an AI agency — pages for Home, Blogs, Careers,
Privacy Policy, and Terms & Conditions, built as a static, content-driven site (no backend,
no user accounts).

## Tech Stack

Vite + React 18 + TypeScript, Tailwind CSS, Framer Motion, React Router, `react-helmet-async`
for per-page SEO.

## Run locally

```bash
./run.sh
```

Installs dependencies and starts the Vite dev server (default port `5173`). Stop it with:

```bash
./stop.sh
```

## Deploy

```bash
./deploy.sh
```

Installs dependencies and builds the site (`npm run build` → `dist/`). Note: both a
`netlify.toml` and a `vercel.json` currently exist in this repo — the actual hosting target
hasn't been confirmed. See `context.md` before assuming either one is authoritative.

## Commit & push

```bash
./git.sh "commit message"
```

## More detail

- [`context.md`](./context.md) — tech stack, directory layout, deploy-target ambiguity, and
  known rough edges.
- [`next steps.md`](./next%20steps.md) — roadmap / task tracker.
