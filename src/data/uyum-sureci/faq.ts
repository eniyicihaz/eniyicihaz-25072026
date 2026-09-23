// FAQ hub for the /rehberler/uyum-sureci page. Renders through the
// shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. Same honest, mechanism-focused
// answer style as every prior series' faq.ts.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const uyumSureciFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Uyum Süreci Hakkında Merak Edilenler",
  intro: "Süre, deneyimler ve destek konusunda en çok sorulan sorular.",
  decisionCard: {
    title: "Uyum Sürecinizde Destek Almak İster misiniz?",
    points: ["Gerçekçi süre beklentisi", "Kademeli maruziyet rehberliği", "Düzenli takip randevusu", "Ücretsiz"],
    ctaLabel: "Hemen Randevu Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Uyum süreci ne kadar sürer?",
          answer:
            "Genellikle haftalar ile aylar arasında değişir; kesin süre, işitme geçmişinize ve kişisel özelliklerinize göre farklılık gösterebilir.",
        },
        {
          question: "Uyum süreci herkeste aynı mı sürer?",
          answer:
            "Hayır; her kullanıcının uyum hızı farklıdır. Uzun süredir tedavi edilmemiş işitme kayıplarında süreç daha uzun sürebilir.",
        },
      ],
    },
    {
      label: "Deneyimler",
      items: [
        {
          question: "Kendi sesimi neden farklı duyuyorum?",
          answer:
            "Bu, birçok yeni kullanıcının yaşadığı normal bir durumdur; genellikle zamanla azalır.",
        },
        {
          question: "Gün sonunda neden yorgun hissediyorum?",
          answer:
            "Beyniniz yeni ses bilgisini işlemeye çalıştığından, ilk dönemlerde hafif bir dinleme yorgunluğu normaldir.",
        },
      ],
    },
    {
      label: "Destek",
      items: [
        {
          question: "Uyum sürecinde ne sıklıkla takip randevusu almalıyım?",
          answer:
            "Bu, deneyiminize göre değişir; genel bir çerçeve için Kontrol Randevusu sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Ne Zaman Endişelenmeli",
      items: [
        {
          question: "Ne zaman bir uzmana danışmalıyım?",
          answer:
            "Sürekli devam eden bir rahatsızlık yaşıyorsanız, bunu beklemek yerine bir Kontrol Randevusu veya Kişiye Özel Programlama değerlendirmesi için bizimle iletişime geçmeniz önerilir.",
        },
      ],
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
