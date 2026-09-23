// Model comparison content for the Audifon brand page (/markalar/audifon).
// Renders through the shared BrandPageComparison component. Uses
// levelLabel (yerleşim etiketi) since Audifon has no well-established
// public "1-2-3-4" tier system this project has verified with full
// confidence.

import { Sparkles, Palette, Volume2, Layers, HeartPulse } from "lucide-astro";
import type { BrandPageComparisonContent } from "../../components/brand-page/BrandPageComparison/BrandPageComparison.astro";

export const audifonComparison: BrandPageComparisonContent = {
  badge: "MODEL KARŞILAŞTIRMASI",
  heading: "Audifon Aileleri Karşılaştırması",
  intro: "Hangi Audifon ailesinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  columnLabels: { series: "Aile", technology: "Öne Çıkan Teknoloji", profile: "Kullanıcı Profili", fourth: "Yerleşim" },
  maxLevels: 4,
  rows: [
    { series: "rega R", technology: "18 Kanal WDRC + 10k HD Sound", profile: "Güncel Teknoloji Arayanlar", profileIcon: Sparkles, levelLabel: "RITE" },
    { series: "sino S", technology: "10k HD Sound", profile: "Kulak İçi Estetiği Önceliklendirenler", profileIcon: Palette, levelLabel: "Kulak İçi" },
    { series: "sino P", technology: "9 Kanal WDRC", profile: "Güçlü Kayıplar", profileIcon: Volume2, levelLabel: "BTE" },
    { series: "sino R", technology: "9 Kanal WDRC", profile: "Dengeli Kullanıcılar", profileIcon: Layers, levelLabel: "RITE" },
    { series: "Sueno Pro", technology: "Kişiselleştirilebilir Maskeleme", profile: "Tinnitus Şikayeti Olanlar", profileIcon: HeartPulse, levelLabel: "RITE/ITE" },
  ],
  // Precomputed rgb() decomposition of #E2001A.
  accentColor: "#E2001A",
  accentColorBadgeBg: "rgb(226 0 26 / 0.08)",
  accentColorBadgeBorder: "rgb(226 0 26 / 0.35)",
  accentColorBadgeText: "#B50015",
  accentColorNewTagBg: "rgb(226 0 26 / 0.14)",
  accentColorIconBg: "rgb(226 0 26 / 0.1)",
  accentColorLevelTagBg: "rgb(226 0 26 / 0.12)",
  accentColorDark: "#B50015",
};
