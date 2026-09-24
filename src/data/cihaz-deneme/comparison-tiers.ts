// "Farklı Cihazları Karşılaştırın" — redesign plan §1/§4, Bölüm 5.
// Renders through BrandPageComparison, used sitewide for the first time
// (previously unused — every other page's comparison need was a plain
// 2-column head-to-head, which KulakArkasiComparison already covers).
// Rows are the site's own real, already-existing segment taxonomy
// (/segmentler/ekonomik-seri, /standart-seri, /premium-seri) — not an
// invented "temel/gelişmiş/premium" scale.
import { Wallet, Users, Sparkles } from "lucide-astro";
import type { BrandPageComparisonContent } from "../../components/brand-page/BrandPageComparison/BrandPageComparison.astro";

export const cihazDenemeComparisonTiers: BrandPageComparisonContent = {
  badge: "FARKLI CİHAZLARI KARŞILAŞTIRIN",
  heading: "Hangi Teknoloji Seviyesi Size Uygun?",
  intro: "Deneme sürecinde değerlendirebileceğiniz teknoloji seviyelerine genel bir bakış.",
  columnLabels: {
    series: "Seri",
    technology: "Teknoloji",
    profile: "Kimin İçin",
    fourth: "Teknoloji Seviyesi",
  },
  maxLevels: 5,
  rows: [
    {
      series: "Ekonomik Seri",
      technology: "Temel işitme desteği",
      profile: "Bütçe öncelikli kullanıcılar",
      profileIcon: Wallet,
      levelCount: 2,
    },
    {
      series: "Standart Seri",
      technology: "Gelişmiş gürültü yönetimi",
      profile: "Aktif günlük yaşam",
      profileIcon: Users,
      levelCount: 3,
    },
    {
      series: "Premium Seri",
      technology: "Bluetooth ve yapay zekâ destekli",
      profile: "Yüksek teknoloji beklentisi",
      profileIcon: Sparkles,
      levelCount: 5,
      isNew: true,
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorNewTagBg: "#0d9488",
  accentColorIconBg: "rgb(13 148 136 / 0.12)",
  accentColorLevelTagBg: "rgb(13 148 136 / 0.12)",
  accentColorDark: "#134e4a",
};
