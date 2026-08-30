/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE CONTENT — single source of truth
 * ─────────────────────────────────────────────────────────────────────────────
 * Every piece of copy, every number, every photo reference on the site lives
 * here. Edit this file and the whole site updates. You should not need to touch
 * any .astro component to change wording, rates, amenities, or photos.
 *
 * Anything marked `TODO:` is a placeholder — replace it with your real details.
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
  { id: 'outdoor', label: 'Balcony' },
  { id: 'views', label: 'Views' },
  { id: 'building', label: 'Building & Beach' },
];

/* ── Identity ─────────────────────────────────────────────────────────────── */

export const site = {
  /** TODO: your condo's name. */
  name: 'Sandpiper Bay',
  /** Short tagline under the name in the header/footer. */
  shortName: 'Sandpiper Bay',
  /** TODO: city, state. */
  location: 'Siesta Key, Florida',
  /** Used in <title> and social cards. */
  tagline: 'A light-filled beachfront condo on the Gulf',
  description:
    'A two-bedroom beachfront condo with panoramic Gulf views, a full kitchen, and steps-from-the-sand access. Sleeps six.',
  /** TODO: set to your live domain, and update `site` in astro.config.mjs to match. */
  url: 'https://example.com',
};

/* ── Contact ──────────────────────────────────────────────────────────────── */

export const contact = {
  /** TODO: the address inquiries should reach. */
  email: 'hello@example.com',
  /** TODO: or set to null to hide the phone number entirely. */
  phone: '(555) 555-0123',
  /** Used for tel: links — digits only. */
  phoneHref: '+15555550123',
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
   * Until one is configured the form stays visible but tells the visitor to
   * email you directly, so the site is never a dead end.
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
  { label: 'The Condo', href: '/#the-condo' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Amenities', href: '/#amenities' },
  { label: 'Location', href: '/#location' },
  { label: 'Rates', href: '/#rates' },
];

/* ── Hero ─────────────────────────────────────────────────────────────────── */

export const hero = {
  eyebrow: 'Siesta Key, Florida',
  /** Rendered large. Keep it short. */
  headline: 'Wake up to the Gulf',
  subhead:
    'A quiet two-bedroom condo where the balcony faces west, the sand starts at the end of the boardwalk, and the sunsets do most of the work.',
  /** TODO: replace with your best wide, bright photo. */
  image: '/images/hero.svg',
  imageAlt: 'The Gulf of Mexico at golden hour, seen from the condo balcony',
  cta: { label: 'Check availability', href: '#inquire' },
  secondaryCta: { label: 'See the photos', href: '/gallery' },
};

/* ── Quick facts (the strip under the hero) ───────────────────────────────── */

export const quickFacts = [
  { value: '2', label: 'Bedrooms' },
  { value: '2', label: 'Bathrooms' },
  { value: '6', label: 'Sleeps' },
  { value: '1,100', label: 'Sq ft' },
];

/* ── Intro / "The Condo" ──────────────────────────────────────────────────── */

export const intro = {
  eyebrow: 'The Condo',
  headline: 'Room to spread out, right on the water',
  /** Each string becomes a paragraph. */
  body: [
    'Floor-to-ceiling sliders open onto a private balcony that runs the width of the living room. The kitchen is fully equipped — real knives, a proper coffee setup, enough counter space to cook a full dinner without anyone getting in the way.',
    'Both bedrooms are quiet and dark, with blackout shades and good mattresses. The primary looks out over the water; the second has two queens and works just as well for kids as it does for a second couple.',
    'It is a genuine beachfront building, not a "beach view" one. The boardwalk from the pool deck puts you on the sand in about ninety seconds.',
  ],
  /** TODO: a warm interior shot works well here. */
  image: '/images/living-room.svg',
  imageAlt: 'The living room, with sliding doors open to the balcony',
};

/* ── Amenities ────────────────────────────────────────────────────────────── */

export interface AmenityGroup {
  title: string;
  items: string[];
}

export const amenities: AmenityGroup[] = [
  {
    title: 'Kitchen & Dining',
    items: [
      'Full kitchen, recently renovated',
      'Dishwasher, microwave, full-size fridge',
      'Drip coffee maker and electric kettle',
      'Cookware, knives, and dishes for eight',
      'Seating for six at the dining table',
    ],
  },
  {
    title: 'Comfort',
    items: [
      'Central air conditioning',
      'Blackout shades in both bedrooms',
      'In-unit washer and dryer',
      'Fresh linens and beach towels provided',
      'Iron and ironing board',
    ],
  },
  {
    title: 'Entertainment',
    items: [
      'High-speed Wi-Fi throughout',
      'Smart TV in the living room',
      'TV in the primary bedroom',
      'Books, board games, and beach reads',
      'Bluetooth speaker',
    ],
  },
  {
    title: 'Outside',
    items: [
      'Private balcony with Gulf views',
      'Heated community pool',
      'Direct boardwalk beach access',
      'Beach chairs, umbrella, and cooler',
      'Gas grills on the pool deck',
    ],
  },
  {
    title: 'Practical',
    items: [
      'One assigned covered parking space',
      'Elevator in the building',
      'Keyless entry — no key handoff',
      'Pack-n-play and high chair on request',
      'Beach cart for hauling gear',
    ],
  },
  {
    title: 'Good to know',
    items: [
      'Non-smoking throughout',
      'No pets, sorry — building policy',
      'Quiet hours after 10pm',
      'Minimum age to book is 25',
    ],
  },
];

/* ── The Space (room-by-room) ─────────────────────────────────────────────── */

export interface Room {
  name: string;
  detail: string;
  image: string;
  imageAlt: string;
}

export const rooms: Room[] = [
  {
    name: 'Living & Dining',
    detail:
      'An open room facing the water, with a sectional that comfortably seats five and a dining table for six. The sliders open wide, so most evenings the balcony just becomes part of the room.',
    image: '/images/living-room.svg',
    imageAlt: 'Open-plan living and dining area facing the water',
  },
  {
    name: 'Kitchen',
    detail:
      'Renovated with quartz counters and full-size appliances. Stocked well enough to cook properly — you will not be improvising with a single dull knife and two pans.',
    image: '/images/kitchen.svg',
    imageAlt: 'The renovated kitchen with quartz counters',
  },
  {
    name: 'Primary Bedroom',
    detail:
      'King bed, water views, blackout shades, and an en-suite bath. The quietest room in the unit.',
    image: '/images/primary-bedroom.svg',
    imageAlt: 'The primary bedroom with a king bed and water views',
  },
  {
    name: 'Second Bedroom',
    detail:
      'Two queen beds, blackout shades, and its own TV. Sleeps four comfortably, which is what makes the condo work for two families.',
    image: '/images/second-bedroom.svg',
    imageAlt: 'The second bedroom with two queen beds',
  },
  {
    name: 'Balcony',
    detail:
      'Runs the full width of the living room, west-facing, with a table and four chairs. This is where you will spend the evenings.',
    image: '/images/balcony.svg',
    imageAlt: 'The private balcony with a table and chairs overlooking the Gulf',
  },
];

/* ── Gallery ──────────────────────────────────────────────────────────────── */

/**
 * TODO: replace every entry below with your real photos.
 *
 * Drop the files into `public/images/` and point `src` at them, e.g.
 * `/images/living-room-01.jpg`. Aim for roughly 2000px on the long edge —
 * large enough to look sharp, small enough to load fast.
 *
 * Write a real `alt` for each one. It is what screen-reader users hear and
 * what search engines read.
 */
export const photos: Photo[] = [
  { src: '/images/hero.svg', alt: 'Sunset over the Gulf from the balcony', tags: ['views'], caption: 'Most evenings look about like this.' },
  { src: '/images/living-room.svg', alt: 'Open-plan living room with sliders to the balcony', tags: ['living'] },
  { src: '/images/kitchen.svg', alt: 'Renovated kitchen with quartz counters', tags: ['kitchen'] },
  { src: '/images/dining.svg', alt: 'Dining table set for six', tags: ['kitchen'] },
  { src: '/images/primary-bedroom.svg', alt: 'Primary bedroom with a king bed', tags: ['bedrooms'] },
  { src: '/images/second-bedroom.svg', alt: 'Second bedroom with two queen beds', tags: ['bedrooms'], orientation: 'portrait' },
  { src: '/images/primary-bath.svg', alt: 'Primary en-suite bathroom', tags: ['bath'], orientation: 'portrait' },
  { src: '/images/second-bath.svg', alt: 'Second full bathroom', tags: ['bath'] },
  { src: '/images/balcony.svg', alt: 'Private balcony with seating for four', tags: ['outdoor', 'views'] },
  { src: '/images/pool.svg', alt: 'The heated community pool deck', tags: ['building'] },
  { src: '/images/beach.svg', alt: 'The beach at the end of the boardwalk', tags: ['building', 'views'], orientation: 'portrait' },
  { src: '/images/building.svg', alt: 'The building seen from the beach', tags: ['building'] },
];

/* ── Location ─────────────────────────────────────────────────────────────── */

export const location = {
  eyebrow: 'Location',
  headline: 'On the quiet end of the key',
  body: 'Far enough from the village to sleep with the windows open, close enough to walk to dinner. Here is roughly what is around you.',
  /** TODO: your real distances. Keep them honest — guests notice. */
  nearby: [
    { name: 'The beach', detail: 'Direct boardwalk access', distance: '90 sec walk' },
    { name: 'Siesta Key Village', detail: 'Restaurants, bars, shops', distance: '10 min walk' },
    { name: 'Grocery store', detail: 'Full supermarket', distance: '5 min drive' },
    { name: 'Downtown Sarasota', detail: 'Dining, arts, marina', distance: '20 min drive' },
    { name: 'SRQ Airport', detail: 'Sarasota Bradenton International', distance: '30 min drive' },
    { name: 'Tampa Airport', detail: 'TPA', distance: '75 min drive' },
  ],
  /**
   * TODO: paste a Google Maps embed URL, or leave null to show a simple
   * address card instead of a map.
   * Google Maps → search your address → Share → Embed a map → copy the src="..."
   */
  mapEmbedUrl: null as string | null,
  /** TODO: shown when there is no map embed. Set to null to hide. */
  address: 'Siesta Key, Sarasota County, Florida',
};

/* ── Rates ────────────────────────────────────────────────────────────────── */

export interface Season {
  name: string;
  window: string;
  nightly: string;
  minimum: string;
  note?: string;
}

/** TODO: your real rates and seasons. */
export const rates: Season[] = [
  { name: 'Peak', window: 'February – April', nightly: '$395', minimum: '7 nights', note: 'Saturday-to-Saturday during March.' },
  { name: 'High', window: 'January, May, June', nightly: '$310', minimum: '5 nights' },
  { name: 'Shoulder', window: 'July – August, December', nightly: '$265', minimum: '4 nights' },
  { name: 'Low', window: 'September – November', nightly: '$215', minimum: '3 nights', note: 'The quietest, warmest water of the year.' },
];

export const ratesNotes = {
  headline: 'Rates & stays',
  body: 'Rates are per night for up to six guests. What you see is close to what you pay — the only additions are the cleaning fee and Florida state and county tax.',
  /** TODO: your real fees. Each row shows as a line item. */
  fees: [
    { label: 'Cleaning fee', value: '$225', detail: 'One-time, per stay' },
    { label: 'Taxes', value: '12%', detail: 'Florida state + Sarasota County' },
    { label: 'Security deposit', value: 'None', detail: 'We trust you' },
  ],
  /** TODO: your real policies. */
  policies: [
    'Check-in 4:00pm · Check-out 10:00am',
    '50% deposit to reserve, balance due 30 days before arrival',
    'Full refund on cancellations 60+ days out',
    'Holiday weeks may carry a longer minimum',
  ],
};

/* ── Reviews ──────────────────────────────────────────────────────────────── */

export interface Review {
  quote: string;
  author: string;
  detail: string;
}

/** TODO: swap in real guest reviews. Remove any you have not actually received. */
export const reviews: Review[] = [
  {
    quote:
      'The photos undersell the view. We ate every dinner on the balcony and watched the sun go down over the water. The kitchen had everything we needed.',
    author: 'Megan R.',
    detail: 'Stayed one week in March',
  },
  {
    quote:
      'Spotless, quiet, and genuinely steps from the sand. Two families with four kids between us and nobody felt crowded.',
    author: 'David & Priya',
    detail: 'Stayed ten days in June',
  },
  {
    quote:
      'Easiest booking we have ever done. Keyless entry, clear instructions, and a host who answered every question the same day.',
    author: 'Tom L.',
    detail: 'Stayed five nights in October',
  },
];

/* ── Inquiry section copy ─────────────────────────────────────────────────── */

export const inquire = {
  eyebrow: 'Availability',
  headline: 'Tell us your dates',
  body: 'Send along when you would like to come and how many are in your party. We will come back with availability, an exact quote, and answers to anything you are wondering about.',
};

/* ── Footer ───────────────────────────────────────────────────────────────── */

export const footer = {
  note: 'Privately owned and managed. We answer our own email.',
  /** TODO: add or remove links. Set to [] to hide the row. */
  links: [] as { label: string; href: string }[],
};
