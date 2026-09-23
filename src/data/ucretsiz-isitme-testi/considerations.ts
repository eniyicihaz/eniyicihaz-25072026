// "Dikkat Edilmesi Gerekenler" section for the /degerlendirme/
// ucretsiz-isitme-testi page. Reuses the shared BrandPageIdealUser
// component, visually differentiated from the "Kimler İşitme Testi
// Yaptırmalı?" section above by using the design system's own
// --color-warning token (#d97706). This is a health-safety-critical
// section given the page's clinical subject: item 1 flags sudden-onset
// hearing loss as needing urgent ENT (KBB) care rather than a routine
// test appointment, the same urgent-care discipline used throughout the
// İhtiyacınıza Göre series; item 2 makes clear the test doesn't replace
// a medical exam.

import { AlertTriangle, Stethoscope, Ear, Baby, Calendar } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const ucretsizIsitmeTestiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "İşitme Testi Öncesinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Ücretsiz işitme testi faydalı bir adımdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Ani Başlayan İşitme Kaybı Acil Değerlendirme Gerektirir",
      description: "Aniden gelişen işitme kaybında, ücretsiz test randevusu beklemeden vakit kaybetmeden bir kulak burun boğaz uzmanına başvurulmalıdır.",
      suggestedFamilies: ["Acil KBB Değerlendirmesi"],
    },
    {
      icon: Stethoscope,
      title: "Test, Tıbbi Muayenenin Yerini Almaz",
      description: "İşitme testi, kulak enfeksiyonu veya diğer tıbbi durumların teşhisi için bir kulak burun boğaz muayenesinin yerini tutmaz.",
      suggestedFamilies: ["KBB Muayenesi"],
    },
    {
      icon: Ear,
      title: "Kulak Ağrısı veya Akıntı Varsa Öncelik KBB'ye Verilmelidir",
      description: "Kulak ağrısı, akıntı veya kanama gibi belirtiler varsa, işitme testinden önce bir KBB uzmanına başvurulması önerilir.",
      suggestedFamilies: ["Öncelikli KBB Değerlendirmesi"],
    },
    {
      icon: Baby,
      title: "Çocuklarda Test Süreci Farklılık Gösterebilir",
      description: "Çocuklar için işitme testi süreci yaşa uygun yöntemlerle farklılık gösterebilir.",
      suggestedFamilies: ["Çocuk İşitme Testi"],
    },
    {
      icon: Calendar,
      title: "Tek Bir Test Kesin Sonuç Anlamına Gelmeyebilir",
      description: "Bazı durumlarda işitme durumunun netleşmesi için tekrar test veya ek değerlendirme gerekebilir.",
      suggestedFamilies: ["Periyodik Kontrol"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
