// Model comparison content for the Bernafon brand page (/markalar/bernafon).
// Renders through the shared BrandPageComparison component. Uses
// levelLabel (descriptive tag) for every row rather than the dot-scale,
// since Bernafon has no well-established public "1-2-3-4" tier system
// this project has verified with full confidence (Encanta's own 100-400
// tiers exist, but this project doesn't map them with confidence to
// distinct user profiles) — same conservative choice made for the other
// brand pages.

import { Sparkles, Layers, Volume2, Palette, Waves, Wallet } from "lucide-astro";
import type { BrandPageComparisonContent } from "../../components/brand-page/BrandPageComparison/BrandPageComparison.astro";

export const bernafonComparison: BrandPageComparisonContent = {
  badge: "MODEL KARŞILAŞTIRMASI",
  heading: "Bernafon Aileleri Karşılaştırması",
  intro: "Hangi Bernafon ailesinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  columnLabels: { series: "Aile", technology: "Öne Çıkan Teknoloji", profile: "Kullanıcı Profili", fourth: "Yerleşim" },
  maxLevels: 4,
  rows: [
    { series: "Encanta", technology: "Smart Sensor + ML 2.0", profile: "Güncel Teknoloji Arayanlar", profileIcon: Sparkles, levelLabel: "RIC" },
    { series: "Encanta Alpha XT", technology: "Uygun Fiyatlı Bağlantı", profile: "Dengeli Kullanıcılar", profileIcon: Waves, levelLabel: "RIC" },
    { series: "Encanta BTE", technology: "Geniş Güç Aralığı", profile: "İleri Derece Kayıplar", profileIcon: Volume2, levelLabel: "BTE" },
    { series: "Encanta CIC", technology: "Kişiye Özel Üretim", profile: "Estetik Öncelikli", profileIcon: Palette, levelLabel: "Kulak İçi" },
    { series: "Juna", technology: "Bağlantı Odaklı Tasarım", profile: "Uygun Teknoloji Arayanlar", profileIcon: Layers, levelLabel: "RIC" },
    { series: "Zerena", technology: "Temel İhtiyaçlar", profile: "Klasik Kullanım", profileIcon: Wallet, levelLabel: "BTE" },
  ],
  // Precomputed rgb() decomposition of #DA291C.
  accentColor: "#DA291C",
  accentColorBadgeBg: "rgb(218 41 28 / 0.08)",
  accentColorBadgeBorder: "rgb(218 41 28 / 0.35)",
  accentColorBadgeText: "#B01E15",
  accentColorNewTagBg: "rgb(218 41 28 / 0.14)",
  accentColorIconBg: "rgb(218 41 28 / 0.1)",
  accentColorLevelTagBg: "rgb(218 41 28 / 0.12)",
  accentColorDark: "#B01E15",
};
