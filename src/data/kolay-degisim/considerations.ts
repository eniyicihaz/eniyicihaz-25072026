// "Dikkat Edilmesi Gerekenler" section for the /neden-orijinal/
// kolay-degisim page. Reuses the shared BrandPageIdealUser component,
// same technique every prior page uses — visually differentiated from
// the "Değişim Güvencesi Olmadan Karşılaşılabilecek Sonuçlar" section
// above by using the design system's own --color-warning token
// (#d97706) instead of the page's rose accent.

import { AlertTriangle, FileX, Wallet, Store, Gauge } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const kolayDegisimConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Değişim Sürecinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Değişim güvencesi faydalı bir adımdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Değişim Hakkı Süreyle Sınırlıdır",
      description: "Değişim hakkı genellikle belirli bir süreyle sınırlıdır; bu süre satın alma sırasında netleştirilir.",
      suggestedFamilies: ["Süre Takibi"],
    },
    {
      icon: FileX,
      title: "Ürünün Durumu Değerlendirmeyi Etkiler",
      description: "Değişim değerlendirmesi, ürünün kullanım durumuna ve hasar durumuna göre yapılır.",
      suggestedFamilies: ["Ürün Durumu Kontrolü"],
    },
    {
      icon: Wallet,
      title: "Fiyat Farkı Olabilir",
      description: "Farklı bir modele geçişte, cihazlar arasındaki fiyat farkı değişim sürecine yansıyabilir.",
      suggestedFamilies: ["Fiyat Farkı Bilgisi"],
    },
    {
      icon: Store,
      title: "Yetkisiz Kanallarda Değişim Güvencesi Bulunmayabilir",
      description: "Yetkisiz kaynaklardan alınan ürünlerde değişim hakkı genellikle sunulmaz.",
      suggestedFamilies: ["Yetkili Kanal Tercihi"],
    },
    {
      icon: Gauge,
      title: "Koşullar Ürün ve Duruma Göre Değişir",
      description: "Değişim koşulları, ürün türüne ve satın alma koşullarına göre farklılık gösterebilir.",
      suggestedFamilies: ["Kişiye Özel Değerlendirme"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
