// M1 (Hero) content for the "Tüm Markalar" (/markalar) page. This page is
// built up modularly (M1, M2, M3…), each an independent section/component —
// this file only ever holds M1's data. BrandHero.astro is now generic
// (reused by every hub page), so its interface lives in the component
// file and is imported back here.

import type { BrandHeroContent } from "../../components/brands/BrandHero/BrandHero.astro";
import { contactConfig } from "../../config/contact";

export const brandHero: BrandHeroContent = {
  badge: "10+ Marka",
  headingLines: [
    "İşitme Cihazı",
    "Markalarını",
    "Keşfedin.",
  ],
  description: [
    "10+ marka ile çalışıyoruz. Oticon, Phonak, ReSound, NuEar, Vista ve diğer markalarımızı tek noktada inceleyin.",
    "İşitme kaybınıza en uygun teknolojiyi uzman desteğiyle birlikte belirleyin.",
  ],
  ctaPrimary: { label: "Bizi Arayın", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp'tan Yazın", href: contactConfig.whatsapp.href },
  trustPills: [
    "Ücretsiz İşitme Testi",
    "SGK Anlaşmalı",
    "10+ Marka",
    "Odyolog Desteği",
  ],
};
