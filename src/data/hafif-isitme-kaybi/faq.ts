// FAQ hub for the /ihtiyaciniza-gore/hafif-isitme-kaybi page. Renders
// through the shared BrandPageFaq component. FAQPage schema is generated
// inside the component itself from these items. The price question never
// states a figure — only the variables that shape price — same restraint
// every brand/category page's faq.ts uses. Medical questions are answered
// carefully, always deferring the diagnostic question to a professional.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const hafifIsitmeKaybiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Hafif İşitme Kaybı Hakkında Merak Edilenler",
  intro: "Hafif işitme kaybı, uygunluk kriterleri ve cihaz seçenekleri hakkında en çok sorulan sorular.",
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
          question: "Hafif işitme kaybı nedir?",
          answer:
            "Hafif işitme kaybı, uluslararası sınıflandırmaya göre 26-40 dB işitme eşiği aralığını ifade eder; genellikle fısıltı ve uzak sesleri duymakta güçlük olarak fark edilir.",
        },
        {
          question: "Hafif işitme kaybı kendiliğinden düzelir mi?",
          answer:
            "Bu, kaybın altında yatan nedene göre değişir. Bazı geçici nedenler (kulak kiri, enfeksiyon gibi) tedaviyle düzelebilirken, kalıcı nedenler için farklı bir yaklaşım gerekebilir. Kesin değerlendirme için bir kulak burun boğaz uzmanına başvurulması önerilir.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Hafif işitme kaybında cihaz kullanmak gerekli mi?",
          answer:
            "Bu, kişinin günlük yaşamda yaşadığı zorluğa ve odyometrist değerlendirmesine bağlıdır; hafif derecede bile cihazlandırma sıkça değerlendirilebilir.",
        },
        {
          question: "Belirtilerimi fark ettim, ne yapmalıyım?",
          answer:
            "İlk adım olarak bir işitme testi yaptırmanız önerilir; bu test, kaybın derecesini ve tipini netleştirir.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Hafif kayıp için hangi cihaz tipi önerilir?",
          answer:
            "Hafif kayıplarda genellikle ince RIC ve kulak içi modeller sıkça tercih edilir; kesin öneri kulak yapınıza ve kaybınızın özelliklerine göre değişir.",
        },
        {
          question: "Ne sıklıkla kontrol yaptırmalıyım?",
          answer:
            "Hafif kayıplarda genellikle yıllık periyodik kontrol önerilir; ancak değişiklik hissederseniz daha erken bir randevu almanız faydalı olur.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, hafif işitme kaybında cihaz desteği sağlıyor mu?",
          answer:
            "SGK desteği, kaybın derecesine göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Detaylar SGK rehber sayfamızda yer almaktadır.",
        },
        {
          question: "Hafif kayıp için cihaz fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, cihaz tipi, teknoloji seviyesi ve ek özellikler belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#db2777",
  accentColorBadgeBg: "rgb(219 39 119 / 0.08)",
  accentColorBadgeBorder: "rgb(219 39 119 / 0.35)",
  accentColorBadgeText: "#be185d",
};
