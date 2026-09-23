// FAQ hub for the /rehberler/cihaz-secim-rehberi page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. Same honest, mechanism-focused
// answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const cihazSecimRehberiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Cihaz Seçimi Hakkında Merak Edilenler",
  intro: "Faktörler, bütçe ve karar süreci hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Size Uygun Cihazı Birlikte Bulalım",
    points: ["Ücretsiz ihtiyaç analizi", "Çoklu marka karşılaştırma", "Bütçe rehberliği", "Baskısız süreç"],
    ctaLabel: "Hemen Randevu Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Cihaz seçmeden önce ne yapmalıyım?",
          answer:
            "Öncelikle bir işitme testi yaptırmanız önerilir; işitme kaybınızın derece ve türü, seçim sürecinin temelini oluşturur.",
        },
        {
          question: "En pahalı cihaz her zaman en iyisi midir?",
          answer:
            "Hayır; en uygun cihaz, fiyatından bağımsız olarak sizin işitme profilinize ve yaşam tarzınıza en çok uyan modeldir.",
        },
      ],
    },
    {
      label: "Bütçe",
      items: [
        {
          question: "SGK desteğinden yararlanabilir miyim?",
          answer:
            "Bu, SGK uygunluk şartlarınıza bağlıdır; detaylı bilgi için SGK rehberimizi inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Karşılaştırma",
      items: [
        {
          question: "Farklı markaları nasıl karşılaştırabilirim?",
          answer:
            "İhtiyaç analizinize uygun modeller listelenir ve performans, konfor ile bütçe açısından karşılaştırılır.",
        },
        {
          question: "Kararımdan önce cihazı deneyebilir miyim?",
          answer:
            "Evet; karar vermeden önce cihazı gerçek yaşam koşullarında deneme fırsatı için Cihaz Deneme sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Sonrası",
      items: [
        {
          question: "Seçtiğim cihazdan memnun kalmazsam ne olur?",
          answer:
            "Memnuniyetsizlik durumunda değerlendirilebilecek seçenekler için Kolay Değişim sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
