// FAQ hub for the /degerlendirme/ucretsiz-isitme-testi page — redesign
// plan §2/§7, Bölüm 13. Renders through the shared BrandPageFaq
// component; FAQPage schema is generated inside the component itself
// from these items. Expanded from 8 to 13 questions to cover Darıca
// candidacy, Gebze/Çayırova travel, process detail and the online-vs-
// clinical distinction the user explicitly asked for — the acute-case
// safety note retired from considerations.ts (redesign plan §1) also
// resurfaces here implicitly via the "hazırlık" answer's process framing.
// The price question never states a figure — same restraint every
// brand/category page's faq.ts uses.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const ucretsizIsitmeTestiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Darıca'da Ücretsiz İşitme Testi Hakkında Merak Edilenler",
  intro: "Test süreci, uygunluk, bölgeden ulaşım ve sonrasında olacaklar hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Darıca'da Ücretsiz İşitme Testi Randevusu Alın",
    points: ["Uzman odyometrist eşliğinde test", "Aynı gün sonuç", "Satış baskısı yok", "SGK danışmanlığı"],
    ctaLabel: "Hemen Randevu Alın",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Darıca'da ücretsiz işitme testi yapılıyor mu?",
          answer: "Evet; Darıca'daki merkezimizde, deneyimli bir odyometrist eşliğinde ücretsiz işitme testi yapıyoruz.",
        },
        {
          question: "Ücretsiz işitme testi gerçekten ücretsiz mi?",
          answer: "Evet; test herhangi bir ücret talep edilmeden ve satın alma taahhüdü olmadan sunulur.",
        },
        {
          question: "Ücretsizse neden ücretsiz?",
          answer: "Ücretsiz test, işitme durumunuzu değerlendirip size doğru yönlendirme yapabilmemiz için sunduğumuz ilk adımdır; herhangi bir satın alma zorunluluğu doğurmaz.",
        },
        {
          question: "Test ne kadar sürer?",
          answer: "Süre kişiden kişiye değişebilir; genellikle kısa bir süre içinde tamamlanır.",
        },
      ],
    },
    {
      label: "Bölgemizden Ulaşım",
      items: [
        {
          question: "Gebze'den işitme testi için Darıca'ya gelebilir miyim?",
          answer: "Evet; Gebze'den merkezimize kolayca ulaşabilirsiniz. Randevunuzu telefon veya WhatsApp üzerinden alabilirsiniz.",
        },
        {
          question: "Çayırova'dan işitme testi için Darıca'ya gelebilir miyim?",
          answer: "Evet; Çayırova'dan da merkezimize ulaşabilirsiniz, aynı randevu ve test süreci geçerlidir.",
        },
      ],
    },
    {
      label: "Süreç",
      items: [
        {
          question: "İşitme testi için randevu gerekiyor mu?",
          answer: "Randevu almanızı öneririz; bu, beklemeden karşılanmanızı sağlar.",
        },
        {
          question: "İşitme testinden önce hazırlık gerekir mi?",
          answer: "Özel bir hazırlık gerekmez; varsa önceki işitme testi sonuçlarınızı ve kullandığınız ilaçların listesini yanınızda getirmeniz faydalı olabilir.",
        },
        {
          question: "İşitme testi sırasında ne yapılır?",
          answer: "Kulak muayenesi, şikayetlerinizin değerlendirilmesi ve farklı frekanslardaki seslere verdiğiniz tepkilerin ölçüldüğü bir odyometri testi uygulanır.",
        },
        {
          question: "Online işitme testi ile merkezde yapılan test arasındaki fark nedir?",
          answer: "Online tarama, kulaklığınızla yaptığınız bir ön değerlendirmedir ve klinik bir ölçüm değildir; merkezimizdeki test ise kalibre edilmiş cihazlarla, odyometrist eşliğinde yapılır ve daha güvenilir bir sonuç verir.",
        },
      ],
    },
    {
      label: "Sonrası",
      items: [
        {
          question: "Test sonrası cihaz almak zorunda mıyım?",
          answer: "Hayır; test sonrası herhangi bir satın alma zorunluluğu yoktur. Detaylı bilgi için Ücretsiz Danışmanlık sayfamızı inceleyebilirsiniz.",
        },
        {
          question: "SGK işitme cihazı desteği var mı?",
          answer: "SGK desteği sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Detaylar SGK rehber sayfamızda yer almaktadır.",
        },
        {
          question: "İşitme cihazı denemesi yapılabilir mi?",
          answer: "Evet; size uygun olabilecek cihaz seçeneklerini karar vermeden önce merkezimizde deneyebilirsiniz.",
        },
      ],
    },
  ],
  accentColor: "#0891b2",
  accentColorBadgeBg: "rgb(8 145 178 / 0.08)",
  accentColorBadgeBorder: "rgb(8 145 178 / 0.35)",
  accentColorBadgeText: "#0e7490",
};
