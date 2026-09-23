// M1 (Hero) content for the "İşitme Cihazları" hub page
// (/isitme-cihazlari) — the page the top-level nav's "İşitme Cihazları"
// item links to, mirroring /markalar's role for the Markalar item.
// Renders through the now-generic BrandHero component (M1 of the shared
// hub-page module system; see src/components/brands/).
//
// Hero image: Bernafon Encanta CIC — a genuine literal fit, since CIC
// (Completely-In-Canal) is itself one of the seven device types this
// page showcases (see showcase.ts). Fresh, not yet used by any prior
// page this session (verified in public/images/bernafon/models/
// encanta-cic.webp).

import type { BrandHeroContent } from "../../components/brands/BrandHero/BrandHero.astro";

export const devicesHero: BrandHeroContent = {
  badge: "21+ Cihaz Seçeneği",
  headingLines: ["İşitme Cihazı", "Çeşitlerini", "Keşfedin."],
  description: [
    "Kulak arkasından görünmez modellere, yapay zeka destekli teknolojilerden ihtiyacınıza özel çözümlere kadar tüm seçenekleri tek noktada inceleyin.",
    "Size en uygun cihaz türünü, ücretsiz işitme testi sonrasında uzman desteğiyle birlikte belirleyin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: "tel:+905337733199" },
  ctaSecondary: { label: "WhatsApp", href: "https://wa.me/905337733199" },
  trustPills: [
    "Ücretsiz İşitme Testi",
    "SGK Anlaşmalı",
    "Cihaz Deneme İmkânı",
    "Uzman Odyolog Desteği",
  ],
  image: {
    src: "/images/bernafon/models/encanta-cic.webp",
    alt: "Görünmez (CIC) tipi bir işitme cihazı örneği olarak Bernafon Encanta CIC",
  },
  floatingCard: {
    value: "21+",
    label: "Cihaz Seçeneği",
    description: "Doğru Cihaz Türü, Doğru Değerlendirmeyle Belirlenir.",
  },
};
