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

### Still outstanding

The domain, hosting and build are done. What remains is content only — all of
it in [`src/data/site.ts`](src/data/site.ts), and none of it needs a developer:

1. **`inquiryForm.endpoint`** — unset, so the form falls back to opening the
   visitor's mail app with their details pre-filled. It works and reaches the
   right inbox, but nothing is recorded anywhere and a visitor without a
   configured mail client gets nothing. See "The inquiry form" below.
2. **`leasing.rateRange`** — confirm `$10,500 – $15,500` is still current.
3. **`location.nearby`** — several entries have no drive time. Distances render
   only when set, so they are simply absent rather than wrong; fill them in as
   they are confirmed.
4. **`site.name`** — `325 Sierra`. `Seascape Shores` is the community's name and
   the obvious alternative.
5. **Verify the copy.** Details about the in-residence laundry, the desk nook,
   and the community spa were read off the photographs rather than supplied by
   the owner. They look right, but a prospective tenant will hold the page to
   them, so confirm before relying on them.

## Photos

The 51 listing photos live in `src/assets/photos/` and are referenced from
`src/data/site.ts` by **bare filename** — `living-room.jpg`, not a path.

Astro processes them at build time: WebP variants at 640 / 1024 / native width,
a JPEG fallback, a responsive `srcset`, and intrinsic dimensions baked in so
pages do not shift as images load. A filename that does not exist fails the
build with a message naming it, rather than shipping a broken image to a
visitor.

To add or replace photos:

```bash
cp /path/to/new-photos/*.jpg public/images/
node scripts/ingest-photos.mjs
```

The script moves them into `src/assets/photos/`, caps the long edge at 2560px,
re-encodes at quality 82, applies any EXIF rotation and then strips the
metadata (camera EXIF can carry GPS coordinates, which has no place on a public
page about a home), and prints starter entries for `site.ts`.

Then add each one to `photos` in `site.ts` with a real `alt` and its `tags`.
Tags drive the gallery filters: `living`, `kitchen`, `bedrooms`, `bath`,
`workspace`, `outdoor`, `views`, `building`.

### A note on image formats

The build emits **WebP only, deliberately.** Measured on this property's own
photography at 1280px: JPEG 98KB, WebP 65KB, AVIF 59KB — but WebP encodes in
0.2s against AVIF's 4.4s. Adding AVIF bought a further 9% for roughly 25x the
build time: a cold build went from 9 seconds to 105. Worth revisiting only if
the photos are ever re-exported much larger, where AVIF's advantage widens.

The current sources are 1280px on the long edge, which is comfortable
everywhere on the site except the full-bleed hero, where a larger export would
look crisper on a high-density desktop display.

## The inquiry form

With no endpoint configured it still works: on submit it opens the visitor's
mail app addressed to `contact.email`, with their name, move-in date, length of
stay, furnishing preference and message already filled in.

That is a real fallback, not a placeholder — but it records nothing, and a
visitor without a mail client set up (common on a work or shared machine) gets
nothing at all. Switching it to real submissions takes about two minutes:

1. Sign up at [Formspree](https://formspree.io) — the free tier covers 50
   submissions a month.
2. Create a form; point its notification address at `contact.email`.
3. Paste the endpoint it gives you into `inquiryForm.endpoint` in
   `src/data/site.ts`, replacing `null`:
   ```ts
   endpoint: 'https://formspree.io/f/abcdwxyz',
   ```
4. Commit and push. Netlify redeploys on its own.
5. Send a test inquiry from the live site — Formspree needs the first
   submission confirmed from your inbox before it forwards any.

Nothing else needs changing. The POST path is already wired and has been tested
end to end against a stand-in endpoint: the request goes out as a POST asking
for a JSON reply, every field arrives under a clean name, the success state
resets the form, and a failing request shows `contact.email` while preserving
what the visitor typed, so nobody is ever left with nowhere to go.

Web3Forms works the same way — put its key in `accessKey` and leave `endpoint`
as `null`.

The form validates before sending and carries a honeypot field named `_gotcha`,
which Formspree also filters server side.

## A note on reviews

`reviews` in `site.ts` is **intentionally empty**, and the section renders
nothing while it is. Only add real quotes from real tenants — invented
testimonials on a live listing misrepresent the property to people making a
significant financial decision.

## Deploying

Hosted on **Netlify** at **https://325sierra.com**, deployed from `main`.

Every push to `main` triggers a build and publishes automatically. Pull requests
get their own preview URL, which is the easiest way to look at a change before
it is live. A cold build takes roughly ten seconds.

Build settings live in [`netlify.toml`](netlify.toml) rather than in the Netlify
dashboard, so they are reviewable and travel with the repository — build
command, publish directory, a pinned Node major version, and per-asset cache
headers. Nothing needs configuring in the UI.

The site builds to static files. There is no adapter, no serverless function and
no server: just HTML, CSS and images on a CDN.

### If the domain ever changes

Three files carry it, and they must agree:

- `astro.config.mjs` → `site` — canonical URLs, Open Graph tags, sitemap
- `src/data/site.ts` → `site.url`
- `public/robots.txt` → the `Sitemap:` line

Getting these wrong is quiet rather than loud: the site keeps working while
advertising the wrong hostname to search engines.

## How it is put together

```
src/
├── assets/photos/        ← the 51 listing photos
├── data/site.ts          ← all content lives here
├── lib/photos.ts         ← resolves a filename to a processed asset
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

`main` is the only branch, and it is what deploys. Work on a branch and open a
pull request if you want a preview URL before publishing; otherwise commit to
`main` and it goes live.
