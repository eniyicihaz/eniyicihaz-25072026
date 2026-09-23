// FAQ hub for the /neden-orijinal/ucretsiz-danismanlik page. Renders
// through the shared BrandPageFaq component. FAQPage schema is generated
// inside the component itself from these items. Same honest,
// mechanism-focused answer style as the four prior pages' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const ucretsizDanismanlikFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Ücretsiz Danışmanlık Hakkında Merak Edilenler",
  intro: "Süreç, SGK ve karar verme hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Ücretsiz Danışmanlıktan Faydalanmak İster misiniz?",
    points: ["Ücretsiz işitme testi", "Kişiye özel öneri", "SGK bilgilendirmesi", "Demo cihaz deneme"],
    ctaLabel: "Hemen Randevu Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Ücretsiz danışmanlık gerçekten ücretsiz mi?",
          answer:
            "Evet; işitme testi ve danışmanlık sürecinin tamamı herhangi bir ücret talep edilmeden sunulur.",
        },
        {
          question: "Danışmanlık sonunda cihaz almak zorunda mıyım?",
          answer:
            "Hayır; danışmanlık sürecinin amacı bilgilendirmektir, cihaz alma zorunluluğu yoktur.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Danışmanlık süreci ne kadar sürer?",
          answer:
            "Süre, ihtiyaç değerlendirmesinin kapsamına göre değişir; ilk görüşmede size net bir zaman planı sunulur.",
        },
        {
          question: "Randevu almadan gelebilir miyim?",
          answer:
            "Randevu almanızı öneririz; bu sayede sürecinizi kesintisiz ve verimli bir şekilde tamamlayabiliriz.",
        },
      ],
    },
    {
      label: "SGK",
      items: [
        {
          question: "SGK danışmanlığı neleri kapsar?",
          answer:
            "SGK'nın işitme cihazı desteği kapsamı, gerekli belgeler ve başvuru süreciyle ilgili bilgilendirme sunulur.",
        },
      ],
    },
    {
      label: "Demo ve Karar",
      items: [
        {
          question: "Cihazı satın almadan deneyebilir miyim?",
          answer:
            "Evet; karar vermeden önce size uygun görülen cihazı deneyebilirsiniz.",
        },
        {
          question: "Birden fazla marka arasında karşılaştırma yapabilir miyim?",
          answer:
            "Evet; ihtiyacınıza uygun farklı marka ve modelleri birlikte karşılaştırabiliriz.",
        },
      ],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
