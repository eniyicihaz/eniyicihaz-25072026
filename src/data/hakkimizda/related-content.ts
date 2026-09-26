// İlgili Sayfalar — Hakkımızda. Renders through the existing
// BrandPageRelatedContent. Plan §12'de listelenen gerçek iç linkler
// (Ücretsiz İşitme Testi, Cihaz Deneme, Kişiye Özel Ayar, Teknik Servis,
// SGK, İletişim) — hepsi projede doğrulanmış gerçek sayfalar.
import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const hakkimizdaRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ SAYFALAR",
  heading: "Süreç Hakkında Daha Fazla Bilgi Alın",
  links: [
    {
      label: "Ücretsiz İşitme Testi",
      description: "Merkezimizde ücretsiz işitme değerlendirmesi yaptırabilirsiniz.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      label: "Cihaz Deneme",
      description: "Karar vermeden önce cihazı merkezimizde deneyebilirsiniz.",
      href: "/uygulama-ayar/cihaz-deneme",
    },
    {
      label: "Kişiye Özel Ayar",
      description: "Cihazınızın kişiye özel ayarı hakkında detaylı bilgi.",
      href: "/uygulama-ayar/kisiye-ozel-ayar",
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
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
};
