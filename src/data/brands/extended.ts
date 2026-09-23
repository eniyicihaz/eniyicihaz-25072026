// M6 (Extended Brands) content for the "Tüm Markalar" (/markalar) page.
// This page is built up modularly (M1...M6…), each an independent
// section/component — this file only ever holds M6's data.
// BrandExtended.astro is now generic (reused by every hub page), so its
// interface lives in the component file and is imported back here; each
// item's `href` is now explicit rather than a `/markalar/` + slug prefix.
//
// Logo + name only, deliberately: no per-brand description or feature
// claim. The project has no verified per-brand copy, and this section's
// whole point is a quiet, secondary "we're not limited to a few brands"
// signal — not a second product showcase.

import type { BrandExtendedContent } from "../../components/brands/BrandExtended/BrandExtended.astro";

export const brandExtended: BrandExtendedContent = {
  eyebrow: "Diğer Premium Markalar",
  heading: "Merkezimizde Desteklenen Diğer Markalar",
  intro:
    "Öne çıkan markaların yanı sıra, aşağıdaki dünya markaları için de bilgi ve destek sağlıyoruz.",
  brands: [
    { name: "Audio Service", href: "/markalar/audio-service", logo: "/images/brands/audio-service-logo-seffaf.webp" },
    { name: "Unitron", href: "/markalar/unitron", logo: "/images/brands/unitron-logo-seffaf.webp" },
    { name: "Bernafon", href: "/markalar/bernafon", logo: "/images/brands/bernafon-logo-seffaf.webp" },
    { name: "A&M", href: "/markalar/am", logo: "/images/brands/am-logo-seffaf.webp" },
    { name: "Philips Hearing", href: "/markalar/philips-hearing", logo: "/images/brands/philips-logo-seffaf.webp" },
    { name: "Maico", href: "/markalar/maico", logo: "/images/brands/maico-logo-seffaf.webp" },
    { name: "Beltone", href: "/markalar/beltone", logo: "/images/brands/beltone-logo-seffaf.webp" },
    { name: "Vista", href: "/markalar/vista", logo: "/images/brands/vista-logo-seffaf.webp" },
    { name: "Rexton", href: "/markalar/rexton", logo: "/images/brands/rexton-logo-seffaf.webp" },
    { name: "Sonic", href: "/markalar/sonic", logo: "/images/brands/sonic-logo-seffaf.webp" },
    { name: "Coselgi", href: "/markalar/coselgi", logo: "/images/brands/coselgi-logo-seffaf.webp" },
    { name: "Audifon", href: "/markalar/audifon", logo: "/images/brands/audifon-logo-seffaf.webp" },
  ],
};
