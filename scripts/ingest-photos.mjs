/**
 * Photo ingest
 * ─────────────────────────────────────────────────────────────────────────────
 * Takes raw photos and prepares them for the site:
 *
 *   1. Moves anything found in `public/images/` into `src/assets/photos/`, so
 *      Astro's build pipeline processes it (AVIF/WebP + responsive srcset)
 *      instead of shipping the file untouched.
 *   2. Caps the long edge at 2560px and re-encodes at quality 82. Above that
 *      size a browser gains nothing and the repository grows for no reason.
 *   3. Applies any EXIF orientation flag, then drops the metadata — camera
 *      metadata can carry GPS coordinates, which has no place on a public page
 *      about someone's home.
 *   4. Prints a starter `photos` array for src/data/site.ts, with orientation
 *      already set from the real aspect ratio.
 *
 *   node scripts/ingest-photos.mjs            # process and report
 *   node scripts/ingest-photos.mjs --dry-run  # report only, change nothing
 */
import { readdir, mkdir, stat, unlink } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, dirname, extname, basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const INBOX = join(ROOT, 'public', 'images');
const DEST = join(ROOT, 'src', 'assets', 'photos');

const MAX_EDGE = 2560;
const QUALITY = 82;
const RASTER = new Set(['.jpg', '.jpeg', '.png', '.webp', '.tif', '.tiff']);

const dryRun = process.argv.includes('--dry-run');
const kb = (n) => `${Math.round(n / 1024)} KB`;

await mkdir(DEST, { recursive: true });

/** Everything awaiting processing, from the inbox and from the destination. */
async function collect() {
  const out = [];
  for (const dir of [INBOX, DEST]) {
    if (!existsSync(dir)) continue;
    for (const name of await readdir(dir)) {
      if (RASTER.has(extname(name).toLowerCase())) out.push({ dir, name });
    }
  }
  return out.sort((a, b) => a.name.localeCompare(b.name));
}

const files = await collect();

if (files.length === 0) {
  console.log('No raster photos found.');
  console.log(`  Drop them in ${INBOX.replace(ROOT + '/', '')}/ and run this again.`);
  process.exit(0);
}

console.log(`Found ${files.length} photo(s)\n`);

const results = [];

for (const { dir, name } of files) {
  const from = join(dir, name);
  const slug = basename(name, extname(name))
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const to = join(DEST, `${slug}.jpg`);

  const before = (await stat(from)).size;
  const meta = await sharp(from).metadata();

  // EXIF orientation is applied by rotate(); width/height below are post-rotation.
  const rotated = (meta.orientation ?? 1) >= 5;
  const srcW = rotated ? meta.height : meta.width;
  const srcH = rotated ? meta.width : meta.height;

  let outW = srcW;
  let outH = srcH;
  let after = before;

  if (!dryRun) {
    const buf = await sharp(from)
      .rotate()
      .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toBuffer();

    const { width, height } = await sharp(buf).metadata();
    outW = width;
    outH = height;

    const { writeFile } = await import('node:fs/promises');
    await writeFile(to, buf);
    after = buf.length;

    // Remove the original once it is safely rewritten elsewhere.
    if (from !== to) await unlink(from);
  }

  const orientation = outH > outW ? 'portrait' : 'landscape';
  results.push({ file: `${slug}.jpg`, outW, outH, orientation });

  const moved = dir === INBOX ? ' (moved from public/images)' : '';
  console.log(
    `  ${slug}.jpg`.padEnd(38) +
      `${srcW}x${srcH} -> ${outW}x${outH}   ${kb(before)} -> ${kb(after)}${moved}`,
  );
}

const total = results.length;
const portraits = results.filter((r) => r.orientation === 'portrait').length;
console.log(`\n${total} processed — ${portraits} portrait, ${total - portraits} landscape`);

console.log('\nStarter entries for `photos` in src/data/site.ts:\n');
for (const r of results) {
  const orient = r.orientation === 'portrait' ? ", orientation: 'portrait'" : '';
  console.log(`  { src: '${r.file}', alt: 'TODO', tags: ['TODO']${orient} },`);
}
