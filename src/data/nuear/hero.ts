// Hero content for the NuEar brand page (/markalar/nuear). Renders
// through the shared BrandPageHero component — the same component
// Oticon, Phonak, Signia, Widex and ReSound's Heroes use, fed by this
// page's own data.
//
// Positioning axis (researched directly, no blueprint per Phase 7's
// direct-build instruction): Amerikan mühendisliği mirası + sağlık ve
// aktivite odaklı bağlantı ekosistemi — anchored on NuEar's own real,
// current, verifiable differentiators: its 1976 San Diego origin and
// today's affiliation with Starkey (the only American-owned "Big 5"
// global hearing aid manufacturer), its current NXG AI hearing aid
// series, and the real Hear Circle companion app's genuinely
// well-documented health/activity-tracking and fall-detection features —
// a "hearing aid as a personal wellness device" angle none of the other
// five brand pages use as their core axis. Zero repetition of Oticon
// (BrainHearing), Phonak (Roger/connectivity ecosystem), Signia (Own
// Voice Processing/conversation AI), Widex (PureSound/minimal processing)
// or ReSound (M&RIE/Auracast).
//
// accentColor: vivid red (#E4002B), sourced directly from this project's
// own real NuEar logo asset (/images/brands/nuear-logo-seffaf.webp — a
// red "NU" + black "EAR" wordmark), the most directly-verifiable brand
// color source used across all six brand pages built so far (a first-
// party asset already in this project, not a third-party guess). Kept
// visually distinct from ReSound's darker maroon (#AA1835) via a
// brighter, more saturated red — both brands do genuinely use red in
// their real branding, so no artificial hue shift was applied here.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const nuearHero: BrandPageHeroContent = {
  badge: "NUEAR · AMERİKAN MÜHENDİSLİĞİ",
  headingLines: ["NuEar ile İşitmenizi", "ve Sağlığınızı Birlikte İzleyin"],
  paragraphs: [
    "NuEar işitme cihazları, NXG AI ses işleme teknolojisi ve Hear Circle uygulamasıyla, işitme deneyiminizi günlük aktivite ve sağlık takibiyle bir araya getirir.",
    "NXG AI, NE Series, Circa ve diğer NuEar modellerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "NUEAR",
      accent: "#E4002B",
      title: "NXG AI Ses İşleme",
      description: "Farklı dinleme ortamlarına uyum sağlamaya yardımcı olan güncel nesil ses işleme yaklaşımı.",
    },
    {
      label: "HEALTH",
      accent: "#F0374D",
      title: "Hear Circle Uygulaması",
      description: "Adım, aktivite takibi ve düşme anında bildirim gönderebilen sağlık odaklı bir uygulama.",
    },
    {
      label: "USA",
      accent: "#B7001F",
      title: "Amerikan Mühendisliği",
      description: "1976'dan bu yana San Diego kökenli, bugün Starkey ile aynı çatı altında geliştirilen bir miras.",
    },
  ],
  image: {
    src: "/images/pages/nuear-hero.webp",
    alt: "NuEar kulak arkası (BTE) işitme cihazı",
  },
  floatingCard: {
    title: "Hear Circle",
    description: "İşitme ve günlük aktivitenizi tek bir uygulamadan takip edin.",
  },
  accentColor: "#E4002B",
  accentColorHover: "#B7001F",
  accentColorSoft: "rgb(228 0 43 / 0.12)",
  accentColorBorder: "rgb(228 0 43 / 0.4)",
  // Hero Background System rollout (2026-07) — same layered dark
  // composition established for Signia, using NuEar's own
  // already-researched accent (#E4002B). Oticon/Phonak excluded.
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(228,0,43,0.35) 0%, rgba(228,0,43,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #1A0508 60%, #29070C 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#B7001F",
  heroWaveOpacity: "0.18",
};
