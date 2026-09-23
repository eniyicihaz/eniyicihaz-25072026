// "Dikkat Edilmesi Gerekenler" section for the /teknolojiler/
// sarjli-teknolojiler page. Reuses the shared BrandPageIdealUser
// component, same technique every /isitme-cihazlari/* and /teknolojiler/*
// feature page uses — visually differentiated from the "Kimler İçin
// Uygun" section above by using the design system's own --color-warning
// token (#d97706) instead of the page's red accent, so the two sections
// read as distinct despite sharing markup.

import { TrendingDown, Wrench, Thermometer, AlarmClock, Package } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const sarjliTeknolojilerConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Şarjlı Teknoloji Seçerken Dikkat Edilmesi Gereken Noktalar",
  intro: "Şarj mühendisliği güvenilir bir kullanım sunar; yine de göz önünde bulundurulması gereken birkaç pratik nokta vardır.",
  profiles: [
    {
      icon: TrendingDown,
      title: "Pil Kapasitesi Yıllar İçinde Azalır",
      description: "Lityum-iyon piller, diğer şarjlı teknolojilerde olduğu gibi yıllar içinde kademeli olarak kapasite kaybedebilir.",
      suggestedFamilies: ["Periyodik Pil Kontrolü"],
    },
    {
      icon: Wrench,
      title: "Pil Değişimi Yetkili Servis Gerektirir",
      description: "Dahili pilin değişimi kullanıcı tarafından yapılamaz, yetkili teknik servis tarafından gerçekleştirilir.",
      suggestedFamilies: ["Yetkili Servis"],
    },
    {
      icon: Thermometer,
      title: "Aşırı Sıcaklık Pil Ömrünü Etkileyebilir",
      description: "Cihazın uzun süre aşırı sıcak veya soğuk ortamlarda bırakılması pil ömrünü olumsuz etkileyebilir.",
      suggestedFamilies: ["Uygun Saklama Koşulları"],
    },
    {
      icon: AlarmClock,
      title: "Düzenli Şarj Alışkanlığı Önemlidir",
      description: "Pilin uzun süre tamamen boş bırakılması, pil sağlığını olumsuz etkileyebilir.",
      suggestedFamilies: ["Düzenli Şarj Rutini"],
    },
    {
      icon: Package,
      title: "Orijinal Şarj Kutusu Kullanımı Önerilir",
      description: "Uyumsuz veya orijinal olmayan şarj aksesuarları, pil güvenliğini ve ömrünü olumsuz etkileyebilir.",
      suggestedFamilies: ["Orijinal Aksesuar Kullanımı"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
