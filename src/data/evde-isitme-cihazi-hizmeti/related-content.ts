// İlgili İçerikler — Evde İşitme Cihazı Hizmeti. Renders through the
// existing BrandPageRelatedContent. Tüm href'ler projede doğrulanmış
// gerçek sayfalara ait.
import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const evdeHizmetRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Sürecin Diğer Aşamaları Hakkında Bilgi Alın",
  links: [
    {
      label: "Ücretsiz İşitme Testi",
      description: "Merkezimizde de ücretsiz işitme değerlendirmesi yaptırabilirsiniz.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      label: "Cihaz Deneme",
      description: "Merkezimizde daha geniş bir model yelpazesini deneyebilirsiniz.",
      href: "/uygulama-ayar/cihaz-deneme",
    },
    {
      label: "Kişiye Özel Ayar",
      description: "Cihazınızın kişiye özel ayarı hakkında detaylı bilgi.",
      href: "/uygulama-ayar/kisiye-ozel-ayar",
    },
    {
      label: "Cihaz Uygulama",
      description: "Cihaz uygulama sürecinin nasıl işlediğini öğrenin.",
      href: "/uygulama-ayar/cihaz-uygulama",
    },
    {
      label: "Teknik Servis",
      description: "Cihazınızda teknik bir sorun varsa servis sürecini inceleyin.",
      href: "/servis-bakim/teknik-servis",
    },
    {
      label: "SGK İşitme Cihazı Ödemesi",
      description: "SGK katkı payı ve rapor süreci hakkında bilgi alın.",
      href: "/sgk-isitme-cihazi-odemesi",
    },
    {
      label: "İletişim",
      description: "Merkezimizin adresi, telefonu ve çalışma saatleri.",
      href: "/iletisim",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
