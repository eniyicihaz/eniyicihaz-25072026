// "Orijinal Ürün Alırken Sunduğumuz Güvenceler" teaser grid for the
// /neden-orijinal/guvenilir-teknoloji page. Renders through the shared
// BrandPageTechnology component (6-card grid), same technique the BTE
// page's use-cases.ts uses for everyday-scenario coverage, here scoped
// to the concrete assurances Avrasya İşitme provides on every original
// sale instead.

import type { BrandPageTechnologyContent } from "../../components/brand-page/BrandPageTechnology/BrandPageTechnology.astro";

export const guvenilirTeknolojiUseCases: BrandPageTechnologyContent = {
  badge: "ÖNE ÇIKAN GÜVENCELER",
  heading: "Orijinal Ürün Alırken Sunduğumuz Güvenceler",
  intro: "Her satışta sunduğumuz somut güvencelere daha yakından bakalım.",
  items: [
    {
      label: "YETKİLİ SATIŞ",
      title: "Yetkili Distribütörlük Güvencesi",
      description: "Sunduğumuz tüm markalar için resmi yetkili satış yetkisine sahibiz.",
    },
    {
      label: "FATURALI SATIŞ",
      title: "Her Ürün Faturalı ve Belgeli Teslim Edilir",
      description: "Satın aldığınız her cihaz, fatura ve garanti belgesiyle birlikte teslim edilir.",
    },
    {
      label: "SERİ NUMARASI",
      title: "Doğrulanabilir Seri Numarası",
      description: "Her cihazın seri numarası, üretici sistemi üzerinden sorgulanabilir.",
    },
    {
      label: "YAZILIM GÜNCELLEMESİ",
      title: "Güncel Yazılım ve Firmware Erişimi",
      description: "Orijinal cihazlar, üreticinin resmi güncellemelerine kesintisiz erişebilir.",
    },
    {
      label: "TEKNİK SERVİS",
      title: "Yetkili Teknik Servis Desteği",
      description: "Arıza durumunda orijinal yedek parça ve yetkili servis desteği sunulur.",
    },
    {
      label: "DEĞİŞİM & İADE",
      title: "Güvenceli Değişim ve İade Süreci",
      description: "Sorunlu ürünlerde değişim ve iade süreçleri şeffaf bir şekilde yürütülür.",
    },
  ],
  accentColor: "#1d4ed8",
  accentColorBadgeBg: "rgb(29 78 216 / 0.08)",
  accentColorBadgeBorder: "rgb(29 78 216 / 0.35)",
  accentColorBadgeText: "#1e40af",
  accentColorHoverBorder: "rgb(29 78 216 / 0.5)",
};
