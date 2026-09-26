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
  // logoWidth/logoHeight are each file's real intrinsic pixel size
  // (verified via `sharp` metadata) — used only as the <img> width/height
  // attributes to reserve the correct aspect ratio and prevent layout
  // shift; they do not change how large any logo renders (that's still
  // .brands__logo's fixed CSS box + object-fit: contain).
  brands: [
    { name: "Oticon", slug: "oticon", logo: "/images/brands/oticon-logo-seffaf.webp", logoWidth: 1774, logoHeight: 887 },
    { name: "Phonak", slug: "phonak", logo: "/images/brands/phonak-logo-seffaf.webp", logoWidth: 707, logoHeight: 353 },
    { name: "Signia", slug: "signia", logo: "/images/brands/signia-logo-seffaf.webp", logoWidth: 707, logoHeight: 353 },
    { name: "Widex", slug: "widex", logo: "/images/brands/widex-logo-seffaf.webp", logoWidth: 707, logoHeight: 353 },
    { name: "ReSound", slug: "resound", logo: "/images/brands/resound-logo-seffaf.webp", logoWidth: 707, logoHeight: 353 },
    { name: "NuEar", slug: "nuear", logo: "/images/brands/nuear-logo-seffaf.webp", logoWidth: 612, logoHeight: 408 },
    { name: "Vista", slug: "vista", logo: "/images/brands/vista-logo-seffaf.webp", logoWidth: 612, logoHeight: 408 },
    { name: "Unitron", slug: "unitron", logo: "/images/brands/unitron-logo-seffaf.webp", logoWidth: 612, logoHeight: 408 },
    { name: "Bernafon", slug: "bernafon", logo: "/images/brands/bernafon-logo-seffaf.webp", logoWidth: 612, logoHeight: 408 },
    {
      name: "Philips Hearing",
      slug: "philips-hearing",
      logo: "/images/brands/philips-logo-seffaf.webp",
      logoWidth: 612,
      logoHeight: 408,
    },
    { name: "Rexton", slug: "rexton", logo: "/images/brands/rexton-logo-seffaf.webp", logoWidth: 612, logoHeight: 408 },
    { name: "Beltone", slug: "beltone", logo: "/images/brands/beltone-logo-seffaf.webp", logoWidth: 612, logoHeight: 408 },
    { name: "Sonic", slug: "sonic", logo: "/images/brands/sonic-logo-seffaf.webp", logoWidth: 612, logoHeight: 408 },
    {
      name: "Audio Service",
      slug: "audio-service",
      logo: "/images/brands/audio-service-logo-seffaf.webp",
      logoWidth: 612,
      logoHeight: 408,
    },
    { name: "Coselgi", slug: "coselgi", logo: "/images/brands/coselgi-logo-seffaf.webp", logoWidth: 612, logoHeight: 408 },
    { name: "Audifon", slug: "audifon", logo: "/images/brands/audifon-logo-seffaf.webp", logoWidth: 612, logoHeight: 408 },
    { name: "A&M", slug: "am", logo: "/images/brands/am-logo-seffaf.webp", logoWidth: 612, logoHeight: 408 },
    { name: "Maico", slug: "maico", logo: "/images/brands/maico-logo-seffaf.webp", logoWidth: 612, logoHeight: 408 },
  ],
  trust: {
    label: "SGK Anlaşmalı İşitme Cihazları",
    description:
      "Tüm SGK kapsamındaki işlemleriniz için uzman desteği sağlıyoruz.",
    href: "/sgk-isitme-cihazi-odemesi",
  },
  hubCta: { label: "Tüm markaları inceleyin", href: "/markalar" },
};
