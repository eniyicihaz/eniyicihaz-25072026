// "İlgili İçerikler" internal-linking section for the /servis-bakim/
// onarim-takibi page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). This is the sixth and final page in
// the "Servis & Bakım" series (see header.data.ts's servicesMega third
// column), so every sibling in this column is now real — links to
// Teknik Servis and Garanti İşlemleri (the two processes this tracking
// experience serves) plus Kontrol Randevusu (Uygulama & Ayar) and the
// real SGK pillar page.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const onarimTakibiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Teknik Servis",
      description: "Bir arıza fark ederseniz, yerinde teşhis ve onarım sürecini keşfedin.",
      href: "/servis-bakim/teknik-servis",
    },
    {
      label: "Garanti İşlemleri",
      description: "Cihazınızın garanti kapsamı ve süreci hakkında detaylı bilgi edinin.",
      href: "/servis-bakim/garanti-islemleri",
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
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
