// Model comparison content for the Beltone brand page (/markalar/beltone).
// Renders through the shared BrandPageComparison component. Uses
// levelLabel (yerleşim etiketi) since Beltone has no well-established
// public "1-2-3-4" tier system this project has verified with full
// confidence.

import { Sparkles, Layers, Palette, Wallet, Volume2 } from "lucide-astro";
import type { BrandPageComparisonContent } from "../../components/brand-page/BrandPageComparison/BrandPageComparison.astro";

export const beltoneComparison: BrandPageComparisonContent = {
  badge: "MODEL KARŞILAŞTIRMASI",
  heading: "Beltone Aileleri Karşılaştırması",
  intro: "Hangi Beltone ailesinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  columnLabels: { series: "Aile", technology: "Öne Çıkan Teknoloji", profile: "Kullanıcı Profili", fourth: "Yerleşim" },
  maxLevels: 4,
  rows: [
    { series: "Envision", technology: "DNN Yapay Zekâ İşleme", profile: "Güncel Teknoloji Arayanlar", profileIcon: Sparkles, levelLabel: "RIC" },
    { series: "Serene", technology: "Geniş Yerleşim Seçenekleri", profile: "Dengeli Kullanıcılar", profileIcon: Layers, levelLabel: "RIC/BTE" },
    { series: "Serene ITE", technology: "Kişiye Özel Üretim", profile: "Estetik Öncelikli", profileIcon: Palette, levelLabel: "Kulak İçi" },
    { series: "Commence", technology: "Erişilebilir Fiyat", profile: "Bütçe Önceliği Olanlar", profileIcon: Wallet, levelLabel: "RIC" },
    { series: "Boost Max S", technology: "Auracast + Süper Güç", profile: "İleri-Derin Kayıplar", profileIcon: Volume2, levelLabel: "BTE" },
  ],
  // Precomputed rgb() decomposition of #1B3864.
  accentColor: "#1B3864",
  accentColorBadgeBg: "rgb(27 56 100 / 0.08)",
  accentColorBadgeBorder: "rgb(27 56 100 / 0.35)",
  accentColorBadgeText: "#12274A",
  accentColorNewTagBg: "rgb(27 56 100 / 0.14)",
  accentColorIconBg: "rgb(27 56 100 / 0.1)",
  accentColorLevelTagBg: "rgb(27 56 100 / 0.12)",
  accentColorDark: "#12274A",
};
