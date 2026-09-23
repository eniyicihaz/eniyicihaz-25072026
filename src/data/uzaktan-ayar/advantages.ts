// "Avantajları" bento section for the /uygulama-ayar/uzaktan-ayar
// page — framed as the genuine advantages of the remote-session
// service. Renders through the shared BrandPageAdvantages component —
// items must be exactly 5 entries: [slot1, slot2, slot3(wide),
// slot4(wide), slot5(wide)], same contract every brand/category page's
// advantages data follows.

import { Video, Clock, MapPin, ShieldCheck, Users2, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const uzaktanAyarAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Uzaktan Ayar Hizmetinin Sunduğu Avantajlar",
  intro: "Küçük ayar ihtiyaçları için kliniğe gelmeden çözüm sunmanın nedenleri.",
  hero: {
    icon: Video,
    category: "Video Görüşmeli Destek",
    title: "Kliniğe Gelmeden Odyometristinizle Bağlanırsınız",
    description: "Uygun cihazınızla, güvenli bir video görüşme üzerinden aynı odyometristinizle iletişim kurarsınız.",
  },
  items: [
    {
      icon: Clock,
      category: "Zaman Tasarrufu",
      title: "Küçük Ayarlar İçin Hızlı Çözüm",
      description: "Basit ayar güncellemeleri için kliniğe gelmenize gerek kalmayabilir.",
    },
    {
      icon: MapPin,
      category: "Erişim Kolaylığı",
      title: "Mesafe Fark Etmeksizin Destek Alırsınız",
      description: "Kliniğe uzak yaşayan veya seyahatte olan kullanıcılar için erişimi kolaylaştırır.",
    },
    {
      icon: ShieldCheck,
      category: "Güvenli Oturum",
      title: "Yalnızca Sizin Onayınızla Gerçekleşir",
      description: "Cihazınıza uzaktan erişim, yalnızca oturum süresince ve sizin onayınızla sağlanır.",
    },
    {
      icon: Users2,
      category: "Aynı Ekip",
      title: "Tanıdığınız Odyometristle Devam Edersiniz",
      description: "Oturum, sizi ve geçmiş kayıtlarınızı bilen aynı klinik ekibi tarafından yürütülür.",
    },
    {
      icon: Sparkles,
      category: "Ücretsiz",
      title: "Uzaktan Ayar Herhangi Bir Ücret Talep Etmez",
      description: "Uzaktan ayar oturumu, herhangi bir ücret talep edilmeden sunulur.",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
  accentColorIconBg: "rgb(22 163 74 / 0.1)",
  accentColorHoverBorder: "rgb(22 163 74 / 0.45)",
};
