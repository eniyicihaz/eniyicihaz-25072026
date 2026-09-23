// Model comparison content for the Unitron brand page (/markalar/unitron).
// Renders through the shared BrandPageComparison component. Uses
// levelLabel (yerleşim etiketi) since Unitron has no well-established
// public "1-2-3-4" tier system this project has verified with full
// confidence.

import { Sparkles, Bluetooth, Layers, Volume2, Wallet } from "lucide-astro";
import type { BrandPageComparisonContent } from "../../components/brand-page/BrandPageComparison/BrandPageComparison.astro";

export const unitronComparison: BrandPageComparisonContent = {
  badge: "MODEL KARŞILAŞTIRMASI",
  heading: "Unitron Aileleri Karşılaştırması",
  intro: "Hangi Unitron ailesinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  columnLabels: { series: "Aile", technology: "Öne Çıkan Teknoloji", profile: "Kullanıcı Profili", fourth: "Yerleşim" },
  maxLevels: 4,
  rows: [
    { series: "Smile", technology: "En Güncel Platform (2025)", profile: "Güncel Teknoloji Arayanlar", profileIcon: Sparkles, levelLabel: "RIC" },
    { series: "Blu", technology: "Sonova PRISM + AutoFocus 360", profile: "Bağlantı Önceliği Olanlar", profileIcon: Bluetooth, levelLabel: "RIC" },
    { series: "Moxi Vivante", technology: "Kanıtlanmış Önceki Nesil", profile: "Dengeli Kullanıcılar", profileIcon: Layers, levelLabel: "RIC" },
    { series: "Stride", technology: "Geniş Güç Aralığı", profile: "İleri Derece Kayıplar", profileIcon: Volume2, levelLabel: "BTE" },
    { series: "Insera", technology: "Temel İşleme", profile: "Giriş Seviyesi Arayanlar", profileIcon: Wallet, levelLabel: "RIC/BTE" },
  ],
  // Precomputed rgb() decomposition of #1C4C87.
  accentColor: "#1C4C87",
  accentColorBadgeBg: "rgb(28 76 135 / 0.08)",
  accentColorBadgeBorder: "rgb(28 76 135 / 0.35)",
  accentColorBadgeText: "#133A6B",
  accentColorNewTagBg: "rgb(28 76 135 / 0.14)",
  accentColorIconBg: "rgb(28 76 135 / 0.1)",
  accentColorLevelTagBg: "rgb(28 76 135 / 0.12)",
  accentColorDark: "#133A6B",
};
