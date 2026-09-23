// "Dikkat Edilmesi Gerekenler" section for the /neden-orijinal/
// ucretsiz-danismanlik page. Reuses the shared BrandPageIdealUser
// component, same technique every prior page uses — visually
// differentiated from the "Danışmanlık Almadan Karar Vermenin Riskleri"
// section above by using the design system's own --color-warning token
// (#d97706) instead of the page's teal accent.

import { AlertTriangle, Clock, FileX, RefreshCcw, Gauge } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const ucretsizDanismanlikConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Danışmanlık Sürecinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Danışmanlık faydalı bir adımdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Danışmanlık Bir Satış Vaadi Değildir",
      description: "Danışmanlık sürecinin sonunda cihaz alma zorunluluğu yoktur; amaç bilgilendirmedir.",
      suggestedFamilies: ["Zorunluluk Yok"],
    },
    {
      icon: Clock,
      title: "İşitme Testi Randevu Gerektirir",
      description: "Ücretsiz işitme testi için önceden randevu alınması önerilir.",
      suggestedFamilies: ["Randevu Planlaması"],
    },
    {
      icon: FileX,
      title: "SGK Süreci Ek Belge Gerektirebilir",
      description: "SGK desteğinden yararlanmak için sağlık raporu gibi ek belgeler gerekebilir.",
      suggestedFamilies: ["Gerekli Belgeler"],
    },
    {
      icon: RefreshCcw,
      title: "Öneriler Zamanla Güncellenebilir",
      description: "İşitme durumunuz veya ihtiyaçlarınız değiştiğinde, öneriler yeniden değerlendirilebilir.",
      suggestedFamilies: ["Periyodik Değerlendirme"],
    },
    {
      icon: Gauge,
      title: "Sonuç Kişiden Kişiye Değişir",
      description: "Danışmanlık sürecinin sonucu, kişisel ihtiyaçlara ve tercihlere göre farklılık gösterir.",
      suggestedFamilies: ["Kişiye Özel Sonuç"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
