// FAQ hub for the /servis-bakim/onarim-takibi page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Same honest, mechanism-focused
// answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const onarimTakibiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Onarım Takibi Hakkında Merak Edilenler",
  intro: "Bildirimler, süre ve gecikme durumları konusunda en çok sorulan sorular.",
  decisionCard: {
    title: "Onarımdaki Cihazınızın Durumunu Öğrenmek İster misiniz?",
    points: ["Aşama aşama görünürlük", "SMS/WhatsApp bildirimleri", "Tahmini teslim süresi", "Doğrudan iletişim"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Cihazımın durumunu nasıl öğrenebilirim?",
          answer:
            "Önemli aşamalarda otomatik bildirim alırsınız; ayrıca istediğiniz zaman bizi arayarak güncel durumu öğrenebilirsiniz.",
        },
        {
          question: "Bildirimleri hangi kanaldan alırım?",
          answer:
            "Tercihinize göre SMS veya WhatsApp üzerinden bilgilendirilebilirsiniz.",
        },
      ],
    },
    {
      label: "Süre",
      items: [
        {
          question: "Onarım sürecim ne kadar sürer?",
          answer:
            "Süre, onarımın yerinde mi yoksa üretici servisinde mi yapıldığına göre değişir; tahmini süre teslim alma sırasında sizinle paylaşılır.",
        },
        {
          question: "Beklenenden uzun sürerse ne olur?",
          answer:
            "Beklenmedik bir gecikme olması durumunda sizinle iletişime geçilir; siz de istediğiniz zaman bizi arayarak durumu sorabilirsiniz.",
        },
      ],
    },
    {
      label: "Teslim",
      items: [
        {
          question: "Cihazım hazır olduğunda nasıl haberdar olurum?",
          answer:
            "Cihazınız teslime hazır olduğunda bildirim alırsınız ve teslim alma seçenekleri sizinle paylaşılır.",
        },
      ],
    },
    {
      label: "Diğer",
      items: [
        {
          question: "Onarım takibi ücretli midir?",
          answer:
            "Hayır; onarım takibi herhangi bir ücret talep edilmeden sunulan bir hizmettir.",
        },
      ],
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
