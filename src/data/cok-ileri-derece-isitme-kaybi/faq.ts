// FAQ hub for the /ihtiyaciniza-gore/cok-ileri-derece-isitme-kaybi page.
// Renders through the shared BrandPageFaq component. FAQPage schema is
// generated inside the component itself from these items. The price
// question never states a figure — only the variables that shape price —
// same restraint every brand/category page's faq.ts uses. Medical
// questions, including the cochlear-implant question, are answered
// carefully, always deferring the diagnostic and treatment-pathway
// question to a professional (ENT).

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const cokIleriDereceIsitmeKaybiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Çok İleri Derece İşitme Kaybı Hakkında Merak Edilenler",
  intro: "Çok ileri derece işitme kaybı, uygunluk kriterleri ve cihaz seçenekleri hakkında en çok sorulan sorular.",
  decisionCard: {
    title: "Hâlâ karar veremediniz mi?",
    points: ["Ücretsiz işitme testi", "Demo cihaz denemesi", "Uzman odyometrist desteği", "SGK danışmanlığı"],
    ctaLabel: "Hemen İletişime Geç",
    ctaHref: contactConfig.phone.href,
  },
  categories: [
    {
      label: "Genel",
      items: [
        {
          question: "Çok ileri derece işitme kaybı nedir?",
          answer:
            "Çok ileri derece işitme kaybı, uluslararası sınıflandırmaya göre 71 dB ve üzeri işitme eşiğini ifade eder; konuşmaların büyük bölümünün güçlü amplifikasyon olmadan duyulamaması olarak fark edilir.",
        },
        {
          question: "İşitme cihazı bu derecede yeterli olur mu?",
          answer:
            "Birçok kullanıcı için power BTE modeller yeterli fayda sağlayabilir; ancak yeterlilik kişiden kişiye değişir ve bir odyometrist ile KBB uzmanı tarafından birlikte değerlendirilmelidir.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Bu derecede koklear implant değerlendirilir mi?",
          answer:
            "İşitme cihazının yeterli fayda sağlamadığı bazı çok ileri derece kayıplarda, koklear implant seçeneği bir KBB uzmanı tarafından değerlendirilebilir. Bu, kişiye özel bir tıbbi karardır ve ayrı bir uzman değerlendirmesi gerektirir.",
        },
        {
          question: "Hangi cihaz tipi önerilir?",
          answer:
            "Çok ileri derece kayıplarda genellikle power BTE modeller sıkça tercih edilir; kesin öneri kulak yapınıza ve kaybınızın özelliklerine göre değişir.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Ne sıklıkla kontrol yaptırmalıyım?",
          answer:
            "Çok ileri derece kayıplarda genellikle çok sık ve yakın takip önerilir; odyometristiniz size uygun kontrol sıklığını belirler.",
        },
        {
          question: "Aile üyelerinin desteği neden önemli?",
          answer:
            "Bu derecede, yakın çevrenin iletişim stratejilerine (görsel ipucu sağlama, net konuşma gibi) dahil olması günlük yaşam kalitesini önemli ölçüde destekleyebilir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, çok ileri derece işitme kaybında cihaz desteği sağlıyor mu?",
          answer:
            "SGK desteği, kaybın derecesine göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Detaylar SGK rehber sayfamızda yer almaktadır.",
        },
        {
          question: "Çok ileri derece kayıp için cihaz fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, amplifikasyon kapasitesi, ek özellikler ve segment düzeyi belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#92400e",
  accentColorBadgeBg: "rgb(146 64 14 / 0.08)",
  accentColorBadgeBorder: "rgb(146 64 14 / 0.35)",
  accentColorBadgeText: "#78350f",
};
