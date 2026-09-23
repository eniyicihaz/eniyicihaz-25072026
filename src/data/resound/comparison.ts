// Model comparison content for the ReSound brand page (/markalar/resound).
// Renders through the shared BrandPageComparison component. Uses
// levelLabel (descriptive tag) for every row rather than the dot-scale,
// since ReSound has no well-established public "1-2-3-4" tier system this
// project has verified — same choice made for Phonak, Signia and Widex.

import { Sparkles, Radio, Layers, Waves, Volume2, Wallet } from "lucide-astro";
import type { BrandPageComparisonContent } from "../../components/brand-page/BrandPageComparison/BrandPageComparison.astro";

export const resoundComparison: BrandPageComparisonContent = {
  badge: "MODEL KARŞILAŞTIRMASI",
  heading: "ReSound Aileleri Karşılaştırması",
  intro: "Hangi ReSound ailesinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  columnLabels: { series: "Aile", technology: "Öne Çıkan Teknoloji", profile: "Kullanıcı Profili", fourth: "Yerleşim" },
  maxLevels: 4,
  rows: [
    { series: "Vivia", technology: "Derin Öğrenme + Auracast Asistanı", profile: "Güncel Teknoloji Arayanlar", profileIcon: Sparkles, levelLabel: "RIC" },
    { series: "Nexia", technology: "Auracast (Bluetooth LE Audio)", profile: "Bağlantı Odaklı Kullanıcılar", profileIcon: Radio, levelLabel: "RIC/BTE/ITE" },
    { series: "Omnia", technology: "M&RIE", profile: "Mekansal İşitmeyi Önceliklendirenler", profileIcon: Waves, levelLabel: "RIC" },
    { series: "Savi", technology: "Uygun Fiyatlı Bağlantı", profile: "Dengeli Kullanıcılar", profileIcon: Layers, levelLabel: "RIC" },
    { series: "ENZO Q", technology: "Geniş Güç Aralığı", profile: "İleri Derece Kayıplar", profileIcon: Volume2, levelLabel: "BTE" },
    { series: "Key", technology: "Temel İhtiyaçlar", profile: "Giriş Seviyesi Kullanıcılar", profileIcon: Wallet, levelLabel: "BTE" },
  ],
  // Precomputed rgb() decomposition of #AA1835.
  accentColor: "#AA1835",
  accentColorBadgeBg: "rgb(170 24 53 / 0.08)",
  accentColorBadgeBorder: "rgb(170 24 53 / 0.35)",
  accentColorBadgeText: "#8B1330",
  accentColorNewTagBg: "rgb(170 24 53 / 0.14)",
  accentColorIconBg: "rgb(170 24 53 / 0.1)",
  accentColorLevelTagBg: "rgb(170 24 53 / 0.12)",
  accentColorDark: "#8B1330",
};
