// "Katkı Payı Bilgisi Kimler İçin Önemlidir?" section for the
// /sgk/katki-payi page. Reuses the shared BrandPageIdealUser component
// in its original candidacy sense.

import { Briefcase, HeartPulse, Baby, Calculator, ShieldQuestion } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const sgkKatkiPayiIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN ÖNEMLİDİR?",
  heading: "Katkı Payı Bilgisi Kimler İçin Önemlidir?",
  intro: "Aşağıdaki profiller, katkı payı hesaplamasının sıkça merak edildiği kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: Briefcase,
      title: "Aktif Sigortalı Çalışanlar",
      description: "SGK güvencesine sahip çalışan kullanıcılar için katkı payı hesaplaması önem taşır.",
      suggestedFamilies: ["Çalışan Kategorisi"],
    },
    {
      icon: HeartPulse,
      title: "Emekli Vatandaşlar",
      description: "Emekliler için destek tutarı ve maaştan kesinti oranı, bütçe planlamasında önemli bir faktördür.",
      suggestedFamilies: ["Emekli Kategorisi"],
    },
    {
      icon: Baby,
      title: "Çocuk Hastaların Aileleri",
      description: "Çocuklarda SGK destek tutarları farklılık gösterebildiğinden, aileler için bu bilgi önemlidir.",
      suggestedFamilies: ["Çocuklarda SGK"],
    },
    {
      icon: Calculator,
      title: "Bütçesini Önceden Planlamak İsteyenler",
      description: "Cihaz alımı öncesinde ödeyeceği tutarı tahmin etmek isteyen kullanıcılar için faydalıdır.",
      suggestedFamilies: ["Bütçe Planlaması"],
    },
    {
      icon: ShieldQuestion,
      title: "SGK Desteğinden İlk Kez Yararlanacaklar",
      description: "SGK sürecine yeni başlayan kullanıcılar için katkı payı kavramını netleştirir.",
      suggestedFamilies: ["İlk Kez Başvuranlar"],
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
  accentColorIconBg: "rgb(22 163 74 / 0.1)",
};
