// "Dikkat Edilmesi Gerekenler" section for the /degerlendirme/odyometri
// page. Reuses the shared BrandPageIdealUser component, visually
// differentiated by the design system's own --color-warning token
// (#d97706). Item 1 keeps the same urgent-care discipline used
// throughout the site: sudden-onset hearing loss needs urgent ENT (KBB)
// care, not a routine test appointment.

import { AlertTriangle, Ear, Volume2, Stethoscope, RefreshCcw } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const odyometriConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Odyometri Öncesinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Odyometri faydalı bir değerlendirme adımıdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Ani Başlayan İşitme Kaybında Acil Değerlendirme Önceliklidir",
      description: "Aniden gelişen işitme kaybında, rutin odyometri randevusu beklemeden bir KBB uzmanına başvurulmalıdır.",
      suggestedFamilies: ["Acil KBB Değerlendirmesi"],
    },
    {
      icon: Ear,
      title: "Kulak Kiri Sonuçları Etkileyebilir",
      description: "Aşırı kulak kiri birikimi, test sonuçlarını geçici olarak etkileyebilir; gerekirse önce temizlik önerilebilir.",
      suggestedFamilies: ["Kulak Muayenesi"],
    },
    {
      icon: Volume2,
      title: "Test Öncesi Yüksek Ses Maruziyetinden Kaçınılmalıdır",
      description: "Test öncesi kısa süreli yüksek ses maruziyeti, geçici işitme değişikliğine ve yanıltıcı sonuçlara yol açabilir.",
      suggestedFamilies: ["Test Öncesi Hazırlık"],
    },
    {
      icon: Stethoscope,
      title: "Sonuçlar Tek Başına Tanı Anlamına Gelmez",
      description: "Odyogram sonuçları, bir odyometrist tarafından diğer bulgularla birlikte değerlendirilmelidir.",
      suggestedFamilies: ["Uzman Yorumlaması"],
    },
    {
      icon: RefreshCcw,
      title: "Sonuçlar Zamanla Değişebilir",
      description: "İşitme durumu zamanla değişebileceğinden, periyodik tekrar test önerilir.",
      suggestedFamilies: ["Periyodik Kontrol"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
