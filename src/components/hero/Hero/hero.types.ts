// ==========================================================
// Hero — Domain types (data contracts)
// Rebuilt to match the reference design (hero son.png). Content lives in
// hero.data.ts; icons referenced by string key, resolved in Hero.astro.
// ==========================================================

export interface HeroCtaLink {
  label: string;
  href: string;
}

export interface HeroImageCardData {
  /** Path under /public — placeholder filenames until real photos exist. */
  image: string;
  alt: string;
  icon: "waves" | "message" | "heart";
  title: string;
  text: string;
}

export interface HeroTrustItemData {
  icon: "award" | "shield" | "users" | "gem";
  value: string;
  label: string;
}

export interface HeroContent {
  badge: string;
  headlineLine1: string;
  headlineLine2: string;
  subhead: string;
  ctaPrimary: HeroCtaLink;
  ctaSecondary: HeroCtaLink;
  cards: [HeroImageCardData, HeroImageCardData, HeroImageCardData];
  trustItems: [
    HeroTrustItemData,
    HeroTrustItemData,
    HeroTrustItemData,
    HeroTrustItemData,
  ];
}
