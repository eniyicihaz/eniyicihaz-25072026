// "Çocuklarda SGK Desteğinin Faydaları" bento section for the
// /sgk/cocuklarda-sgk page — repurposed as the genuine benefits of the
// pediatric SGK support system, rather than product advantages.
// Renders through the shared BrandPageAdvantages component — items
// must be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { HeartHandshake, TrendingUp, School, Users, ShieldCheck, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const cocuklardaSgkAdvantages: BrandPageAdvantagesContent = {
  badge: "ÇOCUKLARDA SGK DESTEĞİNİN FAYDALARI",
  heading: "Çocuklarda SGK Desteğinin Sunduğu Faydalar",
  intro: "Çocuklara yönelik SGK desteğinin ailelere sağladığı somut faydalar.",
  hero: {
    icon: HeartHandshake,
    category: "Erken Müdahale Desteği",
    title: "Dil ve Konuşma Gelişimi İçin Zamanında Destek",
    description: "SGK'nın çocuklara öncelik veren yaklaşımı, erken müdahalenin önündeki mali engelleri azaltmaya yardımcı olur.",
  },
  items: [
    {
      icon: TrendingUp,
      category: "Yaş Grubuna Göre Destek",
      title: "Çocuk Yaş Gruplarında Destek Öncelikli Değerlendirilir",
      description: "SGK, çocuk yaş gruplarını yetişkinlerden ayrı bir kategori olarak değerlendirir.",
    },
    {
      icon: School,
      category: "Okul Başarısına Katkı",
      title: "Okulda Sağlıklı İletişimi Destekler",
      description: "Zamanında edinilen işitme cihazı, çocuğun okul ortamında iletişim kurmasını kolaylaştırır.",
    },
    {
      icon: Users,
      category: "Aile Bütçesine Katkı",
      title: "Aile Üzerindeki Mali Yükü Azaltır",
      description: "SGK desteği, çocuğun işitme cihazı maliyetinin önemli bir kısmının karşılanmasına yardımcı olur.",
    },
    {
      icon: ShieldCheck,
      category: "Şeffaf Süreç",
      title: "Sürecin Her Aşaması Netleştirilir",
      description: "Çocuğunuz için hangi belgelerin ve adımların gerektiği süreç boyunca açık bir şekilde anlatılır.",
    },
    {
      icon: Sparkles,
      category: "Ücretsiz Rehberlik",
      title: "Süreç Boyunca Ailenize Rehberlik Ediyoruz",
      description: "Yenidoğan taramasından cihaz uygulamasına kadar aileyle birlikte ilerliyoruz.",
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
  accentColorIconBg: "rgb(219 39 119 / 0.1)",
  accentColorHoverBorder: "rgb(219 39 119 / 0.45)",
};
