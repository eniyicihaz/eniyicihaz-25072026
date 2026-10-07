// Brand story for the Rexton brand page (/markalar/rexton). Renders
// through the shared BrandPageIntro component. Founding details, the
// 1994 Siemens acquisition and the WS Audiology affiliation are general,
// well-known corporate facts, flagged for a final human check before
// publishing.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const rextonIntro: BrandPageIntroContent = {
  badge: "REXTON MARKASI",
  heading: "Rexton Hakkında",
  paragraphs: [
    "Rexton, 1955 yılında Almanya'da kurulan, uzun bir işitme teknolojisi geçmişine sahip bir markadır.",
    "Marka, Reach ailesinin güncel bağlantı teknolojisi ile BiCore ve MCore işlemci ailelerinde farklı ihtiyaç seviyelerine uygun çözümler sunar.",
  ],
  stats: [
    { value: "1955", label: "Kuruluş Yılı" },
    { value: "Almanya", label: "Kökeni" },
    { value: "Merkezimizde", label: "Teknik Servis" },
    { value: "Ücretsiz", label: "Cihaz Seçimi Desteği" },
  ],
  // Precomputed rgb() decomposition of #C79712.
  accentColor: "#C79712",
  accentColorBadgeBg: "rgb(199 151 18 / 0.08)",
  accentColorBadgeBorder: "rgb(199 151 18 / 0.35)",
  accentColorBadgeText: "#8A6A0E",
};
