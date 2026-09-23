// "Avantajları" bento section for the /servis-bakim/onarim-takibi
// page — framed as the genuine advantages of transparent status
// tracking. Renders through the shared BrandPageAdvantages component —
// items must be exactly 5 entries: [slot1, slot2, slot3(wide),
// slot4(wide), slot5(wide)], same contract every brand/category page's
// advantages data follows.

import { PackageSearch, Bell, Clock, MessageCircle, Users2, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const onarimTakibiAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Onarım Takibinin Sunduğu Avantajlar",
  intro: "Sürecinizi şeffaf bir şekilde takip edebilmenin nedenleri.",
  hero: {
    icon: PackageSearch,
    category: "Aşama Aşama Görünürlük",
    title: "Cihazınızın Nerede Olduğunu Bilirsiniz",
    description: "Teslim alma, teşhis, onarım ve kalite kontrolü aşamalarını adım adım takip edebilirsiniz.",
  },
  items: [
    {
      icon: Bell,
      category: "Otomatik Bildirim",
      title: "Aşama Değiştiğinde Haberdar Olursunuz",
      description: "Önemli aşamalarda SMS veya WhatsApp üzerinden bilgilendirilirsiniz.",
    },
    {
      icon: Clock,
      category: "Net Beklenti",
      title: "Tahmini Süre Baştan Paylaşılır",
      description: "Onarım sürecinin ne kadar süreceğine dair genel bir beklenti sizinle paylaşılır.",
    },
    {
      icon: MessageCircle,
      category: "Kolay Erişim",
      title: "İstediğiniz Zaman Bilgi Alabilirsiniz",
      description: "Sürecin herhangi bir noktasında bizi arayarak güncel durumu öğrenebilirsiniz.",
    },
    {
      icon: Users2,
      category: "Aynı Ekip",
      title: "Süreci Bilen Bir Ekiple Muhatap Olursunuz",
      description: "Cihazınızın durumunu bilen aynı klinik ekibiyle iletişim kurarsınız.",
    },
    {
      icon: Sparkles,
      category: "Ücretsiz",
      title: "Onarım Takibi Herhangi Bir Ücret Talep Etmez",
      description: "Onarım takibi hizmeti, herhangi bir ücret talep edilmeden sunulur.",
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
  accentColorIconBg: "rgb(192 38 211 / 0.1)",
  accentColorHoverBorder: "rgb(192 38 211 / 0.45)",
};
