// "İlgili İçerikler" internal-linking section for the /servis-bakim/
// periyodik-bakim page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real Teknik Servis
// page (the natural next step if a real malfunction is found), the real
// Cihaz Temizliği, Pil & Aksesuar and SGK pillar pages.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const periyodikBakimRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Teknik Servis",
      description: "Bir arıza tespit ederseniz, yerinde teşhis ve onarım sürecini keşfedin.",
      href: "/servis-bakim/teknik-servis",
    },
    {
      label: "Cihaz Temizliği",
      description: "Günlük temizlik ve saklama önerileri hakkında bilgi edinin.",
      href: "/servis-bakim/cihaz-temizligi",
    },
    {
      label: "Pil & Aksesuar",
      description: "Pil, şarj ve aksesuar seçenekleri hakkında bilgi edinin.",
      href: "/servis-bakim/pil-aksesuar",
    },
    {
      label: "Kontrol Randevusu",
      description: "İşitme durumunuzu da kapsayan düzenli kontrol randevusunu keşfedin.",
      href: "/uygulama-ayar/kontrol-randevusu",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
};
