// FAQ hub for the /degerlendirme/odyometri page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Same honest, mechanism-focused
// answer style as Ücretsiz İşitme Testi's faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const odyometriFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Odyometri Hakkında Merak Edilenler",
  intro: "Test süreci, sonuçların yorumlanması ve sıklığı hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Odyometri Randevusu Almak İster misiniz?",
    points: ["Kalibre edilmiş profesyonel ekipman", "Uzman odyometrist eşliğinde test", "Aynı gün odyogram sonucu", "Ücretsiz"],
    ctaLabel: "Hemen Randevu Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Odyometri nedir?",
          answer:
            "İşitme duyarlılığınızı ölçen ve sonuçları bir odyogram üzerinde kaydeden temel bir işitme testidir.",
        },
        {
          question: "Odyometri ağrılı mıdır?",
          answer:
            "Hayır; odyometri tamamen ağrısız ve non-invaziv bir testtir.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Odyometri ne kadar sürer?",
          answer:
            "Süre kişiden kişiye değişebilir; genellikle kısa bir süre içinde tamamlanır.",
        },
        {
          question: "Hava yolu ve kemik yolu testi neden ikisi de yapılır?",
          answer:
            "İki testin karşılaştırılması, işitme kaybının türünün (iletim tipi veya sensörinöral) belirlenmesine yardımcı olur.",
        },
      ],
    },
    {
      label: "Sonuçlar",
      items: [
        {
          question: "Odyogramı nasıl okurum?",
          answer:
            "Odyogram, frekansları yatay eksende, ses şiddetini dikey eksende gösterir; sonuçlarınızın anlamı görüşme sırasında odyometristiniz tarafından detaylıca açıklanır.",
        },
        {
          question: "Sonuçlarım normal çıkarsa ne olur?",
          answer:
            "Sonuçlarınız normal aralıkta ise, şikayetleriniz devam ediyorsa farklı bir değerlendirme veya KBB muayenesi önerilebilir.",
        },
      ],
    },
    {
      label: "Sıklık",
      items: [
        {
          question: "Ne sıklıkla odyometri yaptırmalıyım?",
          answer:
            "Sıklık, yaşınıza, mesleğinize ve mevcut işitme durumunuza göre değişir; odyometristiniz size uygun bir takip sıklığı önerebilir.",
        },
      ],
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
