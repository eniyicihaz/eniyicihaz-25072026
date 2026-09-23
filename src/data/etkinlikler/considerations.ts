// "Dikkat Edilmesi Gerekenler" section for the /blog/etkinlikler page.
// Reuses the shared BrandPageIdealUser component, visually
// differentiated by the design system's own --color-warning token
// (#d97706). The first item is this page's key accuracy flag —
// explicitly states no specific event dates are published here and
// directs readers to call for the current schedule. See hero.ts for
// the full rationale.

import { AlertTriangle, CalendarDays, MapPin, Building2, Phone } from "lucide-astro";
import type { BrandPageIdealUserContent } from "../../components/brand-page/BrandPageIdealUser/BrandPageIdealUser.astro";

export const etkinliklerConsiderations: BrandPageIdealUserContent = {
  badge: "DİKKAT EDİLMESİ GEREKENLER",
  heading: "Etkinlikler Hakkında Dikkat Edilmesi Gereken Noktalar",
  intro: "Etkinlik süreci net bir çerçeveye sahiptir; yine de göz önünde bulundurulması gereken birkaç önemli nokta vardır.",
  profiles: [
    {
      icon: AlertTriangle,
      title: "Bu Sayfada Belirli Bir Etkinlik Tarihi Paylaşılmaz",
      description: "Etkinlik takvimimiz zaman içinde değişebildiğinden, güncel ve planlanan etkinliklerimiz için bizi aramanızı öneririz.",
      suggestedFamilies: ["Güncel Takvim"],
    },
    {
      icon: CalendarDays,
      title: "Etkinlikler Belirli Bir Tarihte Gerçekleşir",
      description: "Etkinliklerin tarihi, yeri ve kapsamı önceden planlanır ve dönemsel olarak değişebilir.",
      suggestedFamilies: ["Tarih ve Yer"],
    },
    {
      icon: MapPin,
      title: "Etkinlikler Belirli Bölgelerde Düzenlenebilir",
      description: "Etkinliklerimiz genellikle hizmet bölgemiz olan Darıca, Gebze ve Çayırova çevresinde planlanır.",
      suggestedFamilies: ["Bölge"],
    },
    {
      icon: Building2,
      title: "Kurumsal İşbirlikleri Önceden Planlanmalıdır",
      description: "Okul veya kurum işbirliği talepleriniz için önceden bizimle iletişime geçmenizi öneririz.",
      suggestedFamilies: ["Kurumsal İşbirliği"],
    },
    {
      icon: Phone,
      title: "En Güncel Bilgi İçin Bizi Arayın",
      description: "Etkinlikler hakkında en doğru ve güncel bilgiyi telefon veya WhatsApp üzerinden teyit etmenizi öneririz.",
      suggestedFamilies: ["Doğrudan İletişim"],
    },
  ],
  accentColor: "#d97706",
  accentColorBadgeBg: "rgb(217 119 6 / 0.08)",
  accentColorBadgeBorder: "rgb(217 119 6 / 0.35)",
  accentColorBadgeText: "#b45309",
  accentColorIconBg: "rgb(217 119 6 / 0.12)",
};
