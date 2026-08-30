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
  /** Path under /public — e.g. "/images/living-room.jpg" */
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

export type GalleryTag = 'living' | 'kitchen' | 'bedrooms' | 'bath' | 'outdoor' | 'views' | 'building';

export const galleryTags: { id: GalleryTag; label: string }[] = [
  { id: 'living', label: 'Living' },
  { id: 'kitchen', label: 'Kitchen & Dining' },
  { id: 'bedrooms', label: 'Bedrooms' },
  { id: 'bath', label: 'Baths' },
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
  /** TODO: replace with your best wide, bright ocean-view photo. */
  image: '/images/hero.svg',
  imageAlt: 'The Pacific Ocean at golden hour, seen from the residence',
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
  image: '/images/living-room.svg',
  imageAlt: 'The open-concept living room, looking out to the Pacific',
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
    image: '/images/living-room.svg',
    imageAlt: 'The vaulted living room with fireplace and built-in window seat',
  },
  {
    name: 'Kitchen',
    detail:
      'White shaker cabinetry against an oak island, quartz counters and a full-slab backsplash, a professional gas range under a vented oak hood, and a built-in refrigerator. Three stools at the island; the deck is a step away.',
    image: '/images/kitchen.svg',
    imageAlt: 'The renovated kitchen with oak island and professional gas range',
  },
  {
    name: 'Primary Suite',
    detail:
      'The gable end of the upper floor, given over to a wall of glass above the water. A fireplace at the foot of the bed, a beamed ceiling overhead, a double oak vanity, and a fitted walk-in closet.',
    image: '/images/primary-bedroom.svg',
    imageAlt: 'The primary suite with a gable window over the ocean and a fireplace',
  },
  {
    name: 'Second Bedroom',
    detail:
      'Quiet and bright, with its own full bath and a fitted walk-in closet — as workable for guests as it is for a family.',
    image: '/images/second-bedroom.svg',
    imageAlt: 'The second bedroom with two beds and its own bath',
  },
  {
    name: 'Work & Utility',
    detail:
      'A built-in desk nook panelled in oak, and full-size laundry inside the residence rather than shared down a corridor. Small things that matter over a longer stay.',
    image: '/images/office.svg',
    imageAlt: 'The built-in desk nook and in-residence laundry',
  },
  {
    name: 'Outside',
    detail:
      'A private gated patio at the door. Beyond it, lawns running to the bluff edge, benches set over the water, a pool and spa, and private stairs down to the sand.',
    image: '/images/terrace.svg',
    imageAlt: 'The private entry patio and the bluff-top lawns beyond',
  },
];

/* ── Gallery ──────────────────────────────────────────────────────────────── */

/**
 * TODO: replace every entry below with the real photos.
 *
 * Drop the files into `public/images/` and point `src` at them, e.g.
 * `/images/living-room-01.jpg`. Write a real `alt` for each one — it is what
 * screen-reader users hear and what search engines read.
 */
export const photos: Photo[] = [
  { src: '/images/hero.svg', alt: 'Sunset over the Pacific from the residence', tags: ['views'], caption: 'Sunsets, from home.' },
  { src: '/images/living-room.svg', alt: 'Open-concept living room facing the ocean', tags: ['living'] },
  { src: '/images/kitchen.svg', alt: 'Renovated kitchen with high-end appliances', tags: ['kitchen'] },
  { src: '/images/dining.svg', alt: 'Dining area', tags: ['kitchen'] },
  { src: '/images/primary-bedroom.svg', alt: 'Primary bedroom suite', tags: ['bedrooms'] },
  { src: '/images/second-bedroom.svg', alt: 'Second bedroom suite', tags: ['bedrooms'], orientation: 'portrait' },
  { src: '/images/primary-bath.svg', alt: 'Primary en-suite bathroom', tags: ['bath'], orientation: 'portrait' },
  { src: '/images/second-bath.svg', alt: 'Second full bathroom', tags: ['bath'] },
  { src: '/images/views.svg', alt: 'Panoramic Pacific Ocean views', tags: ['views', 'outdoor'] },
  { src: '/images/terrace.svg', alt: 'Outdoor space overlooking the ocean', tags: ['outdoor'] },
  { src: '/images/pool.svg', alt: 'The community pool', tags: ['building'] },
  { src: '/images/beach.svg', alt: 'The beach below the bluff', tags: ['building', 'views'], orientation: 'portrait' },
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
