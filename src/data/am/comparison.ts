// Model comparison content for the A&M brand page (/markalar/am). Renders
// through the shared BrandPageComparison component. Uses levelLabel
// (yerleşim etiketi) her satırda, güç seviyesi ise "profile" alanında
// betimsel olarak veriliyor — A&M'in kamuya açık, projede tam güvenle
// doğrulanmış bir "1-2-3-4" teknoloji katman sistemi bulunmuyor.

import { Volume2, Gauge, Layers, Wallet, Palette } from "lucide-astro";
import type { BrandPageComparisonContent } from "../../components/brand-page/BrandPageComparison/BrandPageComparison.astro";

export const amComparison: BrandPageComparisonContent = {
  badge: "MODEL KARŞILAŞTIRMASI",
  heading: "A&M XTM Serisi Karşılaştırması",
  intro: "Hangi A&M modelinin sizin için daha uygun olduğunu aşağıdaki özet tabloda inceleyebilirsiniz.",
  columnLabels: { series: "Model", technology: "Güç Seviyesi", profile: "Kullanıcı Profili", fourth: "Yerleşim" },
  maxLevels: 4,
  rows: [
    { series: "XTM P12", technology: "En Yüksek Güç", profile: "İleri Derece Kayıplar", profileIcon: Volume2, levelLabel: "BTE" },
    { series: "XTM P8", technology: "Orta-Üst Güç", profile: "Dengeli Kullanıcılar", profileIcon: Gauge, levelLabel: "BTE" },
    { series: "XTM P6", technology: "Orta Güç", profile: "Orta Derece Kayıplar", profileIcon: Layers, levelLabel: "BTE" },
    { series: "XTM P4", technology: "Temel Güç", profile: "Giriş Seviyesi Arayanlar", profileIcon: Wallet, levelLabel: "BTE" },
    { series: "XTM A4", technology: "Kişiye Özel Üretim", profile: "Estetik Öncelikli", profileIcon: Palette, levelLabel: "Kulak İçi" },
  ],
  // Precomputed rgb() decomposition of #F3701A.
  accentColor: "#F3701A",
  accentColorBadgeBg: "rgb(243 112 26 / 0.08)",
  accentColorBadgeBorder: "rgb(243 112 26 / 0.35)",
  accentColorBadgeText: "#C25710",
  accentColorNewTagBg: "rgb(243 112 26 / 0.14)",
  accentColorIconBg: "rgb(243 112 26 / 0.1)",
  accentColorLevelTagBg: "rgb(243 112 26 / 0.12)",
  accentColorDark: "#C25710",
};
