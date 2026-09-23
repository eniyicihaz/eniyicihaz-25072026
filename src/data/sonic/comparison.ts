// Model comparison content for the Sonic brand page (/markalar/sonic).
// Renders through the shared BrandPageComparison component. Uses
// levelLabel (yerleşim etiketi) since Sonic has no well-established
// public "1-2-3-4" tier system this project has verified with full
// confidence.

import { Sparkles, Layers, Volume2, Palette, BatteryCharging } from "lucide-astro";
import type { BrandPageComparisonContent } from "../../components/brand-page/BrandPageComparison/BrandPageComparison.astro";

export const sonicComparison: BrandPageComparisonContent = {
  badge: "MODEL KARŞILAŞTIRMASI",
  heading: "Sonic Aileleri Karşılaştırması",
  intro: "Hangi Sonic ailesinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  columnLabels: { series: "Aile", technology: "Öne Çıkan Teknoloji", profile: "Kullanıcı Profili", fourth: "Yerleşim" },
  maxLevels: 4,
  rows: [
    { series: "Enchant", technology: "SoundDNA Platformu", profile: "Güncel Teknoloji Arayanlar", profileIcon: Sparkles, levelLabel: "RIC" },
    { series: "Radiant", technology: "Kanıtlanmış Amplifikasyon", profile: "Dengeli Kullanıcılar", profileIcon: Layers, levelLabel: "RIC/BTE" },
    { series: "Enchant BTE", technology: "Geniş Güç Aralığı", profile: "İleri Derece Kayıplar", profileIcon: Volume2, levelLabel: "BTE" },
    { series: "Enchant ITE", technology: "Kişiye Özel Üretim", profile: "Estetik Öncelikli", profileIcon: Palette, levelLabel: "Kulak İçi" },
    { series: "Enchant Şarjlı", technology: "Lityum-İyon Şarj", profile: "Pratik Kullanım Arayanlar", profileIcon: BatteryCharging, levelLabel: "RIC" },
  ],
  // Precomputed rgb() decomposition of #3D4C59.
  accentColor: "#3D4C59",
  accentColorBadgeBg: "rgb(61 76 89 / 0.08)",
  accentColorBadgeBorder: "rgb(61 76 89 / 0.35)",
  accentColorBadgeText: "#2C3841",
  accentColorNewTagBg: "rgb(61 76 89 / 0.14)",
  accentColorIconBg: "rgb(61 76 89 / 0.1)",
  accentColorLevelTagBg: "rgb(61 76 89 / 0.12)",
  accentColorDark: "#2C3841",
};
