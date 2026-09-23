// Model comparison content for the Vista brand page (/markalar/vista).
// Renders through the shared BrandPageComparison component. Uses the
// real, documented Vista V/B/T tier system as levelLabel.

import { Sparkles, Gauge, BatteryCharging, Palette } from "lucide-astro";
import type { BrandPageComparisonContent } from "../../components/brand-page/BrandPageComparison/BrandPageComparison.astro";

export const vistaComparison: BrandPageComparisonContent = {
  badge: "MODEL KARŞILAŞTIRMASI",
  heading: "Vista Kademeleri Karşılaştırması",
  intro: "Hangi Vista kademesinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  columnLabels: { series: "Model", technology: "Kademe", profile: "Kullanıcı Profili", fourth: "Yerleşim" },
  maxLevels: 3,
  rows: [
    { series: "Vista V", technology: "Üst Kademe", profile: "Güncel Teknoloji Arayanlar", profileIcon: Sparkles, levelLabel: "RIC" },
    { series: "Vista B", technology: "Orta Kademe", profile: "Dengeli Kullanıcılar", profileIcon: Gauge, levelLabel: "BTE/RIC" },
    { series: "Vista T", technology: "Şarjlı Sistem", profile: "Pratik Kullanım Arayanlar", profileIcon: BatteryCharging, levelLabel: "RIC" },
    { series: "Vista IC", technology: "Kişiye Özel Üretim", profile: "Estetik Öncelikli", profileIcon: Palette, levelLabel: "Kulak İçi" },
  ],
  // Precomputed rgb() decomposition of #E85D0A.
  accentColor: "#E85D0A",
  accentColorBadgeBg: "rgb(232 93 10 / 0.08)",
  accentColorBadgeBorder: "rgb(232 93 10 / 0.35)",
  accentColorBadgeText: "#B94708",
  accentColorNewTagBg: "rgb(232 93 10 / 0.14)",
  accentColorIconBg: "rgb(232 93 10 / 0.1)",
  accentColorLevelTagBg: "rgb(232 93 10 / 0.12)",
  accentColorDark: "#B94708",
};
