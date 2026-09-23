// Model comparison content for the Widex brand page (/markalar/widex).
// Renders through the shared BrandPageComparison component. Uses
// levelLabel (descriptive tag) for every row rather than the dot-scale,
// since Widex has no well-established public "1-2-3-4" tier system this
// project has verified — same choice made for Phonak and Signia.

import { Sparkles, Waves, Activity, Volume2, Layers, Wallet } from "lucide-astro";
import type { BrandPageComparisonContent } from "../../components/brand-page/BrandPageComparison/BrandPageComparison.astro";

export const widexComparison: BrandPageComparisonContent = {
  badge: "MODEL KARŞILAŞTIRMASI",
  heading: "Widex Aileleri Karşılaştırması",
  intro: "Hangi Widex ailesinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  columnLabels: { series: "Aile", technology: "Öne Çıkan Teknoloji", profile: "Kullanıcı Profili", fourth: "Yerleşim" },
  maxLevels: 4,
  rows: [
    { series: "Allure", technology: "Yeni Nesil Çip Mimarisi", profile: "Güncel Teknoloji Arayanlar", profileIcon: Sparkles, levelLabel: "RIC/BTE/ITE" },
    { series: "SmartRIC", technology: "Gürültü Engelleme Tasarımı", profile: "Gürültülü Ortam Kullanıcıları", profileIcon: Waves, levelLabel: "RIC" },
    { series: "Moment Sheer", technology: "PureSound (ZeroDelay)", profile: "Doğal Ses Önceliklendirenler", profileIcon: Activity, levelLabel: "İnce RIC" },
    { series: "Beyond", technology: "Geniş Güç Aralığı", profile: "İleri Derece Kayıplar", profileIcon: Volume2, levelLabel: "BTE" },
    { series: "Evoke", technology: "Kanıtlanmış Ses İşleme", profile: "Uygun Teknoloji Arayanlar", profileIcon: Layers, levelLabel: "RIC/BTE" },
    { series: "Unique", technology: "Temel İhtiyaçlar", profile: "Klasik Kullanım", profileIcon: Wallet, levelLabel: "BTE" },
  ],
  // Precomputed rgb() decomposition of #14b8a6.
  accentColor: "#14b8a6",
  accentColorBadgeBg: "rgb(20 184 166 / 0.08)",
  accentColorBadgeBorder: "rgb(20 184 166 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorNewTagBg: "rgb(20 184 166 / 0.14)",
  accentColorIconBg: "rgb(20 184 166 / 0.1)",
  accentColorLevelTagBg: "rgb(20 184 166 / 0.12)",
  accentColorDark: "#0f766e",
};
