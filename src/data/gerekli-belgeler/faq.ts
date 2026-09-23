// FAQ hub for the /sgk/gerekli-belgeler page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Questions are deliberately
// distinct from the pillar page's own FAQ (which already covers
// "Heyet raporu gerekli mi?" and "İşitme cihazı reçetesi zorunlu mu?")
// to avoid duplicating content — this page goes deeper into document
// logistics.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const gerekliBelgelerFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Gerekli Belgeler Hakkında Merak Edilenler",
  intro: "Belge türleri, ek belgeler ve hazırlık süreci hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Belge Listenizi Birlikte Gözden Geçirelim mi?",
    points: ["Ücretsiz danışmanlık", "Size özel belge listesi", "Şeffaf süreç", "Uzman rehberliği"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Belgelerin fotokopisi yeterli mi, aslını mı getirmeliyim?",
          answer:
            "Bazı belgelerde fotokopi yeterli olabilirken bazılarında aslının ibraz edilmesi istenebilir. Hangi belgenin nasıl hazırlanması gerektiğini randevunuzda netleştirebiliriz.",
        },
        {
          question: "Belgelerimi nereden temin edebilirim?",
          answer:
            "Kimlik ve SGK kayıt bilgileriniz gibi bazı belgeleri e-Devlet üzerinden, rapor ve reçetenizi ise ilgili hastaneden temin edebilirsiniz.",
        },
      ],
    },
    {
      label: "Özel Durumlar",
      items: [
        {
          question: "Çocuklar için hangi ek belgeler istenir?",
          answer:
            "Çocuk başvurularında, çocuğun kimlik belgesine ek olarak veli veya vasi olduğunu gösteren belgeler istenebilir; detaylı bilgi için Çocuklarda SGK sayfamızı inceleyebilirsiniz.",
        },
        {
          question: "Cihaz yenilerken farklı belgeler mi gerekiyor?",
          answer:
            "Yenileme başvurularında, mevcut cihazınıza dair bilgiler gibi ek belgeler istenebilir; detaylı bilgi için Yenileme Hakkı sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Belgelerim eksikse ne olur?",
          answer:
            "Eksik bir belge, başvurunuzun tamamlanmasını geciktirebilir. Bu yüzden randevunuzdan önce belge listenizi birlikte kontrol etmenizi öneririz.",
        },
        {
          question: "Belge listesini randevu öncesinde öğrenebilir miyim?",
          answer:
            "Evet; durumunuza özel güncel belge listesini randevunuzdan önce telefon veya WhatsApp üzerinden sizinle paylaşabiliriz.",
        },
      ],
    },
  ],
  accentColor: "#4f46e5",
  accentColorBadgeBg: "rgb(79 70 229 / 0.08)",
  accentColorBadgeBorder: "rgb(79 70 229 / 0.35)",
  accentColorBadgeText: "#4338ca",
};
