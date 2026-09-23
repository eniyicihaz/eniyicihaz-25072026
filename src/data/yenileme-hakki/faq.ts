// FAQ hub for the /sgk/yenileme-hakki page. Renders through the shared
// BrandPageFaq component. FAQPage schema is generated inside the
// component itself from these items. Questions are deliberately
// distinct from the pillar page's own FAQ (which already covers "Kaç
// yılda bir SGK'dan yeni işitme cihazı alınabilir?" at a general level)
// to avoid duplicating content — this page goes deeper into renewal
// mechanics. No specific renewal period figures, consistent with this
// page's accuracy discipline.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const yenilemeHakkiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Yenileme Hakkı Hakkında Merak Edilenler",
  intro: "Standart ve erken yenileme, eski cihaz ve süreç hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Yenileme Zamanınızı Öğrenmek İster misiniz?",
    points: ["Ücretsiz kontrol", "Kişiye özel değerlendirme", "Şeffaf süreç", "Uzman rehberliği"],
    ctaLabel: "Hemen Bilgi Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Yenileme hakkımın doğup doğmadığını nasıl öğrenebilirim?",
          answer:
            "Cihazınızın alım tarihine göre yenileme uygunluğunuzu e-Devlet üzerinden sorgulayabilir, ayrıca merkezimizden de bilgi alabilirsiniz.",
        },
        {
          question: "Yenilerken farklı bir marka seçebilir miyim?",
          answer:
            "Evet; yenileme sırasında istediğiniz SGK anlaşmalı markayı ve modeli, ihtiyacınıza göre yeniden değerlendirebilirsiniz.",
        },
      ],
    },
    {
      label: "Erken Yenileme",
      items: [
        {
          question: "Erken yenileme talebini nasıl başlatabilirim?",
          answer:
            "Cihazınızın arızalandığını veya işitme kaybınızın ilerlediğini düşünüyorsanız, güncel bir değerlendirme için bizimle iletişime geçerek süreci başlatabilirsiniz.",
        },
        {
          question: "Cihaz garantisi yenileme hakkını etkiler mi?",
          answer:
            "Garanti kapsamındaki bir arıza önce garanti süreciyle değerlendirilir; garanti dışı ve onarılamaz durumlarda erken yenileme gündeme gelebilir. Detaylı bilgi için Garanti İşlemleri sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Eski Cihaz",
      items: [
        {
          question: "Yenileme sonrası eski cihazıma ne olur?",
          answer:
            "Eski cihazınız size aittir; isterseniz yedek cihaz olarak saklayabilir veya merkezimizle bu konuda görüşebilirsiniz.",
        },
      ],
    },
    {
      label: "Çocuklar",
      items: [
        {
          question: "Çocuklarda yenileme süreci farklı mı işler?",
          answer:
            "Genel süreç aynı olmakla birlikte, çocuklarda büyüme ve gelişim nedeniyle yenileme ihtiyacı daha farklı bir zamanlamada ortaya çıkabilir; detaylı bilgi için Çocuklarda SGK sayfamızı inceleyebilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
