// "Kimler İçin Uygun" profile grid for the Phonak brand page
// (/markalar/phonak) — see PHONAK MASTER BLUEPRINT §6.9. Renders through
// the shared BrandPageIdealUser component. No Oticon equivalent — new,
// cross-brand-eligible pattern. Descriptions stay in "sıkça önerilir" tone,
// never "kesin sizin içindir" (PRINCIPLES.md §4 — avoid absolute/certain
// language; final decision always requires a hearing evaluation).

import { Bluetooth, Volume2, Baby, Palette, Shuffle } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const phonakIdealUser: BrandPageIdealUserContent = {
  badge: "KİMLER İÇİN UYGUN",
  heading: "Phonak Kimler İçin Uygun?",
  intro: "Aşağıdaki profiller sıkça önerilen yönlendirmelerdir; kesin karar her zaman bir işitme değerlendirmesiyle netleşir.",
  profiles: [
    {
      icon: Bluetooth,
      title: "Aktif ve Sosyal Bir Yaşam Sürenler",
      description: "Telefon, müzik ve günlük iletişimde kesintisiz bağlantı önceliğiniz ise sıkça önerilen bir seçimdir.",
      suggestedFamilies: ["Audéo"],
    },
    {
      icon: Volume2,
      title: "İleri Derece İşitme Kaybı Yaşayanlar",
      description: "Daha güçlü amplifikasyon ihtiyacı olan kullanıcılar için sıkça değerlendirilen bir ailedir.",
      suggestedFamilies: ["Naída"],
    },
    {
      icon: Baby,
      title: "Çocuğu İçin Çözüm Arayan Aileler",
      description: "Pediatrik kullanım için özel olarak geliştirilmiş, çocuklara yönelik bir ürün ailesidir.",
      suggestedFamilies: ["Sky"],
    },
    {
      icon: Palette,
      title: "Kulak İçi Estetiği Önceliklendirenler",
      description: "Kişiye özel, kulak içi yerleşimi tercih edenler için sıkça önerilir.",
      suggestedFamilies: ["Virto"],
    },
    {
      icon: Shuffle,
      title: "Tek Kulakta İşitme Kaybı Yaşayanlar",
      description: "Tek taraflı işitme kaybı için özel olarak tasarlanmış bir sistemdir.",
      suggestedFamilies: ["CROS"],
    },
  ],
  // Precomputed rgb() decomposition of #0ea5e9 — kept distinct from
  // Oticon's green accent.
  accentColor: "#0ea5e9",
  accentColorBadgeBg: "rgb(14 165 233 / 0.08)",
  accentColorBadgeBorder: "rgb(14 165 233 / 0.35)",
  accentColorBadgeText: "#0369a1",
  accentColorIconBg: "rgb(14 165 233 / 0.1)",
};
