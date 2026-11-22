// "Yenileme Nedenleri" teaser grid for the /sgk/yenileme-hakki page.
// Renders through the shared BrandPageTechnology component (6-card
// grid), same technique every prior series' use-cases.ts uses, here
// scoped to when renewal is possible: the 5-year period (MEDULA record
// date, each ear separately) and the SUT's early-renewal exceptions.
// "Hearing loss progression" and "technology/physical age" are NOT
// reasons for early renewal and were removed (see hero.ts).

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const yenilemeHakkiUseCases: BrandPageTechnologyContent = {
  badge: "YENİLEME ZAMANI",
  heading: "Yenileme Hangi Durumlarda Mümkündür?",
  intro: "SGK kapsamında yeni cihaz, 5 yıllık sürenin dolmasıyla veya SUT'taki istisnalardan biriyle mümkündür.",
  items: [
    {
      label: "STANDART SÜRE",
      title: "5 Yıllık Sürenin Dolması",
      description: "Önceki cihazın MEDULA kayıt tarihinden 5 yıl geçtiğinde, her kulak için ayrı ayrı, yeni bir cihaz için SGK desteğinden yararlanabilirsiniz.",
    },
    {
      label: "ÇOCUKLARDA GELİŞİM",
      title: "Çocuğun Büyümesi Nedeniyle Cihazın Kullanılamaması",
      description: "Sağlık raporuyla belgelenirse, 5 yıllık süre dolmadan yenileme değerlendirilebilir.",
    },
    {
      label: "KUSURSUZ ARIZA",
      title: "Cihazın Kullanıcı Kusuru Olmadan Kullanılamaz Hâle Gelmesi",
      description: "Sağlık raporuyla belgelenir ve onarımı sağlanamazsa yenilenebilir; garanti içinde satışı yapan firma, garanti dışında SGK yeniler.",
    },
    {
      label: "İŞİTME KAYBININ İLERLEMESİ",
      title: "İşitme Kaybı İlerlediğinde",
      description: "Tek başına süre dolmadan yenileme sağlamaz; cihazınızın ayarlarını merkezimizde birlikte değerlendirebiliriz.",
    },
    {
      label: "KAYIP / ÇALINTI",
      title: "Cihazın Kaybolması veya Çalınması",
      description: "Süre dolana kadar yenisinin bedeli SGK tarafından karşılanmaz.",
    },
    {
      label: "İKİ KULAK",
      title: "Sağ ve Sol Kulak Ayrı Hesaplanır",
      description: "Kayıt tarihleri farklıysa her kulağın 5 yıllık süresi kendi tarihine göre dolar.",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorHoverBorder: "rgb(13 148 136 / 0.5)",
};
