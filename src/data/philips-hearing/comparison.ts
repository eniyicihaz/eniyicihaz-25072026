// Model comparison content for the Philips Hearing brand page
// (/markalar/philips-hearing). Renders through the shared
// BrandPageComparison component. Uses the real, documented HearLink
// 50/40/30 tier system as levelLabel/maxLevels.

import { Sparkles, Gauge, Wallet, Palette, BatteryCharging } from "lucide-astro";
import type { BrandPageComparisonContent } from "../../components/brand-page/BrandPageComparison/BrandPageComparison.astro";

export const philipsHearingComparison: BrandPageComparisonContent = {
  badge: "MODEL KARŞILAŞTIRMASI",
  heading: "Philips HearLink Kademeleri Karşılaştırması",
  intro: "Hangi Philips HearLink kademesinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  columnLabels: { series: "Model", technology: "Kademe", profile: "Kullanıcı Profili", fourth: "Yerleşim" },
  maxLevels: 3,
  rows: [
    { series: "HearLink 50", technology: "Üst Kademe", profile: "Güncel Teknoloji Arayanlar", profileIcon: Sparkles, levelLabel: "RIC" },
    { series: "HearLink 40", technology: "Orta Kademe", profile: "Dengeli Kullanıcılar", profileIcon: Gauge, levelLabel: "RIC" },
    { series: "HearLink 30", technology: "Giriş Kademesi", profile: "Bütçe Önceliği Olanlar", profileIcon: Wallet, levelLabel: "RIC" },
    { series: "HearLink Kulak İçi", technology: "Kişiye Özel Üretim", profile: "Estetik Öncelikli", profileIcon: Palette, levelLabel: "ITC/CIC/IIC" },
    { series: "HearLink Şarjlı", technology: "Lityum-İyon Şarj", profile: "Pratik Kullanım Arayanlar", profileIcon: BatteryCharging, levelLabel: "RIC" },
  ],
  // Precomputed rgb() decomposition of #0B5FCE.
  accentColor: "#0B5FCE",
  accentColorBadgeBg: "rgb(11 95 206 / 0.08)",
  accentColorBadgeBorder: "rgb(11 95 206 / 0.35)",
  accentColorBadgeText: "#0848A3",
  accentColorNewTagBg: "rgb(11 95 206 / 0.14)",
  accentColorIconBg: "rgb(11 95 206 / 0.1)",
  accentColorLevelTagBg: "rgb(11 95 206 / 0.12)",
  accentColorDark: "#0848A3",
};
