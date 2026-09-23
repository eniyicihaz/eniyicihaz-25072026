// "Yenileme Nedenleri" teaser grid for the /sgk/yenileme-hakki page.
// Renders through the shared BrandPageTechnology component (6-card
// grid), same technique every prior series' use-cases.ts uses, here
// scoped to the circumstances that can justify standard or early
// renewal — no specific time figures, consistent with this page's
// accuracy discipline.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const yenilemeHakkiUseCases: BrandPageTechnologyContent = {
  badge: "YENİLEME NEDENLERİ",
  heading: "Yenileme Hakkını Doğuran Durumlar",
  intro: "Cihazınızı yenilemenizi gerektirebilecek başlıca durumlara daha yakından bakalım.",
  items: [
    {
      label: "STANDART SÜRE",
      title: "Yenileme Süresinin Dolması",
      description: "Belirli bir kullanım süresi sonunda, yeni bir cihaz için tekrar SGK desteğinden yararlanabilirsiniz.",
    },
    {
      label: "ONARILAMAZ ARIZA",
      title: "Cihazın Onarılamaz Şekilde Arızalanması",
      description: "Cihazınız teknik olarak onarılamıyorsa, erken yenileme talebinde bulunulabilir.",
    },
    {
      label: "İŞİTME KAYBININ İLERLEMESİ",
      title: "İşitme Kaybının Belirgin Şekilde İlerlemesi",
      description: "Mevcut cihaz artık ihtiyacınızı karşılamıyorsa, güncel bir değerlendirmeyle yenileme gündeme gelebilir.",
    },
    {
      label: "ÇOCUKLARDA GELİŞİM",
      title: "Çocuklarda Büyüme ve Gelişim",
      description: "Çocuklarda fiziksel büyüme ve işitsel gelişim, cihaz ihtiyacını zamanla değiştirebilir.",
    },
    {
      label: "TEKNOLOJİK GELİŞİM",
      title: "Cihaz Teknolojisinin Gelişmesi",
      description: "Yenileme hakkınız doğduğunda, güncel cihaz teknolojilerini değerlendirme imkânı bulursunuz.",
    },
    {
      label: "CİHAZIN ÖMRÜNÜ TAMAMLAMASI",
      title: "Cihazın Fiziksel Ömrünü Tamamlaması",
      description: "Uzun süreli kullanım sonucunda cihazın performansı zamanla azalabilir.",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorHoverBorder: "rgb(13 148 136 / 0.5)",
};
