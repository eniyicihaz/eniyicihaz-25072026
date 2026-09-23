// "Avantajları" bento section for the /rehberler/isitme-kaybi-nedir
// page — repurposed as the genuine benefits of early detection rather
// than product advantages, consistent with this page's educational
// genre. Renders through the shared BrandPageAdvantages component —
// items must be exactly 5 entries: [slot1, slot2, slot3(wide),
// slot4(wide), slot5(wide)], same contract every brand/category page's
// advantages data follows.

import { Sparkles, MessageCircle, Users, Briefcase, HeartPulse, Baby } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const isitmeKaybiNedirAdvantages: BrandPageAdvantagesContent = {
  badge: "ERKEN TESPİTİN FAYDALARI",
  heading: "İşitme Kaybını Erken Fark Etmenin Faydaları",
  intro: "İşitme kaybını erken fark etmek ve uygun adımı zamanında atmak, birçok açıdan faydalı olabilir.",
  hero: {
    icon: Sparkles,
    category: "Zamanında Müdahale",
    title: "Doğru Adımı Zamanında Atmanıza Yardımcı Olur",
    description: "Erken fark edilen bir işitme kaybı, uygun değerlendirme ve destek sürecinin zamanında başlamasına yardımcı olabilir.",
  },
  items: [
    {
      icon: MessageCircle,
      category: "İletişim",
      title: "Günlük İletişimi Desteklemeye Yardımcı Olabilir",
      description: "Erken değerlendirme, günlük konuşmaları takip etmekte yaşanan zorlukların azaltılmasına katkı sağlayabilir.",
    },
    {
      icon: Baby,
      category: "Çocuklarda Gelişim",
      title: "Dil ve Konuşma Gelişimini Destekleyebilir",
      description: "Çocuklarda erken tespit, dil ve konuşma gelişiminin desteklenmesine yardımcı olabilir.",
    },
    {
      icon: Users,
      category: "Sosyal Yaşam",
      title: "Sosyal Ortamlara Katılımı Kolaylaştırabilir",
      description: "İşitme güçlüğünün erken ele alınması, sosyal ortamlara katılımı desteklemeye yardımcı olabilir.",
    },
    {
      icon: Briefcase,
      category: "İş Yaşamı",
      title: "İş Performansını Desteklemeye Yardımcı Olabilir",
      description: "İş yerindeki toplantı ve görüşmelerde iletişimin desteklenmesine katkı sağlayabilir.",
    },
    {
      icon: HeartPulse,
      category: "Genel Sağlık",
      title: "Genel Yaşam Kalitesine Katkı Sağlayabilir",
      description: "İşitme sağlığının desteklenmesi, genel yaşam kalitesinin korunmasına katkıda bulunabilir.",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
  accentColorHoverBorder: "rgb(37 99 235 / 0.45)",
};
