// FAQ hub for the /blog/kampanyalar page. Renders through the shared
// BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. No specific offer figures or
// dates — every answer defers to a live phone/WhatsApp call for
// current details, consistent with this page's accuracy discipline.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const kampanyalarFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Kampanyalar Hakkında Merak Edilenler",
  intro: "Kampanya kategorileri ve süreç hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Güncel Kampanyalarımızı Öğrenmek İster misiniz?",
    points: ["Ücretsiz danışmanlık", "Şeffaf kampanya şartları", "Size özel yönlendirme", "Hızlı geri dönüş"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Şu anda aktif bir kampanyanız var mı?",
          answer:
            "Kampanya içeriklerimiz dönem dönem değişir; güncel ve aktif kampanyalarımızı öğrenmek için bizi aramanızı veya WhatsApp üzerinden yazmanızı öneririz.",
        },
        {
          question: "Kampanyalar SGK desteğiyle birlikte kullanılabilir mi?",
          answer:
            "Uygun kampanyalar SGK desteğiyle birlikte değerlendirilebilir; detaylı bilgi için randevunuzda birlikte inceleyebiliriz.",
        },
      ],
    },
    {
      label: "Koşullar",
      items: [
        {
          question: "Her kampanyadan herkes yararlanabilir mi?",
          answer:
            "Bazı kampanyalar belirli koşullara bağlı olabilir; uygunluğunuzu randevunuzda birlikte değerlendirebiliriz.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Kampanya hakkında bilgi almak için randevu almam gerekir mi?",
          answer:
            "Hayır; kampanyalarımız hakkında telefon veya WhatsApp üzerinden ön bilgi alabilirsiniz. Kampanyadan yararlanmak isterseniz bir sonraki adım olarak randevu planlarız.",
        },
      ],
    },
  ],
  accentColor: "#c026d3",
  accentColorBadgeBg: "rgb(192 38 211 / 0.08)",
  accentColorBadgeBorder: "rgb(192 38 211 / 0.35)",
  accentColorBadgeText: "#a21caf",
};
