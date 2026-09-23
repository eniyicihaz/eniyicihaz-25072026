// FAQ hub for the /isitme-cihazlari/kulak-ici-ite page. Renders through
// the shared BrandPageFaq component. FAQPage schema is generated inside
// the component itself from these items. The price question never states
// a figure — only the variables that shape price — same restraint every
// brand/category page's faq.ts uses.

import { contactConfig } from "../../config";
import type { BrandPageFaqContent } from "../../components/brand-page/BrandPageFaq/BrandPageFaq.astro";

export const kulakIciFaq: BrandPageFaqContent = {
  badge: "SIK SORULAN SORULAR",
  heading: "Kulak İçi (ITE) Hakkında Merak Edilenler",
  intro: "Kulak içi işitme cihazları, alt tipleri ve uygunluk kriterleri hakkında en çok sorulan sorular.",
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
          question: "Kulak içi işitme cihazı (ITE) nedir?",
          answer:
            "Elektronik bileşenlerin tamamının, kulağınızın şekline özel üretilen tek parça bir kabuk içinde toplandığı, doğrudan kulak kanalına veya kulak kepçesinin iç bölümüne yerleşen işitme cihazı tipidir.",
        },
        {
          question: "Kulak içi cihaz mı, kulak arkası cihaz mı daha uygundur?",
          answer:
            "Kesin olarak biri diğerinden üstün değildir; hangisinin uygun olacağı işitme kaybınızın derecesine, kulak kanalı yapınıza, el becerinize ve günlük yaşam tarzınıza göre değişir. Detaylı karşılaştırma için bu sayfadaki tabloyu inceleyebilirsiniz.",
        },
      ],
    },
    {
      label: "Uygunluk",
      items: [
        {
          question: "Kulak içi cihaz kimlere uygundur?",
          answer:
            "Görünürlüğü öncelik gören, hafif ile orta-ileri derece işitme kaybı yaşayan ve kulak kanalı yapısı uygun olan yetişkin kullanıcılar için sıkça değerlendirilir; kesin uygunluk bir odyometrist tarafından belirlenir.",
        },
        {
          question: "Kulak içi cihaz her işitme kaybında kullanılabilir mi?",
          answer:
            "Hayır. Kulak içi cihazlar genellikle hafif ile orta-ileri derece kayıplarla sınırlıdır; çok ileri derece kayıplarda daha güçlü amplifikasyon sunan kulak arkası (BTE) cihazlar sıklıkla tercih edilir.",
        },
        {
          question: "Kulak içi cihaz çocuklar için uygun mudur?",
          answer:
            "Kulak içi cihazlar kişiye özel, sabit bir kalıpla üretildiğinden büyümekte olan kulak kanalına uyum sağlamaz; bu nedenle çocuklarda genellikle kulak arkası (BTE) cihazlar tercih edilir.",
        },
      ],
    },
    {
      label: "Kullanım ve Bakım",
      items: [
        {
          question: "Kulak içi cihazlarda Bluetooth olur mu?",
          answer:
            "Evet, günümüz kulak içi modellerinin çoğunda Bluetooth bağlantı desteklenir; ancak en küçük alt tiplerde (IIC gibi) gövde boyutu nedeniyle bu özellik model bazında değişebilir.",
        },
        {
          question: "Kulak içi cihaz şarjlı olur mu?",
          answer:
            "Evet, bazı üreticiler şarj edilebilir pilli kulak içi modeller de sunar; ancak gövde küçüklüğü nedeniyle bu seçenek her marka ve her alt tipte bulunmayabilir.",
        },
        {
          question: "Kulak kiri kulak içi cihazı etkiler mi?",
          answer:
            "Evet, kulak içi cihazlar kulak kanalının içinde konumlandığı için kulak kirinden kulak arkası cihazlara kıyasla daha fazla etkilenebilir; çoğu modelde bunu azaltmak için değiştirilebilir kulak kiri filtreleri bulunur.",
        },
      ],
    },
    {
      label: "SGK ve Fiyat",
      items: [
        {
          question: "Kulak içi cihaz bakımı nasıl yapılır?",
          answer:
            "Düzenli olarak yumuşak bir bezle silinmesi, kulak kiri filtresinin üreticinin önerdiği sıklıkta kontrol edilip değiştirilmesi ve nemden korunması önerilir; detaylı bakım talimatları cihazınızla birlikte size teslim edilir.",
        },
        {
          question: "SGK, kulak içi işitme cihazlarını karşılıyor mu?",
          answer:
            "SGK desteği cihaz tipine göre değil, kullanıcının sağlık raporu ve uygunluk kriterlerine göre değerlendirilir. Gerekli şartları sağlayan kullanıcılar kulak içi cihazlar için de bu destekten yararlanabilir.",
        },
        {
          question: "Kulak içi işitme cihazı fiyatını ne belirler?",
          answer:
            "Fiyatı; seçilen marka ve model, alt tip (ITE, ITC, CIC veya IIC), teknoloji seviyesi ve şarjlı olup olmaması belirler. Net fiyat, ihtiyaç değerlendirmesi sonrasında netleşir.",
        },
      ],
    },
  ],
  accentColor: "#7c3aed",
  accentColorBadgeBg: "rgb(124 58 237 / 0.08)",
  accentColorBadgeBorder: "rgb(124 58 237 / 0.35)",
  accentColorBadgeText: "#6d28d9",
};
