// Hero content for the Unitron brand page (/markalar/unitron). Renders
// through the shared BrandPageHero component.
//
// Positioning axis: Kanada-Alman mühendislik mirası + AutoFocus 360'ın
// dört mikrofonlu binaural ağı — Unitron'un gerçek, doğrulanabilir konumu,
// 1960'ların başında Newfoundland, Kanada'da Alman kökenli kurucular
// (Fred Stork, Rolf Strothmann, Rolf Dohmer) tarafından kurulan ve
// 1964'te Kitchener, Ontario'ya (güçlü bir Alman topluluğuna sahip
// Waterloo bölgesi) taşınan bir marka olmasıdır. Bugün Phonak ile aynı
// çatı olan Sonova Grubu'na bağlı olsa da, Phonak'ın bu projede zaten
// işlenen Roger/bağlantı ekosistemi ekseninden farklı olarak, Unitron'un
// ekseni burada "AutoFocus 360'ın dört mikrofonlu binaural ağı + Kanada-
// Alman mühendislik mirası" olarak konumlandırıldı — gerçek ve kardeş
// markadan ayrışan bir eksen.
//
// accentColor: lacivert-mavi (#1C4C87), bu projenin kendi gerçek Unitron
// logosundan (/images/brands/unitron-logo-seffaf.webp — koyu lacivert
// "unitron" yazısı) doğrudan görsel olarak okunarak belirlendi. Bu
// settteki lacivert tonlu dört markadan biri (Audio Service, Beltone,
// Maico ile birlikte) — burada orta tonlu, biraz daha açık bir lacivert
// tercih edilerek diğerlerinden ayrıştırıldı.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const unitronHero: BrandPageHeroContent = {
  badge: "UNITRON · KANADA-ALMAN MİRASI",
  headingLines: ["Unitron ile Dört Mikrofonlu", "Binaural Ağ Teknolojisi"],
  paragraphs: [
    "Unitron, 1964'ten bu yana Kitchener, Ontario'da (Kanada) faaliyet gösteren, bugün Phonak ile aynı çatı olan Sonova Grubu'na bağlı bir markadır.",
    "Blu, Moxi Vivante, Stride ve diğer Unitron modellerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "FOCUS",
      accent: "#1C4C87",
      title: "AutoFocus 360",
      description: "Dört mikrofonlu binaural ağla konuşmanın geldiği yönü belirlemeye yardımcı olur.",
    },
    {
      label: "PRISM",
      accent: "#4A76AC",
      title: "Sonova PRISM Çipi",
      description: "Blu platformunun temelini oluşturan, iki aktif bağlantıyı destekleyen çip teknolojisi.",
    },
    {
      label: "CA",
      accent: "#133A6B",
      title: "Kanada-Alman Mirası",
      description: "1964'ten bu yana Kitchener, Ontario'da süregelen bir mühendislik geleneği.",
    },
  ],
  image: {
    src: "/images/pages/unitron-hero.webp",
    alt: "Unitron Blu işitme cihazı",
  },
  floatingCard: {
    title: "AutoFocus 360",
    description: "Dört mikrofonlu ağla konuşmanın yönünü belirlemeye yardımcı olur.",
  },
  accentColor: "#1C4C87",
  accentColorHover: "#133A6B",
  accentColorSoft: "rgb(28 76 135 / 0.12)",
  accentColorBorder: "rgb(28 76 135 / 0.4)",
  // Hero Background System rollout (2026-07) — same layered dark
  // composition established for Signia, using Unitron's own
  // already-researched accent (#1C4C87). Oticon/Phonak excluded.
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(28,76,135,0.35) 0%, rgba(28,76,135,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #081120 60%, #0C1930 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#133A6B",
  heroWaveOpacity: "0.18",
};
