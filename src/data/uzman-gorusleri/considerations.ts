// "Dikkat Edilmesi Gerekenler" section for the /blog/uzman-gorusleri
// page. Reuses the shared BrandPageIdealUser component, visually
// differentiated by the design system's own --color-warning token
// (#d97706). Carries the session's established health-content safety
// discipline: self-diagnosis disclaimer and the sudden-hearing-loss
// urgent-care flag (same pattern as isitme-kaybi-nedir), since this
// page discusses hearing health topics in general terms.

import { AlertTriangle, Stethoscope, MessageSquareText, EarOff, ShieldQuestion } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const uzmanGorusleriConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Bu Bilgileri Okurken Dikkat Edilmesi Gerekenler",
  intro: "Genel bilgiler faydalı bir başlangıç noktasıdır; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Genel Bilgi Kişisel Tanının Yerini Tutmaz",
      description: "Bu sayfadaki bilgiler genel bilgilendirme amaçlıdır; kendi durumunuz için mutlaka bir uzman değerlendirmesi gereklidir.",
      suggestedFamilies: ["Genel Bilgi"],
    },
    {
      icon: EarOff,
      title: "Ani İşitme Kaybı Acil Durumdur",
      description: "Aniden başlayan bir işitme kaybı yaşıyorsanız, vakit kaybetmeden bir KBB uzmanına başvurmanız önemlidir.",
      suggestedFamilies: ["Acil Durum"],
    },
    {
      icon: Stethoscope,
      title: "Herkesin Durumu Farklıdır",
      description: "Genel eğilimler bilgilendirici olsa da, sizin durumunuz kendine özgü bir değerlendirme gerektirebilir.",
      suggestedFamilies: ["Bireysel Değerlendirme"],
    },
    {
      icon: MessageSquareText,
      title: "İkinci Görüş Almaktan Çekinmeyin",
      description: "Önemli bir karar öncesinde ikinci bir uzman görüşü almak, doğru karar vermenize yardımcı olabilir.",
      suggestedFamilies: ["İkinci Görüş"],
    },
    {
      icon: ShieldQuestion,
      title: "Emin Olmadığınız Bilgiyi Bize Sorun",
      description: "Duyduğunuz bir bilginin doğruluğundan emin değilseniz, doğrulamak için bizimle iletişime geçebilirsiniz.",
      suggestedFamilies: ["Doğrulama"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
