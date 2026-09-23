// FAQ hub for the /blog/sik-sorulan-sorular page — this page's core
// content. Renders through the shared BrandPageFaq component. FAQPage
// schema is generated inside the component itself from these items.
// Genuinely general, cross-cutting practical questions not already
// asked verbatim elsewhere on the site (appointment booking, service
// area, pricing, first-visit expectations) — topic-specific questions
// stay on their own dedicated pages, cross-linked via
// related-content.ts instead of duplicated here.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const sikSorulanSorularFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Genel Sorularınızın Yanıtları",
  intro: "Randevu, ücretlendirme ve süreç hakkında en çok sorulan genel sorular.",
  decisionCard: {
    title: "Sorunuzu Burada Bulamadınız mı?",
    points: ["Ücretsiz danışmanlık", "Hızlı geri dönüş", "Şeffaf bilgilendirme", "Uzman ekip desteği"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Randevu",
      items: [
        {
          question: "Randevu almak için ne yapmalıyım?",
          answer:
            "Telefon veya WhatsApp üzerinden bizimle iletişime geçerek size uygun bir randevu zamanı belirleyebiliriz.",
        },
        {
          question: "Randevuma ne getirmeliyim?",
          answer:
            "Herhangi bir belge getirmeniz zorunlu değildir; varsa önceki işitme raporlarınızı ve kimliğinizi yanınızda getirebilirsiniz.",
        },
        {
          question: "Çocuğum için randevu alabilir miyim?",
          answer:
            "Evet; çocuklar için pediatrik değerlendirme yapıyoruz. Detaylı bilgi için Çocuk İşitme Testi sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Ücretlendirme",
      items: [
        {
          question: "İşitme testi ücretli mi?",
          answer:
            "Hayır; ücretsiz işitme testimizden faydalanabilirsiniz. Detaylı bilgi için Ücretsiz İşitme Testi sayfamızı inceleyebilirsiniz.",
        },
        {
          question: "SGK güvencem yoksa hizmet alabilir miyim?",
          answer:
            "Evet; SGK güvencesi olmayan kullanıcılarımıza da hizmet veriyoruz. Bu durumda yalnızca SGK'nın sağladığı destekten yararlanamazsınız.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "İlk randevuda cihaz satın almaya zorlanır mıyım?",
          answer:
            "Hayır; ilk randevuda amacımız durumunuzu değerlendirmek ve size doğru bilgiyi vermektir. Karar tamamen size aittir.",
        },
        {
          question: "Cihazı satın almadan önce deneyebilir miyim?",
          answer:
            "Evet; ilgilendiğiniz modelleri satın almadan önce deneyebilirsiniz. Detaylı bilgi için Cihaz Deneme sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Hizmet Bölgesi",
      items: [
        {
          question: "Hangi bölgelerde hizmet veriyorsunuz?",
          answer:
            "Merkezimiz Darıca, Gebze, Çayırova, Dilovası, Tuzla ve Pendik bölgelerinde hizmet vermektedir.",
        },
      ],
    },
  ],
  accentColor: "#0284c7",
  accentColorBadgeBg: "rgb(2 132 199 / 0.08)",
  accentColorBadgeBorder: "rgb(2 132 199 / 0.35)",
  accentColorBadgeText: "#0369a1",
};
