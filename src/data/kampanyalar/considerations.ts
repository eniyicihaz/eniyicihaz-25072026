// "Dikkat Edilmesi Gerekenler" section for the /blog/kampanyalar page.
// Reuses the shared BrandPageIdealUser component, visually
// differentiated by the design system's own --color-warning token
// (#d97706). The first item is this page's key accuracy flag —
// explicitly states no specific offer figures are published here and
// directs readers to call for the current, active campaign. See
// hero.ts for the full rationale.

import { AlertTriangle, Calendar, FileText, Users, Phone } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const kampanyalarConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Kampanyalar Hakkında Dikkat Edilmesi Gereken Noktalar",
  intro: "Kampanya süreci net bir çerçeveye sahiptir; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Bu Sayfada Belirli Bir Kampanya Oranı Paylaşılmaz",
      description: "Kampanya içerikleri zaman içinde değişebildiğinden, güncel ve aktif kampanyalarımız için bizi aramanızı öneririz.",
      suggestedFamilies: ["Güncel Kampanya"],
    },
    {
      icon: Calendar,
      title: "Kampanyalar Belirli Bir Süre İçin Geçerli Olabilir",
      description: "Kampanyaların geçerlilik süresi ve şartları dönemsel olarak değişebilir.",
      suggestedFamilies: ["Süre Sınırı"],
    },
    {
      icon: FileText,
      title: "Kampanya Şartları Randevunuzda Netleştirilir",
      description: "İlgilendiğiniz kampanyanın kapsamı ve şartları randevunuzda size açık bir şekilde anlatılır.",
      suggestedFamilies: ["Şeffaf Şartlar"],
    },
    {
      icon: Users,
      title: "Bazı Kampanyalar Belirli Koşullara Bağlı Olabilir",
      description: "Aile paketi veya sadakat kampanyaları gibi bazı fırsatlar belirli koşulları sağlamayı gerektirebilir.",
      suggestedFamilies: ["Koşullu Kampanyalar"],
    },
    {
      icon: Phone,
      title: "En Güncel Bilgi İçin Bizi Arayın",
      description: "Kampanyalar hakkında en doğru ve güncel bilgiyi telefon veya WhatsApp üzerinden teyit etmenizi öneririz.",
      suggestedFamilies: ["Doğrudan İletişim"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
