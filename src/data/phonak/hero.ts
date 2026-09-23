// Hero content for the Phonak brand page (/markalar/phonak). Renders
// through the shared BrandPageHero component (see
// src/components/brand-page/BrandPageHero/BrandPageHero.astro) — the
// same component Oticon's Hero uses, fed by this page's own data.
//
// Positioning axis (per the approved Phonak Master Blueprint): connection
// + active lifestyle + universal compatibility, anchored on Phonak's own
// real, public "Life is on." slogan — mirroring how Oticon's Hero is
// anchored on its own real BrainHearing® philosophy. Universal Bluetooth
// is already an established fact on this site (src/data/oticon/vs-phonak.ts)
// and is reused verbatim here, not reinvented.
//
// accentColor is a deliberately distinct blue (not Phonak's literal logo
// green) so this page doesn't visually collide with Oticon's own accent
// green — same design freedom already exercised for Oticon's own
// accentColor, which isn't literally scraped from Oticon's real logo
// either.
//
// tel:/wa.me hrefs come from contactConfig, not hardcoded — unlike
// Oticon's hero.ts (written before contactConfig existed).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const phonakHero: BrandPageHeroContent = {
  badge: "PHONAK · LIFE IS ON",
  headingLines: ["Phonak ile Hayatın", "Sesine Bağlı Kalın"],
  paragraphs: [
    "Phonak işitme cihazları, evrensel Bluetooth bağlantısıyla hem iPhone hem Android cihazlarla doğrudan çalışır — ayrı bir aksesuara ihtiyaç duymadan.",
    "Audéo, Naída, Sky ve diğer Phonak modellerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "PHONAK",
      accent: "#0ea5e9",
      title: "Evrensel Bluetooth",
      description: "Ayrı bir aksesuara gerek kalmadan iPhone ve Android ile doğrudan bağlantı kurar.",
    },
    {
      label: "ROGER",
      accent: "#f59e0b",
      title: "Roger Ekosistemi",
      description: "Kalabalık ve gürültülü ortamlarda konuşmayı takip etmeyi kolaylaştırır.",
    },
    {
      label: "APP",
      accent: "#ec4899",
      title: "myPhonak Uygulaması",
      description: "Cihaz ayarlarını akıllı telefonunuzdan yönetmenizi sağlar.",
    },
  ],
  image: {
    src: "/images/pages/phonak-hero.webp",
    alt: "Phonak Audéo Infinio Sphere işitme cihazı",
  },
  floatingCard: {
    title: "Evrensel Bağlantı",
    description: "Marka fark etmeksizin telefonunuzla doğrudan çalışır.",
  },
  accentColor: "#0ea5e9",
  accentColorHover: "#0284c7",
  accentColorSoft: "rgb(14 165 233 / 0.12)",
  accentColorBorder: "rgb(14 165 233 / 0.4)",
};
