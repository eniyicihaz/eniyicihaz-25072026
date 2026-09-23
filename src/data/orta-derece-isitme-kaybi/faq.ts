// FAQ hub for the /ihtiyaciniza-gore/orta-derece-isitme-kaybi page.
// Renders through the shared BrandPageFaq component. FAQPage schema is
// generated inside the component itself from these items. The price
// question never states a figure — only the variables that shape price —
// same restraint every brand/category page's faq.ts uses. Medical
// questions are answered carefully, always deferring the diagnostic
// question to a professional.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const ortaDereceIsitmeKaybiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Orta Derece İşitme Kaybı Hakkında Merak Edilenler",
  intro: "Orta derece işitme kaybı, uygunluk kriterleri ve cihaz seçenekleri hakkında en çok sorulan sorular.",
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
          question: "Orta derece işitme kaybı nedir?",
          answer:
            "Orta derece işitme kaybı, uluslararası sınıflandırmaya göre 41-55 dB işitme eşiği aralığını ifade eder; normal ses tonundaki konuşmaları takip etmekte belirgin zorluk olarak fark edilir.",
        },
        {
          question: "Orta derece işitme kaybı hafif dereceden ne kadar farklıdır?",
          answer:
            "Orta derecede, hafif dereceye göre günlük konuşmaların daha büyük bir kısmı etkilenir; genellikle cihazlandırma ihtiyacı daha belirgin hâle gelir. Detaylı karşılaştırma için bu sayfadaki tabloyu inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Orta derece kayıpta cihaz kullanmak gerekli mi?",
          answer:
            "Bu, kişinin günlük yaşamda yaşadığı zorluğa ve odyometrist değerlendirmesine bağlıdır; orta derecede cihazlandırma sıkça önerilir.",
        },
        {
          question: "Hangi cihaz tipi önerilir?",
          answer:
            "Orta derece kayıplarda genellikle standart RIC ve BTE modelleri sıkça tercih edilir; kesin öneri kulak yapınıza ve kaybınızın özelliklerine göre değişir.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Ne sıklıkla kontrol yaptırmalıyım?",
          answer:
            "Orta derece kayıplarda genellikle daha yakın bir takip önerilir; odyometristiniz size uygun kontrol sıklığını belirler.",
        },
        {
          question: "Gürültü azaltma ve yönlü mikrofon özellikleri gerekli mi?",
          answer:
            "Zorunlu değildir, ancak orta derece kayıplarda kalabalık ortam desteği sıkça faydalı bulunur; ihtiyacınıza uygun kapsam odyometristinizle birlikte belirlenir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, orta derece işitme kaybında cihaz desteği sağlıyor mu?",
          answer:
            "SGK desteği, kaybın derecesine göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Detaylar SGK rehber sayfamızda yer almaktadır.",
        },
        {
          question: "Orta derece kayıp için cihaz fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, cihaz tipi, teknoloji seviyesi ve ek özellikler belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#16a34a",
  accentColorBadgeBg: "rgb(22 163 74 / 0.08)",
  accentColorBadgeBorder: "rgb(22 163 74 / 0.35)",
  accentColorBadgeText: "#15803d",
};
