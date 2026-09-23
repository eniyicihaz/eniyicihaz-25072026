// Brand story for the Vista brand page (/markalar/vista). Renders
// through the shared BrandPageIntro component. Sonova Group affiliation
// and Soundsuite OS technology are general, well-known corporate facts,
// flagged for a final human check before publishing.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const vistaIntro: BrandPageIntroContent = {
  badge: "VISTA MARKASI",
  heading: "Vista Hakkında",
  paragraphs: [
    "Vista, dünyanın en büyük işitme cihazı üreticisi olan İsviçre merkezli Sonova Grubu'na (Phonak ve Unitron ile aynı çatı) bağlı bir markadır.",
    "Marka, Sonova'nın Soundsuite OS teknolojisini, Vista V ve Vista B gibi kademelerle daha erişilebilir bir fiyat noktasında sunmayı hedefler.",
    "Vista, Bluetooth'lu, kulak arkası ve kulak içi (görünmez) gibi farklı yerleşim seçenekleriyle geniş bir kullanıcı kitlesine hitap eder.",
  ],
  stats: [
    { value: "Sonova", label: "Bağlı Olduğu Grup" },
    { value: "İsviçre", label: "Grup Kökeni" },
    { value: "Soundsuite OS", label: "Öne Çıkan Teknoloji" },
    { value: "Vista V / B", label: "Öne Çıkan Kademeler" },
  ],
  // Precomputed rgb() decomposition of #E85D0A.
  accentColor: "#E85D0A",
  accentColorBadgeBg: "rgb(232 93 10 / 0.08)",
  accentColorBadgeBorder: "rgb(232 93 10 / 0.35)",
  accentColorBadgeText: "#B94708",
};
