// "Dikkat Edilmesi Gerekenler" section for the /uygulama-ayar/
// cihaz-uygulama page. Reuses the shared BrandPageIdealUser component,
// visually differentiated by the design system's own --color-warning
// token (#d97706). Framed around realistic adaptation-process
// expectations rather than diagnostic red flags, since this is a
// service page rather than a clinical assessment page.

import { AlertTriangle, Ear, Settings2, Timer, MessageCircle } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const cihazUygulamaConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Cihaz Uygulama Sürecinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Uygulama randevusu faydalı bir başlangıçtır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: Timer,
      title: "Alışma Süreci Zaman Alabilir",
      description: "Yeni seslere ve cihaza alışma süreci kişiden kişiye değişir; ilk günlerde farklı bir ses algısı yaşamak normal olabilir.",
      suggestedFamilies: ["Alışma Süreci"],
    },
    {
      icon: AlertTriangle,
      title: "Sürekli Rahatsızlık veya Ağrı Bildirilmelidir",
      description: "Hafif bir alışma hissi normal olsa da sürekli ağrı veya rahatsızlık durumunda vakit kaybetmeden bize bildirmeniz önerilir.",
      suggestedFamilies: ["Fiziksel Uygunluk Kontrolü"],
    },
    {
      icon: Settings2,
      title: "Ayarları Kendi Başınıza Değiştirmeyin",
      description: "Cihaz ayarlarınızda değişiklik ihtiyacı hissederseniz, ayarı kendiniz değiştirmek yerine bizimle iletişime geçmeniz önerilir.",
      suggestedFamilies: ["Uzman Ayar Desteği"],
    },
    {
      icon: Ear,
      title: "Islık Sesi (Feedback) Fark Ederseniz Bildirin",
      description: "Cihazınızdan ıslık benzeri bir ses duyarsanız, bu genellikle yerleştirme veya ayarla ilgilidir ve değerlendirilmesi gerekir.",
      suggestedFamilies: ["Geri Bildirim Kontrolü"],
    },
    {
      icon: MessageCircle,
      title: "Geri Bildiriminiz Takip Ayarlarını Şekillendirir",
      description: "Günlük kullanımda fark ettiğiniz olumlu veya olumsuz noktaları paylaşmanız, takip randevusundaki ince ayarların doğruluğunu artırır.",
      suggestedFamilies: ["Takip Randevusu"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
