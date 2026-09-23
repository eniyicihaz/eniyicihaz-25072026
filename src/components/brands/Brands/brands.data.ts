import type { BrandsContent } from "./brands.types";

// Logo files live in /public/images/brands/ (referenced by plain path, not
// import — Astro serves public/ files as-is). Each brand links to its real,
// fully-built /markalar/{slug} page (no longer a stub — all 18 brand pages
// shipped this project). Heading/subhead rewritten to drop "en iyi/lider"
// superlatives (PRINCIPLES §5) and instead state the actual objection this
// section exists to resolve: "kendi markasını değil, bana uygun olanı mı
// öneriyor?" (homepage plan §G/§4).
export const brands: BrandsContent = {
  badge: "18+ Dünya Markası",
  heading: "18'den Fazla Dünya Markasıyla Çalışıyoruz",
  subhead:
    "Tek bir markaya bağlı değiliz; işitme kaybınıza ve yaşam tarzınıza göre, aralarından size en uygun olanı öneriyoruz.",
  brands: [
    { name: "Oticon", slug: "oticon", logo: "/images/brands/oticon-logo-seffaf.webp" },
    { name: "Phonak", slug: "phonak", logo: "/images/brands/phonak-logo-seffaf.webp" },
    { name: "Signia", slug: "signia", logo: "/images/brands/signia-logo-seffaf.webp" },
    { name: "Widex", slug: "widex", logo: "/images/brands/widex-logo-seffaf.webp" },
    { name: "ReSound", slug: "resound", logo: "/images/brands/resound-logo-seffaf.webp" },
    { name: "NuEar", slug: "nuear", logo: "/images/brands/nuear-logo-seffaf.webp" },
    { name: "Vista", slug: "vista", logo: "/images/brands/vista-logo-seffaf.webp" },
    { name: "Unitron", slug: "unitron", logo: "/images/brands/unitron-logo-seffaf.webp" },
    { name: "Bernafon", slug: "bernafon", logo: "/images/brands/bernafon-logo-seffaf.webp" },
    {
      name: "Philips Hearing",
      slug: "philips-hearing",
      logo: "/images/brands/philips-logo-seffaf.webp",
    },
    { name: "Rexton", slug: "rexton", logo: "/images/brands/rexton-logo-seffaf.webp" },
    { name: "Beltone", slug: "beltone", logo: "/images/brands/beltone-logo-seffaf.webp" },
    { name: "Sonic", slug: "sonic", logo: "/images/brands/sonic-logo-seffaf.webp" },
    {
      name: "Audio Service",
      slug: "audio-service",
      logo: "/images/brands/audio-service-logo-seffaf.webp",
    },
    { name: "Coselgi", slug: "coselgi", logo: "/images/brands/coselgi-logo-seffaf.webp" },
    { name: "Audifon", slug: "audifon", logo: "/images/brands/audifon-logo-seffaf.webp" },
    { name: "A&M", slug: "am", logo: "/images/brands/am-logo-seffaf.webp" },
    { name: "Maico", slug: "maico", logo: "/images/brands/maico-logo-seffaf.webp" },
  ],
  trust: {
    label: "SGK Anlaşmalı İşitme Cihazları",
    description:
      "Tüm SGK kapsamındaki işlemleriniz için uzman desteği sağlıyoruz.",
    href: "/sgk-isitme-cihazi-odemesi",
  },
  hubCta: { label: "Tüm markaları inceleyin", href: "/markalar" },
};
