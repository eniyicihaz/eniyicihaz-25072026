// FAQ hub for the /blog/basari-hikayeleri page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Questions focus on how to
// interpret this general-experience page responsibly, reinforcing the
// content-integrity discipline established in hero.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const basariHikayeleriFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Başarı Hikayeleri Sayfası Hakkında Merak Edilenler",
  intro: "Bu sayfanın kapsamı ve nasıl yorumlanması gerektiği hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Kendi Deneyiminizi Değerlendirmek İster misiniz?",
    points: ["Ücretsiz işitme testi", "Kişiye özel değerlendirme", "Cihaz deneme imkânı", "Uzman rehberliği"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Bu sayfada gerçek hasta hikayeleri mi paylaşılıyor?",
          answer:
            "Hayır; gizlilik ilkemiz gereği belirli hastalarımızın bilgilerini paylaşmıyoruz. Bu sayfa, kliniğimizde sıkça gözlemlediğimiz genel deneyim kategorilerini yansıtır.",
        },
        {
          question: "Benim için de aynı sonuçlar geçerli olur mu?",
          answer:
            "Deneyimler kişiden kişiye farklılık gösterir; kendi durumunuz için en gerçekçi beklentiyi bir uzman değerlendirmesiyle öğrenebilirsiniz.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Olumlu değişimler ne kadar sürede ortaya çıkar?",
          answer:
            "Bu, kullanım sıklığınıza ve uyum sürecinize göre değişir; detaylı bilgi için Uyum Süreci sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Karar",
      items: [
        {
          question: "Değişimi kendim deneyerek görebilir miyim?",
          answer:
            "Evet; ilgilendiğiniz modelleri satın almadan önce deneyebilirsiniz. Detaylı bilgi için Cihaz Deneme sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#ea580c",
  accentColorBadgeBg: "rgb(234 88 12 / 0.08)",
  accentColorBadgeBorder: "rgb(234 88 12 / 0.35)",
  accentColorBadgeText: "#c2410c",
};
