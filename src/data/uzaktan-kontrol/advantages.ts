// "Avantajları" bento section for the /teknolojiler/uzaktan-kontrol page.
// Renders through the shared BrandPageAdvantages component — items must
// be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { Smartphone, Video, Hand, Users, Clock, MapPin } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const uzaktanKontrolAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Uzaktan Kontrol Özelliklerinin Avantajları",
  intro: "Uzaktan kontrolü kolay erişim isteyen kullanıcılar için sıkça değerlendirilen bir seçenek hâline getiren özellikler.",
  hero: {
    icon: Smartphone,
    category: "Kolay Erişim",
    title: "Telefonunuzdan Kolayca Ayar Yapın",
    description: "Ses seviyesi ve dinleme programları, akıllı telefon uygulaması üzerinden hızlıca değiştirilebilir.",
  },
  items: [
    {
      icon: Video,
      category: "Uzaktan Destek",
      title: "Kliniğe Gelmeden Uzman Desteği Alın",
      description: "Video görüşme sırasında odyometristiniz, cihaz ayarlarınızı uzaktan güncelleyebilir.",
    },
    {
      icon: Hand,
      category: "Kolay Kullanım",
      title: "Uygulama Gerektirmeyen Fiziksel Kumanda Seçeneği",
      description: "Akıllı telefon kullanmayan kullanıcılar için basit, büyük tuşlu fiziksel kumandalar sunulabilir.",
    },
    {
      icon: Users,
      category: "Aile Desteği",
      title: "Bakım Verenlerin Takibine İmkân Tanır",
      description: "Bazı uygulamalar, aile üyelerinin de cihaz durumunu takip etmesine izin verir.",
    },
    {
      icon: Clock,
      category: "Zaman Tasarrufu",
      title: "Randevu Beklemeden Hızlı Ayar Güncellemesi",
      description: "Küçük ayar değişiklikleri için kliniğe gelmeden uzaktan destek alınabilir.",
    },
    {
      icon: MapPin,
      category: "Erişilebilirlik",
      title: "Mesafeden Bağımsız Destek",
      description: "Kliniğe uzak yaşayan kullanıcılar için uzaktan destek, erişimi kolaylaştırır.",
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
  accentColorIconBg: "rgb(2 132 199 / 0.1)",
  accentColorHoverBorder: "rgb(2 132 199 / 0.45)",
};
