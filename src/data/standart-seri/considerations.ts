// "Dikkat Edilmesi Gerekenler" section for the /segmentler/standart-seri
// page. Reuses the shared BrandPageIdealUser component, same technique
// every prior page uses — visually differentiated from the "Kimler İçin
// Uygun?" section above by using the design system's own
// --color-warning token (#d97706) instead of the page's sky-blue
// accent. Items 4 and 5 deliberately cross-reference the "Neden
// Orijinal" series' own Ücretsiz Danışmanlık and Kolay Değişim pages,
// same technique used on Premium Seri.

import { AlertTriangle, Bluetooth, Sliders, Stethoscope, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const standartSeriConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Standart Seri Değerlendirilirken Dikkat Edilmesi Gereken Noktalar",
  intro: "Standart seri dengeli bir seçenektir; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Karmaşık Ortamlarda Sınırlı Kalabilir",
      description: "Çok kalabalık veya gürültülü ortamlarda standart serinin performansı premium seriye göre daha sınırlı olabilir.",
      suggestedFamilies: ["İhtiyaç Değerlendirmesi"],
    },
    {
      icon: Bluetooth,
      title: "Bağlantı Kapsamı Modele Göre Değişir",
      description: "Tüm standart seri modeller aynı kablosuz bağlantı kapsamını sunmayabilir.",
      suggestedFamilies: ["Model Karşılaştırması"],
    },
    {
      icon: Sliders,
      title: "Kişiselleştirme Seçenekleri Daha Sınırlıdır",
      description: "Standart seri, premium seriye kıyasla daha az sayıda ince ayar seçeneği sunabilir.",
      suggestedFamilies: ["Kişiselleştirme İhtiyacı"],
    },
    {
      icon: Stethoscope,
      title: "Doğru Seri Seçimi İşitme Testine Dayanmalıdır",
      description: "Size uygun serinin belirlenmesi, işitme testi ve ihtiyaç analiziyle birlikte yapılmalıdır.",
      suggestedFamilies: ["Ücretsiz Danışmanlık"],
    },
    {
      icon: RefreshCcw,
      title: "İhtiyaç Değişirse Seri Güncellenebilir",
      description: "İhtiyaçlarınız zamanla değişirse, farklı bir seriye geçiş değerlendirilebilir.",
      suggestedFamilies: ["Kolay Değişim"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
