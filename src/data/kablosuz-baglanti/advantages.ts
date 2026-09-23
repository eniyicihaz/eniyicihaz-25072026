// "Avantajları" bento section for the /teknolojiler/kablosuz-baglanti
// page. Renders through the shared BrandPageAdvantages component — items
// must be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { Radio, GraduationCap, Presentation, Ear, Users, Landmark } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const kablosuzBaglantiAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Kablosuz Bağlantı Özelliklerinin Avantajları",
  intro: "Kablosuz bağlantı protokollerini geniş bir kullanıcı kitlesi için sıkça değerlendirilen bir seçenek hâline getiren özellikler.",
  hero: {
    icon: Radio,
    category: "Toplu Alan Erişimi",
    title: "Telesarmal Döngü Sistemleriyle Doğrudan Bağlantı",
    description: "Tiyatro, cami ve toplantı salonu gibi mekanlarda, telesarmal döngü sistemine doğrudan bağlanarak sesi net alabilirsiniz.",
  },
  items: [
    {
      icon: GraduationCap,
      category: "Eğitim",
      title: "Sınıfta Öğretmeni Doğrudan Duyun",
      description: "Roger/FM verici mikrofonuyla öğretmenin sesi, sınıf gürültüsünden etkilenmeden doğrudan cihaza aktarılır.",
    },
    {
      icon: Presentation,
      category: "İş Hayatı",
      title: "Uzak Mesafede Net Konuşma Aktarımı",
      description: "Toplantı ve konferanslarda, uzaktaki bir konuşmacının sesini doğrudan cihazınıza alabilirsiniz.",
    },
    {
      icon: Ear,
      category: "Binaural Uyum",
      title: "Kulaktan Kulağa Kesintisiz İletişim",
      description: "İki cihaz arasındaki düşük güçlü kablosuz bağlantı, tutarlı bir dinleme deneyimi sağlar.",
    },
    {
      icon: Users,
      category: "Tek Taraflı Kayıp",
      title: "İyi Duyan Kulağa Kablosuz Aktarım",
      description: "CROS/BiCROS gibi sistemler, sesi iyi duyulmayan taraftan iyi duyulan tarafa kablosuz olarak aktarır.",
    },
    {
      icon: Landmark,
      category: "Erişilebilirlik",
      title: "Kamuya Açık Alanlarda Geniş Uyumluluk",
      description: "Telesarmal, birçok kamu binası ve toplu taşıma aracında yaygın olarak desteklenen, uzun süredir kullanılan bir standarttır.",
    },
  ],
  accentColor: "#65a30d",
  accentColorBadgeBg: "rgb(101 163 13 / 0.08)",
  accentColorBadgeBorder: "rgb(101 163 13 / 0.35)",
  accentColorBadgeText: "#4d7c0f",
  accentColorIconBg: "rgb(101 163 13 / 0.1)",
  accentColorHoverBorder: "rgb(101 163 13 / 0.45)",
};
