// Technology teaser grid for the Maico brand page (/markalar/maico).
// Renders through the shared BrandPageTechnology component. MAICO'nun
// işitme cihazlarına özgü, tescilli bir teknoloji ismi bu proje
// kapsamında bağımsız olarak doğrulanamadığından, bu bölüm markanın
// doğrulanmış kurumsal mirasının ve ürün hattının somut unsurlarına
// odaklanır — uydurma bir teknoloji iddiası yer almaz.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const maicoTechnology: BrandPageTechnologyContent = {
  badge: "MAICO'NUN GÜÇLÜ YANLARI",
  heading: "MAICO'yu Farklı Kılan Unsurlar",
  intro: "MAICO'nun işitme cihazı sunumunun dayandığı temel unsurlar.",
  items: [
    {
      label: "1937",
      title: "Odyometre Mirası",
      description: "\"Audiometer\" terimini literatüre kazandıran, ölçüm biliminde öncü bir geçmiş.",
    },
    {
      label: "DEMANT",
      title: "Demant Grubu Mühendisliği",
      description: "Oticon ve Bernafon ile aynı global grubun mühendislik altyapısından yararlanır.",
    },
    {
      label: "BT",
      title: "Bluetooth Bağlantısı",
      description: "Akıllı telefonlarla kablosuz bağlantı kurabilen model seçenekleri sunar.",
    },
    {
      label: "BTE",
      title: "Kulak Arkası Seçenekler",
      description: "Farklı işitme kaybı derecelerine uygun kulak arkası (BTE) modeller sunar.",
    },
    {
      label: "ITE",
      title: "Kulak İçi Seçenekler",
      description: "Kulak kanalına özel üretilen, kulak içi yerleşimli model seçenekleri sunar.",
    },
    {
      label: "DE",
      title: "Berlin Mühendisliği",
      description: "MAICO Diagnostics GmbH, 2005'ten bu yana Berlin merkezli olarak faaliyet gösterir.",
    },
  ],
  // Precomputed rgb() decomposition of #10233F.
  accentColor: "#10233F",
  accentColorBadgeBg: "rgb(16 35 63 / 0.08)",
  accentColorBadgeBorder: "rgb(16 35 63 / 0.35)",
  accentColorBadgeText: "#0A1830",
  accentColorHoverBorder: "rgb(16 35 63 / 0.5)",
};
