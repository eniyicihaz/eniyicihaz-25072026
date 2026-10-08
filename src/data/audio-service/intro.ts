// Brand story for the Audio Service brand page (/markalar/audio-service).
// Renders through the shared BrandPageIntro component. Founding details
// and WS Audiology group affiliation are general, well-known corporate
// facts, flagged for a final human check before publishing.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const audioServiceIntro: BrandPageIntroContent = {
  badge: "AUDIO SERVICE MARKASI",
  heading: "Audio Service Hakkında",
  paragraphs: [
    "Audio Service, 1977 yılında Horst Peter Hühne tarafından, Amerika'da gördüğü kulak içi (ITE) işitme sistemlerinin faydalarını Almanya'ya taşımak amacıyla, Löhne'de kuruldu.",
    "Marka, kuruluşundan bu yana kulak içi (ITE) işitme cihazlarına odaklanan, Herford merkezli bir üretici olarak bilinir.",
    "Audio Service, Mood, Quix ve Stiline gibi ürün ailelerinde kulak içi odaklı yaklaşımını sürdürür.",
  ],
  stats: [
    { value: "1977", label: "Kuruluş Yılı" },
    { value: "Löhne, Almanya", label: "Kökeni" },
    { value: "Merkezimizde", label: "Teknik Servis" },
    { value: "30+", label: "Ülkede Dağıtım" },
  ],
  // Precomputed rgb() decomposition of #1240A0.
  accentColor: "#1240A0",
  accentColorBadgeBg: "rgb(18 64 160 / 0.08)",
  accentColorBadgeBorder: "rgb(18 64 160 / 0.35)",
  accentColorBadgeText: "#0C2E7A",
};
