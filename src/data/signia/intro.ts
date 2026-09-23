// Brand story for the Signia brand page (/markalar/signia) — combines
// Oticon's separate About+Heritage sections into one (see SIGNIA MASTER
// BLUEPRINT §9.3). Renders through the shared BrandPageIntro component.
// WS Audiology affiliation and the 2015-2016 rebrand year are general,
// well-known corporate facts, flagged in the blueprint for a final human
// check before publishing.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const signiaIntro: BrandPageIntroContent = {
  badge: "SIGNIA MARKASI",
  heading: "Signia İşitme Cihazları Hakkında",
  paragraphs: [
    "Signia, Almanya kökenli WS Audiology (WSA) grubuna bağlı, global ölçekte tanınan bir işitme cihazı markasıdır.",
    "Marka, \"Life sounds brilliant.\" felsefesiyle, işitme cihazlarını yapay zekâ destekli, kişiye özel bir konuşma deneyimi sunan bir teknoloji ürünü olarak konumlandırır.",
    "Styletto, Pure, Insio, Silk, Active ve Motion gibi ürün ailelerinde bu yaklaşım, kullanıcının yaşam tarzına ve tasarım tercihine göre şekillenir.",
  ],
  stats: [
    { value: "2015-2016", label: "Signia Markası Olarak Yeniden Doğuş" },
    { value: "Almanya", label: "Kökeni" },
    { value: "WS Audiology", label: "Bağlı Olduğu Grup" },
    { value: "\"Life sounds brilliant.\"", label: "Marka Felsefesi" },
  ],
  // Signia brand theme revision (2026-07): bordo (#B21F4B), replacing the
  // previous generic violet — see hero.ts for the full rationale.
  accentColor: "#B21F4B",
  accentColorBadgeBg: "rgb(178 31 75 / 0.12)",
  accentColorBadgeBorder: "rgb(178 31 75 / 0.35)",
  accentColorBadgeText: "#B21F4B",
};
