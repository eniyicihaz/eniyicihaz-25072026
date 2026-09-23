// Hero content for the Widex brand page (/markalar/widex). Renders through
// the shared BrandPageHero component — the same component Oticon, Phonak
// and Signia's Heroes use, fed by this page's own data.
//
// Positioning axis (researched, not blueprinted per Phase 5's direct-build
// instruction): Natural Sound / Ses Sadakati — anchored on Widex's own
// real, current public brand philosophy statement, "Less is more in
// natural hearing" (widex.com/en/sound-philosophy/), plus PureSound/
// ZeroDelay processing and SoundSense Learn personalization. This mirrors
// how Oticon's Hero is anchored on BrainHearing®, Phonak's on "Life is
// on.", and Signia's on "Life sounds brilliant." — already established,
// zero contradiction with sgk/brands.ts's existing published line for
// Widex: "Doğal ses deneyimi odaklı işitme cihazı çözümleri sunar."
//
// accentColor: teal/turquoise (#14b8a6). Sourced research (whatthelogo.com)
// puts the Widex wordmark/ear-symbol logo color near azure #00AEEF, but no
// official brand-guideline PDF with exact hex was found; multiple sources
// describe the mark as "blue/turquoise". A teal was chosen — faithful to
// that description while staying visually distinct from Phonak's sky-blue
// (#0ea5e9), which sits very close in hue to the raw #00AEEF value. Same
// design-freedom precedent as Oticon's green/Phonak's blue/Signia's purple.
// Flagged for human verification against Widex's actual brand guideline if
// one becomes available.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const widexHero: BrandPageHeroContent = {
  badge: "WIDEX · LESS IS MORE IN NATURAL HEARING",
  headingLines: ["Widex ile Sesin", "Doğallığını Keşfedin"],
  paragraphs: [
    "Widex işitme cihazları, PureSound™ teknolojisi ve ZeroDelay ses işleme yaklaşımıyla, sesi olabildiğince az işleyerek daha doğal bir dinleme deneyimi sunar.",
    "Allure, SmartRIC, Moment ve diğer Widex modellerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "WIDEX",
      accent: "#14b8a6",
      title: "PureSound™ (ZeroDelay)",
      description: "Ses işleme gecikmesini büyük ölçüde azaltarak daha doğal bir ses deneyimi sunar.",
    },
    {
      label: "AI",
      accent: "#0d9488",
      title: "SoundSense Learn",
      description: "Uygulama üzerinden yaptığınız karşılaştırmalarla ses tercihlerinizi öğrenir.",
    },
    {
      label: "1956",
      accent: "#0f766e",
      title: "Danimarka Mirası",
      description: "1956'dan bu yana aile şirketi olarak sürdürülen bir işitme teknolojisi geleneği.",
    },
  ],
  image: {
    src: "/images/pages/widex-hero.webp",
    alt: "Widex Allure işitme cihazı",
  },
  floatingCard: {
    title: "PureSound™",
    description: "Sesi olabildiğince az işleyerek doğallığını korur.",
  },
  accentColor: "#14b8a6",
  accentColorHover: "#0d9488",
  accentColorSoft: "rgb(20 184 166 / 0.12)",
  accentColorBorder: "rgb(20 184 166 / 0.4)",
  // Hero Background System rollout (2026-07) — same layered dark
  // composition established for Signia (see BrandPageHero.astro): dark
  // base, diagonal gradient into a teal-tinted black, one large soft
  // glow behind the device, faint top light, recolorable wave — all
  // using Widex's own already-researched accent (#14b8a6), not a new
  // color. Oticon and Phonak intentionally excluded from this rollout.
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(20,184,166,0.35) 0%, rgba(20,184,166,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #0A1615 60%, #0F211F 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#0d9488",
  heroWaveOpacity: "0.18",
};
