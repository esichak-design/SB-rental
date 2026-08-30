/**
 * Generates the placeholder images in `public/images/`.
 *
 * These exist only so the site looks finished before the real photography
 * lands. Each one is a soft coastal gradient with the filename printed on it,
 * so it is always obvious which photo belongs where.
 *
 * Once you drop a real photo in — say `public/images/kitchen.jpg` — update the
 * matching `src` in `src/data/site.ts` and delete the .svg it replaced.
 *
 *   node scripts/generate-placeholders.mjs
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUT = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images');
mkdirSync(OUT, { recursive: true });

/** [top, bottom, accent] — sampled to feel like the room they stand in for. */
const SCENES = {
  'hero':            { w: 2400, h: 1350, sky: ['#f7cda2', '#e89468', '#a85a55'], sea: ['#2a5a6b', '#163b4a'], horizon: 0.62, sun: true,  label: 'Hero — sunset over the Pacific' },
  'living-room':     { w: 2000, h: 1500, room: ['#f6f1e8', '#e2d8c8'], accent: '#c9b9a3', label: 'Living & dining' },
  'kitchen':         { w: 2000, h: 1500, room: ['#f8f5ef', '#dcd5c8'], accent: '#b9ae9b', label: 'Kitchen' },
  'dining':          { w: 2000, h: 1500, room: ['#f5efe4', '#ded2be'], accent: '#c2ad90', label: 'Dining' },
  'primary-bedroom': { w: 2000, h: 1500, room: ['#f3f0ea', '#d9d5cc'], accent: '#b4b0a5', label: 'Primary suite' },
  'second-bedroom':  { w: 1500, h: 2000, room: ['#f4f1e9', '#d7d2c6'], accent: '#b7b1a2', label: 'Second suite' },
  'primary-bath':    { w: 1500, h: 2000, room: ['#f4f6f5', '#d3dcda'], accent: '#a8b8b5', label: 'Primary bath' },
  'second-bath':     { w: 2000, h: 1500, room: ['#f5f7f6', '#d6dedc'], accent: '#adbcb9', label: 'Second bath' },
  'views':           { w: 2000, h: 1500, sky: ['#cfe2ea', '#9dc0cf', '#7aa5b6'], sea: ['#2f6879', '#1a4553'], horizon: 0.5,  label: 'Ocean views' },
  'terrace':         { w: 2000, h: 1500, sky: ['#d8e8ee', '#a6c8d4', '#84aebc'], sea: ['#356d7a', '#1e4b57'], horizon: 0.58, label: 'Outdoor space' },
  'pool':            { w: 2000, h: 1500, room: ['#dcecef', '#8dbcc6'], accent: '#5e97a4', label: 'Community pool' },
  'beach':           { w: 1500, h: 2000, sky: ['#dceaef', '#a8cbd5', '#e8dcc4'], sea: ['#4a8896', '#e3d6bd'], horizon: 0.45, label: 'Beach' },
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * A caption plate so a placeholder is never mistaken for real photography.
 * Sits in the upper third: the corners hold the nav, and the lower half is
 * where the hero puts its headline, copy, and buttons.
 */
function plate(w, h, label, dark) {
  const fs = Math.round(Math.min(w, h) * 0.030);
  const fg = dark ? '#ffffff' : '#16212c';
  const bg = dark ? 'rgba(0,0,0,0.22)' : 'rgba(255,255,255,0.45)';
  const boxH = Math.round(fs * 2.6);
  const boxW = Math.round(label.length * fs * 0.56 + fs * 2.4);
  const x = Math.round((w - boxW) / 2);
  const y = Math.round(h * 0.24 - boxH / 2);
  return `
  <g opacity="0.85">
    <rect x="${x}" y="${y}" width="${boxW}" height="${boxH}" rx="${Math.round(boxH / 2)}" fill="${bg}"/>
    <text x="${w / 2}" y="${y + boxH / 2}" text-anchor="middle" dominant-baseline="central"
          font-family="Inter, Helvetica, Arial, sans-serif" font-size="${fs}"
          font-weight="500" letter-spacing="${fs * 0.02}" fill="${fg}">${esc(label)}</text>
  </g>`;
}

/** Grain keeps a flat gradient from looking like a broken image. */
const GRAIN = `
  <filter id="grain" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="7" result="n"/>
    <feColorMatrix type="saturate" values="0" in="n" result="g"/>
    <feComponentTransfer in="g" result="t">
      <feFuncA type="linear" slope="0.055"/>
    </feComponentTransfer>
    <feComposite operator="over" in="t" in2="SourceGraphic"/>
  </filter>`;

function outdoor(s) {
  const { w, h, sky, sea, horizon, sun } = s;
  const hy = Math.round(h * horizon);
  const sunEl = sun
    ? `<circle cx="${w * 0.68}" cy="${hy - h * 0.1}" r="${h * 0.075}" fill="#fff6e4" opacity="0.75"/>
       <ellipse cx="${w * 0.68}" cy="${hy - h * 0.1}" rx="${h * 0.2}" ry="${h * 0.2}" fill="url(#glow)"/>`
    : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${esc(s.label)} placeholder">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${sky[0]}"/>
      <stop offset="55%" stop-color="${sky[1]}"/>
      <stop offset="100%" stop-color="${sky[2]}"/>
    </linearGradient>
    <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${sea[0]}"/>
      <stop offset="100%" stop-color="${sea[1]}"/>
    </linearGradient>
    <radialGradient id="glow">
      <stop offset="0%" stop-color="#fff0d0" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#fff0d0" stop-opacity="0"/>
    </radialGradient>
    ${GRAIN}
  </defs>
  <g filter="url(#grain)">
    <rect width="${w}" height="${hy}" fill="url(#sky)"/>
    ${sunEl}
    <rect y="${hy}" width="${w}" height="${h - hy}" fill="url(#sea)"/>
    <rect y="${hy - 2}" width="${w}" height="3" fill="#ffffff" opacity="0.22"/>
  </g>
  ${plate(w, h, s.label, true)}
</svg>\n`;
}

function interior(s) {
  const { w, h, room, accent } = s;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${esc(s.label)} placeholder">
  <defs>
    <linearGradient id="wall" x1="0.15" y1="0" x2="0.85" y2="1">
      <stop offset="0%" stop-color="${room[0]}"/>
      <stop offset="100%" stop-color="${room[1]}"/>
    </linearGradient>
    <linearGradient id="light" x1="0" y1="0" x2="1" y2="0.6">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.5"/>
      <stop offset="60%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
    ${GRAIN}
  </defs>
  <g filter="url(#grain)">
    <rect width="${w}" height="${h}" fill="url(#wall)"/>
    <rect x="${w * 0.58}" y="${h * 0.12}" width="${w * 0.3}" height="${h * 0.5}" rx="${w * 0.006}" fill="${accent}" opacity="0.3"/>
    <rect x="${w * 0.06}" y="${h * 0.66}" width="${w * 0.46}" height="${h * 0.2}" rx="${w * 0.01}" fill="${accent}" opacity="0.35"/>
    <rect width="${w}" height="${h}" fill="url(#light)"/>
  </g>
  ${plate(w, h, s.label, false)}
</svg>\n`;
}

let n = 0;
for (const [name, s] of Object.entries(SCENES)) {
  const svg = s.sky ? outdoor(s) : interior(s);
  writeFileSync(resolve(OUT, `${name}.svg`), svg, 'utf8');
  n++;
}
console.log(`Generated ${n} placeholder images in public/images/`);
