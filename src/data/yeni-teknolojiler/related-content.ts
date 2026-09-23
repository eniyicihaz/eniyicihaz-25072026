// "İlgili İçerikler" internal-linking section for the
// /blog/yeni-teknolojiler page (Hub-and-Spoke). Renders through the
// shared BrandPageRelatedContent component — its second use on this
// page (the first is recommended-brands.ts). Links to the real
// dedicated /teknolojiler/* pages this showcase page deliberately
// doesn't duplicate, plus Cihaz Seçim Rehberi and Markalar.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const yeniTeknolojilerRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Yapay Zeka Destekli Cihazlar",
      description: "Yapay zeka destekli ses işleme teknolojisini yakından tanıyın.",
      href: "/teknolojiler/yapay-zeka-destekli",
    },
    {
      label: "Kablosuz Bağlantı Özellikleri",
      description: "Cihazınızı telefonunuzla ve diğer cihazlarla nasıl bağlayacağınızı öğrenin.",
      href: "/teknolojiler/kablosuz-baglanti",
    },
    {
      label: "Gürültü Engelleme Teknolojisi",
      description: "Kalabalık ortamlarda konuşmayı ön plana çıkaran teknolojiyi inceleyin.",
      href: "/teknolojiler/gurultu-engelleme",
    },
    {
      label: "Cihaz Seçim Rehberi",
      description: "Size uygun teknolojiyi seçerken nelere dikkat etmeniz gerektiğini öğrenin.",
      href: "/rehberler/cihaz-secim-rehberi",
    },
    {
      label: "İşitme Cihazı Markaları",
      description: "Güncel teknolojileri sunan markaları tek sayfada inceleyin.",
      href: "/markalar",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
