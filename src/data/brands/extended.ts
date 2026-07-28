// M6 (Extended Brands) content for the "Tüm Markalar" (/markalar) page.
// This page is built up modularly (M1...M6…), each an independent
// section/component — this file only ever holds M6's data.
//
// Logo + name only, deliberately: no per-brand description or feature
// claim. The project has no verified per-brand copy, and this section's
// whole point is a quiet, secondary "we're not limited to a few brands"
// signal — not a second product showcase.

export interface ExtendedBrand {
  name: string;
  slug: string;
  logo: string;
}

export interface BrandExtendedContent {
  eyebrow: string;
  heading: string;
  intro: string;
  brands: ExtendedBrand[];
}

export const brandExtended: BrandExtendedContent = {
  eyebrow: "Diğer Premium Markalar",
  heading: "Merkezimizde Desteklenen Diğer Markalar",
  intro:
    "Öne çıkan markaların yanı sıra, aşağıdaki dünya markaları için de bilgi ve destek sağlıyoruz.",
  brands: [
    { name: "Audio Service", slug: "audio-service", logo: "/images/brands/audio-service-logo-seffaf.webp" },
    { name: "Unitron", slug: "unitron", logo: "/images/brands/unitron-logo-seffaf.webp" },
    { name: "Bernafon", slug: "bernafon", logo: "/images/brands/bernafon-logo-seffaf.webp" },
    { name: "A&M", slug: "am", logo: "/images/brands/am-logo-seffaf.webp" },
    { name: "Philips Hearing", slug: "philips-hearing", logo: "/images/brands/philips-logo-seffaf.webp" },
    { name: "Maico", slug: "maico", logo: "/images/brands/maico-logo-seffaf.webp" },
    { name: "Beltone", slug: "beltone", logo: "/images/brands/beltone-logo-seffaf.webp" },
    { name: "Vista", slug: "vista", logo: "/images/brands/vista-logo-seffaf.webp" },
    { name: "Rexton", slug: "rexton", logo: "/images/brands/rexton-logo-seffaf.webp" },
    { name: "Sonic", slug: "sonic", logo: "/images/brands/sonic-logo-seffaf.webp" },
    { name: "Coselgi", slug: "coselgi", logo: "/images/brands/coselgi-logo-seffaf.webp" },
    { name: "Audifon", slug: "audifon", logo: "/images/brands/audifon-logo-seffaf.webp" },
  ],
};
