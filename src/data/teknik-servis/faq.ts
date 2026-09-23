// FAQ hub for the /servis-bakim/teknik-servis page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Same honest, mechanism-focused
// answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const teknikServisFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Teknik Servis Hakkında Merak Edilenler",
  intro: "Süreç, süre ve maliyet konusunda en çok sorulan sorular.",
  decisionCard: {
    title: "Teknik Servis Desteği Almak İster misiniz?",
    points: ["Ücretsiz yerinde teşhis", "Orijinal yedek parça", "Yetkili servis ağı", "Takip edilebilir süreç"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Teknik servis için randevu almam gerekir mi?",
          answer:
            "Öncesinde bizimle iletişime geçmeniz, sorununuzu daha hızlı değerlendirmemize yardımcı olur.",
        },
        {
          question: "Yerinde teşhis ücretli midir?",
          answer:
            "Hayır; kliniğimizdeki ilk teşhis değerlendirmesi herhangi bir ücret talep edilmeden yapılır.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Onarım ne kadar sürer?",
          answer:
            "Yerinde çözülebilen sorunlar genellikle kısa sürede tamamlanır; üretici servisine gönderim gerektiren durumlar birkaç iş günü sürebilir.",
        },
        {
          question: "Onarım sürecimi nasıl takip edebilirim?",
          answer:
            "Cihazınız teknik servise alındığında bir takip kaydı oluşturulur ve sürecin aşamaları hakkında sizinle iletişime geçilir.",
        },
      ],
    },
    {
      label: "Maliyet ve Garanti",
      items: [
        {
          question: "Onarım ücretli mi?",
          answer:
            "Garanti kapsamındaki sorunlar genellikle ücretsizdir; garanti dışı onarımlar için işleme başlamadan önce tahmini maliyet sizinle paylaşılır.",
        },
        {
          question: "Su teması garanti kapsamında mıdır?",
          answer:
            "Su teması gibi kullanıcı kaynaklı hasarlar, genellikle garanti kapsamı dışında kalabilir; kesin durum teşhis sonrası netleşir.",
        },
      ],
    },
    {
      label: "Sırasında",
      items: [
        {
          question: "Onarım süresince yedek bir cihaz kullanabilir miyim?",
          answer:
            "Yedek cihaz imkânı stok durumuna göre değerlendirilebilir.",
        },
      ],
    },
  ],
  accentColor: "#dc2626",
  accentColorBadgeBg: "rgb(220 38 38 / 0.08)",
  accentColorBadgeBorder: "rgb(220 38 38 / 0.35)",
  accentColorBadgeText: "#b91c1c",
};
