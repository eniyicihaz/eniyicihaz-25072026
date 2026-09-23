// "Dikkat Edilmesi Gerekenler" section for the /isitme-cihazlari/
// suya-dayanikli page. Reuses the shared BrandPageIdealUser component,
// same technique the BTE/ITE/Şarj Edilebilir/Bluetooth/Çocuklara Özel/
// Görünmez master pages use — visually differentiated from the "Kimler
// İçin Uygun" section above by using the design system's own
// --color-warning token (#d97706) instead of the page's teal accent, so
// the two sections read as distinct despite sharing markup.

import { AlertTriangle, Wrench, Package, AlarmClock } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const suyaDayankliConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Suya Dayanıklı Cihaz Seçerken Dikkat Edilmesi Gereken Noktalar",
  intro: "IP koruma sınıfı günlük kullanım için güçlü bir güvence sunar; yine de göz önünde bulundurulması gereken birkaç pratik nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Suya Dayanıklı, Suya Tam Dayanıklı (Waterproof) Değildir",
      description: "Çoğu model yüzme veya duş gibi tam daldırma senaryoları için tasarlanmamıştır.",
      suggestedFamilies: ["IP Sınıfı Sınırları"],
    },
    {
      icon: Wrench,
      title: "Zamanla Azalabilen Koruma Seviyesi",
      description: "Contalar ve kaplamalar yıllar içinde aşınabilir, koruma seviyesi zamanla azalabilir.",
      suggestedFamilies: ["Periyodik Teknik Kontrol"],
    },
    {
      icon: Package,
      title: "Kurutma Kutusu Kullanım İhtiyacı",
      description: "Yoğun nem maruziyetinden sonra düzenli kurutma, cihaz ömrünü uzatmaya yardımcı olur.",
      suggestedFamilies: ["Kurutma Kutusu / Kurutucu"],
    },
    {
      icon: AlarmClock,
      title: "Su Teması Sonrası Hemen Kurulama Gerekliliği",
      description: "Su veya yoğun ter temasından sonra cihazın yumuşak bir bezle hemen kurulanması önerilir.",
      suggestedFamilies: ["Günlük Bakım Alışkanlığı"],
    },
    {
      icon: Wrench,
      title: "IP Sınıfının Model Bazında Değişmesi",
      description: "Koruma seviyesi marka ve modele göre değişir; net IP sınıfı teslim sırasında belirtilir.",
      suggestedFamilies: ["Model Bazlı IP Değerlendirmesi"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
