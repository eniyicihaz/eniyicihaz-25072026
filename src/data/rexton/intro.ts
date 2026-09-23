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
    "1994'te Siemens Hearing Instruments tarafından devralınan Rexton, 2015'te Siemens'in tüm işitme cihazı bölümünün satılmasıyla Sivantos çatısına, bugün ise Sivantos ve Widex'in birleşmesiyle oluşan WS Audiology grubuna (Signia ile aynı çatı) bağlıdır.",
    "Marka, Reach ailesinin güncel bağlantı teknolojisi ile BiCore ve MCore işlemci ailelerinde farklı ihtiyaç seviyelerine uygun çözümler sunar.",
  ],
  stats: [
    { value: "1955", label: "Kuruluş Yılı" },
    { value: "Almanya", label: "Kökeni" },
    { value: "WS Audiology", label: "Bağlı Olduğu Grup" },
    { value: "1994 / 2015", label: "Siemens Devralması / Sivantos Geçişi" },
  ],
  // Precomputed rgb() decomposition of #C79712.
  accentColor: "#C79712",
  accentColorBadgeBg: "rgb(199 151 18 / 0.08)",
  accentColorBadgeBorder: "rgb(199 151 18 / 0.35)",
  accentColorBadgeText: "#8A6A0E",
};
