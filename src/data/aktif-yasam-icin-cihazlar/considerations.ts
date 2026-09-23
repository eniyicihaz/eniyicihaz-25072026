// "Dikkat Edilmesi Gerekenler" section for the /ihtiyaciniza-gore/
// aktif-yasam-icin-cihazlar page. Reuses the shared BrandPageIdealUser
// component, same technique every prior feature/need page uses —
// visually differentiated from the "Bu Sayfa Kimler İçin Uygun?" section
// above by using the design system's own --color-warning token (#d97706)
// instead of the page's gray accent. Item 1 keeps the same urgent-care
// flag every page in this series carries; item 3 draws the important
// distinction between IP-rated resistance and true waterproofing.

import { AlertTriangle, Volume2, Droplets, Wrench, Gauge } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const aktifYasamIcinCihazlarConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Aktif Yaşam İçin Cihaz Değerlendirilirken Dikkat Edilmesi Gereken Noktalar",
  intro: "Doğru değerlendirme faydalı bir adımdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Ani Başlayan Kayıp Acil Değerlendirme Gerektirebilir",
      description: "Ani gelişen işitme kaybı, aktif yaşam kaynaklı geçici bir durumdan farklıdır; vakit kaybetmeden bir kulak burun boğaz uzmanına başvurulmalıdır.",
      suggestedFamilies: ["Acil KBB Değerlendirmesi"],
    },
    {
      icon: Volume2,
      title: "Yüksek Ses Düzeyine Maruz Kalma Dikkat Gerektirir",
      description: "Yüksek sesli spor salonları veya konserler gibi ortamlar, işitme sağlığı açısından ayrıca değerlendirilmelidir.",
      suggestedFamilies: ["Gürültü Koruması"],
    },
    {
      icon: Droplets,
      title: "Su Geçirmezlik ile Suya Dayanıklılık Farklıdır",
      description: "IP koruma sınıfı yüksek modeller dahi genellikle tam su geçirmez değildir; yüzme gibi aktiviteler öncesinde üretici önerileri kontrol edilmelidir.",
      suggestedFamilies: ["IP Koruma Sınıfı Kontrolü"],
    },
    {
      icon: Wrench,
      title: "Düzenli Bakım Cihaz Ömrünü Uzatabilir",
      description: "Aktif kullanımda ter ve toz birikimi artabilir; düzenli temizlik ve kontrol cihazın performansını korumaya yardımcı olur.",
      suggestedFamilies: ["Periyodik Bakım"],
    },
    {
      icon: Gauge,
      title: "İhtiyaca Göre Doğru Koruma Sınıfı Seçilmelidir",
      description: "Aktivite düzeyinize uygun koruma sınıfı ve özellikler bir odyometrist ile birlikte belirlenmelidir.",
      suggestedFamilies: ["Kişiye Özel Değerlendirme"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
