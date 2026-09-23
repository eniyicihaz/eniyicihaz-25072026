// Model comparison content for the Signia brand page (/markalar/signia) —
// see SIGNIA MASTER BLUEPRINT §9.8. Renders through the shared
// BrandPageComparison component. Uses levelLabel (descriptive tag) for
// every row rather than the dot-scale, since Signia has no well-established
// public "1-2-3-4" tier system this project has verified — same choice
// made for Phonak.

import { Sparkles, Waves, Palette, Zap, Activity, Volume2 } from "lucide-astro";
import type { BrandPageComparisonContent } from "../../components/brand-page/BrandPageComparison/BrandPageComparison.astro";

export const signiaComparison: BrandPageComparisonContent = {
  badge: "MODEL KARŞILAŞTIRMASI",
  heading: "Signia Aileleri Karşılaştırması",
  intro: "Hangi Signia ailesinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  columnLabels: { series: "Aile", technology: "Öne Çıkan Teknoloji", profile: "Kullanıcı Profili", fourth: "Yerleşim" },
  maxLevels: 4,
  rows: [
    { series: "Styletto", technology: "Modern Tasarım", profile: "Estetik Öncelikli", profileIcon: Sparkles, levelLabel: "RIC" },
    { series: "Pure", technology: "Own Voice Processing", profile: "Genel Kullanım", profileIcon: Waves, levelLabel: "RIC" },
    { series: "Insio", technology: "Kişiye Özel Üretim", profile: "Kulak İçi Tercih Edenler", profileIcon: Palette, levelLabel: "ITE" },
    { series: "Silk", technology: "Kalıpsız Kullanım", profile: "Hızlı Uyum İsteyenler", profileIcon: Zap, levelLabel: "Kulak İçi" },
    { series: "Active", technology: "Aktif Yaşam Tasarımı", profile: "Spor ve Hareketli Kullanıcılar", profileIcon: Activity, levelLabel: "Kulaklık Tipi" },
    { series: "Motion", technology: "Geniş Güç Aralığı", profile: "İleri Derece Kayıplar", profileIcon: Volume2, levelLabel: "BTE" },
  ],
  // Signia brand theme revision (2026-07): bordo (#B21F4B). headerBg is
  // the newly-added optional BrandPageComparisonContent field — per the
  // brief's explicit "Comparison Table: Header = Accent" spec, the table
  // header row uses the accent color itself instead of the shared
  // hardcoded navy every other brand page's Comparison table still uses.
  accentColor: "#B21F4B",
  accentColorBadgeBg: "rgb(178 31 75 / 0.12)",
  accentColorBadgeBorder: "rgb(178 31 75 / 0.35)",
  accentColorBadgeText: "#B21F4B",
  accentColorNewTagBg: "rgb(178 31 75 / 0.14)",
  accentColorIconBg: "rgb(178 31 75 / 0.1)",
  accentColorLevelTagBg: "rgb(178 31 75 / 0.12)",
  accentColorDark: "#8A1738",
  headerBg: "#B21F4B",
};
