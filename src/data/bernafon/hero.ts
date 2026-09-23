// Hero content for the Bernafon brand page (/markalar/bernafon). Renders
// through the shared BrandPageHero component — the same component
// Oticon, Phonak, Signia, Widex, ReSound and NuEar's Heroes use, fed by
// this page's own data.
//
// Positioning axis (researched directly, no blueprint per Phase 8's
// direct-build instruction): İsviçre mühendisliği mirası + hareket
// algılayan akıllı yönlülük (Smart Sensor) + konuşma anlaşılırlığı —
// anchored on Bernafon's own real, verifiable history (Bern, İsviçre,
// 1946; the industry's first digitally programmable hearing aid in 1987
// and first fully digital device in 1999) and its current Encanta
// platform's real Smart Sensor technology (head/body movement detection
// that automatically adjusts directionality and noise reduction) plus
// Machine Learning 2.0. Deliberately distinct from Oticon's BrainHearing®
// (despite both brands sharing the Demant Group parent — Bernafon does
// not use Oticon's trademarked philosophy), Phonak's Roger/connectivity
// ecosystem, Signia's Own Voice Processing/conversation AI, Widex's
// PureSound/minimal processing, ReSound's M&RIE/Auracast and NuEar's
// health-tracking ecosystem.
//
// accentColor: red (#DA291C), sourced directly from this project's own
// real Bernafon logo asset (/images/brands/bernafon-logo-seffaf.webp — a
// black "bernafon" wordmark with a distinctive red circular sound-wave
// icon). This is the third red-accented brand page in this set (after
// ReSound's darker maroon and NuEar's brighter magenta-leaning red) —
// genuinely so, because all three real companies do use red in their
// branding; differentiated here via a warmer, more orange-leaning
// scarlet shade, kept as close to the real logo as could be judged
// visually. Flagged for a final human check against an official brand
// guideline if one becomes available.

import type { BrandPageHeroContent } from "../../components/brand-page/BrandPageHero/BrandPageHero.astro";
import { contactConfig } from "../../config";

export const bernafonHero: BrandPageHeroContent = {
  badge: "BERNAFON · İSVİÇRE MÜHENDİSLİĞİ",
  headingLines: ["Bernafon ile Hareketi", "Algılayan Akıllı İşitme"],
  paragraphs: [
    "Bernafon işitme cihazları, Smart Sensor teknolojisiyle baş ve vücut hareketlerinizi algılayarak yönlülük ve gürültü azaltma ayarlarını otomatik olarak uyarlamaya yardımcı olur.",
    "Encanta, Encanta Alpha XT ve diğer Bernafon modellerini Avrasya İşitme'de keşfedin.",
  ],
  ctaPrimary: { label: "Hemen Ara", href: contactConfig.phone.href },
  ctaSecondary: { label: "WhatsApp Yaz", href: contactConfig.whatsapp.href },
  features: [
    {
      label: "BERNAFON",
      accent: "#DA291C",
      title: "Smart Sensor",
      description: "Hareketlerinizi algılayarak yönlülük ve gürültü azaltma ayarlarını otomatik uyarlamaya yardımcı olur.",
    },
    {
      label: "AI",
      accent: "#EF4B3C",
      title: "Machine Learning 2.0",
      description: "Farklı dinleme ortamlarına uyum sağlamaya yardımcı olan makine öğrenmesi destekli yaklaşım.",
    },
    {
      label: "1946",
      accent: "#B01E15",
      title: "İsviçre Mirası",
      description: "1946'dan bu yana Bern, İsviçre kökenli, bugün Demant Grubu'na bağlı bir işitme teknolojisi geleneği.",
    },
  ],
  image: {
    src: "/images/pages/bernafon-hero.webp",
    alt: "Bernafon Encanta işitme cihazı",
  },
  floatingCard: {
    title: "Smart Sensor",
    description: "Hareketinizi algılar, dinleme ayarlarını otomatik uyarlar.",
  },
  accentColor: "#DA291C",
  accentColorHover: "#B01E15",
  accentColorSoft: "rgb(218 41 28 / 0.12)",
  accentColorBorder: "rgb(218 41 28 / 0.4)",
  // Hero Background System rollout (2026-07) — same layered dark
  // composition established for Signia, using Bernafon's own
  // already-researched accent (#DA291C). Oticon/Phonak excluded.
  heroBackground:
    "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 60%), radial-gradient(circle at 85% 50%, rgba(218,41,28,0.35) 0%, rgba(218,41,28,0.15) 35%, transparent 70%), linear-gradient(90deg, #050505 0%, #190807 60%, #280C0A 100%)",
  heroBaseBg: "#050505",
  heroWaveColor: "#B01E15",
  heroWaveOpacity: "0.18",
};
