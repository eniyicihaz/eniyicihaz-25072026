// Hero content for the Signia brand page (/markalar/signia). Renders
// through the shared BrandPageHero component (see
// src/components/brand-page/BrandPageHero/BrandPageHero.astro) — the same
// component every other brand page's Hero uses, fed by this page's own
// data.
//
// Positioning axis (unchanged from the approved Signia Master Blueprint):
// Conversation Intelligence — AI-destekli, kişiselleştirilmiş konuşma
// deneyimi + modern/moda odaklı tasarım, anchored on Signia's own real,
// public "Life sounds brilliant." slogan.
//
// === HERO BACKGROUND SYSTEM REVISION (2026-07, v3) ===
// v2 made the whole page — Hero included — light, per explicit feedback
// that the site's shared design system is light-dominant. This v3 only
// touches the Hero's *background*, per a new reference brief: a premium,
// cinematic, dark composition (product-photography lighting, not a flat
// UI gradient) — text side darker, device side lit from behind by one
// large, very soft accent-colored glow, plus a faint top light and a
// thin recolorable "wave"/light-strand layer. Every OTHER section
// (Overview onward) stays exactly as v2 left it — light, white-dominant,
// only the accent color carried through. Only this file's hero-prefixed
// fields changed; nothing in signia.astro's page-level light-theme scope
// was touched.
//
// heroBackground composes 4 of the reference's 5 layers into one CSS
// `background` value (dark base → diagonal gradient into a deep
// magenta-black → one large soft radial glow positioned behind the
// device (right side, where BrandPageHero's image column sits) → a
// faint top-right highlight). The 5th layer (the wave/light-strand
// motif) is the new heroWaveColor/heroWaveOpacity fields — see
// BrandPageHero.astro's own comments for how that recolorable layer
// works. Since the Hero is dark again, every v2 "light Hero" override
// (heroTextColor, heroFeatureCardBg, heroOutlineBorder, etc.) is removed
// here — BrandPageHero's own defaults are light-text-on-dark, i.e.
// already correct, so nothing needs to override them back.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const signiaHero: BrandPageHeroContent = {
  badge: "SIGNIA · LIFE SOUNDS BRILLIANT",
  headingLines: ["Signia ile Konuşmanın", "Zekasını Keşfedin"],
  paragraphs: [
    "Signia işitme cihazları, yapay zekâ destekli ses işleme ve Own Voice Processing teknolojisiyle, konuşmayı ve kendi sesinizi daha doğal bir şekilde deneyimlemenizi sağlar.",
    "Styletto, Pure, Insio ve diğer Signia modellerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "SIGNIA",
      accent: "#B21F4B",
      title: "Own Voice Processing",
      description: "Kendi sesinizi daha doğal ve rahatsız etmeyen şekilde duymanızı sağlar.",
    },
    {
      label: "AI",
      accent: "#D63A69",
      title: "Signia Assistant",
      description: "Yapay zekâ destekli asistanla kişiselleştirilmiş ince ayar deneyimi sunar.",
    },
    {
      label: "DESIGN",
      accent: "#F7D6E1",
      title: "Modern Tasarım",
      description: "Styletto gibi ince, moda odaklı tasarımlarla estetik önceliklendirenlere hitap eder.",
    },
  ],
  image: {
    src: "/images/pages/signia-hero.webp",
    alt: "Signia işitme cihazı",
  },
  floatingCard: {
    title: "Own Voice Processing",
    description: "Kendi sesinizi doğal ve rahatsız etmeyen şekilde duyun.",
  },
  accentColor: "#B21F4B",
  accentColorHover: "#D63A69",
  accentColorSoft: "rgba(178, 31, 75, 0.12)",
  accentColorBorder: "rgba(178, 31, 75, 0.4)",
  // Layers 1-4: dark base, left→right diagonal gradient into deep
  // magenta-black, one large soft radial glow behind the device (85%
  // 50% — matches the image column's real position), a faint top-right
  // highlight for depth. No hard edges, no neon — every stop fades to
  // transparent well before the next layer starts.
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(178,31,75,0.35) 0%, rgba(178,31,75,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #1A0A0F 60%, #2A0F16 100%)",
  heroBaseBg: "#050505",
  ctaTextColor: "#FFFFFF",
  // Layer 5: the recolorable wave/light-strand motif (see
  // BrandPageHero.astro) — Signia's real accent, kept faint.
  heroWaveColor: "#D63A69",
  heroWaveOpacity: "0.18",
};
