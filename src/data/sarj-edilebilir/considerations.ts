// "Dikkat Edilmesi Gerekenler" section for the /isitme-cihazlari/
// sarj-edilebilir page. Reuses the shared BrandPageIdealUser component,
// same technique the BTE/ITE master pages use — visually differentiated
// from the "Kimler İçin Uygun" section above by using the design system's
// own --color-warning token (#d97706) instead of the page's emerald
// accent, so the two sections read as distinct despite sharing markup.

import { Plane, Timer, AlarmClock, Package, Wrench } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const sarjEdilebilirConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Şarj Edilebilir Cihaz Seçerken Dikkat Edilmesi Gereken Noktalar",
  intro: "Şarjlı cihazlar kullanım kolaylığı açısından güçlü bir seçenektir; yine de yaşam tarzınıza göre değerlendirmeniz gereken birkaç pratik nokta vardır.",
  profiles: [
    {
      icon: Plane,
      title: "Elektriğe Erişimin Kısıtlı Olduğu Seyahatler",
      description: "Şarj kutusuna güç kaynağı bulunamayan uzun seyahatlerde, taşınabilir (powerbank özellikli) kutular tercih edilebilir.",
      suggestedFamilies: ["Powerbank Özellikli Kutu"],
    },
    {
      icon: Timer,
      title: "Pil Kapasitesinin Yıllar İçinde Azalması",
      description: "Lityum-iyon piller, diğer şarjlı cihazlarda olduğu gibi yıllar içinde kademeli olarak kapasite kaybedebilir.",
      suggestedFamilies: ["Periyodik Kontrol"],
    },
    {
      icon: AlarmClock,
      title: "Şarj Etmeyi Unutmak",
      description: "Cihaz her gece şarj kutusuna yerleştirilmezse, ertesi gün yetersiz pille kalma riski oluşur.",
      suggestedFamilies: ["Düzenli Rutin"],
    },
    {
      icon: Package,
      title: "Şarj Kutusunu Kaybetmek veya Unutmak",
      description: "Şarj kutusu olmadan cihazın şarj edilmesi mümkün olmadığından kutunun her zaman yanınızda olması önemlidir.",
      suggestedFamilies: ["Yedek Kutu Değerlendirilebilir"],
    },
    {
      icon: Wrench,
      title: "Pil Değişimi Bağımsız Servis Gerektirir",
      description: "Değiştirilebilir pilin aksine, dahili pilin değişimi kullanıcı tarafından yapılamaz; yetkili servis gerektirir.",
      suggestedFamilies: ["Yetkili Servis"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
