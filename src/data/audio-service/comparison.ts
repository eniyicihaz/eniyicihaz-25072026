// Model comparison content for the Audio Service brand page
// (/markalar/audio-service). Renders through the shared
// BrandPageComparison component. Uses levelLabel (yerleşim etiketi) since
// Audio Service has no well-established public "1-2-3-4" tier system this
// project has verified with full confidence.

import { Palette, Waves, Wallet, Layers, BatteryCharging } from "lucide-astro";
import type { BrandPageComparisonContent } from "../../components/brand-page/BrandPageComparison/BrandPageComparison.astro";

export const audioServiceComparison: BrandPageComparisonContent = {
  badge: "MODEL KARŞILAŞTIRMASI",
  heading: "Audio Service Aileleri Karşılaştırması",
  intro: "Hangi Audio Service ailesinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  columnLabels: { series: "Aile", technology: "Öne Çıkan Özellik", profile: "Kullanıcı Profili", fourth: "Yerleşim" },
  maxLevels: 4,
  rows: [
    { series: "Stiline", technology: "Stil Odaklı Tasarım", profile: "Tasarımı Önceliklendirenler", profileIcon: Palette, levelLabel: "RIC" },
    { series: "Mood", technology: "Dengeli Bağlantı", profile: "Dengeli Kullanıcılar", profileIcon: Waves, levelLabel: "RIC" },
    { series: "Quix", technology: "Erişilebilir Fiyat", profile: "Bütçe Önceliği Olanlar", profileIcon: Wallet, levelLabel: "RIC" },
    { series: "Kulak İçi Serisi", technology: "Kişiye Özel Üretim", profile: "Estetik Öncelikli", profileIcon: Layers, levelLabel: "Kulak İçi" },
    { series: "Şarjlı Serisi", technology: "Lityum-İyon Şarj", profile: "Pratik Kullanım Arayanlar", profileIcon: BatteryCharging, levelLabel: "RIC" },
  ],
  // Precomputed rgb() decomposition of #1240A0.
  accentColor: "#1240A0",
  accentColorBadgeBg: "rgb(18 64 160 / 0.08)",
  accentColorBadgeBorder: "rgb(18 64 160 / 0.35)",
  accentColorBadgeText: "#0C2E7A",
  accentColorNewTagBg: "rgb(18 64 160 / 0.14)",
  accentColorIconBg: "rgb(18 64 160 / 0.1)",
  accentColorLevelTagBg: "rgb(18 64 160 / 0.12)",
  accentColorDark: "#0C2E7A",
};
