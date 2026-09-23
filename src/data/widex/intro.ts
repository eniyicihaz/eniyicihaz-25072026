// Brand story for the Widex brand page (/markalar/widex) — combines
// Oticon's separate About+Heritage sections into one, same pattern used
// for Phonak and Signia. Renders through the shared BrandPageIntro
// component. Founding details and WS Audiology affiliation are general,
// well-known corporate facts, flagged for a final human check before
// publishing.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const widexIntro: BrandPageIntroContent = {
  badge: "WIDEX MARKASI",
  heading: "Widex İşitme Cihazları Hakkında",
  paragraphs: [
    "Widex, 1956 yılında Danimarka'da Christian Tøpholm ve Erik Westermann tarafından kurulan, uzun yıllardır aile şirketi geleneğini sürdüren bir işitme cihazı markasıdır.",
    "Marka, \"Less is more in natural hearing\" ses felsefesiyle, sesi olabildiğince az işleyerek beynin sesi daha doğal ve detaylı algılamasını hedefler.",
    "Allure, SmartRIC, Moment, Evoke ve Unique gibi ürün ailelerinde bu yaklaşım, kullanıcının işitme ihtiyacına ve yaşam tarzına göre şekillenir.",
  ],
  stats: [
    { value: "1956", label: "Kuruluş Yılı" },
    { value: "Danimarka", label: "Kökeni" },
    { value: "WS Audiology", label: "Bağlı Olduğu Grup" },
    { value: "\"Less is more\"", label: "Ses Felsefesi" },
  ],
  // Precomputed rgb() decomposition of #14b8a6 — kept distinct from
  // Oticon's green, Phonak's blue and Signia's purple accent.
  accentColor: "#14b8a6",
  accentColorBadgeBg: "rgb(20 184 166 / 0.08)",
  accentColorBadgeBorder: "rgb(20 184 166 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
