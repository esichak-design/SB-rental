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
    'Perched on the bluffs overlooking the Pacific, the residence is filled with natural light and designed for relaxed, sophisticated coastal living. Approximately 1,500 square feet, two bedrooms, two and a half baths.',
    'It has been extensively remodeled with high-end appliances, quality finishes, and custom furnishings throughout. The open-concept living and dining spaces suit entertaining, working remotely, or simply sitting with the ever-changing Pacific backdrop.',
    'The kitchen is designed for both everyday living and entertaining, and the two bedroom suites are quiet, private retreats at the end of the day.',
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
    { title: 'Working remotely', detail: 'Room to work, with a view worth looking up for.' },
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
      'Approximately 1,500 square feet',
      'Two bedrooms, two and a half bathrooms',
      'Recently and extensively renovated',
      'Open-concept living and dining',
      'Filled with natural light',
    ],
  },
  {
    title: 'Kitchen',
    items: [
      'High-end appliances throughout',
      'Quality finishes',
      'Designed for everyday living and entertaining',
    ],
  },
  {
    title: 'Finishes & furnishings',
    items: [
      'Custom furnishings throughout',
      'Available furnished, semi-furnished, or unfurnished',
      'Move-in ready as a turnkey residence',
    ],
  },
  {
    title: 'Views & outlook',
    items: [
      'Spectacular Pacific Ocean views',
      'Bluff-top position above the beach',
      'Sunsets from home',
    ],
  },
  {
    title: 'Community',
    items: [
      'Gated oceanfront community',
      'Beach access',
      'Community pool',
    ],
  },
  {
    title: 'Parking & storage',
    items: [
      'Two parking spaces',
      'Additional storage',
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
      'Open-concept and oriented to the water, with room to entertain, work, or sit and watch the Pacific change through the day.',
    image: '/images/living-room.svg',
    imageAlt: 'The open-concept living and dining area facing the ocean',
  },
  {
    name: 'Kitchen',
    detail:
      'Remodeled with high-end appliances and quality finishes — designed for everyday cooking as much as for having people over.',
    image: '/images/kitchen.svg',
    imageAlt: 'The renovated kitchen with high-end appliances',
  },
  {
    name: 'Primary Suite',
    detail:
      'A private retreat with its own bath. Wake up to the ocean.',
    image: '/images/primary-bedroom.svg',
    imageAlt: 'The primary bedroom suite',
  },
  {
    name: 'Second Suite',
    detail:
      'The second bedroom suite, equally quiet and equally private, with its own bath.',
    image: '/images/second-bedroom.svg',
    imageAlt: 'The second bedroom suite',
  },
  {
    name: 'Ocean Views',
    detail:
      'Panoramic Pacific views from the bluff — surfers in the morning, sunsets in the evening.',
    image: '/images/views.svg',
    imageAlt: 'Panoramic Pacific Ocean views from the residence',
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
  body: 'A gated oceanfront community on one of North County San Diego’s most desirable stretches of coastline, with the Cedros Avenue Design District a short walk away.',
  /**
   * `distance` is optional. Where an exact figure was not supplied it is left
   * off rather than guessed — add real numbers as you confirm them.
   */
  nearby: [
    { name: 'The beach', detail: 'Community beach access', distance: 'On site' },
    { name: 'Community pool', detail: 'Within the gated community', distance: 'On site' },
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
