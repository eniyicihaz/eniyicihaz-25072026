// "İlgili İçerikler" internal-linking section for the /servis-bakim/
// teknik-servis page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links to the real Kontrol Randevusu
// page (Uygulama & Ayar) — the natural first stop for performance or
// ayar complaints that may not actually be a hardware fault — and the
// real SGK pillar page, the real Periyodik Bakım page, the real Garanti
// İşlemleri page and the real Onarım Takibi page — every "Servis &
// Bakım" sibling is now real.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const teknikServisRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kontrol Randevusu",
      description: "Fiziksel bir arıza değilse, önce düzenli kontrol randevusunu değerlendirin.",
      href: "/uygulama-ayar/kontrol-randevusu",
    },
    {
      label: "Periyodik Bakım",
      description: "Cihazınızın rutin fiziksel bakımı ve temizliği hakkında bilgi edinin.",
      href: "/servis-bakim/periyodik-bakim",
    },
    {
      label: "Garanti İşlemleri",
      description: "Cihazınızın garanti kapsamı ve süreci hakkında detaylı bilgi edinin.",
      href: "/servis-bakim/garanti-islemleri",
    },
    {
      label: "Onarım Takibi",
      description: "Onarıma gönderilen cihazınızın sürecini nasıl takip edeceğinizi öğrenin.",
      href: "/servis-bakim/onarim-takibi",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
