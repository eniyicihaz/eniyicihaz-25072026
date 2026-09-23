// Brand story for the Unitron brand page (/markalar/unitron). Renders
// through the shared BrandPageIntro component. Founding details and
// Sonova Group affiliation are general, well-known corporate facts,
// flagged for a final human check before publishing.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const unitronIntro: BrandPageIntroContent = {
  badge: "UNITRON MARKASI",
  heading: "Unitron Hakkında",
  paragraphs: [
    "Unitron'un hikâyesi, 1960'ların başında Newfoundland, Kanada'da, Alman kökenli Fred Stork, Rolf Strothmann ve Rolf Dohmer tarafından kurulan Universal Electronics ile başladı.",
    "1964'te Unitron Industries adıyla, güçlü bir Alman topluluğuna sahip Kitchener, Ontario'ya (Waterloo bölgesi) taşınan marka, bugün Phonak ile aynı çatı olan Sonova Grubu'na bağlıdır.",
    "Unitron, AutoFocus 360'ın dört mikrofonlu binaural ağı ve Sonova PRISM çipi tabanlı Blu platformuyla, konuşmanın geldiği yönü belirlemeye yardımcı olan bir yaklaşım sunar.",
  ],
  stats: [
    { value: "1964", label: "Kitchener, Ontario'ya Taşınma Yılı" },
    { value: "Kanada", label: "Kökeni" },
    { value: "Sonova Grubu", label: "Bağlı Olduğu Grup" },
    { value: "AutoFocus 360", label: "Öne Çıkan Teknoloji" },
  ],
  // Precomputed rgb() decomposition of #1C4C87.
  accentColor: "#1C4C87",
  accentColorBadgeBg: "rgb(28 76 135 / 0.08)",
  accentColorBadgeBorder: "rgb(28 76 135 / 0.35)",
  accentColorBadgeText: "#133A6B",
};
