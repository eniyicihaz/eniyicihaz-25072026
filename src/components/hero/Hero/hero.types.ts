// ==========================================================
// Hero — Domain types (data contracts)
// 6-slide carousel redesign. Slide 1 is the evolved single-slide Hero
// (real Darıca photo, 3 CTAs, brandLock) that this project already had;
// slides 2–6 are new, single-CTA slides sharing the same generic
// HeroSlideContent shape via HeroSlide.astro. Content lives in
// hero.data.ts.
// ==========================================================

export interface HeroCtaLink {
  label: string;
  href: string;
}

export interface HeroImageData {
  /** Path under /public. Real intrinsic width/height (not a guess) — set
   *  as the <img> width/height attributes so the browser reserves the
   *  correct aspect ratio before load, preventing layout shift. */
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Every slide's visual frame is locked to one shared aspect ratio
   *  (1672:941, slide 1's photo) so carousel height stays stable without
   *  JS measurement. "cover" (default) fills that frame, cropping any
   *  image whose own ratio differs. Set "contain" when the image's real
   *  content (e.g. a row of devices reaching both edges) would have
   *  subjects cropped by "cover" — the frame keeps its shared size, the
   *  image just letterboxes inside it instead. */
  fit?: "cover" | "contain";
}

/** One real brand logo, reused verbatim from Brands.astro's own data
 *  shape (src/components/brands/Brands/brands.types.ts) — no new/invented
 *  logos, this is the same 18-brand set. */
export interface HeroBrandLogoRef {
  name: string;
  slug: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
}

/** Slide 1 only: the real, user-supplied Darıca center photo. */
export interface HeroSlideVisualPhoto {
  kind: "photo";
  image: HeroImageData;
}

/** Slide 4 (Markalar) only: a grid of real brand logos — not a photo. */
export interface HeroSlideVisualBrandMosaic {
  kind: "brand-mosaic";
  logos: HeroBrandLogoRef[];
}

/** Slides 2, 3, 5, 6 until real photos exist for them: a deliberately
 *  abstract, icon-based surface (dot-grid + soft glow + a single lucide
 *  icon) — never a stock photo, never presented as a real environment. */
export interface HeroSlideVisualPlaceholder {
  kind: "placeholder";
  icon: "headphones" | "stethoscope" | "map-pin" | "battery";
}

export type HeroSlideVisual =
  | HeroSlideVisualPhoto
  | HeroSlideVisualBrandMosaic
  | HeroSlideVisualPlaceholder;

/** Slide 6's price callout, split so the amount can be styled as a real
 *  visual emphasis (large, primary blue) while the suffix stays a quiet
 *  secondary caption — a plain string forced HeroSlide.astro to render the
 *  whole line at one uniform size/weight, which read as a small aside
 *  rather than the "gözü hemen yakalayan" emphasis the price is meant to
 *  be. */
export interface HeroPriceHighlight {
  amount: string;
  suffix: string;
}

export interface HeroTrustItemData {
  icon: "award" | "shield" | "users" | "gem";
  value: string;
  label: string;
}

/** A slide-specific 4-card info row, reusing the exact same visual recipe
 *  as the slide-1 trust cards (same class in HeroSlide.astro's parent,
 *  Hero.astro) rather than inventing a second card design. Slides 2
 *  (İşitme Cihazları), 3 (Ücretsiz İşitme Testi), 4 (Markalar), 5 (Hizmet
 *  Bölgemiz), and 6 (Piller) each set their own — slide 1's trustItems
 *  stay a separate, unrelated field. */
export interface HeroInfoCardData {
  icon:
    | "ear"
    | "headphones"
    | "battery-charging"
    | "bluetooth"
    | "message-circle"
    | "activity"
    | "clipboard-check"
    | "lightbulb"
    | "layout-grid"
    | "cpu"
    | "shapes"
    | "user-check"
    | "map-pin"
    | "navigation"
    | "map-pinned"
    | "map"
    | "battery"
    | "layers";
  title: string;
  description: string;
}

export interface HeroSlideContent {
  id: string;
  eyebrow?: string;
  /** May contain a literal "\n" to mark a two-line headline (the second
   *  line renders with the accent color) — only slide 1 uses this today.
   *  Every other slide is a single line. */
  heading: string;
  /** Exactly one slide in `heroSlides` may be "h1" — the page's only H1.
   *  All others must be "h2". Enforced by convention, not by the type
   *  system (a discriminated array position isn't practical here), so
   *  hero.data.ts carries the authoritative comment. */
  headingLevel: "h1" | "h2";
  body?: string[];
  /** Slide 6 only: a short, real, approved price callout rendered as its
   *  own line (never invented — see hero.data.ts comment for the source
   *  of truth). */
  priceHighlight?: HeroPriceHighlight;
  /** Every slide's single primary action. */
  cta: HeroCtaLink;
  /** Slide 1 only (call + WhatsApp) — no other slide gets extra CTAs, by
   *  design ("her slaytta tek ana CTA"). */
  secondaryCtas?: HeroCtaLink[];
  /** Slide 1 only — PRINCIPLES.md §2's brand-lock line. */
  brandLock?: string;
  visual: HeroSlideVisual;
  /** Slide-specific 4-card info row (currently slides 2–6). Rendered
   *  outside the sliding track, in the same reserved footer-card area as
   *  slide 1's trustItems, shown only while this slide is active — see
   *  Hero.astro's `.hero__footer-cards` for the CSS-driven (no JS change)
   *  visibility toggle. */
  infoCards?: [HeroInfoCardData, HeroInfoCardData, HeroInfoCardData, HeroInfoCardData];
}

export interface HeroContent {
  slides: HeroSlideContent[];
  trustItems: [
    HeroTrustItemData,
    HeroTrustItemData,
    HeroTrustItemData,
    HeroTrustItemData,
  ];
}
