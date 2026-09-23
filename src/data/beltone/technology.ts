// Technology teaser grid for the Beltone brand page (/markalar/beltone).
// Renders through the shared BrandPageTechnology component. "Envision",
// "Commence", "Serene" and "Boost Max S" are real, current Beltone
// product family names — verified via beltone.com and independent
// hearing-aid review sources (2025).

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const beltoneTechnology: BrandPageTechnologyContent = {
  badge: "BELTONE TEKNOLOJİLERİ",
  heading: "Beltone'u Farklı Kılan Teknolojiler",
  intro: "Beltone'un işitme cihazlarında kullandığı temel teknoloji yaklaşımları.",
  items: [
    {
      label: "AI",
      title: "Envision DNN İşleme",
      description: "Ortamı sürekli izleyen ve değişen ses ortamlarına otomatik uyum sağlayan yapay zekâ destekli işleme.",
    },
    {
      label: "AURACAST",
      title: "Bluetooth LE Audio / Auracast",
      description: "Boost Max S ile desteklenen, yayın sesine doğrudan bağlanmayı sağlayan güncel bağlantı standardı.",
    },
    {
      label: "POWER",
      title: "Süper Güç Aileleri",
      description: "İleri-derin işitme kayıpları için değerlendirilebilecek, geniş güç aralıklı modeller sunar.",
    },
    {
      label: "VALUE",
      title: "Commence Serisi",
      description: "Güncel teknolojiyi daha erişilebilir bir fiyat noktasında sunan aile.",
    },
    {
      label: "RANGE",
      title: "Serene Serisi",
      description: "Farklı yerleşim ve işitme kaybı derecelerini kapsayan geniş bir ürün ailesi.",
    },
    {
      label: "1940",
      title: "Amerikan Mirası",
      description: "1940'tan bu yana süregelen, sektörün en köklü Amerikan markalarından biri.",
    },
  ],
  // Precomputed rgb() decomposition of #1B3864.
  accentColor: "#1B3864",
  accentColorBadgeBg: "rgb(27 56 100 / 0.08)",
  accentColorBadgeBorder: "rgb(27 56 100 / 0.35)",
  accentColorBadgeText: "#12274A",
  accentColorHoverBorder: "rgb(27 56 100 / 0.5)",
};
