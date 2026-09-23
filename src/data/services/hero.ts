// M1 (Hero) content for the "Hizmetlerimiz" hub page (/hizmetlerimiz) —
// the page the top-level nav's "Hizmetlerimiz" item links to, mirroring
// /markalar's role for the Markalar item. Renders through the now-generic
// BrandHero component (M1 of the shared hub-page module system; see
// src/components/brands/).
//
// Heading/description echo servicesMega's own promo copy
// ("Uçtan Uca İşitme Sağlığı Hizmeti") for consistency with the mega
// menu it's reached from.
//
// Hero image: Beltone Commence, a fresh model not yet used by any prior
// page this session (verified in public/images/beltone/models/
// commence.webp).

import type { BrandHeroContent } from "../../components/brands/BrandHero/BrandHero.astro";

export const servicesHero: BrandHeroContent = {
  badge: "18+ Hizmet",
  headingLines: ["Uçtan Uca", "İşitme Sağlığı", "Hizmeti."],
  description: [
    "Değerlendirmeden cihaz uygulamasına, ayardan servis ve bakıma kadar tüm süreçte uzman kadromuz yanınızda.",
    "İhtiyacınıza uygun hizmeti, ücretsiz işitme testi sonrasında uzman desteğiyle birlikte belirleyin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: "tel:+905337733199" },
  ctaSecondary: { label: "WhatsApp", href: "https://wa.me/905337733199" },
  trustPills: [
    "Ücretsiz İşitme Testi",
    "SGK Anlaşmalı",
    "Uzman Odyometrist Desteği",
    "Satış Sonrası Destek",
  ],
  image: {
    src: "/images/beltone/models/commence.webp",
    alt: "Uçtan uca işitme sağlığı hizmetleri kapsamında değerlendirilebilecek Beltone Commence işitme cihazı görseli",
  },
  floatingCard: {
    value: "18+",
    label: "Hizmet",
    description: "Testten Servise, Tüm Süreçte Yanınızdayız.",
  },
};
