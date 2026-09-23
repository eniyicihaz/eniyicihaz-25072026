// "Kimler İşitme Testi Yaptırmalı?" section for the /degerlendirme/
// ucretsiz-isitme-testi page. Reuses the shared BrandPageIdealUser
// component in its original candidacy sense — everyday recognizable
// signs that a hearing test is worth getting, framed as illustrative
// examples rather than a self-diagnosis checklist, consistent with the
// İhtiyacınıza Göre series' own health-content discipline.

import { Volume2, MessageCircle, Users, Calendar, AlertCircle } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const ucretsizIsitmeTestiIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İŞİTME TESTİ YAPTIRMALI?",
  heading: "Kimler İşitme Testi Yaptırmalı?",
  intro: "Aşağıdaki örnekler sıkça karşılaşılan işaretlerdir; kesin değerlendirme her zaman bir işitme testiyle netleşir.",
  profiles: [
    {
      icon: Volume2,
      title: "Televizyon veya Radyo Sesini Sıkça Yükseltenler",
      description: "Diğer kişilere göre daha yüksek sesle televizyon izleme alışkanlığı, işitme testi yaptırmak için bir işaret olabilir.",
      suggestedFamilies: ["Ücretsiz İşitme Testi"],
    },
    {
      icon: MessageCircle,
      title: "\"Ne Dedin?\" Sorusunu Sıkça Tekrarlayanlar",
      description: "Konuşmaları sık sık tekrar ettirme ihtiyacı, işitme durumunuzun değerlendirilmesi gerektiğine işaret edebilir.",
      suggestedFamilies: ["Ücretsiz İşitme Testi"],
    },
    {
      icon: Users,
      title: "Kalabalık Ortamlarda Konuşmayı Takip Etmekte Zorlananlar",
      description: "Gürültülü ortamlarda konuşmaları takip etmekte zorlanan kullanıcılar için işitme testi önerilir.",
      suggestedFamilies: ["Ücretsiz İşitme Testi"],
    },
    {
      icon: Calendar,
      title: "Belirli Aralıklarla Düzenli Kontrol Yaptırmak İsteyenler",
      description: "40 yaş üzeri kullanıcılar için düzenli işitme kontrolleri sıkça önerilir.",
      suggestedFamilies: ["Periyodik İşitme Kontrolü"],
    },
    {
      icon: AlertCircle,
      title: "Ailesinde İşitme Kaybı Öyküsü Olanlar",
      description: "Ailesinde işitme kaybı bulunan kullanıcılar için erken değerlendirme faydalı olabilir.",
      suggestedFamilies: ["Erken Değerlendirme"],
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
  accentColorIconBg: "rgb(8 145 178 / 0.1)",
  // Premium card treatment for this section only (see
  // BrandPageIdealUser's `premium` field) — reuses this same accent
  // color at different opacities, no new colors introduced.
  premium: true,
  accentColorBorder: "rgb(8 145 178 / 0.35)",
  accentColorIconBgHover: "rgb(8 145 178 / 0.18)",
};
