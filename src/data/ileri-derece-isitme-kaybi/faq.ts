// FAQ hub for the /ihtiyaciniza-gore/ileri-derece-isitme-kaybi page.
// Renders through the shared BrandPageFaq component. FAQPage schema is
// generated inside the component itself from these items. The price
// question never states a figure — only the variables that shape price —
// same restraint every brand/category page's faq.ts uses. Medical
// questions are answered carefully, always deferring the diagnostic
// question to a professional.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const ileriDereceIsitmeKaybiFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "İleri Derece İşitme Kaybı Hakkında Merak Edilenler",
  intro: "İleri derece işitme kaybı, uygunluk kriterleri ve cihaz seçenekleri hakkında en çok sorulan sorular.",
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
          question: "İleri derece işitme kaybı nedir?",
          answer:
            "İleri derece işitme kaybı, uluslararası sınıflandırmaya göre 56-70 dB işitme eşiği aralığını ifade eder; yüksek sesle konuşulsa bile anlamakta zorluk olarak fark edilir.",
        },
        {
          question: "İleri derece işitme kaybında kulak içi (ITE) cihaz kullanılabilir mi?",
          answer:
            "Genellikle sınırlıdır; küçük gövde nedeniyle ITE modeller yeterli amplifikasyonu sağlayamayabilir. Bu derecede kulak arkası (BTE/RIC) modeller sıkça tercih edilir.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "İleri derece kayıpta cihaz kullanmak zorunlu mu?",
          answer:
            "Bu derecede cihazlandırma önerisi genellikle güçlüdür; ancak kesin karar bir odyometrist değerlendirmesiyle belirlenir.",
        },
        {
          question: "Hangi cihaz tipi önerilir?",
          answer:
            "İleri derece kayıplarda genellikle güçlü RIC ve BTE modelleri sıkça tercih edilir; kesin öneri kulak yapınıza ve kaybınızın özelliklerine göre değişir.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Ne sıklıkla kontrol yaptırmalıyım?",
          answer:
            "İleri derece kayıplarda genellikle düzenli ve sık takip önerilir; odyometristiniz size uygun kontrol sıklığını belirler.",
        },
        {
          question: "Geri besleme (ıslık sesi) sorunu yaşarsam ne yapmalıyım?",
          answer:
            "Kulak kalıbının uyumu ve cihaz ayarları kontrol edilmelidir; bu durum genellikle bir odyometrist tarafından çözülebilir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, ileri derece işitme kaybında cihaz desteği sağlıyor mu?",
          answer:
            "SGK desteği, kaybın derecesine göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Detaylar SGK rehber sayfamızda yer almaktadır.",
        },
        {
          question: "İleri derece kayıp için cihaz fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, cihaz tipi, amplifikasyon kapasitesi ve ek özellikler belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#57534e",
  accentColorBadgeBg: "rgb(87 83 78 / 0.08)",
  accentColorBadgeBorder: "rgb(87 83 78 / 0.35)",
  accentColorBadgeText: "#44403c",
};
