// Brand story for the Sonic brand page (/markalar/sonic). Renders
// through the shared BrandPageIntro component. Founding details and
// Demant Group affiliation are general, well-known corporate facts,
// flagged for a final human check before publishing.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const sonicIntro: BrandPageIntroContent = {
  badge: "SONIC MARKASI",
  heading: "Sonic Hakkında",
  paragraphs: [
    "Sonic, 1998 yılında Salt Lake City, Utah'ta kurulan, dijital işitme cihazı teknolojisinde erken dönemde öne çıkan bir Amerikan markasıdır.",
    "Marka, Oticon ve Bernafon'un da içinde bulunduğu Demant Grubu'na bağlıdır.",
    "Sonic'in en güncel Enchant ailesi, SoundDNA platformu üzerine kurulu olup, karmaşık ses ortamlarında konuşma anlaşılırlığını desteklemeyi hedefleyen bir yaklaşım sunar.",
  ],
  stats: [
    { value: "1998", label: "Kuruluş Yılı" },
    { value: "Salt Lake City, ABD", label: "Kökeni" },
    { value: "Demant Grubu", label: "Bağlı Olduğu Grup" },
    { value: "SoundDNA", label: "Öne Çıkan Platform" },
  ],
  // Precomputed rgb() decomposition of #3D4C59.
  accentColor: "#3D4C59",
  accentColorBadgeBg: "rgb(61 76 89 / 0.08)",
  accentColorBadgeBorder: "rgb(61 76 89 / 0.35)",
  accentColorBadgeText: "#2C3841",
};
