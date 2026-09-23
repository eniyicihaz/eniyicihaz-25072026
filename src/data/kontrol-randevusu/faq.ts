// FAQ hub for the /uygulama-ayar/kontrol-randevusu page. Renders
// through the shared BrandPageFaq component. FAQPage schema is
// generated inside the component itself from these items. Same honest,
// mechanism-focused answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const kontrolRandevusuFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Kontrol Randevusu Hakkında Merak Edilenler",
  intro: "Sıklık, kapsam ve sonraki adımlar hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Kontrol Randevusu Almak İster misiniz?",
    points: ["İşitme yeniden değerlendirmesi", "Cihaz performans kontrolü", "Fiziksel uyum kontrolü", "Ücretsiz"],
    ctaLabel: "Hemen Randevu Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Kontrol randevusu ne sıklıkla önerilir?",
          answer:
            "Genel öneri 6-12 ay aralığıdır; ancak size uygun sıklık, yaşınıza ve işitme kaybınızın derecesine göre değişebilir.",
        },
        {
          question: "Kontrol randevusu için herhangi bir şikayetim olması gerekir mi?",
          answer:
            "Hayır; kontrol randevusu, herhangi bir şikayet olmasa da önleyici amaçla planlanır.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Kontrol randevusu ne kadar sürer?",
          answer:
            "Süre, yapılan kontrol sayısına göre değişir; genellikle standart bir randevu süresi içinde tamamlanır.",
        },
        {
          question: "Kontrol sırasında ayar değişikliği yapılır mı?",
          answer:
            "Küçük güncellemeler yapılabilir; kapsamlı bir ince ayar ihtiyacı belirlenirse ayrı bir randevu önerilir.",
        },
      ],
    },
    {
      label: "Bulgular",
      items: [
        {
          question: "Kontrolde bir sorun tespit edilirse ne olur?",
          answer:
            "Tespit edilen duruma göre, kişiye özel programlama, kalıp yenileme veya teknik servis gibi ilgili bir randevu önerilir.",
        },
      ],
    },
    {
      label: "Sonrası",
      items: [
        {
          question: "Kontrol randevumu kaçırırsam ne olur?",
          answer:
            "Cihazınıza doğrudan bir zarar gelmez; ancak küçük değişikliklerin fark edilmesi gecikebilir. Uygun olduğunuzda yeni bir randevu planlayabilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#475569",
  accentColorBadgeBg: "rgb(71 85 105 / 0.08)",
  accentColorBadgeBorder: "rgb(71 85 105 / 0.35)",
  accentColorBadgeText: "#334155",
};
