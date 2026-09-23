// Brand story for the Philips Hearing brand page
// (/markalar/philips-hearing). Renders through the shared BrandPageIntro
// component. The Demant license agreement and Velox-S platform are
// general, well-known corporate facts, flagged for a final human check
// before publishing.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const philipsHearingIntro: BrandPageIntroContent = {
  badge: "PHILIPS HEARLINK MARKASI",
  heading: "Philips HearLink Hakkında",
  paragraphs: [
    "Philips HearLink, dünyaca tanınan tüketici elektroniği markası Philips ile işitme teknolojisi grubu Demant arasında yapılan bir lisans anlaşması kapsamında geliştirilir.",
    "Ürünler, Demant'ın Velox-S ve Velox platformları üzerinde üretilir; RIC, BTE, ITC, CIC ve IIC gibi geniş bir yerleşim yelpazesinde sunulur.",
    "HearLink ailesi, 50, 40 ve 30 olmak üzere anlaşılır bir kademelendirme ile, özellikle ilk kez işitme cihazı alacak kullanıcılar için net bir seçim sunmayı hedefler.",
  ],
  stats: [
    { value: "Demant", label: "Lisans Anlaşması Yapılan Grup" },
    { value: "Velox-S", label: "Öne Çıkan Platform" },
    { value: "50 / 40 / 30", label: "HearLink Kademeleri" },
    { value: "RIC / BTE / ITC / CIC / IIC", label: "Yerleşim Seçenekleri" },
  ],
  // Precomputed rgb() decomposition of #0B5FCE.
  accentColor: "#0B5FCE",
  accentColorBadgeBg: "rgb(11 95 206 / 0.08)",
  accentColorBadgeBorder: "rgb(11 95 206 / 0.35)",
  accentColorBadgeText: "#0848A3",
};
