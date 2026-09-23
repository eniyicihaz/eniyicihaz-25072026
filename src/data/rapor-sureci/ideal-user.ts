// "Rapor Süreci Kimler İçin Önemlidir?" section for the
// /sgk/rapor-sureci page. Reuses the shared BrandPageIdealUser
// component in its original candidacy sense.

import { Stethoscope, RefreshCcw, Baby, ShieldQuestion, FileSearch } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const raporSureciIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN ÖNEMLİDİR?",
  heading: "Rapor Süreci Kimler İçin Önemlidir?",
  intro: "Aşağıdaki profiller, rapor sürecinin sıkça merak edildiği kullanıcı gruplarını yansıtır.",
  profiles: [
    {
      icon: Stethoscope,
      title: "Yeni İşitme Kaybı Tanısı Alanlar",
      description: "İşitme testleri sonrasında cihaz kullanımı önerilen kullanıcılar için rapor süreci ilk adımdır.",
      suggestedFamilies: ["Yeni Tanı"],
    },
    {
      icon: RefreshCcw,
      title: "Cihazını Yenileyecek Kullanıcılar",
      description: "Mevcut cihazını SGK desteğiyle yenilemek isteyenler için de güncel bir rapor gerekebilir.",
      suggestedFamilies: ["Yenileme Süreci"],
    },
    {
      icon: Baby,
      title: "Çocuk Hastaların Aileleri",
      description: "Çocuklarda rapor süreci, erken tanı ve müdahale açısından ayrı bir önem taşır.",
      suggestedFamilies: ["Çocuklarda SGK"],
    },
    {
      icon: ShieldQuestion,
      title: "SGK Sürecine Yeni Başlayanlar",
      description: "Hangi hastaneye başvuracağını ve süreci nasıl ilerleteceğini merak eden kullanıcılar için faydalıdır.",
      suggestedFamilies: ["İlk Kez Başvuranlar"],
    },
    {
      icon: FileSearch,
      title: "Rapor Durumunu Takip Edenler",
      description: "Raporunun hangi aşamada olduğunu öğrenmek isteyen kullanıcılar için süreci netleştirir.",
      suggestedFamilies: ["Durum Takibi"],
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
  accentColorIconBg: "rgb(8 145 178 / 0.1)",
};
