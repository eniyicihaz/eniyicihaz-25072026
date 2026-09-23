// "Dikkat Edilmesi Gerekenler" section for the /degerlendirme/
// cocuk-isitme-testi page. Reuses the shared BrandPageIdealUser
// component, visually differentiated by the design system's own
// --color-warning token (#d97706). Item 2 is deliberately hedged given
// the pediatric subject: developmental variation is normal, and parents
// are directed to a professional rather than a self-assessment.

import { AlertTriangle, Stethoscope, Ear, RefreshCcw, Users } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const cocukIsitmeTestiConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Çocuk İşitme Testinde Dikkat Edilmesi Gereken Noktalar",
  intro: "Erken değerlendirme faydalı bir adımdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Ani Gelişen Şikayetlerde Vakit Kaybetmeden Değerlendirme Önemlidir",
      description: "Çocuğunuzda aniden gelişen bir işitme şikayeti fark ederseniz, vakit kaybetmeden bir uzmana başvurmanız önerilir.",
      suggestedFamilies: ["Acil Değerlendirme"],
    },
    {
      icon: Stethoscope,
      title: "Gelişimsel Farklılıklar Normal Olabilir",
      description: "Her çocuğun gelişim hızı farklıdır; şüpheleriniz varsa kendi kendine değerlendirme yapmak yerine bir uzmana danışmanız önerilir.",
      suggestedFamilies: ["Uzman Değerlendirmesi"],
    },
    {
      icon: Ear,
      title: "Kulak Kiri veya Enfeksiyon Test Sonucunu Etkileyebilir",
      description: "Kulak kiri birikimi veya aktif bir enfeksiyon, test sonuçlarını geçici olarak etkileyebilir.",
      suggestedFamilies: ["Kulak Muayenesi"],
    },
    {
      icon: RefreshCcw,
      title: "Tek Bir Test Sonucu Yeterli Olmayabilir",
      description: "Bazı durumlarda, güvenilir bir sonuç için testin farklı zamanlarda tekrarlanması gerekebilir.",
      suggestedFamilies: ["Periyodik Kontrol"],
    },
    {
      icon: Users,
      title: "İşbirliği Düzeyi Sonucu Etkileyebilir",
      description: "Küçük çocuklarda test sırasındaki işbirliği düzeyi, sonuçların güvenilirliğini etkileyebilir.",
      suggestedFamilies: ["Yaşa Uygun Yöntem Seçimi"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
