// Brand story for the NuEar brand page (/markalar/nuear) — combines
// Oticon's separate About+Heritage sections into one, same pattern used
// for Phonak, Signia, Widex and ReSound. Renders through the shared
// BrandPageIntro component. Founding details and Starkey affiliation are
// general, well-known corporate facts, flagged for a final human check
// before publishing.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const nuearIntro: BrandPageIntroContent = {
  badge: "NUEAR MARKASI",
  heading: "NuEar İşitme Cihazları Hakkında",
  paragraphs: [
    "NuEar, 1976 yılında San Diego, Kaliforniya'da kurulan, bugün Amerikan menşeli Starkey grubuna bağlı bir işitme cihazı markasıdır.",
    "Marka, işitme cihazını yalnızca bir ses yükseltme aracı değil, günlük aktivite ve sağlık takibini de içeren bağlantılı bir deneyim olarak konumlandırır.",
    "NXG AI, NE Series, Circa ve Savant AI gibi ürün ailelerinde bu yaklaşım, kullanıcının işitme ihtiyacına ve yaşam tarzına göre şekillenir.",
  ],
  stats: [
    { value: "1976", label: "Kuruluş Yılı" },
    { value: "ABD", label: "Kökeni (San Diego)" },
    { value: "Starkey", label: "Bağlı Olduğu Grup" },
    { value: "Hear Circle", label: "Sağlık ve Aktivite Uygulaması" },
  ],
  // Precomputed rgb() decomposition of #E4002B — kept distinct from
  // Oticon's green, Phonak's blue, Signia's purple, Widex's teal and
  // ReSound's darker maroon red.
  accentColor: "#E4002B",
  accentColorBadgeBg: "rgb(228 0 43 / 0.08)",
  accentColorBadgeBorder: "rgb(228 0 43 / 0.35)",
  accentColorBadgeText: "#B7001F",
};
