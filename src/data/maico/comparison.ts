// Model comparison content for the Maico brand page (/markalar/maico).
// Renders through the shared BrandPageComparison component. Uses
// levelLabel (yerleşim etiketi) since MAICO has no publicly documented
// hearing-aid-specific "1-2-3-4" tier system this project could verify.

import { Bluetooth, Volume2, Palette } from "lucide-astro";
import type { BrandPageComparisonContent } from "../../components/brand-page/BrandPageComparison/BrandPageComparison.astro";

export const maicoComparison: BrandPageComparisonContent = {
  badge: "SERİ KARŞILAŞTIRMASI",
  heading: "MAICO Serileri Karşılaştırması",
  intro: "Hangi MAICO serisinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  columnLabels: { series: "Seri", technology: "Öne Çıkan Özellik", profile: "Kullanıcı Profili", fourth: "Yerleşim" },
  maxLevels: 4,
  rows: [
    { series: "Bluetooth Serisi", technology: "Kablosuz Bağlantı", profile: "Bağlantı Önceliği Olanlar", profileIcon: Bluetooth, levelLabel: "RIC" },
    { series: "Kulak Arkası Serisi", technology: "Geniş Güç Aralığı", profile: "Güçlü Kayıplar", profileIcon: Volume2, levelLabel: "BTE" },
    { series: "Kulak İçi Serisi", technology: "Kişiye Özel Üretim", profile: "Estetik Öncelikli", profileIcon: Palette, levelLabel: "Kulak İçi" },
  ],
  // Precomputed rgb() decomposition of #10233F.
  accentColor: "#10233F",
  accentColorBadgeBg: "rgb(16 35 63 / 0.08)",
  accentColorBadgeBorder: "rgb(16 35 63 / 0.35)",
  accentColorBadgeText: "#0A1830",
  accentColorNewTagBg: "rgb(16 35 63 / 0.14)",
  accentColorIconBg: "rgb(16 35 63 / 0.1)",
  accentColorLevelTagBg: "rgb(16 35 63 / 0.12)",
  accentColorDark: "#0A1830",
};
