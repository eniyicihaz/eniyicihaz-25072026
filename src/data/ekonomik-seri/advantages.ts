// "Avantajları" bento section for the /segmentler/ekonomik-seri page —
// framed as the genuine feature advantages of the economy tier, same
// technique Premium Seri's and Standart Seri's advantages.ts use.
// Renders through the shared BrandPageAdvantages component — items must
// be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { Wallet, Volume2, Sparkles, ShieldCheck, Users } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const ekonomikSeriAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Ekonomik Serinin Sunduğu Avantajlar",
  intro: "Ekonomik seriyi temel ihtiyaçlar için sıkça tercih edilen bir seçenek hâline getiren öne çıkan özellikler.",
  hero: {
    icon: Wallet,
    category: "Uygun Fiyat",
    title: "Sınırlı Bütçeye Uygun Bir Yatırım",
    description: "Ekonomik seri, temel işitme ihtiyaçlarını karşılarken standart ve premium serilere göre daha uygun bir fiyat sunar.",
  },
  items: [
    {
      icon: Volume2,
      category: "Temel Ses Yükseltme",
      title: "Günlük Konuşmaları Takip Etmeye Yardımcı Olur",
      description: "Ekonomik seri, günlük konuşmaları takip etmek için gerekli temel ses yükseltmeyi sağlar.",
    },
    {
      icon: Sparkles,
      category: "Sade Kullanım",
      title: "Basit ve Anlaşılır Kontrol",
      description: "Az sayıda ayar seçeneği, cihazın kullanımını kolaylaştırır.",
    },
    {
      icon: ShieldCheck,
      category: "Orijinal Güvence",
      title: "Orijinal Ürün ve Garanti Güvencesi",
      description: "Ekonomik seri modeller de diğer seriler gibi orijinal ürün ve üretici garantisiyle sunulur.",
    },
    {
      icon: Users,
      category: "Geniş Erişilebilirlik",
      title: "Daha Fazla Kullanıcıya Ulaşabilir Bir Seçenek",
      description: "Uygun fiyatı sayesinde işitme cihazına erişimi kolaylaştırabilir.",
    },
    {
      icon: Wallet,
      category: "Düşük Riskli Başlangıç",
      title: "İlk Cihaz Deneyimi İçin Uygun Bir Adım",
      description: "İşitme cihazı kullanımına yeni başlayanlar için düşük riskli bir giriş noktası sunar.",
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
  accentColorIconBg: "rgb(22 163 74 / 0.1)",
  accentColorHoverBorder: "rgb(22 163 74 / 0.45)",
};
