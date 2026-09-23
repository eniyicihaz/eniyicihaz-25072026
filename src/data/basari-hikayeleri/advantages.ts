// "Genel Deneyim Kategorileri" bento section for the
// /blog/basari-hikayeleri page — repurposed as the general, aggregate
// categories of positive experience patients commonly report, rather
// than product advantages. Renders through the shared
// BrandPageAdvantages component — items must be exactly 5 entries:
// [slot1, slot2, slot3(wide), slot4(wide), slot5(wide)], same contract
// every brand/category page's advantages data follows. No named/dated
// testimonials — see hero.ts for the content-integrity rationale.

import { Users, Briefcase, PartyPopper, Shield, Smile, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const basariHikayeleriAdvantages: BrandPageAdvantagesContent = {
  badge: "GENEL DENEYİM KATEGORİLERİ",
  heading: "Sıkça Gözlemlediğimiz Olumlu Değişim Alanları",
  intro: "Kliniğimizde kullanıcılarımızın en sık paylaştığı genel deneyim kategorileri.",
  hero: {
    icon: Users,
    category: "Aile İletişimi",
    title: "Yakınlarla Daha Rahat Sohbet Edebilme",
    description: "Birçok kullanıcımız, aile içi sohbetleri ve günlük konuşmaları daha rahat takip edebildiğini paylaşıyor.",
  },
  items: [
    {
      icon: Briefcase,
      category: "İş Hayatı",
      title: "Toplantılarda ve İş Ortamında Daha Fazla Özgüven",
      description: "Konuşmaları daha net takip edebilmek, iş ortamındaki iletişimde özgüveni destekleyebiliyor.",
    },
    {
      icon: PartyPopper,
      category: "Sosyal Hayat",
      title: "Sosyal Ortamlara Daha Rahat Katılım",
      description: "Kalabalık ortamlarda konuşmaları takip edebilmek, sosyal etkinliklere katılımı kolaylaştırabiliyor.",
    },
    {
      icon: Shield,
      category: "Güvenlik ve Farkındalık",
      title: "Çevresel Seslere Karşı Artan Farkındalık",
      description: "Trafik veya ev içi uyarı sesleri gibi çevresel seslerin fark edilmesi, güvenlik açısından fayda sağlayabiliyor.",
    },
    {
      icon: Smile,
      category: "Genel Refah",
      title: "Günlük Yaşamda Daha Az Yorgunluk Hissi",
      description: "Sesleri anlamak için sürekli çaba göstermek yorucu olabilir; destekle bu çaba azalabiliyor.",
    },
    {
      icon: Sparkles,
      category: "Kişiye Özel Süreç",
      title: "Sizin İçin de Benzer Bir Deneyim Mümkün Olabilir",
      description: "Kendi deneyiminizin nasıl şekilleneceğini birlikte değerlendirmek için sizi randevuya bekleriz.",
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorIconBg: "rgb(234 88 12 / 0.1)",
  accentColorHoverBorder: "rgb(234 88 12 / 0.45)",
};
