// Brand story for the Bernafon brand page (/markalar/bernafon) — combines
// Oticon's separate About+Heritage sections into one, same pattern used
// for the five brand pages built before it. Renders through the shared
// BrandPageIntro component. Founding details and Demant Group affiliation
// are general, well-known corporate facts, flagged for a final human
// check before publishing.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const bernafonIntro: BrandPageIntroContent = {
  badge: "BERNAFON MARKASI",
  heading: "Bernafon İşitme Cihazları Hakkında",
  paragraphs: [
    "Bernafon, 1946 yılında Bern, İsviçre'de kurulan, uzun bir işitme teknolojisi geçmişine sahip bir markadır.",
    "Marka, sektörün ilk digital olarak programlanabilir işitme cihazını (1987) ve ilk tam dijital cihazını (1999) geliştiren şirketlerden biri olarak bilinir.",
    "Bugün Danimarka merkezli Demant Grubu'na bağlı olan Bernafon, Encanta, Encanta Alpha XT ve Juna gibi ürün ailelerinde hareket algılama ve konuşma anlaşılırlığı odaklı yaklaşımını sürdürür.",
  ],
  stats: [
    { value: "1946", label: "Kuruluş Yılı" },
    { value: "İsviçre", label: "Kökeni (Bern)" },
    { value: "Demant Grubu", label: "Bağlı Olduğu Grup" },
    { value: "1987 / 1999", label: "İlk Dijital Programlanabilir / Tam Dijital Cihaz" },
  ],
  // Precomputed rgb() decomposition of #DA291C — kept distinct in shade
  // from ReSound's darker maroon and NuEar's brighter magenta-leaning red.
  accentColor: "#DA291C",
  accentColorBadgeBg: "rgb(218 41 28 / 0.08)",
  accentColorBadgeBorder: "rgb(218 41 28 / 0.35)",
  accentColorBadgeText: "#B01E15",
};
