// "Yeni Teknolojilerin Sunduğu Faydalar" bento section for the
// /blog/yeni-teknolojiler page — repurposed as the genuine benefits of
// modern hearing aid technology, rather than product advantages.
// Renders through the shared BrandPageAdvantages component — items
// must be exactly 5 entries: [slot1, slot2, slot3(wide), slot4(wide),
// slot5(wide)], same contract every brand/category page's advantages
// data follows.

import { Brain, Volume2, Smartphone, Battery, Activity, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const yeniTeknolojilerAdvantages: BrandPageAdvantagesContent = {
  badge: "YENİ TEKNOLOJİLERİN FAYDALARI",
  heading: "Yeni Teknolojilerin Sunduğu Faydalar",
  intro: "Gelişen işitme cihazı teknolojilerinin günlük hayata sağladığı somut faydalar.",
  hero: {
    icon: Brain,
    category: "Akıllı Ses İşleme",
    title: "Cihaz Ortama Göre Kendini Ayarlar",
    description: "Yapay zeka destekli ses işleme, konuştuğunuz ortama göre sesi otomatik olarak optimize etmeye yardımcı olur.",
  },
  items: [
    {
      icon: Volume2,
      category: "Daha Net Konuşma Anlama",
      title: "Gürültülü Ortamlarda Konuşmayı Ön Plana Çıkarır",
      description: "Gelişmiş gürültü engelleme teknolojileri, kalabalık ortamlarda konuşmayı takip etmeyi kolaylaştırır.",
    },
    {
      icon: Smartphone,
      category: "Kolay Kontrol",
      title: "Cihazınızı Telefonunuzdan Yönetirsiniz",
      description: "Akıllı telefon uygulamaları üzerinden ses seviyesi ve program ayarlarını kolayca değiştirebilirsiniz.",
    },
    {
      icon: Battery,
      category: "Pratik Kullanım",
      title: "Şarj Edilebilir Pil Seçenekleriyle Kolaylık",
      description: "Şarj edilebilir modeller, pil değiştirme ihtiyacını ortadan kaldırarak günlük kullanımı kolaylaştırır.",
    },
    {
      icon: Activity,
      category: "Ek Sağlık Özellikleri",
      title: "Bazı Modeller Sağlık Takibi de Sunar",
      description: "Güncel modellerin bir kısmı, aktivite takibi gibi ek sağlık özellikleri de barındırabiliyor.",
    },
    {
      icon: Sparkles,
      category: "Kişiye Özel Yönlendirme",
      title: "Size Uygun Teknolojiyi Birlikte Belirliyoruz",
      description: "Hangi teknolojik özelliklerin sizin için öncelikli olduğunu randevunuzda birlikte değerlendiriyoruz.",
    },
  ],
  accentColor: "#2563eb",
  accentColorBadgeBg: "rgb(37 99 235 / 0.08)",
  accentColorBadgeBorder: "rgb(37 99 235 / 0.35)",
  accentColorBadgeText: "#1d4ed8",
  accentColorIconBg: "rgb(37 99 235 / 0.1)",
  accentColorHoverBorder: "rgb(37 99 235 / 0.45)",
};
