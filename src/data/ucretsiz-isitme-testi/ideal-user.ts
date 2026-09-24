// "Kimler İşitme Testi Yaptırmalı?" — redesign plan §2, Bölüm 4.
// Renders through the shared BrandPageIdealUser component (unchanged,
// its grid is `repeat(auto-fit, minmax(220px,1fr))` — genuinely
// count-agnostic, so 7 profiles render safely without the kind of
// fixed-column break BrandPageTechEvolution has). Expanded from 5 to 7
// profiles to match the redesign's exact requested list. The page's
// closing "İşitmenizi merak ediyorsanız test için beklemeyin." CTA line
// lives in inline-sections.ts and is composed after this component in
// the page, not inside it (this component has no per-card CTA slot).
import { Volume2, Repeat, Users, Phone, MessagesSquare, CalendarClock, Settings2 } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const ucretsizIsitmeTestiIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İŞİTME TESTİ YAPTIRMALI?",
  heading: "Kimler İşitme Testi Yaptırmalı?",
  intro: "Aşağıdaki örnekler sıkça karşılaşılan işaretlerdir; kesin değerlendirme her zaman bir işitme testiyle netleşir.",
  profiles: [
    {
      icon: Volume2,
      title: "Televizyon Sesini Sıkça Yükseltenler",
      description: "Diğer kişilere göre daha yüksek sesle televizyon veya radyo dinleme alışkanlığı, işitme testi yaptırmak için bir işaret olabilir.",
      suggestedFamilies: ["Ücretsiz İşitme Testi"],
    },
    {
      icon: Repeat,
      title: "Konuşmaları Sık Sık Tekrar Ettirenler",
      description: "Konuşmaları sık sık tekrar ettirme ihtiyacı, işitme durumunuzun değerlendirilmesi gerektiğine işaret edebilir.",
      suggestedFamilies: ["Ücretsiz İşitme Testi"],
    },
    {
      icon: Users,
      title: "Kalabalıkta Konuşmaları Anlamakta Zorlananlar",
      description: "Gürültülü ortamlarda konuşmaları takip etmekte zorlanan kullanıcılar için işitme testi önerilir.",
      suggestedFamilies: ["Ücretsiz İşitme Testi"],
    },
    {
      icon: Phone,
      title: "Telefon Görüşmelerinde Zorlananlar",
      description: "Telefon görüşmelerinde karşı tarafı anlamakta zorlanmak, işitme testiyle değerlendirilmesi faydalı olan bir durumdur.",
      suggestedFamilies: ["Ücretsiz İşitme Testi"],
    },
    {
      icon: MessagesSquare,
      title: "Yakınları Tarafından İşitme Konusunda Uyarılanlar",
      description: "Aile üyeleri veya yakın çevresi tarafından işitme konusunda uyarılan kullanıcıların bir test yaptırması faydalı olabilir.",
      suggestedFamilies: ["Ücretsiz İşitme Testi"],
    },
    {
      icon: CalendarClock,
      title: "Uzun Süredir İşitmesini Kontrol Ettirmeyenler",
      description: "40 yaş üzeri kullanıcılar için düzenli işitme kontrolleri sıkça önerilir.",
      suggestedFamilies: ["Periyodik İşitme Kontrolü"],
    },
    {
      icon: Settings2,
      title: "İşitme Cihazı Kullanıp Ayar Kontrolüne İhtiyaç Duyanlar",
      description: "Mevcut işitme cihazınızın ayarlarının güncel ihtiyaçlarınıza uygun olup olmadığını kontrol ettirebilirsiniz.",
      suggestedFamilies: ["Cihaz Ayar Kontrolü"],
    },
  ],
  premium: true,
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
  accentColorIconBg: "rgb(8 145 178 / 0.1)",
};
