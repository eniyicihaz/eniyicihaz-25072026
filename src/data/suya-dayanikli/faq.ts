// FAQ hub for the /isitme-cihazlari/suya-dayanikli page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. The price question never states
// a figure — only the variables that shape price — same restraint every
// brand/category page's faq.ts uses.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const suyaDayankliFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Suya Dayanıklı Cihazlar Hakkında Merak Edilenler",
  intro: "Suya dayanıklı işitme cihazları, IP koruma sınıfı ve kullanım şekli hakkında en çok sorulan sorular.",
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
          question: "Suya dayanıklı işitme cihazı nedir?",
          answer:
            "Ter, nem ve hafif su temasına karşı IP koruma sınıfı taşıyan işitme cihazı özelliğidir; belirli bir fiziksel cihaz tipi değil, hem BTE hem de ITE ailelerinde sunulabilen bir dayanıklılık seviyesidir.",
        },
        {
          question: "IP68 ne anlama gelir?",
          answer:
            "IP (Ingress Protection) kodundaki ilk hane toza, ikinci hane suya karşı direnci gösterir. IP68, toza karşı tam koruma ve belirli süre/derinlikte suya daldırmaya karşı üst düzey dayanıklılık anlamına gelir.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Suya dayanıklı cihazla yüzülebilir mi?",
          answer:
            "Genellikle hayır. Suya dayanıklı olmak suya tam dayanıklı (waterproof) olmak anlamına gelmez; çoğu model yüzme veya duş gibi tam daldırma senaryoları için tasarlanmamıştır.",
        },
        {
          question: "Her marka ve modelde suya dayanıklılık var mı?",
          answer:
            "Hayır. IP koruma sınıfı marka ve modele göre değişir; net koruma seviyesi ürün özellikleri ve teslim sırasında paylaşılır.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Cihaz ıslandığında ne yapılmalı?",
          answer:
            "Cihaz yumuşak bir bezle hemen kurulanmalı ve mümkünse bir kurutma kutusuna yerleştirilmelidir; şüpheli bir durumda teknik kontrol için başvurabilirsiniz.",
        },
        {
          question: "Kurutma kutusu kullanmak zorunlu mu?",
          answer:
            "Zorunlu değildir; ancak özellikle yoğun terleme veya nemli iklimde yaşayan kullanıcılar için düzenli kurutma, cihaz ömrünü uzatmaya yardımcı olur.",
        },
        {
          question: "IP koruma zamanla azalır mı?",
          answer:
            "Evet, contalar ve kaplamalar yıllar içinde aşınabilir; bu nedenle düzenli periyodik teknik kontrol önerilir.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "SGK, suya dayanıklı işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği IP koruma sınıfına göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan kullanıcılar suya dayanıklı cihazlar için de bu destekten yararlanabilir.",
        },
        {
          question: "Suya dayanıklı işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, cihaz tipi (BTE/RIC veya ITE), teknoloji seviyesi ve IP koruma sınıfı belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#0d9488",
  accentColorBadgeBg: "rgb(13 148 136 / 0.08)",
  accentColorBadgeBorder: "rgb(13 148 136 / 0.35)",
  accentColorBadgeText: "#0f766e",
};
