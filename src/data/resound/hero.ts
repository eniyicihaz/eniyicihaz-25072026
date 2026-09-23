// Hero content for the ReSound brand page (/markalar/resound). Renders
// through the shared BrandPageHero component — the same component
// Oticon, Phonak, Signia and Widex's Heroes use, fed by this page's own
// data.
//
// Positioning axis (researched directly, no blueprint per Phase 6's
// direct-build instruction): Akıllı Bağlantı Öncüsü + Doğal Mekansal
// İşitme — anchored on ReSound's own real, current, verifiable
// differentiators: M&RIE (Microphone & Receiver-In-Ear, a third
// microphone placed in the ear canal for more natural spatial hearing),
// and ReSound Nexia's real, industry-first Auracast (Bluetooth LE Audio
// broadcast) support (launched Sept 2023), continued in ReSound Vivia
// (Feb 2025) with its "Auracast Assistant". Deliberately distinct from
// Oticon (BrainHearing), Phonak (Roger/connectivity ecosystem), Signia
// (Own Voice Processing/conversation AI) and Widex (PureSound/minimal
// processing) — zero repetition of those narratives. Consistent with (not
// contradicting) sgk/brands.ts's existing published line for ReSound:
// "Bağlantılı ve akıllı işitme cihazı çözümleriyle öne çıkar."
//
// accentColor: deep red (#AA1835), sourced from brandcolorcode.com's
// ReSound listing (Pantone 187 C) — the most concretely-sourced brand
// color value found across all five brand pages built so far (more
// confident than Widex's approximated teal). Flagged for a final human
// check against ReSound's own official brand guideline if one is
// available. Clearly distinct from Oticon (green), Phonak (blue), Signia
// (purple) and Widex (teal).

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const resoundHero: BrandPageHeroContent = {
  badge: "RESOUND · SMART HEARING, NATURALLY",
  headingLines: ["ReSound ile Akıllı", "Bağlantının Öncüsü"],
  paragraphs: [
    "ReSound işitme cihazları, kulak kanalına yerleştirilen ek mikrofonuyla (M&RIE) daha doğal bir mekansal işitme deneyimi ve Auracast yayın sesi desteğiyle yeni nesil kablosuz bağlantı sunar.",
    "Vivia, Nexia, Omnia ve diğer ReSound modellerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "RESOUND",
      accent: "#AA1835",
      title: "M&RIE Teknolojisi",
      description: "Kulak kanalına yerleştirilen ek bir mikrofonla daha doğal bir mekansal işitme deneyimi hedefler.",
    },
    {
      label: "AURACAST",
      accent: "#c2185b",
      title: "Bluetooth LE Audio",
      description: "Havalimanı, tiyatro gibi uygun ortamlarda yayın sesine doğrudan bağlanma imkânı sunar.",
    },
    {
      label: "CARE",
      accent: "#8B1330",
      title: "ReSound Assist",
      description: "Uzaktan ince ayar ve destek almanızı sağlayan tele-odyoloji hizmeti.",
    },
  ],
  image: {
    src: "/images/pages/resound-hero.webp",
    alt: "ReSound Vivia işitme cihazı",
  },
  floatingCard: {
    title: "M&RIE",
    description: "Kulağınızın kendi doğal akustiğini yakalayan ek mikrofon.",
  },
  accentColor: "#AA1835",
  accentColorHover: "#8B1330",
  accentColorSoft: "rgb(170 24 53 / 0.12)",
  accentColorBorder: "rgb(170 24 53 / 0.4)",
  // Hero Background System rollout (2026-07) — same layered dark
  // composition established for Signia, using ReSound's own
  // already-researched accent (#AA1835). Oticon/Phonak excluded.
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(170,24,53,0.35) 0%, rgba(170,24,53,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #170A0C 60%, #240F13 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#8B1330",
  heroWaveOpacity: "0.18",
};
