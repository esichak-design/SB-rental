# 325 Sierra — Solana Beach oceanfront residence

Marketing site for a two-bedroom oceanfront residence at 325 S Sierra Ave
(Seascape Shores), Solana Beach, CA — available furnished, semi-furnished, or
unfurnished on flexible lease terms.

Built with [Astro](https://astro.build). No server, no database, no monthly
fees — it builds to plain HTML/CSS and deploys anywhere.

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run check` | Type-check the project |

## Editing the site

**Almost everything lives in one file: [`src/data/site.ts`](src/data/site.ts).**

Copy, lease rates, features, room descriptions, what's nearby, utilities, and
the photo list are all there. Change a value, save, done — you should not need
to open a component to change wording or numbers.

Anything still marked `TODO:` in that file is waiting on you.

### Before going live

1. **`src/data/site.ts`** — work through every `TODO:`. The important ones:
   - `site.name` — currently `325 Sierra`; `Seascape Shores` is the alternative
   - `contact.email` — where inquiries should land
   - `leasing.rateRange` — confirm the monthly range
   - `location.nearby` — add real drive times where they're missing
2. **`astro.config.mjs`** — set `site` to your real domain.
3. **`public/robots.txt`** — update the `Sitemap:` host to match.
4. **Photos** — see below.
5. **Inquiry form** — see below.

## Photos

The site ships with generated SVG placeholders so it looks complete before the
real photography lands. Each is labelled with the room it stands in for.

To use real photos:

1. Drop the files into `public/images/` (JPG or WebP, roughly **2000px on the
   long edge**).
2. Point the matching `src` in `src/data/site.ts` at them, e.g.
   `/images/living-room.jpg`.
3. Write a real `alt` for each. It is what screen-reader users hear and what
   search engines read.
4. Delete the `.svg` placeholder it replaced.

Mark tall photos `orientation: 'portrait'` for a taller gallery cell. The `tags`
control which gallery filter a photo appears under.

Regenerate placeholders after editing the list:

```bash
node scripts/generate-placeholders.mjs
```

## The inquiry form

Out of the box the form works with **no configuration**: on submit it opens the
visitor's email app with their name, move-in date, length of stay, furnishing
preference, and message already filled in. Nothing is a dead end.

To have inquiries arrive as normal emails instead, set one of these under
`inquiryForm` in `src/data/site.ts`:

- **[Formspree](https://formspree.io)** — `endpoint: 'https://formspree.io/f/xxxxxxxx'`
- **[Web3Forms](https://web3forms.com)** — `accessKey: 'your-access-key'`

Both have free tiers that comfortably cover a single listing. The form validates
before sending, traps bots with a honeypot, and shows a direct email address if
a request ever fails.

## A note on reviews

`reviews` in `site.ts` is **intentionally empty**, and the section renders
nothing while it is. Only add real quotes from real tenants — invented
testimonials on a live listing misrepresent the property to people making a
significant financial decision.

## Deploying

`npm run build` produces a fully static `dist/` folder. Any static host works:

- **Netlify / Vercel / Cloudflare Pages** — connect the repo; they detect Astro
  automatically. Build command `npm run build`, publish directory `dist`.
- **GitHub Pages** — serve `dist/` (set `site` and `base` in `astro.config.mjs`).

## How it is put together

```
src/
├── data/site.ts          ← all content lives here
├── styles/
│   ├── tokens.css        ← colours, type scale, spacing, motion
│   ├── fonts.css         ← self-hosted @font-face rules
│   └── global.css        ← reset, typography, buttons, layout
├── layouts/Base.astro    ← <head>, header/footer, scroll-reveal
├── components/           ← one per page section
└── pages/
    ├── index.astro       ← the single-page site
    ├── gallery.astro     ← full gallery + lightbox
    └── 404.astro
public/
├── images/               ← photos (placeholders for now)
└── fonts/                ← Fraunces + Inter, self-hosted
```

Page order: hero → the residence → gallery preview → room by room → features →
who it suits → leasing → utilities & care → location → inquiry.

**Design system.** Every colour, size, and timing is a CSS custom property in
`tokens.css`. Components reference the variables and never hard-code a value, so
retheming means editing one file.

**Typography.** Fraunces (display) and Inter (text), both variable fonts served
from `/fonts` rather than a CDN — one less third-party connection, and nothing
about visitors leaves the domain. Licences are in `public/fonts/`.

**Accessibility.** Audited with axe-core: zero violations across all pages,
including the open lightbox, the mobile menu, and the form's error state. All
text meets WCAG AA contrast. Keyboard navigation, focus management, and
`prefers-reduced-motion` are handled.

**Progressive enhancement.** With JavaScript off you still get every section and
every photo, fully readable. If a form endpoint is configured the form posts to
it natively; if not, it shows your email address rather than a button that could
not work. JavaScript adds the scroll reveals, the lightbox, the gallery filters,
and inline form validation.

## Branches

- `main` — production
- `claude/beach-condo-website-jswivh` — active development
