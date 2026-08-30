# Sandpiper Bay — beach condo site

A fast, static marketing site for our beach condo: photo gallery, amenities,
location, rates, and a booking-inquiry form that emails us directly.

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

Copy, rates, amenities, room descriptions, nearby distances, reviews, contact
details, and the photo list are all there. Change a value, save, done — you
should not need to open a component to change wording or numbers.

Anything still marked `TODO:` in that file is a placeholder waiting on you.

### Before going live

1. **`src/data/site.ts`** — replace every `TODO:` (condo name, location, email,
   phone, rates, distances, policies, reviews).
2. **`astro.config.mjs`** — set `site` to your real domain.
3. **`public/robots.txt`** — update the `Sitemap:` host to match.
4. **Photos** — see below.
5. **Inquiry form** — see below.

## Photos

The site ships with generated SVG placeholders so it looks complete before the
real photography lands. Each one is labelled with the room it stands in for.

To use real photos:

1. Drop the files into `public/images/` (JPG or WebP, roughly **2000px on the
   long edge** — sharp enough to look good, small enough to load fast).
2. Point the matching `src` in `src/data/site.ts` at them, e.g.
   `/images/living-room.jpg`.
3. Write a real `alt` for each. It is what screen-reader users hear and what
   search engines read.
4. Delete the `.svg` placeholder it replaced.

Mark tall photos with `orientation: 'portrait'` and they get a taller cell in
the gallery grid. The `tags` control which gallery filter a photo appears under.

To regenerate the placeholders after editing the list:

```bash
node scripts/generate-placeholders.mjs
```

## The inquiry form

Out of the box the form works with **no configuration**: on submit it opens the
guest's email app with their name, dates, party size, and message already filled
in, addressed to `contact.email`. Nothing is a dead end.

To have inquiries arrive as normal emails instead, pick one and fill it in under
`inquiryForm` in `src/data/site.ts`:

- **[Formspree](https://formspree.io)** — create a form, paste the endpoint:
  ```ts
  endpoint: 'https://formspree.io/f/xxxxxxxx',
  ```
- **[Web3Forms](https://web3forms.com)** — free, paste your access key:
  ```ts
  accessKey: 'your-access-key',
  ```

Both have free tiers that comfortably cover a single rental. The form validates
before sending, traps bots with a honeypot, and falls back to a direct email
address if the request ever fails.

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

**Design system.** Every colour, size, and timing is a CSS custom property in
`tokens.css`. Components reference the variables and never hard-code a value, so
retheming the site means editing one file.

**Typography.** Fraunces (display) and Inter (text), both variable fonts served
from `/fonts` rather than a CDN — one less third-party connection, and nothing
about visitors leaves the domain. Licences are in `public/fonts/`.

**Accessibility.** Audited with axe-core: zero violations across all pages,
including the open lightbox, the mobile menu, and the form's error state. All
text meets WCAG AA contrast. Keyboard navigation, focus management, and
`prefers-reduced-motion` are all handled.

**Progressive enhancement.** With JavaScript off you still get every section and
every photo, fully readable. If you have configured a form endpoint, the form
posts to it natively; if you have not, it shows your email address instead of a
button that could not work. JavaScript adds the scroll reveals, the lightbox,
the gallery filters, and inline form validation.

## Branches

- `main` — production
- `claude/beach-condo-website-jswivh` — active development
