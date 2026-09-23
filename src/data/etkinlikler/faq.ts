// FAQ hub for the /blog/etkinlikler page. Renders through the shared
// BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. No specific event dates — every
// answer defers to a live phone/WhatsApp call for current details,
// consistent with this page's accuracy discipline.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const etkinliklerFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Etkinlikler Hakkında Merak Edilenler",
  intro: "Etkinlik kategorileri ve işbirliği süreci hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Güncel Etkinlik Takvimimizi Öğrenmek İster misiniz?",
    points: ["Ücretsiz bilgilendirme", "Kurumsal işbirliği desteği", "Şeffaf planlama", "Hızlı geri dönüş"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Yaklaşan bir etkinliğiniz var mı?",
          answer:
            "Etkinlik takvimimiz dönem dönem değişir; güncel ve planlanan etkinliklerimizi öğrenmek için bizi aramanızı veya WhatsApp üzerinden yazmanızı öneririz.",
        },
        {
          question: "Etkinliklere katılım ücretli mi?",
          answer:
            "Etkinlik türüne göre değişebilir; detaylı bilgi için bizimle iletişime geçebilirsiniz.",
        },
      ],
    },
    {
      label: "Kurumsal İşbirliği",
      items: [
        {
          question: "Okulumuz için tarama işbirliği talep edebilir miyiz?",
          answer:
            "Evet; okullarla işitme taraması işbirliği yapabiliyoruz. Talebinizi görüşmek için bizimle iletişime geçebilirsiniz.",
        },
        {
          question: "Kurumumuz için bilgilendirme etkinliği düzenleyebilir misiniz?",
          answer:
            "Evet; kurumlarla birlikte çalışanlara yönelik bilgilendirme etkinlikleri düzenleyebiliyoruz. Detayları birlikte planlayabiliriz.",
        },
      ],
    },
    {
      label: "Katılım",
      items: [
        {
          question: "Etkinliğe katılmak için randevu almam gerekir mi?",
          answer:
            "Bazı etkinliklerde ön kayıt gerekebilir; katılmak istediğiniz etkinlik için bizden bilgi alabilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#059669",
  accentColorBadgeBg: "rgb(5 150 105 / 0.08)",
  accentColorBadgeBorder: "rgb(5 150 105 / 0.35)",
  accentColorBadgeText: "#047857",
};
