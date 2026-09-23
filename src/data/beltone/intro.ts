// Brand story for the Beltone brand page (/markalar/beltone). Renders
// through the shared BrandPageIntro component. Founding details and GN
// Group affiliation are general, well-known corporate facts, flagged for
// a final human check before publishing.

import type { BrandPageIntroContent } from "../../components/brand-page/BrandPageIntro/BrandPageIntro.astro";

export const beltoneIntro: BrandPageIntroContent = {
  badge: "BELTONE MARKASI",
  heading: "Beltone Hakkında",
  paragraphs: [
    "Beltone, 1940 yılında Sam ve Faye Posen tarafından Chicago, Illinois'te kurulan, sektörün en köklü Amerikan işitme cihazı markalarından biridir.",
    "Marka, ilk yılında Beltone Model H'yi tanıttı ve 2025 yılında 85. kuruluş yıl dönümünü kutladı.",
    "2000 yılından bu yana GN Grubu'na (ReSound ve Jabra ile aynı çatı) bağlı olan Beltone, Şubat 2025'te tanıttığı Envision ailesiyle yapay zekâ destekli DNN ses işlemeyi sunar.",
  ],
  stats: [
    { value: "1940", label: "Kuruluş Yılı" },
    { value: "Chicago, ABD", label: "Kökeni" },
    { value: "GN Grubu", label: "Bağlı Olduğu Grup (2000'den bu yana)" },
    { value: "85 Yıl", label: "Marka Mirası (2025)" },
  ],
  // Precomputed rgb() decomposition of #1B3864.
  accentColor: "#1B3864",
  accentColorBadgeBg: "rgb(27 56 100 / 0.08)",
  accentColorBadgeBorder: "rgb(27 56 100 / 0.35)",
  accentColorBadgeText: "#12274A",
};
