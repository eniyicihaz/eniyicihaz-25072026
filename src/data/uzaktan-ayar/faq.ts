// FAQ hub for the /uygulama-ayar/uzaktan-ayar page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Same honest, mechanism-focused
// answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const uzaktanAyarFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Uzaktan Ayar Hakkında Merak Edilenler",
  intro: "Uygunluk, oturum süreci ve güvenlik konusunda en çok sorulan sorular.",
  decisionCard: {
    title: "Uzaktan Ayar Hakkında Bilgi Almak İster misiniz?",
    points: ["Kliniğe gelmeden video görüşme", "Güvenli ve onaylı erişim", "Küçük ayar güncellemeleri", "Ücretsiz"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Uzaktan ayar için ne gerekir?",
          answer:
            "Uyumlu bir cihaz, güncel bir akıllı telefon uygulaması ve kararlı bir internet bağlantısı gerekir.",
        },
        {
          question: "Her cihaz uzaktan ayara uygun mudur?",
          answer:
            "Hayır; uygunluk, cihaz markası ve modeline göre değişir. Randevu öncesinde uygunluk kontrolü yapılır.",
        },
      ],
    },
    {
      label: "Oturum",
      items: [
        {
          question: "Uzaktan ayar oturumu ne kadar sürer?",
          answer:
            "Süre, ele alınan ayar ihtiyacına göre değişir; genellikle kısa bir video görüşmesiyle tamamlanır.",
        },
        {
          question: "Oturum sırasında kiminle görüşürüm?",
          answer:
            "Sizi tanıyan aynı klinik ekibimizden bir odyometristle görüşürsünüz.",
        },
      ],
    },
    {
      label: "Güvenlik",
      items: [
        {
          question: "Cihazıma istediğiniz zaman uzaktan erişebilir misiniz?",
          answer:
            "Hayır; erişim yalnızca önceden planlanan randevu saatinde ve sizin onayınızla gerçekleşir.",
        },
      ],
    },
    {
      label: "Sınırlar",
      items: [
        {
          question: "Her sorun uzaktan çözülebilir mi?",
          answer:
            "Hayır; fiziksel uyum sorunları veya kapsamlı yeniden programlama gibi durumlar için yüz yüze bir randevu önerilir.",
        },
        {
          question: "Uzaktan ayar sonrası sorunum devam ederse ne olur?",
          answer:
            "Bu durumda, kapsamlı bir değerlendirme için kliniğe davet edilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
