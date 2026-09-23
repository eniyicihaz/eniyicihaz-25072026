// "İlgili İçerikler" internal-linking section for the /servis-bakim/
// cihaz-temizligi page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real Periyodik
// Bakım, Teknik Servis and Pil & Aksesuar pages (natural siblings this
// daily routine connects to) and the real SGK pillar page.

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const cihazTemizligiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Periyodik Bakım",
      description: "Aşınan parçaların profesyonelce yenilendiği bakım randevusunu keşfedin.",
      href: "/servis-bakim/periyodik-bakim",
    },
    {
      label: "Teknik Servis",
      description: "Bir arıza fark ederseniz, yerinde teşhis ve onarım sürecini keşfedin.",
      href: "/servis-bakim/teknik-servis",
    },
    {
      label: "Pil & Aksesuar",
      description: "Pil, şarj ve saklama aksesuarları hakkında bilgi edinin.",
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
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0284c7",
};
