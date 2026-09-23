// "Dikkat Edilmesi Gerekenler" section for the /teknolojiler/
// uzaktan-kontrol page. Reuses the shared BrandPageIdealUser component,
// same technique every /isitme-cihazlari/* and /teknolojiler/* feature
// page uses — visually differentiated from the "Kimler İçin Uygun"
// section above by using the design system's own --color-warning token
// (#d97706) instead of the page's sky accent, so the two sections read
// as distinct despite sharing markup.

import { AlertTriangle, Wifi, Battery, Smartphone, Wrench } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const uzaktanKontrolConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Uzaktan Kontrol Özelliği Seçerken Dikkat Edilmesi Gereken Noktalar",
  intro: "Uzaktan kontrol, kolay erişim açısından güçlü bir seçenektir; yine de göz önünde bulundurulması gereken birkaç pratik nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Uzaktan Destek Her Ayarı Kapsamaz",
      description: "Bazı karmaşık ayarlamalar ve fiziksel kontroller yüz yüze bir randevu gerektirebilir.",
      suggestedFamilies: ["Yüz Yüze Randevu Gereken Durumlar"],
    },
    {
      icon: Wifi,
      title: "Kararlı İnternet Bağlantısı Gerektirir",
      description: "Uzaktan destek oturumları, video görüşme için stabil bir internet bağlantısına ihtiyaç duyar.",
      suggestedFamilies: ["İnternet Bağlantısı Kontrolü"],
    },
    {
      icon: Battery,
      title: "Uygulama Kullanımı Pil Tüketimini Etkileyebilir",
      description: "Sürekli Bluetooth bağlantısı gerektiren uygulama kontrolü, pil tüketimini bir miktar artırabilir.",
      suggestedFamilies: ["Verimli İşlemcili Modeller"],
    },
    {
      icon: Smartphone,
      title: "Her Telefon veya İşletim Sistemiyle Uyumlu Olmayabilir",
      description: "Uygulama uyumluluğu telefon markası ve işletim sistemi sürümüne göre değişebilir.",
      suggestedFamilies: ["Uyumluluk Kontrolü"],
    },
    {
      icon: Wrench,
      title: "İlk Kurulum Uzman Desteği Gerektirir",
      description: "Uzaktan destek özelliğinin ilk kurulumu, genellikle klinikte yapılan bir randevu ile başlar.",
      suggestedFamilies: ["İlk Kurulum Randevusu"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
