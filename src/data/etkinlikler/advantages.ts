// "Etkinlik Kategorilerinin Faydaları" bento section for the
// /blog/etkinlikler page — repurposed as the general categories of
// community-event benefits, rather than product advantages. Renders
// through the shared BrandPageAdvantages component — items must be
// exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows. No specific dates — see hero.ts for the rationale.

import { Megaphone, School, HeartHandshake, Stethoscope, Building2, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const etkinliklerAdvantages: BrandPageAdvantagesContent = {
  badge: "ETKİNLİK KATEGORİLERİNİN FAYDALARI",
  heading: "Etkinlik Kategorilerimizin Sunduğu Faydalar",
  intro: "Dönem dönem katılım gösterdiğimiz etkinlik kategorilerinin sağlayabileceği genel faydalar.",
  hero: {
    icon: Megaphone,
    category: "Farkındalık",
    title: "İşitme Sağlığı Farkındalığını Artırıyoruz",
    description: "Farkındalık etkinlikleri, toplumda işitme sağlığı konusunda bilinç oluşturmaya katkı sağlar.",
  },
  items: [
    {
      icon: School,
      category: "Okul Taramaları",
      title: "Öğrencilerde Erken Fark Etmeye Katkı",
      description: "Okullarla yapılan işbirlikleri, öğrencilerde olası işitme kayıplarının erken fark edilmesine katkı sağlayabilir.",
    },
    {
      icon: HeartHandshake,
      category: "Yaşlı Bakımı",
      title: "Yaşlı Bakım Merkezlerinde Bilgilendirme",
      description: "Bakım merkezi sakinlerine yönelik bilgilendirme etkinlikleri düzenleyebiliyoruz.",
    },
    {
      icon: Stethoscope,
      category: "Ücretsiz Test Günleri",
      title: "Toplu Değerlendirme İmkânı",
      description: "Belirli günlerde toplu işitme değerlendirmesi imkânı sunabiliyoruz.",
    },
    {
      icon: Building2,
      category: "Kurumsal İşbirliği",
      title: "Kurumlarla Birlikte Bilgilendirme",
      description: "İş yerleri ve kurumlarla birlikte çalışanlara yönelik bilgilendirme etkinlikleri düzenleyebiliyoruz.",
    },
    {
      icon: Sparkles,
      category: "Güncel Bilgi",
      title: "Bölgenizdeki Etkinlikleri Öğrenin",
      description: "Bölgenizde planlanan bir etkinlik olup olmadığını öğrenmek için bizi arayabilirsiniz.",
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
  accentColorIconBg: "rgb(5 150 105 / 0.1)",
  accentColorHoverBorder: "rgb(5 150 105 / 0.45)",
};
