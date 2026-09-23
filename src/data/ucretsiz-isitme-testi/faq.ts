// FAQ hub for the /degerlendirme/ucretsiz-isitme-testi page. Renders
// through the shared BrandPageFaq component. FAQPage schema is
// generated inside the component itself from these items. The price
// question never states a figure — only the variables that shape price
// — same restraint every brand/category page's faq.ts uses. The
// post-test question cross-references the "Neden Orijinal" series' own
// Ücretsiz Danışmanlık page.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const ucretsizIsitmeTestiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Ücretsiz İşitme Testi Hakkında Merak Edilenler",
  intro: "Test süreci, uygunluk ve sonrasında olacaklar hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Ücretsiz İşitme Testi Randevusu Almak İster misiniz?",
    points: ["Uzman odyometrist eşliğinde test", "Aynı gün sonuç", "Satış baskısı yok", "SGK danışmanlığı"],
    ctaLabel: "Hemen Randevu Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Ücretsiz işitme testi gerçekten ücretsiz mi?",
          answer:
            "Evet; test herhangi bir ücret talep edilmeden ve satın alma taahhüdü olmadan sunulur.",
        },
        {
          question: "Test ne kadar sürer?",
          answer:
            "Süre kişiden kişiye değişebilir; genellikle kısa bir süre içinde tamamlanır.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Kaç yaşından itibaren işitme testi yaptırılabilir?",
          answer:
            "Her yaştan kullanıcı işitme testi yaptırabilir; çocuklar için test yönteminde yaşa uygun farklılıklar olabilir.",
        },
        {
          question: "Şikayetim yoksa test yaptırmalı mıyım?",
          answer:
            "Düzenli işitme kontrolleri, özellikle belirli bir yaşın üzerindeki kullanıcılar için erken tespit açısından faydalı olabilir.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "Test için ne getirmeliyim?",
          answer:
            "Varsa önceki işitme testi sonuçlarınızı ve kullandığınız ilaçların listesini yanınızda getirmeniz faydalı olabilir.",
        },
        {
          question: "Sonuçlarımı ne zaman öğrenirim?",
          answer:
            "Test sonuçlarınız, görüşme sonunda sizinle birlikte değerlendirilir.",
        },
      ],
    },
    {
      label: "Sonrası",
      items: [
        {
          question: "Test sonrası cihaz almak zorunda mıyım?",
          answer:
            "Hayır; test sonrası herhangi bir satın alma zorunluluğu yoktur. Detaylı bilgi için Ücretsiz Danışmanlık sayfamızı inceleyebilirsiniz.",
        },
        {
          question: "SGK işitme testi masraflarını karşılıyor mu?",
          answer:
            "SGK desteği sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Detaylar SGK rehber sayfamızda yer almaktadır.",
        },
      ],
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
