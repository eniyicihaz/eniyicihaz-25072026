// Brand story for the Beltone brand page (/markalar/beltone). Renders
// through the shared BrandPageIntro component. Founding details and GN
// Group affiliation are general, well-known corporate facts, flagged for
// a final human check before publishing.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const beltoneIntro: BrandPageIntroContent = {
  badge: "BELTONE MARKASI",
  heading: "Beltone Hakkında",
  paragraphs: [
    "Beltone, 1940 yılında Sam ve Faye Posen tarafından Chicago, Illinois'te kurulan bir Amerikan işitme cihazı markasıdır.",
    "Marka, ilk yılında Beltone Model H'yi tanıttı ve 2025 yılında 85. kuruluş yıl dönümünü kutladı.",
    "Beltone, Şubat 2025'te tanıttığı Envision ailesiyle yapay zekâ destekli DNN ses işlemeyi sunar.",
  ],
  stats: [
    { value: "1940", label: "Kuruluş Yılı" },
    { value: "Chicago, ABD", label: "Kökeni" },
    { value: "Merkezimizde", label: "Teknik Servis" },
    { value: "85 Yıl", label: "Marka Mirası (2025)" },
  ],
  // Precomputed rgb() decomposition of #1B3864.
  accentColor: "#1B3864",
  accentColorBadgeBg: "rgb(27 56 100 / 0.08)",
  accentColorBadgeBorder: "rgb(27 56 100 / 0.35)",
  accentColorBadgeText: "#12274A",
};
