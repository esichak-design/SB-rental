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

/**
 * Reorder photos so the unfiltered gallery alternates between spaces.
 *
 * `photos` in site.ts is grouped by room, which is the right shape for editing
 * by hand — related shots sit together and it is obvious what is covered. But
 * rendered in that order the gallery opens with six near-identical views of the
 * living room before reaching anything else.
 *
 * This round-robins across the groups (taking the first photo of each in turn,
 * then the second of each, and so on) so consecutive tiles show different
 * spaces. Order within a group is preserved, so the strongest shot of each room
 * still leads.
 *
 * Used as a building block by `orderForGallery` below, which is what the
 * gallery actually renders.
 */
export function interleaveByGroup<T extends { tags?: readonly string[] }>(items: T[]): T[] {
  const groups = new Map<string, T[]>();

  for (const item of items) {
    const key = item.tags?.[0] ?? '';
    const bucket = groups.get(key);
    if (bucket) bucket.push(item);
    else groups.set(key, [item]);
  }

  const buckets = [...groups.values()];
  const out: T[] = [];

  for (let round = 0; out.length < items.length; round++) {
    for (const bucket of buckets) {
      if (round < bucket.length) out.push(bucket[round]);
    }
  }

  return out;
}

/**
 * True for the dusk photographs, identified by the naming convention used
 * throughout src/assets/photos (`…-twilight.jpg`).
 */
export function isTwilight(photo: { src: string }): boolean {
  return photo.src.includes('twilight');
}

/**
 * The gallery's display order — three bands, in sequence:
 *
 *   1. `lead`, pinned by filename in site.ts, in the order given there.
 *   2. Every remaining twilight shot.
 *   3. Everything else.
 *
 * Bands 2 and 3 are each interleaved by group, so consecutive tiles still show
 * different spaces rather than a run of near-identical rooms.
 *
 * Why twilight leads globally rather than within each group: the filters hide
 * cells rather than re-rendering them, so this one order is also the order
 * inside every filter. Putting the dusk shots ahead of everything else means
 * they lead whichever group a visitor narrows to, which is what was asked for —
 * grouping them per-tag would only have biased the unfiltered view.
 *
 * A pinned name missing from `items` throws rather than being skipped: a typo
 * should fail the build, not quietly drop a photograph from the front.
 */
export function orderForGallery<T extends { src: string; tags?: readonly string[] }>(
  items: T[],
  lead: readonly string[] = [],
): T[] {
  const byName = new Map(items.map((item) => [item.src, item]));

  const pinned = lead.map((name) => {
    const photo = byName.get(name);
    if (!photo) {
      throw new Error(
        `galleryLead names "${name}", which is not in the photos array in src/data/site.ts.`,
      );
    }
    return photo;
  });

  const pinnedNames = new Set(pinned.map((photo) => photo.src));
  const rest = items.filter((item) => !pinnedNames.has(item.src));

  return [
    ...pinned,
    ...interleaveByGroup(rest.filter(isTwilight)),
    ...interleaveByGroup(rest.filter((item) => !isTwilight(item))),
  ];
}
