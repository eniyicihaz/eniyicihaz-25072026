// "Avantajları" bento section for the /ihtiyaciniza-gore/
// hafif-isitme-kaybi page — framed as the advantages of addressing mild
// loss early rather than a generic device-feature list. Renders through
// the shared BrandPageAdvantages component — items must be exactly 5
// entries: [slot1, slot2, slot3(wide), slot4(wide), slot5(wide)], same
// contract every brand/category page's advantages data follows.

import { ShieldCheck, EyeOff, Brain, Users, Volume2, Sparkles } from "lucide-astro";
import type { BrandPageAdvantagesContent } from "../../components/brand-page/BrandPageAdvantages/BrandPageAdvantages.astro";

export const hafifIsitmeKaybiAdvantages: BrandPageAdvantagesContent = {
  badge: "AVANTAJLARI",
  heading: "Hafif Derecede Erken Cihazlandırmanın Avantajları",
  intro: "Hafif işitme kaybını erken dönemde değerlendirmeyi sıkça önerilen bir yaklaşım hâline getiren nedenler.",
  hero: {
    icon: ShieldCheck,
    category: "Erken Müdahale",
    title: "İletişim Kalitesini Korumaya Yardımcı Olur",
    description: "Hafif derecede bile olsa erken cihazlandırma, günlük iletişim kalitesini korumaya yardımcı olabilir.",
  },
  items: [
    {
      icon: EyeOff,
      category: "Görünürlük",
      title: "Göze Az Batan İnce Modeller",
      description: "Hafif kayıplarda sıkça tercih edilen ince RIC ve kulak içi modeller, günlük kullanımda az fark edilir.",
    },
    {
      icon: Brain,
      category: "Bilişsel Destek",
      title: "Dinleme Çabasını Azaltmaya Yardımcı Olur",
      description: "Doğru cihazlandırma, sürekli dinleme çabasının yarattığı yorgunluğu azaltmaya yardımcı olabilir.",
    },
    {
      icon: Users,
      category: "Sosyal Yaşam",
      title: "Sosyal Ortamlarda Katılımı Kolaylaştırır",
      description: "Kalabalık ortamlarda konuşmayı takip etmek daha az çaba gerektirebilir.",
    },
    {
      icon: Volume2,
      category: "Doğal Ses",
      title: "Hafif Amplifikasyonla Doğal Bir Deneyim",
      description: "Hafif kayıplarda genellikle düşük düzeyde amplifikasyon yeterli olur, bu da daha doğal bir ses deneyimi sunar.",
    },
    {
      icon: Sparkles,
      category: "Kullanım Kolaylığı",
      title: "Basit Ayarlarla Kolay Kullanım",
      description: "Hafif kayıplara yönelik modeller genellikle sade ve kullanımı kolay ayarlarla sunulur.",
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
  accentColorIconBg: "rgb(219 39 119 / 0.1)",
  accentColorHoverBorder: "rgb(219 39 119 / 0.45)",
};
