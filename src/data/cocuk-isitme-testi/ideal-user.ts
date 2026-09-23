// "Çocuklarda Değerlendirme Önerilen Durumlar" section for the
// /degerlendirme/cocuk-isitme-testi page. Reuses the shared
// BrandPageIdealUser component, repurposed into developmental signs
// parents might notice — framed carefully as illustrative examples
// warranting a professional evaluation, never a self-diagnosis
// checklist, given the pediatric subject.

import { Baby, MessageCircle, Volume2, AlertCircle, Users } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const cocukIsitmeTestiIdealUser: BrandPageIdealUserContent = {
  badge: "DEĞERLENDİRME ÖNERİLEN DURUMLAR",
  heading: "Çocuklarda Hangi Durumlarda Değerlendirme Önerilir?",
  intro: "Aşağıdaki örnekler sıkça karşılaşılan işaretlerdir; her çocuğun gelişimi farklıdır ve kesin değerlendirme her zaman bir uzman tarafından yapılmalıdır.",
  profiles: [
    {
      icon: Baby,
      title: "Yenidoğan Döneminde Taramadan Geçmemiş Bebekler",
      description: "Yenidoğan işitme taramasından geçmemiş bebekler için erken bir değerlendirme önerilir.",
      suggestedFamilies: ["Yenidoğan İşitme Taraması"],
    },
    {
      icon: MessageCircle,
      title: "Konuşma Gelişiminde Gecikme Yaşayan Çocuklar",
      description: "Yaşıtlarına göre konuşma gelişiminde gecikme fark edilen çocuklar için işitme değerlendirmesi önerilebilir.",
      suggestedFamilies: ["Gelişimsel Değerlendirme"],
    },
    {
      icon: Volume2,
      title: "Seslere Tepki Vermekte Gecikme Gösteren Bebekler",
      description: "Ani seslere veya kendisine seslenilmesine beklenen şekilde tepki vermeyen bebekler için değerlendirme önerilir.",
      suggestedFamilies: ["Bebeklik Dönemi Değerlendirmesi"],
    },
    {
      icon: AlertCircle,
      title: "Sık Kulak Enfeksiyonu Geçiren Çocuklar",
      description: "Sık tekrarlayan kulak enfeksiyonu öyküsü olan çocuklar için düzenli işitme kontrolü önerilebilir.",
      suggestedFamilies: ["Orta Kulak Takibi"],
    },
    {
      icon: Users,
      title: "Ailesinde İşitme Kaybı Öyküsü Olan Çocuklar",
      description: "Ailesinde işitme kaybı bulunan çocuklar için erken değerlendirme faydalı olabilir.",
      suggestedFamilies: ["Erken Değerlendirme"],
    },
  ],
  accentColor: "#f97316",
  accentColorBadgeBg: "rgb(249 115 22 / 0.08)",
  accentColorBadgeBorder: "rgb(249 115 22 / 0.35)",
  accentColorBadgeText: "#c2410c",
  accentColorIconBg: "rgb(249 115 22 / 0.1)",
};
