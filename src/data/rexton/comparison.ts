// Model comparison content for the Rexton brand page (/markalar/rexton).
// Renders through the shared BrandPageComparison component. Uses
// levelLabel (yerleşim etiketi) since Rexton has no well-established
// public "1-2-3-4" tier system this project has verified with full
// confidence.

import { Bluetooth, Waves, Wallet, Palette } from "lucide-astro";
import type { BrandPageComparisonContent } from "../../components/brand-page/BrandPageComparison/BrandPageComparison.astro";

export const rextonComparison: BrandPageComparisonContent = {
  badge: "MODEL KARŞILAŞTIRMASI",
  heading: "Rexton Aileleri Karşılaştırması",
  intro: "Hangi Rexton ailesinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  columnLabels: { series: "Aile", technology: "Öne Çıkan Özellik", profile: "Kullanıcı Profili", fourth: "Yerleşim" },
  maxLevels: 3,
  rows: [
    { series: "Reach", technology: "Güncel Bağlantı Teknolojisi", profile: "Bağlantı Önceliği Olanlar", profileIcon: Bluetooth, levelLabel: "RIC" },
    { series: "BiCore", technology: "Dengeli Ses İşleme", profile: "Dengeli Kullanıcılar", profileIcon: Waves, levelLabel: "RIC" },
    { series: "MCore", technology: "Sade İşleme Yaklaşımı", profile: "Giriş Seviyesi Arayanlar", profileIcon: Wallet, levelLabel: "BTE" },
    { series: "BiCore ITE", technology: "Kişiye Özel Üretim", profile: "Estetik Öncelikli", profileIcon: Palette, levelLabel: "Kulak İçi" },
  ],
  // Precomputed rgb() decomposition of #C79712.
  accentColor: "#C79712",
  accentColorBadgeBg: "rgb(199 151 18 / 0.08)",
  accentColorBadgeBorder: "rgb(199 151 18 / 0.35)",
  accentColorBadgeText: "#8A6A0E",
  accentColorNewTagBg: "rgb(199 151 18 / 0.14)",
  accentColorIconBg: "rgb(199 151 18 / 0.1)",
  accentColorLevelTagBg: "rgb(199 151 18 / 0.12)",
  accentColorDark: "#8A6A0E",
};
