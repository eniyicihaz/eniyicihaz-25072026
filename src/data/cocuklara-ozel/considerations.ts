// "Dikkat Edilmesi Gerekenler" section for the /isitme-cihazlari/
// cocuklara-ozel page. Reuses the shared BrandPageIdealUser component,
// same technique the BTE/ITE/Şarj Edilebilir/Bluetooth master pages use —
// visually differentiated from the "Kimler İçin Uygun" section above by
// using the design system's own --color-warning token (#d97706) instead
// of the page's rose accent, so the two sections read as distinct despite
// sharing markup.

import { Battery, Ruler, Wrench, Users, AlarmClock } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const cocuklaraOzelConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Çocuklara Özel Cihaz Seçerken Dikkat Edilmesi Gereken Noktalar",
  intro: "Çocuklara özel tasarımlar güvenlik ve dayanıklılık açısından güçlü bir seçenektir; yine de göz önünde bulundurulması gereken birkaç pratik nokta vardır.",
  profiles: [
    {
      icon: Battery,
      title: "Pil Kapağı Yine de Dikkat Gerektirir",
      description: "Kilitli tasarım riski azaltır; ancak pilin çocuğun erişemeyeceği bir yerde saklanması yine de önemlidir.",
      suggestedFamilies: ["Güvenli Pil Saklama"],
    },
    {
      icon: Ruler,
      title: "Sık Kalıp Değişimi İhtiyacı",
      description: "Büyüyen kulak, kulak kalıbının belirli aralıklarla yenilenmesini gerektirebilir.",
      suggestedFamilies: ["Periyodik Kalıp Kontrolü"],
    },
    {
      icon: Wrench,
      title: "Düzenli Bakım ve Kontrol Gerekliliği",
      description: "Çocukların cihazları daha sık ter, nem ve dış etkenle karşılaşabilir; düzenli teknik kontrol önerilir.",
      suggestedFamilies: ["Düzenli Teknik Kontrol"],
    },
    {
      icon: Users,
      title: "Okul ve Öğretmenle Koordinasyon İhtiyacı",
      description: "Sınıf ortamında verimli kullanım için öğretmenin cihaz ve FM sistemi hakkında bilgilendirilmesi faydalıdır.",
      suggestedFamilies: ["Okul Bilgilendirmesi"],
    },
    {
      icon: AlarmClock,
      title: "Cihazın Her Gün Düzenli Kullanımı",
      description: "Dil ve konuşma gelişimi için cihazın uyanık olunan saatler boyunca düzenli kullanılması önemlidir.",
      suggestedFamilies: ["Düzenli Kullanım Alışkanlığı"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
