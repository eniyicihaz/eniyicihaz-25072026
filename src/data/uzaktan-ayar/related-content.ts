// "İlgili İçerikler" internal-linking section for the /uygulama-ayar/
// uzaktan-ayar page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links to the real Uzaktan Kontrol
// Özellikleri page (devicesMega) — the full technology explanation this
// service page deliberately doesn't repeat — and the real Kişiye Özel
// Programlama page (the in-person counterpart for changes beyond this
// service's scope) and the real Kontrol Randevusu page.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const uzaktanAyarRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Uzaktan Kontrol Özellikleri",
      description: "Uzaktan ayarın dayandığı teknolojiyi ve tüm özelliklerini yakından tanıyın.",
      href: "/teknolojiler/uzaktan-kontrol",
    },
    {
      label: "Kişiye Özel Programlama",
      description: "Kapsamlı ince ayar ihtiyaçları için yüz yüze programlama sürecini keşfedin.",
      href: "/uygulama-ayar/kisiye-ozel-programlama",
    },
    {
      label: "Cihaz Uygulama",
      description: "İlk uygulama randevusunun nasıl işlediğini yakından tanıyın.",
      href: "/uygulama-ayar/cihaz-uygulama",
    },
    {
      label: "Kontrol Randevusu",
      description: "Düzenli kontrol randevularının kapsamı hakkında bilgi edinin.",
      href: "/uygulama-ayar/kontrol-randevusu",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
