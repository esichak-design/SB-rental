/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE CONTENT — single source of truth
 * ─────────────────────────────────────────────────────────────────────────────
 * Every piece of copy, every number, every photo reference on the site lives
 * here. Edit this file and the whole site updates. You should not need to touch
 * any .astro component to change wording, rates, amenities, or photos.
 *
 * Anything marked `TODO:` is a placeholder — replace it with your real details.
 *
 * Content is drawn from the owner's listing description. Nothing has been
 * invented: where a fact was not supplied (exact drive times to neighbouring
 * towns, for instance) the field is simply left off rather than guessed at,
 * because a prospective tenant will hold you to what this page says.
 */

export interface Photo {
  /** Filename inside src/assets/photos — e.g. "living-room.jpg". No path. */
  src: string;
  /** Describe the photo for screen readers and SEO. Not optional — please write one. */
  alt: string;
  /** Optional caption shown in the lightbox. */
  caption?: string;
  /** Which gallery groups this photo belongs to. */
  tags?: GalleryTag[];
  /** "portrait" photos get a taller cell in the masonry gallery. */
  orientation?: 'landscape' | 'portrait';
}

export type GalleryTag =
  | 'living'
  | 'kitchen'
  | 'bedrooms'
  | 'bath'
  | 'workspace'
  | 'outdoor'
  | 'views'
  | 'building';

export const galleryTags: { id: GalleryTag; label: string }[] = [
  { id: 'living', label: 'Living' },
  { id: 'kitchen', label: 'Kitchen & Dining' },
  { id: 'bedrooms', label: 'Bedrooms' },
  { id: 'bath', label: 'Baths' },
  { id: 'workspace', label: 'Work & Utility' },
  { id: 'outdoor', label: 'Outdoor' },
  { id: 'views', label: 'Ocean views' },
  { id: 'building', label: 'Community & Beach' },
];

/* ── Identity ─────────────────────────────────────────────────────────────── */

export const site = {
  /**
   * TODO: confirm. Leading with the address reads well for a residence of this
   * kind; "Seascape Shores" (the community's name) is the obvious alternative.
   */
  name: '325 Sierra',
  shortName: '325 Sierra',
  location: 'Solana Beach, California',
  tagline: 'An oceanfront residence on the Solana Beach bluffs',
  description:
    'A recently renovated two-bedroom, two-and-a-half-bath oceanfront residence of approximately 1,500 square feet in Solana Beach, with panoramic Pacific views, beach and pool access, and flexible furnished, semi-furnished, or unfurnished lease terms.',
  /** TODO: set to your live domain, and update `site` in astro.config.mjs to match. */
  url: 'https://example.com',
};

/* ── Contact ──────────────────────────────────────────────────────────────── */

export const contact = {
  /** TODO: the address inquiries should reach. */
  email: 'hello@example.com',
  /** TODO: or set to null to hide the phone number entirely. */
  phone: null as string | null,
  /** Used for tel: links — digits only. */
  phoneHref: '',
  /** TODO: your response-time promise. Set to null to hide. */
  responseTime: 'We reply to every inquiry within 24 hours.',
};

/* ── Inquiry form ─────────────────────────────────────────────────────────── */

export const inquiryForm = {
  /**
   * Where the form posts. Two easy options, no server required:
   *
   *   1. Formspree — sign up at formspree.io, create a form, paste the endpoint:
   *        endpoint: 'https://formspree.io/f/xxxxxxxx'
   *
   *   2. Web3Forms — free at web3forms.com, paste your access key below and
   *      leave the endpoint as-is.
   *
   * Until one is configured the form still works: it opens the visitor's email
   * app with everything they typed already filled in, so it is never a dead end.
   *
   * TODO: pick one and fill it in.
   */
  endpoint: null as string | null,
  /** Only used with Web3Forms. */
  accessKey: null as string | null,
  /** Shown after a successful submission. */
  successMessage:
    "Thank you — your inquiry is on its way. We'll be in touch within 24 hours.",
};

/* ── Navigation ───────────────────────────────────────────────────────────── */

export const nav = [
  { label: 'The Residence', href: '/#the-residence' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Features', href: '/#features' },
  { label: 'Leasing', href: '/#leasing' },
  { label: 'Location', href: '/#location' },
];

/* ── Hero ─────────────────────────────────────────────────────────────────── */

export const hero = {
  eyebrow: 'Solana Beach, California',
  /** Rendered large. Keep it short. */
  headline: 'Perched above the Pacific',
  subhead:
    'A renovated two-bedroom oceanfront residence on the Solana Beach bluffs. Wake to panoramic ocean views, watch the surfers with your morning coffee, and take the sunsets from home.',
  /**
   * TODO: your best wide, bright ocean-view photo. Bare filename.
   *
   * If you change this, check the headline is still readable over it. The copy
   * sits in a translucent panel precisely because this photograph is too bright
   * behind the text for a plain gradient to carry — a darker image would allow
   * a lighter treatment, a brighter one may need a heavier panel.
   */
  image: 'primary-bedroom-twilight.jpg',
  imageAlt: 'The primary bedroom at dusk, its gable window filled with a sunset over the Pacific',
  cta: { label: 'Inquire about leasing', href: '#inquire' },
  secondaryCta: { label: 'See the residence', href: '/gallery' },
};

/* ── Quick facts (the strip under the hero) ───────────────────────────────── */

export const quickFacts = [
  { value: '2', label: 'Bedrooms' },
  { value: '2.5', label: 'Bathrooms' },
  { value: '1,500', label: 'Sq ft approx.' },
  { value: '2', label: 'Parking spaces' },
];

/* ── Intro / "The Residence" ──────────────────────────────────────────────── */

export const intro = {
  eyebrow: 'The Residence',
  headline: 'Renovated, and built around the view',
  /** Each string becomes a paragraph. */
  body: [
    'Perched on the bluffs above the Pacific, the residence is filled with natural light — vaulted ceilings with exposed beams, clerestory windows, and wide-plank oak floors throughout. Approximately 1,500 square feet across two levels, joined by a sculptural iron spiral staircase.',
    'The remodel was thorough. A white-and-oak kitchen with quartz counters, a professional gas range, and an island that seats three. Fireplaces in both the living room and the primary suite. A built-in window seat, a tucked-away desk nook, and full-size laundry inside the residence rather than down a corridor.',
    'Upstairs, the primary suite takes the gable end: a wall of glass framing the water, a fireplace at the foot of the bed, a double vanity, and a fitted walk-in closet. The second bedroom has its own bath and closet.',
  ],
  /** TODO: a bright interior shot with the view in it works well here. */
  image: 'living-room-ocean.jpg',
  imageAlt: 'The living room under its vaulted ceiling, with the ocean beyond',
};

/* ── Who it suits ─────────────────────────────────────────────────────────── */

export const suitedFor = {
  eyebrow: 'Flexible terms',
  headline: 'However long you need it',
  body: 'Lease terms are flexible, which makes the residence work for a range of situations.',
  cases: [
    { title: 'Relocation', detail: 'Landing in San Diego and deciding where to settle.' },
    { title: 'Between homes', detail: 'A comfortable place to be while you buy, sell, or build.' },
    { title: 'Working remotely', detail: 'A built-in desk nook, fast to settle into, with a view worth looking up for.' },
    { title: 'A seasonal residence', detail: 'An extended coastal escape rather than a hotel.' },
  ],
};

/* ── Features / amenities ─────────────────────────────────────────────────── */

export interface AmenityGroup {
  title: string;
  items: string[];
}

export const amenities: AmenityGroup[] = [
  {
    title: 'The residence',
    items: [
      'Approximately 1,500 square feet over two levels',
      'Two bedrooms, two and a half bathrooms',
      'Vaulted ceilings with exposed beams',
      'Wide-plank oak floors throughout',
      'Iron and wood spiral staircase',
      'Ceiling fans in every room',
    ],
  },
  {
    title: 'Kitchen',
    items: [
      'Professional stainless gas range with vented hood',
      'Built-in stainless refrigerator',
      'Quartz counters and full-slab backsplash',
      'Oak island with seating for three',
      'Shaker cabinetry with brass hardware',
      'Opens to the dining area and the deck',
    ],
  },
  {
    title: 'Living & dining',
    items: [
      'Gas fireplace with a reclaimed timber mantel',
      'Built-in window seat with drawer storage',
      'Clerestory windows above the main glazing',
      'Dining table seating six, beside the deck doors',
      'Ocean outlook from the living room',
    ],
  },
  {
    title: 'Primary suite',
    items: [
      'Gable wall of glass framing the Pacific',
      'Second gas fireplace',
      'Vaulted, beamed ceiling',
      'Double vanity in oak with brass fittings',
      'Fitted walk-in closet',
      'Mirrored wardrobe wall',
    ],
  },
  {
    title: 'Second bedroom & baths',
    items: [
      'Second bedroom with its own full bath',
      'Fitted walk-in closet',
      'Patterned tile floors and quartz vanities',
      'Powder room on the main level',
    ],
  },
  {
    title: 'Working & practical',
    items: [
      'Built-in desk nook with oak panelling',
      'Full-size stacked washer and dryer inside the residence',
      'Generous built-in cabinetry and storage',
      'Two parking spaces',
      'Additional storage',
    ],
  },
  {
    title: 'Outside & community',
    items: [
      'Private gated entry patio',
      'Gated oceanfront community',
      'Community pool and spa, 8am – 10pm daily',
      'Bluff-top lawns with benches over the water',
      'Private stairs down to the sand',
      'Pergola walkways and mature subtropical planting',
    ],
  },
];

/* ── The Residence, room by room ──────────────────────────────────────────── */

export interface Room {
  name: string;
  detail: string;
  image: string;
  imageAlt: string;
}

/** TODO: confirm these against the real photos once they are in. */
export const rooms: Room[] = [
  {
    name: 'Living & Dining',
    detail:
      'A vaulted, beamed room under clerestory glass, with a gas fireplace, a built-in window seat, and doors out to the deck. The dining table sits between the kitchen and the glazing, so the whole level reads as one space.',
    image: 'living-room-fireplace.jpg',
    imageAlt: 'The vaulted living room with its fireplace and built-in window seat',
  },
  {
    name: 'Kitchen',
    detail:
      'White shaker cabinetry against an oak island, quartz counters and a full-slab backsplash, a professional gas range under a vented oak hood, and a built-in refrigerator. Three stools at the island; the deck is a step away.',
    image: 'kitchen.jpg',
    imageAlt: 'The renovated kitchen with oak island and professional gas range',
  },
  {
    name: 'Primary Suite',
    detail:
      'The gable end of the upper floor, given over to a wall of glass above the water. A fireplace at the foot of the bed, a beamed ceiling overhead, a double oak vanity, and a fitted walk-in closet.',
    image: 'primary-bedroom-day.jpg',
    imageAlt: 'The primary suite with its gable window over the ocean and a fireplace',
  },
  {
    name: 'Second Bedroom',
    detail:
      'Quiet and bright, with its own full bath and a fitted walk-in closet — as workable for guests as it is for a family.',
    image: 'second-bedroom.jpg',
    imageAlt: 'The second bedroom with two beds and its own bath',
  },
  {
    name: 'Work & Utility',
    detail:
      'A built-in desk nook panelled in oak, and full-size laundry inside the residence rather than shared down a corridor. Small things that matter over a longer stay.',
    image: 'laundry.jpg',
    imageAlt: 'The built-in desk nook beside the in-residence laundry',
  },
  {
    name: 'Outside',
    detail:
      'A private gated patio at the door. Beyond it, lawns running to the bluff edge, benches set over the water, a pool and spa, and private stairs down to the sand.',
    image: 'bluff-benches.jpg',
    imageAlt: 'Benches at the bluff edge looking out over the Pacific',
  },
];

/* ── Gallery ──────────────────────────────────────────────────────────────── */

/**
 * TODO: replace every entry below with the real photos.
 *
 * Drop the files into `src/assets/photos/` and name them in `src` — the bare
 * filename, e.g. `living-room-01.jpg`. Astro generates the AVIF/WebP variants
 * and the responsive srcset from there; a missing filename fails the build with
 * a message naming it, rather than shipping a broken image.
 *
 * Write a real `alt` for each one — it is what screen-reader users hear and
 * what search engines read.
 */
export const photos: Photo[] = [
  // Living
  { src: 'living-room-ocean.jpg', alt: 'The living room under a vaulted ceiling, with the ocean visible through the far window', tags: ['living', 'views'] },
  { src: 'living-room-fireplace.jpg', alt: 'The living room fireplace with a reclaimed timber mantel and a television above', tags: ['living'] },
  { src: 'living-room.jpg', alt: 'The living room seating area, with clerestory windows above the main glazing', tags: ['living'] },
  { src: 'living-room-wide.jpg', alt: 'The full width of the living room, looking toward the window seat', tags: ['living'] },
  { src: 'living-room-staircase.jpg', alt: 'The living room with the iron spiral staircase rising to the upper floor', tags: ['living'] },
  { src: 'living-room-twilight.jpg', alt: 'The living room at dusk, the sky turning pink through the windows', tags: ['living', 'views'], caption: 'The living room as the light goes.' },
  { src: 'kitchen-dining-stairs.jpg', alt: 'Looking across the dining table to the kitchen and the spiral staircase beyond', tags: ['living', 'kitchen'] },

  // Kitchen & dining
  { src: 'kitchen.jpg', alt: 'The kitchen, with an oak island, quartz counters and a professional gas range', tags: ['kitchen'] },
  { src: 'kitchen-range.jpg', alt: 'The professional stainless gas range beneath an oak-trimmed vented hood', tags: ['kitchen'] },
  { src: 'kitchen-island-dining.jpg', alt: 'The kitchen island and built-in refrigerator, with the dining area beyond', tags: ['kitchen'] },
  { src: 'kitchen-seating.jpg', alt: 'Three stools at the kitchen island', tags: ['kitchen'] },
  { src: 'dining.jpg', alt: 'The dining table against a panelled oak wall, open to the kitchen', tags: ['kitchen'] },

  // Bedrooms
  { src: 'primary-bedroom-twilight.jpg', alt: 'The primary bedroom at dusk, the gable window filled with a pink sunset over the Pacific', tags: ['bedrooms', 'views'], caption: 'The primary suite, facing the water.' },
  { src: 'primary-bedroom-day.jpg', alt: 'The primary bedroom by day, a wall of glass framing the ocean beside the bed', tags: ['bedrooms', 'views'] },
  { src: 'primary-bedroom.jpg', alt: 'The primary bedroom, with a fireplace set into the wall opposite the bed', tags: ['bedrooms'] },
  { src: 'primary-bedroom-sitting.jpg', alt: 'The primary bedroom looking toward its sitting area under the vaulted ceiling', tags: ['bedrooms'] },
  { src: 'second-bedroom.jpg', alt: 'The second bedroom, with two beds and a ceiling fan', tags: ['bedrooms'] },
  { src: 'second-bedroom-beds.jpg', alt: 'The second bedroom from the doorway, looking toward its own bathroom', tags: ['bedrooms'] },
  { src: 'second-bedroom-wide.jpg', alt: 'The second bedroom seen from the opposite corner', tags: ['bedrooms'] },

  // Baths
  { src: 'primary-bath.jpg', alt: 'The primary bathroom, with a double oak vanity and brass fittings', tags: ['bath'] },
  { src: 'primary-bath-shower.jpg', alt: 'The primary walk-in shower, tiled floor to ceiling with a bench seat', tags: ['bath'] },
  { src: 'primary-bath-closet.jpg', alt: 'The primary vanity beside the fitted walk-in closet', tags: ['bath'] },
  { src: 'second-bath.jpg', alt: 'The second bathroom, with a walk-in shower and patterned tile floor', tags: ['bath'] },
  { src: 'second-bath-vanity.jpg', alt: 'The second bathroom vanity, with its walk-in closet beyond', tags: ['bath'] },
  { src: 'powder-room.jpg', alt: 'The powder room on the main level', tags: ['bath'] },

  // Work & utility
  { src: 'laundry.jpg', alt: 'The utility room: a full-size stacked washer and dryer beside a built-in desk', tags: ['workspace'] },
  { src: 'desk-nook.jpg', alt: 'The built-in desk nook, panelled in oak', tags: ['workspace'] },
  { src: 'laundry-desk-kitchen.jpg', alt: 'The utility room and desk nook, with the kitchen visible beyond', tags: ['workspace'] },

  // Outdoor
  { src: 'private-deck.jpg', alt: 'The private deck, with a table and stools among the planting', tags: ['outdoor'] },
  { src: 'deck-rocker.jpg', alt: 'A rocking chair on the deck, the ocean visible past the hedge', tags: ['outdoor', 'views'] },
  { src: 'entry.jpg', alt: 'The gated private entrance to the residence', tags: ['outdoor', 'building'] },

  // Ocean views
  { src: 'lawn-sunset.jpg', alt: 'The community lawn at sunset, the sky pink over the Pacific', tags: ['views'], caption: 'Evenings on the bluff.' },
  { src: 'beach-twilight.jpg', alt: 'The beach and surf below the bluff at twilight', tags: ['views'] },
  { src: 'bluff-benches.jpg', alt: 'Benches set at the bluff edge, looking out over the water', tags: ['views', 'building'] },
  { src: 'bluff-walk-twilight.jpg', alt: 'The bluff-top walkway at dusk, lit along its length', tags: ['views', 'building'] },
  { src: 'beach-stairs.jpg', alt: 'The private stairs leading down the bluff to the sand', tags: ['views', 'building'] },
  { src: 'bluff-lawn.jpg', alt: 'Lawn running to the bluff edge with the ocean beyond', tags: ['views', 'building'] },

  // Community & building
  { src: 'pool.jpg', alt: 'The community pool', tags: ['building'] },
  { src: 'spa.jpg', alt: 'The community spa beside the pool deck', tags: ['building'] },
  { src: 'pool-deck.jpg', alt: 'Loungers and umbrellas on the pool deck', tags: ['building'] },
  { src: 'pergola-walk.jpg', alt: 'A pergola-covered walkway through the community planting', tags: ['building'] },
  { src: 'grounds-courtyard.jpg', alt: 'A landscaped courtyard between the buildings', tags: ['building'] },
  { src: 'building-turret.jpg', alt: 'The cedar-shingled building with its distinctive round turret', tags: ['building'] },
  { src: 'building-twilight.jpg', alt: 'The building at dusk with its windows lit', tags: ['building'] },
  { src: 'entry-path.jpg', alt: 'The planted path leading to the residence', tags: ['building'] },
];

/**
 * The teaser strip in the "Have a look around" section on the home page.
 *
 * Curated by hand rather than taken off the top of `photos`, because that list
 * is grouped by room — the first few entries are all the same space, which made
 * the strip look like one photograph repeated. Pick shots that are obviously
 * different from each other: the setting, the main rooms, the finish, the
 * community. Every filename must also appear in `photos` above.
 */
export const featuredPhotos: string[] = [
  'lawn-sunset.jpg',
  'living-room-ocean.jpg',
  'kitchen.jpg',
  'primary-bedroom-day.jpg',
  'primary-bath.jpg',
  'bluff-benches.jpg',
  'pool.jpg',
];

/* ── Location ─────────────────────────────────────────────────────────────── */

export const location = {
  eyebrow: 'Location',
  headline: 'A block from Cedros',
  body: 'Seascape Shores is a gated oceanfront community on one of North County San Diego’s most desirable stretches of coastline — lawns to the bluff edge, private stairs to the sand, and the Cedros Avenue Design District a short walk away.',
  /**
   * `distance` is optional. Where an exact figure was not supplied it is left
   * off rather than guessed — add real numbers as you confirm them.
   */
  nearby: [
    { name: 'The beach', detail: 'Private stairs from the bluff', distance: 'On site' },
    { name: 'Pool & spa', detail: 'Open 8am – 10pm daily', distance: 'On site' },
    { name: 'Bluff-top lawns', detail: 'Benches over the water', distance: 'On site' },
    { name: 'Cedros Avenue Design District', detail: 'Shops, galleries, dining', distance: 'About 1 block' },
    { name: 'Gyms & fitness studios', detail: 'State-of-the-art facilities nearby' },
    { name: 'Surfing, hiking & cycling', detail: 'Scenic coastal trails' },
    { name: 'Del Mar, Cardiff, Encinitas & La Jolla', detail: 'All easily accessible' },
  ] as { name: string; detail: string; distance?: string }[],
  /**
   * TODO: paste a Google Maps embed URL, or leave null to show a simple
   * address card instead of a map.
   * Google Maps → search the address → Share → Embed a map → copy the src="..."
   */
  mapEmbedUrl: null as string | null,
  /** TODO: shown when there is no map embed. Set to null to hide. */
  address: 'Solana Beach, California',
};

/* ── Leasing ──────────────────────────────────────────────────────────────── */

export interface LeaseOption {
  name: string;
  summary: string;
  detail: string;
  /** Shown as a small tag on the card. */
  note?: string;
}

export const leaseOptions: LeaseOption[] = [
  {
    name: 'Fully furnished',
    summary: 'Turnkey',
    detail:
      'Arrive with a suitcase. Custom furnishings throughout, high-end appliances, and a recent full remodel — ready to enjoy from day one.',
  },
  {
    name: 'Semi-furnished',
    summary: 'Bring some of your own',
    detail:
      'Keep the pieces that matter to you and use ours for the rest. A middle path that suits a longer stay.',
    note: 'Reduced rates may be available',
  },
  {
    name: 'Unfurnished',
    summary: 'Make it completely your own',
    detail:
      'The residence, empty, ready for your own furniture and your own arrangement.',
    note: 'Reduced rates may be available',
  },
];

export const leasing = {
  eyebrow: 'Leasing',
  headline: 'Furnished, semi-furnished, or unfurnished',
  body: 'One of the residence’s greatest advantages is flexibility — in how it is furnished, and in how long you take it for.',
  /** TODO: confirm before going live. */
  rateRange: '$10,500 – $15,500',
  rateUnit: 'per month',
  rateNote: 'Depending on length and terms of stay.',
  terms: [
    'Flexible lease terms — from a seasonal stay to a longer-term residence',
    'Reduced rates may be available for select semi-furnished or unfurnished arrangements',
    'Suited to relocation, temporary housing, or an extended coastal escape',
  ],
};

/* ── Utilities & care ─────────────────────────────────────────────────────── */

export const utilities = {
  eyebrow: 'Utilities & care',
  headline: 'What is covered',
  ownerProvides: {
    title: 'The owner provides',
    items: ['Water', 'Landscaping', 'Basic cable'],
  },
  tenantProvides: {
    title: 'The tenant covers',
    items: ['Gas and electricity', 'Internet', "Renter's insurance"],
  },
  housekeeping:
    'Regular housekeeping is required to help keep the residence fresh and well maintained. Referrals are available if you would like them.',
};

/* ── Reviews ──────────────────────────────────────────────────────────────── */

export interface Review {
  quote: string;
  author: string;
  detail: string;
}

/**
 * Intentionally empty. The section renders nothing while this array is empty,
 * so the site simply omits it.
 *
 * Only add real quotes from real tenants here — invented testimonials on a
 * live listing misrepresent the property to people making a financial decision.
 */
export const reviews: Review[] = [];

/* ── Inquiry section copy ─────────────────────────────────────────────────── */

export const inquire = {
  eyebrow: 'Availability',
  headline: 'Ask about the residence',
  body: 'Tell us roughly when you would like to move in, how long you are looking for, and whether you would want it furnished. We will come back with availability, an exact quote, and answers to anything else.',
};

/* ── Footer ───────────────────────────────────────────────────────────────── */

export const footer = {
  note: 'Privately owned. Inquiries come straight to us.',
  /** TODO: add or remove links. Set to [] to hide the row. */
  links: [] as { label: string; href: string }[],
};
