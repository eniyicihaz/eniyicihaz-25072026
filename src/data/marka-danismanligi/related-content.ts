// İlgili İçerikler — Marka Danışmanlığı, plan §J. Renders through the
// existing BrandPageRelatedContent (unchanged). Brief §9'daki "destek
// ekosistemi" zincirinin bu sayfadan çıkan ucu.
import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const markaDanismanligiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Orijinallik Garantisi",
      description: "İşitme cihazınızın orijinal olduğunu nasıl anlayabileceğinizi öğrenin.",
      href: "/neden-orijinal/guvenilir-teknoloji",
    },
    {
      label: "Yetkili Servis",
      description: "Markaların yetkili servis ağının nasıl bir güvence sağladığını tanıyın.",
      href: "/neden-orijinal/yaygin-servis-agi",
    },
    {
      label: "Aksesuar & Yedek",
      description: "Cihazınızı tamamlayan orijinal aksesuar ve yedek parçaları inceleyin.",
      href: "/neden-orijinal/orijinal-aksesuar",
    },
    {
      label: "Teknik Servis",
      description: "Kendi teknik servisimizin yerinde teşhis ve onarım sürecini tanıyın.",
      href: "/servis-bakim/teknik-servis",
    },
    {
      label: "Kişiye Özel Ayar",
      description: "Seçtiğiniz cihazın kişiye özel nasıl ayarlandığını öğrenin.",
      href: "/uygulama-ayar/kisiye-ozel-ayar",
    },
    {
      label: "Cihaz Deneme",
      description: "Değerlendirdiğiniz markayı satın almadan önce deneyin.",
      href: "/uygulama-ayar/cihaz-deneme",
    },
    {
      label: "Ücretsiz İşitme Testi",
      description: "Marka danışmanlığından önce Darıca'daki merkezimizde ücretsiz işitme testinizi yaptırın.",
      href: "/degerlendirme/ucretsiz-isitme-testi",
    },
    {
      label: "Markalar",
      description: "Çalıştığımız tüm markaları ve modelleri inceleyin.",
      href: "/markalar",
    },
    {
      label: "İletişim",
      description: "Sorularınız için bize ulaşın veya randevu talebinde bulunun.",
      href: "/iletisim",
    },
  ],
  accentColor: "#b45309",
  accentColorBadgeBg: "rgb(180 83 9 / 0.08)",
  accentColorBadgeBorder: "rgb(180 83 9 / 0.35)",
  accentColorBadgeText: "#92400e",
};
