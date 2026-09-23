// Brand story for the Phonak brand page (/markalar/phonak) — combines
// Oticon's separate About+Heritage sections into one (see PHONAK MASTER
// BLUEPRINT §3.1/§6.3). Renders through the shared BrandPageIntro
// component. Founding year and Sonova affiliation are general, well-known
// corporate facts (same confidence level as Oticon's own "1904, Danimarka"
// — see oticon/heritage.ts) — flagged in the blueprint for a final human
// check before publishing.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const phonakIntro: BrandPageIntroContent = {
  badge: "PHONAK MARKASI",
  heading: "Phonak İşitme Cihazları Hakkında",
  paragraphs: [
    "Phonak, İsviçre merkezli Sonova Grubu'na bağlı, dünya genelinde tercih edilen işitme cihazı üreticilerinden biridir.",
    "Marka, \"Life is on.\" felsefesiyle işitme cihazlarını yalnızca bir tıbbi cihaz değil, kullanıcının aktif yaşamına kesintisiz bağlı kalmasını sağlayan bir bağlantı aracı olarak konumlandırır.",
    "Audéo, Naída, Sky, Bolero, Virto ve CROS gibi farklı ürün ailelerinde bu yaklaşım, kullanıcının yaşam tarzına göre şekillenir.",
  ],
  stats: [
    { value: "1947", label: "Kuruluş Yılı" },
    { value: "İsviçre", label: "Global Marka Kökeni" },
    { value: "Sonova Grubu", label: "Bağlı Olduğu Grup" },
    { value: "\"Life is on.\"", label: "Marka Felsefesi" },
  ],
  // Precomputed rgb() decomposition of #0ea5e9 — kept distinct from
  // Oticon's green accent.
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
