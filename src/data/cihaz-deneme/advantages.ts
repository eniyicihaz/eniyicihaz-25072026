// "Avantajları" bento section for the /uygulama-ayar/cihaz-deneme
// page — framed as the genuine advantages of a take-home trial period.
// Renders through the shared BrandPageAdvantages component — items must
// be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { ShieldCheck, Home, Scale, MessageSquare, Wallet, ThumbsUp } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const cihazDenemeAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Cihaz Deneme Sürecinin Sunduğu Avantajlar",
  intro: "Satın almadan önce deneme fırsatını değerli kılan nedenler.",
  hero: {
    icon: ShieldCheck,
    category: "Risksiz Karar",
    title: "Satın Alma Yükümlülüğü Olmadan Deneyimlersiniz",
    description: "Deneme süresi boyunca herhangi bir satın alma zorunluluğunuz bulunmaz; karar tamamen sizindir.",
  },
  items: [
    {
      icon: Home,
      category: "Gerçek Yaşam Testi",
      title: "Ev, İş ve Sosyal Ortamlarda Deneyimlersiniz",
      description: "Cihazın klinik dışında, gerçek günlük yaşamınızdaki performansını görme fırsatı bulursunuz.",
    },
    {
      icon: Scale,
      category: "Karşılaştırma İmkânı",
      title: "Farklı Modelleri Karşılaştırabilirsiniz",
      description: "Birden fazla model arasında tereddüt ediyorsanız, karşılaştırmalı bir deneme yapılabilir.",
    },
    {
      icon: MessageSquare,
      category: "Ara Kontrol Desteği",
      title: "Deneme Süresince Desteklenirsiniz",
      description: "Deneme sürecinde yaşadığınız deneyimi paylaşabileceğiniz ara kontrol seansları önerilir.",
    },
    {
      icon: Wallet,
      category: "Bütçe Güvencesi",
      title: "Emin Olmadan Bütçe Ayırmazsınız",
      description: "Cihazdan memnun kalacağınızdan emin olduktan sonra satın alma kararı verirsiniz.",
    },
    {
      icon: ThumbsUp,
      category: "Ücretsiz",
      title: "Deneme Süreci Herhangi Bir Ücret Talep Etmez",
      description: "Cihaz deneme süreci, herhangi bir ücret talep edilmeden sunulur.",
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
  accentColorIconBg: "rgb(13 148 136 / 0.1)",
  accentColorHoverBorder: "rgb(13 148 136 / 0.45)",
};
