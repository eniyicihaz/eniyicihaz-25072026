// İlgili İçerikler — Marka Danışmanlığı, plan §J. Renders through the
// existing BrandPageRelatedContent (unchanged). Brief §9'daki "destek
// ekosistemi" zincirinin bu sayfadan çıkan ucu.
import type { BrandPageRelatedContentContent } from "../../components/brand-page/BrandPageRelatedContent/BrandPageRelatedContent.astro";

export const markaDanismanligiRelatedContent: BrandPageRelatedContentContent = {
  badge: "İLGİLİ İÇERİKLER",
  heading: "Devam Etmek İçin",
  links: [
    {
      label: "Cihaz Doğrulama",
      description: "İşitme cihazınızı satın alırken nelere dikkat edileceğini öğrenin.",
      href: "/neden-orijinal/guvenilir-teknoloji/",
    },
    {
      label: "Üretici Yetkili Servis Desteği",
      description: "Sattığımız 18 markanın tamamı için üretici servis yetkimiz bulunmaktadır.",
      href: "/neden-orijinal/yaygin-servis-agi/",
    },
    {
      label: "Aksesuar & Yedek",
      description: "Cihazınızı tamamlayan aksesuar ve yedek parçaları inceleyin.",
      href: "/neden-orijinal/orijinal-aksesuar/",
    },
    {
      label: "Teknik Servis",
      description: "Teknik servis ve onarım sürecini tanıyın.",
      href: "/servis-bakim/teknik-servis/",
    },
    {
      label: "Kişiye Özel Ayar",
      description: "Seçtiğiniz cihazın kişiye özel nasıl ayarlandığını öğrenin.",
      href: "/uygulama-ayar/kisiye-ozel-ayar/",
    },
    {
      label: "Cihaz Deneme",
      description: "Değerlendirdiğiniz markayı merkezde ücretsiz demoyla deneyin; isterseniz satın alarak 7 güne kadar kullanın.",
      href: "/uygulama-ayar/cihaz-deneme/",
    },
    {
      label: "Ücretsiz İşitme Testi",
      description: "Marka danışmanlığından önce Darıca'daki merkezimizde ücretsiz işitme testinizi yaptırın.",
      href: "/degerlendirme/ucretsiz-isitme-testi/",
    },
    {
      label: "Markalar",
      description: "Çalıştığımız tüm markaları ve modelleri inceleyin.",
      href: "/markalar/",
    },
    {
      label: "İletişim",
      description: "Sorularınız için bize ulaşın veya randevu talebinde bulunun.",
      href: "/iletisim/",
    },
    {
      label: "İşitme Cihazı Markalarını Karşılaştırın",
      description: "Markaları ve modelleri kullanım ihtiyacına göre karşılaştıran rehber.",
      href: "/isitme-cihazi-markalari/",
    },
  ],
  accentColor: "#b45309",
  accentColorBadgeBg: "rgb(180 83 9 / 0.08)",
  accentColorBadgeBorder: "rgb(180 83 9 / 0.35)",
  accentColorBadgeText: "#92400e",
};
