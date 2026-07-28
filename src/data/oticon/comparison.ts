// Model comparison content for the Oticon brand page (/markalar/oticon),
// directly under Models (M5) and before Why Oticon (M6). Independent of
// the /markalar hub page's M1...M8 modules — its own data namespace, only
// ever holding this one brand's content.
//
// All 9 series and their technology/profile labels are real Oticon terms
// already reused elsewhere on this page or in the approved reference
// (4D sensor for Intent, DNN for Real, OpenSound for Opn S, etc.) — no
// invented specs. Tier counts (levelCount) replace the old "1-2-3-4" text
// with a dot scale; Zeal is the one real exception (a newly released
// series, not yet split into tiers), shown as a label instead of dots.

import { Sparkles, Activity, Palette, Sun, Wallet, Volume2, Baby } from "lucide-astro";

export interface ComparisonRow {
  series: string;
  isNew?: boolean;
  technology: string;
  profile: string;
  profileIcon: any;
  levelCount?: number;
  levelLabel?: string;
}

export interface OticonComparisonContent {
  badge: string;
  heading: string;
  intro: string;
  maxLevels: number;
  rows: ComparisonRow[];
}

export const oticonComparison: OticonComparisonContent = {
  badge: "MODEL KARŞILAŞTIRMASI",
  heading: "Oticon Serileri Karşılaştırması",
  intro: "Hangi Oticon serisinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  maxLevels: 4,
  rows: [
    { series: "Zeal", isNew: true, technology: "Yeni Nesil", profile: "Premium Kullanıcılar", profileIcon: Sparkles, levelLabel: "Yeni Seri" },
    { series: "Intent", technology: "4D Sensör", profile: "Premium", profileIcon: Sparkles, levelCount: 4 },
    { series: "Real", technology: "DNN", profile: "Aktif Yaşam", profileIcon: Activity, levelCount: 3 },
    { series: "Own SI", technology: "Kulak İçi", profile: "Estetik Öncelikli", profileIcon: Palette, levelCount: 4 },
    { series: "Opn S", technology: "OpenSound", profile: "Günlük Kullanım", profileIcon: Sun, levelCount: 3 },
    { series: "Zircon", technology: "Fiyat / Performans", profile: "Genel Kullanım", profileIcon: Wallet, levelCount: 2 },
    { series: "Ruby", technology: "Ekonomik", profile: "Temel İhtiyaçlar", profileIcon: Wallet, levelCount: 2 },
    { series: "Xceed", technology: "Power", profile: "İleri Kayıplar", profileIcon: Volume2, levelCount: 3 },
    { series: "Play PX", technology: "Pediatrik", profile: "Çocuklar", profileIcon: Baby, levelCount: 2 },
  ],
};
