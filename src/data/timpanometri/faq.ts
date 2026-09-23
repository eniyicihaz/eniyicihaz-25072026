// FAQ hub for the /degerlendirme/timpanometri page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Same honest, mechanism-focused
// answer style as the two prior pages' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const timpanometriFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Timpanometri Hakkında Merak Edilenler",
  intro: "Test süreci, sonuçların yorumlanması ve çocuklarda uygulama hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Timpanometri Randevusu Almak İster misiniz?",
    points: ["Objektif orta kulak değerlendirmesi", "Hızlı ve ağrısız uygulama", "Odyometri ile birlikte değerlendirme", "Ücretsiz"],
    ctaLabel: "Hemen Randevu Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Timpanometri nedir?",
          answer:
            "Orta kulaktaki hava basıncını ve kulak zarının hareketliliğini ölçen objektif bir işitme değerlendirmesi testidir.",
        },
        {
          question: "Timpanometri ağrılı mıdır?",
          answer:
            "Hayır; test sırasında hafif bir basınç hissi olabilir ancak ağrılı değildir.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Timpanometri ne kadar sürer?",
          answer:
            "Test genellikle birkaç saniye içinde tamamlanır.",
        },
        {
          question: "Timpanometri tek başına yeterli midir?",
          answer:
            "Hayır; timpanometri genellikle odyometri ile birlikte uygulanarak daha kapsamlı bir değerlendirme sağlar.",
        },
      ],
    },
    {
      label: "Sonuçlar",
      items: [
        {
          question: "Timpanogram sonucum anormal çıkarsa ne olur?",
          answer:
            "Anormal sonuçlar durumunda, altta yatan nedenin araştırılması için bir KBB uzmanına yönlendirme yapılabilir.",
        },
      ],
    },
    {
      label: "Çocuklar",
      items: [
        {
          question: "Çocuklarda timpanometri nasıl uygulanır?",
          answer:
            "Timpanometri, aktif yanıt gerektirmediği için çocuklarda genellikle kolayca ve hızlıca uygulanabilir.",
        },
        {
          question: "Timpanometriyi ne sıklıkla tekrarlamalıyım?",
          answer:
            "Sıklık, şikayetlerinize ve odyometristinizin önerisine göre değişir.",
        },
      ],
    },
  ],
  accentColor: "#9333ea",
  accentColorBadgeBg: "rgb(147 51 234 / 0.08)",
  accentColorBadgeBorder: "rgb(147 51 234 / 0.35)",
  accentColorBadgeText: "#7e22ce",
};
