// "Uzun Ömürlü Kullanım İçin Sunduğumuz Destek" teaser grid for the
// /neden-orijinal/uzun-omurlu-cihazlar page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped
// to the concrete support services Avrasya İşitme provides to extend
// device lifespan instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const uzunOmurluCihazlarUseCases: BrandPageTechnologyContent = {
  badge: "ÖNE ÇIKAN GÜVENCELER",
  heading: "Uzun Ömürlü Kullanım İçin Sunduğumuz Destek",
  intro: "Cihazınızın ömrünü uzatmaya yönelik sunduğumuz somut hizmetlere daha yakından bakalım.",
  items: [
    {
      label: "DÜZENLİ BAKIM",
      title: "Periyodik Bakım ve Kontrol Hizmeti",
      description: "Cihazınızın performansını korumak için düzenli bakım ve kontrol hizmeti sunuyoruz.",
    },
    {
      label: "YEDEK PARÇA",
      title: "Orijinal Yedek Parça Temini",
      description: "İhtiyaç halinde orijinal yedek parçaları hızlı bir şekilde temin edebiliyoruz.",
    },
    {
      label: "TEKNİK SERVİS",
      title: "Yetkili Teknik Servis Desteği",
      description: "Arıza durumunda yetkili teknik servis desteği sağlıyoruz.",
    },
    {
      label: "YAZILIM GÜNCELLEMESİ",
      title: "Güncel Yazılım Desteği",
      description: "Cihazınızın güncel yazılım sürümlerine erişimini sağlıyoruz.",
    },
    {
      label: "KULLANIM DANIŞMANLIĞI",
      title: "Doğru Kullanım İçin Danışmanlık",
      description: "Cihazınızın ömrünü uzatacak doğru kullanım alışkanlıkları konusunda bilgilendirme sunuyoruz.",
    },
    {
      label: "GARANTİ TAKİBİ",
      title: "Garanti Süreci Takibi",
      description: "Cihazınızın garanti süresi ve kapsamını sizin adınıza takip ediyoruz.",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorHoverBorder: "rgb(5 150 105 / 0.5)",
};
