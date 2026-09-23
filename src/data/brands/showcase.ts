// M2 (Brand Showcase) content for the "Tüm Markalar" (/markalar) page. This
// page is built up modularly (M1, M2, M3…), each an independent
// section/component — this file only ever holds M2's data.
// BrandShowcase.astro is now generic (reused by every hub page), so its
// interface lives in the component file and is imported back here; each
// item's `href` is now explicit rather than a `/markalar/` + slug prefix.
//
// Deliberately no per-brand description or feature tag: the project has no
// verified marketing/technical copy for individual brands, and inventing
// claims about real medical-device manufacturers isn't something to do
// silently. The showcase's premium feel comes from logo, typography,
// spacing and hover — not from fabricated text.

import type { BrandShowcaseContent } from "../../components/brands/BrandShowcase/BrandShowcase.astro";

export const brandShowcase: BrandShowcaseContent = {
  // Matches header.data.ts's brandsMega column title exactly, for
  // consistency across the site.
  eyebrow: "Öne Çıkan Markalar",
  heading: "Dünyanın Önde Gelen İşitme Cihazı Markaları",
  subhead:
    "Güvenilir global üreticilerin orijinal ürünlerini bünyemizde sunuyoruz.",
  ctaLabel: "Markayı Gör",
  brands: [
    { name: "Oticon", href: "/markalar/oticon", logo: "/images/brands/oticon-logo-seffaf.webp" },
    { name: "Phonak", href: "/markalar/phonak", logo: "/images/brands/phonak-logo-seffaf.webp" },
    { name: "Signia", href: "/markalar/signia", logo: "/images/brands/signia-logo-seffaf.webp" },
    { name: "Widex", href: "/markalar/widex", logo: "/images/brands/widex-logo-seffaf.webp" },
    { name: "ReSound", href: "/markalar/resound", logo: "/images/brands/resound-logo-seffaf.webp" },
    { name: "NuEar", href: "/markalar/nuear", logo: "/images/brands/nuear-logo-seffaf.webp" },
  ],
};
