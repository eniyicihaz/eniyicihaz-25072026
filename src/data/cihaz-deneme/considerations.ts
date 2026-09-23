// "Dikkat Edilmesi Gerekenler" section for the /uygulama-ayar/
// cihaz-deneme page. Reuses the shared BrandPageIdealUser component,
// visually differentiated by the design system's own --color-warning
// token (#d97706). Framed around realistic trial-period expectations
// rather than diagnostic red flags.

import { Hourglass, PackageCheck, AlertTriangle, MessageSquare, CalendarCheck } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const cihazDenemeConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Cihaz Deneme Sürecinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Deneme süreci faydalı bir fırsattır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: Hourglass,
      title: "Deneme Süresinin Bir Sınırı Vardır",
      description: "Deneme süresi belirli bir zaman dilimiyle sınırlıdır; net süre ve koşullar randevu sırasında sizinle paylaşılır.",
      suggestedFamilies: ["Süre Sınırı"],
    },
    {
      icon: PackageCheck,
      title: "Cihaz Deneme Süresince Sizin Sorumluluğunuzdadır",
      description: "Cihaz henüz satın alınmamış olsa da, deneme süresince özenle kullanılması ve korunması önerilir.",
      suggestedFamilies: ["Cihaz Bakımı"],
    },
    {
      icon: AlertTriangle,
      title: "Alışma Süreci Deneme Sırasında da Geçerlidir",
      description: "Yeni bir cihaza alışmak zaman alabilir; deneme süresindeki ilk izlenim, tüm süreç boyunca değişebilir.",
      suggestedFamilies: ["Gerçekçi Beklenti"],
    },
    {
      icon: MessageSquare,
      title: "Deneyiminizi Paylaşmanız Önemlidir",
      description: "Deneme sırasında fark ettiğiniz olumlu veya olumsuz noktaları paylaşmanız, doğru karar vermenize yardımcı olur.",
      suggestedFamilies: ["Ara Kontrol Görüşmesi"],
    },
    {
      icon: CalendarCheck,
      title: "Model Bulunabilirliği Stok Durumuna Göre Değişebilir",
      description: "Denemek istediğiniz model, stok durumuna göre her zaman anında temin edilemeyebilir.",
      suggestedFamilies: ["Stok Durumu"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
