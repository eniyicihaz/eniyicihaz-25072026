// Evde Hizmet Kimler İçin Uygun? — BrandPageIdealUser üzerinden render
// edilir; premium: true (Ücretsiz İşitme Testi'nin kullandığı geniş
// nefes alanlı grid) bu sayfanın premium/editorial karakterine uygun.
import { Accessibility, Users, MapPin, RefreshCcw, PackageSearch, HeartHandshake } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const evdeHizmetIdealUser: BrandPageIdealUserContent = {
  badge: "Kimler İçin Uygun?",
  heading: "Evde Hizmet Kimler İçin Uygun?",
  intro: "Evde işitme cihazı hizmeti, aşağıdaki gibi durumlarda özellikle tercih ediliyor.",
  profiles: [
    {
      icon: Accessibility,
      title: "Evden Çıkmakta Zorlananlar",
      description: "Hareket kısıtlılığı nedeniyle merkezimize gelmesi zor olan kişiler için süreci evde yürütüyoruz.",
      suggestedFamilies: ["Hareket Kısıtlılığı", "Ev Ortamı"],
    },
    {
      icon: Users,
      title: "Yakınları Adına Süreci Takip Edenler",
      description: "Ailesinin yaşlı bir bireyi için randevu ve süreci evde takip etmek istediği durumlar.",
      suggestedFamilies: ["Aile Desteği", "Yaşlı Bireyler"],
    },
    {
      icon: MapPin,
      title: "Darıca, Gebze, Çayırova'da Merkeze Gelmeden Hizmet İsteyenler",
      description: "Bölgemizde yaşayıp merkezimize gelmeden aynı hizmeti evinde almak isteyenler.",
      suggestedFamilies: ["Darıca", "Gebze", "Çayırova"],
    },
    {
      icon: RefreshCcw,
      title: "Mevcut Cihazının Ayarından Memnun Olmayanlar",
      description: "Cihazının günlük yaşamına uygun ayarlanmadığını düşünenler için evde yeniden değerlendirme yapılır.",
      suggestedFamilies: ["Yeniden Ayar", "Konfor"],
    },
    {
      icon: PackageSearch,
      title: "Yeni Cihaz Almadan Önce Evde Denemek İsteyenler",
      description: "Karar vermeden önce cihazı kendi ev ortamında, günlük rutininde denemek isteyenler.",
      suggestedFamilies: ["Cihaz Denemesi", "Karar Öncesi"],
    },
    {
      icon: HeartHandshake,
      title: "Cihaz Kullanımında Desteğe İhtiyaç Duyanlar",
      description: "Cihazın günlük kullanımı, temizliği veya pil değişiminde yardıma ihtiyaç duyan kişiler ve yakınları.",
      suggestedFamilies: ["Kullanım Desteği", "Takip"],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorIconBg: "rgb(13 148 136 / 0.1)",
  premium: true,
};
