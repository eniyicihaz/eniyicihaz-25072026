// "İlgili İçerikler" internal-linking section for the /servis-bakim/
// pil-aksesuar page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts). Links back to the real Cihaz
// Temizliği and Periyodik Bakım pages (natural siblings this product
// page connects to) and the real Teknik Servis page (for professional
// rechargeable-battery replacement) and the real Garanti İşlemleri
// page; the sibling "Servis & Bakım" page not yet built (Onarım
// Takibi) stays "#", mirroring header.data.ts's own documented policy
// (isActive.ts already treats "#" as never-current).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const pilAksesuarRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Cihaz Temizliği",
      description: "Günlük temizlik ve doğru saklama önerileri hakkında bilgi edinin.",
      href: "/servis-bakim/cihaz-temizligi",
    },
    {
      label: "Periyodik Bakım",
      description: "Aşınan parçaların profesyonelce yenilendiği bakım randevusunu keşfedin.",
      href: "/servis-bakim/periyodik-bakim",
    },
    {
      label: "Teknik Servis",
      description: "Şarjlı pilinizde bir sorun fark ederseniz, teşhis ve onarım sürecini keşfedin.",
      href: "/servis-bakim/teknik-servis",
    },
    {
      label: "Garanti İşlemleri",
      description: "Cihazınızın garanti kapsamı ve süreci hakkında detaylı bilgi edinin.",
      href: "/servis-bakim/garanti-islemleri",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
  ],
  accentColor: "#ca8a04",
  accentColorBadgeBg: "rgb(202 138 4 / 0.08)",
  accentColorBadgeBorder: "rgb(202 138 4 / 0.35)",
  accentColorBadgeText: "#a16207",
};
