# Finrock website — gofinrock.com

The full marketing site, ready to deploy.

## Pages

| File | URL | What it is |
|---|---|---|
| `index.html` | `/` | Home — hero, 3 modes, comparison vs Emma/Hnry/QB/Xero, testimonials, FAQ |
| `personal.html` | `/personal` | Personal Life Tracker deep-dive |
| `business.html` | `/business` | Business AI Bookkeeping deep-dive |
| `sole-traders.html` | `/sole-traders` | Hnry-killer landing · "A day with Finrock" + 1:1 comparison |
| `accountants.html` | `/accountants` | Partner programme |
| `pricing.html` | `/pricing` | 3 tiers: Personal Free · Pro £8.99 · Business £19.99 |
| `banking.html` | `/banking` | Waitlist for 2026 launch |
| `about.html` | `/about` | Story + principles |
| `login.html` | `/login` | Sign-in (SSO + magic link) |
| `signup.html` | `/signup` | Sign-up flow |
| `style.css` | — | Shared design system (Inter, navy-indigo brand) |
| `chrome.js` | — | Injects shared nav + footer into every page |
| `assets/` | — | Product screenshots from the app design package |

## Deploy

It's all static HTML/CSS/JS. Drop the `website/` folder into:

- **Vercel**: `vercel deploy` from the folder
- **Netlify**: drag the folder onto netlify.com
- **Cloudflare Pages**: connect the repo, root = `website/`
- **GitHub Pages**: push to a `gh-pages` branch

## DNS

Point `gofinrock.com` and `www.gofinrock.com` to your host. Add an SSL cert.

## Roadmap for marketing site

Pages built. Pages still to write:
- `features.html` — single-page feature index
- `security.html` — SOC2, GDPR, AES-256 deep-dive
- `blog.html` + posts — content marketing
- `help.html` + KB articles — support
- `changelog.html` — public changelog
- `careers.html` — hiring
- `press.html` — press kit
- Legal: `privacy.html`, `terms.html`, `cookies.html`, `gdpr.html`, `dpa.html`

These can all reuse `style.css` and `chrome.js`. Each is a 1-day write-up.

## Built with

- HTML / CSS / vanilla JS (no framework — fast, indexable, easy to edit)
- Inter from Google Fonts
- All product screenshots from `design_handoff_finrock_app/`
- Brand chrome echoes finrock.io footer style + same social handles (`@gofinrock`)
