// Technology teaser grid for the Audifon brand page (/markalar/audifon).
// Renders through the shared BrandPageTechnology component. "Cosma Chip
// Technology", "rega", "sino" and "Sueno Pro" are real, documented
// Audifon product/technology names — verified via audifon.com.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const audifonTechnology: BrandPageTechnologyContent = {
  badge: "AUDIFON TEKNOLOJİLERİ",
  heading: "Audifon'u Farklı Kılan Teknolojiler",
  intro: "Audifon'un işitme cihazlarında kullandığı temel teknoloji yaklaşımları.",
  items: [
    {
      label: "CHIP",
      title: "Cosma Chip Technology",
      description: "Çok kanallı ses işleme ve modülasyon sağlayan, Audifon'un güncel nesil çip teknolojisi.",
    },
    {
      label: "TINNITUS",
      title: "Sueno Pro Tinnitus Çözümü",
      description: "Tinnitus'un yoğunluğuna ve niteliğine göre kişiselleştirilebilen bir maskeleme sesi sunar.",
    },
    {
      label: "SOUND",
      title: "10k HD Sound",
      description: "Rega ve sino serilerinde sunulan, yüksek çözünürlüklü ses işleme yaklaşımı.",
    },
    {
      label: "CHANNELS",
      title: "Çok Kanallı WDRC İşleme",
      description: "Rega serisinde 18, sino serisinde 9 kanala kadar geniş dinamik aralık sıkıştırması sunar.",
    },
    {
      label: "DE",
      title: "%100 Almanya Üretimi",
      description: "Ar-Ge'den seri üretime kadar Kölleda/Thüringen'de, Alman mühendisliğiyle geliştirilir.",
    },
    {
      label: "FAMILY",
      title: "Aile Şirketi Güvencesi",
      description: "Almanya'nın en büyük işitme akustiği aile işletmesi KIND-Grubu'na bağlıdır.",
    },
  ],
  // Precomputed rgb() decomposition of #E2001A.
  accentColor: "#E2001A",
  accentColorBadgeBg: "rgb(226 0 26 / 0.08)",
  accentColorBadgeBorder: "rgb(226 0 26 / 0.35)",
  accentColorBadgeText: "#B50015",
  accentColorHoverBorder: "rgb(226 0 26 / 0.5)",
};
