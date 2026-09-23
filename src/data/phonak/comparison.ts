// Model comparison content for the Phonak brand page (/markalar/phonak) —
// see PHONAK MASTER BLUEPRINT §6.8. Renders through the shared
// BrandPageComparison component. The 4th column ("Yerleşim") reuses the
// same form-factor facts already established in models.ts (RIC/BTE/Power/
// Kulak İçi/etc.) rather than an invented tier/level count — Phonak has no
// well-established public "1-2-3-4" tier system the way Oticon does, so
// levelLabel is used for every row, never the dot scale.

import { Users, Volume2, Baby, Activity, Palette, Shuffle } from "lucide-astro";

export interface PhonakComparisonRow {
  series: string;
  technology: string;
  profile: string;
  profileIcon: any;
  levelLabel: string;
}

export interface PhonakComparisonContent {
  badge: string;
  heading: string;
  intro: string;
  columnLabels: { series: string; technology: string; profile: string; fourth: string };
  maxLevels: number;
  rows: PhonakComparisonRow[];
  accentColor: string;
  accentColorBadgeBg: string;
  accentColorBadgeBorder: string;
  accentColorBadgeText: string;
  accentColorNewTagBg: string;
  accentColorIconBg: string;
  accentColorLevelTagBg: string;
  accentColorDark: string;
}

export const phonakComparison: PhonakComparisonContent = {
  badge: "MODEL KARŞILAŞTIRMASI",
  heading: "Phonak Aileleri Karşılaştırması",
  intro: "Hangi Phonak ailesinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  columnLabels: { series: "Aile", technology: "Öne Çıkan Teknoloji", profile: "Kullanıcı Profili", fourth: "Yerleşim" },
  maxLevels: 4,
  rows: [
    { series: "Audéo", technology: "Evrensel Bağlantı", profile: "Genel Kullanım", profileIcon: Users, levelLabel: "RIC" },
    { series: "Naída", technology: "Güçlendirilmiş Ses Gücü", profile: "İleri Derece Kayıplar", profileIcon: Volume2, levelLabel: "Power" },
    { series: "Sky", technology: "Pediatrik Tasarım", profile: "Çocuklar", profileIcon: Baby, levelLabel: "RIC (Çocuk)" },
    { series: "Bolero", technology: "Klasik Bağlantı", profile: "Geniş Güç Aralığı", profileIcon: Activity, levelLabel: "BTE" },
    { series: "Virto", technology: "Kişiye Özel Üretim", profile: "Estetik Öncelikli", profileIcon: Palette, levelLabel: "Kulak İçi (ITE)" },
    { series: "CROS", technology: "Tek Taraflı Ses Aktarımı", profile: "Tek Kulak İşitme Kaybı", profileIcon: Shuffle, levelLabel: "CROS Sistemi" },
  ],
  // Precomputed rgb() decomposition of #0ea5e9 — kept distinct from
  // Oticon's green accent.
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0369a1",
  accentColorNewTagBg: "rgb(14 165 233 / 0.14)",
  accentColorIconBg: "rgb(14 165 233 / 0.1)",
  accentColorLevelTagBg: "rgb(14 165 233 / 0.12)",
  accentColorDark: "#0369a1",
};
