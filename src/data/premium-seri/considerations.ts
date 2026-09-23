// "Dikkat Edilmesi Gerekenler" section for the /segmentler/premium-seri
// page. Reuses the shared BrandPageIdealUser component, same technique
// every prior page uses — visually differentiated from the "Kimler İçin
// Uygun?" section above by using the design system's own
// --color-warning token (#d97706) instead of the page's yellow accent.
// Items 4 and 5 deliberately cross-reference the "Neden Orijinal"
// series' own Ücretsiz Danışmanlık and Kolay Değişim pages.

import { AlertTriangle, Wallet, Gauge, Stethoscope, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const premiumSeriConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Premium Seri Değerlendirilirken Dikkat Edilmesi Gereken Noktalar",
  intro: "Premium seri değerli bir seçenektir; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Her Kullanıcı İçin Gerekli Olmayabilir",
      description: "Günlük ihtiyaçlarınız daha sınırlıysa, standart veya ekonomik seri de yeterli olabilir.",
      suggestedFamilies: ["İhtiyaç Değerlendirmesi"],
    },
    {
      icon: Wallet,
      title: "Daha Yüksek Bir Yatırım Gerektirir",
      description: "Premium seri modeller, genellikle standart ve ekonomik serilere göre daha yüksek bir fiyat aralığındadır.",
      suggestedFamilies: ["Bütçe Planlaması"],
    },
    {
      icon: Gauge,
      title: "Özellik Fazlalığı Bazı Kullanıcılar İçin Gereksiz Olabilir",
      description: "Basit kullanım tercih eden kullanıcılar için premium serinin sunduğu bazı özellikler kullanılmayabilir.",
      suggestedFamilies: ["Kullanım Alışkanlıkları"],
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
