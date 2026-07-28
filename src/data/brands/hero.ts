// M1 (Hero) content for the "Tüm Markalar" (/markalar) page. This page is
// built up modularly (M1, M2, M3…), each an independent section/component —
// this file only ever holds M1's data.

export interface BrandHeroCta {
  label: string;
  href: string;
}

export interface BrandHeroImage {
  src: string;
  alt: string;
}

export interface BrandHeroFloatingCard {
  value: string;
  label: string;
  description: string;
}

export interface BrandHeroContent {
  badge: string;
  headingLines: string[];
  description: string[];
  ctaPrimary: BrandHeroCta;
  ctaSecondary: BrandHeroCta;
  trustPills: string[];
  image: BrandHeroImage;
  floatingCard: BrandHeroFloatingCard;
}

export const brandHero: BrandHeroContent = {
  badge: "18+ Dünya Markası",
  headingLines: [
    "İşitme Cihazı",
    "Markalarını",
    "Keşfedin.",
  ],
  description: [
    "Oticon, Phonak, Signia, Widex, ReSound, NuEar, Vista ve daha birçok dünya markasını tek noktada inceleyin.",
    "İşitme kaybınıza en uygun teknolojiyi uzman desteğiyle birlikte belirleyin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: "tel:+905337733199" },
  ctaSecondary: { label: "WhatsApp", href: "https://wa.me/905337733199" },
  trustPills: [
    "Ücretsiz İşitme Testi",
    "SGK Anlaşmalı",
    "18+ Dünya Markası",
    "Uzman Odyolog Desteği",
  ],
  // The image itself is already a fully composed illustration (devices on a
  // podium, all 10 brand logos in a ring, connector lines, glow) — the Hero
  // markup shows it as a single framed photo, not a re-built composition.
  image: {
    src: "/images/pages/isitme-cihazi-markalari.webp",
    alt: "Oticon, Phonak, Signia, Widex, ReSound, Beltone, Unitron, Bernafon, Starkey ve NuEar marka logolarıyla çevrili işitme cihazları",
  },
  floatingCard: {
    value: "18+",
    label: "Dünya Markası",
    description: "İşitme Cihazı Seçimi, Uzmanlık Gerektirir.",
  },
};
