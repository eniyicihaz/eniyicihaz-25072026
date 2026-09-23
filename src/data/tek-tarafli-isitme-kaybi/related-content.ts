// "İlgili İçerikler" internal-linking section for the /ihtiyaciniza-gore/
// tek-tarafli-isitme-kaybi page (Hub-and-Spoke). Renders through the
// shared BrandPageRelatedContent component — its second use on this page
// (the first is recommended-brands.ts). Links back to the real Kablosuz
// Bağlantı Özellikleri page (the natural cross-reference from this
// page's Ecosystem section), the real BTE page, the real Çok İleri
// Derece İşitme Kaybı page and the real Yaşlılar İçin Cihazlar page,
// plus the real SGK pillar page.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const tekTarafliIsitmeKaybiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kablosuz Bağlantı Özellikleri",
      description: "CROS/BiCROS sistemlerinin dayandığı kablosuz aktarım teknolojisini daha yakından tanıyın.",
      href: "/teknolojiler/kablosuz-baglanti",
    },
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "CROS/BiCROS sistemlerinin en yaygın bulunduğu cihaz ailesini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Çok İleri Derece İşitme Kaybı",
      description: "Kötü duyan kulakta çok ileri derece kayıp olduğunda değerlendirilen yaklaşımları keşfedin.",
      href: "/ihtiyaciniza-gore/cok-ileri-derece-isitme-kaybi",
    },
    {
      label: "Yaşlılar İçin Cihazlar",
      description: "Yaşlı kullanıcılar için sıkça değerlendirilen cihaz özelliklerini yakından tanıyın.",
      href: "/ihtiyaciniza-gore/yaslilar-icin-cihazlar",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#52525b",
  accentColorBadgeBg: "rgb(82 82 91 / 0.08)",
  accentColorBadgeBorder: "rgb(82 82 91 / 0.35)",
  accentColorBadgeText: "#3f3f46",
};
