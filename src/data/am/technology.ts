// Technology teaser grid for the A&M brand page (/markalar/am). Renders
// through the shared BrandPageTechnology component. A&M'e özgü, tescilli
// bir teknoloji ismi bağımsız olarak doğrulanamadığından, bu bölüm WS
// Audiology grup altyapısının somut, doğrulanmış unsurlarına odaklanır —
// üretici seviyesinde bir teknoloji iddiası uydurulmamıştır.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const amTechnology: BrandPageTechnologyContent = {
  badge: "A&M TEKNOLOJİ ALTYAPISI",
  heading: "A&M'i Destekleyen Grup Altyapısı",
  intro: "A&M'in XTM serisi, WS Audiology grubunun global üretim ve mühendislik altyapısından beslenir.",
  items: [
    {
      label: "POWER",
      title: "Geniş Güç Aralığı",
      description: "P4'ten P12'ye kadar farklı işitme kaybı derecelerine uygun güç seviyeleri sunar.",
    },
    {
      label: "CUSTOM",
      title: "Kişiye Özel Üretim (A4)",
      description: "Kulak yapınıza özel üretilen, kulak içi yerleşimli model seçeneği sunar.",
    },
    {
      label: "GROUP",
      title: "WS Audiology Altyapısı",
      description: "Signia, Widex ve Rexton ile aynı global grubun üretim standartlarından yararlanır.",
    },
    {
      label: "NOISE",
      title: "Gürültü Yönetimi",
      description: "Günlük dinleme ortamlarında rahatsız edici sesleri azaltmaya yardımcı olan yaklaşımlar sunar.",
    },
    {
      label: "FIT",
      title: "Geri Besleme Önleyici",
      description: "İstenmeyen ıslık seslerini azaltmaya yardımcı olan bir yaklaşım sunar.",
    },
    {
      label: "VALUE",
      title: "Erişilebilir Fiyat Noktası",
      description: "Grup teknolojisini daha uygun bir fiyat seviyesinde sunmayı hedefler.",
    },
  ],
  // Precomputed rgb() decomposition of #F3701A.
  accentColor: "#F3701A",
  accentColorBadgeBg: "rgb(243 112 26 / 0.08)",
  accentColorBadgeBorder: "rgb(243 112 26 / 0.35)",
  accentColorBadgeText: "#C25710",
  accentColorHoverBorder: "rgb(243 112 26 / 0.5)",
};
