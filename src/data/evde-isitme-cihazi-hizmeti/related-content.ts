// Evde İşitme Cihazı Hizmeti — İlgili içerikler (Faz 2 P2): 7 linkten 4'e.
// Deneme, ayar ve uygulama linkleri evde yapılan işlem kapsamı
// doğrulanana kadar çıkarıldı.
import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const evdeHizmetRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "İlgili Sayfalar",
  links: [
    {
      label: "Ücretsiz İşitme Testi",
      description: "Merkezimizde ücretsiz işitme testi hakkında bilgi alın.",
      href: "/degerlendirme/ucretsiz-isitme-testi/",
    },
    {
      label: "Teknik Servis",
      description: "Cihazınızda teknik bir sorun varsa servis sürecini inceleyin.",
      href: "/servis-bakim/teknik-servis/",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi",
      description: "SGK katkı payı ve rapor süreci hakkında bilgi alın.",
      href: "/sgk-isitme-cihazi-odemesi/",
    },
    {
      label: "İletişim",
      description: "Merkezimizin adresi, telefonu ve çalışma saatleri.",
      href: "/iletisim/",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
