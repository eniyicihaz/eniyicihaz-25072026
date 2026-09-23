// FAQ hub for the /degerlendirme/cocuk-isitme-testi page. Renders
// through the shared BrandPageFaq component. FAQPage schema is
// generated inside the component itself from these items. Same honest,
// mechanism-focused answer style as the three prior pages' faq.ts, with
// extra care in hedging developmental questions.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const cocukIsitmeTestiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Çocuk İşitme Testi Hakkında Merak Edilenler",
  intro: "Test zamanlaması, yöntemler ve gelişim hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Çocuğunuz İçin İşitme Testi Randevusu Almak İster misiniz?",
    points: ["Yaşa uygun test yöntemleri", "Aile katılımlı süreç", "Uzman odyometrist eşliğinde", "Ücretsiz"],
    ctaLabel: "Hemen Randevu Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Çocuk işitme testi ne zaman yapılmalıdır?",
          answer:
            "Yenidoğan işitme taraması doğumdan kısa süre sonra yapılır; sonrasında şüphe veya risk faktörü varsa erken değerlendirme önerilir.",
        },
        {
          question: "Yenidoğan taraması sonucu \"geçmedi\" çıkarsa ne anlama gelir?",
          answer:
            "Bu, kesin bir tanı anlamına gelmez; ileri bir değerlendirme (örneğin ABR testi) gerektiğini gösterir.",
        },
      ],
    },
    {
      label: "Yöntemler",
      items: [
        {
          question: "Bebeğim testte uyumak zorunda mı?",
          answer:
            "ABR gibi bazı testler bebeğin uykuda olmasını gerektirebilir; bu durum test öncesinde size bildirilir.",
        },
        {
          question: "Çocuğum test sırasında ağlarsa ne olur?",
          answer:
            "Test yöntemi çocuğun durumuna göre uyarlanabilir; gerekirse test farklı bir zamanda tekrarlanabilir.",
        },
      ],
    },
    {
      label: "Gelişim",
      items: [
        {
          question: "Konuşma gecikmesi her zaman işitme kaybından mı kaynaklanır?",
          answer:
            "Hayır; konuşma gecikmesinin birçok farklı nedeni olabilir, ancak işitme kaybı olasılığının değerlendirilmesi önemlidir.",
        },
      ],
    },
    {
      label: "Sonrası",
      items: [
        {
          question: "Test sonrası çocuğuma cihaz önerilirse ne olmalıyım?",
          answer:
            "Sonuçlar ve seçenekler sizinle detaylıca paylaşılır; karar sürecinde size eşlik ederiz.",
        },
        {
          question: "SGK çocuklarda işitme cihazı desteği sağlıyor mu?",
          answer:
            "SGK desteği sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Detaylar SGK rehber sayfamızda yer almaktadır.",
        },
      ],
    },
  ],
  accentColor: "#f97316",
  accentColorBadgeBg: "rgb(249 115 22 / 0.08)",
  accentColorBadgeBorder: "rgb(249 115 22 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
