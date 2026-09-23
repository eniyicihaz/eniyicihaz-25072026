// "İlgili İçerikler" internal-linking section for the /uygulama-ayar/
// kalip-alimi page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links to the real Kulak Arkası (BTE)
// and Kulak İçi (ITE) product pages (devicesMega) — the two device
// families this custom-mold process directly serves — plus the real
// Cihaz Uygulama and Kontrol Randevusu pages.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const kalipAlimiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kulak Arkası (BTE) İşitme Cihazları",
      description: "Özel kulak kalıbının en yaygın kullanıldığı cihaz ailesini inceleyin.",
      href: "/isitme-cihazlari/kulak-arkasi-bte",
    },
    {
      label: "Kulak İçi (ITE) İşitme Cihazları",
      description: "Kulak kalıbının cihazın kendisi olduğu kulak içi aileyi keşfedin.",
      href: "/isitme-cihazlari/kulak-ici-ite",
    },
    {
      label: "Cihaz Uygulama",
      description: "Kalıbınız hazır olduktan sonraki uygulama randevusunu tanıyın.",
      href: "/uygulama-ayar/cihaz-uygulama",
    },
    {
      label: "Kontrol Randevusu",
      description: "Kalıbınızın uzun vadeli uyumunu takip eden kontrol randevuları hakkında bilgi edinin.",
      href: "/uygulama-ayar/kontrol-randevusu",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
