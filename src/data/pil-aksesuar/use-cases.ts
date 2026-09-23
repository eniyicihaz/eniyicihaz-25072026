// "Hangi Pil ve Aksesuar Seçenekleri Sunulur?" teaser grid for the
// /servis-bakim/pil-aksesuar page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique every
// prior series' use-cases.ts uses, here scoped to the concrete
// product categories available.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const pilAksesuarUseCases: BrandPageTechnologyContent = {
  badge: "HANGİ SEÇENEKLER SUNULUR",
  heading: "Hangi Pil ve Aksesuar Seçenekleri Sunulur?",
  intro: "Sunduğumuz pil ve aksesuar kategorilerine daha yakından bakalım.",
  items: [
    {
      label: "ÇİNKO-HAVA PİL",
      title: "Çinko-Hava Piller",
      description: "Farklı cihaz boyutlarına uygun tek kullanımlık çinko-hava piller sunulur.",
    },
    {
      label: "ŞARJLI SİSTEM",
      title: "Lityum-İyon Şarjlı Sistem",
      description: "Pil değiştirme ihtiyacını ortadan kaldıran yeniden şarj edilebilir sistemler sunulur.",
    },
    {
      label: "TAŞINABİLİR ŞARJ",
      title: "Taşınabilir Şarj Kutusu",
      description: "Seyahat sırasında cihazınızı şarj etmenizi sağlayan taşınabilir kutular sunulur.",
    },
    {
      label: "TUTUCU AKSESUAR",
      title: "Tutucu Klips ve Kordonlar",
      description: "Cihazınızın kaza sonucu düşmesini önlemeye yardımcı tutucu aksesuarlar sunulur.",
    },
    {
      label: "YEDEK PARÇA STOKU",
      title: "Yedek Kulak Ucu ve Filtre Stoku",
      description: "Sık kullanılan kulak ucu ve balmumu filtresi gibi parçalar stokta bulundurulur.",
    },
    {
      label: "SEYAHAT AKSESUARLARI",
      title: "Seyahat Dostu Aksesuarlar",
      description: "Kompakt saklama kutusu ve temizlik kiti gibi seyahate uygun aksesuarlar sunulur.",
    },
  ],
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
  accentColorHoverBorder: "rgb(202 138 4 / 0.5)",
};
