// Model comparison content for the Coselgi brand page (/markalar/coselgi).
// Renders through the shared BrandPageComparison component. Uses
// levelLabel (yerleşim etiketi) since Coselgi has no well-established
// public "1-2-3-4" tier system this project has verified with full
// confidence.

import { Waves, Palette, BatteryCharging } from "lucide-astro";
import type { BrandPageComparisonContent } from "../../components/brand-page/BrandPageComparison/BrandPageComparison.astro";

export const coselgiComparison: BrandPageComparisonContent = {
  badge: "MODEL KARŞILAŞTIRMASI",
  heading: "Coselgi Aileleri Karşılaştırması",
  intro: "Hangi Coselgi ailesinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  columnLabels: { series: "Aile", technology: "Öne Çıkan Teknoloji", profile: "Kullanıcı Profili", fourth: "Yerleşim" },
  maxLevels: 4,
  rows: [
    { series: "Effect", technology: "Acoustic Environment Technology", profile: "Geniş Seçenek Arayanlar", profileIcon: Waves, levelLabel: "RIC/BTE" },
    { series: "Effect ITE", technology: "Kişiye Özel Üretim", profile: "Estetik Öncelikli", profileIcon: Palette, levelLabel: "Kulak İçi" },
    { series: "Mojo", technology: "Şarjlı Sistem", profile: "Pratik Kullanım Arayanlar", profileIcon: BatteryCharging, levelLabel: "RIC" },
  ],
  // Precomputed rgb() decomposition of #1595D8.
  accentColor: "#1595D8",
  accentColorBadgeBg: "rgb(21 149 216 / 0.08)",
  accentColorBadgeBorder: "rgb(21 149 216 / 0.35)",
  accentColorBadgeText: "#0F74AC",
  accentColorNewTagBg: "rgb(21 149 216 / 0.14)",
  accentColorIconBg: "rgb(21 149 216 / 0.1)",
  accentColorLevelTagBg: "rgb(21 149 216 / 0.12)",
  accentColorDark: "#0F74AC",
};
