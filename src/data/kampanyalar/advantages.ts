// "Kampanya Kategorilerinin Faydaları" bento section for the
// /blog/kampanyalar page — repurposed as the general categories of
// campaign benefits, rather than product advantages. Renders through
// the shared BrandPageAdvantages component — items must be exactly 5
// entries: [slot1, slot2, slot3(wide), slot4(wide), slot5(wide)], same
// contract every brand/category page's advantages data follows.
// Deliberately no specific discount percentages or prices — see
// hero.ts for the accuracy rationale.

import { Gift, Users, Baby, RefreshCcw, Calendar, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const kampanyalarAdvantages: BrandPageAdvantagesContent = {
  badge: "KAMPANYA KATEGORİLERİNİN FAYDALARI",
  heading: "Kampanya Kategorilerimizin Sunduğu Faydalar",
  intro: "Dönem dönem düzenlediğimiz kampanya kategorilerinin sağlayabileceği genel faydalar.",
  hero: {
    icon: Gift,
    category: "Bütçe Dostu Seçenekler",
    title: "Cihaz Alımınızı Daha Uygun Bir Şekilde Planlayabilirsiniz",
    description: "Dönem dönem sunduğumuz kampanyalar, bütçenize uygun bir seçim yapmanıza yardımcı olabilir.",
  },
  items: [
    {
      icon: Users,
      category: "Aile Paketi Avantajı",
      title: "Aile Üyeleriniz İçin Birlikte Değerlendirme",
      description: "Birden fazla aile üyesi birlikte başvurduğunda avantajlı bir süreç sunulabilir.",
    },
    {
      icon: Baby,
      category: "Yeni Kullanıcı Avantajı",
      title: "İlk Kez Cihaz Alacaklar İçin Özel Fırsatlar",
      description: "İlk kez işitme cihazı alacak kullanıcılarımıza yönelik özel avantajlar sunabiliyoruz.",
    },
    {
      icon: RefreshCcw,
      category: "Sadakat Avantajı",
      title: "Mevcut Kullanıcılarımıza Özel Fırsatlar",
      description: "Kliniğimizin mevcut kullanıcılarına yönelik sadakat avantajları sunulabiliyor.",
    },
    {
      icon: Calendar,
      category: "Sezonluk Fırsatlar",
      title: "Belirli Dönemlerde Ek Avantajlar",
      description: "Yılın belirli dönemlerinde sezonluk kampanyalar düzenleyebiliyoruz.",
    },
    {
      icon: Sparkles,
      category: "Güncel Bilgi",
      title: "Size Uygun Kampanyayı Birlikte Bulalım",
      description: "Hangi kampanyanın size uygun olduğunu öğrenmek için bizi arayabilirsiniz.",
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
  accentColorIconBg: "rgb(192 38 211 / 0.1)",
  accentColorHoverBorder: "rgb(192 38 211 / 0.45)",
};
