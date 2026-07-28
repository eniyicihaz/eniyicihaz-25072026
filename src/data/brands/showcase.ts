// M2 (Brand Showcase) content for the "Tüm Markalar" (/markalar) page. This
// page is built up modularly (M1, M2, M3…), each an independent
// section/component — this file only ever holds M2's data.
//
// Deliberately no per-brand description or feature tag: the project has no
// verified marketing/technical copy for individual brands, and inventing
// claims about real medical-device manufacturers isn't something to do
// silently. The showcase's premium feel comes from logo, typography,
// spacing and hover — not from fabricated text.

export interface BrandShowcaseItem {
  name: string;
  slug: string;
  logo: string;
}

export interface BrandShowcaseContent {
  eyebrow: string;
  heading: string;
  subhead: string;
  brands: BrandShowcaseItem[];
}

export const brandShowcase: BrandShowcaseContent = {
  // Matches header.data.ts's brandsMega column title exactly, for
  // consistency across the site.
  eyebrow: "Öne Çıkan Markalar",
  heading: "Dünyanın Önde Gelen İşitme Cihazı Markaları",
  subhead:
    "Güvenilir global üreticilerin orijinal ürünlerini bünyemizde sunuyoruz.",
  brands: [
    { name: "Oticon", slug: "oticon", logo: "/images/brands/oticon-logo-seffaf.webp" },
    { name: "Phonak", slug: "phonak", logo: "/images/brands/phonak-logo-seffaf.webp" },
    { name: "Signia", slug: "signia", logo: "/images/brands/signia-logo-seffaf.webp" },
    { name: "Widex", slug: "widex", logo: "/images/brands/widex-logo-seffaf.webp" },
    { name: "ReSound", slug: "resound", logo: "/images/brands/resound-logo-seffaf.webp" },
    { name: "NuEar", slug: "nuear", logo: "/images/brands/nuear-logo-seffaf.webp" },
  ],
};
