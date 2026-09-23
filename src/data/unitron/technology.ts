// Technology teaser grid for the Unitron brand page (/markalar/unitron).
// Renders through the shared BrandPageTechnology component. "AutoFocus
// 360", "Sonova PRISM", "Blu", "Moxi Vivante", "Stride" and "Smile" are
// real, documented Unitron technology/product names — verified via
// unitron.com and independent hearing-aid review sources.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const unitronTechnology: BrandPageTechnologyContent = {
  badge: "UNITRON TEKNOLOJİLERİ",
  heading: "Unitron'u Farklı Kılan Teknolojiler",
  intro: "Unitron'un işitme cihazlarında kullandığı temel teknoloji yaklaşımları.",
  items: [
    {
      label: "FOCUS",
      title: "AutoFocus 360",
      description: "Dört mikrofonlu binaural ağla konuşmanın geldiği yönü belirlemeye ve amplifikasyonu buna göre uyarlamaya yardımcı olur.",
    },
    {
      label: "PRISM",
      title: "Sonova PRISM Çipi",
      description: "İki aktif bağlantı ve sekiz cihaza kadar eşleştirmeyi destekleyen, geniş bellekli çip teknolojisi.",
    },
    {
      label: "SOFT",
      title: "Soft Speech Lift",
      description: "Kısık seslerdeki incelikleri güçlendirerek daha net ve rahat duyulmasına yardımcı olur.",
    },
    {
      label: "SMILE",
      title: "Smile Platformu (2025)",
      description: "Markanın en güncel ve en gelişmiş işitme cihazı platformu.",
    },
    {
      label: "NOISE",
      title: "Dinamik Gürültü Azaltma",
      description: "Rahatsız edici arka plan gürültüsünü azaltmaya yardımcı olan bir yaklaşım sunar.",
    },
    {
      label: "CA",
      title: "Kanada-Alman Mühendisliği",
      description: "1964'ten bu yana Kitchener, Ontario'da süregelen bir mühendislik geleneği.",
    },
  ],
  // Precomputed rgb() decomposition of #1C4C87.
  accentColor: "#1C4C87",
  accentColorBadgeBg: "rgb(28 76 135 / 0.08)",
  accentColorBadgeBorder: "rgb(28 76 135 / 0.35)",
  accentColorBadgeText: "#133A6B",
  accentColorHoverBorder: "rgb(28 76 135 / 0.5)",
};
