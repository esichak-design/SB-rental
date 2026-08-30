import type { ImageMetadata } from 'astro';

/**
 * Photo resolution
 * ─────────────────────────────────────────────────────────────────────────────
 * Photos live in `src/assets/photos/` so Astro's build pipeline can process
 * them — generating AVIF/WebP variants and a responsive `srcset`, and baking in
 * the intrinsic dimensions so pages do not shift as images load. Files in
 * `public/` skip all of that and ship exactly as uploaded.
 *
 * `src/data/site.ts` refers to photos by bare filename ("kitchen.jpg"), and
 * this module maps that to the processed asset. Keeping the data file free of
 * import statements means it stays editable by hand.
 */

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/*.{jpg,jpeg,png,webp,avif,svg}',
  { eager: true },
);

const byFilename = new Map<string, ImageMetadata>();

for (const [path, mod] of Object.entries(modules)) {
  const filename = path.split('/').pop();
  if (filename) byFilename.set(filename, mod.default);
}

/** Every photo filename currently available, sorted. */
export const availablePhotos = [...byFilename.keys()].sort();

/**
 * Resolve a bare filename to its processed asset.
 *
 * Throws at build time rather than rendering a broken image: a missing photo
 * should stop the build with a useful message, not reach a visitor as a broken
 * icon on a page selling a home.
 */
export function getPhoto(name: string): ImageMetadata {
  const asset = byFilename.get(name);

  if (!asset) {
    throw new Error(
      `Photo "${name}" was not found in src/assets/photos/.\n` +
        `Referenced from src/data/site.ts.\n` +
        `Available: ${availablePhotos.join(', ') || '(none)'}`,
    );
  }

  return asset;
}

/** True for formats the image pipeline cannot rasterise (SVG placeholders). */
export function isVector(asset: ImageMetadata): boolean {
  return asset.format === 'svg';
}
