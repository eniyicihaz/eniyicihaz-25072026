// "Bu Sayfanın Faydaları" bento section for the
// /blog/sik-sorulan-sorular page — repurposed as the genuine benefits
// of a centralized FAQ directory, rather than product advantages.
// Renders through the shared BrandPageAdvantages component — items
// must be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { Search, Clock, Compass, MessageCircle, Users, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const sikSorulanSorularAdvantages: BrandPageAdvantagesContent = {
  badge: "BU SAYFANIN FAYDALARI",
  heading: "Merkezi Bir SSS Sayfasının Faydaları",
  intro: "Tüm genel soruları tek bir sayfada toplamanın sağladığı somut faydalar.",
  hero: {
    icon: Search,
    category: "Hızlı Yanıt",
    title: "Aradığınız Yanıtı Hızlıca Bulursunuz",
    description: "En sık sorulan genel soruları tek bir sayfada bularak zaman kazanırsınız.",
  },
  items: [
    {
      icon: Clock,
      category: "Zaman Tasarrufu",
      title: "Bizi Aramadan Önce Ön Bilgi Edinirsiniz",
      description: "Randevu almadan önce sürecin genel işleyişi hakkında bilgi sahibi olursunuz.",
    },
    {
      icon: Compass,
      category: "Doğru Sayfaya Yönlendirme",
      title: "Konuya Özel Sayfalara Kolayca Ulaşırsınız",
      description: "Derinlemesine bilgi almak istediğiniz konuyla ilgili doğru sayfaya yönlendirilirsiniz.",
    },
    {
      icon: MessageCircle,
      category: "Şeffaf İletişim",
      title: "Süreç Hakkında Net Bilgi Edinirsiniz",
      description: "Randevu, ücretlendirme ve süreç hakkında şeffaf ve anlaşılır bilgiye ulaşırsınız.",
    },
    {
      icon: Users,
      category: "Herkes İçin Erişilebilir",
      title: "Farklı İhtiyaçlara Göre Düzenlenmiştir",
      description: "Yeni ziyaretçiden mevcut kullanıcıya kadar farklı ihtiyaçlara uygun sorular bir arada sunulur.",
    },
    {
      icon: Sparkles,
      category: "Sorunuz mu Var?",
      title: "Bulamadığınız Sorular İçin Bize Ulaşın",
      description: "Aradığınız yanıtı burada bulamazsanız, doğrudan bizimle iletişime geçebilirsiniz.",
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
  accentColorIconBg: "rgb(2 132 199 / 0.1)",
  accentColorHoverBorder: "rgb(2 132 199 / 0.45)",
};
