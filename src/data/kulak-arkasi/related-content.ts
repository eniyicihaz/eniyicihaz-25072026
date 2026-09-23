// "İlgili İçerikler" internal-linking section for the /isitme-cihazlari/
// kulak-arkasi-bte page (Hub-and-Spoke). Renders through the shared
// BrandPageRelatedContent component — its second use on this page (the
// first is recommended-brands.ts, section 9). Four real, already-built
// destinations (Markalar hub, SGK pillar page, the Kulak İçi (ITE) sibling
// page, İletişim — the last one doubles as the page's link to the
// Darıca/Gebze/Çayırova service area, since no dedicated city pages exist
// yet) plus one sibling product page from the same "İşitme Cihazı
// Çeşitleri" series (see header.data.ts's devicesMega) that is planned
// but not yet built. That one stays "#", mirroring header.data.ts's own
// documented policy: "#" until the real destination page exists
// (isActive.ts already treats "#" as never-current, so this is safe to
// leave as-is rather than inventing pages that don't exist yet).

import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const kulakArkasiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Tüm İşitme Cihazı Markaları",
      description: "Çalıştığımız markaları ve BTE model ailelerini keşfedin.",
      href: "/markalar",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi ve Katkı Payı Rehberi",
      description: "SGK'nın işitme cihazı desteğini ve uygunluk kriterlerini öğrenin.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
    {
      label: "Kulak İçi (ITE) İşitme Cihazları",
      description: "BTE'ye alternatif, kulak kanalı içine yerleşen cihaz tipini inceleyin.",
      href: "/isitme-cihazlari/kulak-ici-ite",
    },
    {
      label: "Şarj Edilebilir İşitme Cihazları",
      description: "Pil değiştirmeden gün boyu kullanım sunan şarjlı modelleri keşfedin.",
      href: "/isitme-cihazlari/sarj-edilebilir",
    },
    {
      label: "Darıca, Gebze ve Çayırova'da Hizmetinizdeyiz",
      description: "Merkezimize ulaşım bilgileri ve randevu için bizimle iletişime geçin.",
      href: "/iletisim",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
