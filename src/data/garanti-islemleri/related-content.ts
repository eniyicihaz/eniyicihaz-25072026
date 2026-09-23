// "İlgili İçerikler" internal-linking section for the /servis-bakim/
// garanti-islemleri page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links to the real Kolay Değişim
// page (Neden Orijinal series) — the satisfaction-based counterpart
// this page's own comparison.ts distinguishes itself from — and the
// real Teknik Servis, Pil & Aksesuar and Onarım Takibi pages — every
// "Servis & Bakım" sibling is now real.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const garantiIslemleriRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kolay Değişim",
      description: "Memnuniyet veya ihtiyaç değişikliği kaynaklı değişim güvencemiz hakkında bilgi edinin.",
      href: "/neden-orijinal/kolay-degisim",
    },
    {
      label: "Teknik Servis",
      description: "Bir arıza fark ederseniz, yerinde teşhis ve onarım sürecini keşfedin.",
      href: "/servis-bakim/teknik-servis",
    },
    {
      label: "Pil & Aksesuar",
      description: "Pil, şarj ve aksesuar seçenekleri hakkında bilgi edinin.",
      href: "/servis-bakim/pil-aksesuar",
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
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
