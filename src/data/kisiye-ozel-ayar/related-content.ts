// İlgili İçerikler — Kişiye Özel Ayar, plan §3/§1. Renders through the
// existing BrandPageRelatedContent (unchanged). Kişiye Özel Programlama'ya
// tek yönlü çapraz link burada veriliyor (bkz. plan Context) — o sayfaya
// hiçbir dosya değişikliği yapılmadı.
import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const kisiyeOzelAyarRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Kişiye Özel Programlama",
      description: "Cihazınız zaten var ve geri bildirime dayalı ince ayar mı istiyorsunuz? Devam eden programlama sürecini inceleyin.",
      href: "/uygulama-ayar/kisiye-ozel-programlama",
    },
    {
      label: "Ücretsiz İşitme Testi",
      description: "Ayar sürecinden önce Darıca'daki merkezimizde ücretsiz işitme testinizi yaptırın.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      label: "Cihaz Deneme",
      description: "Cihazı satın almadan önce günlük yaşamınızda deneme imkanını tanıyın.",
      href: "/uygulama-ayar/cihaz-deneme",
    },
    {
      label: "İşitme Cihazları",
      description: "Sunduğumuz işitme cihazı kategorilerine ve çözümlere genel bir bakış.",
      href: "/isitme-cihazlari",
    },
    {
      label: "Markalar",
      description: "Çalıştığımız markaları ve modelleri inceleyin.",
      href: "/markalar",
    },
    {
      label: "İletişim",
      description: "Sorularınız için bize ulaşın veya randevu talebinde bulunun.",
      href: "/iletisim",
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
