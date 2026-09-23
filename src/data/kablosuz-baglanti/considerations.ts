// "Dikkat Edilmesi Gerekenler" section for the /teknolojiler/
// kablosuz-baglanti page. Reuses the shared BrandPageIdealUser component,
// same technique every /isitme-cihazlari/* and /teknolojiler/* feature
// page uses — visually differentiated from the "Kimler İçin Uygun"
// section above by using the design system's own --color-warning token
// (#d97706) instead of the page's lime accent, so the two sections read
// as distinct despite sharing markup.

import { MapPin, Package, Battery, Wrench, Radio } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const kablosuzBaglantiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Kablosuz Bağlantı Özelliği Seçerken Dikkat Edilmesi Gereken Noktalar",
  intro: "Kablosuz bağlantı protokolleri geniş bir erişim sunar; yine de göz önünde bulundurulması gereken birkaç pratik nokta vardır.",
  profiles: [
    {
      icon: MapPin,
      title: "Telesarmal Her Mekanda Bulunmaz",
      description: "Telesarmal döngü sistemi, yalnızca bu altyapıya sahip mekanlarda çalışır; her yerde bulunmayabilir.",
      suggestedFamilies: ["Mekan Uyumluluğu Kontrolü"],
    },
    {
      icon: Package,
      title: "Roger/FM Vericisi Ayrıca Temin Edilir",
      description: "Roger/FM sistemleri genellikle cihazdan bağımsız, ayrıca satın alınması gereken bir verici mikrofon gerektirir.",
      suggestedFamilies: ["Ayrı Aksesuar Gerekliliği"],
    },
    {
      icon: Battery,
      title: "Ek Donanım Pil Tüketimini Etkileyebilir",
      description: "Telesarmal ve uzaktan mikrofon alıcılarının sürekli aktif olması, pil tüketimini bir miktar artırabilir.",
      suggestedFamilies: ["Verimli İşlemcili Modeller"],
    },
    {
      icon: Wrench,
      title: "Uyumluluk Modelden Modele Değişir",
      description: "Tüm cihazlar tüm kablosuz protokolleri desteklemez; ihtiyacınıza uygun protokol desteği önceden kontrol edilmelidir.",
      suggestedFamilies: ["Protokol Uyumluluğu Kontrolü"],
    },
    {
      icon: Radio,
      title: "Sinyal Kalitesi Ortama Göre Değişebilir",
      description: "Telesarmal ve FM sinyalinin kalitesi, mekanın altyapısına ve elektromanyetik girişime göre değişebilir.",
      suggestedFamilies: ["Ortam Testi Önerilir"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
