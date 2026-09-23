// FAQ hub for the /blog/uzman-gorusleri page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Questions focus on how to use
// this general-information page responsibly, distinct from the myth
// items already covered in evolution.ts, use-cases.ts and technology.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const uzmanGorusleriFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Uzman Görüşleri Sayfası Hakkında Merak Edilenler",
  intro: "Bu sayfanın kapsamı ve nasıl kullanılması gerektiği hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Kendi Durumunuzu Değerlendirmek İster misiniz?",
    points: ["Ücretsiz işitme testi", "Kişiye özel değerlendirme", "Uzman görüşü", "Şeffaf bilgilendirme"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Bu sayfadaki bilgiler tıbbi tavsiye midir?",
          answer:
            "Hayır; bu sayfadaki bilgiler genel bilgilendirme amaçlıdır ve kişisel tıbbi tavsiye yerine geçmez. Kendi durumunuz için bir uzmana danışmanızı öneririz.",
        },
        {
          question: "Duyduğum bir bilginin doğru olup olmadığını nasıl öğrenebilirim?",
          answer:
            "Emin olmadığınız bir bilgiyi bizimle paylaşabilir, uzman ekibimizden görüş alabilirsiniz.",
        },
      ],
    },
    {
      label: "Kaynak",
      items: [
        {
          question: "Bu bilgiler nereden geliyor?",
          answer:
            "Bu sayfa, kliniğimizin günlük pratiğinde en sık karşılaştığı sorular ve yanlış inanışlar üzerine hazırlanan genel bir değerlendirmeyi yansıtır.",
        },
      ],
    },
    {
      label: "Sonraki Adım",
      items: [
        {
          question: "Bu bilgileri okuduktan sonra ne yapmalıyım?",
          answer:
            "Kendi durumunuzu netleştirmek için ücretsiz işitme testimizden faydalanabilir veya uzman ekibimizle görüşebilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
