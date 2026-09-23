// Model comparison content for the NuEar brand page (/markalar/nuear).
// Renders through the shared BrandPageComparison component. Uses
// levelLabel (descriptive tag) for every row rather than the dot-scale,
// since NuEar has no well-established public "1-2-3-4" tier system this
// project has verified — same choice made for Phonak, Signia, Widex and
// ReSound.

import { Sparkles, Layers, BatteryCharging, Waves, Wallet, Palette } from "lucide-astro";
import type { BrandPageComparisonContent } from "../../components/brand-page/BrandPageComparison/BrandPageComparison.astro";

export const nuearComparison: BrandPageComparisonContent = {
  badge: "MODEL KARŞILAŞTIRMASI",
  heading: "NuEar Aileleri Karşılaştırması",
  intro: "Hangi NuEar ailesinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  columnLabels: { series: "Aile", technology: "Öne Çıkan Teknoloji", profile: "Kullanıcı Profili", fourth: "Yerleşim" },
  maxLevels: 4,
  rows: [
    { series: "NXG AI", technology: "Güncel Ses İşleme + Hear Circle", profile: "Güncel Teknoloji Arayanlar", profileIcon: Sparkles, levelLabel: "RIC" },
    { series: "NE Series", technology: "Bağlantı Odaklı Tasarım", profile: "Dengeli Kullanıcılar", profileIcon: Waves, levelLabel: "RIC" },
    { series: "Circa", technology: "Şarjlı Sistem", profile: "Pratik Kullanım Arayanlar", profileIcon: BatteryCharging, levelLabel: "RIC" },
    { series: "Savant AI", technology: "Geniş Ürün Yelpazesi", profile: "Farklı Form Faktörü İsteyenler", profileIcon: Layers, levelLabel: "RIC/BTE" },
    { series: "NOW iQ", technology: "Uygun Fiyatlı Bağlantı", profile: "Giriş-Orta Seviye Kullanıcılar", profileIcon: Wallet, levelLabel: "RIC" },
    { series: "Miniscopic Synergy iQ", technology: "Kişiye Özel Üretim", profile: "Kulak İçi Tercih Edenler", profileIcon: Palette, levelLabel: "Kulak İçi" },
  ],
  // Precomputed rgb() decomposition of #E4002B.
  accentColor: "#E4002B",
  accentColorBadgeBg: "rgb(228 0 43 / 0.08)",
  accentColorBadgeBorder: "rgb(228 0 43 / 0.35)",
  accentColorBadgeText: "#B7001F",
  accentColorNewTagBg: "rgb(228 0 43 / 0.14)",
  accentColorIconBg: "rgb(228 0 43 / 0.1)",
  accentColorLevelTagBg: "rgb(228 0 43 / 0.12)",
  accentColorDark: "#B7001F",
};
