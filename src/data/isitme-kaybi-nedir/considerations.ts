// "Ne Zaman Uzmana Başvurulmalı?" section for the /rehberler/
// isitme-kaybi-nedir page. Reuses the shared BrandPageIdealUser
// component, visually differentiated by the design system's own
// --color-warning token (#d97706). The first item is this page's key
// safety flag: sudden hearing loss is a genuine audiological emergency
// requiring prompt care, echoing the same urgent-care discipline used
// throughout the Değerlendirme series.

import { AlertTriangle, Ear, Baby, Volume2, Stethoscope } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const isitmeKaybiNedirConsiderations: BrandPageIdealUserContent = {
  badge: "NE ZAMAN UZMANA BAŞVURULMALI?",
  heading: "Hangi Durumlarda Vakit Kaybetmeden Uzmana Başvurulmalı?",
  intro: "Aşağıdaki durumlar, vakit kaybetmeden bir uzmana başvurmanın önemli olduğu belirtileri yansıtır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Ani Başlayan İşitme Kaybı Acil Bir Durumdur",
      description: "Aniden (saatler veya bir iki gün içinde) gelişen işitme kaybı, vakit kaybetmeden bir KBB uzmanına başvurmanızı gerektiren acil bir durumdur.",
      suggestedFamilies: ["Acil Değerlendirme"],
    },
    {
      icon: Ear,
      title: "Kulak Ağrısı, Akıntı veya Baş Dönmesi Eşlik Ediyorsa",
      description: "İşitme şikayetinize kulak ağrısı, akıntı veya baş dönmesi gibi belirtiler eşlik ediyorsa, öncelikli bir değerlendirme önerilir.",
      suggestedFamilies: ["Eşlik Eden Belirtiler"],
    },
    {
      icon: Baby,
      title: "Çocuklarda Gecikmiş Konuşma Gelişimi",
      description: "Çocuğunuzda konuşma gelişiminde beklenenden farklı bir gecikme fark ederseniz, işitme değerlendirmesi önerilir.",
      suggestedFamilies: ["Çocuklarda Değerlendirme"],
    },
    {
      icon: Volume2,
      title: "Tinnitus Tek Başına İşitme Kaybı Anlamına Gelmez",
      description: "Kulak çınlaması (tinnitus), işitme kaybıyla birlikte görülebilse de tek başına kesin bir işitme kaybı göstergesi değildir; yine de değerlendirilmesi önerilir.",
      suggestedFamilies: ["Tinnitus Değerlendirmesi"],
    },
    {
      icon: Stethoscope,
      title: "Kendi Kendine Tanı Koymaya Çalışmayın",
      description: "Bu sayfadaki bilgiler genel bir çerçeve sunar; kesin tanı ve derece yalnızca bir odyometrist tarafından belirlenebilir.",
      suggestedFamilies: ["Uzman Değerlendirmesi"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
