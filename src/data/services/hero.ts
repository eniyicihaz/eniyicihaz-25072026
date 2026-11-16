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
// (Hero Visual Paketi: görsel ve floating card kaldırıldı — hero artık görselsiz/kısa.
// Eski görsel notu:  Beltone Commence, a fresh model not yet used by any prior
// page this session (verified in public/images/beltone/models/
// commence.webp).

import type { BrandHeroContent } from "../../components/brands/BrandHero/BrandHero.astro";
import { contactConfig } from "../../config/contact";

export const servicesHero: BrandHeroContent = {
  badge: "Testten Servise Hizmetlerimiz",
  headingLines: ["Uçtan Uca", "İşitme Sağlığı", "Hizmeti."],
  description: [
    "Değerlendirmeden cihaz uygulamasına, ayardan servis ve bakıma kadar tüm süreçte uzman kadromuz yanınızda.",
    "İhtiyacınıza uygun hizmeti, ücretsiz işitme testi sonrasında uzman desteğiyle birlikte belirleyin.",
  ],
  ctaPrimary: { label: "Bizi Arayın", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp", href: contactConfig.whatsapp.href },
  trustPills: [
    "Ücretsiz İşitme Testi",
    "SGK Anlaşmalı",
    "Odyometrist Desteği",
    "Satış Sonrası Destek",
  ],
};
